import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from './Container'
import Button from './Button'

function DeveloperTerminal() {
  const [copied, setCopied] = useState(false)

  const handleCopyCode = () => {
    const code = `const engineer = {
  name: 'Adarsh Binu M.S',
  title: 'Full-Stack MERN Developer',
  location: 'Kozhikode, Kerala',
  coreStack: ['React', 'Node.js', 'Express', 'MongoDB'],
  styling: ['Tailwind CSS', 'Framer Motion'],
  education: 'BCA, Srinivas University',
  status: 'Available for opportunities'
};`
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-lg lg:max-w-none"
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-3xl bg-linear-to-tr from-cyan-500/20 via-sky-500/10 to-indigo-500/20 blur-2xl"
        aria-hidden="true"
      />

      {/* Terminal Window */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/90 shadow-2xl backdrop-blur-xl">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/60 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-xs text-slate-400">developer.config.ts</span>
          </div>
          <button
            type="button"
            onClick={handleCopyCode}
            aria-label="Copy configuration"
            className="flex items-center gap-1.5 rounded-md border border-slate-700/60 bg-slate-800/60 px-2 py-1 font-mono text-[11px] text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
          >
            {copied ? (
              <>
                <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300">
          <div>
            <span className="text-indigo-400">const</span>{' '}
            <span className="text-cyan-300">developer</span>:{' '}
            <span className="text-amber-300">FullStackEngineer</span> = &#123;
          </div>
          <div className="pl-4">
            <span className="text-slate-400">name</span>:{' '}
            <span className="text-emerald-300">'Adarsh Binu M.S'</span>,
          </div>
          <div className="pl-4">
            <span className="text-slate-400">role</span>:{' '}
            <span className="text-emerald-300">'Full-Stack MERN Developer'</span>,
          </div>
          <div className="pl-4">
            <span className="text-slate-400">location</span>:{' '}
            <span className="text-emerald-300">'Kozhikode, Kerala'</span>,
          </div>
          <div className="pl-4">
            <span className="text-slate-400">primaryStack</span>: [
            <span className="text-amber-200">'React'</span>,{' '}
            <span className="text-amber-200">'Node.js'</span>,{' '}
            <span className="text-amber-200">'Express'</span>,{' '}
            <span className="text-amber-200">'MongoDB'</span>
            ],
          </div>
          <div className="pl-4">
            <span className="text-slate-400">education</span>:{' '}
            <span className="text-emerald-300">'BCA, Srinivas University'</span>,
          </div>
          <div className="pl-4">
            <span className="text-slate-400">status</span>:{' '}
            <span className="text-cyan-300">'Open to opportunities'</span>
          </div>
          <div>&#125;;</div>
        </div>

        {/* Live Status Footer */}
        <div className="flex flex-wrap items-center justify-between border-t border-slate-800/80 bg-slate-900/40 px-5 py-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-emerald-400">Available for hire</span>
          </div>
          <span className="font-mono text-slate-400">git branch: main</span>
        </div>
      </div>

      {/* Floating Highlight Chips */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-center backdrop-blur-sm">
          <div className="font-display text-lg font-bold text-white">3+</div>
          <div className="font-mono text-[11px] text-slate-400">Full-Stack Apps</div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-center backdrop-blur-sm">
          <div className="font-display text-lg font-bold text-cyan-400">MERN</div>
          <div className="font-mono text-[11px] text-slate-400">Certified Stack</div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-center backdrop-blur-sm">
          <div className="font-display text-lg font-bold text-emerald-400">BCA</div>
          <div className="font-mono text-[11px] text-slate-400">Srinivas Univ.</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const [emailCopied, setEmailCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('adarshbinums@gmail.com')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      {/* Background Grid & Ambient Glows */}
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
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7">
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 font-mono text-xs font-medium text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.15)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>Available for Full-time Roles & Internships &bull; Kozhikode</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6"
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Full-Stack Developer crafting{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-sky-300 to-indigo-400">
                  scalable web apps
                </span>{' '}
                & modern interfaces.
              </h1>
            </motion.div>

            {/* Concise, impactful description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300"
            >
              Hi, I'm <strong className="font-semibold text-white">Adarsh Binu M.S</strong>, a full-stack developer based in Kozhikode, Kerala. I build complete web applications with MongoDB, Express, React, and Node.js.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <Button href="#projects" variant="primary">
                Explore Projects
                <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
              <Button href="#contact" variant="secondary">
                Get in Touch
              </Button>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-mono text-xs font-medium text-slate-300 hover:border-slate-700 hover:text-white transition-all backdrop-blur-sm"
              >
                {emailCopied ? (
                  <>
                    <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Quick Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>React & Node.js Specialist</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>REST API Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                <span>Responsive Modern UI</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Developer Terminal */}
          <div className="lg:col-span-5">
            <DeveloperTerminal />
          </div>
        </div>
      </Container>
    </section>
  )
}
