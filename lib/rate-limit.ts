interface RateLimitEntry {
  count: number;
  resetTime: number;
}

interface DailyLimitEntry {
  count: number;
  resetDate: string;
}

const minuteLimits = new Map<string, RateLimitEntry>();
const dailyLimits = new Map<string, DailyLimitEntry>();

const MAX_PER_MINUTE = 10;
const MAX_PER_DAY = 50;

export interface RateLimitResult {
  allowed: boolean;
  reason?: string;
  retryAfterSeconds?: number;
  remainingMinute: number;
  remainingDay: number;
}

export function checkRateLimit(ip: string): RateLimitResult {
  const now = Date.now();
  const today = new Date().toISOString().split('T')[0];

  let minuteEntry = minuteLimits.get(ip);
  if (!minuteEntry || now > minuteEntry.resetTime) {
    minuteEntry = { count: 0, resetTime: now + 60000 };
    minuteLimits.set(ip, minuteEntry);
  }

  let dailyEntry = dailyLimits.get(ip);
  if (!dailyEntry || dailyEntry.resetDate !== today) {
    dailyEntry = { count: 0, resetDate: today };
    dailyLimits.set(ip, dailyEntry);
  }

  const remainingMinute = Math.max(0, MAX_PER_MINUTE - minuteEntry.count);
  const remainingDay = Math.max(0, MAX_PER_DAY - dailyEntry.count);

  if (dailyEntry.count >= MAX_PER_DAY) {
    return {
      allowed: false,
      reason: 'Limite journaliere atteinte. Revenez demain !',
      remainingMinute,
      remainingDay: 0,
    };
  }

  if (minuteEntry.count >= MAX_PER_MINUTE) {
    const retryAfterSeconds = Math.ceil((minuteEntry.resetTime - now) / 1000);
    return {
      allowed: false,
      reason: `Trop de requetes. Reessayez dans ${retryAfterSeconds} secondes.`,
      retryAfterSeconds,
      remainingMinute: 0,
      remainingDay,
    };
  }

  minuteEntry.count++;
  dailyEntry.count++;

  return {
    allowed: true,
    remainingMinute: MAX_PER_MINUTE - minuteEntry.count,
    remainingDay: MAX_PER_DAY - dailyEntry.count,
  };
}
