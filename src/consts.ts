export interface Project {
  slug: string;
  title: string;
  hidden: boolean;
  description: string;
  tags: string[];
  links: {
    homepage: string | null;
    repository: string | null;
    youtube: string | null;
  };
}

export const PROJECTS: Project[] = [
  {
    slug: "01-css_cards_hover_effects",
    title: "CSS Cards Hover Effects",
    hidden: false,
    description:
      "Colección de tarjetas con efectos de hover usando CSS y blending.",
    tags: ["css", "hover", "cards"],
    links: {
      homepage: null,
      repository: null,
      youtube: null,
    },
  },
  {
    slug: "02-landingpage_3d_restaurant",
    title: "3D Restaurant Landing Page",
    hidden: false,
    description:
      "Landing page interactiva con modelo 3D animado usando Three.js.",
    tags: ["threejs", "landing page", "3d", "webgl", "restaurante"],
    links: {
      homepage: null,
      repository: null,
      youtube: null,
    },
  },
] as Project[];
