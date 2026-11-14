const stackItems = [
  { name: 'React', category: 'Frontend', color: '#61dafb' },
  { name: 'Node.js', category: 'Backend', color: '#68a063' },
  { name: 'MongoDB', category: 'Database', color: '#47a248' },
  { name: 'Express.js', category: 'Backend', color: '#ffffff' },
  { name: 'JavaScript ES6+', category: 'Language', color: '#f7df1e' },
  { name: 'Tailwind CSS', category: 'Styling', color: '#38bdf8' },
  { name: 'RESTful APIs', category: 'Architecture', color: '#818cf8' },
  { name: 'Framer Motion', category: 'Animation', color: '#f43f5e' },
  { name: 'Git & GitHub', category: 'VCS', color: '#f05032' },
  { name: 'Vite', category: 'Tooling', color: '#bd34fe' },
  { name: 'Postman', category: 'API Testing', color: '#ff6c37' },
]

function Row({ hidden = false }) {
  return (
    <ul className="flex shrink-0 items-center gap-6 pr-6" aria-hidden={hidden || undefined}>
      {stackItems.map((item) => (
        <li
          key={item.name}
          className="flex items-center gap-3 rounded-xl border border-slate-800/80 bg-slate-900/50 px-4 py-2.5 backdrop-blur-sm transition-colors hover:border-slate-700"
        >
          <span
            className="h-2 w-2 rounded-full shrink-0 shadow-sm"
            style={{ backgroundColor: item.color }}
          />
          <span className="font-display text-sm font-semibold text-slate-200">
            {item.name}
          </span>
          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
            {item.category}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-slate-800/80 bg-slate-950/40 py-5">
      {/* Edge Blur Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#090d16] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#090d16] to-transparent" />

      <div className="marquee flex w-max">
        <div className="marquee-track flex">
          <Row />
          <Row hidden />
        </div>
      </div>
    </div>
  )
}
