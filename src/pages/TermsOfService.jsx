import { motion } from 'framer-motion'
import PageHero from '../components/shared/PageHero'
import SectionHeader from '../components/shared/SectionHeader'

export default function TermsOfService() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ background: '#050507', minHeight: '100vh' }}
    >
      <PageHero
        title="TERMS OF SERVICE"
        subtitle="The rules of engagement inside the Shoreditch floor."
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
            <SectionHeader title="1. ATHLETE CONDUCT CODE" light centered={false} />
            <p className="mt-4">
              All athletes, members, and guest coaches must comply with floor rules: re-rack weights after lifting, keep competition platforms clear of obstructions, and treat coaches and community members with mutual respect.
            </p>
          </div>

          <div>
            <SectionHeader title="2. CLASS BOOKINGS & NO-SHOWS" light centered={false} />
            <p className="mt-4">
              CrossFit WOD, Boxing, and HIIT classes have tight floor capacities. Members must cancel bookings at least **2 hours** prior to class launch. Repeated failure to cancel slots may result in temporary priority booking holds.
            </p>
          </div>

          <div>
            <SectionHeader title="3. LIABILITIES & SAFETY" light centered={false} />
            <p className="mt-4">
              Strength training, heavy powerlifting, and intense conditioning are physically demanding. Members assume full physical responsibility. You must complete a Physical Activity Readiness Questionnaire (PAR-Q) before utilizing heavy plates or rig rigging.
            </p>
          </div>

          <div>
            <SectionHeader title="4. CANCELLATIONS & FREEZES" light centered={false} />
            <p className="mt-4">
              Starter and Warrior memberships carry zero lock-in contracts. You can freeze your account for up to **3 months** for travel or recovery reasons via your profile panel. Cancellations require a standard **30-day notice period**.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
