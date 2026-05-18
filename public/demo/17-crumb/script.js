const STORAGE_KEY = 'crumb-consent'

const banner = document.getElementById('banner')
const prefs = document.getElementById('prefs')
const customizeBtn = document.getElementById('customize-btn')
const declineBtn = document.getElementById('decline-btn')
const acceptBtn = document.getElementById('accept-btn')
const saveBtn = document.getElementById('save-btn')
const resetBtn = document.getElementById('reset-btn')
const analyticsToggle = document.getElementById('toggle-analytics')
const marketingToggle = document.getElementById('toggle-marketing')

function getStoredConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function storeConsent(consent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent))
  } catch {
    // storage unavailable, ignore
  }
}

function hideBanner() {
  banner.classList.add('is-dismissed')
}

function showBanner() {
  banner.classList.remove('is-dismissed')
}

function closePrefs() {
  prefs.classList.remove('is-open')
  customizeBtn.setAttribute('aria-expanded', 'false')
}

function applyToggles(consent) {
  analyticsToggle.checked = Boolean(consent?.analytics)
  marketingToggle.checked = Boolean(consent?.marketing)
}

const existing = getStoredConsent()
if (existing) {
  applyToggles(existing)
  hideBanner()
}

customizeBtn.addEventListener('click', () => {
  const isOpen = prefs.classList.toggle('is-open')
  customizeBtn.setAttribute('aria-expanded', String(isOpen))
})

acceptBtn.addEventListener('click', () => {
  const consent = { necessary: true, analytics: true, marketing: true }
  storeConsent(consent)
  applyToggles(consent)
  closePrefs()
  hideBanner()
})

declineBtn.addEventListener('click', () => {
  const consent = { necessary: true, analytics: false, marketing: false }
  storeConsent(consent)
  applyToggles(consent)
  closePrefs()
  hideBanner()
})

saveBtn.addEventListener('click', () => {
  const consent = {
    necessary: true,
    analytics: analyticsToggle.checked,
    marketing: marketingToggle.checked,
  }
  storeConsent(consent)
  closePrefs()
  hideBanner()
})

resetBtn.addEventListener('click', () => {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // storage unavailable, ignore
  }
  applyToggles(null)
  closePrefs()
  showBanner()
})
