// Curated offline dataset — a live third-party lookup API would make every
// visitor's search depend on a service outside our control staying up.
const COUNTRIES = [
  { code: 'NG', name: 'Nigeria', capital: 'Abuja', region: 'Africa', population: 223800000, currency: 'Nigerian naira', languages: ['English'], flag: '🇳🇬', aliases: [] },
  { code: 'EG', name: 'Egypt', capital: 'Cairo', region: 'Africa', population: 112700000, currency: 'Egyptian pound', languages: ['Arabic'], flag: '🇪🇬', aliases: [] },
  { code: 'KE', name: 'Kenya', capital: 'Nairobi', region: 'Africa', population: 55100000, currency: 'Kenyan shilling', languages: ['English', 'Swahili'], flag: '🇰🇪', aliases: [] },
  { code: 'ZA', name: 'South Africa', capital: 'Pretoria', region: 'Africa', population: 60400000, currency: 'South African rand', languages: ['English', 'Afrikaans', 'Zulu'], flag: '🇿🇦', aliases: [] },
  { code: 'MA', name: 'Morocco', capital: 'Rabat', region: 'Africa', population: 37800000, currency: 'Moroccan dirham', languages: ['Arabic', 'Berber'], flag: '🇲🇦', aliases: [] },
  { code: 'GH', name: 'Ghana', capital: 'Accra', region: 'Africa', population: 34100000, currency: 'Ghanaian cedi', languages: ['English'], flag: '🇬🇭', aliases: [] },
  { code: 'ET', name: 'Ethiopia', capital: 'Addis Ababa', region: 'Africa', population: 126500000, currency: 'Ethiopian birr', languages: ['Amharic'], flag: '🇪🇹', aliases: [] },

  { code: 'US', name: 'United States', capital: 'Washington, D.C.', region: 'Americas', population: 339996000, currency: 'United States dollar', languages: ['English'], flag: '🇺🇸', aliases: ['usa', 'us', 'united states of america', 'america'] },
  { code: 'CA', name: 'Canada', capital: 'Ottawa', region: 'Americas', population: 38930000, currency: 'Canadian dollar', languages: ['English', 'French'], flag: '🇨🇦', aliases: [] },
  { code: 'MX', name: 'Mexico', capital: 'Mexico City', region: 'Americas', population: 128500000, currency: 'Mexican peso', languages: ['Spanish'], flag: '🇲🇽', aliases: [] },
  { code: 'BR', name: 'Brazil', capital: 'Brasília', region: 'Americas', population: 216400000, currency: 'Brazilian real', languages: ['Portuguese'], flag: '🇧🇷', aliases: [] },
  { code: 'AR', name: 'Argentina', capital: 'Buenos Aires', region: 'Americas', population: 45800000, currency: 'Argentine peso', languages: ['Spanish'], flag: '🇦🇷', aliases: [] },
  { code: 'CO', name: 'Colombia', capital: 'Bogotá', region: 'Americas', population: 52200000, currency: 'Colombian peso', languages: ['Spanish'], flag: '🇨🇴', aliases: [] },
  { code: 'PE', name: 'Peru', capital: 'Lima', region: 'Americas', population: 34000000, currency: 'Peruvian sol', languages: ['Spanish', 'Quechua'], flag: '🇵🇪', aliases: [] },
  { code: 'CL', name: 'Chile', capital: 'Santiago', region: 'Americas', population: 19600000, currency: 'Chilean peso', languages: ['Spanish'], flag: '🇨🇱', aliases: [] },

  { code: 'JP', name: 'Japan', capital: 'Tokyo', region: 'Asia', population: 123300000, currency: 'Japanese yen', languages: ['Japanese'], flag: '🇯🇵', aliases: [] },
  { code: 'CN', name: 'China', capital: 'Beijing', region: 'Asia', population: 1410000000, currency: 'Chinese yuan', languages: ['Mandarin'], flag: '🇨🇳', aliases: [] },
  { code: 'IN', name: 'India', capital: 'New Delhi', region: 'Asia', population: 1428000000, currency: 'Indian rupee', languages: ['Hindi', 'English'], flag: '🇮🇳', aliases: [] },
  { code: 'ID', name: 'Indonesia', capital: 'Jakarta', region: 'Asia', population: 277500000, currency: 'Indonesian rupiah', languages: ['Indonesian'], flag: '🇮🇩', aliases: [] },
  { code: 'KR', name: 'South Korea', capital: 'Seoul', region: 'Asia', population: 51700000, currency: 'South Korean won', languages: ['Korean'], flag: '🇰🇷', aliases: ['korea'] },
  { code: 'TH', name: 'Thailand', capital: 'Bangkok', region: 'Asia', population: 71800000, currency: 'Thai baht', languages: ['Thai'], flag: '🇹🇭', aliases: [] },
  { code: 'VN', name: 'Vietnam', capital: 'Hanoi', region: 'Asia', population: 98900000, currency: 'Vietnamese dong', languages: ['Vietnamese'], flag: '🇻🇳', aliases: [] },
  { code: 'PH', name: 'Philippines', capital: 'Manila', region: 'Asia', population: 117300000, currency: 'Philippine peso', languages: ['Filipino', 'English'], flag: '🇵🇭', aliases: [] },
  { code: 'PK', name: 'Pakistan', capital: 'Islamabad', region: 'Asia', population: 240500000, currency: 'Pakistani rupee', languages: ['Urdu', 'English'], flag: '🇵🇰', aliases: [] },
  { code: 'SA', name: 'Saudi Arabia', capital: 'Riyadh', region: 'Asia', population: 36900000, currency: 'Saudi riyal', languages: ['Arabic'], flag: '🇸🇦', aliases: [] },
  { code: 'AE', name: 'United Arab Emirates', capital: 'Abu Dhabi', region: 'Asia', population: 9500000, currency: 'UAE dirham', languages: ['Arabic'], flag: '🇦🇪', aliases: ['uae', 'emirates'] },
  { code: 'TR', name: 'Turkey', capital: 'Ankara', region: 'Asia', population: 85800000, currency: 'Turkish lira', languages: ['Turkish'], flag: '🇹🇷', aliases: ['turkiye'] },
  { code: 'IL', name: 'Israel', capital: 'Jerusalem', region: 'Asia', population: 9800000, currency: 'Israeli new shekel', languages: ['Hebrew', 'Arabic'], flag: '🇮🇱', aliases: [] },

  { code: 'GB', name: 'United Kingdom', capital: 'London', region: 'Europe', population: 67700000, currency: 'Pound sterling', languages: ['English'], flag: '🇬🇧', aliases: ['uk', 'britain', 'england', 'great britain'] },
  { code: 'FR', name: 'France', capital: 'Paris', region: 'Europe', population: 68200000, currency: 'Euro', languages: ['French'], flag: '🇫🇷', aliases: [] },
  { code: 'DE', name: 'Germany', capital: 'Berlin', region: 'Europe', population: 84500000, currency: 'Euro', languages: ['German'], flag: '🇩🇪', aliases: [] },
  { code: 'IT', name: 'Italy', capital: 'Rome', region: 'Europe', population: 58900000, currency: 'Euro', languages: ['Italian'], flag: '🇮🇹', aliases: [] },
  { code: 'ES', name: 'Spain', capital: 'Madrid', region: 'Europe', population: 47600000, currency: 'Euro', languages: ['Spanish'], flag: '🇪🇸', aliases: [] },
  { code: 'PT', name: 'Portugal', capital: 'Lisbon', region: 'Europe', population: 10300000, currency: 'Euro', languages: ['Portuguese'], flag: '🇵🇹', aliases: [] },
  { code: 'NL', name: 'Netherlands', capital: 'Amsterdam', region: 'Europe', population: 17900000, currency: 'Euro', languages: ['Dutch'], flag: '🇳🇱', aliases: ['holland'] },
  { code: 'SE', name: 'Sweden', capital: 'Stockholm', region: 'Europe', population: 10500000, currency: 'Swedish krona', languages: ['Swedish'], flag: '🇸🇪', aliases: [] },
  { code: 'NO', name: 'Norway', capital: 'Oslo', region: 'Europe', population: 5500000, currency: 'Norwegian krone', languages: ['Norwegian'], flag: '🇳🇴', aliases: [] },
  { code: 'PL', name: 'Poland', capital: 'Warsaw', region: 'Europe', population: 37600000, currency: 'Polish złoty', languages: ['Polish'], flag: '🇵🇱', aliases: [] },
  { code: 'GR', name: 'Greece', capital: 'Athens', region: 'Europe', population: 10400000, currency: 'Euro', languages: ['Greek'], flag: '🇬🇷', aliases: [] },
  { code: 'CH', name: 'Switzerland', capital: 'Bern', region: 'Europe', population: 8800000, currency: 'Swiss franc', languages: ['German', 'French', 'Italian'], flag: '🇨🇭', aliases: [] },
  { code: 'IE', name: 'Ireland', capital: 'Dublin', region: 'Europe', population: 5100000, currency: 'Euro', languages: ['English', 'Irish'], flag: '🇮🇪', aliases: [] },
  { code: 'IS', name: 'Iceland', capital: 'Reykjavík', region: 'Europe', population: 390000, currency: 'Icelandic króna', languages: ['Icelandic'], flag: '🇮🇸', aliases: [] },
  { code: 'FI', name: 'Finland', capital: 'Helsinki', region: 'Europe', population: 5600000, currency: 'Euro', languages: ['Finnish', 'Swedish'], flag: '🇫🇮', aliases: [] },
  { code: 'DK', name: 'Denmark', capital: 'Copenhagen', region: 'Europe', population: 5900000, currency: 'Danish krone', languages: ['Danish'], flag: '🇩🇰', aliases: [] },
  { code: 'AT', name: 'Austria', capital: 'Vienna', region: 'Europe', population: 9100000, currency: 'Euro', languages: ['German'], flag: '🇦🇹', aliases: [] },
  { code: 'CZ', name: 'Czechia', capital: 'Prague', region: 'Europe', population: 10500000, currency: 'Czech koruna', languages: ['Czech'], flag: '🇨🇿', aliases: ['czech republic'] },

  { code: 'AU', name: 'Australia', capital: 'Canberra', region: 'Oceania', population: 26600000, currency: 'Australian dollar', languages: ['English'], flag: '🇦🇺', aliases: [] },
  { code: 'NZ', name: 'New Zealand', capital: 'Wellington', region: 'Oceania', population: 5200000, currency: 'New Zealand dollar', languages: ['English', 'Māori'], flag: '🇳🇿', aliases: [] },
  { code: 'FJ', name: 'Fiji', capital: 'Suva', region: 'Oceania', population: 930000, currency: 'Fijian dollar', languages: ['English', 'Fijian'], flag: '🇫🇯', aliases: [] },
]

