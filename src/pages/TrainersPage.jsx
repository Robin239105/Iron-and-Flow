import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Trophy, Award, ArrowRight } from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import SectionHeader from '../components/shared/SectionHeader'
import { trainers } from '../data/gym'

function TrainerCard({ trainer, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group relative overflow-hidden rounded-3xl border border-white border-opacity-5 flex flex-col shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, rgba(28, 28, 30, 0.45) 0%, rgba(18, 18, 22, 0.6) 100%)',
        backdropFilter: 'blur(16px)',
      }}
    >
      {/* Visual Accent Top Bar */}
      <div 
        className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
        style={{ background: 'linear-gradient(90deg, #FF1A22, #FF7A00)' }}
      />

      {/* Photo Frame Container */}
      <div className="relative overflow-hidden h-[380px] z-10">
        <img
          src={trainer.image}
          alt={trainer.name}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          style={{ filter: 'contrast(1.05) brightness(0.92)' }}
        />
        {/* Soft bottom dark grid shadow overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(5,5,7,0.98) 22%, rgba(5,5,7,0.2) 65%, transparent 100%)' }}
        />

        {/* Hover absolute sliding BIO sheet (High-end Glassmorphic Overlay) */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 z-20"
          style={{ 
            background: 'rgba(5, 5, 7, 0.95)',
            backdropFilter: 'blur(15px)'
          }}
        >
          {/* Decorative quote icon / credentials */}
          <div className="mb-4">
            <span className="flex items-center gap-1 bg-white bg-opacity-5 text-[10px] px-2 py-1 font-bold uppercase tracking-widest text-[#FF1A22] w-fit border border-white border-opacity-5" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              <Trophy size={11} /> Elite Credentials
            </span>
          </div>

          {/* Bio Text */}
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-gray-300 text-base leading-relaxed mb-6 font-semibold italic">
            &ldquo;{trainer.bio}&rdquo;
          </p>

          {/* Certification list badges */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {trainer.certs.map((c) => (
              <span
                key={c}
                className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded"
                style={{ 
                  background: 'rgba(255,255,255,0.06)', 
                  border: '1px solid rgba(255,255,255,0.06)',
                  color: '#fff', 
                  fontFamily: "'Barlow Condensed', sans-serif" 
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Name Overlay - hidden on hover when BIO slides up */}
        <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-200 z-15 text-left">
          <h3
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            className="text-white text-3xl tracking-wide uppercase font-semibold leading-none mb-1"
          >
            {trainer.name}
          </h3>
          <span 
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            className="text-xs uppercase tracking-widest text-[#FF1A22] font-bold"
          >
            {trainer.role}
          </span>
        </div>
      </div>

      {/* Info Static Panel (under photo) */}
      <div className="p-6 text-left">
        <h4 
          style={{ fontFamily: "'Bebas Neue', sans-serif" }} 
          className="text-white text-2xl tracking-wide uppercase font-semibold leading-none mb-1"
        >
          {trainer.name}
        </h4>
        <span 
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }} 
          className="text-xs uppercase tracking-widest text-[#FF1A22] font-semibold"
        >
          {trainer.role}
        </span>
        <p 
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }} 
          className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-1"
        >
          Discipline: <b className="text-gray-300 font-semibold">{trainer.specialty}</b>
        </p>

        {/* Mobile bio and certifications (only visible on touch/mobile screens, hidden on desktop md+) */}
        <div className="mt-4 pt-4 border-t border-white border-opacity-5 md:hidden text-left">
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-gray-300 text-sm leading-relaxed italic mb-4">
            &ldquo;{trainer.bio}&rdquo;
          </p>
          <div className="flex flex-wrap gap-1.5">
            {trainer.certs.map((c) => (
              <span
                key={c}
                className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded"
                style={{ 
                  background: 'rgba(255,255,255,0.06)', 
                  border: '1px solid rgba(255,255,255,0.06)',
                  color: '#fff', 
                  fontFamily: "'Barlow Condensed', sans-serif" 
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Dynamic Experience Counter */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white border-opacity-5">
          <span
            style={{ fontFamily: "'Oswald', sans-serif" }}
            className="text-[#FF7A00] text-2xl font-bold leading-none"
          >
            {trainer.years}
          </span>
          <span 
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }} 
            className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold"
          >
            Years Active Floor Coached
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function TrainersPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ background: '#050507', minHeight: '100vh' }}
    >
      <PageHero
        title="OUR COACHES"
        subtitle="12 elite mentors. zero compromise. pure human progression."
        image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=85"
      />

      <section className="py-24 max-w-7xl mx-auto px-6">
        <SectionHeader
          title="THE SHOREDITCH COACHES"
          subtitle="Hover any mentor card to unlock their core athletic specialties and credentials."
          light
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {trainers.map((t, i) => (
            <TrainerCard key={t.id} trainer={t} index={i} />
          ))}
        </div>
      </section>

      {/* Join our team CTA portal */}
      <section className="relative py-32 overflow-hidden z-20">
        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=85"
          alt="Join our team"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.24) contrast(1.15)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #050507 0%, rgba(5,5,7,0.85) 60%, #050507 100%)' }} />
        
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <span className="flex items-center gap-1.5 px-3 py-1 bg-[#FF1A22] text-xs font-bold uppercase tracking-widest text-white w-fit mx-auto mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <Award size={12} /> Elite standards
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.04em', lineHeight: 0.9 }}
            className="text-white uppercase font-bold"
          >
            INFLUENCE THE TRIBE
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            className="text-gray-300 text-lg uppercase tracking-widest mt-4 mb-10 max-w-xl mx-auto font-semibold"
          >
            We are always recruiting elite trainers with proven records. Have what it takes to guide Shoreditch's best?
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
                boxShadow: '0 4px 15px rgba(255, 26, 34, 0.3)'
              }}
            >
              Apply to Coach <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
