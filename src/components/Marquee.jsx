import { techIcons } from './techIcons'

const rowOne = ['React', 'Node.js', 'MongoDB', 'Express.js', 'PostgreSQL', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap']
const rowTwo = ['Framer Motion', 'Git', 'GitHub', 'Postman', 'Vite', 'Vercel', 'Render', 'Mongoose', 'JWT', 'Razorpay']

function Items({ names, hidden = false }) {
  return (
    <ul className="flex shrink-0 items-center gap-4 pr-4" aria-hidden={hidden || undefined}>
      {names.map((name) => {
        const icon = techIcons[name]
        return (
          <li
            key={name}
            className="group flex items-center gap-2.5 rounded-xl border border-slate-800/80 bg-slate-900/50 px-4 py-2.5 backdrop-blur-sm transition-colors hover:border-slate-600"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110"
              fill={icon.color}
              aria-hidden="true"
            >
              <path d={icon.path} />
            </svg>
            <span className="font-display text-sm font-semibold text-slate-200 whitespace-nowrap">{name}</span>
          </li>
        )
      })}
    </ul>
  )
}

function Row({ names, reverse = false }) {
  return (
    <div className="marquee flex w-max">
      <div className={`marquee-track flex ${reverse ? 'marquee-reverse' : ''}`}>
        <Items names={names} />
        <Items names={names} hidden />
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <div
      className="relative overflow-hidden border-y border-slate-800/80 bg-slate-950/40 py-6 space-y-4"
      aria-label="Technologies I work with"
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32 bg-linear-to-r from-[#090d16] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32 bg-linear-to-l from-[#090d16] to-transparent" />

      <Row names={rowOne} />
      <Row names={rowTwo} reverse />
    </div>
  )
}
