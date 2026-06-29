export default function Button({ href, children, variant = 'primary', className = '' }) {
  const base = 'inline-block rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer'
  const variants = {
    primary: 'bg-brand text-white px-8 py-4 hover:bg-brand-dark',
    secondary: 'border border-zinc-700 text-zinc-200 px-8 py-4 hover:bg-zinc-800 hover:text-white',
    ghost: 'text-zinc-400 hover:text-white',
  }

  if (href) {
    const handleClick = (e) => {
      if (href.startsWith('#')) {
        e.preventDefault()
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }

    return (
      <a href={href} onClick={handleClick} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </a>
    )
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      { children }
    </button>
  )
}
