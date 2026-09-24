import { motion } from 'framer-motion'
import { Menu, X, Gamepad2 } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { gameData } from '../data/gameData'

const navLinks = [
  { href: '#features', label: 'Características' },
  { href: '#gallery', label: 'Galería' },
  { href: '#gamedesign', label: 'Diseño' },
  { href: '#usertesting', label: 'Playtesting' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ backgroundColor: `rgba(10, 10, 15, ${isScrolled ? 0.95 : 0.8})` }}
        animate={{ backdropFilter: isScrolled ? 'blur(20px)' : 'blur(10px)' }}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.a
              href="#"
              className="flex items-center gap-2 text-xl font-display font-bold text-text-primary hover:text-accent-red transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <Gamepad2 className="w-6 h-6 text-accent-red" />
              <span>{gameData.title}</span>
            </motion.a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-text-secondary hover:text-accent-red transition-colors font-medium text-sm relative"
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom -2 left-0 right-0 h-0.5 bg-accent-red origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                  />
                </motion.a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3" />

            <button
              className="md:hidden p-2 text-text-primary hover:text-accent-red transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <motion.div
            className="md:hidden overflow-hidden bg-bomb-surface/95 backdrop-blur-xl border-t border-bomb-border"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="py-6 px-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-text-secondary hover:text-accent-red transition-colors font-medium text-lg py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>

      </>
  )
}