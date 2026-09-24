import { Gamepad2, Instagram, Mail } from 'lucide-react'
import { gameData } from '../data/gameData'

const footerLinks = {
  juego: [
    { label: 'Características', href: '#features' },
    { label: 'Galería', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
  ],
  comunidad: [
    { label: 'Newsletter', href: '#newsletter' },
  ],
  legal: [
    { label: 'Privacidad', href: '#privacy' },
    { label: 'Términos', href: '#terms' },
    { label: 'Cookies', href: '#cookies' },
  ],
}

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Mail, href: '#', label: 'Email' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-bomb-border">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(255,51,51,0.05)_0%,transparent_60%)]" />
      <div className="container relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 text-xl font-display font-bold text-text-primary mb-6">
              <Gamepad2 className="w-7 h-7 text-accent-red" />
              <span>{gameData.title}</span>
            </a>
            <p className="text-text-secondary max-w-xs mb-6 leading-relaxed">
              Un juego de desactivación de bombas en VR donde cada segundo cuenta. Resuelve puzzles, corta cables y no dejes que el timer llegue a cero.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-bomb-surface border border-bomb-border text-text-secondary hover:text-accent-red hover:border-accent-red/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <nav>
            <h4 className="font-semibold text-text-primary mb-4">El Juego</h4>
            <ul className="space-y-3">
              {footerLinks.juego.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-text-secondary hover:text-accent-red transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <h4 className="font-semibold text-text-primary mb-4">Comunidad</h4>
            <ul className="space-y-3">
              {footerLinks.comunidad.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-accent-red transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <h4 className="font-semibold text-text-primary mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-text-secondary hover:text-accent-red transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="pt-8 border-t border-bomb-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} {gameData.title}. Todos los derechos reservados.
            <br />
            Hecho con ❤️ y mucho café por un equipo indie.
          </p>

          <div className="flex items-center gap-6 text-text-muted text-sm">
            <span className="font-mono text-accent-red">VR ONLY</span>
            <span className="px-2 py-1 rounded bg-accent-red/10 text-accent-red text-xs font-mono">{gameData.platform}</span>
            <span className="px-2 py-1 rounded bg-accent-amber/10 text-accent-amber text-xs font-mono">{gameData.releaseDate}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}