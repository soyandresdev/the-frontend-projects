const waveform = document.getElementById('waveform')
const BAR_COUNT = 26

for (let i = 0; i < BAR_COUNT; i++) {
  const bar = document.createElement('span')
  bar.className = 'bar'
  const height = 8 + Math.round(Math.random() * 28)
  bar.style.height = `${height}px`
  bar.style.animationDelay = `${(i * 70) % 1300}ms`
  bar.style.animationDuration = `${1200 + (i % 5) * 150}ms`
  waveform.appendChild(bar)
}

const form = document.getElementById('transmit-form')
const transmitBtn = document.getElementById('transmit-btn')
const transmitLabel = document.getElementById('transmit-label')
const success = document.getElementById('success')
const resetBtn = document.getElementById('reset-btn')

const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const message = document.getElementById('message')

const REQUIRED_FIELDS = [firstName, lastName, email, subject, message]
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function fieldWrapper(input) {
  return input.closest('.field')
}

function markInvalid(input) {
  const wrapper = fieldWrapper(input)
  wrapper.classList.remove('is-invalid')
  void wrapper.offsetWidth
  wrapper.classList.add('is-invalid')
}

function clearInvalid(input) {
  fieldWrapper(input).classList.remove('is-invalid')
}

REQUIRED_FIELDS.forEach((input) => {
  input.addEventListener('input', () => clearInvalid(input))
  input.addEventListener('change', () => clearInvalid(input))
})

function validate() {
  let firstInvalid = null

  REQUIRED_FIELDS.forEach((input) => {
    const isEmpty = !input.value || input.value.trim() === ''
    const isBadEmail = input === email && !isEmpty && !EMAIL_RE.test(input.value.trim())

    if (isEmpty || isBadEmail) {
      markInvalid(input)
      if (!firstInvalid) firstInvalid = input
    }
  })

  return firstInvalid
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const firstInvalid = validate()
  if (firstInvalid) {
    firstInvalid.focus()
    return
  }

  transmitBtn.disabled = true
  transmitLabel.textContent = 'Transmitting…'

  window.setTimeout(() => {
    form.hidden = true
    success.hidden = false
  }, 1600)
})

resetBtn.addEventListener('click', () => {
  form.reset()
  REQUIRED_FIELDS.forEach(clearInvalid)
  transmitBtn.disabled = false
  transmitLabel.textContent = 'Transmit'
  form.hidden = false
  success.hidden = true
  firstName.focus()
})
