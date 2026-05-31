import { useState } from 'react'

export default function MarqueeTicker() {
  const [isHovered, setIsHovered] = useState(false)
  
  const textLeft = 'TRAIN HARD • LIFT HEAVY • FLOW HARDER • GET RESULTS • NO EXCUSES • '
  const repeatedLeft = textLeft.repeat(6)

  const textRight = 'CROSSFIT • POWERLIFTING • ATHLETIC YOGA • BOXING • HIIT • METCON • '
  const repeatedRight = textRight.repeat(6)

  return (
    <section 
      className="relative py-10 overflow-hidden select-none z-30"
      style={{ background: '#050507', marginTop: '-3vh' }}
    >
      <style>{`
        @keyframes marquee-ltr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-ltr {
          animation: marquee-ltr 32s linear infinite;
        }
        .animate-marquee-rtl {
          animation: marquee-rtl 28s linear infinite;
        }
        .marquee-paused {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Decorative back-glow */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[120px] rounded-full blur-[100px] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #FF1A22 0%, #FF7A00 100%)' }}
      />

      {/* Rotated Streetwear Street-Container */}
      <div 
        className="flex flex-col gap-3 py-6 scale-[1.03] transition-transform duration-500"
        style={{ 
          transform: 'rotate(-1.5deg)', 
          background: 'linear-gradient(90deg, #121216 0%, #060608 50%, #121216 100%)',
          borderTop: '1px solid rgba(255, 26, 34, 0.25)',
          borderBottom: '1px solid rgba(255, 74, 0, 0.25)',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Track 1: RTL, Solid Crimson Gradient Text */}
        <div className="overflow-hidden flex whitespace-nowrap">
          <div className={`flex whitespace-nowrap animate-marquee-rtl ${isHovered ? 'marquee-paused' : ''}`}>
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                background: 'linear-gradient(90deg, #FF1A22 0%, #FF7A00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.08em',
                fontSize: '2.4rem',
                paddingRight: '1rem'
              }}
            >
              {repeatedLeft}
            </span>
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                background: 'linear-gradient(90deg, #FF1A22 0%, #FF7A00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.08em',
                fontSize: '2.4rem',
                paddingRight: '1rem'
              }}
            >
              {repeatedLeft}
            </span>
          </div>
        </div>

        {/* Track 2: LTR, Hollow / Outlined White Text */}
        <div className="overflow-hidden flex whitespace-nowrap" style={{ borderTop: '1px solid rgba(255,255,255,0.03)', paddingTop: '0.5rem' }}>
          <div className={`flex whitespace-nowrap animate-marquee-ltr ${isHovered ? 'marquee-paused' : ''}`}>
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.28)',
                letterSpacing: '0.08em',
                fontSize: '2.4rem',
                paddingRight: '1rem'
              }}
            >
              {repeatedRight}
            </span>
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.28)',
                letterSpacing: '0.08em',
                fontSize: '2.4rem',
                paddingRight: '1rem'
              }}
            >
              {repeatedRight}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
