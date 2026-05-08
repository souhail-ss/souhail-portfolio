'use client';

import React, { useState, useEffect, useCallback } from 'react';

// ─── Types ──────────────────────────────────────────────────────────────────

interface Overview {
  totalPageViews: number;
  todayPageViews: number;
  totalSessions: number;
  todaySessions: number;
  totalMessages: number;
  todayMessages: number;
  uniqueVisitors: number;
}

interface CountStat { _id: string; count: number }
interface TokenStat { _id: string; requests: number; tokensIn: number; tokensOut: number }

interface Stats {
  overview: Overview;
  topCountries: CountStat[];
  deviceStats: CountStat[];
  browserStats: CountStat[];
  dailyViews: CountStat[];
  dailySessions: CountStat[];
  tokenStats: TokenStat[];
}

interface Session {
  _id: string;
  ip: string;
  country?: string;
  city?: string;
  device?: string;
  browser?: string;
  messageCount: number;
  createdAt: string;
  lastActivity: string;
}

interface Message {
  _id: string;
  role: 'user' | 'assistant';
  content: string;
  provider?: string;
  tokensIn: number;
  tokensOut: number;
  createdAt: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getLast14Days(): string[] {
  const days: string[] = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push(d.toISOString().slice(0, 10));
  }
  return days;
}

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit', hour: '2-digit', minute: '2-digit' });
}

function fmtNum(n: number) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return n.toString();
}

// ─── Shared styles ───────────────────────────────────────────────────────────

const card: React.CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.10)',
  borderRadius: '12px',
  padding: '20px 24px',
};

const sectionLabel: React.CSSProperties = {
  color: 'rgba(255,255,255,0.40)',
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  marginBottom: '16px',
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCard({ label, value, today }: { label: string; value: number; today?: number }) {
  return (
    <div style={card}>
      <div style={{ color: 'rgba(255,255,255,0.50)', fontSize: '12px', marginBottom: '10px' }}>{label}</div>
      <div style={{ color: '#fff', fontSize: '30px', fontWeight: '700', lineHeight: 1 }}>{fmtNum(value)}</div>
      {today !== undefined && (
        <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '12px', marginTop: '8px' }}>
          <span style={{ color: today > 0 ? '#6366f1' : 'rgba(255,255,255,0.35)' }}>+{today}</span> today
        </div>
      )}
    </div>
  );
}

function HBar({ data, title }: { data: CountStat[]; title: string }) {
  const max = Math.max(...data.map((d) => d.count), 1);
  return (
    <div style={card}>
      <div style={sectionLabel}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {data.map((d) => (
          <div key={d._id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', width: '96px', flexShrink: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {d._id || 'Unknown'}
            </span>
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: '3px', height: '5px', overflow: 'hidden' }}>
              <div style={{ width: `${(d.count / max) * 100}%`, height: '100%', background: '#6366f1', borderRadius: '3px', transition: 'width 0.6s ease' }} />
            </div>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '12px', width: '24px', textAlign: 'right', flexShrink: 0 }}>{d.count}</span>
          </div>
        ))}
        {data.length === 0 && <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: '13px' }}>No data yet</div>}
      </div>
    </div>
  );
}

