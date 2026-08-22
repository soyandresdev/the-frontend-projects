const SCHEMES = ['analogous', 'complementary', 'triadic', 'split-complementary', 'monochromatic']

const HUE_OFFSETS = {
  analogous: [-40, -20, 0, 20, 40],
  complementary: [0, -18, 16, 180, 196],
  triadic: [0, 18, 120, 240, 258],
  'split-complementary': [0, 16, 150, 210, -14],
  monochromatic: [0, 0, 0, 0, 0]
}

const SCHEME_LABELS = {
  analogous: 'Analogous',
  complementary: 'Complementary',
  triadic: 'Triadic',
  'split-complementary': 'Split-complementary',
  monochromatic: 'Monochromatic'
}

// ---------- Color math ----------
function normalizeHue(h) {
  return ((h % 360) + 360) % 360
}

function hslToRgb(h, s, l) {
  s /= 100
  l /= 100
  const k = (n) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)]
}

function rgbToHex(r, g, b) {
  return `#${[r, g, b].map((c) => c.toString(16).padStart(2, '0')).join('')}`.toUpperCase()
}

function relativeLuminance([r, g, b]) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const v = c / 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

function contrastRatio(rgbA, rgbB) {
  const lA = relativeLuminance(rgbA)
  const lB = relativeLuminance(rgbB)
  const lighter = Math.max(lA, lB)
  const darker = Math.min(lA, lB)
  return (lighter + 0.05) / (darker + 0.05)
}

function bestTextContrast(rgb) {
  const onWhite = contrastRatio(rgb, [255, 255, 255])
  const onBlack = contrastRatio(rgb, [0, 0, 0])
  return onWhite >= onBlack
    ? { ratio: onWhite, on: 'white' }
    : { ratio: onBlack, on: 'black' }
}

function shuffle(arr) {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min)
}

// ---------- Palette generation ----------
function buildPalette(baseHue) {
  const scheme = SCHEMES[Math.floor(Math.random() * SCHEMES.length)]
  const hue = baseHue ?? Math.random() * 360
  const offsets = HUE_OFFSETS[scheme]
  const lightnessLadder = shuffle([26, 40, 54, 68, 82])

  const colors = offsets.map((offset, i) => {
    const h = normalizeHue(hue + offset)
    const s = scheme === 'monochromatic' ? randomBetween(45, 75) : randomBetween(58, 84)
    const l = Math.min(92, Math.max(12, lightnessLadder[i] + randomBetween(-5, 5)))
    const rgb = hslToRgb(h, s, l)
    return { h, s, l, rgb, hex: rgbToHex(...rgb) }
  })

  return { scheme, colors }
}

// ---------- State ----------
const paletteEl = document.getElementById('palette')
const schemeHint = document.getElementById('scheme-hint')
const generateBtn = document.getElementById('generate-btn')
const copyCssBtn = document.getElementById('copy-css-btn')
const formatTabs = document.querySelectorAll('.format-tab')

let currentFormat = 'hex'
let paletteState = []
let chipEls = []

function formatColor(color, format) {
  const [r, g, b] = color.rgb
  if (format === 'rgb') return `rgb(${r}, ${g}, ${b})`
  if (format === 'hsl') return `hsl(${Math.round(color.h)}, ${Math.round(color.s)}%, ${Math.round(color.l)}%)`
  return color.hex
}

function contrastLevelClass(ratio) {
  if (ratio >= 7) return 'level-aaa'
  if (ratio >= 4.5) return 'level-aa'
  return 'level-low'
}

function contrastLevelLabel(ratio) {
  if (ratio >= 7) return `${ratio.toFixed(1)}:1 AAA`
  if (ratio >= 4.5) return `${ratio.toFixed(1)}:1 AA`
  return `${ratio.toFixed(1)}:1 low`
}

