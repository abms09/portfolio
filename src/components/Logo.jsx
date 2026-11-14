export default function Logo({ className = '' }) {
  return (
    <svg
      viewBox="0 0 46 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-full w-full ${className}`}
      aria-label="<AB/> logo"
      role="img"
    >
      {/* < */}
      <path d="M7.5 7.5L2.5 12L7.5 16.5" />
      {/* A */}
      <path d="M11 18L15.5 6L20 18" />
      <path d="M13 13.5H18" />
      {/* B */}
      <path d="M24 6V18" />
      <path d="M24 6H28C29.8 6 31 7 31 8.75C31 10.5 29.8 11.5 28 11.5H24" />
      <path d="M24 11.5H28.5C30.5 11.5 31.5 12.6 31.5 14.75C31.5 17 30.5 18 28.5 18H24" />
      {/* / */}
      <path d="M35 6.5L32 17.5" />
      {/* > */}
      <path d="M38.5 7.5L43.5 12L38.5 16.5" />
    </svg>
  )
}
