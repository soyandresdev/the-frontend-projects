const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const FLIP_DURATION = 380
const FLIP_EASING = 'cubic-bezier(0.55, 0, 0.85, 0.35)'

class FlapDigit {
  constructor(container) {
    this.value = '0'

    this.el = document.createElement('div')
    this.el.className = 'flap'

    this.topHalf = this._half('top')
    this.bottomHalf = this._half('bottom')

    this.leaf = document.createElement('div')
    this.leaf.className = 'flap__leaf'
    this.leafGlyph = document.createElement('span')
    this.leafGlyph.className = 'flap__glyph'
    this.leafGlyph.textContent = this.value
    this.leaf.appendChild(this.leafGlyph)

    const hinge = document.createElement('div')
    hinge.className = 'flap__hinge'

    this.el.append(this.topHalf.el, this.bottomHalf.el, this.leaf, hinge)
    container.appendChild(this.el)
  }

  _half(kind) {
    const el = document.createElement('div')
    el.className = `flap__half flap__half--${kind}`
    const glyph = document.createElement('span')
    glyph.className = 'flap__glyph'
    glyph.textContent = this.value
    el.appendChild(glyph)
    return { el, glyph }
  }

  setValue(next) {
    if (next === this.value) return
    const previous = this.value
    this.value = next

    if (prefersReducedMotion) {
      this.topHalf.glyph.textContent = next
      this.bottomHalf.glyph.textContent = next
      return
    }

    // Mientras la hoja cae, arriba y abajo deben seguir mostrando el dígito
    // VIEJO — si una mitad cambia antes que la otra se ve partido a la mitad.
    // Las tres piezas (hoja, arriba, abajo) saltan al nuevo valor juntas,
    // recién cuando la animación termina.
    this.leafGlyph.textContent = previous
    this.leaf.style.transition = 'none'
    this.leaf.style.transform = 'rotateX(0deg)'
    // Fuerza reflow para poder re-disparar la animación en cambios consecutivos.
    void this.leaf.offsetWidth

    const animation = this.leaf.animate(
      [{ transform: 'rotateX(0deg)' }, { transform: 'rotateX(-90deg)' }],
      { duration: FLIP_DURATION, easing: FLIP_EASING, fill: 'forwards' }
    )

    animation.onfinish = () => {
      this.topHalf.glyph.textContent = next
      this.bottomHalf.glyph.textContent = next
      this.leafGlyph.textContent = next
      this.leaf.style.transform = 'rotateX(0deg)'
    }
  }
}

class FlapGroup {
  constructor(id, digitCount) {
    const container = document.getElementById(id)
    this.digits = Array.from({ length: digitCount }, () => new FlapDigit(container))
  }

  setValue(numberString) {
    const padded = numberString.padStart(this.digits.length, '0').slice(-this.digits.length)
    padded.split('').forEach((char, i) => this.digits[i].setValue(char))
  }
}

const groups = {
  days: new FlapGroup('flaps-days', 2),
  hours: new FlapGroup('flaps-hours', 2),
  minutes: new FlapGroup('flaps-minutes', 2),
  seconds: new FlapGroup('flaps-seconds', 2)
}

const form = document.getElementById('picker-form')
const targetInput = document.getElementById('target')
const status = document.getElementById('status')
const board = document.getElementById('board')
const startBtn = document.getElementById('start-btn')

let intervalId = null

// La fecha mínima seleccionable es "ahora".
const now = new Date()
now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
targetInput.min = now.toISOString().slice(0, 16)

function tick(targetTime) {
  const distance = targetTime - Date.now()

  if (distance <= 0) {
    clearInterval(intervalId)
    intervalId = null
    groups.days.setValue('00')
    groups.hours.setValue('00')
    groups.minutes.setValue('00')
    groups.seconds.setValue('00')
    status.textContent = '🛬 Arrived — the countdown has ended.'
    status.classList.remove('is-error')
    return
  }

  const days = Math.min(99, Math.floor(distance / 86400000))
  const hours = Math.floor((distance % 86400000) / 3600000)
  const minutes = Math.floor((distance % 3600000) / 60000)
  const seconds = Math.floor((distance % 60000) / 1000)

  groups.days.setValue(String(days).padStart(2, '0'))
  groups.hours.setValue(String(hours).padStart(2, '0'))
  groups.minutes.setValue(String(minutes).padStart(2, '0'))
  groups.seconds.setValue(String(seconds).padStart(2, '0'))
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (!targetInput.value) {
    status.textContent = 'Pick a date and time first.'
    status.classList.add('is-error')
    return
  }

  const targetTime = new Date(targetInput.value).getTime()

  if (targetTime <= Date.now()) {
    status.textContent = 'That moment already passed — pick one in the future.'
    status.classList.add('is-error')
    return
  }

  if (intervalId) clearInterval(intervalId)

  status.textContent = ''
  status.classList.remove('is-error')
  board.hidden = false
  startBtn.textContent = 'Restart countdown'

  tick(targetTime)
  intervalId = setInterval(() => tick(targetTime), 1000)
})
