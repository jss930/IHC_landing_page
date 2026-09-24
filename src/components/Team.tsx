import { motion } from 'framer-motion'
import { Twitter, Github, Linkedin, Globe } from 'lucide-react'
import { gameData } from '../data/gameData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const socialIcons = {
  twitter: Twitter,
  github: Github,
  linkedin: Linkedin,
  artstation: Globe,
  soundcloud: Globe,
}

export function Team() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring', stiffness: 100 } },
  }

  return (
    <section
      ref={sectionRef}
      id="team"
      className="section relative"
    >
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent-red/10 text-accent-red text-sm font-mono tracking-wider mb-4">
            EQUIPO
          </span>
          <h2 className="section-title">Los cerebros detrás de la bomba</h2>
          <p className="section-subtitle">
            Un pequeño equipo apasionado por VR, puzzles y hacer que sudes la gota gorda.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {gameData.team.map((member) => (
            <motion.article
              key={member.name}
              variants={itemVariants}
              className="card text-center group"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-red/30 to-accent-amber/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={gameData.images.team[member.imageIndex] || gameData.placeholders.team}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-4 border-bomb-border group-hover:border-accent-red/50 transition-colors duration-300"
                  onError={(e) => { e.currentTarget.src = gameData.placeholders.team }}
                />
                <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-accent-red border-3 border-bomb-bg flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
              </div>

              <h3 className="font-display text-lg font-bold text-text-primary mb-1">{member.name}</h3>
              <p className="text-accent-red text-sm font-medium mb-4">{member.role}</p>
              <p className="text-text-secondary text-sm mb-6 leading-relaxed">{member.bio}</p>

              <div className="flex items-center justify-center gap-3">
                {Object.entries(member.social).map(([platform, url]) => {
                  const Icon = socialIcons[platform as keyof typeof socialIcons] || Globe
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-bomb-bg text-text-secondary hover:text-accent-red hover:bg-bomb-surface transition-colors group"
                      aria-label={platform}
                    >
                      <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </a>
                  )
                })}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-text-secondary mb-4">
            ¿Quieres unirte? Estamos buscando <span className="text-accent-red font-medium">QA Testers VR</span> y <span className="text-accent-amber font-medium">Community Managers</span>.
          </p>
          <p className="text-text-muted text-sm">
            Contacta a través de GitHub Issues
          </p>
        </motion.div>
      </div>
    </section>
  )
}