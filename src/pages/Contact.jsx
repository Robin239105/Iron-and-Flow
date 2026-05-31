import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageCircle, Sparkles, Check, Flame } from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import SectionHeader from '../components/shared/SectionHeader'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-8 rounded-3xl border border-green-500 border-opacity-20 flex flex-col gap-3"
        style={{ background: 'rgba(16, 185, 129, 0.05)', backdropFilter: 'blur(20px)' }}
      >
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto shadow-lg animate-bounce">
          <Check size={20} strokeWidth={3} />
        </div>
        <h4 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-white text-3xl tracking-wide uppercase font-semibold">
          MESSAGE DISPATCHED!
        </h4>
        <p style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-gray-400 text-base max-w-sm mx-auto leading-relaxed">
          We have secured your email. An athlete advisor will reach out to you within 2 hours. Welcome to the tribe.
        </p>
      </motion.div>
    )
  }

  const inputStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: '#fff',
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: '1rem',
    padding: '14px 18px',
    width: '100%',
    outline: 'none',
    borderRadius: '12px',
    transition: 'all 0.25s'
  }

  const labelStyle = {
    fontFamily: "'Barlow Condensed', sans-serif",
    color: '#8E919F',
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    display: 'block',
    marginBottom: '6px',
    fontWeight: 600
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label style={labelStyle}>Full Name *</label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Alex Thompson"
          style={inputStyle}
          className="focus:border-[#FF1A22] focus:bg-opacity-5"
        />
      </div>
      <div>
        <label style={labelStyle}>Email Address *</label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="alex@example.com"
          style={inputStyle}
          className="focus:border-[#FF1A22] focus:bg-opacity-5"
        />
      </div>
      <div>
        <label style={labelStyle}>Phone Contact</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+44 7700 900077"
          style={inputStyle}
          className="focus:border-[#FF1A22] focus:bg-opacity-5"
        />
      </div>
      <div>
        <label style={labelStyle}>Athletic Message *</label>
        <textarea
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Detail your personal goals, previous background, or request a Shoreditch rig tour..."
          style={{ ...inputStyle, resize: 'vertical' }}
          className="focus:border-[#FF1A22] focus:bg-opacity-5"
        />
      </div>
      
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="py-4 uppercase text-sm font-bold tracking-widest transition-all w-full rounded-xl"
        style={{ 
          background: 'linear-gradient(135deg, #FF1A22 0%, #FF6B35 100%)', 
          color: '#fff', 
          fontFamily: "'Barlow Condensed', sans-serif",
          boxShadow: '0 4px 15px rgba(255, 26, 34, 0.3)'
        }}
      >
        Transmit Message
      </motion.button>
    </form>
  )
}

