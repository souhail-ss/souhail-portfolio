import { getProjectBySlug, projects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return { title: `${project.title} | Souhail Ziyadi` };
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="fixed inset-x-0 top-0 h-64 bg-gradient-to-b from-[#4338ca]/10 to-transparent pointer-events-none -z-0" />

      <div className="relative max-w-4xl mx-auto px-6 py-20">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-white/40 hover:text-[#6366f1] transition-colors duration-200 mb-14 text-sm group"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="group-hover:-translate-x-1 transition-transform duration-200">
            <path d="M19 12H5" />
            <polyline points="12 5 5 12 12 19" />
          </svg>
          Retour aux projets
        </Link>

        {/* Header */}
        <div className="mb-8 space-y-3">
          <p className="text-[#6366f1] text-xs font-bold uppercase tracking-[0.2em]">Projet</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">{project!.title}</h1>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project!.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full border"
              style={{ background: 'rgba(67,56,202,0.2)', borderColor: 'rgba(67,56,202,0.3)', color: '#6366f1' }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <div
          className="rounded-xl p-6 mb-8 border"
          style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-3">Description</h2>
          <p className="text-white/70 leading-relaxed">{project!.fullDescription}</p>
        </div>

        {/* Highlights */}
        <div
          className="rounded-xl p-6 mb-8 border"
          style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-4">Points clés</h2>
          <ul className="space-y-3">
            {project!.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#6366f1' }} />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        {(project!.github || project!.live) && (
          <div className="flex flex-wrap gap-3">
            {project!.github && (
              <a
                href={project!.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border transition-all duration-200 border-white/15 text-white/70 hover:border-accent hover:text-accent"
              >
                <GithubIcon /> GitHub
              </a>
            )}
            {project!.live && (
              <a
                href={project!.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', color: '#6366f1' }}
              >
                <ExternalLinkIcon /> Live
              </a>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
