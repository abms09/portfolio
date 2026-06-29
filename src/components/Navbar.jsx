import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Home', href: '#' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleClick = (e, href) => {
    e.preventDefault()
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    setOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-zinc-900/70 backdrop-blur-xl border-b border-zinc-800 shadow-xs'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-16">
          <a
            href="#"
            className="text-sm font-semibold tracking-tight text-white"
            onClick={(e) => handleClick(e, '#')}
          >
            Portfolio
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="rounded-full px-4 py-2 text-sm text-zinc-400 transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              className="h-px w-5 bg-white"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="h-px w-5 bg-white"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              className="h-px w-5 bg-white"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0, 1] }}
              className="fixed top-16 left-0 right-0 z-[60] flex h-24 items-center justify-center border-b border-zinc-800 bg-zinc-950 md:hidden"
            >
              <div className="flex items-center gap-6 sm:gap-10">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1, ease: [0.25, 0.1, 0, 1] }}
                    className="group relative text-sm font-medium text-zinc-400 transition-colors hover:text-white sm:text-base"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-brand transition-all duration-300 group-hover:w-full" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
