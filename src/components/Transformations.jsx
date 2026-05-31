import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { transformations } from '../data/gym'
import { transformationImages } from '../data/images'

const filters = ['All', 'Weight Loss', 'Muscle Gain', 'Athletic Performance']

function TransformCard({ t, i, imgs }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: i * 0.06 }}
      className="overflow-hidden"
      style={{ background: '#1C1C1E', border: '1px solid #2A2A2A' }}
    >
      {/* Before/After images */}
      <div className="grid grid-cols-2 h-52 overflow-hidden">
        <div className="relative">
          <img src={imgs.before} alt="Before" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }} />
          <span className="absolute bottom-2 left-2 font-bebas text-lg tracking-widest" style={{ color: 'rgba(255,255,255,0.7)' }}>BEFORE</span>
        </div>
        <div className="relative" style={{ borderLeft: '2px solid #E8181B' }}>
          <img src={imgs.after} alt="After" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{ background: 'rgba(232,24,27,0.1)' }} />
          <span className="absolute bottom-2 left-2 font-bebas text-lg tracking-widest" style={{ color: '#E8181B' }}>AFTER</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h4 className="font-bebas text-white text-xl tracking-wide">{t.name}</h4>
            <p className="font-barlow font-bold text-xs uppercase tracking-widest" style={{ color: '#E8181B' }}>
              {t.category}
            </p>
          </div>
          <span
            className="font-barlow text-xs uppercase tracking-wider px-2 py-1 shrink-0"
            style={{ background: '#2A2A2A', color: '#9CA3AF' }}
          >
            {t.duration}
          </span>
        </div>
        <p className="font-oswald font-semibold text-white mt-2" style={{ fontSize: '1.1rem' }}>{t.stat}</p>
        <p className="font-barlow text-xs uppercase tracking-wider mt-1" style={{ color: '#6B6B6B' }}>{t.program}</p>
      </div>
    </motion.div>
  )
}

export default function Transformations() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? transformations : transformations.filter(t => t.category === active)

  return (
    <section id="gallery" className="py-20 px-4" style={{ background: '#111111' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-barlow font-semibold uppercase tracking-[0.4em] text-xs mb-3" style={{ color: '#E8181B' }}>
            Proof
          </p>
          <h2 className="font-bebas text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.05em' }}>
            Real Results
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="font-barlow font-bold uppercase tracking-widest text-sm px-5 py-2.5 transition-all"
              style={{
                background: active === f ? '#E8181B' : '#1C1C1E',
                color: active === f ? '#FFF' : '#9CA3AF',
                border: active === f ? '1px solid #E8181B' : '1px solid #2A2A2A',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filtered.map((t, i) => (
              <TransformCard key={t.id} t={t} i={i} imgs={transformationImages[t.id - 1] || transformationImages[0]} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
