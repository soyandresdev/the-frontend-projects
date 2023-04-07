import { spawn, spawnSync } from 'child_process'
import fs from 'fs'
import fse from 'fs-extra'
import path from 'path'
import puppeteer from 'puppeteer'
import sharp from 'sharp'

async function buildAllWorkspaceDemos() {
  const workspaceDir = path.resolve('workspace')
  if (!fs.existsSync(workspaceDir)) {
    console.error(`❌  No existe la carpeta "${workspaceDir}".`)
    process.exit(1)
  }

  const SKIP_SCREENSHOT = ['02-landingpage_3d_restaurant']

  const entries = await fs.promises.readdir(workspaceDir, {
    withFileTypes: true
  })
  const demos = entries.filter((e) => e.isDirectory()).map((e) => e.name)

  for (const demo of demos) {
    const demoPath = path.join(workspaceDir, demo)
    console.log(`\n📦  Procesando demo "${demo}"…`)

    let didBuild = false
    let isVite = false
    let vitePreviewProcess = null

    const pkgPath = path.join(demoPath, 'package.json')
    if (fs.existsSync(pkgPath)) {
      try {
        const pkg = JSON.parse(await fs.promises.readFile(pkgPath, 'utf-8'))
        if (pkg.scripts?.build) {
          console.log(`  → "${demo}" tiene build: npm install && npm run build`)
          spawnSync('npm', ['install'], { cwd: demoPath, stdio: 'inherit' })
          const res = spawnSync('npm', ['run', 'build'], {
            cwd: demoPath,
            stdio: 'inherit'
          })
          if (res.status !== 0) process.exit(res.status)
          didBuild = true
          isVite = !!pkg.devDependencies?.vite || !!pkg.dependencies?.vite
          console.log(`✅  Build de "${demo}" completado.`)
        }
      } catch {
        console.warn(`  ⚠️  Error parseando package.json de "${demo}"`)
      }
    }

    const distDir = path.join(demoPath, 'dist')
    const srcOutput = didBuild && fs.existsSync(distDir) ? distDir : demoPath
    const indexHtml = path.join(srcOutput, 'index.html')
    const webpTemp = path.join(demoPath, 'screenshot.webp')

    const baseUrl = isVite ? `http://localhost:5173` : `file://${indexHtml}`

    if (!SKIP_SCREENSHOT.includes(demo) && fs.existsSync(indexHtml)) {
      if (fs.existsSync(webpTemp)) {
        console.log(`  ⚠️  Screenshot ya existe para "${demo}". Usando imagen existente.`)
      } else {
        console.log(`  → Generando screenshot de "${demo}"…`)

        if (isVite) {
          console.log(`  🧪  Iniciando vite preview en ${demoPath}`)
          vitePreviewProcess = spawn('npx', ['vite', 'preview', '--port', '5173'], {
            cwd: demoPath,
            stdio: 'ignore',
            detached: true
          })
          await new Promise((r) => setTimeout(r, 3000))
        }

        const browser = await puppeteer.launch({ headless: true })
        try {
          const page = await browser.newPage()
          await page.setViewport({ width: 1280, height: 720 })
          await page.goto(baseUrl, {
            waitUntil: 'networkidle0',
            timeout: 60000
          })

          const pngTemp = path.join(demoPath, 'screenshot.png')
          await page.screenshot({ path: pngTemp })
          await sharp(pngTemp).webp({ quality: 80 }).toFile(webpTemp)
          await fs.promises.unlink(pngTemp)
          console.log(`    📸 Captura guardada en ${webpTemp}`)
        } catch (err) {
          console.error(`❌  Error screenshot "${demo}":`, err)
        } finally {
          await browser.close()
          if (vitePreviewProcess) {
            process.kill(-vitePreviewProcess.pid)
          }
        }
      }
    } else {
      console.log(`  ℹ️  index.html no encontrado o screenshot omitido.`)
    }

    const target = path.resolve('public/demo', demo)
    console.log(`  → Copiando "${srcOutput}" y assets a "${target}"`)
    await fse.remove(target)
    await fse.copy(srcOutput, target)

    if (fs.existsSync(webpTemp)) {
      await fse.copy(webpTemp, path.join(target, 'screenshot.webp'))
    }

    const copiedIndexHtml = path.join(target, 'index.html')
    if (fs.existsSync(copiedIndexHtml) && !isVite) {
      try {
        let html = await fs.promises.readFile(copiedIndexHtml, 'utf-8')
        if (!html.includes('<base ')) {
          html = html.replace(
            /<head[^>]*>/i,
            (match) => `${match}\n  <base href="/demo/${demo}/" />`
          )
          await fs.promises.writeFile(copiedIndexHtml, html, 'utf-8')
          console.log(`🧩 Inyectado <base href="/demo/${demo}/"> en copia`)
        }
      } catch (err) {
        console.warn(`  ⚠️  No se pudo inyectar base en copia de "${demo}":`, err.message)
      }
    } else if (isVite) {
      console.log(`  ⚠️  Proyecto Vite detectado. Usa vite.config.js para definir base.`)
    }
  }

  console.log('\n🎉  ¡Todas las demos procesadas!\n')
}

buildAllWorkspaceDemos().catch((err) => {
  console.error('❌  Error inesperado:', err)
  process.exit(1)
})
