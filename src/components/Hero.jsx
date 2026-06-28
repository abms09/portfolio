import { motion } from 'framer-motion'
import Container from './Container'
import Button from './Button'
import AnimatedText from './AnimatedText'

export default function Hero() {
  return (
    <section className="relative flex min-h-dvh items-center bg-white">
      <Container className="flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-black/40"
        >
          Web Developer
        </motion.p>

        <AnimatedText
          text="Crafting digital experiences that inspire."
          as="h1"
          className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-black sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0, 1] }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-black/60 md:text-xl"
        >
          I build beautiful, performant, and accessible web applications
          with modern technologies and meticulous attention to detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#projects">View my work</Button>
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
            className="flex flex-col items-center gap-2 text-black/30"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em]">
              Scroll
            </span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="stroke-black/30">
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
