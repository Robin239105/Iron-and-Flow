import { motion } from 'framer-motion'
import { trainers } from '../data/gym'
import { trainerImages } from '../data/images'

const trainerPhotoMap = [
  trainerImages.marcus,
  trainerImages.jade,
  trainerImages.tyler,
  trainerImages.sam,
]

function TrainerCard({ t, i, photo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="group relative flex flex-col overflow-hidden"
      style={{ background: '#1C1C1E', border: '1px solid #2A2A2A' }}
    >
      {/* Photo */}
      <div className="relative overflow-hidden" style={{ height: '280px' }}>
        <img
          src={photo}
          alt={t.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(10,10,10,0.7) 100%)' }}
        />
        {/* Red left border on hover */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 opacity-0 group-hover:opacity-100"
          style={{ background: '#E8181B' }}
        />
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="font-bebas text-white tracking-wide" style={{ fontSize: '1.6rem' }}>{t.name}</h3>
          <p className="font-barlow font-bold text-xs uppercase tracking-widest" style={{ color: '#E8181B' }}>{t.role}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <span
            className="font-barlow text-xs uppercase tracking-wider px-2 py-1"
            style={{ background: '#2A2A2A', color: '#D1D5DB' }}
          >
            {t.specialty}
          </span>
          <span
            className="font-barlow text-xs uppercase tracking-wider px-2 py-1"
            style={{ background: '#2A2A2A', color: '#E8181B' }}
          >
            {t.years} YRS EXP
          </span>
        </div>

        {/* Bio — fades in on hover */}
        <p
          className="font-barlow text-sm leading-relaxed transition-all duration-300 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-40 overflow-hidden"
          style={{ color: '#9CA3AF' }}
        >
          {t.bio}
        </p>

        {/* Certs */}
        <div className="mt-auto pt-3" style={{ borderTop: '1px solid #2A2A2A' }}>
          {t.certs.map((c) => (
            <p key={c} className="font-barlow text-xs" style={{ color: '#6B6B6B' }}>• {c}</p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Trainers() {
  return (
    <section id="trainers" className="py-20 px-4" style={{ background: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-barlow font-semibold uppercase tracking-[0.4em] text-xs mb-3" style={{ color: '#E8181B' }}>
            The Team
          </p>
          <h2 className="font-bebas text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.05em' }}>
            Meet the Coaches
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trainers.map((t, i) => (
            <TrainerCard key={t.id} t={t} i={i} photo={trainerPhotoMap[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}
