const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Resorte amortiguado simple (semi-implícito). Con stiffness/damping bajos entra
// levemente en overshoot al soltar — el "bounce" que solo debe pasar tras arrastrar.
const SPRING = { stiffness: 220, damping: 18, mass: 1 }
const REST_DELTA = 0.4
const MAX_TILT = 14

const instances = []

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
    this.el.addEventListener('lostpointercapture', this.onLostPointerCapture)
  }

  onPointerDown = (e) => {
    this.cancelSpring()
    this.dragging = true
    this.pointerId = e.pointerId
    try {
      // Algunos navegadores pueden rechazar la captura en ciertos escenarios;
      // seguimos igual con los listeners en window como respaldo.
      this.el.setPointerCapture(e.pointerId)
    } catch {
      /* noop */
    }
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
    // El navegador puede cancelar el gesto (gesto del sistema, cambio de foco,
    // o cruzar el borde del iframe) en vez de disparar pointerup — sin esto el
    // tile se queda "enganchado" en modo arrastre para siempre.
    window.addEventListener('pointercancel', this.onPointerUp)
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
    this.endDrag()
  }

  // Si el navegador suelta la captura por su cuenta (p. ej. el puntero cruza
  // el borde del iframe hacia el documento padre) sin avisar con pointerup/
  // pointercancel, este evento sí es garantizado por la spec — es la red de
  // seguridad definitiva contra el tile quedando atascado en "is-dragging".
  onLostPointerCapture = () => {
    if (this.dragging) this.endDrag()
  }

  endDrag() {
    if (!this.dragging) return
    this.dragging = false
    this.el.classList.remove('is-dragging')
    window.removeEventListener('pointermove', this.onPointerMove)
    window.removeEventListener('pointerup', this.onPointerUp)
    window.removeEventListener('pointercancel', this.onPointerUp)

    if (prefersReducedMotion) {
      this.snapHome({ animate: true })
    } else {
      this.startSpring()
    }
  }

  applyTransform() {
    // Ligera inclinación proporcional al desplazamiento horizontal: hace que el
    // arrastre se sienta como un objeto físico volando, no solo una traslación.
    const tilt = Math.max(-MAX_TILT, Math.min(MAX_TILT, this.x * 0.06))
    this.el.style.transform = `translate(${this.x}px, ${this.y}px) rotate(${tilt}deg)`
  }

  /** Reposiciona en el sitio al instante, sin animar. Usado como red de seguridad
   * (pestaña oculta a mitad de vuelo) y para prefers-reduced-motion. */
  snapHome({ animate = false } = {}) {
    this.cancelSpring()
    if (animate) {
      this.el.style.transition = 'transform 220ms ease-out'
      window.setTimeout(() => {
        this.el.style.transition = ''
      }, 240)
    }
    this.x = 0
    this.y = 0
    this.vx = 0
    this.vy = 0
    this.applyTransform()
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

document.querySelectorAll('[data-digit]').forEach((el) => instances.push(new DraggableDigit(el)))

// Red de seguridad: si la pestaña se oculta, rAF se congela y un resorte en vuelo
// se quedaría atascado para siempre. Al ocultarse, resuelve al instante lo que no
// se esté arrastrando activamente (lo que sigue en mano se resuelve al soltar).
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) return
  instances.forEach((inst) => {
    if (!inst.dragging) inst.snapHome()
  })
})
