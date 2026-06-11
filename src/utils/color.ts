/*
  color.ts
  ========
  Color de acento por proyecto, calculado en build a partir de su screenshot.
  Busca el color "vibrante" más frecuente (saturado y ni muy claro ni muy oscuro),
  al estilo de Vibrant.js, para que el cursor y el borde de la card tomen ese tono.
*/
import { promises as fs } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

export interface Accent {
  /** color CSS, p. ej. "rgb(255 12 0)" */
  color: string
  /** color de texto legible encima: "#0a121e" o "#ffffff" */
  ink: string
}

const FALLBACK: Accent = { color: 'rgb(0 243 255)', ink: '#0a121e' }
const cache = new Map<string, Promise<Accent>>()

function rgbToHsl(r: number, g: number, b: number) {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  if (max === min) return { h: 0, s: 0, l }
  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h = 0
  if (max === r) h = (g - b) / d + (g < b ? 6 : 0)
  else if (max === g) h = (b - r) / d + 2
  else h = (r - g) / d + 4
  return { h: h / 6, s, l }
}

function luminance(r: number, g: number, b: number) {
  const f = (c: number) => {
    c /= 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  }
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)
}

async function compute(file: string): Promise<Accent> {
  try {
    await fs.access(file)
    const { data, info } = await sharp(file)
      .resize(64, 36, { fit: 'fill' })
      .removeAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true })

    // Agrupa píxeles vibrantes en cubos de 32 niveles y elige el más poblado.
    const buckets = new Map<number, { n: number; r: number; g: number; b: number }>()
    for (let i = 0; i < info.width * info.height; i++) {
      const r = data[i * 3]
      const g = data[i * 3 + 1]
      const b = data[i * 3 + 2]
      const { s, l } = rgbToHsl(r, g, b)
      if (s < 0.35 || l < 0.2 || l > 0.8) continue
      const key = ((r >> 5) << 6) | ((g >> 5) << 3) | (b >> 5)
      const acc = buckets.get(key) ?? { n: 0, r: 0, g: 0, b: 0 }
      acc.n++
      acc.r += r
      acc.g += g
      acc.b += b
      buckets.set(key, acc)
    }
    let best: { n: number; r: number; g: number; b: number } | null = null
    for (const acc of buckets.values()) if (!best || acc.n > best.n) best = acc
    if (!best) {
      // Imagen sin color (b/n o casi): usa el dominante pero forzando un tono visible.
      const { dominant } = await sharp(file).stats()
      const { h, s } = rgbToHsl(dominant.r, dominant.g, dominant.b)
      if (s < 0.15) return FALLBACK
      return hslAccent(h, Math.max(s, 0.6), 0.6)
    }
    const r = Math.round(best.r / best.n)
    const g = Math.round(best.g / best.n)
    const b = Math.round(best.b / best.n)
    // Sube un poco la luminosidad para que se lea sobre el fondo oscuro del sitio.
    const { h, s, l } = rgbToHsl(r, g, b)
    return hslAccent(h, Math.min(1, s * 1.1), Math.max(l, 0.55))
  } catch {
    return FALLBACK
  }
}

function hslAccent(h: number, s: number, l: number): Accent {
  const [r, g, b] = hslToRgb(h, s, l)
  const ink = luminance(r, g, b) > 0.45 ? '#0a121e' : '#ffffff'
  return { color: `rgb(${r} ${g} ${b})`, ink }
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  const k = (n: number) => (n + h * 12) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)]
}

/** Acento del proyecto por slug (lee public/demo/<slug>/screenshot.webp). Cacheado por build. */
export function getAccent(slug: string): Promise<Accent> {
  let p = cache.get(slug)
  if (!p) {
    p = compute(path.resolve('public', 'demo', slug, 'screenshot.webp'))
    cache.set(slug, p)
  }
  return p
}
