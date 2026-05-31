import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import SectionHeader from '../components/shared/SectionHeader'
import { galleryImages } from '../data/gym'

export default function GalleryPreview() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [containerWidth, setContainerWidth] = useState(400)
  const containerRef = useRef(null)

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

  const previewList = galleryImages.slice(0, 4) // Fetch core action photos

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

  // Handle drag listeners release
  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('touchend', handleMouseUp)
    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [])

  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: '#09090b' }}>
      
      {/* Background gradients */}
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full blur-[140px] pointer-events-none opacity-5 bg-[#FF7A00]" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="OUTCOMES & ACTION"
          subtitle="Real fitness results aren't spoken. They are seen. Swipe the transformation slider."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-stretch">
          
          {/* LEFT: Before/After Interactive Transformation Slider (Col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl border border-white border-opacity-5" style={{ background: 'rgba(18, 18, 22, 0.65)', backdropFilter: 'blur(20px)' }}>
            <div>
              <span className="flex items-center gap-1.5 px-3 py-1 bg-green-500 bg-opacity-10 text-xs font-bold uppercase tracking-widest text-green-500 w-fit mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                <Sparkles size={11} /> Visual proof
              </span>
              <h3 className="text-white text-2xl font-bold uppercase tracking-wide mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                180-Day Evolution
              </h3>
              <p className="text-gray-400 font-barlow text-sm leading-relaxed mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Meet Alex. By combining powerlifting cycles with structured HIIT and athletic flow recovery, he shed 9.2kg of body fat while gaining 4.5kg of lean muscle mass.
              </p>
            </div>

            {/* The Before/After Slider Container */}
            <div
              ref={containerRef}
              className="relative w-full h-[280px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white border-opacity-5"
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* Day 180 (After) Image - Stretches full container */}
              <img
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80"
                alt="After transformation"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute top-4 right-4 z-20 bg-[#09090b] bg-opacity-80 border border-white border-opacity-5 px-3 py-1 text-[10px] uppercase font-bold tracking-widest text-[#FF1A22] font-barlow" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Day 180 (After)
              </div>

              {/* Day 1 (Before) Image - Clipped based on sliderPosition */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden z-10"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"
                  alt="Before transformation"
                  className="absolute inset-y-0 left-0 max-w-none h-full object-cover pointer-events-none"
                  style={{ width: `${containerWidth}px` }}
                />
                <div className="absolute top-4 left-4 z-20 bg-[#09090b] bg-opacity-80 border border-white border-opacity-5 px-3 py-1 text-[10px] uppercase font-bold tracking-widest text-gray-400 font-barlow" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Day 01 (Before)
                </div>
              </div>

              {/* Central Separator Handle */}
              <div
                className="absolute inset-y-0 w-1 bg-white z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Visual handle controller center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-2 border-[#FF1A22] flex items-center justify-center shadow-lg">
                  <div className="flex gap-0.5">
                    <span className="w-0.5 h-3 bg-gray-400" />
                    <span className="w-0.5 h-3 bg-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            <span className="text-[10px] text-gray-500 uppercase tracking-widest text-center mt-3 font-semibold font-barlow" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Drag the center slider handle left and right
            </span>
          </div>

          {/* RIGHT: Grid Masonry Action Photos (Col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-4 h-full">
              {previewList.map((img, i) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative overflow-hidden rounded-2xl border border-white border-opacity-5 group h-[170px] lg:h-auto shadow-lg"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover ambient color overlay and labels */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] to-transparent opacity-0 group-hover:opacity-85 transition-opacity duration-300 z-10" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-3 group-hover:translate-y-0">
                    <span className="text-[#FF1A22] text-xs font-bold uppercase tracking-widest font-barlow" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      {img.category}
                    </span>
                    <h4 className="text-white text-lg font-bold uppercase font-bebas mt-0.5" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      {img.alt}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8 lg:mt-6">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-block"
              >
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-3 px-10 py-4 uppercase font-bold tracking-widest border border-white border-opacity-15 hover:bg-white hover:text-black transition-all font-barlow"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.9rem', color: '#fff' }}
                >
                  View Full Gallery
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