// ---------- DOM ----------
function createChips() {
  paletteEl.innerHTML = ''
  chipEls = paletteState.map((entry, index) => {
    const chip = document.createElement('div')
    chip.className = 'chip'

    // `.chip-swatch` and `.chip-lock` are siblings, not nested buttons —
    // a <button> inside another <button> is invalid HTML and browsers
    // silently un-nest it during parsing, breaking the click targets.
    const colorWrap = document.createElement('div')
    colorWrap.className = 'chip-color-wrap'

    const colorBtn = document.createElement('button')
    colorBtn.type = 'button'
    colorBtn.className = 'chip-swatch'
    colorBtn.setAttribute('aria-label', 'Copy this color')
    colorBtn.addEventListener('click', () => copyColor(index))

    const lockBtn = document.createElement('button')
    lockBtn.type = 'button'
    lockBtn.className = 'chip-lock'
    lockBtn.setAttribute('aria-label', 'Lock this color')
    lockBtn.innerHTML = lockIcon(false)
    lockBtn.addEventListener('click', () => toggleLock(index))

    colorWrap.append(colorBtn, lockBtn)

    const label = document.createElement('div')
    label.className = 'chip-label'
    label.innerHTML = `<span class="chip-code"></span><span class="chip-contrast"></span>`
    label.addEventListener('click', () => copyColor(index))

    chip.append(colorWrap, label)
    paletteEl.appendChild(chip)

    return {
      root: chip,
      colorBtn,
      lockBtn,
      code: label.querySelector('.chip-code'),
      contrast: label.querySelector('.chip-contrast')
    }
  })

  paletteState.forEach((_, i) => updateChip(i, { animate: false }))
}

function updateChip(index, { animate }) {
  const entry = paletteState[index]
  const els = chipEls[index]
  const { color } = entry

  els.colorBtn.style.backgroundColor = color.hex
  els.code.textContent = formatColor(color, currentFormat)

  const { ratio } = bestTextContrast(color.rgb)
  els.contrast.textContent = contrastLevelLabel(ratio)
  els.contrast.className = `chip-contrast ${contrastLevelClass(ratio)}`

  els.lockBtn.classList.toggle('is-locked', entry.locked)
  els.lockBtn.innerHTML = lockIcon(entry.locked)

  if (animate) {
    els.colorBtn.classList.remove('is-popping')
    void els.colorBtn.offsetWidth
    els.colorBtn.classList.add('is-popping')
  }
}

function lockIcon(locked) {
  return locked
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.4-2"/></svg>'
}

// ---------- Actions ----------
function toggleLock(index) {
  paletteState[index].locked = !paletteState[index].locked
  updateChip(index, { animate: false })
}

function regenerate() {
  const lockedEntry = paletteState.find((p) => p.locked)
  const baseHue = lockedEntry ? lockedEntry.color.h : undefined
  const { scheme, colors } = buildPalette(baseHue)

  colors.forEach((color, i) => {
    if (paletteState[i]?.locked) return
    paletteState[i] = { color, locked: false }
    updateChip(i, { animate: true })
  })

  schemeHint.textContent = `${SCHEME_LABELS[scheme]} · press space to reshuffle unlocked chips`
}

let copyTimer
function flashCopied(el, text) {
  window.clearTimeout(copyTimer)
  const original = el.textContent
  el.textContent = text
  window.setTimeout(() => {
    el.textContent = original
  }, 1200)
}

async function copyColor(index) {
  const value = formatColor(paletteState[index].color, currentFormat)
  try {
    await navigator.clipboard.writeText(value)
    flashCopied(chipEls[index].code, 'Copied!')
  } catch {
    // clipboard permission denied — the code is still visible on the chip
  }
}

async function copyAsCss() {
  const css = [
    ':root {',
    ...paletteState.map((entry, i) => `  --color-${i + 1}: ${entry.color.hex};`),
    '}'
  ].join('\n')

  try {
    await navigator.clipboard.writeText(css)
    const original = copyCssBtn.textContent
    copyCssBtn.textContent = 'Copied!'
    window.setTimeout(() => (copyCssBtn.textContent = original), 1200)
  } catch {
    // clipboard permission denied
  }
}

// ---------- Wiring ----------
formatTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    currentFormat = tab.dataset.format
    formatTabs.forEach((t) => t.classList.toggle('is-active', t === tab))
    paletteState.forEach((_, i) => updateChip(i, { animate: false }))
  })
})

generateBtn.addEventListener('click', regenerate)
copyCssBtn.addEventListener('click', copyAsCss)

document.addEventListener('keydown', (e) => {
  if (e.code !== 'Space') return
  e.preventDefault()
  regenerate()
})

// ---------- Init ----------
const initial = buildPalette()
paletteState = initial.colors.map((color) => ({ color, locked: false }))
createChips()
schemeHint.textContent = `${SCHEME_LABELS[initial.scheme]} · press space to reshuffle unlocked chips`
