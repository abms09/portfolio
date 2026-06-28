import { motion } from 'framer-motion'
import Section from './Section'
import Container from './Container'

const projects = [
  {
    title: 'PetLizo',
    subtitle: 'Pet buying & selling marketplace',
    description:
      'A full-featured pet marketplace built with the MERN stack. Users can browse, list, and purchase pets with secure authentication, messaging, and review systems.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    gradient: 'from-emerald-500/10 via-green-500/10 to-teal-500/10',
  },
  {
    title: 'Cali-Eventzo',
    subtitle: 'Event booking platform for Calicut',
    description:
      'A React-powered platform to discover and book events happening in Calicut. Features event listings, seat reservations, and a streamlined booking experience.',
    tags: ['React', 'CSS', 'REST APIs'],
    gradient: 'from-violet-500/10 via-purple-500/10 to-fuchsia-500/10',
  },
  {
    title: 'Safari',
    subtitle: 'Crockery & serving equipment rental',
    description:
      'A rental marketplace for party essentials — crockery items, buffet sets, and serving teams. Users can browse inventory, check availability, and place rental orders.',
    tags: ['React', 'Node.js', 'MongoDB'],
    gradient: 'from-amber-500/10 via-orange-500/10 to-red-500/10',
  },
]

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-black/40"
        >
          Featured Work
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0, 1] }}
          className="mb-16 max-w-3xl text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-black sm:text-5xl md:text-6xl"
        >
          Selected projects I have built from the ground up.
        </motion.h2>

        <div className="space-y-20">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.1, 0, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-md md:p-12 lg:p-16"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 transition-opacity duration-500 group-hover:opacity-80`}
              />

              <div className="relative">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-black/40">
                  {project.subtitle}
                </div>
                <h3 className="mb-4 text-3xl font-bold tracking-[-0.02em] text-black md:text-4xl">
                  {project.title}
                </h3>
                <p className="mb-6 max-w-2xl text-base leading-relaxed text-black/60 md:text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium text-black/50 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
