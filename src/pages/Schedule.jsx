import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, User, Sparkles } from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import { schedule } from '../data/gym'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const intensitySpecs = {
  High: { color: '#FF1A22', percent: 80 },
  Extreme: { color: '#E11D48', percent: 100 },
  Medium: { color: '#FF7A00', percent: 55 },
  'Self-paced': { color: '#A3A3C2', percent: 30 }
}

function ClassCard({ cls, index }) {
  const spec = intensitySpecs[cls.intensity] || { color: '#A3A3C2', percent: 40 }
  const circumference = 2 * Math.PI * 14 // Approx 87.9

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="relative overflow-hidden rounded-2xl border border-white border-opacity-5 flex flex-col group shadow-lg"
      style={{
        background: 'linear-gradient(135deg, rgba(28, 28, 30, 0.45) 0%, rgba(18, 18, 22, 0.6) 100%)',
        backdropFilter: 'blur(16px)',
      }}
    >
      {/* Visual Accent top border */}
      <div 
        className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${spec.color}, transparent)` }}
      />

      <div className="relative h-48 overflow-hidden">
        <img
          src={cls.image}
          alt={cls.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,7,0.95) 0%, rgba(5,5,7,0.3) 60%, transparent 100%)' }} />
        
        {/* Dynamic Class Timing */}
        <div
          className="absolute bottom-4 left-4"
          style={{ fontFamily: "'Oswald', sans-serif", color: '#fff', fontSize: '1.75rem', fontWeight: 700, lineHeight: 1 }}
        >
          {cls.time}
        </div>
      </div>

      <div className="p-6 flex flex-col justify-between flex-grow gap-4">
        <div>
          {/* Class Header */}
          <h3 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-white text-2xl tracking-wide uppercase font-semibold">
            {cls.name}
          </h3>

          <div className="flex items-center gap-4 mt-2 font-barlow text-sm text-gray-400" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <span className="flex items-center gap-1.5"><Clock size={13} className="text-[#FF1A22]" /> {cls.duration}</span>
            <span className="text-gray-600">·</span>
            <span className="flex items-center gap-1.5"><User size={13} className="text-[#FF7A00]" /> {cls.trainer}</span>
          </div>
        </div>

        {/* Dynamic SVG Intensity Dial */}
        <div className="flex items-center justify-between pt-4 border-t border-white border-opacity-5">
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
            Intensity Output
          </span>

          <div className="flex items-center gap-2">
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", color: spec.color }} className="text-xs uppercase font-bold tracking-widest">
              {cls.intensity}
            </span>
            <div className="relative w-8 h-8 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle cx="16" cy="16" r="14" stroke="rgba(255,255,255,0.03)" strokeWidth="2.5" fill="transparent" />
                <circle cx="16" cy="16" r="14" stroke={spec.color} strokeWidth="2.5" fill="transparent" strokeDasharray={circumference} strokeDashoffset={circumference - (circumference * spec.percent) / 100} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Schedule() {
  const [activeDay, setActiveDay] = useState('Mon')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ background: '#050507', minHeight: '100vh' }}
    >
      <PageHero
        title="CLASS SCHEDULE"
        subtitle="Reserve your session — five realms. zero excuses."
        image="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1920&q=85"
      />

      <section className="py-24 max-w-7xl mx-auto px-6">
        
        {/* Carbon Active Day filter capsules */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center p-1.5 bg-white bg-opacity-5 rounded-2xl w-fit mx-auto border border-white border-opacity-5">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className="px-6 py-2.5 uppercase text-xs font-bold tracking-widest transition-all rounded-xl"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                background: activeDay === day ? '#FF1A22' : 'transparent',
                color: activeDay === day ? '#fff' : '#8E919F',
                boxShadow: activeDay === day ? '0 4px 15px rgba(255, 26, 34, 0.25)' : 'none',
              }}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Dynamic Class grid with transitions */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {schedule[activeDay] && schedule[activeDay].length > 0 ? (
              <motion.div 
                key={activeDay}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {schedule[activeDay]
                  .sort((a, b) => a.time.localeCompare(b.time))
                  .map((cls, i) => (
                    <ClassCard key={`${cls.name}-${cls.time}`} cls={cls} index={i} />
                  ))}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <p style={{ color: '#8E919F', fontFamily: "'Barlow Condensed', sans-serif" }} className="text-xl">
                  No classes scheduled for this day.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* High Conversion Booking Callout */}
        <div className="text-center mt-20 p-8 rounded-3xl border border-white border-opacity-5 max-w-2xl mx-auto" style={{ background: 'rgba(18, 18, 22, 0.45)', backdropFilter: 'blur(20px)' }}>
          <span className="flex items-center gap-1 bg-white bg-opacity-5 text-xs px-3 py-1 font-bold uppercase tracking-widest text-[#FF7A00] w-fit mx-auto mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <Sparkles size={11} /> Booking priorities
          </span>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-[#8E919F] mb-6 text-lg">
            Ready to commit to your daily strength milestone? Book your Shoreditch floor tour or lock in your trial session now.
          </p>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-12 py-4 uppercase font-bold tracking-widest transition-all"
              style={{ 
                background: 'linear-gradient(135deg, #FF1A22 0%, #FF6B35 100%)', 
                color: '#fff', 
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '0.9rem',
                boxShadow: '0 4px 15px rgba(255, 26, 34, 0.25)'
              }}
            >
              Book induction tour
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
