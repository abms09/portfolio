import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Active section observer
      const sections = ['about', 'skills', 'experience', 'projects', 'contact']
      const current = sections.find((id) => {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top <= 180 && rect.bottom >= 180
        }
        return false
      })
      if (current) {
        setActiveSection(current)
      } else if (window.scrollY < 200) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    const handleKey = (e) => e.key === 'Escape' && setMobileOpen(false)
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [mobileOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 py-3 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <nav
        aria-label="Main Navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 text-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-1.5 text-cyan-400 shadow-[0_0_12px_rgba(56,189,248,0.2)] group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition-colors">
            <Logo />
          </span>
          <div className="flex flex-col">
            <span className="font-display text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              Adarsh Binu M.S
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
              Full-Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900/60 p-1.5 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-full px-4 py-1.5 font-display text-xs font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-cyan-500/15 border border-cyan-500/30 -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Right CTA & Socials */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/abms09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-slate-400 hover:border-slate-700 hover:text-white transition-colors"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/adarsh-binu-ms/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-slate-400 hover:border-slate-700 hover:text-white transition-colors"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
            </svg>
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1.5 font-display text-xs font-semibold text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-sm"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 md:hidden text-slate-200"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="h-0.5 w-5 bg-slate-200 rounded-full"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="h-0.5 w-5 bg-slate-200 rounded-full"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="h-0.5 w-5 bg-slate-200 rounded-full"
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-slate-800 bg-slate-950/95 px-6 py-8 backdrop-blur-xl md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800/80">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono text-emerald-400 font-medium">
                  Available for opportunities · Kozhikode
                </span>
              </div>

              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 font-display text-lg font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-4">
                <a
                  href="https://github.com/abms09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/adarsh-binu-ms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
