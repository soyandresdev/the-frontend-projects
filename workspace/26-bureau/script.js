// A fixed, curated rate table — a live exchange-rate API means every
// visitor's conversion depends on a free-tier third-party service staying
// up (the reference project's own endpoint already flags itself as
// deprecated, pointing callers to a newer, key-gated version).
const CURRENCIES = [
  { code: 'USD', name: 'US Dollar', flag: '\u{1F1FA}\u{1F1F8}', rate: 1 },
  { code: 'EUR', name: 'Euro', flag: '\u{1F1EA}\u{1F1FA}', rate: 0.92 },
  { code: 'GBP', name: 'British Pound', flag: '\u{1F1EC}\u{1F1E7}', rate: 0.79 },
  { code: 'JPY', name: 'Japanese Yen', flag: '\u{1F1EF}\u{1F1F5}', rate: 149.5 },
  { code: 'CNY', name: 'Chinese Yuan', flag: '\u{1F1E8}\u{1F1F3}', rate: 7.18 },
  { code: 'INR', name: 'Indian Rupee', flag: '\u{1F1EE}\u{1F1F3}', rate: 83.4 },
  { code: 'AUD', name: 'Australian Dollar', flag: '\u{1F1E6}\u{1F1FA}', rate: 1.52 },
  { code: 'CAD', name: 'Canadian Dollar', flag: '\u{1F1E8}\u{1F1E6}', rate: 1.36 },
  { code: 'CHF', name: 'Swiss Franc', flag: '\u{1F1E8}\u{1F1ED}', rate: 0.88 },
  { code: 'MXN', name: 'Mexican Peso', flag: '\u{1F1F2}\u{1F1FD}', rate: 18.3 },
  { code: 'BRL', name: 'Brazilian Real', flag: '\u{1F1E7}\u{1F1F7}', rate: 5.4 },
  { code: 'ZAR', name: 'South African Rand', flag: '\u{1F1FF}\u{1F1E6}', rate: 18.1 },
  { code: 'KRW', name: 'South Korean Won', flag: '\u{1F1F0}\u{1F1F7}', rate: 1330 },
  { code: 'SGD', name: 'Singapore Dollar', flag: '\u{1F1F8}\u{1F1EC}', rate: 1.34 },
  { code: 'HKD', name: 'Hong Kong Dollar', flag: '\u{1F1ED}\u{1F1F0}', rate: 7.82 },
  { code: 'SEK', name: 'Swedish Krona', flag: '\u{1F1F8}\u{1F1EA}', rate: 10.4 },
  { code: 'NOK', name: 'Norwegian Krone', flag: '\u{1F1F3}\u{1F1F4}', rate: 10.6 },
  { code: 'DKK', name: 'Danish Krone', flag: '\u{1F1E9}\u{1F1F0}', rate: 6.86 },
  { code: 'PLN', name: 'Polish Zloty', flag: '\u{1F1F5}\u{1F1F1}', rate: 3.98 },
  { code: 'TRY', name: 'Turkish Lira', flag: '\u{1F1F9}\u{1F1F7}', rate: 32.1 },
  { code: 'THB', name: 'Thai Baht', flag: '\u{1F1F9}\u{1F1ED}', rate: 35.2 },
  { code: 'IDR', name: 'Indonesian Rupiah', flag: '\u{1F1EE}\u{1F1E9}', rate: 15600 },
  { code: 'PHP', name: 'Philippine Peso', flag: '\u{1F1F5}\u{1F1ED}', rate: 56.3 },
  { code: 'VND', name: 'Vietnamese Dong', flag: '\u{1F1FB}\u{1F1F3}', rate: 24500 },
  { code: 'AED', name: 'UAE Dirham', flag: '\u{1F1E6}\u{1F1EA}', rate: 3.67 },
  { code: 'SAR', name: 'Saudi Riyal', flag: '\u{1F1F8}\u{1F1E6}', rate: 3.75 },
  { code: 'NZD', name: 'New Zealand Dollar', flag: '\u{1F1F3}\u{1F1FF}', rate: 1.65 },
  { code: 'EGP', name: 'Egyptian Pound', flag: '\u{1F1EA}\u{1F1EC}', rate: 48.5 }
]

const RATE_BY_CODE = Object.fromEntries(CURRENCIES.map((c) => [c.code, c.rate]))

const amountInput = document.getElementById('amount-input')
const fromSelect = document.getElementById('from-select')
const toSelect = document.getElementById('to-select')
const resultValue = document.getElementById('result-value')
const rateLine = document.getElementById('rate-line')
const swapBtn = document.getElementById('swap-btn')

function populateSelect(select) {
  select.innerHTML = CURRENCIES.map(
    (c) => `<option value="${c.code}">${c.flag} ${c.code}</option>`
  ).join('')
}

populateSelect(fromSelect)
populateSelect(toSelect)
fromSelect.value = 'USD'
toSelect.value = 'EUR'

function convert() {
  const amount = parseFloat(amountInput.value) || 0
  const from = fromSelect.value
  const to = toSelect.value

  const usd = amount / RATE_BY_CODE[from]
  const converted = usd * RATE_BY_CODE[to]

  resultValue.textContent = converted.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  const unitRate = RATE_BY_CODE[to] / RATE_BY_CODE[from]
  rateLine.textContent = `1 ${from} = ${unitRate.toLocaleString('en-US', {
    maximumFractionDigits: 4
  })} ${to}`
}

amountInput.addEventListener('input', convert)
fromSelect.addEventListener('change', convert)
toSelect.addEventListener('change', convert)

swapBtn.addEventListener('click', () => {
  const from = fromSelect.value
  fromSelect.value = toSelect.value
  toSelect.value = from

  swapBtn.classList.remove('is-swapping')
  void swapBtn.offsetWidth
  swapBtn.classList.add('is-swapping')

  convert()
})

convert()
