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
      "en": "3D Restaurant Landing Page",
      "es": "3D Restaurant Landing Page"
    },
    "hidden": false,
    "description": {
      "en": "Interactive landing page with an animated 3D model built with Three.js.",
      "es": "Landing page interactiva con modelo 3D animado usando Three.js."
    },
    "difficulty": "advanced",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "ThreeJs",
      "landing page",
      "3d",
      "webgl"
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
  }
] as Project[];