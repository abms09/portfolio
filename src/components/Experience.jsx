import { motion } from 'framer-motion'
import Section from './Section'
import Container from './Container'

const timeline = [
  {
    type: 'Experience',
    role: 'Web Development Intern',
    organization: 'Techolas Technologies',
    location: 'Calicut, Kerala',
    period: 'Internship',
    badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
    description:
      'Gained practical full-stack experience building real-world web applications and integrating server-side workflows.',
    highlights: [
      'Built responsive frontend components in React with clean, modular structure',
      'Developed and tested RESTful API endpoints using Node.js and Express',
      'Collaborated on database integration and CRUD workflows with MongoDB',
      'Employed Git for version control and Postman for API testing and validation',
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Postman'],
  },
  {
    type: 'Certification',
    role: 'MERN Stack Development Certification',
    organization: 'Techolas Technologies',
    location: 'Calicut, Kerala',
    period: 'Professional Program',
    badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    description:
      'Completed intensive professional certification covering full MERN stack architecture, backend routing, state management, and deployment.',
    highlights: [
      'Mastered MongoDB schema design, indexing, and Mongoose ODM patterns',
      'Engineered secure server architectures with Express middleware & authentication',
      'Implemented modern React patterns: custom hooks, context, and state management',
      'Built and deployed end-to-end full-stack projects from scratch',
    ],
    tags: ['MERN Stack', 'Mongoose', 'Express.js', 'React.js', 'Node.js'],
  },
  {
    type: 'Education',
    role: 'Bachelor of Computer Applications (BCA)',
    organization: 'Srinivas University',
    location: 'Mangalore, Karnataka',
    period: 'Undergraduate Degree',
    badgeColor: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300',
    description:
      'Undergraduate foundation in Computer Science principles, software engineering, database management systems, and programming methodologies.',
    highlights: [
      'Core coursework in Database Management Systems (DBMS) and SQL',
      'Software Engineering lifecycle, Object-Oriented Programming (OOP), and data structures',
      'Web fundamentals: HTML, CSS, JavaScript, and client-server network architecture',
      'Academic project work developing functional software applications',
    ],
    tags: ['Computer Science', 'DBMS', 'Web Development', 'OOP', 'Software Engineering'],
  },
]

export default function Experience() {
  return (
    <Section id="experience">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold">
            // 04. Experience & Education
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Proven foundation through practical experience and academic rigor.
          </h2>
          <p className="mt-4 text-base text-slate-300">
            A chronological look at my software engineering internship, professional certifications, and computer applications degree.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-14">
          {/* Vertical connecting line */}
          <div
            className="absolute left-4 sm:left-8 top-3 bottom-3 w-px bg-linear-to-b from-cyan-500/50 via-slate-800 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-10 sm:space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline node marker */}
                <div className="absolute left-2.5 sm:left-6.5 top-1.5 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border border-slate-700 bg-slate-950 shadow-[0_0_10px_rgba(56,189,248,0.4)]">
                  <div className="h-2 w-2 rounded-full bg-cyan-400" />
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:shadow-xl hover:shadow-black/40">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/70">
                    <div>
                      <span
                        className={`inline-block rounded-md border px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wide ${item.badgeColor}`}
                      >
                        {item.type}
                      </span>
                      <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-white">
                        {item.role}
                      </h3>
                      <p className="mt-1 font-display text-sm font-medium text-slate-400">
                        <span className="text-slate-200">{item.organization}</span> &bull; {item.location}
                      </p>
                    </div>

                    <div className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1.5 font-mono text-xs text-slate-400">
                      {item.period}
                    </div>
                  </div>

                  <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300">
                    {item.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2 text-xs sm:text-sm text-slate-400">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5">
                        <svg
                          className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-800 bg-slate-900/70 px-2.5 py-1 font-mono text-[11px] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
