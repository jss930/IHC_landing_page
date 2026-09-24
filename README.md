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
│       ├── screenshots/         ← Capturas de gameplay (1280x720 16:9)
│       │   └── captura1.png
│       ├── design/              ← Bosquejos/concept art (5 imágenes)
│       │   ├── diseño1.jpeg
│       │   ├── diseño2.jpeg
│       │   ├── diseño3.jpeg
│       │   ├── diseño4.jpeg
│       │   └── diseño5.jpeg
│       ├── testing/             ← Thumbnails para videos playtesting
│       │   ├── test-1-thumb.jpg
│       │   └── test-2-thumb.jpg
│       ├── video usuario2.mp4   ← Video de playtesting
│       └── placeholders/        ← Fallbacks SVG automáticos
├── src/
│   ├── components/              # Hero, Features, Gallery, GameDesign, UserTesting, Navbar, Footer
│   ├── data/
│   │   └── gameData.ts          # TODO el contenido editable (textos, datos)
│   └── hooks/                   # useScrollAnimation
└── .github/workflows/           # Deploy automático a GitHub Pages
```

## Cómo personalizar

### 1. Reemplaza las imágenes
Borra los placeholders y pon tus archivos reales en `public/images/` manteniendo **exactamente los mismos nombres**:

| Archivo | Tamaño recomendado | Formato |
|---------|-------------------|---------|
| `hero-bg.jpg` | 1920×1080 | JPG/WebP |
| `logo.svg` | 200×200 | SVG (preferido) o PNG |
| `og-image.jpg` | 1200×630 | JPG |
| `screenshots/captura1.png` … | 1280×720 (16:9) | JPG/WebP |
| `design/diseño1.jpeg` … `diseño5.jpeg` | 1280×720 | JPG/WebP |
| `testing/test-1-thumb.jpg`, `test-2-thumb.jpg` | 1280×720 | JPG/WebP |
| `video usuario2.mp4` | — | MP4 |

> **Tip:** Los placeholders SVG en `public/images/placeholders/` se usan automáticamente como fallback si una imagen falla al cargar.

### 2. Edita el contenido del juego
Abre `src/data/gameData.ts` y modifica:

```typescript
export const gameData = {
  title: "Tick, Tock, Boom!",
  tagline: "Tu tagline aquí...",
  description: "Descripción del juego...",
  features: [ ... ],  // Añade/quita/modifica características
  specs: { ... },     // Requisitos mínimos/recomendados
  faq: [ ... ],       // Preguntas frecuentes
  userTesting: [ ... ], // Videos de playtesting (thumbnail + videoSrc)
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

### GitHub Pages (configurado automáticamente)

El repo incluye un workflow de GitHub Actions (`.github/workflows/deploy.yml`) que hace deploy automático a GitHub Pages en cada push a `master`/`main`.

**Pasos manuales necesarios (una sola vez):**

1. Ve a **Settings → Pages** en tu repositorio de GitHub
2. En **Source**, selecciona **"GitHub Actions"**
3. Espera a que corra el workflow (se ejecuta en cada push)
4. Tu sitio estará en: `https://jss930.github.io/IHC_landing_page/`

### Otros hostings estáticos

La carpeta `dist/` es estática. Sube a:
- **Vercel** / **Netlify** / **Cloudflare Pages** (arrastra `dist/`)
- **GitLab Pages**
- **Firebase Hosting** / **Surge.sh** / Cualquier hosting estático

## Notas VR
- Meta tags Open Graph configurados para compartir en Discord/Twitter
- `theme-color` y `manifest` listos para PWA si lo necesitas
- Botón "Wishlist" fijo en móvil para conversión

## Licencia
MIT — Úsalo libremente para tu proyecto.