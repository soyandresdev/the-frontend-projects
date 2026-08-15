// The core encoder (qrcode-lib.js) is vendored from kazuhikoarase/qrcode-generator
// (MIT) — hand-rolling Reed-Solomon error correction from scratch is exactly the
// kind of thing that LOOKS plausible but silently produces an unscannable code.
// Everything around it (content builders, canvas/SVG rendering, styling, export)
// is original.
qrcode.stringToBytes = function (s) {
  return Array.from(new TextEncoder().encode(s))
}

const QUIET_ZONE = 4
const RENDER_TARGET = 560

const canvas = document.getElementById('qr-canvas')
const ctx = canvas.getContext('2d')
const qrHint = document.getElementById('qr-hint')

const typeTabs = document.querySelectorAll('.type-tab')
const typeFieldGroups = document.querySelectorAll('.type-fields')

const urlInput = document.getElementById('url-input')
const textInput = document.getElementById('text-input')
const wifiSsid = document.getElementById('wifi-ssid')
const wifiPassword = document.getElementById('wifi-password')
const wifiEncryption = document.getElementById('wifi-encryption')
const contactName = document.getElementById('contact-name')
const contactPhone = document.getElementById('contact-phone')
const contactEmail = document.getElementById('contact-email')

const fgColor = document.getElementById('fg-color')
const bgColor = document.getElementById('bg-color')
const ecLevel = document.getElementById('ec-level')
const logoInput = document.getElementById('logo-input')
const logoClearBtn = document.getElementById('logo-clear')

const downloadPngBtn = document.getElementById('download-png')
const downloadSvgBtn = document.getElementById('download-svg')

let currentType = 'url'
let logoImage = null
let logoDataUrl = null
let lastQr = null

// ---------- Content type switching ----------
typeTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    currentType = tab.dataset.type
    typeTabs.forEach((t) => t.classList.toggle('is-active', t === tab))
    typeFieldGroups.forEach((group) => {
      group.classList.toggle('is-hidden', group.dataset.fields !== currentType)
    })
    generate()
  })
})

