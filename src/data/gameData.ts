export const gameData = {
  title: "Tick, Tock, Boom!",
  tagline: "El tiempo corre. La bomba espera. ¿Podrás desactivarla?",
  description: "Estás aislado en una habitación oscura y la bomba flota libremente frente a ti. Para neutralizarla, debes usar tus propias manos y herramientas físicas (destornillador, alicate) para resolver los minijuegos mecánicos y electrónicos distribuidos en cada una de sus caras. La historia se reduce a una carrera contra el reloj donde cada movimiento en Realidad Virtual decide si logras desactivarla a tiempo o detonar en el intento.",
  genre: "VR Puzzle / Simulación de desactivación de bombas",
  platform: "Meta Quest / SteamVR / PICO",
  releaseDate: "Próximamente 2025",

  // URLs para reemplazar con las reales
  links: {
    steam: "https://store.steampowered.com",
    itch: "https://itch.io",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
    gameplay: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder YouTube
  },

  // Rutas de imágenes - REEMPLAZA ESTOS ARCHIVOS EN public/images/
  images: {
    heroBg: "/images/hero-bg.jpg",
    logo: "/images/logo.svg",
    ogImage: "/images/og-image.jpg",
    screenshots: [
      "/images/screenshots/diseño1.jpeg",
      "/images/screenshots/diseño2.jpeg",
      "/images/screenshots/diseño3.jpeg",
      "/images/screenshots/diseño4.jpeg",
      "/images/screenshots/diseño5.jpeg",
      "/images/screenshots/captura1.png",
    ],
    team: [
      "/images/team/dev1.jpg",
      "/images/team/dev2.jpg",
      "/images/team/dev3.jpg",
      "/images/team/dev4.jpg",
    ],
    gameDesign: [
      "/images/design/design-1.jpg",
      "/images/design/design-2.jpg",
      "/images/design/design-3.jpg",
      "/images/design/design-4.jpg",
      "/images/design/design-5.jpg",
    ],
  },

  // Placeholders generados (se usan si no existen las imágenes reales)
  placeholders: {
    heroBg: "/images/placeholders/hero-bg.svg",
    logo: "/images/placeholders/logo.svg",
    screenshot: "/images/placeholders/screenshot.svg",
    team: "/images/placeholders/team/avatar.svg",
    gameDesign: "/images/placeholders/design.svg",
  },

  features: [
    {
      id: "faces",
      icon: "cube",
      title: "4 Caras · 4 Puzzles Únicos",
      description: "Cada cara de la bomba es un desafío distinto: cables, símbolos, memoria y circuitos.",
      color: "red",
    },
    {
      id: "timer",
      icon: "clock",
      title: "Timer Realista con Presión",
      description: "Un cronómetro físico en la bomba que cuentas hacia cero. Sin HUDs invasivos: la tensión está en tus manos.",
      color: "amber",
    },
    {
      id: "vr",
      icon: "headset",
      title: "Interacción VR Inmersiva",
      description: "Agarra, gira, corta, teclea y presiona con tus propias manos. Tracking de manos y controles hápticos para máxima inmersión.",
      color: "red",
    },
  ],

  team: [
    {
      name: "Alex Rivera",
      role: "Director Creativo / Lead Designer",
      bio: "Diseñador de puzzles y sistemas VR. Antes en estudios AAA.",
      social: { twitter: "#", linkedin: "#" },
      imageIndex: 0,
    },
    {
      name: "Maria Chen",
      role: "Programadora Principal VR",
      bio: "Especialista en interacción física y optimización Quest/PCVR.",
      social: { twitter: "#", github: "#" },
      imageIndex: 1,
    },
    {
      name: "James Okonkwo",
      role: "Artista Técnico 3D / VFX",
      bio: "Modelado, shaders y efectos de partículas para la bomba.",
      social: { artstation: "#", twitter: "#" },
      imageIndex: 2,
    },
    {
      name: "Sofia Andersson",
      role: "Sound Designer / Compositora",
      bio: "Audio espacial, tensión sonora y banda original adaptativa.",
      social: { soundcloud: "#", twitter: "#" },
      imageIndex: 3,
    },
  ],

  specs: {
    minimum: {
      headset: "Meta Quest 2 / Pico 4",
      cpu: "Snapdragon XR2 / equivalente PCVR",
      ram: "6 GB",
      storage: "2 GB",
    },
    recommended: {
      headset: "Meta Quest 3 / Valve Index / HTC Vive Pro 2",
      cpu: "Snapdragon XR2 Gen 2 / Intel i5-10400 / Ryzen 5 3600",
      ram: "8 GB+",
      storage: "3 GB",
      gpu: "RTX 3060 / RX 6600 XT (para PCVR)",
    },
  },

  faq: [
    {
      q: "¿Necesito experiencia en VR?",
      a: "No. El tutorial te guía paso a paso. Los controles son intuitivos: agarras objetos como en la vida real.",
    },
    {
      q: "¿Se puede jugar sentado?",
      a: "Sí. El área de juego es una mesa virtual frente a ti. Funciona perfecto sentado o de pie.",
    },
    {
      q: "¿Cuánto dura una partida?",
      a: "Entre 5 y 15 minutos por bomba, según dificultad. Hay bombas infinitas procedurales + campañas diseñadas.",
    },
  ],

  // Pruebas de usuarios reales - videos de playtesting
  userTesting: [
    {
      id: "test-1",
      title: "Sesión de Playtesting - Usuario 1",
      description: "Primer contacto con la bomba. El jugador descubre las mecánicas básicas y resuelve el puzzle de cables.",
      thumbnail: "/images/testing/test-1-thumb.jpg",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1", // Reemplazar con URL real de YouTube/Vimeo
      duration: "3:42",
    },
    {
      id: "test-2",
      title: "Sesión de Playtesting - Usuario 2",
      description: "Jugador experimentado en VR. Completando el puzzle de memoria y circuitos bajo presión del timer.",
      thumbnail: "/images/testing/test-2-thumb.jpg",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2", // Reemplazar con URL real de YouTube/Vimeo
      duration: "4:15",
    },
  ],
}

export type GameData = typeof gameData