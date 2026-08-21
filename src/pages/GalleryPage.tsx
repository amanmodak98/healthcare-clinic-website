import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface GalleryImage {
  url: string
  title: string
  category: string
}

const images: GalleryImage[] = [
  { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80', title: 'Main Hospital', category: 'Common Areas' },
  { url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80', title: 'Medical Equipment', category: 'Diagnostics' },
  { url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80', title: 'Hospital Room', category: 'Consultation Rooms' },
  { url: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80', title: 'Medical Lab', category: 'Diagnostics' },
  { url: 'https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=800&q=80', title: 'Surgery Room', category: 'Operation Theatre' },
  { url: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f5?w=800&q=80', title: 'ICU Ward', category: 'ICU' },
  { url: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80', title: 'Radiology', category: 'Diagnostics' },
  { url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80', title: 'Patient Room', category: 'Consultation Rooms' },
  { url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80', title: 'Lab Testing', category: 'Diagnostics' },
  { url: 'https://images.unsplash.com/photo-1578991624414-276ef23a534f?w=800&q=80', title: 'ICU Monitoring', category: 'ICU' },
  { url: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=800&q=80', title: 'Hospital Corridor', category: 'Common Areas' },
  { url: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80', title: 'Operating Room', category: 'Operation Theatre' },
  { url: 'https://images.unsplash.com/photo-1666214280250-b2b96e283e09?w=800&q=80', title: 'Modern ICU', category: 'ICU' },
  { url: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?w=800&q=80', title: 'Consultation Room', category: 'Consultation Rooms' },
  { url: 'https://images.unsplash.com/photo-1588776814546-ec7e2b69e736?w=800&q=80', title: 'Doctor Office', category: 'Consultation Rooms' },
  { url: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&q=80', title: 'Waiting Area', category: 'Common Areas' },
]

const filterCategories = ['All', 'Consultation Rooms', 'Operation Theatre', 'ICU', 'Diagnostics', 'Common Areas']

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeFilter === 'All' ? images : images.filter(img => img.category === activeFilter)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () => setLightboxIndex(i => (i === null ? 0 : (i - 1 + filtered.length) % filtered.length))
  const nextImage = () => setLightboxIndex(i => (i === null ? 0 : (i + 1) % filtered.length))

  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans']">
            Our <span className="text-[#0ea5e9]">Facilities</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
            State-of-the-art medical facilities designed for patient comfort and clinical excellence.
          </motion.p>
        </div>
      </section>

      <section className="py-6 bg-[#1e293b] sticky top-16 z-40 border-b border-[#263045]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {filterCategories.map((cat) => (
              <button key={cat} onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === cat ? 'bg-[#0ea5e9] text-white shadow-lg' : 'bg-[#263045] text-[#94a3b8] hover:text-white hover:bg-[#263045]/80'
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#0f172a] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <motion.div key={img.url} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: i * 0.04 }}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-[#1e293b]"
                onClick={() => openLightbox(i)}
                role="button" tabIndex={0} aria-label={`View ${img.title}`}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(i)}>
                <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#0f172a]/0 group-hover:bg-[#0f172a]/60 transition-all duration-300 flex items-end">
                  <div className="p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full">
                    <p className="text-white text-sm font-semibold">{img.title}</p>
                    <p className="text-[#0ea5e9] text-xs">{img.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Image lightbox">
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-[#0ea5e9] transition-colors z-10" aria-label="Close lightbox">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <button onClick={(e) => { e.stopPropagation(); prevImage() }} className="absolute left-4 text-white hover:text-[#0ea5e9] transition-colors z-10" aria-label="Previous image">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <motion.div key={lightboxIndex} initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25 }}
              className="max-w-5xl max-h-[85vh] w-full" onClick={e => e.stopPropagation()}>
              <img src={filtered[lightboxIndex].url} alt={filtered[lightboxIndex].title} className="w-full h-full object-contain rounded-xl max-h-[80vh]" />
              <div className="text-center mt-3">
                <p className="text-white font-semibold">{filtered[lightboxIndex].title}</p>
                <p className="text-[#0ea5e9] text-sm">{filtered[lightboxIndex].category}</p>
              </div>
            </motion.div>
            <button onClick={(e) => { e.stopPropagation(); nextImage() }} className="absolute right-4 text-white hover:text-[#0ea5e9] transition-colors z-10" aria-label="Next image">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
