import { motion } from 'framer-motion'
import Section from './Section'
import Container from './Container'

const timeline = [
  {
    type: 'Internship',
    role: 'MERN Stack Developer Intern',
    organization: 'Techolas Technologies',
    location: 'Calicut, Kerala',
    period: 'Aug 2025 – Mar 2026',
    badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
    extra: 'MERN Stack Development Certified',
    highlights: [
      'Built responsive UIs with React.js, HTML5, CSS3 & Bootstrap',
      'Integrated frontends with REST APIs and backend services',
      'Handled CRUD operations and app data with MongoDB',
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Postman'],
  },
  {
    type: 'Education',
    role: 'Bachelor of Computer Applications (BCA)',
    organization: 'Srinivas University',
    location: 'Mangalore, Karnataka',
    period: '2022 – 2025',
    badgeColor: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300',
    grade: 'CGPA 8.31',
  },
]

export default function Experience() {
  return (
    <Section id="experience">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold">
            // 04
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Experience &amp; Education
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mt-12 max-w-4xl">
          <div
            className="absolute left-4 sm:left-8 top-3 bottom-3 w-px bg-linear-to-b from-cyan-500/50 via-slate-800 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 sm:left-6.5 top-7 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border border-slate-700 bg-slate-950 shadow-[0_0_10px_rgba(56,189,248,0.4)]">
                  <div className="h-2 w-2 rounded-full bg-cyan-400" />
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 sm:p-7 backdrop-blur-sm transition-colors duration-300 hover:border-slate-700">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span
                        className={`inline-block rounded-md border px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wide ${item.badgeColor}`}
                      >
                        {item.type}
                      </span>
                      <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-white">{item.role}</h3>
                      <p className="mt-1 font-display text-sm font-medium text-slate-400">
                        <span className="text-slate-200">{item.organization}</span> &bull; {item.location}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {item.grade && (
                        <span className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 font-mono text-xs font-semibold text-emerald-300">
                          {item.grade}
                        </span>
                      )}
                      <span className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1.5 font-mono text-xs text-slate-400">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {item.extra && (
                    <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-xs font-medium text-emerald-300">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      {item.extra}
                    </div>
                  )}

                  {item.highlights && (
                    <ul className="mt-5 space-y-2 text-sm text-slate-400">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2.5">
                          <svg className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.tags && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-slate-800 bg-slate-900/70 px-2.5 py-1 font-mono text-[11px] text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
