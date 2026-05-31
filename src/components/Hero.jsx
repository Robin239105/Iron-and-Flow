import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { heroImage } from '../data/images'

const words = ['IRON', '&', 'FLOW']

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{ background: '#0A0A0A' }}
    >
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.82)' }} />
      {/* Red radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 60% 40%, rgba(232,24,27,0.18) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-barlow font-semibold uppercase tracking-[0.4em] text-sm mb-4"
          style={{ color: '#E8181B' }}
        >
          Premium CrossFit & Strength Training — Est. 2019
        </motion.p>

        {/* Main title */}
        <div className="flex flex-wrap justify-center gap-x-6 mb-4">
          {words.map((word, i) => (
            <motion.span
              key={word + i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-bebas text-white leading-none"
              style={{ fontSize: 'clamp(80px, 18vw, 180px)', letterSpacing: '0.02em' }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.5 }}
          className="font-bebas uppercase tracking-widest mb-6"
          style={{ fontSize: 'clamp(28px, 5vw, 52px)', color: '#E8181B', letterSpacing: '0.1em' }}
        >
          Train Hard. Flow Harder.
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15 }}
          className="font-barlow font-light text-lg tracking-wide max-w-xl mx-auto mb-10"
          style={{ color: '#9CA3AF' }}
        >
          Where elite athletes are forged. No shortcuts. No excuses. Just results.
          Join London's most intense CrossFit community.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#membership"
            className="font-barlow font-bold uppercase tracking-[0.15em] text-white px-8 py-4 text-base transition-colors"
            style={{ background: '#E8181B' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#A01214')}
            onMouseLeave={e => (e.currentTarget.style.background = '#E8181B')}
          >
            Start Free Trial
          </a>
          <a
            href="#schedule"
            className="font-barlow font-bold uppercase tracking-[0.15em] text-white px-8 py-4 text-base border-2 border-white transition-all hover:bg-white hover:text-black"
          >
            View Schedule
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ color: '#6B6B6B' }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  )
}
