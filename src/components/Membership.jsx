import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { memberships } from '../data/gym'

const bgImage = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=60'

function MembershipCard({ m, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.12, duration: 0.5 }}
      className="relative flex flex-col"
      style={{
        background: m.featured ? '#E8181B' : '#1C1C1E',
        border: m.featured ? 'none' : '1px solid #2A2A2A',
        transform: m.featured ? 'scale(1.04)' : 'scale(1)',
        zIndex: m.featured ? 10 : 1,
      }}
    >
      {m.badge && (
        <div
          className="font-barlow font-bold text-xs uppercase tracking-widest text-center py-2"
          style={{ background: '#A01214' }}
        >
          {m.badge}
        </div>
      )}

      <div className="flex-1 p-8 flex flex-col">
        <h3
          className="font-bebas tracking-widest mb-1"
          style={{ fontSize: '2rem', color: m.featured ? '#FFF' : '#9CA3AF' }}
        >
          {m.tier}
        </h3>
        <div className="flex items-end gap-1 mb-6">
          <span className="font-oswald font-bold text-white" style={{ fontSize: '3.5rem', lineHeight: 1 }}>
            ${m.price}
          </span>
          <span className="font-barlow pb-2" style={{ color: m.featured ? 'rgba(255,255,255,0.7)' : '#6B6B6B' }}>
            /{m.period}
          </span>
        </div>

        <ul className="flex flex-col gap-3 mb-8 flex-1">
          {m.perks.map((perk) => (
            <li key={perk} className="flex items-start gap-3">
              <Check
                size={16}
                className="shrink-0 mt-0.5"
                style={{ color: m.featured ? '#FFF' : '#E8181B' }}
              />
              <span
                className="font-barlow text-base"
                style={{ color: m.featured ? 'rgba(255,255,255,0.9)' : '#D1D5DB' }}
              >
                {perk}
              </span>
            </li>
          ))}
        </ul>

        <button
          className="w-full font-barlow font-bold uppercase tracking-widest py-3.5 transition-all text-sm"
          style={{
            background: m.featured ? '#FFF' : '#E8181B',
            color: m.featured ? '#E8181B' : '#FFF',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = m.featured ? '#F0F0F0' : '#A01214'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = m.featured ? '#FFF' : '#E8181B'
          }}
        >
          {m.cta}
        </button>
      </div>
    </motion.div>
  )
}

export default function Membership() {
  return (
    <section
      id="membership"
      className="py-20 px-4 relative"
      style={{ background: '#111111' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-barlow font-semibold uppercase tracking-[0.4em] text-xs mb-3" style={{ color: '#E8181B' }}>
            Pricing
          </p>
          <h2 className="font-bebas text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.05em' }}>
            Choose Your Path
          </h2>
          <p className="font-barlow text-lg mt-3 max-w-xl mx-auto" style={{ color: '#6B6B6B' }}>
            No lock-in contracts. Cancel any time. Pick the tier that matches your ambition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 md:items-stretch">
          {memberships.map((m, i) => (
            <MembershipCard key={m.id} m={m} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
