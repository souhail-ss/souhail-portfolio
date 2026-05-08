import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { ChatSession, ChatMessage, TokenUsage, PageView } from '@/lib/db/models';
import { checkDashboardAuth } from '@/lib/server/auth';

export async function GET(request: NextRequest) {
  if (!checkDashboardAuth(request)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();

  const now = new Date();
  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);
  const fourteenDaysAgo = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000);

  const [
    totalPageViews,
    todayPageViews,
    totalSessions,
    todaySessions,
    totalMessages,
    todayMessages,
    uniqueIPs,
    topCountries,
    deviceStats,
    browserStats,
    dailyViews,
    dailySessions,
    tokenStats,
  ] = await Promise.all([
    PageView.countDocuments(),
    PageView.countDocuments({ createdAt: { $gte: todayStart } }),
    ChatSession.countDocuments(),
    ChatSession.countDocuments({ createdAt: { $gte: todayStart } }),
    ChatMessage.countDocuments({ role: 'user' }),
    ChatMessage.countDocuments({ role: 'user', createdAt: { $gte: todayStart } }),
    PageView.distinct('ip').then((ips: string[]) => ips.length),
    PageView.aggregate([
      { $match: { country: { $exists: true, $ne: null } } },
      { $group: { _id: '$country', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 8 },
    ]),
    PageView.aggregate([
      { $group: { _id: '$device', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]),
    PageView.aggregate([
      { $group: { _id: '$browser', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]),
    PageView.aggregate([
      { $match: { createdAt: { $gte: fourteenDaysAgo } } },
      { $group: { _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } }, count: { $sum: 1 } } },
      { $sort: { _id: 1 } },
    ]),
    ChatSession.aggregate([
      { $match: { createdAt: { $gte: fourteenDaysAgo } } },
      { $group: { _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } }, count: { $sum: 1 } } },
      { $sort: { _id: 1 } },
    ]),
    TokenUsage.aggregate([
      { $group: { _id: '$provider', tokensIn: { $sum: '$tokensIn' }, tokensOut: { $sum: '$tokensOut' }, requests: { $sum: '$requests' } } },
      { $sort: { requests: -1 } },
    ]),
  ]);

  return Response.json({
    overview: { totalPageViews, todayPageViews, totalSessions, todaySessions, totalMessages, todayMessages, uniqueVisitors: uniqueIPs },
    topCountries,
    deviceStats,
    browserStats,
    dailyViews,
    dailySessions,
    tokenStats,
  });
}
