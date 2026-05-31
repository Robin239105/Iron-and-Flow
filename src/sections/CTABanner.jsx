import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Shield, Check } from 'lucide-react'

const planOptions = [
  { name: 'Starter', price: 39, desc: 'Full daily gym floor access from 6AM–10PM, including 2 classes per week.', tag: 'GREAT FOR BEGINNERS' },
  { name: 'Warrior', price: 69, desc: 'Unlimited classes, gym access 6AM–11PM, and monthly coached personal tuning.', tag: 'RECOMMENDED OPTION' },
  { name: 'Elite', price: 119, desc: '24/7 keycard access, recovery suite, unlimited classes, and dedicated coach.', tag: 'NO-COMPROMISE PERFORMANCE' },
]

export default function CTABanner() {
  const [selectedPlan, setSelectedPlan] = useState(1) // Default to Warrior
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  const activePlan = planOptions[selectedPlan]

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section ref={ref} className="relative py-28 px-6 overflow-hidden min-h-[580px] flex items-center z-20">
      
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 scale-110 z-0" style={{ y }}>
        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=85"
          alt="CTA background"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.24) contrast(1.1)' }}
        />
      </motion.div>

      {/* Double Overlays */}
      <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(to bottom, #050507 0%, rgba(5,5,7,0.7) 40%, #050507 100%)' }} />
      <div 
        className="absolute inset-0 z-1" 
        style={{ background: 'radial-gradient(circle at center, rgba(255, 26, 34, 0.12) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Text Portal Call (Col-span-6) */}
          <div className="lg:col-span-6 text-left">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-[#FF1A22] text-xs font-bold uppercase tracking-widest text-white w-fit mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              <Shield size={12} /> Ironclad Guarantee
            </span>
            
            <h2 
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: 0.9, letterSpacing: '0.04em' }}
              className="text-white uppercase font-bold"
            >
              READY TO LIFT?
            </h2>
            
            <p 
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              className="text-xl text-gray-300 uppercase tracking-widest mt-4 mb-6 font-semibold"
            >
              Join 500+ athletes who chose Iron &amp; Flow.
            </p>

            <p 
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              className="text-gray-400 text-lg leading-relaxed max-w-md"
            >
              No induction fee, no lock-in contract, and 30-day money-back guarantee on Starter/Warrior plans. Lock in your trial slot in 10 seconds.
            </p>
          </div>

          {/* RIGHT: Glassmorphic Membership Selector & form (Col-span-6) */}
          <div className="lg:col-span-6">
            <div 
              className="p-8 rounded-3xl border border-white border-opacity-5 flex flex-col gap-6 relative shadow-2xl overflow-hidden"
              style={{
                background: 'rgba(18, 18, 22, 0.65)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Plan Switcher tabs */}
              <div className="flex gap-2 p-1.5 bg-white bg-opacity-5 rounded-xl border border-white border-opacity-5">
                {planOptions.map((opt, idx) => (
                  <button
                    key={opt.name}
                    onClick={() => setSelectedPlan(idx)}
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    className={`flex-grow py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${selectedPlan === idx ? 'bg-[#FF1A22] text-white shadow' : 'text-gray-400 hover:text-white'}`}
                  >
                    {opt.name}
                  </button>
                ))}
              </div>

              {/* Dynamic pricing and details (Framer Motion Crossfade) */}
              <div className="min-h-[120px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedPlan}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex justify-between items-baseline">
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{activePlan.tag}</span>
                      <div className="flex items-baseline" style={{ fontFamily: "'Oswald', sans-serif" }}>
                        <span className="text-white text-3xl font-bold">£{activePlan.price}</span>
                        <span className="text-gray-500 text-sm font-semibold">/month</span>
                      </div>
                    </div>
                    <p className="text-gray-300 font-barlow text-base leading-relaxed mt-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      {activePlan.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Submission Form */}
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="flex flex-col gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="Enter your email to lock in rates"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-5 py-4 rounded-xl border border-white border-opacity-10 bg-white bg-opacity-5 text-white font-barlow focus:outline-none transition-all placeholder-gray-500 text-sm"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 text-sm font-bold uppercase tracking-widest transition-all select-none"
                      style={{ 
                        background: 'linear-gradient(135deg, #FF1A22 0%, #FF6B35 100%)', 
                        color: '#fff', 
                        fontFamily: "'Barlow Condensed', sans-serif",
                        boxShadow: '0 4px 15px rgba(255, 26, 34, 0.3)'
                      }}
                    >
                      Secure trial rate <span className="ml-1">→</span>
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    className="p-5 rounded-2xl bg-green-500 bg-opacity-10 border border-green-500 border-opacity-20 flex flex-col gap-2 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white mx-auto shadow mb-1 animate-bounce">
                      <Check size={18} strokeWidth={3} />
                    </div>
                    <h4 className="text-white font-bebas text-xl tracking-wide uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      Spot Reserved!
                    </h4>
                    <p className="text-gray-300 font-barlow text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      We have locked in your <b>{activePlan.name}</b> tier discount. Check your inbox at <b>{email}</b> to finalize your Shoreditch induction!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
