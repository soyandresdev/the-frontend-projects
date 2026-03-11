const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Resorte amortiguado simple (semi-implícito). Con stiffness/damping bajos entra
// levemente en overshoot al soltar — el "bounce" que solo debe pasar tras arrastrar.
const SPRING = { stiffness: 220, damping: 18, mass: 1 }
const REST_DELTA = 0.4

class DraggableDigit {
  constructor(el) {
    this.el = el
    this.x = 0
    this.y = 0
    this.vx = 0
    this.vy = 0
    this.dragging = false
    this.rafId = null

    this.pointerId = null
    this.startPointerX = 0
    this.startPointerY = 0
    this.startX = 0
    this.startY = 0
    this.lastMoveTime = 0
    this.lastMoveX = 0
    this.lastMoveY = 0

    this.el.addEventListener('pointerdown', this.onPointerDown)
  }

  onPointerDown = (e) => {
    this.cancelSpring()
    this.dragging = true
    this.pointerId = e.pointerId
    this.el.setPointerCapture(e.pointerId)
    this.el.classList.add('is-dragging')

    this.startPointerX = e.clientX
    this.startPointerY = e.clientY
    this.startX = this.x
    this.startY = this.y

    this.lastMoveTime = performance.now()
    this.lastMoveX = e.clientX
    this.lastMoveY = e.clientY
    this.vx = 0
    this.vy = 0

    window.addEventListener('pointermove', this.onPointerMove)
    window.addEventListener('pointerup', this.onPointerUp)
  }

  onPointerMove = (e) => {
    if (!this.dragging || e.pointerId !== this.pointerId) return

    // TRACK: 1:1 con el puntero, sin easing ni spring — el tile ES el dedo/cursor.
    this.x = this.startX + (e.clientX - this.startPointerX)
    this.y = this.startY + (e.clientY - this.startPointerY)
    this.applyTransform()

    const now = performance.now()
    const dt = Math.max(now - this.lastMoveTime, 1)
    this.vx = ((e.clientX - this.lastMoveX) / dt) * 1000
    this.vy = ((e.clientY - this.lastMoveY) / dt) * 1000
    this.lastMoveTime = now
    this.lastMoveX = e.clientX
    this.lastMoveY = e.clientY
  }

  onPointerUp = (e) => {
    if (e.pointerId !== this.pointerId) return
    this.dragging = false
    this.el.classList.remove('is-dragging')
    window.removeEventListener('pointermove', this.onPointerMove)
    window.removeEventListener('pointerup', this.onPointerUp)

    if (prefersReducedMotion) {
      this.settleInstantly()
    } else {
      this.startSpring()
    }
  }

  applyTransform() {
    this.el.style.transform = `translate(${this.x}px, ${this.y}px)`
  }

  settleInstantly() {
    this.el.style.transition = 'transform 220ms ease-out'
    this.x = 0
    this.y = 0
    this.applyTransform()
    window.setTimeout(() => {
      this.el.style.transition = ''
    }, 240)
  }

  // RELEASE: resorte sembrado con la velocidad del gesto, no un keyframe fijo —
  // así puede interrumpirse (re-agarrar a mitad de vuelo) sin saltos.
  startSpring() {
    let lastTime = performance.now()

    const step = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.032)
      lastTime = now

      const fx = -SPRING.stiffness * this.x - SPRING.damping * this.vx
      const fy = -SPRING.stiffness * this.y - SPRING.damping * this.vy

      this.vx += (fx / SPRING.mass) * dt
      this.vy += (fy / SPRING.mass) * dt
      this.x += this.vx * dt
      this.y += this.vy * dt

      this.applyTransform()

      const atRest =
        Math.abs(this.x) < REST_DELTA &&
        Math.abs(this.y) < REST_DELTA &&
        Math.abs(this.vx) < REST_DELTA * 2 &&
        Math.abs(this.vy) < REST_DELTA * 2

      if (atRest) {
        this.x = 0
        this.y = 0
        this.vx = 0
        this.vy = 0
        this.applyTransform()
        this.rafId = null
        return
      }

      this.rafId = requestAnimationFrame(step)
    }

    this.rafId = requestAnimationFrame(step)
  }

  cancelSpring() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId)
      this.rafId = null
    }
  }
}

document.querySelectorAll('[data-digit]').forEach((el) => new DraggableDigit(el))
