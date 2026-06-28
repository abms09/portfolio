import { motion } from 'framer-motion'
import Section from './Section'
import Container from './Container'

const categories = [
  {
    title: 'Frontend',
    skills: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Languages',
    skills: ['JavaScript', 'Python', 'C', 'Basics of Java'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Vite', 'Postman'],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0, 1] },
  },
}

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-black/40"
        >
          Skills
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0, 1] }}
          className="mb-16 max-w-3xl text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-black sm:text-5xl md:text-6xl"
        >
          Technologies and tools I work with daily.
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-black/40">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <span className="inline-block rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/70 transition-colors hover:border-black/30 hover:text-black">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
