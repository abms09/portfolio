import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-cyan-500 px-4 py-2 font-display text-xs font-bold text-slate-950 shadow-lg focus:translate-y-0 transition-transform"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default App
