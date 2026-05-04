import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { ChatSession, ChatMessage, TokenUsage, ProviderError, getSettings } from '@/lib/db/models';
import { checkRateLimit } from '@/lib/server/rate-limit';
import { generateChatResponse } from '@/lib/ai/chat-service';
import { handleCors, jsonResponse, errorResponse } from '@/lib/server/cors';
import { getTodayParis } from '@/lib/ai/providers/quota';
import { getGeoFromIP, parseUserAgent } from '@/lib/server/geo';

export async function OPTIONS(request: NextRequest) {
  return handleCors(request) || jsonResponse({});
}

export async function POST(request: NextRequest) {
  const corsResponse = handleCors(request);
  if (corsResponse) return corsResponse;

  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ||
               request.headers.get('x-real-ip') ||
               'unknown';

    const rateLimitResult = checkRateLimit(ip);
    if (!rateLimitResult.allowed) {
      return jsonResponse({
        error: rateLimitResult.reason,
        retryAfterSeconds: rateLimitResult.retryAfterSeconds,
      }, 429);
    }

    const body = await request.json();
    const { message, sessionId } = body;

    if (!message || typeof message !== 'string') {
      return errorResponse('Message is required');
    }

    await connectDB();

    const settings = await getSettings();

    let session;
    if (sessionId) {
      session = await ChatSession.findById(sessionId);
    }

    const userAgent = request.headers.get('user-agent') || undefined;

    if (!session) {
      const [geoInfo, uaInfo] = await Promise.all([
        getGeoFromIP(ip),
        Promise.resolve(parseUserAgent(userAgent)),
      ]);

      session = await ChatSession.create({
        ip,
        userAgent,
        country: geoInfo?.country,
        countryCode: geoInfo?.countryCode,
        city: geoInfo?.city,
        region: geoInfo?.region,
        device: uaInfo.device,
        browser: uaInfo.browser,
      });
    } else {
      session.lastActivity = new Date();
      await session.save();
    }

    const previousMessages = await ChatMessage.find({ sessionId: session._id.toString() })
      .sort({ createdAt: 1 })
      .limit(6);

    const conversationHistory = previousMessages.map((msg) => ({
      role: msg.role as 'user' | 'assistant',
      content: msg.content,
    }));

    const { response, tokensIn, tokensOut, provider, errors } = await generateChatResponse(
      message,
      conversationHistory,
      settings.activeProvider,
      settings.fallbackOrder
    );

    if (errors.length > 0) {
      await Promise.all(
        errors.map((err) =>
          ProviderError.create({
            provider: err.provider,
            errorType: err.errorType,
            errorMessage: err.error,
            fallbackUsed: provider,
          })
        )
      );
    }

    await ChatMessage.create({
      sessionId: session._id.toString(),
      role: 'user',
      content: message,
      tokensIn: 0,
      tokensOut: 0,
    });

    await ChatMessage.create({
      sessionId: session._id.toString(),
      role: 'assistant',
      content: response,
      tokensIn,
      tokensOut,
      provider,
    });

    const today = getTodayParis();
    await TokenUsage.findOneAndUpdate(
      { date: today, provider },
      { $inc: { tokensIn, tokensOut, requests: 1 } },
      { upsert: true }
    );

    return jsonResponse({ message: response, sessionId: session._id.toString(), provider });
  } catch (error) {
    console.error('Chat error:', error);
    return errorResponse('Une erreur est survenue', 500);
  }
}
