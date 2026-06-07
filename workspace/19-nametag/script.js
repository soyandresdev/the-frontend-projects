// Curated, illustrative dataset — a live "gender predictor" API would mean every
// visitor's lookup depends on a free-tier third-party service that can rate-limit,
// get deprecated, or go offline without warning (see Stopover's country dataset).
const NAMES = [
  { name: 'Emma', lean: 97, count: 41800 },
  { name: 'Olivia', lean: 98, count: 39200 },
  { name: 'Sophia', lean: 96, count: 33500 },
  { name: 'Isabella', lean: 97, count: 28900 },
  { name: 'Ava', lean: 96, count: 30100 },
  { name: 'Mia', lean: 95, count: 22400 },
  { name: 'Charlotte', lean: 96, count: 27800 },
  { name: 'Amelia', lean: 96, count: 24600 },
  { name: 'Harper', lean: 90, count: 19700 },
  { name: 'Evelyn', lean: 94, count: 18300 },
  { name: 'Luna', lean: 93, count: 16200 },
  { name: 'Aria', lean: 88, count: 14100 },
  { name: 'Ella', lean: 95, count: 17600 },
  { name: 'Scarlett', lean: 96, count: 13900 },
  { name: 'Grace', lean: 95, count: 20200 },
  { name: 'Chloe', lean: 94, count: 19100 },
  { name: 'Victoria', lean: 95, count: 21500 },
  { name: 'Zoe', lean: 93, count: 12800 },
  { name: 'Lily', lean: 95, count: 16900 },
  { name: 'Hannah', lean: 94, count: 17300 },
  { name: 'Natalie', lean: 95, count: 15400 },
  { name: 'Priya', lean: 92, count: 8100 },
  { name: 'Fatima', lean: 96, count: 11200 },
  { name: 'Aaliyah', lean: 95, count: 9700 },
  { name: 'Ananya', lean: 91, count: 6300 },
  { name: 'Mei', lean: 88, count: 5900 },
  { name: 'Yuki', lean: 62, count: 4800 },
  { name: 'Valentina', lean: 96, count: 12600 },
  { name: 'Camila', lean: 96, count: 16700 },
  { name: 'Sofia', lean: 96, count: 22300 },
  { name: 'Ines', lean: 93, count: 7200 },
  { name: 'Amara', lean: 78, count: 6100 },

  { name: 'Liam', lean: 3, count: 42600 },
  { name: 'Noah', lean: 4, count: 38900 },
  { name: 'Oliver', lean: 3, count: 31200 },
  { name: 'Elijah', lean: 3, count: 26800 },
  { name: 'James', lean: 4, count: 33400 },
  { name: 'William', lean: 4, count: 29600 },
  { name: 'Benjamin', lean: 4, count: 24100 },
  { name: 'Lucas', lean: 5, count: 27300 },
  { name: 'Henry', lean: 5, count: 21900 },
  { name: 'Alexander', lean: 5, count: 25700 },
  { name: 'Mateo', lean: 6, count: 14200 },
  { name: 'Daniel', lean: 5, count: 22600 },
  { name: 'Michael', lean: 4, count: 28100 },
  { name: 'Ethan', lean: 4, count: 23800 },
  { name: 'Sebastian', lean: 5, count: 19400 },
  { name: 'Jack', lean: 5, count: 20700 },
  { name: 'Owen', lean: 4, count: 16800 },
  { name: 'Wei', lean: 12, count: 5400 },
  { name: 'Chen', lean: 22, count: 6800 },
  { name: 'Hiro', lean: 8, count: 3900 },
  { name: 'Kenji', lean: 5, count: 3200 },
  { name: 'Ahmed', lean: 3, count: 13700 },
  { name: 'Omar', lean: 4, count: 11300 },
  { name: 'Diego', lean: 5, count: 12900 },
  { name: 'Santiago', lean: 5, count: 11600 },
  { name: 'Kwame', lean: 4, count: 2600 },
  { name: 'Jabari', lean: 5, count: 1900 },
  { name: 'Raj', lean: 8, count: 4300 },
  { name: 'Arjun', lean: 6, count: 5200 },

  { name: 'Jordan', lean: 52, count: 15600 },
  { name: 'Taylor', lean: 48, count: 13900 },
  { name: 'Alex', lean: 45, count: 21400 },
  { name: 'Casey', lean: 50, count: 8700 },
  { name: 'Riley', lean: 60, count: 12100 },
  { name: 'Morgan', lean: 55, count: 9600 },
  { name: 'Avery', lean: 65, count: 14300 },
  { name: 'Quinn', lean: 50, count: 7200 },
  { name: 'Skyler', lean: 55, count: 4100 },
  { name: 'Charlie', lean: 35, count: 11800 },
  { name: 'Jamie', lean: 58, count: 6900 },
  { name: 'Dakota', lean: 50, count: 3800 },
  { name: 'Reese', lean: 60, count: 5300 },
  { name: 'Rowan', lean: 42, count: 6600 },
  { name: 'Emerson', lean: 55, count: 5900 },
  { name: 'Parker', lean: 40, count: 8300 },
  { name: 'Finley', lean: 52, count: 3400 },
  { name: 'Sage', lean: 55, count: 2600 },
  { name: 'River', lean: 48, count: 3100 },
  { name: 'Phoenix', lean: 45, count: 2900 },
  { name: 'Peyton', lean: 60, count: 4700 },
  { name: 'Blake', lean: 30, count: 6200 },
  { name: 'Cameron', lean: 35, count: 9100 },
  { name: 'Drew', lean: 40, count: 3700 },
  { name: 'Hayden', lean: 45, count: 4400 },
  { name: 'Kai', lean: 38, count: 5800 },

  { name: 'Ivan', lean: 6, count: 4900 },
  { name: 'Elena', lean: 95, count: 8600 },
  { name: 'Olga', lean: 94, count: 3100 },
  { name: 'Dmitri', lean: 4, count: 2400 },
  { name: 'Anastasia', lean: 96, count: 5700 },
  { name: 'Lars', lean: 5, count: 1800 },
  { name: 'Freya', lean: 93, count: 4200 },
  { name: 'Erik', lean: 6, count: 3900 },
  { name: 'Astrid', lean: 92, count: 2200 },
  { name: 'Giulia', lean: 95, count: 4600 },
  { name: 'Marco', lean: 5, count: 7100 },
  { name: 'Luca', lean: 15, count: 6300 },
  { name: 'Francesca', lean: 96, count: 3800 },
  { name: 'Hassan', lean: 3, count: 4100 },
  { name: 'Layla', lean: 95, count: 9200 },
  { name: 'Zainab', lean: 96, count: 3300 },
  { name: 'Yusuf', lean: 4, count: 5600 },
  { name: 'Thabo', lean: 5, count: 1400 },
  { name: 'Zanele', lean: 93, count: 1100 },
  { name: 'Aditi', lean: 91, count: 3600 },
  { name: 'Ravi', lean: 6, count: 4800 }
]

