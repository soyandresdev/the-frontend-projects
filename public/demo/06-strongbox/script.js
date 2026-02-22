const typedEl = document.getElementById('typed')
const passwordInput = document.getElementById('password')
const toggleBtn = document.getElementById('toggle-btn')
const meterBlocks = document.getElementById('meter-blocks')
const meterLabel = document.getElementById('meter-label')
const requirementItems = document.querySelectorAll('[data-req]')
const continueBtn = document.getElementById('continue-btn')
const continueLabel = document.getElementById('continue-label')

const TOTAL_BLOCKS = 5
const LEVELS = [
  { min: 0, className: 'lvl-weak', text: 'very weak' },
  { min: 2, className: 'lvl-weak', text: 'weak' },
  { min: 3, className: 'lvl-fair', text: 'fair' },
  { min: 4, className: 'lvl-good', text: 'good' },
  { min: 5, className: 'lvl-strong', text: 'strong' }
]
const LEVEL_CLASSES = LEVELS.map((l) => l.className)

let isReady = false

// ---------- Efecto de escritura para la línea de intro ----------
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const INTRO_TEXT = 'strongbox --check'

function typeIntro() {
  if (prefersReducedMotion) {
    typedEl.textContent = INTRO_TEXT
    return
  }
  let i = 0
  const interval = setInterval(() => {
    i++
    typedEl.textContent = INTRO_TEXT.slice(0, i)
    if (i >= INTRO_TEXT.length) clearInterval(interval)
  }, 45)
}

// ---------- Bloques del medidor ----------
for (let i = 0; i < TOTAL_BLOCKS; i++) {
  const span = document.createElement('span')
  span.className = 'block'
  span.textContent = '█'
  meterBlocks.appendChild(span)
}
const blockEls = meterBlocks.querySelectorAll('.block')

toggleBtn.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password'
  passwordInput.type = isPassword ? 'text' : 'password'
  toggleBtn.textContent = isPassword ? '[ hide ]' : '[ show ]'
  toggleBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password')
})

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value

  const checks = {
    length: password.length >= 8,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[-!@#$%^&*(),.?":{}|_<>]/.test(password)
  }

  let strength = 0
  requirementItems.forEach((item) => {
    const passed = checks[item.dataset.req]
    item.classList.toggle('is-valid', passed)
    item.querySelector('.box').textContent = passed ? '[x]' : '[ ]'
    if (passed) strength++
  })

  updateMeter(strength, password.length)
})

function getLevel(strength) {
  let level = LEVELS[0]
  for (const l of LEVELS) {
    if (strength >= l.min) level = l
  }
  return level
}

function updateMeter(strength, length) {
  blockEls.forEach((block) => block.classList.remove('is-filled', ...LEVEL_CLASSES))

  if (length === 0) {
    meterLabel.textContent = 'idle'
    meterLabel.classList.remove(...LEVEL_CLASSES)
    isReady = false
    continueBtn.classList.remove('is-ready')
    return
  }

  const level = getLevel(strength)

  blockEls.forEach((block, i) => {
    if (i < strength) block.classList.add('is-filled', level.className)
  })

  meterLabel.textContent = level.text
  meterLabel.classList.remove(...LEVEL_CLASSES)
  meterLabel.classList.add(level.className)

  isReady = strength >= 4
  continueBtn.classList.toggle('is-ready', isReady)
}

continueBtn.addEventListener('click', () => {
  if (!isReady) {
    passwordInput.classList.remove('is-shaking')
    continueBtn.classList.remove('is-shaking')
    void continueBtn.offsetWidth
    passwordInput.classList.add('is-shaking')
    continueBtn.classList.add('is-shaking')
    passwordInput.focus()
    return
  }

  const original = continueLabel.textContent
  continueLabel.textContent = '[ access granted ]'
  continueBtn.disabled = true

  window.setTimeout(() => {
    continueLabel.textContent = original
    continueBtn.disabled = false
  }, 1600)
})

typeIntro()