function ActivityChart({ dailyViews, dailySessions }: { dailyViews: CountStat[]; dailySessions: CountStat[] }) {
  const days = getLast14Days();
  const maxVal = Math.max(
    ...days.map((d) => dailyViews.find((v) => v._id === d)?.count || 0),
    ...days.map((d) => dailySessions.find((v) => v._id === d)?.count || 0),
    1
  );

  return (
    <div style={card}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={sectionLabel}>Activity — last 14 days</div>
        <div style={{ display: 'flex', gap: '16px' }}>
          {[['#6366f1', 'Page Views'], ['rgba(99,102,241,0.35)', 'Chat Sessions']].map(([color, label]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '2px', background: color }} />
              <span style={{ color: 'rgba(255,255,255,0.40)', fontSize: '11px' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '72px' }}>
        {days.map((day) => {
          const views = dailyViews.find((v) => v._id === day)?.count || 0;
          const sess = dailySessions.find((v) => v._id === day)?.count || 0;
          const vH = Math.max((views / maxVal) * 72, views > 0 ? 3 : 0);
          const sH = Math.max((sess / maxVal) * 72, sess > 0 ? 3 : 0);
          return (
            <div key={day} title={`${day}: ${views} views, ${sess} sessions`} style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '1px', height: '72px', cursor: 'default' }}>
              <div style={{ flex: 1, height: `${vH}px`, background: '#6366f1', borderRadius: '2px 2px 0 0', transition: 'height 0.5s ease' }} />
              <div style={{ flex: 1, height: `${sH}px`, background: 'rgba(99,102,241,0.35)', borderRadius: '2px 2px 0 0', transition: 'height 0.5s ease' }} />
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', gap: '3px', marginTop: '6px' }}>
        {days.map((day, i) => (
          <div key={day} style={{ flex: 1, textAlign: 'center', color: 'rgba(255,255,255,0.20)', fontSize: '9px' }}>
            {i % 3 === 0 ? day.slice(5) : ''}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [stats, setStats] = useState<Stats | null>(null);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [expandedSession, setExpandedSession] = useState<string | null>(null);
  const [conversations, setConversations] = useState<Record<string, Message[]>>({});

  const getPwd = () => (typeof window !== 'undefined' ? sessionStorage.getItem('dashboard_pwd') || '' : '');

  const fetchStats = useCallback(async (pwd: string) => {
    const res = await fetch('/api/dashboard/stats', { headers: { Authorization: `Bearer ${pwd}` } });
    if (!res.ok) throw new Error('unauthorized');
    return res.json() as Promise<Stats>;
  }, []);

  const fetchSessions = useCallback(async (pwd: string, pg: number) => {
    const res = await fetch(`/api/dashboard/sessions?page=${pg}`, { headers: { Authorization: `Bearer ${pwd}` } });
    if (!res.ok) throw new Error('unauthorized');
    return res.json() as Promise<{ sessions: Session[]; total: number; pages: number }>;
  }, []);

  const loadData = useCallback(async (pwd: string, pg: number, silent = false) => {
    if (!silent) setLoading(true);
    else setRefreshing(true);
    try {
      const [statsData, sessData] = await Promise.all([fetchStats(pwd), fetchSessions(pwd, pg)]);
      setStats(statsData);
      setSessions(sessData.sessions);
      setTotalPages(sessData.pages);
    } catch {
      sessionStorage.removeItem('dashboard_pwd');
      setAuthenticated(false);
      setAuthError('Session expired. Please sign in again.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [fetchStats, fetchSessions]);

  useEffect(() => {
    const stored = sessionStorage.getItem('dashboard_pwd');
    if (stored) setAuthenticated(true);
  }, []);

  useEffect(() => {
    if (authenticated) loadData(getPwd(), page);
  }, [authenticated, page]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAuthError('');
    try {
      const res = await fetch('/api/dashboard/stats', { headers: { Authorization: `Bearer ${password}` } });
      if (!res.ok) throw new Error('wrong password');
      const statsData = await res.json() as Stats;
      const sessRes = await fetch('/api/dashboard/sessions?page=1', { headers: { Authorization: `Bearer ${password}` } });
      const sessData = await sessRes.json() as { sessions: Session[]; total: number; pages: number };
      sessionStorage.setItem('dashboard_pwd', password);
      setStats(statsData);
      setSessions(sessData.sessions);
      setTotalPages(sessData.pages);
      setAuthenticated(true);
    } catch {
      setAuthError('Incorrect password.');
    } finally {
      setLoading(false);
    }
  };

  const toggleConversation = async (sessionId: string) => {
    if (expandedSession === sessionId) { setExpandedSession(null); return; }
    setExpandedSession(sessionId);
    if (conversations[sessionId]) return;
    const pwd = getPwd();
    const res = await fetch(`/api/dashboard/conversations/${sessionId}`, { headers: { Authorization: `Bearer ${pwd}` } });
    const data = await res.json() as { messages: Message[] };
    setConversations((prev) => ({ ...prev, [sessionId]: data.messages }));
  };

  const handleLogout = () => {
    sessionStorage.removeItem('dashboard_pwd');
    setAuthenticated(false);
    setStats(null);
    setSessions([]);
    setPassword('');
  };

  // ── Auth Gate ──────────────────────────────────────────────────────────────
  if (!authenticated) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
        <form onSubmit={handleLogin} style={{ width: '320px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>Analytics</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.40)' }}>souhailziyadi.vercel.app</div>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Dashboard password"
            autoFocus
            style={{ width: '100%', padding: '12px 14px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', color: '#fff', fontSize: '14px', outline: 'none', marginBottom: '10px', boxSizing: 'border-box' }}
          />
          {authError && <div style={{ color: '#f87171', fontSize: '12px', marginBottom: '10px', textAlign: 'center' }}>{authError}</div>}
          <button
            type="submit"
            disabled={loading || !password}
            style={{ width: '100%', padding: '11px', background: '#6366f1', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '14px', fontWeight: '600', cursor: loading || !password ? 'not-allowed' : 'pointer', opacity: loading || !password ? 0.6 : 1, transition: 'opacity 0.15s' }}
          >
            {loading ? 'Verifying…' : 'Sign In'}
          </button>
        </form>
      </div>
    );
  }

  // ── Dashboard ──────────────────────────────────────────────────────────────
  const s = stats;

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff', fontFamily: 'var(--font-inter), Inter, sans-serif', padding: '32px max(24px, calc((100vw - 1160px) / 2))' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '20px', fontWeight: '700', margin: 0 }}>Analytics</h1>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', marginTop: '3px' }}>souhailziyadi.vercel.app</div>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {refreshing && <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>Refreshing…</span>}
          <button
            onClick={() => loadData(getPwd(), page, true)}
            style={{ padding: '7px 14px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: '7px', color: 'rgba(255,255,255,0.65)', fontSize: '13px', cursor: 'pointer' }}
          >
            Refresh
          </button>
          <button
            onClick={handleLogout}
            style={{ padding: '7px 14px', background: 'transparent', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '7px', color: 'rgba(255,255,255,0.35)', fontSize: '13px', cursor: 'pointer' }}
          >
            Sign out
          </button>
        </div>
      </div>

      {loading && !s && (
        <div style={{ textAlign: 'center', padding: '80px', color: 'rgba(255,255,255,0.25)' }}>Loading…</div>
      )}

      {s && (
        <>
          {/* Overview cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '12px', marginBottom: '20px' }}>
            <StatCard label="Page Views" value={s.overview.totalPageViews} today={s.overview.todayPageViews} />
            <StatCard label="Unique Visitors" value={s.overview.uniqueVisitors} />
            <StatCard label="Chat Sessions" value={s.overview.totalSessions} today={s.overview.todaySessions} />
            <StatCard label="Messages Sent" value={s.overview.totalMessages} today={s.overview.todayMessages} />
          </div>

          {/* Charts row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
            <HBar data={s.topCountries} title="Top Countries" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <HBar data={s.deviceStats} title="Devices" />
              <HBar data={s.browserStats} title="Browsers" />
            </div>
          </div>

          {/* Activity chart */}
          <div style={{ marginBottom: '12px' }}>
            <ActivityChart dailyViews={s.dailyViews} dailySessions={s.dailySessions} />
          </div>

          {/* Token usage */}
          {s.tokenStats.length > 0 && (
            <div style={{ ...card, marginBottom: '12px' }}>
              <div style={sectionLabel}>AI Provider Usage</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px' }}>
                {s.tokenStats.map((t) => (
                  <div key={t._id} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '8px', padding: '12px 14px' }}>
                    <div style={{ color: '#6366f1', fontSize: '13px', fontWeight: '600', marginBottom: '6px' }}>{t._id}</div>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '12px' }}>{fmtNum(t.requests)} requests</div>
                    <div style={{ color: 'rgba(255,255,255,0.30)', fontSize: '12px' }}>{fmtNum(t.tokensIn + t.tokensOut)} tokens</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sessions table */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ padding: '18px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={sectionLabel}>Chat Sessions</div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    {['Date', 'Location', 'Device', 'Browser', 'Msgs', ''].map((h) => (
                      <th key={h} style={{ padding: '10px 20px', textAlign: 'left', color: 'rgba(255,255,255,0.28)', fontSize: '11px', fontWeight: '500', letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sessions.map((session) => (
                    <React.Fragment key={session._id}>
                      <tr
                        onClick={() => toggleConversation(session._id)}
                        style={{ cursor: 'pointer', borderBottom: expandedSession === session._id ? 'none' : '1px solid rgba(255,255,255,0.04)', transition: 'background 0.15s' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLTableRowElement).style.background = 'rgba(255,255,255,0.025)'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLTableRowElement).style.background = 'transparent'; }}
                      >
                        <td style={{ padding: '13px 20px', color: 'rgba(255,255,255,0.50)', fontSize: '12px', whiteSpace: 'nowrap' }}>{fmt(session.createdAt)}</td>
                        <td style={{ padding: '13px 20px', color: 'rgba(255,255,255,0.70)', fontSize: '13px' }}>
                          {[session.city, session.country].filter(Boolean).join(', ') || '—'}
                        </td>
                        <td style={{ padding: '13px 20px', color: 'rgba(255,255,255,0.50)', fontSize: '13px' }}>{session.device || '—'}</td>
                        <td style={{ padding: '13px 20px', color: 'rgba(255,255,255,0.50)', fontSize: '13px' }}>{session.browser || '—'}</td>
                        <td style={{ padding: '13px 20px' }}>
                          <span style={{ background: session.messageCount > 0 ? 'rgba(99,102,241,0.15)' : 'rgba(255,255,255,0.06)', color: session.messageCount > 0 ? '#6366f1' : 'rgba(255,255,255,0.30)', fontSize: '12px', fontWeight: '600', padding: '2px 8px', borderRadius: '10px' }}>
                            {session.messageCount}
                          </span>
                        </td>
                        <td style={{ padding: '13px 20px', fontSize: '12px', color: '#6366f1', whiteSpace: 'nowrap' }}>
                          {session.messageCount > 0 ? (expandedSession === session._id ? '▲ hide' : '▼ view') : ''}
                        </td>
                      </tr>

                      {expandedSession === session._id && (
                        <tr>
                          <td colSpan={6} style={{ padding: '0 20px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                            <div style={{ background: 'rgba(0,0,0,0.25)', borderRadius: '8px', padding: '16px', maxHeight: '420px', overflowY: 'auto' }}>
                              {!conversations[session._id] ? (
                                <div style={{ color: 'rgba(255,255,255,0.30)', fontSize: '13px', textAlign: 'center', padding: '24px' }}>Loading…</div>
                              ) : conversations[session._id].length === 0 ? (
                                <div style={{ color: 'rgba(255,255,255,0.30)', fontSize: '13px', textAlign: 'center', padding: '24px' }}>No messages</div>
                              ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                  {conversations[session._id].map((msg) => (
                                    <div key={msg._id} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', flexDirection: msg.role === 'user' ? 'row-reverse' : 'row' }}>
                                      <div style={{ width: '26px', height: '26px', borderRadius: '50%', flexShrink: 0, background: msg.role === 'user' ? 'rgba(99,102,241,0.25)' : 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: msg.role === 'user' ? '#6366f1' : 'rgba(255,255,255,0.40)', fontWeight: '600' }}>
                                        {msg.role === 'user' ? 'U' : 'AI'}
                                      </div>
                                      <div style={{ maxWidth: '78%', background: msg.role === 'user' ? 'rgba(99,102,241,0.12)' : 'rgba(255,255,255,0.05)', borderRadius: msg.role === 'user' ? '10px 3px 10px 10px' : '3px 10px 10px 10px', padding: '8px 12px', fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.55', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                                        {msg.content}
                                        {msg.provider && msg.role === 'assistant' && (
                                          <div style={{ marginTop: '5px', fontSize: '10px', color: 'rgba(255,255,255,0.20)' }}>via {msg.provider}</div>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}

                  {sessions.length === 0 && (
                    <tr>
                      <td colSpan={6} style={{ padding: '40px', textAlign: 'center', color: 'rgba(255,255,255,0.25)', fontSize: '13px' }}>
                        No sessions yet
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div style={{ padding: '14px 20px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
                  <button
                    key={pg}
                    onClick={() => setPage(pg)}
                    style={{ width: '30px', height: '30px', borderRadius: '6px', background: pg === page ? '#6366f1' : 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: pg === page ? '#fff' : 'rgba(255,255,255,0.45)', fontSize: '12px', cursor: 'pointer', transition: 'background 0.15s' }}
                  >
                    {pg}
                  </button>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