const form = document.getElementById('search-form')
const input = document.getElementById('search-input')
const suggestionsList = document.getElementById('suggestions')
const visaResult = document.getElementById('visa-result')
const visaEmpty = document.getElementById('visa-empty')
const stamp = document.getElementById('stamp')
const stampFlag = document.getElementById('stamp-flag')
const visaCountry = document.getElementById('visa-country')
const visaCapital = document.getElementById('visa-capital')
const visaRegion = document.getElementById('visa-region')
const visaPopulation = document.getElementById('visa-population')
const visaCurrency = document.getElementById('visa-currency')
const visaLanguages = document.getElementById('visa-languages')

let activeSuggestionIndex = -1
let currentMatches = []

function matchQuery(query) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return COUNTRIES.filter((c) => {
    if (c.name.toLowerCase().includes(q)) return true
    return c.aliases.some((alias) => alias.includes(q))
  }).slice(0, 6)
}

function findCountry(query) {
  const q = query.trim().toLowerCase()
  return COUNTRIES.find((c) => {
    if (c.name.toLowerCase() === q) return true
    return c.aliases.includes(q)
  }) || matchQuery(query)[0] || null
}

function closeSuggestions() {
  suggestionsList.hidden = true
  suggestionsList.classList.remove('is-open')
  suggestionsList.innerHTML = ''
  activeSuggestionIndex = -1
  currentMatches = []
}

