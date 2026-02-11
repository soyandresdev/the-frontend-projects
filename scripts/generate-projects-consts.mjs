#!/usr/bin/env node
import { promises as fs } from 'fs'
import matter from 'gray-matter'
import path from 'path'

const WORKSPACE_DIR = path.resolve('workspace')
const OUTPUT_FILE = path.resolve('src', 'consts.ts')
const LOCALES = ['en', 'es']

/** Normaliza un valor de frontmatter (string legado u objeto {en, es, ...}) a un Record completo por locale. */
function toLocalized(value, fallback = '') {
  if (value && typeof value === 'object') {
    const en = value.en ?? fallback
    return Object.fromEntries(LOCALES.map((locale) => [locale, value[locale] ?? en]))
  }
  const str = value ?? fallback
  return Object.fromEntries(LOCALES.map((locale) => [locale, str]))
}

async function generate() {
  const entries = await fs.readdir(WORKSPACE_DIR, { withFileTypes: true })
  const projects = []

  for (const dirent of entries) {
    if (!dirent.isDirectory()) continue
    const slug = dirent.name
    const projectDir = path.join(WORKSPACE_DIR, slug)

    // Leer package.json si existe
    let pkg = {}
    try {
      const rawPkg = await fs.readFile(path.join(projectDir, 'package.json'), 'utf-8')
      pkg = JSON.parse(rawPkg)
    } catch {
      // no hay package.json
    }

    // Leer frontmatter de README.md si existe
    let fmData = {}
    try {
      const readme = await fs.readFile(path.join(projectDir, 'DATA.md'), 'utf-8')
      fmData = matter(readme).data
    } catch {
      // no hay README.md o sin frontmatter
    }

    // Prioriza frontmatter > package.json > defaults
    const title = toLocalized(fmData.title, pkg.title || pkg.name || slug)
    const description = toLocalized(fmData.description, pkg.description || '')
    const tags = Array.isArray(fmData.keywords)
      ? fmData.keywords
      : Array.isArray(pkg.keywords)
        ? pkg.keywords
        : []
    const VALID_DIFFICULTIES = ['beginner', 'intermediate', 'advanced']
    const difficulty = VALID_DIFFICULTIES.includes(fmData.difficulty)
      ? fmData.difficulty
      : VALID_DIFFICULTIES.includes(pkg.difficulty)
        ? pkg.difficulty
        : 'beginner'

    const links = {
      homepage: fmData.links?.homepage || pkg.homepage || null,
      repository: fmData.links?.repository || pkg.repository?.url || null,
      youtube: fmData.links?.youtube || null
    }

    projects.push({ slug, title, hidden: false, description, difficulty, tags, links })
  }

  const fileContent = `export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

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

export const PROJECTS: Project[] = ${JSON.stringify(projects, null, 2)} as Project[];`

  await fs.writeFile(OUTPUT_FILE, fileContent, 'utf-8')
  console.log(`✅ Consts generado en ${OUTPUT_FILE}`)
}

generate().catch((err) => {
  console.error(err)
  process.exit(1)
})
