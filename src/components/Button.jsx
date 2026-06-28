export default function Button({ href, children, variant = 'primary', className = '' }) {
  const base = 'inline-block rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer'
  const variants = {
    primary: 'bg-black text-white px-8 py-4 hover:opacity-80',
    secondary: 'border border-black/20 text-black px-8 py-4 hover:bg-black hover:text-white',
    ghost: 'text-black/60 hover:text-black',
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
