const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const COLORS = ['#ec4899', '#fb923c', '#fbbf24', '#60a5fa', '#a78bfa', '#34d399']
const GRAVITY = 0.32
const DRAG = 0.992

class ConfettiEngine {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.particles = []
    this.rafId = null
    this.dpr = Math.min(window.devicePixelRatio || 1, 2)

    this.resize()
    window.addEventListener('resize', () => this.resize())
  }

  resize() {
    this.canvas.width = window.innerWidth * this.dpr
    this.canvas.height = window.innerHeight * this.dpr
    this.canvas.style.width = `${window.innerWidth}px`
    this.canvas.style.height = `${window.innerHeight}px`
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0)
  }

  // originX/Y en fracción del viewport (0-1). angle en grados, 0 = derecha,
  // 90 = arriba. spread = abanico total en grados alrededor de angle.
  burst({ originX, originY, count, angle, spread, speed }) {
    const cx = originX * window.innerWidth
    const cy = originY * window.innerHeight

    for (let i = 0; i < count; i++) {
      const theta = ((angle + (Math.random() - 0.5) * spread) * Math.PI) / 180
      const v = speed * (0.6 + Math.random() * 0.6)

      this.particles.push({
        x: cx,
        y: cy,
        vx: Math.cos(theta) * v,
        vy: -Math.sin(theta) * v,
        size: 6 + Math.random() * 6,
        color: COLORS[(Math.random() * COLORS.length) | 0],
        shape: Math.random() < 0.35 ? 'circle' : Math.random() < 0.6 ? 'strip' : 'rect',
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.3,
        life: 1
      })
    }

    if (!this.rafId) this.loop()
  }

  loop = () => {
    const { ctx } = this
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

    this.particles = this.particles.filter((p) => {
      p.vy += GRAVITY
      p.vx *= DRAG
      p.vy *= DRAG
      p.x += p.vx
      p.y += p.vy
      p.rotation += p.rotationSpeed

      // Se desvanece en el último tramo de la caída, no de golpe.
      if (p.y > window.innerHeight * 0.7) {
        p.life -= 0.02
      }

      const alive = p.life > 0 && p.y < window.innerHeight + 40
      if (!alive) return false

      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate(p.rotation)
      ctx.globalAlpha = Math.max(p.life, 0)
      ctx.fillStyle = p.color

      if (p.shape === 'circle') {
        ctx.beginPath()
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2)
        ctx.fill()
      } else if (p.shape === 'strip') {
        ctx.fillRect(-p.size / 2, -p.size / 5, p.size, p.size / 2.5)
      } else {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size)
      }

      ctx.restore()
      return true
    })

    if (this.particles.length > 0) {
      this.rafId = requestAnimationFrame(this.loop)
    } else {
      this.rafId = null
    }
  }
}

const canvas = document.getElementById('confetti-canvas')
const engine = new ConfettiEngine(canvas)

function celebrate() {
  if (prefersReducedMotion) return

  engine.burst({ originX: 0.5, originY: 0.65, count: 90, angle: 90, spread: 100, speed: 15 })

  window.setTimeout(() => {
    engine.burst({ originX: 0.05, originY: 0.75, count: 45, angle: 55, spread: 45, speed: 17 })
    engine.burst({ originX: 0.95, originY: 0.75, count: 45, angle: 125, spread: 45, speed: 17 })
  }, 180)
}

const form = document.getElementById('signup-form')
const formCard = document.getElementById('form-card')
const successCard = document.getElementById('success-card')
const resetBtn = document.getElementById('reset-btn')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  formCard.hidden = true
  successCard.hidden = false
  celebrate()
})

resetBtn.addEventListener('click', () => {
  successCard.hidden = true
  formCard.hidden = false
  form.reset()
})
