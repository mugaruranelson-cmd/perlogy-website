interface SolutionIconProps {
  path: string
  color: string
  bg: string
  size?: 'sm' | 'md' | 'lg'
}

export function SolutionIcon({
  path, color, bg, size = 'md'
}: SolutionIconProps) {
  const dim = size === 'lg' ? 48 : size === 'md' ? 40 : 36
  const iconDim = size === 'lg' ? 22 : size === 'md' ? 18 : 16
  const radius = size === 'lg' ? 'rounded-xl' : 'rounded-lg'

  return (
    <div
      className={`flex items-center justify-center flex-shrink-0 ${radius}`}
      style={{ width: dim, height: dim, background: bg }}
    >
      <svg
        width={iconDim}
        height={iconDim}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d={path} />
      </svg>
    </div>
  )
}
