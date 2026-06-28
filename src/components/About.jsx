import { motion } from 'framer-motion'
import Section from './Section'
import Container from './Container'

const stats = [
  { value: '1', label: 'Internship completed' },
  { value: '3', label: 'Projects built' },
  { value: '1', label: 'Month of experience' },
]

export default function About() {
  return (
    <Section id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-black/40"
        >
          About
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0, 1] }}
          >
            <h2 className="text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-black sm:text-5xl md:text-6xl">
              A passionate web developer starting my journey in tech.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0, 1] }}
            className="flex flex-col justify-center gap-6"
          >
            <p className="text-lg leading-relaxed text-black/60">
              I recently completed a one-month web development internship
              at Techolas Technologies in Calicut, where I gained hands-on
              experience building web applications using the MERN stack.
            </p>
            <p className="text-lg leading-relaxed text-black/60">
              I am passionate about crafting clean, functional web experiences
              and eager to grow as a developer. Every project I build teaches
              me something new, and I bring that curiosity to every line of code.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0, 1] }}
          className="mt-24 grid grid-cols-3 gap-8 border-t border-black/5 pt-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold tracking-[-0.03em] text-black sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-black/40">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
