export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  icon: Icon,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-display text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none'

  const variants = {
    primary:
      'bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 active:scale-[0.98] shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 border border-cyan-400/30',
    secondary:
      'bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/60 hover:border-slate-500/80 active:scale-[0.98] backdrop-blur-sm shadow-sm',
    outline:
      'bg-transparent hover:bg-slate-800/50 text-slate-300 hover:text-white border border-slate-700 active:scale-[0.98]',
    ghost:
      'bg-transparent hover:bg-slate-800/60 text-slate-400 hover:text-cyan-300 active:scale-[0.98]',
  }

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`

  if (href) {
    const isAnchor = href.startsWith('#')
    return (
      <a
        href={href}
        className={classes}
        {...(isAnchor
          ? {}
          : { target: '_blank', rel: 'noopener noreferrer' })}
        {...rest}
      >
        {children}
        {Icon && <Icon className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
      {Icon && <Icon className="h-4 w-4 shrink-0" />}
    </button>
  )
}
