import { motion } from 'framer-motion'
import Container from './Container'

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-zinc-800 bg-zinc-900 py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0, 1] }}
            className="text-sm text-zinc-500"
          >
            &copy; 2026 Adarsh Binu M.S. Built with React &amp; Vite.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0, 1] }}
            className="flex items-center gap-6"
          >
            <a
              href="https://github.com/abms09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition-colors hover:text-brand"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/adarsh-binu-ms/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition-colors hover:text-brand"
            >
              LinkedIn
            </a>
            <a
              href="#"
              onClick={scrollToTop}
              className="rounded-full border border-zinc-700 p-2 text-zinc-500 transition-colors hover:border-brand hover:text-brand"
              aria-label="Back to top"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 11.5V2.5M7 2.5L3 6.5M7 2.5L11 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </Container>
    </footer>
  )
}
