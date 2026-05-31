import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/shared/PageHero'
import SectionHeader from '../components/shared/SectionHeader'
import { galleryImages } from '../data/gym'
import { Sparkles, Trophy, Clock } from 'lucide-react'

const categories = ['All', 'CrossFit', 'Strength', 'Transformations', 'Events']

const transformations = [
  {
    name: 'Alex M.',
    lost: '22kg Fat lost',
    gain: '+4.5kg Muscle',
    duration: '6 months',
    before: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80',
  },
  {
    name: 'Sarah K.',
    lost: '15kg Fat lost',
    gain: '+2.8kg Muscle',
    duration: '4 months',
    before: 'https://images.unsplash.com/photo-1590239926044-4131cc55fbc5?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
  },
  {
    name: 'James T.',
    lost: '18kg Fat lost',
    gain: '+5.2kg Muscle',
    duration: '5 months',
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80',
  },
]

// Reusable Self-Contained Before/After Comparison Slider Component
function TransformationCard({ item, index }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(300)

  const handleMove = (clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(position)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX)
    }
  }

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('touchend', handleMouseUp)
    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth)
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="p-6 rounded-3xl border border-white border-opacity-5 flex flex-col gap-6 shadow-2xl"
      style={{ background: 'rgba(18, 18, 22, 0.65)', backdropFilter: 'blur(20px)' }}
    >
      {/* Visual Sliders Display */}
      <div
        ref={containerRef}
        className="relative w-full h-[280px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white border-opacity-5"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER image */}
        <img
          src={item.after}
          alt="After transformation"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute top-3 right-3 z-20 bg-[#09090b] bg-opacity-80 border border-white border-opacity-5 px-2.5 py-1 text-[9px] uppercase font-bold tracking-widest text-[#FF1A22] font-barlow" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          After
        </div>

        {/* BEFORE image clipped */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden z-10"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={item.before}
            alt="Before transformation"
            className="absolute inset-y-0 left-0 max-w-none h-full object-cover pointer-events-none"
            style={{ width: `${containerWidth}px` }}
          />
          <div className="absolute top-3 left-3 z-20 bg-[#09090b] bg-opacity-80 border border-white border-opacity-5 px-2.5 py-1 text-[9px] uppercase font-bold tracking-widest text-gray-400 font-barlow" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Before
          </div>
        </div>

        {/* Separator Line */}
        <div
          className="absolute inset-y-0 w-1 bg-white z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border border-[#FF1A22] flex items-center justify-center shadow-lg">
            <div className="flex gap-0.5">
              <span className="w-0.5 h-2.5 bg-gray-400" />
              <span className="w-0.5 h-2.5 bg-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Details Box */}
      <div className="text-left flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h4 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-white text-2xl tracking-wide uppercase font-semibold leading-none">
            {item.name}
          </h4>
          <span className="flex items-center gap-1 text-[10px] text-gray-500 font-bold uppercase tracking-widest font-barlow" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <Clock size={11} className="text-[#FF7A00]" /> {item.duration}
          </span>
        </div>

        <div className="flex gap-3 text-xs font-barlow" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          <span className="flex items-center gap-1.5 px-3 py-1 bg-red-500 bg-opacity-10 border border-red-500 border-opacity-15 text-[#FF1A22] uppercase font-bold tracking-widest">
            <Trophy size={11} /> {item.lost}
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 bg-green-500 bg-opacity-10 border border-green-500 border-opacity-15 text-green-500 uppercase font-bold tracking-widest">
            <Sparkles size={11} /> {item.gain}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ background: '#050507', minHeight: '100vh' }}
    >
      <PageHero
        title="GALLERY"
        subtitle="Inside the walls — athletic grit and community outcomes."
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85"
      />

      {/* Action Photos Gallery */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <SectionHeader title="GYM ACTION PHOTOS" subtitle="Filter by athletic discipline to inspect the Shoreditch environment." light />

        {/* Carbon filter pills */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center p-1.5 bg-white bg-opacity-5 rounded-2xl w-fit mx-auto border border-white border-opacity-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-6 py-2.5 uppercase text-xs font-bold tracking-widest transition-all rounded-xl"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                background: activeCategory === cat ? '#FF1A22' : 'transparent',
                color: activeCategory === cat ? '#fff' : '#8E919F',
                boxShadow: activeCategory === cat ? '0 4px 15px rgba(255, 26, 34, 0.25)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Clean Responsive Mosaic Masonry */}
        <div
          style={{
            columns: '4 240px',
            gap: '8px',
          }}
        >
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className="group relative overflow-hidden mb-2 rounded-xl border border-white border-opacity-5 shadow"
                style={{ breakInside: 'avoid', display: 'block' }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full block object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay details */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-85 transition-opacity duration-300 flex flex-col justify-end p-4 z-10"
                  style={{ background: 'linear-gradient(to top, rgba(5,5,7,0.95) 0%, rgba(5,5,7,0.4) 60%, transparent 100%)' }}
                >
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-[#FF1A22] text-xs font-bold uppercase tracking-widest">
                    {img.category}
                  </span>
                  <h4 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-white text-base tracking-wide uppercase mt-0.5">
                    {img.alt}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Rebuilt Transformations Drag Section */}
      <section className="py-24" style={{ background: '#09090b' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="ATHLETE EVOLUTIONS" subtitle="Swipe and drag the center handle to see physical results in action." light />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {transformations.map((t, i) => (
              <TransformationCard key={t.name} item={t} index={i} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
