const cardNumberInput = document.getElementById('card-number')
const expiryInput = document.getElementById('expiry')
const cvvInput = document.getElementById('cvv')
const nameInput = document.getElementById('name')
const form = document.getElementById('payment-form')

const card3d = document.getElementById('card-3d')
const networkLabel = document.getElementById('network-label')
const previewNumber = document.getElementById('preview-number')
const previewName = document.getElementById('preview-name')
const previewExpiry = document.getElementById('preview-expiry')
const previewCvv = document.getElementById('preview-cvv')

const formPanel = document.getElementById('form-panel')
const successPanel = document.getElementById('success-panel')
const resetBtn = document.getElementById('reset-btn')

function detectNetwork(digits) {
  if (/^4/.test(digits)) return 'VISA'
  if (/^(5[1-5]|2[2-7])/.test(digits)) return 'MASTERCARD'
  if (/^3[47]/.test(digits)) return 'AMEX'
  return 'CARD'
}

function groupDigits(digits, groupSize = 4) {
  return digits.match(new RegExp(`.{1,${groupSize}}`, 'g'))?.join(' ') ?? ''
}

// ---------- Card number ----------
cardNumberInput.addEventListener('input', (e) => {
  const digits = e.target.value.replace(/\D/g, '').slice(0, 16)
  e.target.value = groupDigits(digits)

  networkLabel.textContent = digits ? detectNetwork(digits) : 'CARD'

  const padded = digits.padEnd(16, '•')
  previewNumber.textContent = groupDigits(padded)

  if (digits.length === 16) expiryInput.focus()
})

// ---------- Expiry ----------
expiryInput.addEventListener('input', (e) => {
  let digits = e.target.value.replace(/\D/g, '').slice(0, 4)

  if (digits.length >= 2) {
    let month = parseInt(digits.slice(0, 2), 10)
    month = Math.min(Math.max(month, 1), 12)
    digits = String(month).padStart(2, '0') + digits.slice(2)
  }

  const formatted = digits.length > 2 ? `${digits.slice(0, 2)} / ${digits.slice(2)}` : digits
  e.target.value = formatted

  previewExpiry.textContent = formatted || 'MM/YY'
  if (digits.length === 4) cvvInput.focus()
})

// ---------- CVV ----------
cvvInput.addEventListener('input', (e) => {
  const digits = e.target.value.replace(/\D/g, '').slice(0, 3)
  e.target.value = digits
  previewCvv.textContent = digits.padEnd(3, '•')
})

cvvInput.addEventListener('focus', () => card3d.classList.add('is-flipped'))
cvvInput.addEventListener('blur', () => card3d.classList.remove('is-flipped'))

// ---------- Name ----------
nameInput.addEventListener('input', (e) => {
  previewName.textContent = e.target.value.trim() || 'YOUR NAME'
})

// ---------- Submit / reset ----------
form.addEventListener('submit', (e) => {
  e.preventDefault()
  formPanel.hidden = true
  successPanel.hidden = false
})

resetBtn.addEventListener('click', () => {
  form.reset()
  networkLabel.textContent = 'CARD'
  previewNumber.textContent = groupDigits('•'.repeat(16))
  previewExpiry.textContent = 'MM/YY'
  previewCvv.textContent = '•••'
  previewName.textContent = 'YOUR NAME'
  card3d.classList.remove('is-flipped')

  successPanel.hidden = true
  formPanel.hidden = false
})
