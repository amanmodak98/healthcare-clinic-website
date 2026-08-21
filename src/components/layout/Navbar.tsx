import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const CrossIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect width="32" height="32" rx="8" fill="#0ea5e9" />
    <rect x="14" y="6" width="4" height="20" fill="white" />
    <rect x="6" y="14" width="20" height="4" fill="white" />
  </svg>
)

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services', end: false },
  { to: '/doctors', label: 'Doctors', end: false },
  { to: '/gallery', label: 'Gallery', end: false },
  { to: '/contact', label: 'Contact', end: false },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header>
      <div className="bg-red-700 text-white text-center py-2 text-sm font-medium px-4">
        <span>Emergency? Call <strong>911</strong></span>
        <span className="mx-3 opacity-60">|</span>
        <span>Ambulance: <strong>+1-800-MED-HELP</strong></span>
      </div>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0f172a]/95 backdrop-blur-md shadow-lg border-b border-[#1e293b]'
            : 'bg-[#0f172a]/80'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 flex-shrink-0" aria-label="MediCare Plus home">
              <CrossIcon />
              <span className="text-xl font-bold font-['Plus_Jakarta_Sans'] text-white">
                MediCare <span className="text-[#0ea5e9]">Plus</span>
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }: { isActive: boolean }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-[#0ea5e9] bg-[#0ea5e9]/10'
                        : 'text-[#94a3b8] hover:text-white hover:bg-[#1e293b]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <div className="hidden md:block">
              <Link
                to="/appointments"
                className="px-5 py-2.5 bg-[#0ea5e9] text-[#0f172a] font-bold rounded-lg text-sm hover:bg-[#38bdf8] transition-all duration-200 shadow-lg shadow-[#0ea5e9]/25"
              >
                Book Appointment
              </Link>
            </div>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden p-2 rounded-lg text-[#94a3b8] hover:text-white hover:bg-[#1e293b] transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-[#1e293b] border-t border-[#263045] overflow-hidden"
            >
              <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.end}
                    className={({ isActive }: { isActive: boolean }) =>
                      `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-[#0ea5e9] bg-[#0ea5e9]/10'
                          : 'text-[#94a3b8] hover:text-white hover:bg-[#263045]'
                      }`
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <Link
                  to="/appointments"
                  className="block px-4 py-3 bg-[#0ea5e9] text-[#0f172a] font-bold rounded-lg text-sm text-center hover:bg-[#38bdf8] transition-colors mt-2"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Appointment
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
