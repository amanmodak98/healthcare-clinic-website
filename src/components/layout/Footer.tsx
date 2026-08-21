import { Link } from 'react-router-dom'

const CrossIconSmall = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect width="32" height="32" rx="8" fill="#0ea5e9" />
    <rect x="14" y="6" width="4" height="20" fill="white" />
    <rect x="6" y="14" width="20" height="4" fill="white" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-[#1e293b]" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <CrossIconSmall />
              <span className="text-lg font-bold text-white font-['Plus_Jakarta_Sans']">
                MediCare <span className="text-[#0ea5e9]">Plus</span>
              </span>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
              Your Health, Our Priority. Providing world-class healthcare with compassionate care since 2009.
            </p>
            <div className="p-3 bg-red-900/30 border border-red-700/50 rounded-lg">
              <p className="text-red-300 text-xs font-semibold uppercase tracking-wide mb-1">24/7 Emergency</p>
              <p className="text-white font-bold text-lg">+1-800-MED-HELP</p>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/doctors', label: 'Our Doctors' },
                { to: '/appointments', label: 'Book Appointment' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[#94a3b8] hover:text-[#0ea5e9] text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#0ea5e9] text-xs" aria-hidden="true">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Departments</h3>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              {['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Oncology', 'Dermatology', 'Emergency Medicine', 'Radiology'].map((dept) => (
                <li key={dept} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] flex-shrink-0" aria-hidden="true" />
                  {dept}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <address className="not-italic space-y-3 text-sm text-[#94a3b8]">
              <p className="flex items-start gap-2">
                <span className="text-[#0ea5e9] mt-0.5 flex-shrink-0" aria-hidden="true">📍</span>
                123 Medical Center Drive, New York, NY 10001
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#0ea5e9] flex-shrink-0" aria-hidden="true">📞</span>
                <a href="tel:+12125550100" className="hover:text-white transition-colors">+1 (212) 555-0100</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#0ea5e9] flex-shrink-0" aria-hidden="true">✉️</span>
                <a href="mailto:info@medicareplus.com" className="hover:text-white transition-colors">info@medicareplus.com</a>
              </p>
              <div className="pt-2 border-t border-[#1e293b]">
                <p className="text-xs font-semibold text-white mb-1">Clinic Hours</p>
                <p>Mon–Fri: 8:00 AM – 8:00 PM</p>
                <p>Saturday: 9:00 AM – 5:00 PM</p>
                <p className="text-red-400">Sunday: Emergency Only</p>
              </div>
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-[#1e293b] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#94a3b8]">
          <p>© {new Date().getFullYear()} MediCare Plus. All rights reserved. License No: MED-NY-2009-4521</p>
          <p>Designed &amp; Developed by <a href="https://www.infirexa.tech" target="_blank" rel="noopener noreferrer">Infirexa</a></p>
          <p>Advanced Healthcare &amp; Diagnostics</p>
        </div>
      </div>
    </footer>
  )
}
