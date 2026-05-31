export default function LogoIcon({ size = 40, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Dynamic Flow Gradient: Crimson to Electric Amber */}
        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF1A22" />
          <stop offset="100%" stopColor="#FF7A00" />
        </linearGradient>

        {/* Platinum/Iron Gradient for Stem */}
        <linearGradient id="ironGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#A3A3C2" />
        </linearGradient>

        {/* Dark Glow / Shadow for Emblem backing */}
        <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#FF1A22" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Hexagonal premium outer badge frame */}
      <path
        d="M32 4 L56 16 L56 48 L32 60 L8 48 L8 16 Z"
        fill="#060608"
        stroke="url(#flowGradient)"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Outer framing accents (inner parallel ticks for premium depth) */}
      <path
        d="M32 8 L51 18 L51 46 L32 56 L13 46 L13 18 Z"
        stroke="rgba(255, 255, 255, 0.08)"
        strokeWidth="1"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Interlocking I & F Monogram Group */}
      <g filter="url(#glow)">
        {/* Left parallel flow stripe (Speed accent) */}
        <path
          d="M17 28 H22 L17 48 H12 Z"
          fill="url(#flowGradient)"
          opacity="0.8"
        />

        {/* STEM - "I" (Iron): Bold slanted solid pillar */}
        <path
          d="M24 14 H33 L25 50 H16 Z"
          fill="url(#ironGradient)"
        />

        {/* TOP ARM - "F" (Flow): Sweeping aerodynamic wedge */}
        <path
          d="M32.8 14 H51 L49 22 H29 Z"
          fill="url(#flowGradient)"
        />

        {/* MIDDLE ARM - "F" (Flow): Secondary aerodynamic wedge */}
        <path
          d="M29.5 30 H43 L41 38 H25.7 Z"
          fill="url(#flowGradient)"
        />
      </g>
    </svg>
  )
}
