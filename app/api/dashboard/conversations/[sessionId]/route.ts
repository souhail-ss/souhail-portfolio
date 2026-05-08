import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { ChatMessage } from '@/lib/db/models';
import { checkDashboardAuth } from '@/lib/server/auth';

export async function GET(request: NextRequest, { params }: { params: { sessionId: string } }) {
  if (!checkDashboardAuth(request)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();

  const messages = await ChatMessage.find({ sessionId: params.sessionId })
    .sort({ createdAt: 1 })
    .lean();

  return Response.json({ messages });
}
