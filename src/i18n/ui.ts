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

    'nav.projectsLabel': 'projects',

    'hero.greeting': "Hey, I'm Andres Hernandez Lozano",
    'hero.bio.part1': 'Passionate about',
    'hero.bio.frontend': 'frontend',
    'hero.bio.part2':
      'development, I build clean and accessible interfaces. Sharing projects and practical tutorials on',
    'hero.bio.and': 'and',
    'hero.bio.part3': 'so you can learn fast and have fun.',
    'hero.location': 'Located in Melbourne, VIC.',

    'footer.madeWith': 'Made with ❤️ by SoyAndresDev',

    'project.code': 'Code',
    'project.demo': 'Demo',
    'project.video': 'Video',
    'project.back': '← Back to projects',

    'difficulty.beginner': 'Beginner',
    'difficulty.intermediate': 'Intermediate',
    'difficulty.advanced': 'Advanced',

    '404.message': "Sorry, the page you're looking for doesn't exist or has been moved.",
    '404.back': '← Back home'
  },
  es: {
    'site.title': 'The Frontend Projects - por SoyAndresDev',
    'site.description':
      'Proyectos frontend reales con estilo, animación y amor. Aprende, inspírate o explora el portafolio de un dev que vive el código.',

    'nav.projectsLabel': 'proyectos',

    'hero.greeting': '¡Ey!, Soy Andres Hernandez Lozano',
    'hero.bio.part1': 'Apasionado por el desarrollo',
    'hero.bio.frontend': 'frontend',
    'hero.bio.part2':
      'creo interfaces limpias y accesibles. Compartiendo proyectos y tutoriales prácticos de',
    'hero.bio.and': 'y',
    'hero.bio.part3': 'para que aprendas de forma rápida y divertida.',
    'hero.location': 'Ubicado en Melbourne, VIC.',

    'footer.madeWith': 'Hecho con ❤️ por SoyAndresDev',

    'project.code': 'Código',
    'project.demo': 'Demo',
    'project.video': 'Video',
    'project.back': '← Volver a proyectos',

    'difficulty.beginner': 'Principiante',
    'difficulty.intermediate': 'Intermedio',
    'difficulty.advanced': 'Avanzado',

    '404.message': 'Lo sentimos, la página que buscas no existe o ha sido movida.',
    '404.back': '← Volver al inicio'
  }
} as const satisfies Record<string, Record<string, string>>
