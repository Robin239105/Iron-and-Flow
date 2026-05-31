import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, User } from 'lucide-react'
import { schedule, classColors } from '../data/gym'
import { classImages } from '../data/images'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const typeStyle = {
  crossfit: { border: '#E8181B', badge: '#E8181B' },
  strength: { border: '#6B6B6B', badge: '#6B6B6B' },
  olympic: { border: '#FFFFFF', badge: '#FFFFFF' },
  open: { border: '#3A3A3C', badge: '#3A3A3C' },
  yoga: { border: '#166534', badge: '#166534' },
}

function ClassCard({ cls }) {
  const style = typeStyle[cls.type] || typeStyle.open
  const spotsLow = cls.spots <= 4
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-none flex flex-col overflow-hidden"
      style={{ background: '#1C1C1E', borderLeft: `3px solid ${style.border}` }}
    >
      {/* Class image thumbnail */}
      <div className="relative h-28 overflow-hidden">
        <img
          src={classImages[cls.type] || classImages.open}
          alt={cls.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)' }} />
        <span
          className="absolute top-2 right-2 font-barlow font-bold text-xs uppercase tracking-widest px-2 py-0.5"
          style={{ background: style.border === '#FFFFFF' ? '#333' : style.border, color: '#FFF' }}
        >
          {classColors[cls.type]?.label || cls.type}
        </span>
      </div>
      <div className="p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <span className="font-bebas text-white text-xl tracking-wider leading-none">{cls.name}</span>
        <span
          className="font-barlow font-bold text-xs uppercase tracking-widest px-2 py-0.5 shrink-0"
          style={{ background: spotsLow ? '#E8181B' : '#2A2A2A', color: '#FFF' }}
        >
          {spotsLow ? `${cls.spots} LEFT` : `${cls.spots} SPOTS`}
        </span>
      </div>
      <div className="flex flex-wrap gap-4 text-sm" style={{ color: '#9CA3AF' }}>
        <span className="flex items-center gap-1.5 font-barlow">
          <Clock size={13} style={{ color: style.border }} />
          {cls.time}
        </span>
        <span className="flex items-center gap-1.5 font-barlow">
          <Clock size={13} style={{ color: '#6B6B6B' }} />
          {cls.duration}
        </span>
        <span className="flex items-center gap-1.5 font-barlow">
          <User size={13} style={{ color: '#6B6B6B' }} />
          {cls.coach}
        </span>
      </div>
      <button
        className="font-barlow font-bold uppercase tracking-widest text-xs px-4 py-2 self-start transition-colors"
        style={{ background: '#E8181B', color: '#FFF' }}
        onMouseEnter={e => (e.currentTarget.style.background = '#A01214')}
        onMouseLeave={e => (e.currentTarget.style.background = '#E8181B')}
      >
        Book Class
      </button>
      </div>
    </motion.div>
  )
}

export default function ClassSchedule() {
  const [activeDay, setActiveDay] = useState('Mon')
  const classes = schedule[activeDay] || []

  return (
    <section id="schedule" className="py-20 px-4" style={{ background: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="font-barlow font-semibold uppercase tracking-[0.4em] text-xs mb-3" style={{ color: '#E8181B' }}>
            What's On
          </p>
          <h2 className="font-bebas text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.05em' }}>
            Weekly Schedule
          </h2>
        </motion.div>

        {/* Day tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className="font-barlow font-bold uppercase tracking-widest text-sm px-5 py-2.5 transition-all"
              style={{
                background: activeDay === day ? '#E8181B' : '#1C1C1E',
                color: activeDay === day ? '#FFF' : '#9CA3AF',
                border: activeDay === day ? '1px solid #E8181B' : '1px solid #2A2A2A',
              }}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Class grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {classes.map((cls) => (
            <ClassCard key={cls.id} cls={cls} />
          ))}
        </motion.div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-5 mt-10">
          {Object.entries(typeStyle).map(([type, s]) => (
            <span key={type} className="flex items-center gap-2 font-barlow text-xs uppercase tracking-wider" style={{ color: '#6B6B6B' }}>
              <span className="inline-block w-3 h-3" style={{ background: s.border }} />
              {classColors[type]?.label || type}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
