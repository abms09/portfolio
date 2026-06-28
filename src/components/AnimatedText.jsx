import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0, 1] },
  },
}

export default function AnimatedText({ text, as: Tag = 'h1', className = '' }) {
  const words = text.split(' ')

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
      aria-label={text}
    >
      <Tag className="inline">
        {words.map((word, i) => (
          <motion.span key={i} variants={wordVariants} className="inline-block">
            {word}{i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  )
}
