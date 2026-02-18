const progressFill = document.getElementById('progress-fill')
const badge = document.getElementById('badge')
const badgeText = document.getElementById('badge-text')
const badgeRingFill = document.getElementById('badge-ring-fill')

const RING_CIRCUMFERENCE = 2 * Math.PI * 15

// Cuando el navegador soporta scroll-driven animations, la barra la maneja el CSS
// (fuera del hilo principal). El JS solo se ocupa del badge, que sí necesita texto dinámico.
const supportsScrollTimeline = CSS.supports('animation-timeline: scroll()')
if (supportsScrollTimeline) {
  progressFill.classList.add('is-native')
}

let ticking = false

function getScrollProgress() {
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  if (docHeight <= 0) return 100
  return Math.min(100, Math.max(0, Math.round((window.scrollY / docHeight) * 100)))
}

function updateProgress() {
  const progress = getScrollProgress()

  if (!supportsScrollTimeline) {
    progressFill.style.transform = `scaleX(${progress / 100})`
  }

  badgeText.textContent = progress >= 100 ? '✓ Done' : `${progress}%`
  badgeRingFill.style.strokeDashoffset = String(
    RING_CIRCUMFERENCE - (RING_CIRCUMFERENCE * progress) / 100
  )
  badge.classList.toggle('is-complete', progress >= 100)

  ticking = false
}

function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(updateProgress)
}

window.addEventListener('scroll', onScroll, { passive: true })
updateProgress()
