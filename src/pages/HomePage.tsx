import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

const fadeUp = { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } }

function Counter({ target, suffix = '' }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    const steps = 60
    const step = target / steps
    let cur = 0
    const timer = setInterval(() => {
      cur += step
      if (cur >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(cur))
    }, 2000 / steps)
    return () => clearInterval(timer)
  }, [inView, target])
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const services = [
  { icon: '❤️', title: 'Cardiology', desc: 'Comprehensive heart care including diagnostics, interventional procedures, and cardiac rehabilitation.', color: '#ef4444' },
  { icon: '🧠', title: 'Neurology', desc: 'Expert neurological care for brain, spinal cord, and nervous system disorders with advanced imaging.', color: '#8b5cf6' },
  { icon: '🦴', title: 'Orthopedics', desc: 'Joint replacement, spine surgery, sports medicine, and comprehensive musculoskeletal care.', color: '#f59e0b' },
  { icon: '👶', title: 'Pediatrics', desc: 'Compassionate care for children from newborns through adolescence by board-certified specialists.', color: '#10b981' },
  { icon: '🎗️', title: 'Oncology', desc: 'Cutting-edge cancer treatment including chemotherapy, radiation, and immunotherapy programs.', color: '#ec4899' },
  { icon: '🚑', title: 'Emergency Care', desc: '24/7 emergency services with trauma-certified physicians and state-of-the-art resuscitation facilities.', color: '#0ea5e9' },
]

const features = [
  { icon: '💻', title: 'Latest Technology', desc: 'State-of-the-art MRI, CT, PET scan, and robotic surgical systems for precise diagnostics and treatment.' },
  { icon: '🩺', title: 'Expert Doctors', desc: '200+ board-certified specialists with decades of combined experience from world-renowned institutions.' },
  { icon: '🕐', title: '24/7 Support', desc: 'Round-the-clock emergency care and patient support lines ensuring help is always available.' },
  { icon: '🛡️', title: 'Insurance Accepted', desc: 'We work with all major insurance providers including Medicare, Medicaid, Blue Cross, Aetna, and Cigna.' },
]

