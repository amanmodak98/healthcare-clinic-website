import { useState } from 'react'
import { motion } from 'framer-motion'

interface FormData {
  department: string
  doctor: string
  appointmentType: 'in-person' | 'video' | 'home'
  date: string
  timeSlot: string
  fullName: string
  dob: string
  gender: string
  email: string
  phone: string
  insurance: string
  notes: string
}

const departments = ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Oncology', 'Dermatology', 'Emergency Medicine', 'Radiology & Diagnostics']

const doctorsByDept: Record<string, string[]> = {
  Cardiology: ['Dr. Sarah Mitchell', 'Dr. Robert Kim', 'Dr. Jennifer Lee'],
  Neurology: ['Dr. James Rodriguez', 'Dr. Lisa Thompson', 'Dr. Carlos Martinez'],
  Orthopedics: ['Dr. Michael Brown', 'Dr. David Park'],
  Pediatrics: ['Dr. Emily Chen', 'Dr. Maria Garcia'],
  Oncology: ['Dr. Priya Sharma', 'Dr. Andrew Wilson'],
  Dermatology: ['Dr. Ava Williams'],
  'Emergency Medicine': ['On-Call Physician'],
  'Radiology & Diagnostics': ['Dr. Jason Lee'],
}

const timeSlots = [
  { time: '9:00 AM', available: true }, { time: '10:00 AM', available: false },
  { time: '11:00 AM', available: true }, { time: '12:00 PM', available: true },
  { time: '1:00 PM', available: false }, { time: '2:00 PM', available: true },
  { time: '3:00 PM', available: true }, { time: '4:00 PM', available: false },
  { time: '5:00 PM', available: true },
]

const insuranceProviders = ['Blue Cross Blue Shield', 'Aetna', 'Cigna', 'United Health', 'Humana', 'Medicare', 'Medicaid', 'Other']