function BMICalculator() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState(null)
  const [unit, setUnit] = useState('metric')

  const calculate = () => {
    const h = parseFloat(height)
    const w = parseFloat(weight)
    if (!h || !w || h <= 0 || w <= 0) return
    let result
    if (unit === 'metric') {
      const hm = h / 100
      result = w / (hm * hm)
    } else {
      result = (703 * w) / (h * h)
    }
    setBmi(result.toFixed(1))
  }

  const getCategory = (bmi) => {
    if (bmi < 18.5) return { label: 'Underweight Range', color: '#3B82F6' }
    if (bmi < 25) return { label: 'Normal Output Range', color: '#10B981' }
    if (bmi < 30) return { label: 'Overweight Range', color: '#FF7A00' }
    return { label: 'Obese / Heavy Output Range', color: '#FF1A22' }
  }

  const inputStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: '#fff',
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: '1rem',
    padding: '12px 16px',
    flex: 1,
    outline: 'none',
    borderRadius: '10px'
  }

  const category = bmi ? getCategory(parseFloat(bmi)) : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 rounded-3xl border border-white border-opacity-5 flex flex-col shadow-2xl relative overflow-hidden"
      style={{ background: 'rgba(18, 18, 22, 0.65)', backdropFilter: 'blur(20px)' }}
    >
      <div className="absolute top-4 right-4 p-2 bg-white bg-opacity-5 border border-white border-opacity-5 rounded-lg text-[#FF1A22]">
        <Flame size={18} className="animate-pulse" />
      </div>

      <div className="text-left mb-6">
        <span className="flex items-center gap-1.5 text-xs text-gray-500 font-bold uppercase tracking-widest font-barlow" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          <Sparkles size={12} /> Metabolic metrics
        </span>
        <h3
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          className="text-white text-3xl tracking-wide uppercase font-semibold mt-1"
        >
          BMI Analyzer
        </h3>
      </div>

      {/* Unit toggles */}
      <div className="flex gap-2 p-1 bg-white bg-opacity-5 rounded-xl border border-white border-opacity-5 mb-6 w-fit">
        {['metric', 'imperial'].map((u) => (
          <button
            key={u}
            onClick={() => { setUnit(u); setBmi(null) }}
            className="px-4 py-1.5 uppercase text-[10px] font-bold tracking-widest transition-all rounded-lg"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              background: unit === u ? '#FF1A22' : 'transparent',
              color: unit === u ? '#fff' : '#8E919F',
            }}
          >
            {u === 'metric' ? 'Metric' : 'Imperial'}
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-4 text-left">
        <div className="flex-1">
          <label style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-xs text-gray-500 uppercase tracking-widest font-semibold block mb-1.5">
            Height ({unit === 'metric' ? 'cm' : 'inches'})
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={unit === 'metric' ? '175' : '69'}
            style={inputStyle}
            className="focus:border-[#FF1A22]"
          />
        </div>
        <div className="flex-1">
          <label style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-xs text-gray-500 uppercase tracking-widest font-semibold block mb-1.5">
            Weight ({unit === 'metric' ? 'kg' : 'lbs'})
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={unit === 'metric' ? '75' : '165'}
            style={inputStyle}
            className="focus:border-[#FF1A22]"
          />
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={calculate}
        className="w-full py-4 uppercase text-xs font-bold tracking-widest transition-all rounded-xl mt-2"
        style={{ 
          background: 'rgba(255, 255, 255, 0.03)', 
          border: '1px solid rgba(255,255,255,0.08)',
          color: '#fff', 
          fontFamily: "'Barlow Condensed', sans-serif" 
        }}
      >
        Calculate Output
      </motion.button>

      {/* Dynamic digital result panels */}
      <AnimatePresence>
        {bmi && category && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 p-6 rounded-2xl border text-center relative overflow-hidden"
            style={{ 
              background: 'rgba(5, 5, 7, 0.3)', 
              borderColor: `${category.color}40`,
            }}
          >
            {/* Left accent color glows */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-1.5"
              style={{ background: category.color }}
            />

            <div style={{ fontFamily: "'Oswald', sans-serif", color: category.color }} className="text-5xl font-bold leading-none tracking-tight">
              {bmi}
            </div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-white text-xl tracking-wider uppercase mt-2 font-semibold">
              {category.label}
            </div>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-gray-400 text-xs mt-2 leading-relaxed">
              {parseFloat(bmi) >= 25
                ? 'Our coached CrossFit, HIIT, and custom lifting cycles are engineered to shift body composition efficiently.'
                : 'Excellent baseline metric. Our coaches can help build raw functional volume and maintain peak parameters.'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Metric scale display */}
      <div className="mt-6 grid grid-cols-4 gap-1">
        {[
          { label: 'Under', range: '< 18.5', color: '#3B82F6' },
          { label: 'Normal', range: '18.5–24.9', color: '#10B981' },
          { label: 'Over', range: '25–29.9', color: '#FF7A00' },
          { label: 'Obese', range: '30+', color: '#FF1A22' },
        ].map((s) => (
          <div key={s.label} className="text-center p-2 rounded-lg" style={{ background: 'rgba(5,5,7,0.3)', borderTop: `3px solid ${s.color}` }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", color: s.color }} className="text-[10px] font-bold uppercase tracking-wider">{s.label}</div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-[9px] text-gray-500 mt-0.5">{s.range}</div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ background: '#050507', minHeight: '100vh' }}
    >
      <PageHero
        title="CONTACT TRIBE"
        subtitle="Reserve your floor induction or reach an advisor."
        image="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=1920&q=85"
      />

      <section className="py-24 max-w-7xl mx-auto px-6 relative">
        {/* Grid accents */}
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          
          {/* Left panel: Contact Form (Col-span-7) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-7 p-8 rounded-3xl border border-white border-opacity-5 shadow-2xl flex flex-col justify-between"
            style={{ background: 'rgba(18, 18, 22, 0.65)', backdropFilter: 'blur(20px)' }}
          >
            <div>
              <SectionHeader title="TRANSMIT MESSAGE" light centered={false} />
            </div>
            <div className="mt-6 flex-grow">
              <ContactForm />
            </div>
          </motion.div>

          {/* Right panel: Info details (Col-span-5) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-5 flex flex-col gap-6 text-left"
          >
            
            {/* Info Cards */}
            <div className="p-8 rounded-3xl border border-white border-opacity-5 flex flex-col gap-6 shadow-2xl" style={{ background: 'rgba(18, 18, 22, 0.65)', backdropFilter: 'blur(20px)' }}>
              <SectionHeader title="THE WAREHOUSE" light centered={false} />
              
              <ul className="flex flex-col gap-6 font-barlow text-base text-gray-300" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF1A22] bg-opacity-10 text-[#FF1A22] rounded-xl border border-white border-opacity-5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-white text-lg tracking-wide uppercase font-semibold">Address Specs</h4>
                    <p className="text-gray-400 mt-0.5">42 Iron Street, Shoreditch, London EC2A 4NE</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF7A00] bg-opacity-10 text-[#FF7A00] rounded-xl border border-white border-opacity-5">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-white text-lg tracking-wide uppercase font-semibold">Voice Contact</h4>
                    <a href="tel:+447911123456" className="text-gray-400 hover:text-[#FF1A22] transition-colors mt-0.5 block">+44 7911 123 456</a>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF1A22] bg-opacity-10 text-[#FF1A22] rounded-xl border border-white border-opacity-5">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-white text-lg tracking-wide uppercase font-semibold">Secure Mail</h4>
                    <a href="mailto:info@ironandflow.co.uk" className="text-gray-400 hover:text-[#FF1A22] transition-colors mt-0.5 block">info@ironandflow.co.uk</a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF7A00] bg-opacity-10 text-[#FF7A00] rounded-xl border border-white border-opacity-5">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-white text-lg tracking-wide uppercase font-semibold">Opening metrics</h4>
                    <p className="text-gray-400 mt-0.5">Mon–Fri: 6AM–11PM · Saturday: 7AM–9PM · Sunday: 9AM–6PM</p>
                  </div>
                </li>
              </ul>

              {/* Whatsapp */}
              <div className="pt-2">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <a
                    href="https://wa.me/447911123456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 py-4 w-full rounded-xl uppercase font-bold text-xs tracking-widest text-white transition-all shadow"
                    style={{ background: '#25D366' }}
                  >
                    <MessageCircle size={16} /> Instant WhatsApp Dispatch
                  </a>
                </motion.div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* BMI Calculator Section */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <BMICalculator />
      </section>

      {/* Dark Styled Map Section */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <SectionHeader title="THE GRID LOCATION" subtitle="Inside the heartbeat of Shoreditch. Easily accessible." light />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden border border-white border-opacity-5 shadow-2xl"
        >
          <iframe
            title="Iron and Flow Gym Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4!2d-0.0809!3d51.5228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb4a09c5b2d%3A0x23e0e1c5f5e2e9c9!2sShoreditch%2C%20London!5e0!3m2!1sen!2suk!4v1699900000000!5m2!1sen!2suk"
            width="100%"
            height="400"
            style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg) contrast(1.15) brightness(0.95)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>
    </motion.div>
  )
}
