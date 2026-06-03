export const languages = {
  en: 'English',
  es: 'Español'
} as const

export const defaultLang = 'en'

export const ui = {
  en: {
    'site.title': 'The Frontend Projects - by SoyAndresDev',
    'site.description':
      'Real frontend projects with style, animation and love. Learn, get inspired, or explore the portfolio of a dev who lives for code.',

    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.github': 'GitHub',
    'nav.projectsLabel': 'projects',

    'hero.eyebrow': 'Front-end lab · Est. 2025',
    'hero.tagline': 'Real projects. Real code. Built to be learned from.',
    'hero.greeting': "Hey, I'm Andres Hernandez Lozano",
    'hero.bio.part1': 'Passionate about',
    'hero.bio.frontend': 'frontend',
    'hero.bio.part2':
      'development, I build clean and accessible interfaces. Sharing projects and practical tutorials on',
    'hero.bio.and': 'and',
    'hero.bio.part3': 'so you can learn fast and have fun.',
    'hero.location': 'Melbourne, VIC',
    'hero.locationLong': 'Located in Melbourne, VIC.',
    'hero.available': 'Open to collaborate',
    'hero.scroll': 'Scroll to explore',
    'hero.counterLabel': 'projects and counting',

    'projects.heading': 'All projects',
    'projects.sub': 'Filter by difficulty, search by name or tech, and open any demo.',
    'filter.all': 'All',
    'filter.search': 'Search projects…',
    'filter.tags': 'Tech',
    'filter.results': 'results',
    'filter.empty': 'Nothing matches that filter yet.',
    'filter.clear': 'Clear filters',
    'cursor.view': 'View',

    'footer.cta': 'Have an idea worth building?',
    'footer.ctaBtn': "Let's talk",
    'footer.top': 'Back to top',
    'footer.madeWith': 'Made with ❤️ by SoyAndresDev',

    'project.code': 'Code',
    'project.demo': 'Demo',
    'project.video': 'Video',
    'project.open': 'Open in new tab',
    'project.loading': 'Loading demo…',
    'project.back': 'Back to projects',
    'project.prev': 'Previous',
    'project.next': 'Next',
    'project.hide': 'Hide panel',
    'project.show': 'Show info',

    'difficulty.beginner': 'Beginner',
    'difficulty.intermediate': 'Intermediate',
    'difficulty.advanced': 'Advanced',

    '404.message': "Sorry, the page you're looking for doesn't exist or has been moved.",
    '404.back': 'Back home'
  },
  es: {
    'site.title': 'The Frontend Projects - por SoyAndresDev',
    'site.description':
      'Proyectos frontend reales con estilo, animación y amor. Aprende, inspírate o explora el portafolio de un dev que vive el código.',

    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.github': 'GitHub',
    'nav.projectsLabel': 'proyectos',

    'hero.eyebrow': 'Laboratorio front-end · Desde 2025',
    'hero.tagline': 'Proyectos reales. Código real. Hechos para aprender.',
    'hero.greeting': '¡Ey!, Soy Andres Hernandez Lozano',
    'hero.bio.part1': 'Apasionado por el desarrollo',
    'hero.bio.frontend': 'frontend',
    'hero.bio.part2':
      'creo interfaces limpias y accesibles. Compartiendo proyectos y tutoriales prácticos de',
    'hero.bio.and': 'y',
    'hero.bio.part3': 'para que aprendas de forma rápida y divertida.',
    'hero.location': 'Melbourne, VIC',
    'hero.locationLong': 'Ubicado en Melbourne, VIC.',
    'hero.available': 'Abierto a colaborar',
    'hero.scroll': 'Desliza para explorar',
    'hero.counterLabel': 'proyectos y contando',

    'projects.heading': 'Todos los proyectos',
    'projects.sub': 'Filtra por dificultad, busca por nombre o tecnología y abre cualquier demo.',
    'filter.all': 'Todos',
    'filter.search': 'Buscar proyectos…',
    'filter.tags': 'Tecnología',
    'filter.results': 'resultados',
    'filter.empty': 'Nada coincide con ese filtro todavía.',
    'filter.clear': 'Limpiar filtros',
    'cursor.view': 'Ver',

    'footer.cta': '¿Tienes una idea que valga la pena construir?',
    'footer.ctaBtn': 'Hablemos',
    'footer.top': 'Volver arriba',
    'footer.madeWith': 'Hecho con ❤️ por SoyAndresDev',

    'project.code': 'Código',
    'project.demo': 'Demo',
    'project.video': 'Video',
    'project.open': 'Abrir en otra pestaña',
    'project.loading': 'Cargando demo…',
    'project.back': 'Volver a proyectos',
    'project.prev': 'Anterior',
    'project.next': 'Siguiente',
    'project.hide': 'Ocultar panel',
    'project.show': 'Ver info',

    'difficulty.beginner': 'Principiante',
    'difficulty.intermediate': 'Intermedio',
    'difficulty.advanced': 'Avanzado',

    '404.message': 'Lo sentimos, la página que buscas no existe o ha sido movida.',
    '404.back': 'Volver al inicio'
  }
} as const satisfies Record<string, Record<string, string>>
