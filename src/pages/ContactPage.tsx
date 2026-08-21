import { useState } from 'react'
import { motion } from 'framer-motion'

interface ContactFormData {
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
}

const subjects = ['General Inquiry', 'Appointments', 'Medical Records', 'Billing', 'Feedback', 'Other']

const locations = [
  { name: 'Main Hospital', address: '123 Medical Center Drive, New York, NY 10001', phone: '+1 (212) 555-0100', type: 'primary' },
  { name: 'Downtown Clinic', address: '456 Park Avenue, New York, NY 10022', phone: '+1 (212) 555-0102', type: 'secondary' },
  { name: 'Suburb Clinic', address: '789 Oak Street, Brooklyn, NY 11201', phone: '+1 (718) 555-0103', type: 'secondary' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [formData, setFormData] = useState<ContactFormData>({ fullName: '', email: '', phone: '', subject: '', message: '' })

  const update = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
  }

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required'
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email required'
    if (!formData.subject) newErrors.subject = 'Please select a subject'
    if (!formData.message.trim() || formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); if (validate()) setSubmitted(true) }

  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans']">
            Get in <span className="text-[#0ea5e9]">Touch</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to us and our team will respond as soon as possible.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
                  className="bg-[#1e293b] rounded-2xl p-10 text-center border border-[#10b981]/30">
                  <div className="text-6xl mb-4" aria-hidden="true">📧</div>
                  <h2 className="text-3xl font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">Message Sent!</h2>
                  <p className="text-[#94a3b8] mb-6">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  <button onClick={() => { setSubmitted(false); setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' }) }}
                    className="px-6 py-3 bg-[#0ea5e9] text-white font-bold rounded-lg hover:bg-[#38bdf8] transition-colors">
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                  className="bg-[#1e293b] rounded-2xl p-8 border border-[#263045]">
                  <h2 className="text-2xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans']">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-[#94a3b8] mb-2">Full Name *</label>
                        <input id="fullName" type="text" value={formData.fullName} onChange={e => update('fullName', e.target.value)} placeholder="John Doe"
                          className={`w-full px-4 py-3 bg-[#263045] border ${errors.fullName ? 'border-red-500' : 'border-[#0ea5e9]/20'} rounded-lg text-white placeholder-[#475569] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50`} />
                        {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#94a3b8] mb-2">Email Address *</label>
                        <input id="email" type="email" value={formData.email} onChange={e => update('email', e.target.value)} placeholder="john@example.com"
                          className={`w-full px-4 py-3 bg-[#263045] border ${errors.email ? 'border-red-500' : 'border-[#0ea5e9]/20'} rounded-lg text-white placeholder-[#475569] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50`} />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#94a3b8] mb-2">Phone Number</label>
                        <input id="phone" type="tel" value={formData.phone} onChange={e => update('phone', e.target.value)} placeholder="+1 (212) 000-0000"
                          className="w-full px-4 py-3 bg-[#263045] border border-[#0ea5e9]/20 rounded-lg text-white placeholder-[#475569] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50" />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-[#94a3b8] mb-2">Subject *</label>
                        <select id="subject" value={formData.subject} onChange={e => update('subject', e.target.value)}
                          className={`w-full px-4 py-3 bg-[#263045] border ${errors.subject ? 'border-red-500' : 'border-[#0ea5e9]/20'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50`}>
                          <option value="">Select a subject</option>
                          {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#94a3b8] mb-2">Message *</label>
                      <textarea id="message" value={formData.message} onChange={e => update('message', e.target.value)} rows={5} placeholder="Tell us how we can help you..."
                        className={`w-full px-4 py-3 bg-[#263045] border ${errors.message ? 'border-red-500' : 'border-[#0ea5e9]/20'} rounded-lg text-white placeholder-[#475569] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50 resize-none`} />
                      {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                    </div>
                    <button type="submit" className="w-full py-3.5 bg-[#0ea5e9] text-white font-bold rounded-lg hover:bg-[#38bdf8] transition-colors text-lg">
                      Send Message
                    </button>
                  </form>
                </motion.div>
              )}
            </div>

            <div className="lg:col-span-2 space-y-5">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#1e293b] rounded-2xl p-6 border border-[#263045]">
                <h3 className="text-lg font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-4 text-sm">
                  {[
                    { icon: '📍', label: 'Address', value: '123 Medical Center Drive, New York, NY 10001', href: undefined },
                    { icon: '📞', label: 'Main Phone', value: '+1 (212) 555-0100', href: 'tel:+12125550100' },
                    { icon: '🚨', label: 'Emergency', value: '+1-800-MED-HELP', href: 'tel:+18006334357' },
                    { icon: '📅', label: 'Appointments', value: '+1 (212) 555-0101', href: 'tel:+12125550101' },
                    { icon: '✉️', label: 'Email', value: 'info@medicareplus.com', href: 'mailto:info@medicareplus.com' },
                  ].map(({ icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0" aria-hidden="true">{icon}</span>
                      <div>
                        <p className="text-[#94a3b8] text-xs uppercase tracking-wide font-medium">{label}</p>
                        {href ? (
                          <a href={href} className="text-white hover:text-[#0ea5e9] transition-colors font-medium">{value}</a>
                        ) : (
                          <p className="text-white font-medium">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-[#263045]">
                  <p className="text-xs font-semibold text-white uppercase tracking-wide mb-2">Clinic Hours</p>
                  <div className="space-y-1 text-sm text-[#94a3b8]">
                    <p>Mon–Fri: <span className="text-white">8:00 AM – 8:00 PM</span></p>
                    <p>Saturday: <span className="text-white">9:00 AM – 5:00 PM</span></p>
                    <p>Sunday: <span className="text-red-400">Emergency Only</span></p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white mb-8 text-center font-['Plus_Jakarta_Sans']">Our Locations</motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <motion.div key={loc.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`bg-[#263045] rounded-xl p-6 border ${loc.type === 'primary' ? 'border-[#0ea5e9]/40' : 'border-[#263045]'}`}>
                {loc.type === 'primary' && (
                  <span className="inline-block px-2 py-0.5 bg-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-semibold rounded-full mb-3">Main Campus</span>
                )}
                <h3 className="text-lg font-bold text-white mb-2">{loc.name}</h3>
                <p className="text-[#94a3b8] text-sm mb-2">📍 {loc.address}</p>
                <a href={`tel:${loc.phone.replace(/\D/g, '')}`} className="text-[#0ea5e9] text-sm hover:text-[#38bdf8] transition-colors">📞 {loc.phone}</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