export default function AppointmentsPage() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    department: '', doctor: '', appointmentType: 'in-person',
    date: '', timeSlot: '', fullName: '', dob: '', gender: '',
    email: '', phone: '', insurance: '', notes: '',
  })

  const update = (field: keyof FormData, value: string) =>
    setFormData(prev => ({ ...prev, [field]: value }))

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true) }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 py-20">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
          className="bg-[#1e293b] rounded-2xl p-10 max-w-lg w-full text-center border border-[#10b981]/30">
          <div className="text-6xl mb-4" aria-hidden="true">✅</div>
          <h2 className="text-3xl font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">Appointment Confirmed!</h2>
          <p className="text-[#94a3b8] mb-6">Your appointment has been booked successfully. You'll receive a confirmation email shortly.</p>
          <div className="bg-[#263045] rounded-xl p-5 text-left space-y-2 text-sm text-[#94a3b8] mb-6">
            <p><span className="text-white font-medium">Patient:</span> {formData.fullName}</p>
            <p><span className="text-white font-medium">Department:</span> {formData.department}</p>
            <p><span className="text-white font-medium">Doctor:</span> {formData.doctor}</p>
            <p><span className="text-white font-medium">Date:</span> {formData.date}</p>
            <p><span className="text-white font-medium">Time:</span> {formData.timeSlot}</p>
            <p><span className="text-white font-medium">Type:</span> {formData.appointmentType}</p>
          </div>
          <button onClick={() => { setSubmitted(false); setStep(1); setFormData({ department: '', doctor: '', appointmentType: 'in-person', date: '', timeSlot: '', fullName: '', dob: '', gender: '', email: '', phone: '', insurance: '', notes: '' }) }}
            className="px-6 py-3 bg-[#0ea5e9] text-white font-bold rounded-lg hover:bg-[#38bdf8] transition-colors">
            Book Another Appointment
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0f172a] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Plus_Jakarta_Sans']">Book an <span className="text-[#0ea5e9]">Appointment</span></h1>
          <p className="text-[#94a3b8] text-lg">Schedule your visit in three easy steps.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-center mb-8 gap-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    step >= s ? 'bg-[#0ea5e9] text-white' : 'bg-[#263045] text-[#94a3b8]'
                  }`}>{s}</div>
                  <span className={`text-sm font-medium hidden sm:block ${step >= s ? 'text-white' : 'text-[#94a3b8]'}`}>
                    {s === 1 ? 'Select Service' : s === 2 ? 'Choose Time' : 'Your Details'}
                  </span>
                  {s < 3 && <div className={`w-12 h-0.5 ${step > s ? 'bg-[#0ea5e9]' : 'bg-[#263045]'}`} />}
                </div>
              ))}
            </div>

            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}
              className="bg-[#1e293b] rounded-2xl p-6 border border-[#263045]">
              {step === 1 && (
                <div className="space-y-5">
                  <h2 className="text-xl font-bold text-white">Select Department & Type</h2>
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-[#94a3b8] mb-2">Department *</label>
                    <select id="department" value={formData.department} onChange={e => { update('department', e.target.value); update('doctor', '') }} required
                      className="w-full px-4 py-3 bg-[#263045] border border-[#0ea5e9]/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50">
                      <option value="">Choose a department</option>
                      {departments.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                  {formData.department && (
                    <div>
                      <label htmlFor="doctor" className="block text-sm font-medium text-[#94a3b8] mb-2">Preferred Doctor *</label>
                      <select id="doctor" value={formData.doctor} onChange={e => update('doctor', e.target.value)} required
                        className="w-full px-4 py-3 bg-[#263045] border border-[#0ea5e9]/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50">
                        <option value="">Select a doctor</option>
                        {(doctorsByDept[formData.department] ?? []).map(doc => <option key={doc} value={doc}>{doc}</option>)}
                      </select>
                    </div>
                  )}

                  <div>
                    <p className="block text-sm font-medium text-[#94a3b8] mb-3">Appointment Type *</p>
                    <div className="grid grid-cols-3 gap-3">
                      {([['in-person', '🏥', 'In-Person'], ['video', '📹', 'Video Call'], ['home', '🏠', 'Home Visit']] as const).map(([val, icon, label]) => (
                        <button key={val} type="button" onClick={() => update('appointmentType', val)}
                          className={`p-4 rounded-xl border text-center transition-all ${formData.appointmentType === val ? 'border-[#0ea5e9] bg-[#0ea5e9]/10 text-white' : 'border-[#263045] text-[#94a3b8] hover:border-[#0ea5e9]/40'}`}>
                          <div className="text-2xl mb-1">{icon}</div>
                          <div className="text-xs font-medium">{label}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <button onClick={() => formData.department && formData.doctor && setStep(2)} disabled={!formData.department || !formData.doctor}
                    className="w-full py-3 bg-[#0ea5e9] text-white font-bold rounded-lg hover:bg-[#38bdf8] transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                    Next: Choose Time →
                  </button>
                </div>
              )}
              {step === 2 && (
                <div className="space-y-5">
                  <h2 className="text-xl font-bold text-white">Select Date & Time</h2>
                  <div>
                    <label htmlFor="appt-date" className="block text-sm font-medium text-[#94a3b8] mb-2">Preferred Date *</label>
                    <input id="appt-date" type="date" value={formData.date} onChange={e => update('date', e.target.value)} required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-[#263045] border border-[#0ea5e9]/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#94a3b8] mb-3">Available Time Slots *</p>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map(({ time, available }) => (
                        <button key={time} type="button" disabled={!available} onClick={() => available && update('timeSlot', time)}
                          className={`py-2.5 rounded-lg text-sm font-medium transition-all ${
                            !available ? 'bg-[#1e293b] text-[#475569] cursor-not-allowed line-through'
                            : formData.timeSlot === time ? 'bg-[#0ea5e9] text-white'
                            : 'bg-[#263045] text-[#94a3b8] hover:bg-[#0ea5e9]/20 hover:text-white'
                          }`}>
                          {time}{!available && ' (Booked)'}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setStep(1)} className="flex-1 py-3 bg-[#263045] text-white font-medium rounded-lg hover:bg-[#1e293b] transition-colors">← Back</button>
                    <button onClick={() => formData.date && formData.timeSlot && setStep(3)} disabled={!formData.date || !formData.timeSlot}
                      className="flex-1 py-3 bg-[#0ea5e9] text-white font-bold rounded-lg hover:bg-[#38bdf8] transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                      Next: Your Details →
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-bold text-white">Patient Details</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-[#94a3b8] mb-1">Full Name *</label>
                      <input id="fullName" type="text" value={formData.fullName} onChange={e => update('fullName', e.target.value)} required placeholder="John Doe"
                        className="w-full px-4 py-3 bg-[#263045] border border-[#0ea5e9]/20 rounded-lg text-white placeholder-[#475569] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50" />
                    </div>
                    <div>
                      <label htmlFor="dob" className="block text-sm font-medium text-[#94a3b8] mb-1">Date of Birth *</label>
                      <input id="dob" type="date" value={formData.dob} onChange={e => update('dob', e.target.value)} required
                        className="w-full px-4 py-3 bg-[#263045] border border-[#0ea5e9]/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50" />
                    </div>
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-[#94a3b8] mb-1">Gender *</label>
                      <select id="gender" value={formData.gender} onChange={e => update('gender', e.target.value)} required
                        className="w-full px-4 py-3 bg-[#263045] border border-[#0ea5e9]/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50">
                        <option value="">Select</option>
                        <option>Male</option><option>Female</option><option>Non-binary</option><option>Prefer not to say</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#94a3b8] mb-1">Email *</label>
                      <input id="email" type="email" value={formData.email} onChange={e => update('email', e.target.value)} required placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-[#263045] border border-[#0ea5e9]/20 rounded-lg text-white placeholder-[#475569] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#94a3b8] mb-1">Phone *</label>
                      <input id="phone" type="tel" value={formData.phone} onChange={e => update('phone', e.target.value)} required placeholder="+1 (212) 000-0000"
                        className="w-full px-4 py-3 bg-[#263045] border border-[#0ea5e9]/20 rounded-lg text-white placeholder-[#475569] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50" />
                    </div>
                    <div>
                      <label htmlFor="insurance" className="block text-sm font-medium text-[#94a3b8] mb-1">Insurance Provider</label>
                      <select id="insurance" value={formData.insurance} onChange={e => update('insurance', e.target.value)}
                        className="w-full px-4 py-3 bg-[#263045] border border-[#0ea5e9]/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50">
                        <option value="">Select (optional)</option>
                        {insuranceProviders.map(p => <option key={p}>{p}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-[#94a3b8] mb-1">Message / Notes</label>
                    <textarea id="notes" value={formData.notes} onChange={e => update('notes', e.target.value)} rows={3} placeholder="Describe your symptoms or any special requirements..."
                      className="w-full px-4 py-3 bg-[#263045] border border-[#0ea5e9]/20 rounded-lg text-white placeholder-[#475569] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50 resize-none" />
                  </div>
                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep(2)} className="flex-1 py-3 bg-[#263045] text-white font-medium rounded-lg hover:bg-[#1e293b] transition-colors">← Back</button>
                    <button type="submit" disabled={!formData.fullName || !formData.email || !formData.phone}
                      className="flex-1 py-3 bg-[#10b981] text-white font-bold rounded-lg hover:bg-[#059669] transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                      Confirm Appointment ✓
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#1e293b] rounded-2xl p-6 border border-[#263045]">
              <h3 className="text-lg font-bold text-white mb-4">Insurance Partners</h3>
              <div className="grid grid-cols-2 gap-2">
                {insuranceProviders.filter(p => p !== 'Other').map((p) => (
                  <div key={p} className="flex items-center gap-2 text-sm text-[#94a3b8]">
                    <span className="text-[#10b981]">✓</span>{p}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1e293b] rounded-2xl p-6 border border-[#263045]">
              <h3 className="text-lg font-bold text-white mb-4">Clinic Hours</h3>
              <table className="w-full text-sm">
                <tbody className="space-y-2">
                  {[['Mon – Fri', '8:00 AM – 8:00 PM'], ['Saturday', '9:00 AM – 5:00 PM'], ['Sunday', 'Emergency Only']].map(([day, hours]) => (
                    <tr key={day} className="border-b border-[#263045] last:border-0">
                      <td className="py-2 text-[#94a3b8] font-medium">{day}</td>
                      <td className={`py-2 text-right ${day === 'Sunday' ? 'text-red-400' : 'text-white'}`}>{hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-[#1e293b] rounded-2xl p-6 border border-[#263045]">
              <h3 className="text-lg font-bold text-white mb-4">Preparation Tips</h3>
              <ul className="space-y-2 text-sm text-[#94a3b8]">
                {['Bring your insurance card and photo ID', 'Arrive 15 minutes before your appointment', 'Bring a list of current medications', 'Note any allergies or past medical conditions', 'Bring previous test results if applicable', 'Wear comfortable, easy-to-remove clothing'].map((tip) => (
                  <li key={tip} className="flex items-start gap-2">
                    <span className="text-[#0ea5e9] mt-0.5 flex-shrink-0">→</span>{tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
