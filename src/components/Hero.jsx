import { motion } from 'framer-motion'
import Container from './Container'
import Button from './Button'

function LatestProject() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto w-full max-w-lg lg:max-w-none"
    >
      <motion.a
        href="https://clothzy-alpha.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="group block"
      >
        <div className="overflow-hidden rounded-2xl border border-stone-800 bg-stone-900 shadow-2xl shadow-black/50 transition-transform duration-500 lg:rotate-2 group-hover:rotate-0">
          <img
            src="/projects/clothzy.webp"
            alt="Clothzy e-commerce store homepage"
            className="aspect-16/10 w-full object-cover object-top"
          />
        </div>
        <div className="mt-4 flex items-center justify-between gap-4 px-1 text-sm">
          <span className="text-stone-400">
            Latest build: <span className="font-medium text-stone-100">Clothzy</span>, a full-stack fashion store
          </span>
          <span className="inline-flex shrink-0 items-center gap-1 font-medium text-amber-400 group-hover:text-amber-300">
            Visit
            <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
            </svg>
          </span>
        </div>
      </motion.a>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-sm text-stone-400"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              Available for full-time roles · Kozhikode, Kerala
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-heading text-6xl sm:text-7xl lg:text-8xl leading-[0.95] text-white"
            >
              Adarsh <span className="italic text-amber-300">Binu</span> M.S
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 max-w-lg text-base sm:text-lg leading-relaxed text-stone-300"
            >
              Full-stack MERN developer. I like building complete products, from the database and API to the last
              detail of the interface.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-3.5"
            >
              <Button href="#projects" variant="primary">
                View My Work
              </Button>
              <a
                href="/Adarsh_Binu_MS_Resume.pdf"
                download="Adarsh_Binu_MS_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-stone-700 px-5 py-3 font-display text-sm font-semibold text-stone-100 hover:border-stone-500 hover:text-white transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <LatestProject />
          </div>
        </div>
      </Container>
    </section>
  )
}
