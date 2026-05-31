import { motion } from 'framer-motion'
import PageHero from '../components/shared/PageHero'
import SectionHeader from '../components/shared/SectionHeader'

export default function SecurityNotice() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ background: '#050507', minHeight: '100vh' }}
    >
      <PageHero
        title="PRIVACY POLICY"
        subtitle="Sovereignty over your personal and training records."
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85"
      />

      <section className="py-24 max-w-4xl mx-auto px-6 relative">
        {/* Grid backgrounds */}
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="relative z-10 flex flex-col gap-10 font-barlow text-gray-300 text-lg leading-relaxed text-left" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          <div>
            <SectionHeader title="1. DATA SOVEREIGNTY" light centered={false} />
            <p className="mt-4">
              At **Iron &amp; Flow Gym**, we protect your personal metrics, training schedules, and contact credentials. We secure your records using isolated modern encryption and do not distribute or trade your data with external advertisers.
            </p>
          </div>

          <div>
            <SectionHeader title="2. METRIC STORAGE & CALCULATORS" light centered={false} />
            <p className="mt-4">
              When utilizing our **BMI Calculator** or reservation forms, your calculated inputs are processed client-side. If you submit a request for coached strength profiling, your body fat metrics and muscle mass estimates are stored securely inside your athlete dashboard, accessible only by your assigned coaches.
            </p>
          </div>

          <div>
            <SectionHeader title="3. COOKIE MANAGEMENT" light centered={false} />
            <p className="mt-4">
              We employ cookies to track session states, retain local plan calculator parameters, and secure login metrics. You can audit and deactivate tracking via your browser configurations; however, deactivating cookies may prevent smooth class bookings.
            </p>
          </div>

          <div>
            <SectionHeader title="4. DATA DELETION REQUESTS" light centered={false} />
            <p className="mt-4">
              Under GDPR, you retain complete sovereignty over your profile. You can request the instant purge of all email subscriptions, coaching files, and billing histories by contacting us at **info@ironandflow.co.uk**.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
