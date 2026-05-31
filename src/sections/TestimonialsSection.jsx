import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionHeader from '../components/shared/SectionHeader'
import { testimonials } from '../data/gym'

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  function goNext() {
    setActive((prev) => (prev + 1) % testimonials.length)
  }

  function goPrev() {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const activeTestimonial = testimonials[active]

  // Slide content variants
  const slideVariants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 120 : -120,
      scale: 0.95
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 120, damping: 18 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -120 : 120,
      scale: 0.95,
      transition: { duration: 0.25 }
    })
  }

  return (
    <section className="py-24 px-6 relative overflow-hidden z-20" style={{ background: '#050507' }}>
      
      {/* Decorative ambient glowing sphere */}
      <div 
        className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(circle, #FF7A00 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="ATHLETE VOICES"
          subtitle="Real outputs. Real human transformation. Straight from the Shoreditch floor."
          light
        />

        {/* Carousel Deck Frame */}
        <div className="relative mt-12 min-h-[340px] flex items-center justify-center">
          
          {/* Decorative Giant glowing background Quotation mark */}
          <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 text-[#FF1A22] opacity-[0.03] pointer-events-none">
            <Quote size={280} fill="currentColor" stroke="none" />
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full p-8 md:p-12 rounded-3xl border border-white border-opacity-5 flex flex-col gap-6 relative shadow-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(28, 28, 30, 0.55) 0%, rgba(18, 18, 22, 0.7) 100%)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Stars & Tier Info */}
              <div className="flex justify-between items-center flex-wrap gap-4">
                <div className="flex gap-1.5">
                  {Array.from({ length: activeTestimonial.stars }).map((_, i) => (
                    <Star key={i} size={15} fill="#FF1A22" color="#FF1A22" />
                  ))}
                </div>
                <span 
                  className="px-3 py-1 bg-white bg-opacity-5 border border-white border-opacity-10 text-[10px] uppercase font-bold tracking-widest text-[#FF7A00] font-barlow"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Verified Member
                </span>
              </div>

              {/* Quotation Body */}
              <p
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                className="text-xl md:text-2xl text-gray-200 leading-relaxed italic"
              >
                &ldquo;{activeTestimonial.quote}&rdquo;
              </p>

              {/* Profile Details */}
              <div className="flex items-center gap-4 mt-4 border-t border-white border-opacity-5 pt-6">
                <div
                  className="w-14 h-14 rounded-full overflow-hidden shrink-0 shadow-lg"
                  style={{ border: '2px solid #FF1A22' }}
                >
                  <img 
                    src={activeTestimonial.avatar} 
                    alt={activeTestimonial.name} 
                    loading="lazy" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h4 
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }} 
                    className="text-white text-xl tracking-wide uppercase font-semibold"
                  >
                    {activeTestimonial.name}
                  </h4>
                  <p 
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }} 
                    className="text-xs text-gray-400 mt-0.5 uppercase tracking-widest font-semibold"
                  >
                    {activeTestimonial.tier} <span className="text-[#FF1A22]">·</span> {activeTestimonial.years} year{activeTestimonial.years > 1 ? 's' : ''} with us
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Interface Progress Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-8">
          
          {/* Progress gauge bar */}
          <div className="flex items-center gap-3 w-full sm:max-w-[200px]">
            <span className="text-xs text-gray-500 font-bold font-oswald" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {(active + 1).toString().padStart(2, '0')}
            </span>
            <div className="flex-grow bg-white bg-opacity-5 h-1 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#FF1A22] to-[#FF7A00]"
                animate={{ width: `${((active + 1) / testimonials.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <span className="text-xs text-gray-600 font-bold font-oswald" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {testimonials.length.toString().padStart(2, '0')}
            </span>
          </div>

          {/* Nav arrows */}
          <div className="flex gap-2">
            <button
              onClick={goPrev}
              aria-label="Previous Testimonial"
              className="flex items-center justify-center transition-all hover:bg-white hover:bg-opacity-10 border border-white border-opacity-10 active:scale-95 shadow-md"
              style={{ width: '44px', height: '44px', background: 'rgba(255,255,255,0.02)', borderRadius: '50%' }}
            >
              <ChevronLeft size={18} color="#fff" />
            </button>
            <button
              onClick={goNext}
              aria-label="Next Testimonial"
              className="flex items-center justify-center transition-all hover:bg-[#FF1A22] border-none active:scale-95 shadow-md"
              style={{ width: '44px', height: '44px', background: 'rgba(255, 26, 34, 0.85)', borderRadius: '50%' }}
            >
              <ChevronRight size={18} color="#fff" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
