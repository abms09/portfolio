import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[2.5px] origin-left bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 shadow-[0_0_12px_rgba(56,189,248,0.6)]"
    />
  )
}
