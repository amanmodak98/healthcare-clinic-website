import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface Department {
  name: string
  description: string
  procedures: string[]
  specialists: number
  color: string
  icon: string
}

const departments: Department[] = [
  { name: 'Cardiology', description: 'Our cardiology department offers comprehensive heart care from preventive medicine to complex interventional procedures. Our team of expert cardiologists uses cutting-edge technology to diagnose and treat all forms of heart disease.', procedures: ['Echocardiography', 'Angioplasty', 'Cardiac Catheterization', 'Stress Testing', 'Holter Monitoring'], specialists: 12, color: '#ef4444', icon: '❤️' },
  { name: 'Neurology', description: 'We provide advanced neurological care for conditions affecting the brain, spinal cord, and nervous system. Our neurologists are equipped with the latest diagnostic and therapeutic technologies.', procedures: ['MRI Brain Scan', 'EEG', 'Nerve Conduction Study', 'Memory Assessment', 'Deep Brain Stimulation'], specialists: 8, color: '#8b5cf6', icon: '🧠' },
  { name: 'Orthopedics', description: 'Expert orthopedic care for bones, joints, muscles, and the entire musculoskeletal system. From sports injuries to complex joint replacements, our surgeons deliver exceptional outcomes.', procedures: ['Joint Replacement', 'Arthroscopy', 'Spine Surgery', 'Fracture Care', 'Sports Medicine'], specialists: 10, color: '#f59e0b', icon: '🦴' },
  { name: 'Pediatrics', description: 'Compassionate, child-centered care for patients from newborns through adolescence. Our pediatric specialists create a welcoming environment where children feel safe and comfortable.', procedures: ['Well-child Visits', 'Vaccinations', 'Growth Monitoring', 'Developmental Assessment', 'Allergy Testing'], specialists: 15, color: '#10b981', icon: '👶' },
  { name: 'Oncology', description: 'Comprehensive cancer care with personalized treatment plans utilizing the latest in oncology research. Our multidisciplinary team provides support at every step of the cancer journey.', procedures: ['Chemotherapy', 'Radiation Therapy', 'Tumor Biopsy', 'Cancer Screening', 'Immunotherapy'], specialists: 7, color: '#ec4899', icon: '🎗️' },
  { name: 'Dermatology', description: 'Complete skin care from medical dermatology to cosmetic procedures. Our dermatologists treat a full spectrum of skin conditions with the latest evidence-based treatments.', procedures: ['Skin Biopsy', 'Mole Removal', 'Laser Treatment', 'Acne Treatment', 'Psoriasis Management'], specialists: 6, color: '#06b6d4', icon: '✨' },
  { name: 'Emergency Medicine', description: '24/7 emergency services staffed by trauma-certified physicians. Our emergency department is equipped to handle everything from minor injuries to life-threatening conditions.', procedures: ['Trauma Care', 'Resuscitation', 'Emergency Surgery', 'Critical Care', 'Toxicology'], specialists: 20, color: '#0ea5e9', icon: '🚑' },
  { name: 'Radiology & Diagnostics', description: 'State-of-the-art diagnostic imaging and laboratory services. Our radiologists provide fast, accurate interpretations to guide your treatment team.', procedures: ['CT Scan', 'MRI', 'X-Ray', 'Ultrasound', 'PET Scan'], specialists: 9, color: '#64748b', icon: '🔬' },
]

export default function ServicesPage() {
  return (
    <div>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1920&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 via-[#0f172a]/80 to-[#0f172a]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans']">
            Our Medical <span className="text-[#0ea5e9]">Services</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
            Comprehensive healthcare across all major specialties with board-certified specialists and cutting-edge technology.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, i) => (
              <motion.article key={dept.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="bg-[#1e293b] rounded-2xl overflow-hidden border border-[#263045] hover:border-[#0ea5e9]/30 transition-all group">
                <div className="h-2" style={{ background: dept.color }} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl" aria-hidden="true">{dept.icon}</span>
                    <div>
                      <h2 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">{dept.name}</h2>
                      <p className="text-xs text-[#94a3b8]">{dept.specialists} specialists on staff</p>
                    </div>
                  </div>
                  <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">{dept.description}</p>
                  <div>
                    <p className="text-white text-xs font-semibold uppercase tracking-wide mb-3">Key Procedures</p>
                    <div className="flex flex-wrap gap-2">
                      {dept.procedures.map((p) => (
                        <span key={p} className="px-3 py-1 bg-[#263045] text-[#94a3b8] text-xs rounded-full border border-[#0ea5e9]/10">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#0369a1] to-[#0ea5e9]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-white mb-4 font-['Plus_Jakarta_Sans']">Can't find your condition?</h2>
            <p className="text-blue-100 text-lg mb-8">Our general medicine team can help evaluate any health concern and refer you to the right specialist.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="px-8 py-3 bg-white text-[#0369a1] font-bold rounded-lg hover:bg-blue-50 transition-colors">Contact Us</Link>
              <Link to="/appointments" className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#0369a1] transition-all">Book Appointment</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
