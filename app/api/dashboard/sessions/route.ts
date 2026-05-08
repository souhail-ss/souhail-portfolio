import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { ChatSession, ChatMessage } from '@/lib/db/models';
import { checkDashboardAuth } from '@/lib/server/auth';

export async function GET(request: NextRequest) {
  if (!checkDashboardAuth(request)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();

  const { searchParams } = new URL(request.url);
  const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
  const limit = 20;
  const skip = (page - 1) * limit;

  const [sessions, total] = await Promise.all([
    ChatSession.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
    ChatSession.countDocuments(),
  ]);

  const sessionIds = sessions.map((s) => (s._id as { toString(): string }).toString());

  const messageCounts = await ChatMessage.aggregate([
    { $match: { sessionId: { $in: sessionIds }, role: 'user' } },
    { $group: { _id: '$sessionId', count: { $sum: 1 } } },
  ]);

  const countMap: Record<string, number> = Object.fromEntries(messageCounts.map((m) => [m._id, m.count]));

  const enriched = sessions.map((s) => ({
    ...s,
    messageCount: countMap[(s._id as { toString(): string }).toString()] || 0,
  }));

  return Response.json({ sessions: enriched, total, page, pages: Math.ceil(total / limit) });
}
