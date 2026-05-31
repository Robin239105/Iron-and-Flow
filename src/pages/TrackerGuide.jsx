import { motion } from 'framer-motion'
import PageHero from '../components/shared/PageHero'
import SectionHeader from '../components/shared/SectionHeader'

export default function TrackerGuide() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ background: '#050507', minHeight: '100vh' }}
    >
      <PageHero
        title="COOKIE POLICY"
        subtitle="Transparent overview of active browser local metrics trackers."
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85"
      />

      <section className="py-24 max-w-4xl mx-auto px-6 relative">
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="relative z-10 flex flex-col gap-10 font-barlow text-gray-300 text-lg leading-relaxed text-left" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          <div>
            <SectionHeader title="1. WHAT COOKIES ARE ACTIVE?" light centered={false} />
            <p className="mt-4">
              Cookies are small, encrypted text strings stored inside your browser. We utilize them to track active sessions, map chosen membership tiers, and retain local BMI estimates so you do not need to re-enter values on return visits.
            </p>
          </div>

          <div>
            <SectionHeader title="2. PRIMARY FUNCTIONAL COOKIES" light centered={false} />
            <p className="mt-4">
              These are technically necessary to execute essential reservation actions. For example, retaining authentication states as you navigate from the schedule page to class detail screens requires a persistent cookie.
            </p>
          </div>

          <div>
            <SectionHeader title="3. ANALYTICAL COOKIES" light centered={false} />
            <p className="mt-4">
              We employ Google Analytics logs to analyze floor check-ins, traffic levels, and slider click-through frequencies. This data helps us allocate coach scheduling and Rig maintenance times. All records are completely anonymized.
            </p>
          </div>

          <div>
            <SectionHeader title="4. MANAGEMENT & SHUTDOWN" light centered={false} />
            <p className="mt-4">
              You can block analytical or functional trackers inside your browser settings at any point. Note that deactivating essential cookies will prevent active bookings and reset your local tier selections.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
