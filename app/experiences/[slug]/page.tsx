import { getExperienceBySlug, experiences } from '@/lib/experiences';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ExperienceTabs from '@/components/organisms/ExperienceTabs/ExperienceTabs';

export async function generateStaticParams() {
  return experiences.map((exp) => ({ slug: exp.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const exp = getExperienceBySlug(params.slug);
  if (!exp) return {};
  return { title: `${exp.company} — ${exp.role} | Souhail Ziyadi` };
}

export default function ExperiencePage({ params }: { params: { slug: string } }) {
  const exp = getExperienceBySlug(params.slug);
  if (!exp) notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="fixed inset-x-0 top-0 h-64 bg-gradient-to-b from-[#4338ca]/10 to-transparent pointer-events-none -z-0" />

      <div className="relative max-w-4xl mx-auto px-6 py-20">
        <Link
          href="/#experiences"
          className="inline-flex items-center gap-2 text-white/40 hover:text-[#6366f1] transition-colors duration-200 mb-14 text-sm group"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="group-hover:-translate-x-1 transition-transform duration-200">
            <path d="M19 12H5" />
            <polyline points="12 5 5 12 12 19" />
          </svg>
          Retour aux expériences
        </Link>

        {/* Header */}
        <div className="mb-4 space-y-3">
          <p className="text-[#6366f1] text-xs font-bold uppercase tracking-[0.2em]">Expérience professionnelle</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">{exp!.company}</h1>
          <p className="text-[#6366f1] text-xl font-semibold">{exp!.role}</p>
          <p className="text-white/40 text-sm">{exp!.type}</p>
        </div>

        {/* Period & Location */}
        <div className="flex flex-wrap gap-5 text-sm text-white/40 mb-8">
          <span className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {exp!.period}
          </span>
          {exp!.location && (
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {exp!.location}
            </span>
          )}
        </div>

        {/* Tabbed Content */}
        <ExperienceTabs
          description={exp!.description}
          missions={exp!.bullets}
          skills={exp!.skills}
        />
      </div>
    </main>
  );
}
