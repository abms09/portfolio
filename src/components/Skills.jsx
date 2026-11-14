import { motion } from 'framer-motion'
import Section from './Section'
import Container from './Container'

const skillCategories = [
  {
    title: 'Frontend Engineering',
    description: 'Building reactive, component-driven user interfaces with modern styling and fluid micro-interactions.',
    icon: (
      <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      'React.js',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'HTML5 & CSS3',
      'Framer Motion',
      'Responsive Design',
      'Component Architecture',
      'State Management',
    ],
  },
  {
    title: 'Backend & Database',
    description: 'Developing secure, scalable server architectures, RESTful API endpoints, and database models.',
    icon: (
      <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'RESTful APIs',
      'Mongoose ODM',
      'JWT Authentication',
      'CRUD Operations',
      'Middleware Design',
    ],
  },
  {
    title: 'Tools, Workflow & Testing',
    description: 'Disciplined developer workflow, version control collaboration, API testing, and build tooling.',
    icon: (
      <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    skills: [
      'Git Version Control',
      'GitHub Collaboration',
      'Postman API Testing',
      'Vite Build Tool',
      'VS Code Workflow',
      'npm Package Manager',
      'Browser DevTools',
      'Clean Code Practices',
    ],
  },
]

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold">
            // 02. Technical Capabilities
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Comprehensive skill set built for modern full-stack development.
          </h2>
          <p className="mt-4 text-base text-slate-300">
            A production-ready stack centering on the MERN ecosystem, modern JavaScript, and clean responsive interfaces.
          </p>
        </div>

        {/* Skill Matrix Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/70 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 shadow-inner group-hover:border-slate-700 transition-colors">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {category.description}
                </p>

                {/* Skill Pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800/90 bg-slate-900/80 px-3 py-1.5 font-mono text-xs font-medium text-slate-200 transition-all hover:border-cyan-500/40 hover:bg-slate-800 hover:text-white"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/80" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom tag indicator */}
              <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{category.skills.length} core skills</span>
                <span className="text-cyan-400 font-medium">Ready for production</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
