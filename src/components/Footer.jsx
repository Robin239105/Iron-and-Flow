import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'
import LogoIcon from './LogoIcon'

const InstagramIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const YoutubeIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
)

const FacebookIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const TikTokIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

const navLinks = [
  { to: '/schedule', label: 'Class Schedule' },
  { to: '/membership', label: 'Membership Plans' },
  { to: '/coaches', label: 'Meet the Coaches' },
  { to: '/gallery', label: 'Gallery & Results' },
  { to: '/contact', label: 'Contact Us' },
]

const classes = ['CrossFit WOD', 'Powerlifting', 'HIIT Circuit', 'Flow Yoga', 'Boxing Fundamentals']

const socials = [
  { icon: <InstagramIcon size={18} />, name: 'Instagram', href: 'https://instagram.com' },
  { icon: <YoutubeIcon size={18} />, name: 'YouTube', href: 'https://youtube.com' },
  { icon: <FacebookIcon size={18} />, name: 'Facebook', href: 'https://facebook.com' },
  { icon: <TikTokIcon size={18} />, name: 'TikTok', href: 'https://tiktok.com' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0A0A0A', position: 'relative', overflow: 'hidden' }}>

      {/* Big CTA band */}
      <div className="relative overflow-hidden" style={{ background: '#E8181B' }}>
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=60"
          alt=""
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '6px' }}>
              Ready to transform?
            </p>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: '#fff', letterSpacing: '0.04em', lineHeight: 1 }}>
              START YOUR FREE TRIAL TODAY
            </h2>
          </div>
          <Link
            to="/membership"
            className="flex items-center gap-3 px-8 py-4 shrink-0 transition-all group hover:gap-5"
            style={{ background: '#fff', color: '#E8181B', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}
          >
            Join Now
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-10">

        {/* Top: brand + 3 cols */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">

          {/* Brand col — wide */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <LogoIcon size={44} />
              <div>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', color: '#fff', letterSpacing: '0.08em' }}>
                  IRON <span style={{ color: '#E8181B' }}>&</span> FLOW
                </span>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.6rem', letterSpacing: '0.3em', color: '#6B6B6B', textTransform: 'uppercase', lineHeight: 1 }}>
                  Est. 2019 · Shoreditch, London
                </p>
              </div>
            </Link>

            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#9CA3AF', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '320px' }}>
              London's most results-driven CrossFit box. Raw strength meets athletic flow. No shortcuts. No excuses. Just results.
            </p>

            {/* Social row */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="flex items-center justify-center transition-all hover:-translate-y-1"
                  style={{ width: '42px', height: '42px', border: '1px solid #2A2A2A', background: '#111', color: '#fff' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#E8181B'; e.currentTarget.style.borderColor = '#E8181B' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#111'; e.currentTarget.style.borderColor = '#2A2A2A' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="md:col-span-2">
            <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#fff', fontSize: '1.1rem', letterSpacing: '0.1em', marginBottom: '1.2rem' }}>
              Navigate
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="flex items-center gap-2 group transition-all"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#6B6B6B', fontSize: '0.95rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#E8181B')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6B6B6B')}
                  >
                    <span style={{ color: '#E8181B', fontSize: '0.7rem' }}>›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Classes */}
          <div className="md:col-span-2">
            <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#fff', fontSize: '1.1rem', letterSpacing: '0.1em', marginBottom: '1.2rem' }}>
              Classes
            </h4>
            <ul className="flex flex-col gap-2.5">
              {classes.map((c) => (
                <li key={c}>
                  <Link
                    to="/schedule"
                    className="flex items-center gap-2 transition-all"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#6B6B6B', fontSize: '0.95rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#E8181B')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6B6B6B')}
                  >
                    <span style={{ color: '#E8181B', fontSize: '0.7rem' }}>›</span>
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + hours */}
          <div className="md:col-span-4">
            <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#fff', fontSize: '1.1rem', letterSpacing: '0.1em', marginBottom: '1.2rem' }}>
              Find Us
            </h4>
            <ul className="flex flex-col gap-4 mb-6">
              <li className="flex items-start gap-3">
                <MapPin size={15} style={{ color: '#E8181B', marginTop: '3px', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#9CA3AF', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  42 Iron Street, Shoreditch<br />London EC2A 4NE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} style={{ color: '#E8181B', flexShrink: 0 }} />
                <a href="tel:+447911123456" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#9CA3AF', fontSize: '0.95rem' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
                >+44 7911 123 456</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} style={{ color: '#E8181B', flexShrink: 0 }} />
                <a href="mailto:info@ironandflow.co.uk" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#9CA3AF', fontSize: '0.95rem' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
                >info@ironandflow.co.uk</a>
              </li>
            </ul>

            {/* Hours block */}
            <div style={{ background: '#111', border: '1px solid #1C1C1E', padding: '1rem 1.2rem' }}>
              <div className="flex items-center gap-2 mb-3">
                <Clock size={13} style={{ color: '#E8181B' }} />
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#fff', fontSize: '0.95rem', letterSpacing: '0.1em' }}>OPENING HOURS</span>
              </div>
              {[
                { day: 'Mon – Fri', time: '6:00 AM – 11:00 PM' },
                { day: 'Saturday', time: '7:00 AM – 9:00 PM' },
                { day: 'Sunday', time: '9:00 AM – 6:00 PM' },
              ].map((h) => (
                <div key={h.day} className="flex justify-between items-center py-1.5" style={{ borderBottom: '1px solid #1C1C1E' }}>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#6B6B6B', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h.day}</span>
                  <span style={{ fontFamily: "'Oswald', sans-serif", color: '#D1D5DB', fontSize: '0.85rem' }}>{h.time}</span>
                </div>
              ))}
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#E8181B', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '8px' }}>
                ★ Elite members: 24/7 access
              </p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-12"
          style={{ border: '1px solid #1C1C1E' }}
        >
          {[
            { val: '500+', label: 'Active Members', sub: 'And growing daily' },
            { val: '12', label: 'Elite Coaches', sub: 'Certified & experienced' },
            { val: '5★', label: 'Google Rating', sub: '200+ reviews' },
            { val: '6', label: 'Years Strong', sub: 'Est. 2019, Shoreditch' },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-7 px-4 text-center border-b border-[#1C1C1E] last:border-b-0 [&:nth-child(3)]:border-b-0 md:border-b-0 border-r border-[#1C1C1E] even:border-r-0 md:even:border-r md:last:border-r-0"
            >
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.4rem', color: '#E8181B', lineHeight: 1 }}>{s.val}</span>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#fff', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>{s.label}</span>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#6B6B6B', fontSize: '0.75rem', marginTop: '2px' }}>{s.sub}</span>
            </div>
          ))}
        </div>

        {/* Big ghost text watermark */}
        <div className="relative overflow-hidden mb-2" style={{ lineHeight: 0.85 }}>
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(4rem, 14vw, 9rem)',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255,255,255,0.04)',
              letterSpacing: '0.02em',
              userSelect: 'none',
              display: 'block',
            }}
          >
            IRON & FLOW GYM
          </span>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5"
          style={{ borderTop: '1px solid #1C1C1E' }}
        >
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#6B6B6B', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            © {new Date().getFullYear()} Iron & Flow Gym Ltd. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link 
              to="/privacy" 
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#6B6B6B', fontSize: '0.8rem', letterSpacing: '0.05em' }}
              className="hover:text-[#FF1A22] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#6B6B6B', fontSize: '0.8rem', letterSpacing: '0.05em' }}
              className="hover:text-[#FF1A22] transition-colors"
            >
              Terms of Service
            </Link>
            <Link 
              to="/cookies" 
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#6B6B6B', fontSize: '0.8rem', letterSpacing: '0.05em' }}
              className="hover:text-[#FF1A22] transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
