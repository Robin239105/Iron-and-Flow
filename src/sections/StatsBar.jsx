import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useCountUp } from '../hooks/useCountUp'
import { stats } from '../data/gym'
import { Users, Award, Flame } from 'lucide-react'

// Map stat icons to fit perfectly
const statIcons = [
  <Users size={18} className="text-[#FF1A22]" />,
  <Flame size={18} className="text-[#FF7A00]" />,
  <ClockIcon size={18} className="text-[#FF1A22]" />,
  <Award size={18} className="text-[#FF7A00]" />
]

function ClockIcon({ size, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function StatItem({ stat, index, inView }) {
  const count = useCountUp(stat.value, 2000, inView)
  
  // Calculate distinct progress ring offsets
  const percentage = index === 0 ? 88 : index === 1 ? 75 : index === 2 ? 70 : 100
  const circumference = 2 * Math.PI * 26 // Radius is 26 -> approx 163.3
  const strokeOffset = circumference - (circumference * percentage) / 100

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.12 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="relative p-8 overflow-hidden rounded-2xl border border-white border-opacity-5 flex flex-col items-center group"
      style={{
        background: 'linear-gradient(135deg, rgba(28, 28, 30, 0.45) 0%, rgba(18, 18, 22, 0.6) 100%)',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4)'
      }}
    >
      {/* Decorative backing grid */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: '12px 12px'
        }}
      />

      {/* Hover ambient highlight glow */}
      <div 
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-300 pointer-events-none"
        style={{
          background: index % 2 === 0 ? '#FF1A22' : '#FF7A00'
        }}
      />

      {/* Stat Icon Badge */}
      <div className="absolute top-4 right-4 p-2 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-5 shadow">
        {statIcons[index]}
      </div>

      {/* Visual Circle Gauges */}
      <div className="relative w-24 h-24 flex items-center justify-center mb-6">
        <svg className="absolute w-full h-full -rotate-90">
          {/* Inner circle */}
          <circle
            cx="48"
            cy="48"
            r="26"
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="3.5"
            fill="transparent"
          />
          {/* Animated glowing ring */}
          <motion.circle
            cx="48"
            cy="48"
            r="26"
            stroke={index % 2 === 0 ? 'url(#flowGrad1)' : 'url(#flowGrad2)'}
            strokeWidth="3.5"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: strokeOffset } : { strokeDashoffset: circumference }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />
        </svg>

        {/* Counter Content inside Ring */}
        <div 
          style={{ fontFamily: "'Oswald', sans-serif" }} 
          className="text-center flex items-center justify-center font-bold text-2xl"
        >
          <span className="text-white">
            {stat.prefix}{count}{stat.suffix}
          </span>
        </div>
      </div>

      {/* Label and Note */}
      <div className="text-center z-10">
        <h4
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.08em' }}
          className="text-white text-xl tracking-wider uppercase font-semibold"
        >
          {stat.label}
        </h4>
        {stat.note ? (
          <p 
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }} 
            className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-semibold"
          >
            {stat.note}
          </p>
        ) : (
          <p 
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }} 
            className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-semibold"
          >
            verified index
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default function StatsBar() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.25 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={ref} 
      className="relative py-24 px-6 overflow-hidden z-20"
      style={{ background: '#050507' }}
    >
      {/* Gradients utilized in SVGs */}
      <svg width="0" height="0" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF1A22" />
            <stop offset="100%" stopColor="#FF5C00" />
          </linearGradient>
          <linearGradient id="flowGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF5C00" />
            <stop offset="100%" stopColor="#FF9F00" />
          </linearGradient>
        </defs>
      </svg>

      {/* Decorative top/bottom divider grids */}
      <div className="absolute top-0 left-0 w-full h-[1px]" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,26,34,0.15) 50%, transparent 100%)' }} />
      <div className="absolute bottom-0 left-0 w-full h-[1px]" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,122,0,0.15) 50%, transparent 100%)' }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
