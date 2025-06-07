#!/usr/bin/env node

import fs from "fs";
import fse from "fs-extra";
import path from "path";
import { spawnSync } from "child_process";
import puppeteer from "puppeteer";
import sharp from "sharp";

async function buildAllWorkspaceDemos() {
  const workspaceDir = path.resolve("workspace");
  if (!fs.existsSync(workspaceDir)) {
    console.error(`❌  No existe la carpeta "${workspaceDir}".`);
    process.exit(1);
  }

  // Slugs para los que se omite solo el screenshot
  const SKIP_SCREENSHOT = ["02-landingpage_3d_restaurant"];

  // Leer todos los directorios en workspace/
  const entries = await fs.promises.readdir(workspaceDir, {
    withFileTypes: true,
  });
  const demos = entries.filter((e) => e.isDirectory()).map((e) => e.name);

  if (demos.length === 0) {
    console.log("ℹ️  No hay subdirectorios en workspace/.");
    return;
  }

  for (const demo of demos) {
    const demoPath = path.join(workspaceDir, demo);
    console.log(`\n📦  Procesando demo "${demo}"…`);

    // 1) Build si hay script build
    let didBuild = false;
    const pkgPath = path.join(demoPath, "package.json");
    if (fs.existsSync(pkgPath)) {
      try {
        const pkg = JSON.parse(await fs.promises.readFile(pkgPath, "utf-8"));
        if (pkg.scripts?.build) {
          console.log(
            `  → "${demo}" tiene build: npm install && npm run build`,
          );
          spawnSync("npm", ["install"], { cwd: demoPath, stdio: "inherit" });
          const res = spawnSync("npm", ["run", "build"], {
            cwd: demoPath,
            stdio: "inherit",
          });
          if (res.status !== 0) process.exit(res.status);
          didBuild = true;
          console.log(`✅  Build de "${demo}" completado.`);
        }
      } catch {
        console.warn(
          `  ⚠️  Error parseando package.json de "${demo}", copiando directo.`,
        );
      }
    }

    // 2) Ruta fuente: dist o carpeta del demo
    const distDir = path.join(demoPath, "dist");
    const srcOutput = didBuild && fs.existsSync(distDir) ? distDir : demoPath;
    const indexHtml = path.join(srcOutput, "index.html");

    // 3) Captura screenshot salvo skip
    if (!SKIP_SCREENSHOT.includes(demo) && fs.existsSync(indexHtml)) {
      console.log(`  → Generando screenshot de "${demo}"…`);
      const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });
      try {
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 720 });
        await page.goto(`file://${indexHtml}`, {
          waitUntil: "domcontentloaded",
          timeout: 60000,
        });

        // Espera mínima para que el contenido procese, opcional
        await page.waitForSelector("body", { timeout: 5000 }).catch(() => {});

        // Capturar elemento o viewport
        const pngTemp = path.join(demoPath, "screenshot.png");
        const bodyHandle = await page.$("body");
        if (bodyHandle) {
          await bodyHandle.screenshot({ path: pngTemp });
          await bodyHandle.dispose();
        } else {
          await page.screenshot({
            path: pngTemp,
            clip: { x: 0, y: 0, width: 1280, height: 720 },
          });
        }

        const webpTemp = path.join(demoPath, "screenshot.webp");
        await sharp(pngTemp).webp({ quality: 80 }).toFile(webpTemp);
        await fs.promises.unlink(pngTemp);
        console.log(`    📸 Captura guardada en ${webpTemp}`);
      } catch (err) {
        console.error(`❌  Error screenshot "${demo}":`, err);
      } finally {
        await browser.close();
      }
    } else if (SKIP_SCREENSHOT.includes(demo)) {
      console.log(`  ⚠️  Screenshot de "${demo}" skippeado.`);
    } else {
      console.log(`  ℹ️  index.html no encontrado, no hay screenshot.`);
    }

    // 4) Copiar demo y screenshot a public/demo/<slug>
    const target = path.resolve("public/demo", demo);
    console.log(`  → Copiando "${srcOutput}" y assets a "${target}"`);
    await fse.remove(target);
    await fse.copy(srcOutput, target);
    const webpTemp = path.join(demoPath, "screenshot.webp");
    if (fs.existsSync(webpTemp)) {
      await fse.copy(webpTemp, path.join(target, "screenshot.webp"));
    }
    console.log(`✅  Demo "${demo}" copiada en public/demo/${demo}`);
  }

  console.log("\n🎉  ¡Todas las demos procesadas!\n");
}

buildAllWorkspaceDemos().catch((err) => {
  console.error("❌  Error inesperado:", err);
  process.exit(1);
});
