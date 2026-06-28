import { motion } from 'framer-motion'
import Section from './Section'
import Container from './Container'
import Button from './Button'

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-black/40"
        >
          Contact
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0, 1] }}
          >
            <h2 className="mb-6 text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-black sm:text-5xl md:text-6xl">
              Let us create something remarkable together.
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-black/60">
              I am always open to new opportunities, interesting projects,
              and conversations. Whether you have a question or just want
              to say hello — I will get back to you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0, 1] }}
            className="flex flex-col gap-8"
          >
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-black/40">
                Email
              </div>
              <a
                href="mailto:adarshbinums@gmail.com"
                className="text-lg font-medium text-black transition-opacity hover:opacity-60"
              >
                adarshbinums@gmail.com
              </a>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-black/40">
                Phone
              </div>
              <a
                href="tel:+918086826234"
                className="text-lg font-medium text-black transition-opacity hover:opacity-60"
              >
                +91 8086826234
              </a>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-black/40">
                Social
              </div>
              <div className="flex gap-6">
                <a
                  href="https://github.com/abms09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-black/60 transition-colors hover:text-black"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/adarsh-binu-ms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-black/60 transition-colors hover:text-black"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="pt-4">
              <Button href="mailto:adarshbinums@gmail.com">Send a message</Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
