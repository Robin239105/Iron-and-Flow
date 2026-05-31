import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, Calendar, MapPin, Sparkles, Activity, Clock, Users, Shield } from 'lucide-react'

const slides = [
  {
    id: 1,
    image: '/hero_crossfit.png',
    line1: 'TRAIN',
    line2: 'HARD.',
    line2color: '#FF1A22',
    sub: "London's most results-driven CrossFit box. Elite coaching, competition-grade equipment, zero excuses.",
    cta1: { label: 'Start Free Trial', to: '/membership' },
    cta2: { label: 'View Schedule', to: '/schedule', icon: 'calendar' },
    tag: 'CrossFit & Strength',
    liveClass: { name: 'CrossFit WOD', coach: 'Jade Osei', spots: '3 slots left', time: '6:30 PM' }
  },
  {
    id: 2,
    image: '/hero_powerlifting.png',
    line1: 'LIFT',
    line2: 'HEAVY.',
    line2color: '#FF1A22',
    sub: 'Competition-grade barbells, racks and platforms. Coached powerlifting cycles for every level — beginner to elite.',
    cta1: { label: 'Join Now', to: '/membership' },
    cta2: { label: 'Meet the Coaches', to: '/coaches', icon: 'users' },
    tag: 'Powerlifting & Strength',
    liveClass: { name: 'Powerlifting', coach: 'Marcus Reid', spots: '2 slots left', time: '6:00 PM' }
  },
  {
    id: 3,
    image: '/hero_yoga.png',
    line1: 'FLOW',
    line2: 'HARDER.',
    line2color: '#FF7A00',
    sub: 'Athletic yoga meets functional mobility. Train harder by recovering smarter. Balance strength with flow.',
    cta1: { label: 'See All Classes', to: '/schedule' },
    cta2: { label: 'Our Membership', to: '/membership', icon: 'shield' },
    tag: 'Yoga Flow & Recovery',
    liveClass: { name: 'Flow Yoga', coach: 'Priya Nair', spots: '5 slots left', time: '7:30 PM' }
  },
  {
    id: 4,
    image: '/hero_boxing.png',
    line1: 'NO',
    line2: 'LIMITS.',
    line2color: '#FF1A22',
    sub: '500+ members. 12 elite coaches. One community that refuses to settle. Come find out what you\'re truly capable of.',
    cta1: { label: 'Join the Community', to: '/membership' },
    cta2: { label: 'See Transformations', to: '/gallery', icon: 'sparkles' },
    tag: 'Boxing & HIIT',
    liveClass: { name: 'Boxing Fundamentals', coach: 'Sam Vega', spots: 'Full (Waitlist Open)', time: '8:00 PM' }
  },
  {
    id: 5,
    image: '/hero_transformation.png',
    line1: 'GET',
    line2: 'RESULTS.',
    line2color: '#FF1A22',
    sub: 'Real people. Real transformations. Our members average 12kg body composition change in their first 6 months.',
    cta1: { label: 'Start Today', to: '/membership' },
    cta2: { label: 'View Gallery', to: '/gallery', icon: 'sparkles' },
    tag: 'Real Transformations',
    liveClass: { name: 'HIIT Circuit', coach: 'Tyler Brooks', spots: '4 slots left', time: '6:30 PM' }
  },
]

const INTERVAL = 7000

