import { TokenUsage } from '../../db/models';
import { ProviderName, PROVIDER_CONFIGS } from './config';

export function getTodayParis(): Date {
  const now = new Date();
  const parisDate = now.toLocaleDateString('en-CA', { timeZone: 'Europe/Paris' });
  return new Date(parisDate + 'T00:00:00.000Z');
}

interface QuotaStatus {
  available: boolean;
  requestsUsed: number;
  tokensUsed: number;
  requestsLimit: number;
  tokensLimit: number;
  percentRequests: number;
  percentTokens: number;
}

const minuteCache: Map<string, { requests: number; tokens: number; timestamp: number }> = new Map();

function getMinuteKey(provider: ProviderName): string {
  const now = new Date();
  return `${provider}-${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-${now.getHours()}-${now.getMinutes()}`;
}

export function recordMinuteUsage(provider: ProviderName, tokens: number): void {
  const key = getMinuteKey(provider);
  const current = minuteCache.get(key) || { requests: 0, tokens: 0, timestamp: Date.now() };
  current.requests += 1;
  current.tokens += tokens;
  minuteCache.set(key, current);

  const twoMinutesAgo = Date.now() - 2 * 60 * 1000;
  Array.from(minuteCache.entries()).forEach(([k, v]) => {
    if (v.timestamp < twoMinutesAgo) minuteCache.delete(k);
  });
}

export function checkMinuteLimit(provider: ProviderName): { allowed: boolean; rpm: number; tpm: number } {
  const config = PROVIDER_CONFIGS[provider];
  const key = getMinuteKey(provider);
  const current = minuteCache.get(key) || { requests: 0, tokens: 0, timestamp: Date.now() };

  const rpmAllowed = config.limits.rpm === 0 || current.requests < config.limits.rpm;
  const tpmAllowed = config.limits.tpm === 0 || current.tokens < config.limits.tpm;

  return { allowed: rpmAllowed && tpmAllowed, rpm: current.requests, tpm: current.tokens };
}

export async function checkDailyQuota(provider: ProviderName): Promise<QuotaStatus> {
  const config = PROVIDER_CONFIGS[provider];
  const today = getTodayParis();

  const usage = await TokenUsage.findOne({ date: today, provider });

  const requestsUsed = usage?.requests || 0;
  const tokensUsed = (usage?.tokensIn || 0) + (usage?.tokensOut || 0);
  const requestsLimit = config.limits.rpd;
  const tokensLimit = config.limits.tpd;

  const requestsOk = requestsLimit === 0 || requestsUsed < requestsLimit;
  const tokensOk = tokensLimit === 0 || tokensUsed < tokensLimit;

  return {
    available: requestsOk && tokensOk,
    requestsUsed,
    tokensUsed,
    requestsLimit,
    tokensLimit,
    percentRequests: requestsLimit > 0 ? (requestsUsed / requestsLimit) * 100 : 0,
    percentTokens: tokensLimit > 0 ? (tokensUsed / tokensLimit) * 100 : 0,
  };
}

export async function getProviderWithQuota(
  preferredProvider: ProviderName,
  fallbackOrder: ProviderName[],
  availableProviders: ProviderName[]
): Promise<{ provider: ProviderName; quotaStatus: QuotaStatus } | null> {
  const providerOrder: ProviderName[] = [preferredProvider];
  for (const p of fallbackOrder) {
    if (!providerOrder.includes(p)) providerOrder.push(p);
  }

  for (const provider of providerOrder) {
    if (!availableProviders.includes(provider)) continue;

    const minuteCheck = checkMinuteLimit(provider);
    if (!minuteCheck.allowed) continue;

    const quotaStatus = await checkDailyQuota(provider);
    if (quotaStatus.available) return { provider, quotaStatus };
  }

  return null;
}

export async function getAllProvidersQuota(providers: ProviderName[]): Promise<Record<ProviderName, QuotaStatus>> {
  const result: Partial<Record<ProviderName, QuotaStatus>> = {};
  await Promise.all(providers.map(async (provider) => {
    result[provider] = await checkDailyQuota(provider);
  }));
  return result as Record<ProviderName, QuotaStatus>;
}
