import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import LogoIcon from './LogoIcon'

const links = [
  { to: '/schedule', label: 'Schedule' },
  { to: '/membership', label: 'Membership' },
  { to: '/coaches', label: 'Coaches' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(10,10,10,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(232,24,27,0.4)' : '1px solid transparent',
        }}
      >
        {/* Red top stripe */}
        <div style={{ height: '3px', background: '#E8181B', width: '100%' }} />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between" style={{ height: '68px' }}>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="transition-all duration-300 group-hover:scale-110">
              <LogoIcon size={42} />
            </div>
            <div className="flex flex-col leading-none">
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.55rem',
                  letterSpacing: '0.1em',
                  color: '#fff',
                  lineHeight: 1,
                }}
              >
                IRON <span style={{ color: '#E8181B' }}>&</span> FLOW
              </span>
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '0.6rem',
                  letterSpacing: '0.3em',
                  color: '#6B6B6B',
                  textTransform: 'uppercase',
                }}
              >
                Est. 2019 · Shoreditch
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                style={({ isActive }) => ({
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '0.8rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: isActive ? '#E8181B' : '#D1D5DB',
                  padding: '6px 14px',
                  position: 'relative',
                  transition: 'color 0.2s',
                  borderBottom: isActive ? '2px solid #E8181B' : '2px solid transparent',
                })}
                className="hover:text-white"
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: '#9CA3AF',
                textTransform: 'uppercase',
              }}
              className="hover:text-white transition-colors"
            >
              +44 7911 123 456
            </Link>
            <Link
              to="/membership"
              className="flex items-center gap-2 px-5 py-2.5 transition-all hover:opacity-90 group"
              style={{
                background: '#E8181B',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '0.8rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#fff',
                fontWeight: 700,
              }}
            >
              Join Now
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center transition-all"
            onClick={() => setOpen(!open)}
            style={{ width: '40px', height: '40px', background: open ? '#E8181B' : '#1C1C1E' }}
          >
            {open ? <X size={18} color="#fff" /> : <Menu size={18} color="#fff" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col md:hidden"
            style={{ background: '#0A0A0A', paddingTop: '80px' }}
          >
            {/* Red vertical stripe */}
            <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: '#E8181B' }} />

            <div className="flex flex-col px-10 py-8 gap-2">
              {[{ to: '/', label: 'Home' }, ...links].map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    onClick={() => setOpen(false)}
                    style={({ isActive }) => ({
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '3rem',
                      letterSpacing: '0.06em',
                      color: isActive ? '#E8181B' : '#fff',
                      display: 'block',
                      lineHeight: 1.1,
                    })}
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <div className="px-10 mt-auto pb-12">
              <Link
                to="/membership"
                onClick={() => setOpen(false)}
                className="block text-center py-4 uppercase font-bold tracking-widest"
                style={{
                  background: '#E8181B',
                  color: '#fff',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '1rem',
                  letterSpacing: '0.25em',
                }}
              >
                Start Free Trial →
              </Link>
              <p
                className="text-center mt-4 text-sm"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", color: '#6B6B6B', letterSpacing: '0.1em' }}
              >
                +44 7911 123 456 · info@ironandflow.co.uk
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
