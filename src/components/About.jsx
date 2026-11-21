import { motion } from 'framer-motion'
import Section from './Section'
import Container from './Container'

export default function About() {
  return (
    <Section id="about">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            About Me
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mt-10 max-w-3xl space-y-5 text-base sm:text-lg leading-relaxed text-stone-300"
        >
          <p>
            I'm a MERN stack developer with a BCA from{' '}
            <strong className="font-medium text-white">Srinivas University</strong> and hands-on experience from my
            internship at <strong className="font-medium text-white">Techolas Technologies</strong>, Calicut.
          </p>
          <p>
            I enjoy taking an idea all the way to a live product: designing the database, building the API, and
            crafting a clean, responsive interface. Lately that has meant e-commerce and marketplace apps with
            payments, real-time chat, and admin dashboards.
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}