function renderSuggestions(matches) {
  currentMatches = matches
  activeSuggestionIndex = -1

  if (!matches.length) {
    closeSuggestions()
    return
  }

  suggestionsList.innerHTML = matches
    .map(
      (c, i) => `
        <li class="suggestion" role="option" data-index="${i}">
          <span class="suggestion-flag">${c.flag}</span>
          <span>${c.name}</span>
          <span class="suggestion-region">${c.region}</span>
        </li>
      `
    )
    .join('')

  suggestionsList.hidden = false
  requestAnimationFrame(() => suggestionsList.classList.add('is-open'))
}

function highlightSuggestion(index) {
  const items = suggestionsList.querySelectorAll('.suggestion')
  items.forEach((el) => el.classList.remove('is-active'))
  if (index >= 0 && items[index]) {
    items[index].classList.add('is-active')
    activeSuggestionIndex = index
  }
}

function showCountry(country) {
  visaEmpty.hidden = true
  visaResult.hidden = false

  stampFlag.textContent = country.flag
  visaCountry.textContent = country.name
  visaCapital.textContent = country.capital
  visaRegion.textContent = country.region
  visaPopulation.textContent = country.population.toLocaleString()
  visaCurrency.textContent = country.currency
  visaLanguages.textContent = country.languages.join(', ')

  // Retrigger the CSS keyframe animations so repeated searches restamp.
  stamp.style.animation = 'none'
  visaResult.querySelectorAll('.visa-item').forEach((el) => (el.style.animation = 'none'))
  void visaResult.offsetWidth
  stamp.style.animation = ''
  visaResult.querySelectorAll('.visa-item').forEach((el) => (el.style.animation = ''))
}

