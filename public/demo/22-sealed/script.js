const form = document.getElementById('signup-form')
const emailInput = document.getElementById('email-input')
const fieldError = document.getElementById('field-error')
const subscribeBtn = document.getElementById('subscribe-btn')
const seal = document.getElementById('seal')
const letterTitle = document.getElementById('letter-title')
const letterLede = document.getElementById('letter-lede')
const benefits = document.getElementById('benefits')
const success = document.getElementById('success')
const resetBtn = document.getElementById('reset-btn')

const ORIGINAL_TITLE = letterTitle.textContent
const ORIGINAL_LEDE = letterLede.textContent
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function showError(message) {
  fieldError.textContent = message
  fieldError.classList.add('is-visible')
  emailInput.classList.remove('is-invalid')
  void emailInput.offsetWidth
  emailInput.classList.add('is-invalid')
  emailInput.focus()
}

function clearError() {
  fieldError.textContent = ''
  fieldError.classList.remove('is-visible')
  emailInput.classList.remove('is-invalid')
}

emailInput.addEventListener('input', clearError)

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const value = emailInput.value.trim()
  if (!value) {
    showError('Please enter your email.')
    return
  }
  if (!EMAIL_RE.test(value)) {
    showError('That email address looks incomplete.')
    return
  }

  clearError()
  emailInput.disabled = true
  subscribeBtn.disabled = true
  subscribeBtn.textContent = 'Sealing…'

  seal.classList.remove('is-stamped')
  void seal.offsetWidth
  seal.classList.add('is-stamped')

  window.setTimeout(completeSignup, 460)
})

function completeSignup() {
  letterTitle.textContent = "You're sealed in."
  letterLede.textContent = "We'll write the moment there's something worth reading."
  form.hidden = true
  benefits.hidden = true
  success.hidden = false
}

resetBtn.addEventListener('click', () => {
  letterTitle.textContent = ORIGINAL_TITLE
  letterLede.textContent = ORIGINAL_LEDE
  form.hidden = false
  benefits.hidden = false
  success.hidden = true

  emailInput.value = ''
  emailInput.disabled = false
  subscribeBtn.disabled = false
  subscribeBtn.textContent = 'Subscribe'
  clearError()
  seal.classList.remove('is-stamped')

  emailInput.focus()
})
