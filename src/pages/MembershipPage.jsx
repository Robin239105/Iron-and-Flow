import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, X, ChevronDown, Sparkles, Shield, ArrowRight } from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import SectionHeader from '../components/shared/SectionHeader'
import { memberships, faqs } from '../data/gym'

function MembershipCard({ plan, index }) {
  const isWarrior = plan.highlight
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="flex flex-col relative rounded-3xl border border-white border-opacity-5 overflow-hidden flex-1"
      style={{
        background: isWarrior 
          ? 'linear-gradient(135deg, rgba(232, 24, 27, 0.12) 0%, rgba(18, 18, 22, 0.75) 100%)' 
          : 'linear-gradient(135deg, rgba(28, 28, 30, 0.45) 0%, rgba(18, 18, 22, 0.6) 100%)',
        backdropFilter: 'blur(16px)',
        boxShadow: isWarrior ? '0 10px 40px rgba(255, 26, 34, 0.12)' : '0 10px 30px rgba(0,0,0,0.3)',
      }}
    >
      {/* Top hot border outline for featured popular card */}
      {isWarrior && (
        <div 
          className="absolute top-0 left-0 w-full h-1"
          style={{ background: 'linear-gradient(90deg, #FF1A22, #FF7A00)' }}
        />
      )}

      {isWarrior && (
        <div
          className="text-center py-2 uppercase text-[10px] tracking-widest font-bold text-white font-barlow flex items-center justify-center gap-1.5 border-b border-white border-opacity-5"
          style={{ background: 'rgba(255,26,34,0.15)', fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          <Sparkles size={11} className="text-[#FF7A00]" /> Most Popular Tier <Sparkles size={11} className="text-[#FF7A00]" />
        </div>
      )}

      <div className="p-8 flex flex-col flex-grow gap-8">
        <div>
          <h3
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            className="text-white text-3xl tracking-wide uppercase font-semibold"
          >
            {plan.name}
          </h3>
          <div className="flex items-baseline gap-1 mt-2">
            <span
              style={{ fontFamily: "'Oswald', sans-serif" }}
              className="text-white text-5xl font-bold tracking-tight"
            >
              £{plan.price}
            </span>
            <span 
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              className="text-gray-500 text-sm font-semibold uppercase tracking-wider ml-1"
            >
              / {plan.period}
            </span>
          </div>
        </div>

        {/* Feature List */}
        <div className="flex flex-col gap-3 flex-grow">
          {plan.features.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="p-0.5 rounded bg-green-500 bg-opacity-10 text-green-500 shrink-0 mt-1">
                <Check size={12} strokeWidth={3} />
              </div>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-gray-200 text-base leading-snug">{f}</span>
            </div>
          ))}
          {plan.missing.map((f, i) => (
            <div key={i} className="flex items-start gap-3 opacity-30">
              <div className="p-0.5 rounded bg-white bg-opacity-5 text-gray-500 shrink-0 mt-1">
                <X size={12} strokeWidth={3} />
              </div>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-gray-400 text-base leading-snug line-through">{f}</span>
            </div>
          ))}
        </div>

        {/* Dynamic CTAs */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            to="/contact"
            className="w-full block text-center py-4 uppercase tracking-widest text-xs font-bold transition-all relative overflow-hidden"
            style={{
              background: isWarrior 
                ? 'linear-gradient(135deg, #FF1A22 0%, #FF6B35 100%)' 
                : 'rgba(255, 255, 255, 0.03)',
              border: isWarrior ? 'none' : '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: '0.25em',
              boxShadow: isWarrior ? '0 4px 15px rgba(255, 26, 34, 0.3)' : 'none'
            }}
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-2xl border border-white border-opacity-5 overflow-hidden shadow-lg"
      style={{ background: 'rgba(18, 18, 22, 0.45)', backdropFilter: 'blur(20px)' }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-300 hover:bg-white hover:bg-opacity-5"
        onClick={() => setOpen(!open)}
      >
        <span 
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          className="text-white text-xl tracking-wider uppercase font-semibold"
        >
          {faq.question}
        </span>
        <div className={`transition-transform duration-300 ${open ? 'rotate-180 text-[#FF1A22]' : 'text-[#FF7A00]'}`}>
          <ChevronDown size={18} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div
              className="px-6 pb-6 pt-2 border-t border-white border-opacity-5"
              style={{ background: 'rgba(5, 5, 7, 0.3)' }}
            >
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-gray-400 text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function MembershipPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ background: '#050507', minHeight: '100vh' }}
    >
      <PageHero
        title="MEMBERSHIPS"
        subtitle="Choose your realm. Commit to your ultimate form."
        image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=85"
      />

      {/* Tier cards */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <SectionHeader
          title="MEMBERSHIP PLANS"
          subtitle="No joining fees, no lock-in terms. Complete athlete transparency."
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 items-stretch">
          {memberships.map((plan, i) => (
            <MembershipCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <SectionHeader title="REALM DETAILS" subtitle="Direct feature comparison across athletic layers" light />
        
        <div className="overflow-x-auto rounded-2xl border border-white border-opacity-5" style={{ background: 'rgba(18, 18, 22, 0.45)', backdropFilter: 'blur(20px)' }}>
          <table className="w-full" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }} className="bg-white bg-opacity-5">
                <th className="text-left py-4 px-6 text-xs uppercase tracking-widest text-gray-500 font-bold" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Features Specs</th>
                {memberships.map((m) => (
                  <th 
                    key={m.id} 
                    className="py-4 px-6 text-center text-sm uppercase tracking-widest font-semibold" 
                    style={{ fontFamily: "'Bebas Neue', sans-serif", color: m.highlight ? '#FF1A22' : '#fff' }}
                  >
                    {m.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Gym Access Hours', '6AM–10PM', '6AM–11PM', '24/7 Access'],
                ['Group Classes', '2 / week', 'Unlimited', 'Unlimited'],
                ['PT Sessions / Month', '—', '1 session', '4 sessions'],
                ['Nutrition Support', '—', 'Consultation', 'Full Coaching'],
                ['Guest Passes', '—', '2 / month', 'Unlimited'],
                ['Priority Booking', '—', 'Yes', 'Yes'],
                ['Dedicated Coach', '—', '—', 'Yes'],
                ['Body Comp Analysis', '—', '—', 'Quarterly'],
              ].map(([feature, ...vals]) => (
                <tr 
                  key={feature} 
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}
                  className="hover:bg-white hover:bg-opacity-5 transition-colors duration-200"
                >
                  <td className="py-3.5 px-6 text-gray-300 font-barlow text-sm font-semibold" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{feature}</td>
                  {vals.map((v, vi) => (
                    <td 
                      key={vi} 
                      className="py-3.5 px-6 text-center font-barlow text-sm font-semibold" 
                      style={{ 
                        fontFamily: "'Barlow Condensed', sans-serif", 
                        color: v === '—' ? '#3F3F46' : '#fff' 
                      }}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <SectionHeader title="MEMBERSHIP FAQS" subtitle="Clear answers. Zero complications." light />
        <div className="flex flex-col gap-4 mt-12">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </section>

      {/* High impact Bottom CTA portal */}
      <section className="relative py-28 overflow-hidden z-20">
        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=85"
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.22) contrast(1.1)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #050507 0%, rgba(5,5,7,0.85) 60%, #050507 100%)' }} />
        
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <span className="flex items-center gap-1.5 px-3 py-1 bg-[#FF1A22] text-xs font-bold uppercase tracking-widest text-white w-fit mx-auto mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <Shield size={12} /> RISK-FREE PROPOSAL
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.04em', lineHeight: 0.9 }}
            className="text-white uppercase font-bold"
          >
            FIRST MONTH FULLY COVERED
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            className="text-gray-300 text-lg uppercase tracking-widest mt-4 mb-10 max-w-xl mx-auto font-semibold"
          >
            Take 30 days to test the Shoreditch floor. Cancel anytime if it doesn't fit your speed.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block animate-pulse"
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
              Lock in your spots now <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
