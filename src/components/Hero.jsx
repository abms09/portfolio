import { motion } from 'framer-motion'
import Container from './Container'
import Button from './Button'
import AnimatedText from './AnimatedText'

const icons = [
  {
    id: 'react',
    posX: '8%', posY: '20%', size: 28,
    duration: 7, delay: 0, opacity: 0.15,
    render: (s) => (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="2.5" />
        <ellipse cx="12" cy="12" rx="10.5" ry="3.5" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10.5" ry="3.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10.5" ry="3.5" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    id: 'node',
    posX: '82%', posY: '12%', size: 24,
    duration: 8, delay: 0.5, opacity: 0.16,
    render: (s) => (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: 'mongo',
    posX: '76%', posY: '72%', size: 26,
    duration: 9, delay: 1, opacity: 0.15,
    render: (s) => (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C8 10 6 14 6 18c0 3 2 5 6 5s6-2 6-5c0-4-2-8-6-16z" />
      </svg>
    ),
  },
  {
    id: 'js',
    posX: '14%', posY: '78%', size: 22,
    duration: 6.5, delay: 0.3, opacity: 0.18,
    render: (s) => (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <text x="7" y="18" fontSize="13" fontWeight="bold" fill="currentColor" stroke="none">JS</text>
      </svg>
    ),
  },
  {
    id: 'express',
    posX: '50%', posY: '86%', size: 20,
    duration: 7.5, delay: 0.8, opacity: 0.12,
    render: (s) => (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <text x="1" y="19" fontSize="16" fontWeight="bold" fill="currentColor" stroke="none" letterSpacing="-1">EX</text>
      </svg>
    ),
  },
  {
    id: 'git',
    posX: '90%', posY: '48%', size: 18,
    duration: 5.5, delay: 1.2, opacity: 0.16,
    render: (s) => (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" />
        <path d="M12 9v6M9 12h6" />
        <circle cx="8" cy="8" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="16" cy="16" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="16" cy="8" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'tailwind',
    posX: '4%', posY: '52%', size: 20,
    duration: 9, delay: 0.6, opacity: 0.15,
    render: (s) => (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 16c2-6 6-8 10-6s4 4 6 4" />
        <path d="M4 10c2-6 6-8 10-6s4 4 6 4" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 'vite',
    posX: '60%', posY: '10%', size: 18,
    duration: 6.2, delay: 0.9, opacity: 0.18,
    render: (s) => (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L4 20h16L12 2z" />
        <path d="M12 2v18" strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: 'html',
    posX: '92%', posY: '78%', size: 20,
    duration: 7.2, delay: 0.4, opacity: 0.12,
    render: (s) => (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 2l2 18 6 2 6-2 2-18H4z" />
        <path d="M8 8h8l-1 6-3 1-3-1" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: 'css',
    posX: '6%', posY: '82%', size: 20,
    duration: 6.8, delay: 0.7, opacity: 0.12,
    render: (s) => (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 2l2 18 6 2 6-2 2-18H4z" />
        <path d="M8 12h8l-1 4-3 1-3-1" strokeWidth="1" />
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden bg-zinc-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand opacity-[0.08] blur-[100px] md:h-[800px] md:w-[800px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 block">
        {icons.map((icon) => (
          <motion.div
            key={icon.id}
            className="absolute text-brand"
            style={{ left: icon.posX, top: icon.posY }}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, icon.opacity, icon.opacity, 0],
              y: [0, -20, 0, 20, 0],
            }}
            transition={{
              duration: icon.duration,
              delay: icon.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {icon.render(icon.size)}
          </motion.div>
        ))}
      </div>

      <Container className="relative flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand"
        >
          Web Developer
        </motion.p>

        <AnimatedText
          text="Adarsh Binu M.S"
          as="h1"
          className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0, 1] }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl"
        >
          A passionate web developer from Kozhikode. I build modern web
          applications with the MERN stack and a love for clean design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#projects" variant="primary">View my work</Button>
          <Button href="#contact" variant="secondary">Get in touch</Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-zinc-500"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em]">
              Scroll
            </span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="stroke-zinc-500">
              <rect x="1" y="1" width="14" height="22" rx="7" strokeWidth="2" />
              <motion.circle
                cx="8" cy="8" r="2" fill="currentColor"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
