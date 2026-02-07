export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Project {
  slug: string;
  title: string;
  hidden: boolean;
  description: string;
  difficulty: Difficulty;
  tags: string[];
  links: { homepage: string | null; repository: string | null; youtube: string | null };
}

export const PROJECTS: Project[] = [
  {
    "slug": "01-css_cards_hover_effects",
    "title": "CSS Cards Hover Effects",
    "hidden": false,
    "description": "Colección de tarjetas con efectos de hover usando CSS y blending.",
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
    "title": "3D Restaurant Landing Page",
    "hidden": false,
    "description": "Landing page interactiva con modelo 3D animado usando Three.js.",
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
    "title": "Landing Page con Scroll Animado",
    "hidden": false,
    "description": "Futuristic electric car landing page with scroll-controlled animation and GSAP effects.",
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
    "title": "Pulse Quiz",
    "hidden": false,
    "description": "Quiz interactivo con transiciones GSAP, glassmorphism y feedback animado, inspirado en html-css-js-projects #01.",
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
  }
] as Project[];