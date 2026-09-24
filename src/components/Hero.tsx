import { motion, useScroll, useTransform } from 'framer-motion'
import { Play, ArrowRight, Gamepad2, Clock, AlertTriangle } from 'lucide-react'
import { gameData } from '../data/gameData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function Hero() {
  const [heroRef] = useScrollAnimation(0.1)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])
  const scale = useTransform(scrollY, [0, 500], [1, 1.1])

  const badges = [
    { icon: Gamepad2, label: 'Solo VR' },
    { icon: Clock, label: 'Timer Real' },
    { icon: AlertTriangle, label: '4 Puzzles' },
  ]

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${gameData.images.heroBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-bomb-bg/90 via-bomb-bg/70 to-bomb-bg/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,51,51,0.15)_0%,transparent_70%)]" />
      <div className="absolute inset-0" style={{ backgroundImage: 'url("/images/grid-pattern.svg")', backgroundSize: '80px 80px', opacity: 0.02 }} />

      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 py-20"
        style={{ y, opacity, scale }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bomb-surface/50 border border-accent-red/30 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
            <span className="text-sm font-mono text-accent-red tracking-wider">VR EXCLUSIVE</span>
          </motion.div>

          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-text-primary">Tick,</span>
            <br />
            <span className="text-accent-red">Tock,</span>
            <br />
            <span className="text-gradient">Boom!</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {gameData.tagline}
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-text-muted max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {gameData.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a
              href={gameData.links.gameplay}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group w-full sm:w-auto"
              aria-label="Ver gameplay"
            >
              <Play className="w-5 h-5" />
              <span>Ver Gameplay</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {badges.map((badge, i) => (
              <motion.div
                key={badge.label}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-bomb-surface/50 border border-bomb-border backdrop-blur-sm text-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1, type: 'spring' }}
              >
                <badge.icon className="w-4 h-4 text-accent-red" />
                <span className="text-text-secondary">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-bomb-border rounded-full flex justify-center pt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-accent-red" />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bomb-bg to-transparent pointer-events-none" />
    </section>
  )
}