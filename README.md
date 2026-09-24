# Tick, Tock, Boom! — Landing Page

Landing page estática para el juego VR de desactivación de bombas **"Tick, Tock, Boom!"**.

## Stack
- **React 18 + TypeScript + Vite**
- **Tailwind CSS** (tema dark gaming personalizado)
- **Framer Motion** (animaciones)
- **Lucide React** (iconos)

## Estructura de carpetas

```
tick-tock-boom-landing/
├── public/
│   └── images/
│       ├── hero-bg.jpg          ← TU background del hero (1920x1080)
│       ├── logo.svg             ← TU logo (200x200)
│       ├── og-image.jpg         ← Open Graph (1200x630)
│       ├── screenshots/         ← 6 capturas del juego (1280x720 16:9)
│       │   ├── screenshot-1.jpg
│       │   ├── screenshot-2.jpg
│       │   ├── screenshot-3.jpg
│       │   ├── screenshot-4.jpg
│       │   ├── screenshot-5.jpg
│       │   └── screenshot-6.jpg
│       └── team/                ← 4 fotos del equipo (200x200, cuadradas)
│           ├── dev1.jpg
│           ├── dev2.jpg
│           ├── dev3.jpg
│           └── dev4.jpg
├── src/
│   ├── components/              # Hero, Features, Gallery, Team, Navbar, Footer
│   ├── data/
│   │   └── gameData.ts          # TODO el contenido editable (textos, links, datos)
│   └── hooks/                   # useScrollAnimation, useParallax, useCountdown
```

## Cómo personalizar

### 1. Reemplaza las imágenes
Borra los placeholders y pon tus archivos reales en `public/images/` manteniendo **exactamente los mismos nombres**:

| Archivo | Tamaño recomendado | Formato |
|---------|-------------------|---------|
| `hero-bg.jpg` | 1920×1080 | JPG/WebP |
| `logo.svg` | 200×200 | SVG (preferido) o PNG |
| `og-image.jpg` | 1200×630 | JPG |
| `screenshots/screenshot-1.jpg` … `screenshot-6.jpg` | 1280×720 (16:9) | JPG/WebP |
| `team/dev1.jpg` … `dev4.jpg` | 200×200 (1:1) | JPG/WebP |

> **Tip:** Los placeholders SVG en `public/images/placeholders/` se usan automáticamente como fallback si una imagen falla al cargar.

### 2. Edita el contenido del juego
Abre `src/data/gameData.ts` y modifica:

```typescript
export const gameData = {
  title: "Tick, Tock, Boom!",
  tagline: "Tu tagline aquí...",
  links: {
    steam: "https://store.steampowered.com/app/TU_ID",
    itch: "https://tu-usuario.itch.io/tu-juego",
    discord: "https://discord.gg/tu-invite",
    twitter: "https://twitter.com/tuusuario",
    youtube: "https://youtube.com/@tucanal",
    trailer: "https://www.youtube.com/embed/TU_VIDEO_ID",
  },
  features: [ ... ],  // Añade/quita/modifica características
  team: [ ... ],      // Actualiza nombres, roles, bios, redes
  specs: { ... },     // Requisitos mínimos/recomendados
  faq: [ ... ],       // Preguntas frecuentes
}
```

### 3. Colores y tema
Edita `tailwind.config.js` → `theme.extend.colors` para cambiar la paleta:
- `bomb.bg` — fondo principal
- `accent.red` — color principal (timer, botones, glows)
- `accent.amber` — color secundario (advertencias, acentos)
- `text.*` — escala de grises para texto

## Comandos

```bash
# Desarrollo
npm run dev       # http://localhost:3000

# Producción
npm run build     # genera carpeta dist/
npm run preview   # previsualiza el build local
```

## Deploy

La carpeta `dist/` es estática. Sube a:
- **Vercel** / **Netlify** / **Cloudflare Pages** (arrastra `dist/`)
- **GitHub Pages** / **GitLab Pages**
- **Firebase Hosting** / **Surge.sh** / **Cualquier hosting estático**

## Notas VR
- Meta tags Open Graph configurados para compartir en Discord/Twitter
- `theme-color` y `manifest` listos para PWA si lo necesitas
- Botón "Wishlist" fijo en móvil para conversión

## Licencia
MIT — Úsalo libremente para tu proyecto.