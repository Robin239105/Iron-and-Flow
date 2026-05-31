import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Shield, Dumbbell, Clock } from 'lucide-react'
import SectionHeader from '../components/shared/SectionHeader'

export default function WhyUsSection() {
  const [time, setTime] = useState(new Date())

  // Keep clock ticking for 24/7 access card
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Calculate gym traffic dynamically based on time of day
  function getGymTraffic(date) {
    const hour = date.getHours()
    if (hour >= 6 && hour < 9) return { status: 'Peak Hours', percent: 85, color: '#FF1A22' }
    if (hour >= 9 && hour < 12) return { status: 'Moderate', percent: 50, color: '#FF7A00' }
    if (hour >= 12 && hour < 14) return { status: 'Lunch Rush', percent: 75, color: '#FF1A22' }
    if (hour >= 14 && hour < 17) return { status: 'Quiet Floor', percent: 30, color: '#10B981' }
    if (hour >= 17 && hour < 20) return { status: 'Peak Hours', percent: 90, color: '#FF1A22' }
    if (hour >= 20 && hour < 23) return { status: 'Moderate', percent: 45, color: '#FF7A00' }
    return { status: 'Midnight Keycard Open', percent: 10, color: '#10B981' }
  }

  const traffic = getGymTraffic(time)

  // Circular dial math
  const resultsCircumference = 2 * Math.PI * 22

  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: '#09090b' }}>
      
      {/* Background grids and glowing accents */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[180px] pointer-events-none opacity-5 bg-[#FF1A22]" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="THE SHOREDITCH EDGE" 
          subtitle="Why elite athletes and high-performers choose Iron & Flow. Designed without compromise." 
          light 
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          
          {/* CARD 1: Huge Parallax Floor Image (Col-span-2 on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 relative overflow-hidden rounded-3xl border border-white border-opacity-5 h-[340px] md:h-auto min-h-[360px] group shadow-xl flex flex-col justify-end p-8"
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1000&q=80"
                alt="Iron and Flow gym floor"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Visual gradient cover */}
            <div 
              className="absolute inset-0 z-10"
              style={{ background: 'linear-gradient(to top, rgba(9,9,11,0.95) 0%, rgba(9,9,11,0.4) 70%, transparent 100%)' }}
            />

            {/* Float badge */}
            <div className="relative z-20 flex flex-col gap-2 max-w-lg">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-[#FF1A22] text-xs font-bold uppercase tracking-widest text-white w-fit" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                <Shield size={12} /> Elite Facility
              </span>
              <h3 className="text-white text-3xl font-bold uppercase tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                Shoreditch Warehouse Gym
              </h3>
              <p className="text-gray-300 font-barlow text-base leading-relaxed" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Spanning 8,000 sq ft of pure athletic environment. High-ceilings, concrete floors, custom acoustic setups, and state-of-the-art climate zone zoning. Built for high-volume functional training.
              </p>
            </div>
          </motion.div>

          {/* CARD 2: Real-time Gym Activity Traffic Clock */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-white border-opacity-5 p-8 flex flex-col justify-between shadow-xl"
            style={{ background: 'rgba(18, 18, 22, 0.65)', backdropFilter: 'blur(20px)' }}
          >
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                <Clock size={13} className="text-[#FF7A00]" /> 24/7 Athlete Access
              </div>
              <h4 className="text-white text-2xl font-bold uppercase tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                Live Club Activity
              </h4>
            </div>

            {/* Interactive Clock / Load visualizer */}
            <div className="my-6 flex items-center justify-between gap-4 p-4 rounded-2xl bg-white bg-opacity-5 border border-white border-opacity-5">
              <div className="flex flex-col">
                <span className="text-xs uppercase text-gray-400 font-semibold" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  London Time
                </span>
                <span className="text-white text-2xl font-bold tracking-widest" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
                </span>
              </div>

              {/* Traffic load gauge */}
              <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded text-white mb-1" style={{ background: traffic.color }}>
                  {traffic.status}
                </span>
                <span className="text-sm font-semibold text-gray-300 font-barlow" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Floor Cap: <b>{traffic.percent}%</b>
                </span>
              </div>
            </div>

            <p className="text-gray-400 font-barlow text-sm leading-relaxed" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Elite tier members gain keycard entry 24 hours a day, 365 days a year. Train on your timetable. Zero scheduling constraints.
            </p>
          </motion.div>

          {/* CARD 3: Interactive Blueprint Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl border border-white border-opacity-5 p-8 flex flex-col justify-between shadow-xl"
            style={{ background: 'rgba(18, 18, 22, 0.65)', backdropFilter: 'blur(20px)' }}
          >
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#FF1A22] font-semibold mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                <Dumbbell size={13} /> Equipment specs
              </div>
              <h4 className="text-white text-2xl font-bold uppercase tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                Competition Grade
              </h4>
            </div>

            {/* Grid Blueprint Specifications */}
            <div className="my-6 flex flex-col gap-2 font-barlow text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              <div className="flex justify-between border-b border-white border-opacity-5 pb-1">
                <span className="text-gray-400">Barbells</span>
                <span className="text-white font-semibold">Eleiko &amp; Rogue Steel</span>
              </div>
              <div className="flex justify-between border-b border-white border-opacity-5 pb-1">
                <span className="text-gray-400">Racks</span>
                <span className="text-white font-semibold">Custom Rogue Rigging</span>
              </div>
              <div className="flex justify-between border-b border-white border-opacity-5 pb-1">
                <span className="text-gray-400">Bumper Plates</span>
                <span className="text-white font-semibold">Competition Polyurethane</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Cardio</span>
                <span className="text-white font-semibold">Concept2 &amp; Assault Elite</span>
              </div>
            </div>

            <p className="text-gray-400 font-barlow text-sm leading-relaxed" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Every barbell, bearing, and cable machine is carefully maintained. Built for professional performance, lifting accuracy, and biomechanical safety.
            </p>
          </motion.div>

          {/* CARD 4: Proven Results Metrics Card (Col-span-2 on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 relative overflow-hidden rounded-3xl border border-white border-opacity-5 p-8 flex flex-col justify-between shadow-xl"
            style={{ background: 'rgba(18, 18, 22, 0.65)', backdropFilter: 'blur(20px)' }}
          >
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-green-500 font-semibold mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                <Trophy size={13} /> Performance analytics
              </div>
              <h4 className="text-white text-2xl font-bold uppercase tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                Proven Results Metrics
              </h4>
            </div>

            {/* Twin Circular Indicators */}
            <div className="my-6 grid grid-cols-2 gap-4">
              
              {/* Metric 1 */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white bg-opacity-5 border border-white border-opacity-5">
                <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                  <svg className="absolute w-full h-full -rotate-90">
                    <circle cx="28" cy="28" r="22" stroke="rgba(255,255,255,0.03)" strokeWidth="3" fill="transparent" />
                    <circle cx="28" cy="28" r="22" stroke="#10B981" strokeWidth="3" fill="transparent" strokeDasharray={resultsCircumference} strokeDashoffset={resultsCircumference * 0.15} />
                  </svg>
                  <span className="text-white text-xs font-bold font-oswald" style={{ fontFamily: "'Oswald', sans-serif" }}>+12kg</span>
                </div>
                <div>
                  <h5 className="text-white text-sm font-semibold uppercase leading-none font-bebas" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Muscle Gained</h5>
                  <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider font-barlow" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Avg / 6 Months</span>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white bg-opacity-5 border border-white border-opacity-5">
                <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                  <svg className="absolute w-full h-full -rotate-90">
                    <circle cx="28" cy="28" r="22" stroke="rgba(255,255,255,0.03)" strokeWidth="3" fill="transparent" />
                    <circle cx="28" cy="28" r="22" stroke="#FF1A22" strokeWidth="3" fill="transparent" strokeDasharray={resultsCircumference} strokeDashoffset={resultsCircumference * 0.22} />
                  </svg>
                  <span className="text-white text-xs font-bold font-oswald" style={{ fontFamily: "'Oswald', sans-serif" }}>-8.6kg</span>
                </div>
                <div>
                  <h5 className="text-white text-sm font-semibold uppercase leading-none font-bebas" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Fat Reduced</h5>
                  <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider font-barlow" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Avg / 6 Months</span>
                </div>
              </div>

            </div>

            <p className="text-gray-300 font-barlow text-sm leading-relaxed" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Our methodology does not rely on guesswork. We track body composition, strength milestones, and kinetic recovery rates with dedicated athlete profiles. The numbers speak for themselves.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
