// DiceBear's hosted API is a purpose-built, CORS-open avatar generation
// service (deterministic SVG by seed, no auth, no personal data) — unlike a
// rate-limited data API, an image endpoint like this is safe to call live
// per interaction, the same way a project might pull in a web font.
const DICEBEAR_BASE = 'https://api.dicebear.com/9.x'

const STYLES = [
  'lorelei',
  'adventurer',
  'avataaars',
  'bottts',
  'pixel-art',
  'big-smile',
  'notionists',
  'thumbs'
]

const seedInput = document.getElementById('seed-input')
const diceBtn = document.getElementById('dice-btn')
const leverBtn = document.getElementById('lever-btn')
const downloadBtn = document.getElementById('download-btn')
const downloadLabel = document.getElementById('download-label')
const strip = document.getElementById('strip')

const frames = STYLES.map((style) => ({
  style,
  el: document.querySelector(`.frame[data-style="${style}"]`),
  img: document.getElementById(`img-${style}`)
}))

function randomSeed() {
  return Math.random().toString(36).slice(2, 10)
}

function avatarUrl(style, seed) {
  return `${DICEBEAR_BASE}/${style}/svg?seed=${encodeURIComponent(seed)}`
}

function generate(seedRaw) {
  const seed = seedRaw.trim() || randomSeed()
  downloadBtn.disabled = true

  const loads = frames.map(
    ({ el, img, style }) =>
      new Promise((resolve) => {
        el.classList.remove('is-revealed')

        const onSettle = () => {
          el.classList.add('is-revealed')
          resolve()
        }

        img.onload = onSettle
        img.onerror = onSettle
        img.crossOrigin = 'anonymous'
        img.src = avatarUrl(style, seed)
      })
  )

  Promise.all(loads).then(() => {
    downloadBtn.disabled = false
  })
}

leverBtn.addEventListener('click', () => generate(seedInput.value))

diceBtn.addEventListener('click', () => {
  const seed = randomSeed()
  seedInput.value = seed
  generate(seed)
})

seedInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') generate(seedInput.value)
})

// ---------- Descarga real de la tira como PNG (canvas) ----------
async function downloadStrip() {
  const original = downloadLabel.textContent
  downloadBtn.disabled = true
  downloadLabel.textContent = 'Printing…'

  const cellSize = 220
  const gap = 24
  const padX = 44
  const padTop = 34
  const padBottom = 20
  const labelHeight = 26
  const rowHeight = cellSize + labelHeight

  const width = cellSize + padX * 2
  const height = padTop + frames.length * rowHeight + (frames.length - 1) * gap + padBottom

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = '#faf6ec'
  ctx.fillRect(0, 0, width, height)

  // Perforaciones del carrete a ambos lados.
  ctx.fillStyle = '#0a0609'
  const holeRadius = 5
  for (let y = padTop; y < height - padBottom; y += 20) {
    ctx.beginPath()
    ctx.arc(18, y, holeRadius, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(width - 18, y, holeRadius, 0, Math.PI * 2)
    ctx.fill()
  }

  try {
    frames.forEach(({ img, style }, i) => {
      const y = padTop + i * (rowHeight + gap)

      ctx.fillStyle = '#161311'
      roundRect(ctx, padX, y, cellSize, cellSize, 8)
      ctx.fill()

      try {
        ctx.drawImage(img, padX + 10, y + 10, cellSize - 20, cellSize - 20)
      } catch {
        // If a given avatar failed to load, leave its dark placeholder box.
      }

      ctx.fillStyle = 'rgba(22, 19, 17, 0.55)'
      ctx.font = '600 13px monospace'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(style.toUpperCase(), width / 2, y + cellSize + labelHeight / 2 + 2)
    })

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'))
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `boothstrip-${seedInput.value.trim() || 'random'}.png`
    link.click()
    URL.revokeObjectURL(url)
  } finally {
    downloadLabel.textContent = original
    downloadBtn.disabled = false
  }
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

downloadBtn.addEventListener('click', downloadStrip)

generate(seedInput.value || 'astro')
