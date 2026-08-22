function LeafIcon({ size = 24, color = 'currentColor', className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      role="presentation"
      aria-hidden="true"
    >
      <path
        d="M5 19C5 10 10 5 19 5c1 9-4 14-13 14-1 0-1 0-1 0z"
        fill={color}
      />
      <path
        d="M6.5 17.5C9 12.5 12.5 9 17 6.5"
        stroke="rgba(0,0,0,0.15)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default LeafIcon
