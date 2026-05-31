import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator } from 'lucide-react'

const ranges = [
  { label: 'UNDERWEIGHT', max: 18.5, color: '#3B82F6' },
  { label: 'NORMAL', max: 24.9, color: '#22C55E' },
  { label: 'OVERWEIGHT', max: 29.9, color: '#EAB308' },
  { label: 'OBESE', max: Infinity, color: '#E8181B' },
]

function getRange(bmi) {
  return ranges.find(r => bmi < r.max) || ranges[ranges.length - 1]
}

function getBarPercent(bmi) {
  const clamped = Math.max(10, Math.min(bmi, 45))
  return ((clamped - 10) / 35) * 100
}

export default function BMICalculator() {
  const [unit, setUnit] = useState('metric')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBMI] = useState(null)

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
    setBMI(Math.round(result * 10) / 10)
  }

  const range = bmi ? getRange(bmi) : null

  return (
    <section id="contact" className="py-20 px-4" style={{ background: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-barlow font-semibold uppercase tracking-[0.4em] text-xs mb-3" style={{ color: '#E8181B' }}>
            Health Check
          </p>
          <h2 className="font-bebas text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.05em' }}>
            Where Do You Stand?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto p-8"
          style={{ background: '#1C1C1E', border: '1px solid #2A2A2A' }}
        >
          {/* Unit toggle */}
          <div className="flex mb-6" style={{ border: '1px solid #2A2A2A' }}>
            {['metric', 'imperial'].map((u) => (
              <button
                key={u}
                onClick={() => { setUnit(u); setBMI(null); setHeight(''); setWeight('') }}
                className="flex-1 font-barlow font-bold uppercase tracking-widest text-sm py-2.5 transition-all"
                style={{
                  background: unit === u ? '#E8181B' : 'transparent',
                  color: unit === u ? '#FFF' : '#6B6B6B',
                }}
              >
                {u === 'metric' ? 'Metric (cm/kg)' : 'Imperial (in/lb)'}
              </button>
            ))}
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="font-barlow font-semibold uppercase tracking-widest text-xs block mb-2" style={{ color: '#6B6B6B' }}>
                Height ({unit === 'metric' ? 'cm' : 'in'})
              </label>
              <input
                type="number"
                value={height}
                onChange={e => setHeight(e.target.value)}
                placeholder={unit === 'metric' ? '175' : '69'}
                className="w-full font-barlow text-white px-4 py-3 text-base outline-none focus:border-red-500"
                style={{ background: '#0A0A0A', border: '1px solid #2A2A2A' }}
              />
            </div>
            <div>
              <label className="font-barlow font-semibold uppercase tracking-widest text-xs block mb-2" style={{ color: '#6B6B6B' }}>
                Weight ({unit === 'metric' ? 'kg' : 'lb'})
              </label>
              <input
                type="number"
                value={weight}
                onChange={e => setWeight(e.target.value)}
                placeholder={unit === 'metric' ? '75' : '165'}
                className="w-full font-barlow text-white px-4 py-3 text-base outline-none"
                style={{ background: '#0A0A0A', border: '1px solid #2A2A2A' }}
              />
            </div>
          </div>

          <button
            onClick={calculate}
            className="w-full font-barlow font-bold uppercase tracking-widest text-white py-4 mb-6 flex items-center justify-center gap-2 transition-colors"
            style={{ background: '#E8181B' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#A01214')}
            onMouseLeave={e => (e.currentTarget.style.background = '#E8181B')}
          >
            <Calculator size={18} />
            Calculate BMI
          </button>

          {/* Result */}
          {bmi && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="text-center">
                <span className="font-oswald font-bold" style={{ fontSize: '4rem', color: range.color, lineHeight: 1 }}>
                  {bmi}
                </span>
                <p className="font-bebas tracking-widest text-2xl mt-1" style={{ color: range.color }}>
                  {range.label}
                </p>
              </div>

              {/* Progress bar */}
              <div className="relative h-3 rounded-none overflow-hidden" style={{ background: '#2A2A2A' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${getBarPercent(bmi)}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="absolute left-0 top-0 h-full"
                  style={{ background: range.color }}
                />
              </div>

              {/* Range labels */}
              <div className="grid grid-cols-4 gap-1">
                {ranges.map((r) => (
                  <div key={r.label} className="text-center">
                    <div className="h-1 mb-1" style={{ background: r.color }} />
                    <p className="font-barlow text-xs uppercase" style={{ color: r.color, fontSize: '0.6rem' }}>
                      {r.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4" style={{ borderTop: '1px solid #2A2A2A' }}>
                <p className="font-barlow text-sm text-center mb-3" style={{ color: '#9CA3AF' }}>
                  Ready to transform your body? Book a free assessment with one of our coaches.
                </p>
                <a
                  href="#membership"
                  className="block w-full font-barlow font-bold uppercase tracking-widest text-white text-center py-3 transition-colors"
                  style={{ border: '2px solid #E8181B', color: '#E8181B' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#E8181B'; e.currentTarget.style.color = '#FFF' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#E8181B' }}
                >
                  Book a Free Assessment
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
