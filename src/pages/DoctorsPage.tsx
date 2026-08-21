import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface Doctor {
  name: string
  specialty: string
  experience: number
  education: string
  languages: string[]
  rating: number
  photo: string
}

const doctorsList: Doctor[] = [
  { name: 'Dr. Sarah Mitchell', specialty: 'Cardiology', experience: 15, education: 'Harvard Medical School', languages: ['English', 'Spanish'], rating: 4.8, photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80' },
  { name: 'Dr. James Rodriguez', specialty: 'Neurology', experience: 12, education: 'Johns Hopkins University', languages: ['English', 'Portuguese'], rating: 4.8, photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&q=80' },
  { name: 'Dr. Emily Chen', specialty: 'Pediatrics', experience: 10, education: 'Stanford Medical Center', languages: ['English', 'Mandarin'], rating: 4.8, photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80' },
  { name: 'Dr. Michael Brown', specialty: 'Orthopedics', experience: 18, education: 'Mayo Clinic', languages: ['English'], rating: 4.8, photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80' },
  { name: 'Dr. Priya Sharma', specialty: 'Oncology', experience: 14, education: 'MD Anderson Cancer Center', languages: ['English', 'Hindi'], rating: 4.8, photo: 'https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=300&q=80' },
  { name: 'Dr. Robert Kim', specialty: 'Cardiology', experience: 20, education: 'Cleveland Clinic', languages: ['English', 'Korean'], rating: 4.8, photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&q=80' },
  { name: 'Dr. Lisa Thompson', specialty: 'Neurology', experience: 11, education: 'UCSF Medical Center', languages: ['English'], rating: 4.8, photo: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=300&q=80' },
  { name: 'Dr. David Park', specialty: 'Orthopedics', experience: 16, education: 'NYU Langone Health', languages: ['English', 'Korean'], rating: 4.8, photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&q=80' },
  { name: 'Dr. Maria Garcia', specialty: 'Pediatrics', experience: 9, education: "Children's Hospital Boston", languages: ['English', 'Spanish'], rating: 4.8, photo: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=300&q=80' },
  { name: 'Dr. Andrew Wilson', specialty: 'Oncology', experience: 17, education: 'Memorial Sloan Kettering', languages: ['English'], rating: 4.8, photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80' },
  { name: 'Dr. Jennifer Lee', specialty: 'Cardiology', experience: 13, education: 'Cleveland Clinic', languages: ['English', 'Mandarin'], rating: 4.8, photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80' },
  { name: 'Dr. Carlos Martinez', specialty: 'Neurology', experience: 8, education: 'Columbia Medical Center', languages: ['English', 'Spanish'], rating: 4.8, photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&q=80' },
]

const specialties = ['All', 'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Oncology']
const specialtyColors: Record<string, string> = { Cardiology: '#ef4444', Neurology: '#8b5cf6', Orthopedics: '#f59e0b', Pediatrics: '#10b981', Oncology: '#ec4899' }

export default function DoctorsPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filteredDoctors = activeFilter === 'All' ? doctorsList : doctorsList.filter(d => d.specialty === activeFilter)

  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans']">
            Meet Our <span className="text-[#0ea5e9]">Specialists</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
            Our team of board-certified specialists brings decades of combined experience from world-renowned medical institutions.
          </motion.p>
        </div>
      </section>

      <section className="py-12 bg-[#1e293b] sticky top-16 z-40 border-b border-[#263045]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {specialties.map((specialty) => (
              <button key={specialty} onClick={() => setActiveFilter(specialty)}
                className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all ${
                  activeFilter === specialty
                    ? 'bg-[#0ea5e9] text-white shadow-lg shadow-[#0ea5e9]/25'
                    : 'bg-[#263045] text-[#94a3b8] hover:bg-[#263045]/80 hover:text-white'
                }`}>
                {specialty}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f172a] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDoctors.map((doctor, i) => (
              <motion.article key={doctor.name} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-[#1e293b] rounded-2xl overflow-hidden border border-[#263045] hover:border-[#0ea5e9]/30 hover:-translate-y-1 transition-all group">
                <div className="h-48 overflow-hidden bg-[#263045]">
                  <img src={doctor.photo} alt={`${doctor.name}, ${doctor.specialty} specialist`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-bold text-white mb-2 font-['Plus_Jakarta_Sans']">{doctor.name}</h2>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                    style={{ backgroundColor: `${specialtyColors[doctor.specialty]}20`, color: specialtyColors[doctor.specialty] }}>
                    {doctor.specialty}
                  </span>
                  <div className="space-y-1.5 text-sm text-[#94a3b8] mb-4">
                    <p className="flex items-center gap-2">
                      <span className="text-[#0ea5e9]">🎓</span> {doctor.education}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#0ea5e9]">⏱️</span> {doctor.experience} years experience
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#0ea5e9]">🌐</span> {doctor.languages.join(', ')}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-yellow-400">★</span>
                      <span className="text-white font-semibold">{doctor.rating}</span>
                      <span className="text-yellow-400">★★★★★</span>
                    </p>
                  </div>
                  <Link to="/appointments" className="block text-center px-4 py-2.5 bg-[#0ea5e9]/10 text-[#0ea5e9] rounded-lg text-sm font-medium hover:bg-[#0ea5e9] hover:text-white transition-all border border-[#0ea5e9]/30">
                    Book Appointment
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
          {filteredDoctors.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#94a3b8] text-lg">No doctors found in this specialty.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
