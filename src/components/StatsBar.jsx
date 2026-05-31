import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useCountUp } from '../hooks/useCountUp'
import { stats } from '../data/gym'

function StatItem({ value, suffix, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useCountUp(value, 2000, inView)

  return (
    <div ref={ref} className="flex flex-col items-center px-8 py-6">
      <span className="font-oswald font-bold text-white leading-none" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
        {count}{suffix}
      </span>
      <span className="font-barlow font-semibold uppercase tracking-widest text-sm mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
        {label}
      </span>
    </div>
  )
}

export default function StatsBar() {
  return (
    <section style={{ background: '#E8181B' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-red-800">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
