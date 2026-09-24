import { motion } from 'framer-motion'
import { useState, KeyboardEvent } from 'react'
import { X, ChevronLeft, ChevronRight, Maximize2, PenTool } from 'lucide-react'
import { gameData } from '../data/gameData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const BASE_URL = import.meta.env.BASE_URL || '/'
const getAssetUrl = (path: string) => `${BASE_URL}${path.replace(/^\//, '')}`

export function GameDesign() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const designs = gameData.images.gameDesign
  const placeholder = gameData.placeholders.gameDesign

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const next = () => setCurrentIndex((prev) => (prev + 1) % designs.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + designs.length) % designs.length)

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!lightboxOpen) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') prev()
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget
    target.src = getAssetUrl(placeholder)
  }

  return (
    <section
      ref={sectionRef}
      id="gamedesign"
      className="section relative"
      onKeyDown={handleKeyDown}
    >
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent-amber/10 text-accent-amber text-sm font-mono tracking-wider mb-4">
            <PenTool className="w-4 h-4" />
            DISEÑO DE JUEGO
          </span>
          <h2 className="section-title">Bosquejos y Concept Art Inicial</h2>
          <p className="section-subtitle">
            Explora la evolución visual de la bomba y sus puzzles. Desde los primeros wireframes hasta los conceptos finales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {designs.map((src, index) => (
            <motion.article
              key={src}
              className="card relative aspect-[4/3] overflow-hidden cursor-zoom-in group p-0"
              whileHover={{ scale: 1.02, y: -4 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => openLightbox(index)}
            >
              <div className="relative w-full h-full">
                <img
                  src={getAssetUrl(src)}
                  alt={`Tick Tock Boom - Diseño ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bomb-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-sm font-mono text-accent-amber bg-bomb-bg/80 px-3 py-1 rounded">CONCEPT ART</span>
                  <Maximize2 className="w-5 h-5 text-text-primary bg-bomb-bg/80 p-2 rounded-full" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-bomb-bg/80 text-accent-amber px-3 py-1 rounded-full text-sm font-mono">
                    {index + 1} / {designs.length}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-bomb-bg/98 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Vista ampliada de diseño"
          >
            <button
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-bomb-surface/80 text-text-secondary hover:text-text-primary hover:bg-bomb-surfaceHover transition-colors"
              onClick={(e) => { e.stopPropagation(); closeLightbox() }}
              aria-label="Cerrar"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              className="absolute left-6 z-10 p-3 rounded-full bg-bomb-surface/80 text-text-secondary hover:text-text-primary hover:bg-bomb-surfaceHover transition-colors hidden md:flex"
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              className="absolute right-6 z-10 p-3 rounded-full bg-bomb-surface/80 text-text-secondary hover:text-text-primary hover:bg-bomb-surfaceHover transition-colors hidden md:flex"
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              className="relative max-w-5xl max-h-[90vh] w-full mx-4"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={getAssetUrl(designs[currentIndex])}
                alt={`Tick Tock Boom - Diseño ${currentIndex + 1}`}
                className="w-full h-auto rounded-lg shadow-2xl"
                onError={handleImageError}
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-text-secondary text-sm">
                <span className="font-mono text-accent-amber">CONCEPT ART</span>
                <span>{currentIndex + 1} / {designs.length}</span>
              </div>
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 md:hidden">
              <button onClick={(e) => { e.stopPropagation(); prev() }} className="p-2 rounded-full bg-bomb-surface/80" aria-label="Anterior"><ChevronLeft className="w-5 h-5" /></button>
              <span className="px-4 text-text-secondary">{currentIndex + 1} / {designs.length}</span>
              <button onClick={(e) => { e.stopPropagation(); next() }} className="p-2 rounded-full bg-bomb-surface/80" aria-label="Siguiente"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}