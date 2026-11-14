import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const line = {
  hidden: { y: '105%' },
  visible: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

// Each line slides up from behind a mask. This is the page's one load animation.
export default function AnimatedText({ lines, className = '' }) {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      <span className="sr-only">{lines.join(' ')}</span>
      {lines.map((text) => (
        <span key={text} aria-hidden="true" className="block overflow-hidden pb-[0.12em]">
          <motion.span variants={line} className="block">
            {text}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  )
}
