import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, Zap, ArrowRight, User } from 'lucide-react'
import SectionHeader from '../components/shared/SectionHeader'
import { classes } from '../data/gym'

export default function FeaturedClasses() {
  const [activeClass, setActiveClass] = useState(classes[0])

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#050507' }}>
      
      {/* Dynamic Background Glow matching active discipline */}
      <div 
        className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none opacity-10 transition-all duration-700"
        style={{
          background: activeClass.id % 2 === 0 ? 'radial-gradient(circle, #FF1A22 0%, transparent 70%)' : 'radial-gradient(circle, #FF7A00 0%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="DISCIPLINES"
          subtitle="Five modular athletic realms. Engineered for extreme human output."
          light
        />

        {/* Split Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12 items-stretch min-h-[520px]">
          
          {/* LEFT: Cinematic Parallax Image Frame */}
          <div className="lg:col-span-6 relative overflow-hidden rounded-3xl border border-white border-opacity-5 h-[350px] lg:h-auto shadow-2xl flex flex-col justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeClass.id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.55 }}
                className="absolute inset-0 z-0"
              >
                <img
                  src={activeClass.image}
                  alt={activeClass.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient Overlays */}
            <div 
              className="absolute inset-0 z-10"
              style={{
                background: 'linear-gradient(to top, rgba(5, 5, 7, 0.95) 0%, rgba(5, 5, 7, 0.4) 60%, transparent 100%)'
              }}
            />

            {/* Float floating metrics label on image */}
            <div className="relative z-20 p-8">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 mb-2"
              >
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white bg-opacity-5 border border-white border-opacity-10 text-xs font-semibold uppercase tracking-widest text-[#FF1A22]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  <Zap size={11} className="animate-pulse" /> {activeClass.intensity} Intensity
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white bg-opacity-5 border border-white border-opacity-10 text-xs font-semibold uppercase tracking-widest text-[#FF7A00]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  <Clock size={11} /> {activeClass.duration}
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 font-barlow text-lg leading-relaxed max-w-md"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {activeClass.description}
              </motion.p>
            </div>
          </div>

          {/* RIGHT: Vertical Discipline Selector Deck */}
          <div className="lg:col-span-6 flex flex-col gap-3 justify-center">
            {classes.map((cls) => {
              const isActive = activeClass.id === cls.id
              
              return (
                <div
                  key={cls.id}
                  onMouseEnter={() => {
                    setActiveClass(cls)
                  }}
                  className="w-full text-left transition-all duration-300 cursor-pointer"
                >
                  <motion.div
                    animate={{
                      background: isActive 
                        ? 'linear-gradient(90deg, rgba(255, 26, 34, 0.08) 0%, rgba(255, 122, 0, 0.02) 100%)' 
                        : 'rgba(18, 18, 22, 0.2)',
                      borderColor: isActive ? 'rgba(255, 26, 34, 0.3)' : 'rgba(255, 255, 255, 0.03)'
                    }}
                    className="p-5 rounded-2xl border flex flex-col gap-2 group relative overflow-hidden"
                  >
                    {/* Left glowing neon border stripe */}
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-1 transition-transform duration-300 origin-bottom"
                      style={{
                        background: cls.id % 2 === 0 ? 'linear-gradient(to bottom, #FF1A22, #FF7A00)' : 'linear-gradient(to bottom, #FF7A00, #FFBF00)',
                        transform: isActive ? 'scaleY(1)' : 'scaleY(0)'
                      }}
                    />

                    {/* Class header line */}
                    <div className="flex items-center justify-between">
                      <h3
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        className={`text-2xl md:text-3xl tracking-wide uppercase transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-500'}`}
                      >
                        {cls.name}
                      </h3>
                      
                      {/* Interactive indicator arrow */}
                      <div className={`transition-transform duration-300 ${isActive ? 'translate-x-1 text-[#FF1A22]' : 'text-gray-600'}`}>
                        <ArrowRight size={18} />
                      </div>
                    </div>

                    {/* Expandable info tray (buttery smooth motion) */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isActive ? 'auto' : 0,
                        opacity: isActive ? 1 : 0
                      }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400 font-barlow" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                        <span className="flex items-center gap-1.5"><User size={13} className="text-[#FF1A22]" /> Coached by: <b className="text-white font-semibold">{cls.trainer}</b></span>
                        <span className="text-gray-600">·</span>
                        <span className="flex items-center gap-1">Schedule: <b className="text-white font-semibold">{cls.days.join(', ')}</b></span>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              )
            })}
          </div>

        </div>

        {/* View Schedule Button */}
        <div className="text-center mt-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              to="/schedule"
              className="inline-flex items-center gap-3 px-10 py-4 uppercase font-bold tracking-widest transition-all relative overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, #FF1A22 0%, #FF6B35 100%)', 
                color: '#fff', 
                fontFamily: "'Barlow Condensed', sans-serif",
                boxShadow: '0 4px 15px rgba(255, 26, 34, 0.25)'
              }}
            >
              View Full Schedule
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
