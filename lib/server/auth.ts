import { NextRequest } from 'next/server';

export function checkDashboardAuth(request: NextRequest): boolean {
  const password = process.env.DASHBOARD_PASSWORD;
  if (!password) return false;
  const auth = request.headers.get('authorization');
  return auth === `Bearer ${password}`;
}
