import { motion } from 'framer-motion'
import Container from './Container'
import Button from './Button'

const stats = [
  { value: '5+', label: 'Projects Built', color: 'text-white' },
  { value: 'MERN', label: 'Certified', color: 'text-cyan-400' },
  { value: '8.31', label: 'BCA CGPA', color: 'text-emerald-400' },
]

function CodeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-lg lg:max-w-none"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-3xl bg-linear-to-tr from-cyan-500/20 via-sky-500/10 to-indigo-500/20 blur-2xl"
        aria-hidden="true"
      />

      {/* Gentle float */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/90 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-2 border-b border-slate-800/80 bg-slate-900/60 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-rose-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-xs text-slate-400">developer.js</span>
          </div>

          <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed text-slate-300">
            <div>
              <span className="text-indigo-400">const</span> <span className="text-cyan-300">developer</span> = &#123;
            </div>
            <div className="pl-4">
              <span className="text-slate-400">stack</span>: [
              <span className="text-amber-200">'MongoDB'</span>, <span className="text-amber-200">'Express'</span>,{' '}
              <span className="text-amber-200">'React'</span>, <span className="text-amber-200">'Node'</span>],
            </div>
            <div className="pl-4">
              <span className="text-slate-400">builds</span>: <span className="text-emerald-300">'full-stack web apps'</span>,
            </div>
            <div className="pl-4">
              <span className="text-slate-400">openToWork</span>: <span className="text-indigo-400">true</span>
            </div>
            <div>
              &#125;;
              <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-cyan-400/80 animate-pulse" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-center backdrop-blur-sm"
            >
              <div className={`font-display text-lg font-bold ${stat.color}`}>{stat.value}</div>
              <div className="font-mono text-[11px] text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      {/* Background grid & glows */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-80" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-48 top-16 h-128 w-lg rounded-full bg-cyan-500/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-36 top-1/3 h-112 w-md rounded-full bg-indigo-500/10 blur-[140px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            {/* Availability pill */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 font-mono text-xs font-medium text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.15)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              Open to full-time roles
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              I build{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-sky-300 to-indigo-400">
                full-stack web apps
              </span>{' '}
              that people enjoy using.
            </motion.h1>

            {/* Intro */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300"
            >
              Hi, I'm <strong className="font-semibold text-white">Adarsh Binu M.S</strong>, a MERN stack developer
              from Kozhikode, Kerala.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <Button href="#projects" variant="primary">
                View My Work
                <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
              <a
                href="/Adarsh_Binu_MS_Resume.pdf"
                download="Adarsh_Binu_MS_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-3 font-display text-sm font-semibold text-slate-100 hover:border-cyan-500/50 hover:text-white transition-all active:scale-[0.98]"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <CodeCard />
          </div>
        </div>
      </Container>
    </section>
  )
}
