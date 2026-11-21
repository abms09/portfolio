import { motion } from 'framer-motion'
import Section from './Section'
import Container from './Container'

const contactChannels = [
  {
    name: 'Email',
    value: 'adarshbinums@gmail.com',
    href: 'mailto:adarshbinums@gmail.com',
    icon: (
      <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Phone & WhatsApp',
    value: '+91 8086826234',
    href: 'tel:+918086826234',
    icon: (
      <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    value: 'in/adarsh-binu-ms',
    href: 'https://www.linkedin.com/in/adarsh-binu-ms/',
    external: true,
    icon: (
      <svg className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    value: 'github.com/abms09',
    href: 'https://github.com/abms09',
    external: true,
    icon: (
      <svg className="h-5 w-5 text-stone-300" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <Section id="contact" className="pb-24">

      <Container className="relative">
        {/* Section Header */}
        <div className="max-w-2xl">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            Let's work together
          </h2>
          <p className="mt-4 text-base text-stone-300">
            Open to full-time developer roles, on-site or remote. The fastest way to reach me is email.
          </p>
        </div>

        {/* Contact cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactChannels.map((channel, index) => (
            <motion.a
              key={channel.name}
              href={channel.href}
              {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-stone-800 bg-stone-950/70 p-5 backdrop-blur-sm transition-colors duration-200 hover:border-amber-500/40 hover:bg-stone-900/80"
            >
              <svg
                className="absolute right-5 top-5 h-4 w-4 text-stone-600 transition-all group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
              </svg>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-stone-800 bg-stone-900/80">
                {channel.icon}
              </div>
              <div className="mt-4 font-mono text-xs text-stone-400">{channel.name}</div>
              <div className="mt-1 font-display text-sm font-semibold text-white break-words">{channel.value}</div>
            </motion.a>
          ))}
        </div>
      </Container>
    </Section>
  )
}