function showEmpty() {
  visaResult.hidden = true
  visaEmpty.hidden = false
  visaEmpty.style.animation = 'none'
  void visaEmpty.offsetWidth
  visaEmpty.style.animation = ''
}

function runSearch(query) {
  closeSuggestions()
  const country = findCountry(query)
  if (country) {
    showCountry(country)
  } else {
    showEmpty()
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  runSearch(input.value)
})

input.addEventListener('input', () => {
  renderSuggestions(matchQuery(input.value))
})

input.addEventListener('keydown', (e) => {
  if (suggestionsList.hidden) return

  if (e.key === 'ArrowDown') {
    e.preventDefault()
    highlightSuggestion(Math.min(activeSuggestionIndex + 1, currentMatches.length - 1))
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    highlightSuggestion(Math.max(activeSuggestionIndex - 1, 0))
  } else if (e.key === 'Escape') {
    closeSuggestions()
  } else if (e.key === 'Enter' && activeSuggestionIndex >= 0) {
    e.preventDefault()
    const chosen = currentMatches[activeSuggestionIndex]
    input.value = chosen.name
    runSearch(chosen.name)
  }
})

suggestionsList.addEventListener('mousedown', (e) => {
  const item = e.target.closest('.suggestion')
  if (!item) return
  const chosen = currentMatches[Number(item.dataset.index)]
  input.value = chosen.name
  runSearch(chosen.name)
})

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-field')) closeSuggestions()
})

// Clear customs for Japan on load, same idea as the reference project's default search.
input.value = 'Japan'
runSearch('Japan')
