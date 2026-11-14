import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'
import Container from './Container'

const projects = [
  {
    title: 'PetLizo',
    badge: 'Full-Stack MERN App',
    subtitle: 'Pet Marketplace & Adoption Platform',
    description:
      'A complete pet buying, selling, and adoption marketplace built with the MERN stack. Designed with secure user authentication, dynamic listing management, customer reviews, and integrated buyer-seller communication.',
    features: [
      'User authentication & protected profile management',
      'Dynamic pet listing with categorization & photo uploads',
      'Direct messaging inquiry workflow between buyers & sellers',
      'Customer reviews and verified rating system',
    ],
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs', 'JWT'],
    demoUrl: 'https://abms09.github.io/petLizo/',
    githubUrl: 'https://github.com/abms09/petLizo',
    image: '/projects/petlizo.png',
    accentColor: '#38bdf8',
    glowClass: 'from-cyan-500/15 via-sky-500/5 to-transparent',
  },
  {
    title: 'Cali-Eventzo',
    badge: 'React Application',
    subtitle: 'City Event Booking & Reservation Platform',
    description:
      'An interactive event booking platform built for Calicut. Enables users to discover upcoming entertainment and cultural events, browse schedules, reserve specific seats, and complete a streamlined multi-step booking process.',
    features: [
      'Interactive event discovery catalog with category filters',
      'Seat reservation interface with real-time selection',
      'Fast, multi-step booking flow and confirmation details',
      'REST API integration with optimized client state',
    ],
    tags: ['React', 'JavaScript ES6+', 'CSS3', 'REST APIs', 'Vite'],
    demoUrl: 'https://abms09.github.io/cali-eventzo/',
    githubUrl: 'https://github.com/abms09/cali-eventzo',
    image: '/projects/cali-eventzo.png',
    accentColor: '#818cf8',
    glowClass: 'from-indigo-500/15 via-purple-500/5 to-transparent',
  },
  {
    title: 'Safari Rental',
    badge: 'Frontend Web App',
    subtitle: 'Catering & Event Equipment Rental Service',
    description:
      'A dedicated rental web application for party essentials, luxury crockery, and buffet equipment. Features intuitive product browsing, rental availability checks, and an automated inquiry calculation workflow.',
    features: [
      'Comprehensive product inventory with specifications',
      'Interactive rental availability checker & date picker',
      'Order estimation and inquiry submission flow',
      'Mobile-first responsive layout with accessible navigation',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive UI'],
    demoUrl: 'https://abms09.github.io/safarirental2024/',
    githubUrl: 'https://github.com/abms09/safarirental2024',
    image: '/projects/safari.png',
    accentColor: '#34d399',
    glowClass: 'from-emerald-500/15 via-teal-500/5 to-transparent',
  },
]

function ProjectCard({ project, index }) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:shadow-2xl hover:shadow-black/60"
    >
      {/* Background ambient glow */}
      <div
        className={`pointer-events-none absolute -inset-1 rounded-3xl bg-linear-to-r ${project.glowClass} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        aria-hidden="true"
      />

      <div className="relative grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Left / Visual Preview in Browser Mockup Frame */}
        <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
          <div className="relative overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-900/90 shadow-2xl">
            {/* Browser Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/90 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900/90 px-3 py-1 font-mono text-[11px] text-slate-400 max-w-55 truncate sm:max-w-xs">
                <svg className="h-3 w-3 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="truncate">{project.demoUrl.replace('https://', '')}</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="hidden sm:inline">Online</span>
              </div>
            </div>

            {/* Screenshot Container */}
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live demo`}
              className="group/img block relative aspect-16/10 overflow-hidden bg-slate-950"
            >
              {!imageError ? (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-[1.03]"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
                  <div className="font-display text-4xl font-extrabold text-slate-600">
                    {project.title}
                  </div>
                  <p className="mt-2 text-xs text-slate-400">{project.subtitle}</p>
                </div>
              )}

              {/* Hover overlay hint */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover/img:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-slate-900/90 px-4 py-2 font-display text-xs font-semibold text-cyan-300 shadow-xl">
                  <span>View Live Demo</span>
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Right / Information & Actions */}
        <div className="lg:col-span-5">
          {/* Badge */}
          <div className="flex items-center gap-2">
            <span
              className="inline-block rounded-md border px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider"
              style={{
                borderColor: `${project.accentColor}40`,
                backgroundColor: `${project.accentColor}15`,
                color: project.accentColor,
              }}
            >
              {project.badge}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            {project.title}
          </h3>
          <p className="mt-1 font-display text-sm font-medium text-slate-400">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
            {project.description}
          </p>

          {/* Key Features */}
          <div className="mt-5 space-y-2">
            <div className="font-mono text-xs text-slate-400 uppercase tracking-wider font-semibold">
              Key Features:
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <svg
                    className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Tags */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-slate-800 bg-slate-900/80 px-2.5 py-1 font-mono text-[11px] text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 font-display text-xs font-bold text-slate-950 transition-all hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
            >
              <span>Live Demo</span>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2.5 font-display text-xs font-semibold text-slate-200 transition-all hover:border-slate-500 hover:text-white active:scale-[0.98]"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>View Source</span>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold">
              // 03. Selected Works
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Featured Web Projects & Live Applications.
            </h2>
            <p className="mt-4 text-base text-slate-300">
              Real-world full-stack and frontend applications built from scratch with working live demos.
            </p>
          </div>

          <a
            href="https://github.com/abms09"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>See more on GitHub</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Projects List */}
        <div className="mt-14 space-y-12 sm:space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
