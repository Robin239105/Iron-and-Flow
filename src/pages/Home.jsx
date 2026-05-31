import { motion } from 'framer-motion'
import HeroSection from '../sections/HeroSection'
import MarqueeTicker from '../sections/MarqueeTicker'
import StatsBar from '../sections/StatsBar'
import FeaturedClasses from '../sections/FeaturedClasses'
import WhyUsSection from '../sections/WhyUsSection'
import TestimonialsSection from '../sections/TestimonialsSection'
import GalleryPreview from '../sections/GalleryPreview'
import CTABanner from '../sections/CTABanner'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <HeroSection />
      <MarqueeTicker />
      <StatsBar />
      <FeaturedClasses />
      <WhyUsSection />
      <TestimonialsSection />
      <GalleryPreview />
      <CTABanner />
    </motion.div>
  )
}
