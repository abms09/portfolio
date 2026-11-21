import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'
import Container from './Container'

const featuredProjects = [
  {
    title: 'Clothzy',
    badge: 'Full-Stack E-Commerce',
    description:
      'A fashion e-commerce store with the full shopping journey, from browsing to Razorpay checkout, plus an admin panel to run it.',
    features: [
      'Google sign-in, email verification & password reset',
      'Filters, wishlist, cart, coupons & Razorpay payments',
      'Admin dashboard for products, orders, users & sales',
    ],
    tags: ['React', 'React Router', 'REST APIs', 'Razorpay', 'Google OAuth'],
    demoUrl: 'https://clothzy-alpha.vercel.app/',
    image: '/projects/clothzy.webp',
    accentColor: '#f472b6',
    glowClass: 'from-pink-500/15 via-rose-500/5 to-transparent',
  },
  {
    title: 'PetLizo',
    badge: 'Full-Stack MERN App',
    description:
      'A pet marketplace where buyers and sellers list pets, chat in real time, and pay online, managed from an admin dashboard.',
    features: [
      'JWT auth with role-based access for users & admins',
      'Pet listings with image uploads & real-time chat',
      'Payment integration and admin dashboard',
    ],
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
    demoUrl: 'https://pet-lizo.vercel.app/',
    githubUrl: 'https://github.com/abms09/petLizo',
    image: '/projects/petlizo.webp',
    accentColor: '#38bdf8',
    glowClass: 'from-cyan-500/15 via-sky-500/5 to-transparent',
  },
  {
    title: 'Task Manager',
    badge: 'Full-Stack MERN App',
    description:
      'A focused task tracker with user accounts and a personal dashboard, backed by a deployed REST API.',
    features: [
      'Secure registration & login with protected dashboard',
      'Create, edit & complete tasks with priority levels',
      'Search, status filters & light / dark theme',
    ],
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
    demoUrl: 'https://frontend-omega-eosin-80.vercel.app/',
    githubUrl: 'https://github.com/abms09/taskmanager',
    image: '/projects/taskmanager.webp',
    accentColor: '#a78bfa',
    glowClass: 'from-violet-500/15 via-purple-500/5 to-transparent',
  },
]

const otherProjects = [
  {
    title: 'Cali-Eventzo',
    description: 'Event discovery and seat booking platform for Calicut.',
    tags: ['React', 'JavaScript', 'CSS3', 'Vite'],
    demoUrl: 'https://abms09.github.io/cali-eventzo/',
    githubUrl: 'https://github.com/abms09/cali-eventzo',
    image: '/projects/cali-eventzo.webp',
  },
  {
    title: 'Safari Rental',
    description: 'Catering & event equipment rental site with inquiry flow.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    demoUrl: 'https://abms09.github.io/safarirental2024/',
    githubUrl: 'https://github.com/abms09/safarirental2024',
    image: '/projects/safari.webp',
  },
]

const ExternalIcon = ({ className = 'h-3.5 w-3.5' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const GitHubIcon = ({ className = 'h-4 w-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

function Screenshot({ project, className = '' }) {
  const [imageError, setImageError] = useState(false)

  return (
    <a
      href={project.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.title} live demo`}
      className={`group/img block relative aspect-16/10 overflow-hidden bg-slate-950 ${className}`}
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
        <div className="flex h-full w-full items-center justify-center font-display text-3xl font-extrabold text-slate-600">
          {project.title}
        </div>
      )}
      <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover/img:opacity-100">
        <span className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-slate-900/90 px-4 py-2 font-display text-xs font-semibold text-cyan-300 shadow-xl">
          View Live Demo
          <ExternalIcon />
        </span>
      </div>
    </a>
  )
}

function Tags({ tags }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-md border border-slate-800 bg-slate-900/80 px-2.5 py-1 font-mono text-[11px] text-slate-300"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

function FeaturedCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:shadow-2xl hover:shadow-black/60"
    >
      <div
        className={`pointer-events-none absolute -inset-1 rounded-3xl bg-linear-to-r ${project.glowClass} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        aria-hidden="true"
      />

      <div className="relative grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Screenshot in browser frame */}
        <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
          <div className="overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-900/90 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-slate-800 bg-slate-950/90 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="min-w-0 truncate rounded-md border border-slate-800 bg-slate-900/90 px-3 py-1 font-mono text-[11px] text-slate-400">
                {project.demoUrl.replace('https://', '').replace(/\/$/, '')}
              </div>
            </div>
            <Screenshot project={project} />
          </div>
        </div>

        {/* Info */}
        <div className="lg:col-span-5">
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

          <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            {project.title}
          </h3>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
            {project.description}
          </p>

          <ul className="mt-5 space-y-2 text-sm text-slate-400">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <svg className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Tags tags={project.tags} />
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 font-display text-xs font-bold text-slate-950 transition-all hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
            >
              Live Demo
              <ExternalIcon />
            </a>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2.5 font-display text-xs font-semibold text-slate-200 transition-all hover:border-slate-500 hover:text-white active:scale-[0.98]"
              >
                <GitHubIcon />
                View Source
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function OtherCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 transition-colors hover:border-slate-700"
    >
      <Screenshot project={project} className="border-b border-slate-800" />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h4 className="font-display text-lg font-bold text-white">{project.title}</h4>
          <div className="flex items-center gap-3 text-slate-400">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code`}
              className="hover:text-white transition-colors"
            >
              <GitHubIcon />
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="hover:text-cyan-300 transition-colors"
            >
              <ExternalIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
        <p className="mt-2 text-sm text-slate-400">{project.description}</p>
        <div className="mt-auto pt-5">
          <Tags tags={project.tags} />
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
              // 03
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Featured Projects
            </h2>
          </div>

          <a
            href="https://github.com/abms09"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>See more on GitHub</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Featured full-stack projects */}
        <div className="mt-14 space-y-10 sm:space-y-12">
          {featuredProjects.map((project, index) => (
            <FeaturedCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Other projects */}
        <h3 className="mt-20 font-display text-xl sm:text-2xl font-bold text-white">Other Projects</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <OtherCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
