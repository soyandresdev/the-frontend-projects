const screenEl = document.getElementById('screen')
const typedEl = document.getElementById('typed')
const passwordInput = document.getElementById('password')
const confirmInput = document.getElementById('confirm')
const toggleBtn = document.getElementById('toggle-btn')
const toggleConfirmBtn = document.getElementById('toggle-confirm-btn')
const generateBtn = document.getElementById('generate-btn')
const meterBlocks = document.getElementById('meter-blocks')
const meterLabel = document.getElementById('meter-label')
const requirementItems = document.querySelectorAll('[data-req]')
const matchHint = document.getElementById('match-hint')
const copyBtn = document.getElementById('copy-btn')
const copyLabel = document.getElementById('copy-label')
const setBtn = document.getElementById('set-btn')
const resetBtn = document.getElementById('reset-btn')

const TOTAL_BLOCKS = 5
const LEVELS = [
  { min: 0, className: 'lvl-weak', text: 'very weak' },
  { min: 2, className: 'lvl-weak', text: 'weak' },
  { min: 3, className: 'lvl-fair', text: 'fair' },
  { min: 4, className: 'lvl-good', text: 'good' },
  { min: 5, className: 'lvl-strong', text: 'strong' }
]
const LEVEL_CLASSES = LEVELS.map((l) => l.className)
const MIN_STRENGTH_TO_SET = 4

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
let currentStrength = 0

// ---------- Efecto de escritura reutilizable ----------
function typeText(el, text, speed = 45, onDone) {
  if (prefersReducedMotion) {
    el.textContent = text
    onDone?.()
    return
  }
  let i = 0
  const interval = setInterval(() => {
    i++
    el.textContent = text.slice(0, i)
    if (i >= text.length) {
      clearInterval(interval)
      onDone?.()
    }
  }, speed)
}

// ---------- Bloques del medidor ----------
for (let i = 0; i < TOTAL_BLOCKS; i++) {
  const span = document.createElement('span')
  span.className = 'block'
  span.textContent = '█'
  meterBlocks.appendChild(span)
}
const blockEls = meterBlocks.querySelectorAll('.block')

// ---------- Mostrar/ocultar contraseña (cada campo tiene su propio toggle) ----------
function bindVisibilityToggle(input, btn) {
  btn.addEventListener('click', () => {
    const isPassword = input.type === 'password'
    input.type = isPassword ? 'text' : 'password'
    btn.textContent = isPassword ? '[ hide ]' : '[ show ]'
    btn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password')
  })
}
bindVisibilityToggle(passwordInput, toggleBtn)
bindVisibilityToggle(confirmInput, toggleConfirmBtn)

// ---------- Generador de contraseña segura ----------
function secureRandomInt(max) {
  const buffer = new Uint32Array(1)
  crypto.getRandomValues(buffer)
  return buffer[0] % max
}

function generateStrongPassword(length = 16) {
  const sets = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    special: '!@#$%^&*_-'
  }
  const all = Object.values(sets).join('')
  const pick = (charset) => charset[secureRandomInt(charset.length)]

  const chars = [pick(sets.lower), pick(sets.upper), pick(sets.number), pick(sets.special)]
  while (chars.length < length) chars.push(pick(all))

  for (let i = chars.length - 1; i > 0; i--) {
    const j = secureRandomInt(i + 1)
    ;[chars[i], chars[j]] = [chars[j], chars[i]]
  }
  return chars.join('')
}

generateBtn.addEventListener('click', () => {
  const generated = generateStrongPassword()

  passwordInput.value = generated
  confirmInput.value = generated
  passwordInput.type = 'text'
  confirmInput.type = 'text'
  toggleBtn.textContent = '[ hide ]'
  toggleConfirmBtn.textContent = '[ hide ]'

  passwordInput.dispatchEvent(new Event('input'))
  confirmInput.dispatchEvent(new Event('input'))
  passwordInput.focus()
})

// ---------- Requisitos + medidor ----------
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

  currentStrength = strength
  updateMeter(strength, password.length)
  updateMatchHint()
  updateSetReadiness()
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
    return
  }

  const level = getLevel(strength)

  blockEls.forEach((block, i) => {
    if (i < strength) block.classList.add('is-filled', level.className)
  })

  meterLabel.textContent = level.text
  meterLabel.classList.remove(...LEVEL_CLASSES)
  meterLabel.classList.add(level.className)
}

// ---------- Confirmación de contraseña ----------
function updateMatchHint() {
  const conf = confirmInput.value

  if (!conf) {
    matchHint.textContent = ''
    matchHint.className = 'match-hint'
    return
  }

  const isMatch = passwordInput.value === conf
  matchHint.textContent = isMatch ? '[ ✓ match ]' : '[ ✗ mismatch ]'
  matchHint.className = 'match-hint ' + (isMatch ? 'is-match' : 'is-mismatch')
}
confirmInput.addEventListener('input', () => {
  updateMatchHint()
  updateSetReadiness()
})

function updateSetReadiness() {
  const strongEnough = currentStrength >= MIN_STRENGTH_TO_SET
  const matches = confirmInput.value.length > 0 && confirmInput.value === passwordInput.value
  setBtn.classList.toggle('is-ready', strongEnough && matches)
}

// ---------- Utilidades ----------
function triggerShake(el) {
  el.classList.remove('is-shaking')
  void el.offsetWidth
  el.classList.add('is-shaking')
}

copyBtn.addEventListener('click', async () => {
  if (!passwordInput.value) {
    triggerShake(passwordInput)
    passwordInput.focus()
    return
  }

  const original = copyLabel.textContent
  try {
    await navigator.clipboard.writeText(passwordInput.value)
    copyLabel.textContent = '[ copied ]'
  } catch {
    copyLabel.textContent = '[ copy failed ]'
  }

  window.setTimeout(() => {
    copyLabel.textContent = original
  }, 1600)
})

// ---------- Set password (flujo completo) ----------
const controls = [
  passwordInput,
  confirmInput,
  toggleBtn,
  toggleConfirmBtn,
  generateBtn,
  copyBtn,
  setBtn
]

setBtn.addEventListener('click', () => {
  const strongEnough = currentStrength >= MIN_STRENGTH_TO_SET
  const matches = confirmInput.value.length > 0 && confirmInput.value === passwordInput.value

  if (!strongEnough || !matches) {
    if (!strongEnough) triggerShake(passwordInput)
    if (!matches) triggerShake(confirmInput)
    triggerShake(setBtn)
    return
  }

  completeFlow()
})

function completeFlow() {
  controls.forEach((el) => (el.disabled = true))

  const successLine = document.createElement('p')
  successLine.className = 'line line--success'
  successLine.innerHTML = '<span class="prompt">$</span> <span id="success-text"></span>'
  screenEl.insertBefore(successLine, setBtn)

  typeText(document.getElementById('success-text'), 'password set ✓', 35)

  setBtn.hidden = true
  resetBtn.hidden = false
}

resetBtn.addEventListener('click', () => {
  passwordInput.value = ''
  confirmInput.value = ''
  passwordInput.type = 'password'
  confirmInput.type = 'password'
  toggleBtn.textContent = '[ show ]'
  toggleConfirmBtn.textContent = '[ show ]'

  passwordInput.dispatchEvent(new Event('input'))
  updateMatchHint()

  document.querySelectorAll('.line--success').forEach((el) => el.remove())
  controls.forEach((el) => (el.disabled = false))
  setBtn.hidden = false
  resetBtn.hidden = true
  passwordInput.focus()
})

typeText(typedEl, 'strongbox --new-password')
