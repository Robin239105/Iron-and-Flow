import { motion } from 'framer-motion'

export default function PageHero({ title, subtitle, image }) {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden z-10"
      style={{ minHeight: '520px', background: '#050507' }}
    >
      {/* Background Film Grain Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }}
      />

      {/* Cinematic Ken Burns Image Load */}
      <motion.div
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-0 z-0"
      >
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.28) contrast(1.1)' }}
        />
      </motion.div>

      {/* Double Layer Dark Gradient Overlays */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(5,5,7,0.7) 0%, rgba(5,5,7,0.92) 80%, #050507 100%)'
        }}
      />
      
      {/* Red accent glow backing */}
      <div 
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 26, 34, 0.08) 0%, transparent 60%)'
        }}
      />

      {/* Giant Ghost Outline Text Watermark */}
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center pointer-events-none z-1 select-none overflow-hidden"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '15vw',
          lineHeight: 1,
          letterSpacing: '0.05em',
          color: 'transparent',
          WebkitTextStroke: '2px rgba(255, 255, 255, 0.015)',
          whiteSpace: 'nowrap'
        }}
      >
        {title}
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.04em', color: '#fff' }}
          className="text-5xl sm:text-7xl md:text-8xl leading-none"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-3 mt-4"
          >
            <div className="h-[1px] w-8 bg-[#FF1A22] rounded-full" />
            <p
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#FF1A22' }}
              className="text-lg sm:text-xl uppercase tracking-widest font-semibold"
            >
              {subtitle}
            </p>
            <div className="h-[1px] w-8 bg-[#FF1A22] rounded-full" />
          </motion.div>
        )}
      </div>

      {/* Crimson Bottom Accent stripe */}
      <div 
        className="absolute bottom-0 left-0 w-full h-1" 
        style={{ background: 'linear-gradient(90deg, transparent 0%, #FF1A22 50%, transparent 100%)' }}
      />
    </section>
  )
}
