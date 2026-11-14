export default function Section({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`relative border-t border-slate-800/80 py-20 sm:py-28 md:py-32 ${className}`}
    >
      {children}
    </section>
  )
}