const input = document.getElementById('name-input')
const suggestionsList = document.getElementById('suggestions')
const printBtn = document.getElementById('print-btn')
const badge = document.getElementById('badge')
const readout = document.getElementById('readout')
const readoutEmpty = document.getElementById('readout-empty')
const leanFill = document.getElementById('lean-fill')
const leanMarker = document.getElementById('lean-marker')
const leanLabel = document.getElementById('lean-label')
const leanCount = document.getElementById('lean-count')

let activeSuggestionIndex = -1
let currentMatches = []

function matchQuery(query) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return NAMES.filter((n) => n.name.toLowerCase().includes(q)).slice(0, 6)
}

function findEntry(query) {
  const q = query.trim().toLowerCase()
  if (!q) return null
  return NAMES.find((n) => n.name.toLowerCase() === q) || matchQuery(query)[0] || null
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
    .map((n, i) => `<li class="suggestion" role="option" data-index="${i}">${n.name}</li>`)
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

function mixColor(a, b, t) {
  const lerp = (x, y) => Math.round(x + (y - x) * t)
  return `rgb(${lerp(a[0], b[0])}, ${lerp(a[1], b[1])}, ${lerp(a[2], b[2])})`
}

const PINK = [224, 92, 138]
const BLUE = [79, 126, 214]

function showEntry(entry) {
  readoutEmpty.hidden = true
  readout.hidden = false

  const t = entry.lean / 100
  const color = mixColor(BLUE, PINK, t)

  leanFill.style.width = `${entry.lean}%`
  leanFill.style.backgroundColor = color
  leanMarker.style.left = `${entry.lean}%`
  leanMarker.style.backgroundColor = color

  const isEven = entry.lean > 35 && entry.lean < 65
  const direction = entry.lean >= 65 ? 'girl-name registries' : 'boy-name registries'

  leanLabel.textContent = isEven
    ? `"${entry.name}" splits about evenly between name registries`
    : `"${entry.name}" leans toward ${direction} (${entry.lean >= 65 ? entry.lean : 100 - entry.lean}%)`

  leanCount.textContent = `based on ~${entry.count.toLocaleString()} curated registry mentions`

  // Retrigger the staggered rise-in on the readout text.
  leanLabel.style.animation = 'none'
  leanCount.style.animation = 'none'
  void readout.offsetWidth
  leanLabel.style.animation = ''
  leanCount.style.animation = ''
}

function showEmpty() {
  readout.hidden = true
  readoutEmpty.hidden = false
}

function stickBadge() {
  badge.classList.remove('is-stuck')
  void badge.offsetWidth
  badge.classList.add('is-stuck')
}

function printBadge() {
  closeSuggestions()
  const name = input.value.trim()
  if (!name) {
    input.focus()
    return
  }

  const entry = findEntry(name)
  if (entry) {
    showEntry(entry)
  } else {
    showEmpty()
  }
  stickBadge()
}

input.addEventListener('input', () => {
  renderSuggestions(matchQuery(input.value))
})

input.addEventListener('keydown', (e) => {
  if (!suggestionsList.hidden) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      highlightSuggestion(Math.min(activeSuggestionIndex + 1, currentMatches.length - 1))
      return
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      highlightSuggestion(Math.max(activeSuggestionIndex - 1, 0))
      return
    }
    if (e.key === 'Escape') {
      closeSuggestions()
      return
    }
    if (e.key === 'Enter' && activeSuggestionIndex >= 0) {
      e.preventDefault()
      input.value = currentMatches[activeSuggestionIndex].name
      printBadge()
      return
    }
  }

  if (e.key === 'Enter') printBadge()
})

suggestionsList.addEventListener('mousedown', (e) => {
  const item = e.target.closest('.suggestion')
  if (!item) return
  input.value = currentMatches[Number(item.dataset.index)].name
  printBadge()
})

document.addEventListener('click', (e) => {
  if (!e.target.closest('.name-field')) closeSuggestions()
})

printBtn.addEventListener('click', printBadge)

// Print a sample badge on load so the layout never starts empty.
input.value = 'Riley'
printBadge()
