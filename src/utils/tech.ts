/*
  tech.ts
  =======
  Tags de tecnología con logo (SVG de svgporn.com en public/tech) frente a tags
  de tema. Los primeros se pintan como iconos; el resto, como chips de texto.
*/
export interface Tech {
  /** archivo en public/tech/<file>.svg */
  file: string
  label: string
  /** los wordmarks (GSAP) son más anchos que altos */
  wide?: boolean
}

const TECH: Record<string, Tech> = {
  html: { file: 'html', label: 'HTML5' },
  css: { file: 'css', label: 'CSS' },
  javascript: { file: 'javascript', label: 'JavaScript' },
  typescript: { file: 'typescript', label: 'TypeScript' },
  react: { file: 'react', label: 'React' },
  vite: { file: 'vite', label: 'Vite' },
  gsap: { file: 'gsap', label: 'GSAP', wide: true },
  threejs: { file: 'threejs', label: 'Three.js' },
  'three.js': { file: 'threejs', label: 'Three.js' }
}

export function techFor(tag: string): Tech | undefined {
  // String(): algún tag llega como número (p. ej. 404 desde el YAML de DATA.md)
  return TECH[String(tag).toLowerCase()]
}

/** Separa los tags de un proyecto en tecnologías con logo y temas de texto. */
export function splitTags(tags: string[]): { tech: Tech[]; topics: string[] } {
  const tech: Tech[] = []
  const topics: string[] = []
  const seen = new Set<string>()
  for (const tag of tags) {
    const t = techFor(tag)
    if (!t) topics.push(tag)
    else if (!seen.has(t.file)) {
      seen.add(t.file)
      tech.push(t)
    }
  }
  return { tech, topics }
}