// Split-text animation helper - declared outside render to prevent recreate resets
function SplitText({ text, outline = false }) {
  const letters = text.split("")
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.05 * i },
    }),
  }
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -60,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.span
      style={{
        display: 'inline-flex',
        overflow: 'hidden',
        WebkitTextStroke: outline ? '1px rgba(255,255,255,0.06)' : 'none',
        color: outline ? 'transparent' : 'inherit'
      }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block', willChange: 'transform' }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (paused) return
    const start = Date.now()
    const tick = setInterval(() => {
      const elapsed = Date.now() - start
      setProgress(Math.min((elapsed / INTERVAL) * 100, 100))
    }, 50)
    const timer = setTimeout(() => {
      goNext()
    }, INTERVAL)
    return () => { clearTimeout(timer); clearInterval(tick) }
  }, [current, paused])

  function goNext() {
    setProgress(0)
    setCurrent((c) => (c + 1) % slides.length)
  }
  function goPrev() {
    setProgress(0)
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
  }
  function goTo(i) {
    setProgress(0)
    setCurrent(i)
  }

  const slide = slides[current]

  // Dynamic zoom for the Ken Burns slider effect
  const bgVariants = {
    enter: { scale: 1.12, opacity: 0 },
    center: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        scale: { duration: 7, ease: 'linear' }, 
        opacity: { duration: 0.8 } 
      } 
    },
    exit: { scale: 0.95, opacity: 0, transition: { duration: 0.8 } }
  }

  return (
    <section
      className="relative overflow-hidden flex flex-col justify-between"
      style={{ height: '100vh', minHeight: '650px', background: '#050507' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Film Grain Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }}
      />

      {/* Cinematic Ken Burns sliding background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={true} mode="popLayout">
          <motion.div
            key={slide.id}
            variants={bgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover object-center"
              style={{ filter: 'brightness(0.32) contrast(1.15) saturate(1.1)' }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Double Gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none z-1"
        style={{
          background: 'linear-gradient(to right, rgba(5,5,7,0.95) 0%, rgba(5,5,7,0.65) 45%, rgba(5,5,7,0.1) 100%)'
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-1"
        style={{
          background: 'linear-gradient(to top, rgba(5,5,7,1) 0%, rgba(5,5,7,0.3) 50%, transparent 100%)'
        }}
      />
      {/* Deep glowing crimson accent background */}
      <div
        className="absolute inset-0 pointer-events-none z-1"
        style={{
          background: 'radial-gradient(circle at 10% 40%, rgba(255, 26, 34, 0.08) 0%, transparent 50%)'
        }}
      />

      {/* Giant Ghost Text Background */}
      <div
        className="absolute right-0 top-1/3 -translate-y-1/2 pointer-events-none z-0 hidden lg:block overflow-hidden select-none"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '22vw',
          lineHeight: 0.8,
          letterSpacing: '0.04em',
          color: 'transparent',
          WebkitTextStroke: '2px rgba(255, 255, 255, 0.02)',
        }}
      >
        ATHLETE
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 flex-grow flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-12 w-full pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          
          {/* Left Hero Text Panel */}
          <div className="lg:col-span-8">
            {/* Animated Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs uppercase tracking-widest font-semibold border-l-2"
                style={{ 
                  background: 'linear-gradient(90deg, rgba(255, 26, 34, 0.15) 0%, transparent 100%)', 
                  borderLeftColor: slide.line2color, 
                  color: '#fff', 
                  fontFamily: "'Barlow Condensed', sans-serif" 
                }}
              >
                <MapPin size={12} className="text-[#FF1A22]" /> {slide.tag}
              </span>
              <span
                className="text-xs uppercase tracking-widest flex items-center gap-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#8E919F' }}
              >
                <Sparkles size={11} className="text-[#FF7A00]" /> Shoreditch, London · Est. 2019
              </span>
            </div>

            {/* Split Character Headings */}
            <h1 className="select-none leading-[0.85] mb-6 flex flex-col">
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(5rem, 14vw, 10.5rem)',
                  color: '#fff',
                  letterSpacing: '0.02em',
                }}
              >
                <SplitText text={slide.line1} />
              </span>
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(5rem, 14vw, 10.5rem)',
                  color: slide.line2color,
                  letterSpacing: '0.02em',
                }}
              >
                <SplitText text={slide.line2} />
              </span>
            </h1>

            {/* Subtext */}
            <div className="flex items-start gap-4 mb-8 max-w-xl">
              <div 
                className="w-1 min-h-[56px] rounded" 
                style={{ background: `linear-gradient(to bottom, ${slide.line2color}, transparent)`, flexShrink: 0 }} 
              />
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#D1D5DB', fontSize: '1.25rem', lineHeight: 1.6 }}>
                {slide.sub}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={slide.cta1.to}
                  className="flex items-center gap-3 px-8 py-4 font-bold uppercase tracking-widest transition-all group relative overflow-hidden"
                  style={{ 
                    background: 'linear-gradient(135deg, #FF1A22 0%, #FF6B35 100%)', 
                    color: '#fff', 
                    fontFamily: "'Barlow Condensed', sans-serif", 
                    fontSize: '0.9rem', 
                    letterSpacing: '0.25em',
                    boxShadow: '0 4px 20px rgba(255, 26, 34, 0.3)'
                  }}
                >
                  {/* Sweep shimmer overlay */}
                  <span className="absolute inset-0 w-full h-full bg-white bg-opacity-10 -translate-x-full skew-x-12 transition-transform duration-1000 group-hover:translate-x-full" />
                  {slide.cta1.label}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={slide.cta2.to}
                  className="flex items-center gap-3 px-8 py-4 font-bold uppercase tracking-widest transition-all relative"
                  style={{ 
                    border: '1px solid rgba(255,255,255,0.15)', 
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(8px)',
                    color: '#fff', 
                    fontFamily: "'Barlow Condensed', sans-serif", 
                    fontSize: '0.9rem', 
                    letterSpacing: '0.25em' 
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF1A22'; e.currentTarget.style.color = '#FF1A22' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#fff' }}
                >
                  {slide.cta2.icon === 'calendar' && <Calendar size={14} />}
                  {slide.cta2.icon === 'users' && <Users size={14} />}
                  {slide.cta2.icon === 'shield' && <Shield size={14} />}
                  {slide.cta2.icon === 'sparkles' && <Sparkles size={14} />}
                  {slide.cta2.label}
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Floating Dashboard Panel */}
          <div className="lg:col-span-4 hidden lg:flex flex-col gap-6 items-end self-center pr-4">
            
            {/* Widget 1: Live Class Monitor */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.4, type: 'spring' }}
              className="w-full max-w-sm p-5 border border-white border-opacity-5 glass-effect text-left rounded-xl"
              style={{
                background: 'rgba(18, 18, 22, 0.65)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#FF1A22] font-bold">
                  <span className="w-2.5 h-2.5 bg-[#FF1A22] rounded-full animate-ping shrink-0" />
                  Live Spotlight
                </span>
                <span className="text-[10px] text-gray-400 bg-white bg-opacity-5 px-2 py-0.5 rounded uppercase font-semibold">
                  Today
                </span>
              </div>
              <h4 className="text-xl font-bold font-bebas text-white tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                {slide.liveClass.name}
              </h4>
              <div className="flex gap-4 text-sm text-gray-300 mt-2 font-barlow" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                <span className="flex items-center gap-1.5"><Clock size={13} className="text-[#FF7A00]" /> {slide.liveClass.time}</span>
                <span className="text-gray-500">·</span>
                <span>Coached by <b className="text-white">{slide.liveClass.coach}</b></span>
              </div>
              <div className="w-full bg-white bg-opacity-5 h-1.5 rounded-full overflow-hidden mt-4">
                <div 
                  className="h-full bg-gradient-to-r from-[#FF1A22] to-[#FF7A00]" 
                  style={{ width: slide.id === 4 ? '100%' : '80%' }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-2 font-barlow" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                <span>Availability</span>
                <span className="text-white font-bold uppercase tracking-wider">{slide.liveClass.spots}</span>
              </div>
            </motion.div>

            {/* Widget 2: Tribe Monitor */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.6, type: 'spring' }}
              className="w-full max-w-sm p-4 border border-white border-opacity-5 text-left rounded-xl"
              style={{
                background: 'rgba(18, 18, 22, 0.65)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
              }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#FF1A22] bg-opacity-10 text-[#FF1A22]">
                  <Activity size={20} className="animate-pulse" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-white tracking-wide uppercase font-barlow" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    SHOREDITCH CLUB
                  </h5>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5 font-barlow" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span><b>52 Athletes</b> training on the floor right now</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Pinned Bottom Panel */}
      <div className="relative z-20 w-full bg-gradient-to-t from-[#050507] to-transparent pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Stats strip */}
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {[
              { val: '500+', label: 'Active Athletes' },
              { val: '12', label: 'Elite Coaches' },
              { val: '#1', label: 'Box in Shoreditch' },
              { val: '24/7', label: 'Elite Club Access' },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span 
                  style={{ 
                    fontFamily: "'Oswald', sans-serif", 
                    fontSize: '1.65rem', 
                    fontWeight: 700, 
                    background: 'linear-gradient(135deg, #fff 30%, #A3A3C2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {s.val}
                </span>
                <div className="flex flex-col">
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.78rem', color: '#8E919F', letterSpacing: '0.12em', textTransform: 'uppercase', lineHeight: 1.1 }}>{s.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicators & Controls */}
          <div className="flex items-center gap-4">
            {/* Nav Arrows */}
            <div className="flex gap-2">
              <button
                onClick={goPrev}
                className="flex items-center justify-center transition-all hover:bg-white hover:bg-opacity-10 border border-white border-opacity-15 active:scale-95"
                style={{ width: '42px', height: '42px', background: 'rgba(255,255,255,0.02)' }}
              >
                <ChevronLeft size={16} color="#fff" />
              </button>
              <button
                onClick={goNext}
                className="flex items-center justify-center transition-all hover:bg-[#FF1A22] border-none active:scale-95"
                style={{ width: '42px', height: '42px', background: 'rgba(255, 26, 34, 0.85)' }}
              >
                <ChevronRight size={16} color="#fff" />
              </button>
            </div>

            {/* Slider count index */}
            <div className="flex items-center gap-2 font-bebas text-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>
              <span className="text-[#FF1A22] font-bold">{(current + 1).toString().padStart(2, '0')}</span>
              <span className="text-gray-600">/</span>
              <span className="text-gray-400">{slides.length.toString().padStart(2, '0')}</span>
            </div>

            {/* Premium circular loaders */}
            <div className="flex gap-2.5">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  className="relative flex items-center justify-center"
                  style={{ width: '22px', height: '22px' }}
                >
                  {/* Outer circle progress tracker */}
                  {i === current ? (
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle
                        cx="11"
                        cy="11"
                        r="9"
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="1.5"
                        fill="transparent"
                      />
                      <motion.circle
                        cx="11"
                        cy="11"
                        r="9"
                        stroke="#FF1A22"
                        strokeWidth="1.5"
                        fill="transparent"
                        strokeDasharray="56.5"
                        initial={{ strokeDashoffset: 56.5 }}
                        animate={{ strokeDashoffset: 56.5 - (56.5 * progress) / 100 }}
                        transition={{ duration: 0.05, ease: 'linear' }}
                      />
                    </svg>
                  ) : (
                    <div className="w-1.5 h-1.5 bg-white bg-opacity-25 rounded-full transition-all hover:bg-opacity-50" />
                  )}
                  {i === current && <div className="w-1.5 h-1.5 bg-[#FF1A22] rounded-full" />}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
