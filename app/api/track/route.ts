import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { PageView } from '@/lib/db/models';
import { getGeoFromIP, parseUserAgent } from '@/lib/server/geo';

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      'unknown';

    const userAgent = request.headers.get('user-agent') || undefined;
    const body = await request.json();
    const { path, referrer } = body as { path?: string; referrer?: string };

    await connectDB();

    const [geoInfo, uaInfo] = await Promise.all([
      getGeoFromIP(ip),
      Promise.resolve(parseUserAgent(userAgent)),
    ]);

    await PageView.create({
      ip,
      path: path || '/',
      country: geoInfo?.country,
      countryCode: geoInfo?.countryCode,
      city: geoInfo?.city,
      device: uaInfo.device,
      browser: uaInfo.browser,
      referrer: referrer || undefined,
    });

    return new Response('ok', { status: 200 });
  } catch {
    return new Response('error', { status: 500 });
  }
}
