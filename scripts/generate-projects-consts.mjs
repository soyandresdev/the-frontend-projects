#!/usr/bin/env node
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

const WORKSPACE_DIR = path.resolve("workspace");
const OUTPUT_FILE = path.resolve("src", "consts.ts");

async function generate() {
  const entries = await fs.readdir(WORKSPACE_DIR, { withFileTypes: true });
  const projects = [];

  for (const dirent of entries) {
    if (!dirent.isDirectory()) continue;
    const slug = dirent.name;
    const projectDir = path.join(WORKSPACE_DIR, slug);

    // Leer package.json si existe
    let pkg = {};
    try {
      const rawPkg = await fs.readFile(
        path.join(projectDir, "package.json"),
        "utf-8",
      );
      pkg = JSON.parse(rawPkg);
    } catch {
      // no hay package.json
    }

    // Leer frontmatter de README.md si existe
    let fmData = {};
    try {
      const readme = await fs.readFile(
        path.join(projectDir, "README.md"),
        "utf-8",
      );
      fmData = matter(readme).data;
    } catch {
      // no hay README.md o sin frontmatter
    }

    // Prioriza frontmatter > package.json > defaults
    const title = fmData.title || pkg.name || slug;
    const description = fmData.description || pkg.description || "";
    const tags = Array.isArray(fmData.keywords)
      ? fmData.keywords
      : Array.isArray(pkg.keywords)
        ? pkg.keywords
        : [];

    const links = {
      homepage: fmData.links?.homepage || pkg.homepage || null,
      repository: fmData.links?.repository || pkg.repository?.url || null,
      youtube: fmData.links?.youtube || null,
    };

    projects.push({ slug, title, hidden: false, description, tags, links });
  }

  const fileContent = `export interface Project {
  slug: string;
  title: string;
  hidden: boolean;
  description: string;
  tags: string[];
  links: { homepage: string | null; repository: string | null; youtube: string | null };
}

export const PROJECTS: Project[] = ${JSON.stringify(
    projects,
    null,
    2,
  )} as Project[];`;

  await fs.writeFile(OUTPUT_FILE, fileContent, "utf-8");
  console.log(`✅ Consts generado en ${OUTPUT_FILE}`);
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
