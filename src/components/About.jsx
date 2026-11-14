import Section from './Section'
import Container from './Container'

const principles = [
  {
    title: 'Full-Stack Architecture',
    desc: 'Connecting MongoDB schemas, Express middleware, and RESTful APIs with high-performance React frontends.',
    icon: (
      <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Modern UI & Responsiveness',
    desc: 'Crafting responsive, mobile-first layouts with Tailwind CSS, clean semantic HTML, and fluid micro-interactions.',
    icon: (
      <svg className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Clean Code & Reliability',
    desc: 'Committed to maintainable code, structured Git version control, modular components, and rigorous API testing with Postman.',
    icon: (
      <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

const highlights = [
  { label: 'Degree', value: 'BCA (Bachelor of Computer Applications)' },
  { label: 'Institution', value: 'Srinivas University, Mangalore' },
  { label: 'Certification', value: 'MERN Stack Development — Techolas Technologies' },
  { label: 'Internship', value: 'Web Development Intern — Techolas Technologies' },
  { label: 'Location', value: 'Kozhikode, Kerala, India' },
  { label: 'Availability', value: 'Immediate / Open for full-time & contract roles' },
]

export default function About() {
  return (
    <Section id="about">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold">
            // 01. About Me
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            I engineer web apps that combine robust logic with seamless usability.
          </h2>
        </div>

        {/* Story & Background */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg leading-relaxed text-slate-300">
            <p>
              I am a software developer with a strong foundation in Computer Applications from <strong className="text-white font-medium">Srinivas University, Mangalore</strong>. To deepen my practical engineering skills, I specialized in the MERN stack at <strong className="text-white font-medium">Techolas Technologies in Calicut</strong>.
            </p>
            <p>
              During my internship at Techolas, I worked on production-grade application workflows—designing database schemas in MongoDB, crafting backend controllers in Express and Node.js, and building reactive interfaces in React.
            </p>
            <p>
              Whether it’s architecting an event reservation system, an e-commerce rental catalog, or an authenticated marketplace, I focus on writing clean, scalable code that delivers genuine value to users.
            </p>

            {/* Principles cards */}
            <div className="mt-8 grid gap-4 pt-4 sm:grid-cols-3">
              {principles.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-sm hover:border-slate-700 transition-colors"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-800/80 mb-3">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-sm font-bold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Info Sidebar */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 sm:p-7 backdrop-blur-sm shadow-xl">
              <h3 className="font-display text-base font-bold text-white flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Key Profile Highlights
              </h3>
              
              <dl className="mt-6 divide-y divide-slate-800/80">
                {highlights.map((h) => (
                  <div key={h.label} className="py-3.5 first:pt-0 last:pb-0">
                    <dt className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                      {h.label}
                    </dt>
                    <dd className="mt-1 font-display text-sm font-medium text-slate-200">
                      {h.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