const doctors = [
  { name: 'Dr. Sarah Mitchell', specialty: 'Cardiologist', exp: 15, photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80' },
  { name: 'Dr. James Rodriguez', specialty: 'Neurologist', exp: 12, photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80' },
  { name: 'Dr. Emily Chen', specialty: 'Pediatrician', exp: 10, photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80' },
]

const testimonials = [
  { name: 'Robert Johnson', treatment: 'Cardiac Surgery', rating: 5, text: 'The cardiology team saved my life. Dr. Mitchell and her staff provided exceptional care during my emergency bypass surgery. Forever grateful!' },
  { name: 'Maria Garcia', treatment: 'Pediatric Care', rating: 5, text: 'Dr. Chen is amazing with children. My daughter feels comfortable and safe during every visit. The pediatric unit is world-class.' },
  { name: 'David Kim', treatment: 'Orthopedic Surgery', rating: 5, text: 'Had a total knee replacement and the results are incredible. Pain-free walking after just 6 weeks. Highly recommend this facility!' },
]

export default function HomePage() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/95 via-[#0369a1]/60 to-[#0f172a]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-['Plus_Jakarta_Sans']">
                Advanced Healthcare You Can <span className="text-[#0ea5e9]">Trust</span>
              </h1>
              <p className="text-xl text-[#94a3b8] mb-8 leading-relaxed">Your Health, Our Priority. Experience world-class medical care with 200+ specialists and state-of-the-art facilities.</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/appointments" className="px-8 py-4 bg-[#0ea5e9] text-[#0f172a] font-bold rounded-lg text-lg hover:bg-[#38bdf8] transition-all shadow-lg shadow-[#0ea5e9]/30">Book Appointment</Link>
                <Link to="/services" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg text-lg hover:bg-white hover:text-[#0f172a] transition-all">Our Services</Link>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="bg-[#1e293b]/80 backdrop-blur-md rounded-2xl p-8 border border-[#0ea5e9]/20 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {[{ num: '200+', label: 'Expert Doctors' }, { num: '50K+', label: 'Patients Treated' }, { num: '15+', label: 'Years Experience' }, { num: '24/7', label: 'Emergency Care' }].map(({ num, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-4xl font-bold text-[#0ea5e9] mb-2">{num}</div>
                    <div className="text-sm text-[#94a3b8]">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4 font-['Plus_Jakarta_Sans']">Our Specialties</h2>
            <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">Expert care across all major medical disciplines with board-certified specialists.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[#263045] rounded-xl p-6 border-l-4 hover:-translate-y-1 hover:shadow-xl transition-all group"
                style={{ borderLeftColor: s.color }}>
                <div className="text-3xl mb-4" aria-hidden="true">{s.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 font-['Plus_Jakarta_Sans']">{s.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link to="/services" className="text-[#0ea5e9] text-sm font-medium hover:text-[#38bdf8] transition-colors">Learn More →</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4 font-['Plus_Jakarta_Sans']">Why Choose MediCare Plus?</h2>
            <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">We combine medical excellence with compassionate care to deliver the best health outcomes.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#263045] rounded-xl p-6 text-center hover:-translate-y-1 transition-all">
                <div className="text-4xl mb-4" aria-hidden="true">{f.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4 font-['Plus_Jakarta_Sans']">Meet Our Expert Doctors</h2>
            <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">Our board-certified specialists bring world-class expertise to your care.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doc, i) => (
              <motion.div key={doc.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#263045] rounded-2xl overflow-hidden hover:-translate-y-2 transition-all shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img src={doc.photo} alt={`${doc.name}, ${doc.specialty}`} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{doc.name}</h3>
                  <span className="inline-block px-3 py-1 bg-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-semibold rounded-full mb-2">{doc.specialty}</span>
                  <p className="text-[#94a3b8] text-sm mb-4">{doc.exp} years experience</p>
                  <Link to="/doctors" className="block text-center px-4 py-2 border border-[#0ea5e9] text-[#0ea5e9] rounded-lg text-sm font-medium hover:bg-[#0ea5e9] hover:text-[#0f172a] transition-all">View Profile</Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/doctors" className="px-8 py-3 bg-[#1e293b] border border-[#0ea5e9]/30 text-white rounded-lg font-medium hover:bg-[#263045] transition-all">View All Doctors</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#0369a1] to-[#0ea5e9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
              <h2 className="text-4xl font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">Book an Appointment</h2>
              <p className="text-blue-100 text-lg">Schedule your visit with our specialists today.</p>
            </motion.div>
            <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              onSubmit={(e) => e.preventDefault()}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <input type="text" placeholder="Your Full Name" aria-label="Full Name" required
                  className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm" />
                <input type="tel" placeholder="Phone Number" aria-label="Phone Number" required
                  className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm" />
                <select aria-label="Department" required className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 text-sm">
                  <option value="" className="text-[#0f172a]">Select Department</option>
                  {['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Oncology', 'Emergency'].map(d => <option key={d} value={d} className="text-[#0f172a]">{d}</option>)}
                </select>
                <input type="date" aria-label="Preferred Date" required className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 text-sm" />
              </div>
              <button type="submit" className="w-full py-3 bg-white text-[#0369a1] font-bold rounded-lg text-lg hover:bg-blue-50 transition-colors shadow-lg">Book Now</button>
            </motion.form>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4 font-['Plus_Jakarta_Sans']">What Our Patients Say</h2>
            <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">Real stories from patients who trusted us with their health.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#263045] rounded-2xl p-6 border border-[#0ea5e9]/10">
                <div className="flex gap-1 mb-4" aria-label={`Rating: 5 out of 5 stars`}>
                  {[...Array(t.rating)].map((_, j) => <span key={j} className="text-yellow-400 text-lg" aria-hidden="true">★</span>)}
                </div>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-[#0ea5e9] text-xs">{t.treatment}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { target: 15, suffix: '+', label: 'Years Experience' },
              { target: 200, suffix: '+', label: 'Specialists' },
              { target: 50000, suffix: '+', label: 'Patients Treated' },
              { target: 99, suffix: '%', label: 'Patient Satisfaction' },
            ].map(({ target, suffix, label }, i) => (
              <motion.div key={label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="text-5xl font-bold text-[#0ea5e9] mb-2 font-['Plus_Jakarta_Sans']">
                  <Counter target={target} suffix={suffix} />
                </div>
                <div className="text-[#94a3b8] font-medium">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