// ---------- Content builders ----------
function escapeWifi(value) {
  return value.replace(/([\\;,":])/g, '\\$1')
}

function buildContent() {
  if (currentType === 'url') {
    const value = urlInput.value.trim()
    if (!value) return ''
    return /^[a-z][a-z0-9+.-]*:\/\//i.test(value) ? value : `https://${value}`
  }

  if (currentType === 'text') {
    return textInput.value.trim()
  }

  if (currentType === 'wifi') {
    const ssid = wifiSsid.value.trim()
    if (!ssid) return ''
    const pass = wifiPassword.value
    const enc = wifiEncryption.value
    const passPart = enc === 'nopass' ? '' : `P:${escapeWifi(pass)};`
    return `WIFI:T:${enc};S:${escapeWifi(ssid)};${passPart};`
  }

  if (currentType === 'contact') {
    const name = contactName.value.trim()
    const phone = contactPhone.value.trim()
    const email = contactEmail.value.trim()
    if (!name && !phone && !email) return ''
    return [
      'BEGIN:VCARD',
      'VERSION:3.0',
      name ? `FN:${name}` : '',
      phone ? `TEL:${phone}` : '',
      email ? `EMAIL:${email}` : '',
      'END:VCARD'
    ]
      .filter(Boolean)
      .join('\n')
  }

  return ''
}

// ---------- Rendering ----------
// Modules render as plain squares only. An earlier "rounded dots" style was
// cut after directly verifying (by decoding renders with jsQR) that it broke
// real scannability: dots covering the timing pattern and format-info strip
// — the QR spec's other fixed "function patterns" beyond the three finder
// squares — were enough to make a real decoder fail to lock on, even though
// the underlying data was encoded correctly. Correctly identifying every
// function-pattern module by hand (finder + separators + timing + format
// info + version info on larger codes) is exactly the kind of fragile,
// easy-to-get-subtly-wrong work the vendored encoder was brought in to avoid
// in the first place — better to ship fewer, fully-correct features.
function drawToCanvas(qr, opts) {
  const moduleCount = qr.getModuleCount()
  const totalModules = moduleCount + QUIET_ZONE * 2
  const cellSize = Math.max(2, Math.floor(RENDER_TARGET / totalModules))
  const size = cellSize * totalModules

  canvas.width = size
  canvas.height = size

  ctx.fillStyle = opts.bg
  ctx.fillRect(0, 0, size, size)
  ctx.fillStyle = opts.fg

  for (let row = 0; row < moduleCount; row++) {
    for (let col = 0; col < moduleCount; col++) {
      if (!qr.isDark(row, col)) continue
      const x = (col + QUIET_ZONE) * cellSize
      const y = (row + QUIET_ZONE) * cellSize
      ctx.fillRect(x, y, cellSize, cellSize)
    }
  }

  if (opts.logoImage) {
    const padBox = size * 0.24
    const px = (size - padBox) / 2
    ctx.fillStyle = opts.bg
    roundRect(ctx, px, px, padBox, padBox, padBox * 0.18)
    ctx.fill()

    const imgBox = size * 0.18
    const ix = (size - imgBox) / 2
    drawContainedImage(ctx, opts.logoImage, ix, ix, imgBox, imgBox)
  }

  return { moduleCount, cellSize, size }
}

function drawContainedImage(context, img, x, y, w, h) {
  const scale = Math.min(w / img.width, h / img.height)
  const dw = img.width * scale
  const dh = img.height * scale
  context.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh)
}

function roundRect(context, x, y, w, h, r) {
  context.beginPath()
  context.moveTo(x + r, y)
  context.arcTo(x + w, y, x + w, y + h, r)
  context.arcTo(x + w, y + h, x, y + h, r)
  context.arcTo(x, y + h, x, y, r)
  context.arcTo(x, y, x + w, y, r)
  context.closePath()
}

function buildSvg(qr, opts) {
  const moduleCount = qr.getModuleCount()
  const totalModules = moduleCount + QUIET_ZONE * 2
  const cell = 10
  const size = cell * totalModules

  let shapes = ''
  for (let row = 0; row < moduleCount; row++) {
    for (let col = 0; col < moduleCount; col++) {
      if (!qr.isDark(row, col)) continue
      const x = (col + QUIET_ZONE) * cell
      const y = (row + QUIET_ZONE) * cell

      shapes += `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" fill="${opts.fg}" />`
    }
  }

  let logoMarkup = ''
  if (opts.logoDataUrl) {
    const padBox = size * 0.24
    const px = (size - padBox) / 2
    const imgBox = size * 0.18
    const ix = (size - imgBox) / 2
    logoMarkup = `
      <rect x="${px}" y="${px}" width="${padBox}" height="${padBox}" rx="${padBox * 0.18}" fill="${opts.bg}" />
      <image href="${opts.logoDataUrl}" x="${ix}" y="${ix}" width="${imgBox}" height="${imgBox}" preserveAspectRatio="xMidYMid meet" />
    `
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
    <rect width="${size}" height="${size}" fill="${opts.bg}" />
    ${shapes}
    ${logoMarkup}
  </svg>`
}

// ---------- Generate ----------
let debounceTimer
function generate() {
  window.clearTimeout(debounceTimer)
  debounceTimer = window.setTimeout(runGenerate, 100)
}

function runGenerate() {
  const content = buildContent()

  if (!content) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#f3f4f8'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    qrHint.textContent = 'Fill in the fields to generate a code'
    lastQr = null
    return
  }

  const effectiveLevel = logoImage ? 'H' : ecLevel.value
  const qr = qrcode(0, effectiveLevel)
  qr.addData(content)
  qr.make()

  const opts = {
    fg: fgColor.value,
    bg: bgColor.value,
    logoImage
  }

  const { moduleCount } = drawToCanvas(qr, opts)
  qrHint.textContent = `${moduleCount} × ${moduleCount} modules · EC ${effectiveLevel}`
  lastQr = { qr, opts: { ...opts, logoDataUrl } }
}

;[
  urlInput,
  textInput,
  wifiSsid,
  wifiPassword,
  wifiEncryption,
  contactName,
  contactPhone,
  contactEmail,
  fgColor,
  bgColor,
  ecLevel
].forEach((el) => {
  el.addEventListener('input', generate)
  el.addEventListener('change', generate)
})

// ---------- Logo upload ----------
logoInput.addEventListener('change', () => {
  const file = logoInput.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    logoDataUrl = reader.result
    const img = new Image()
    img.onload = () => {
      logoImage = img
      logoClearBtn.classList.remove('is-hidden')
      ecLevel.value = 'H'
      ecLevel.disabled = true
      generate()
    }
    img.src = logoDataUrl
  }
  reader.readAsDataURL(file)
})

logoClearBtn.addEventListener('click', () => {
  logoImage = null
  logoDataUrl = null
  logoInput.value = ''
  logoClearBtn.classList.add('is-hidden')
  ecLevel.disabled = false
  generate()
})

// ---------- Export ----------
downloadPngBtn.addEventListener('click', () => {
  if (!lastQr) return
  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'scanline-qr.png'
    link.click()
    URL.revokeObjectURL(url)
  }, 'image/png')
})

downloadSvgBtn.addEventListener('click', () => {
  if (!lastQr) return
  const svg = buildSvg(lastQr.qr, lastQr.opts)
  const blob = new Blob([svg], { type: 'image/svg+xml' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'scanline-qr.svg'
  link.click()
  URL.revokeObjectURL(url)
})

generate()
