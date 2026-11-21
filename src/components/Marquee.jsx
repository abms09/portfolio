import { techIcons } from './techIcons'

const stack = [
  'React', 'Node.js', 'MongoDB', 'Express.js', 'PostgreSQL', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap',
  'Framer Motion', 'Git', 'GitHub', 'Postman', 'Vite', 'Vercel', 'Render', 'Mongoose', 'JWT', 'Razorpay',
]

function Items({ hidden = false }) {
  return (
    <ul className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={hidden || undefined}>
      {stack.map((name) => {
        const icon = techIcons[name]
        return (
          <li key={name} className="flex items-center gap-2 text-stone-400 transition-colors hover:text-stone-100">
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill={icon.color} aria-hidden="true">
              <path d={icon.path} />
            </svg>
            <span className="text-xs font-medium whitespace-nowrap">{name}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default function Marquee() {
  return (
    <div
      className="relative overflow-hidden border-y border-stone-800/80 py-3.5"
      aria-label="Technologies I work with"
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32 bg-linear-to-r from-canvas to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32 bg-linear-to-l from-canvas to-transparent" />

      <div className="marquee flex w-max">
        <div className="marquee-track flex" style={{ animationDuration: '45s' }}>
          <Items />
          <Items hidden />
        </div>
      </div>
    </div>
  )
}
