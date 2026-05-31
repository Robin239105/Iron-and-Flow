import { motion } from 'framer-motion'

export default function SectionHeader({ title, subtitle, light = false, centered = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2
        style={{ fontFamily: "'Bebas Neue', sans-serif", color: light ? '#fff' : '#0A0A0A', letterSpacing: '0.05em' }}
        className="text-5xl md:text-6xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{ fontFamily: "'Barlow Condensed', sans-serif", color: light ? '#aaa' : '#6B6B6B' }}
          className="mt-3 text-lg md:text-xl max-w-2xl mx-auto"
        >
          {subtitle}
        </p>
      )}
      <div
        className="mt-4 h-1 w-16"
        style={{ background: '#E8181B', ...(centered ? { margin: '1rem auto 0' } : { marginTop: '1rem' }) }}
      />
    </motion.div>
  )
}
