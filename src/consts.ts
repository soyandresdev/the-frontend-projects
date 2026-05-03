export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type LocalizedText = { en: string; es: string };

export interface Project {
  slug: string;
  title: LocalizedText;
  hidden: boolean;
  description: LocalizedText;
  difficulty: Difficulty;
  tags: string[];
  links: { homepage: string | null; repository: string | null; youtube: string | null };
}

export const PROJECTS: Project[] = [
  {
    "slug": "01-css_cards_hover_effects",
    "title": {
      "en": "CSS Cards Hover Effects",
      "es": "CSS Cards Hover Effects"
    },
    "hidden": false,
    "description": {
      "en": "A collection of cards with modern hover effects using CSS and blend modes.",
      "es": "Colección de tarjetas con efectos de hover usando CSS y blending."
    },
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "hover",
      "cards"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "02-landingpage_3d_restaurant",
    "title": {
      "en": "CyberNoodles — 3D Restaurant Landing",
      "es": "CyberNoodles — Landing 3D de restaurante"
    },
    "hidden": false,
    "description": {
      "en": "Cyberpunk noodle kiosk landing with a scroll-driven Three.js camera, GSAP ScrollTrigger sections and a pinned menu gallery.",
      "es": "Landing de un kiosco de fideos cyberpunk con cámara Three.js controlada por scroll, secciones GSAP ScrollTrigger y galería de menú fijada."
    },
    "difficulty": "advanced",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "ThreeJs",
      "GSAP",
      "ScrollTrigger",
      "landing page",
      "3d",
      "webgl",
      "vite"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "03-scroll-animation",
    "title": {
      "en": "Scroll-Animated Landing Page",
      "es": "Landing Page con Scroll Animado"
    },
    "hidden": false,
    "description": {
      "en": "Futuristic electric car landing page with scroll-controlled animation and GSAP effects.",
      "es": "Landing page futurista de un auto eléctrico con animación controlada por scroll y efectos GSAP."
    },
    "difficulty": "intermediate",
    "tags": [
      "scroll animation",
      "GSAP",
      "HTML",
      "CSS",
      "JavaScript",
      "vite"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "04-quiz-game",
    "title": {
      "en": "Pulse Quiz",
      "es": "Pulse Quiz"
    },
    "hidden": false,
    "description": {
      "en": "Interactive quiz with GSAP transitions, glassmorphism and animated feedback, reimagined from html-css-js-projects #01.",
      "es": "Quiz interactivo con transiciones GSAP, glassmorphism y feedback animado, inspirado en html-css-js-projects #01."
    },
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "GSAP",
      "quiz",
      "animation"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "05-inkline",
    "title": {
      "en": "Inkline",
      "es": "Inkline"
    },
    "hidden": false,
    "description": {
      "en": "A reading-progress indicator with a scroll-driven CSS timeline and a glass badge, reimagined from html-css-js-projects #49.",
      "es": "Indicador de progreso de lectura con una línea de tiempo CSS ligada al scroll y una badge de cristal, inspirado en html-css-js-projects #49."
    },
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "scroll",
      "progress",
      "animation-timeline"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "06-strongbox",
    "title": {
      "en": "Strongbox",
      "es": "Strongbox"
    },
    "hidden": false,
    "description": {
      "en": "A password strength checker with a segmented live meter and animated requirement checklist, reimagined from html-css-js-projects #32.",
      "es": "Verificador de fortaleza de contraseña con medidor segmentado en vivo y checklist animado de requisitos, inspirado en html-css-js-projects #32."
    },
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "password",
      "forms",
      "validation"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "07-masthead",
    "title": {
      "en": "Masthead",
      "es": "Masthead"
    },
    "hidden": false,
    "description": {
      "en": "A print-editorial team page — cream paper tones, serif display type and duotone photography, reimagined from html-css-js-projects #20.",
      "es": "Página de equipo estilo editorial impreso — tonos crema, tipografía serif y fotografía a duotono, inspirada en html-css-js-projects #20."
    },
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "CSS",
      "team",
      "editorial",
      "grid",
      "typography"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "08-stray",
    "title": {
      "en": "Stray",
      "es": "Stray"
    },
    "hidden": false,
    "description": {
      "en": "A 404 page where the digits are draggable magnets with real spring physics — flick them and they settle back with momentum. Reimagined from html-css-js-projects #15.",
      "es": "Página 404 donde los dígitos son imanes arrastrables con física de resorte real — suéltalos y vuelven con inercia. Inspirada en html-css-js-projects #15."
    },
    "difficulty": "intermediate",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      404,
      "drag",
      "spring physics",
      "pointer events"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "09-flapboard",
    "title": {
      "en": "Flapboard",
      "es": "Flapboard"
    },
    "hidden": false,
    "description": {
      "en": "A countdown timer styled as an airport split-flap departure board, with real mechanical flip animation per digit. Reimagined from html-css-js-projects #29.",
      "es": "Cronómetro de cuenta regresiva estilo tablero de salidas de aeropuerto, con animación mecánica de flip por dígito. Inspirado en html-css-js-projects #29."
    },
    "difficulty": "intermediate",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "countdown",
      "split-flap",
      "Web Animations API"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "10-noughts",
    "title": {
      "en": "Noughts",
      "es": "Noughts"
    },
    "hidden": false,
    "description": {
      "en": "Tic-tac-toe with a bold neo-brutalist look — flat color, thick borders, hard offset shadows and a hand-drawn winning line. Reimagined from html-css-js-projects #44.",
      "es": "Tres en línea con estética neobrutalista — color plano, bordes gruesos, sombras duras y una línea ganadora \"dibujada a mano\". Inspirado en html-css-js-projects #44."
    },
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "game",
      "tic-tac-toe",
      "neubrutalism"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "11-presence",
    "title": {
      "en": "Presence",
      "es": "Presence"
    },
    "hidden": false,
    "description": {
      "en": "A product-style avatar stack with hover tooltips, a live status pulse and an expandable full roster — reimagined from html-css-js-projects #43.",
      "es": "Stack de avatares estilo producto con tooltips al hover, pulso de estado en vivo y un roster completo expandible — inspirado en html-css-js-projects #43."
    },
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "avatars",
      "tooltip",
      "presence"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "12-tally",
    "title": {
      "en": "Tally",
      "es": "Tally"
    },
    "hidden": false,
    "description": {
      "en": "Colorful KPI cards with count-up numbers, inline sparklines and a scroll-triggered reveal. Reimagined from html-css-js-projects #35.",
      "es": "Tarjetas KPI de colores saturados con números que cuentan hacia arriba, mini gráficos y revelado al hacer scroll. Inspirado en html-css-js-projects #35."
    },
    "difficulty": "beginner",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "dashboard",
      "stats",
      "count-up",
      "intersection observer"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "13-eclipse",
    "title": {
      "en": "Eclipse",
      "es": "Eclipse"
    },
    "hidden": false,
    "description": {
      "en": "A dark mode toggle with a circular wipe transition that expands from the switch, using the View Transitions API. Reimagined from html-css-js-projects #27.",
      "es": "Toggle de modo oscuro con una transición circular que se expande desde el switch, usando la View Transitions API. Inspirado en html-css-js-projects #27."
    },
    "difficulty": "intermediate",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "dark mode",
      "view transitions",
      "theming"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  },
  {
    "slug": "14-ticker",
    "title": {
      "en": "Ticker",
      "es": "Ticker"
    },
    "hidden": false,
    "description": {
      "en": "A simulated live crypto dashboard — flashing price updates, per-coin sparklines and a scrolling ticker tape, all client-side (no flaky third-party API). Reimagined from html-css-js-projects #50.",
      "es": "Dashboard cripto simulado en vivo — precios que destellan al actualizar, sparklines por moneda y una cinta de ticker, todo del lado del cliente. Inspirado en html-css-js-projects #50."
    },
    "difficulty": "intermediate",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "dashboard",
      "crypto",
      "sparkline",
      "simulation"
    ],
    "links": {
      "homepage": null,
      "repository": null,
      "youtube": null
    }
  }
] as Project[];