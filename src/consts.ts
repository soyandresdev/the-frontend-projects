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
  }
] as Project[];