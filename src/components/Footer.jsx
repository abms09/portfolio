import Container from './Container'
import Logo from './Logo'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-slate-400">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Left info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-display font-bold">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-cyan-500/30 bg-cyan-500/10 p-1 text-cyan-400">
                <Logo />
              </span>
              <span>Adarsh Binu M.S</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Full-Stack Developer crafting reliable MERN applications &bull; Kozhikode, Kerala
            </p>
          </div>

          {/* Quick links */}
          <ul className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 self-start md:self-auto rounded-lg border border-slate-800 bg-slate-900/80 px-3.5 py-2 font-mono text-xs text-slate-300 hover:border-slate-700 hover:text-white transition-all"
          >
            <span>Back to top</span>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Adarsh Binu M.S. All rights reserved.</p>
          <p className="font-mono text-[11px]">Built with React, Tailwind CSS & Framer Motion</p>
        </div>
      </Container>
    </footer>
  )
}
