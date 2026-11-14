import { useState } from 'react'
import Section from './Section'
import Container from './Container'

const contactChannels = [
  {
    name: 'Email Address',
    value: 'adarshbinums@gmail.com',
    actionText: 'Send Email',
    href: 'mailto:adarshbinums@gmail.com',
    icon: (
      <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Phone & WhatsApp',
    value: '+91 8086826234',
    actionText: 'Call / WhatsApp',
    href: 'tel:+918086826234',
    icon: (
      <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn Network',
    value: 'linkedin.com/in/adarsh-binu-ms',
    actionText: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/adarsh-binu-ms/',
    external: true,
    icon: (
      <svg className="h-5 w-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
      </svg>
    ),
  },
  {
    name: 'GitHub Repositories',
    value: 'github.com/abms09',
    actionText: 'Explore Code',
    href: 'https://github.com/abms09',
    external: true,
    icon: (
      <svg className="h-5 w-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('adarshbinums@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <Section id="contact" className="pb-24">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-full max-w-4xl rounded-full bg-cyan-500/10 blur-[140px]"
        aria-hidden="true"
      />

      <Container className="relative">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold">
            // 05. Get In Touch
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Let's connect and build something impactful.
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Open to full-time developer positions, internships, and project collaborations.
          </p>
        </div>

        {/* Contact Banner */}
        <div className="mt-12 rounded-3xl border border-slate-800 bg-linear-to-br from-slate-900/90 via-slate-950/90 to-slate-900/90 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono text-emerald-300 mb-4">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Quick Response Guaranteed</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                Ready to talk code or discuss a role?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
                Based in Kozhikode, Kerala &bull; Open to on-site and remote engineering opportunities.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:adarshbinums@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 font-display text-sm font-bold text-slate-950 transition-all hover:bg-cyan-400 shadow-lg shadow-cyan-500/25 active:scale-[0.98]"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email Adarsh</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-5 py-3.5 font-mono text-xs font-medium text-slate-200 transition-all hover:border-slate-500 hover:text-white active:scale-[0.98]"
              >
                {copiedEmail ? (
                  <>
                    <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Contact Methods Cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-8 border-t border-slate-800/80">
            {contactChannels.map((channel) => (
              <a
                key={channel.name}
                href={channel.href}
                {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition-all duration-200 hover:border-slate-700 hover:bg-slate-900/90"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-950/80 shadow-sm group-hover:border-slate-700 transition-colors">
                    {channel.icon}
                  </div>
                  <div className="mt-3 font-mono text-xs text-slate-400">
                    {channel.name}
                  </div>
                  <div className="mt-1 font-display text-sm font-semibold text-white break-words">
                    {channel.value}
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1.5 font-display text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                  <span>{channel.actionText}</span>
                  <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
