const API = 'https://pokeapi.co/api/v2/pokemon/'
const MAX_ENTRY = 1025
const STAT_SCALE = 180

const TYPE_COLORS = {
  normal: '#9a9da1',
  fire: '#e8622b',
  water: '#4d90d5',
  electric: '#e6c22c',
  grass: '#5cab52',
  ice: '#79ccd6',
  fighting: '#c0392b',
  poison: '#9257a3',
  ground: '#c8a34c',
  flying: '#8fa3dd',
  psychic: '#e0578a',
  bug: '#93a825',
  rock: '#b0a267',
  ghost: '#6b5a9c',
  dragon: '#5a5bcf',
  dark: '#5a4a45',
  steel: '#7d8a99',
  fairy: '#e08fc0'
}

const dex = document.getElementById('dex')
const lid = document.getElementById('dex-lid')
const leds = document.querySelectorAll('.led')
const bootLine = document.getElementById('boot-line')
const screenScan = document.querySelector('.screen-scan')
const entry = document.getElementById('entry')
const entryArt = document.getElementById('entry-art')
const entryId = document.getElementById('entry-id')
const entryName = document.getElementById('entry-name')
const entryTypes = document.getElementById('entry-types')
const screenError = document.getElementById('screen-error')
const statsEl = document.getElementById('stats')
const metaEl = document.getElementById('meta')

const searchForm = document.getElementById('dex-search')
const searchInput = document.getElementById('search-input')
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')
const randomBtn = document.getElementById('random-btn')
const shinyToggle = document.getElementById('shiny-toggle')
const openBtn = document.getElementById('open-btn')
const replayBtn = document.getElementById('replay-btn')

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

let currentPokemon = null
let isOpen = false
// The boot sequence and the first API response race each other, and both
// draw into the same centered screen area — so data waits for the boot
// line to finish rather than overwriting it mid-type.
let bootComplete = false
let pendingPokemon = null

// ---------- Boot text typing ----------
function typeText(el, text, speed = 38) {
  if (reduceMotion) {
    el.textContent = text
    return Promise.resolve()
  }
  return new Promise((resolve) => {
    let i = 0
    el.textContent = ''
    const timer = setInterval(() => {
      i++
      el.textContent = text.slice(0, i)
      if (i >= text.length) {
        clearInterval(timer)
        resolve()
      }
    }, speed)
  })
}

// ---------- Lid open / close ----------
function openUnit() {
  if (isOpen) return Promise.resolve()
  isOpen = true
  dex.classList.add('is-open')

  if (reduceMotion) {
    gsap.set(lid, { rotateX: -118 })
    gsap.set(leds, { opacity: 1 })
    finishBoot()
    return Promise.resolve()
  }

  const tl = gsap.timeline()
  tl.to(lid, { rotateX: -118, duration: 0.75, ease: 'power3.inOut' })
    .to(leds, { opacity: 1, duration: 0.14, stagger: 0.09 }, '-=0.3')
    .add(async () => {
      await typeText(bootLine, 'DEX UNIT 01\nINDEX ONLINE')
      finishBoot()
    })

  return tl.then()
}

function finishBoot() {
  bootComplete = true
  bootLine.classList.add('is-done')
  if (pendingPokemon) {
    const next = pendingPokemon
    pendingPokemon = null
    renderEntry(next)
  }
}

function closeUnit() {
  isOpen = false
  bootComplete = false
  dex.classList.remove('is-open')
  gsap.set(leds, { opacity: 0.45 })
  bootLine.textContent = ''
  bootLine.classList.remove('is-done')
  entry.classList.add('is-empty')
  pendingPokemon = currentPokemon
  return gsap.to(lid, { rotateX: 0, duration: 0.5, ease: 'power3.inOut' }).then()
}

// ---------- Rendering ----------
function artFor(pokemon) {
  const art = pokemon.sprites.other['official-artwork']
  const preferred = shinyToggle.checked ? art.front_shiny : art.front_default
  return preferred || art.front_default || pokemon.sprites.front_default
}

// Some entries list a shiny artwork URL that 404s at the sprite host, so the
// element itself needs a fallback — a null check on the API field is not enough.
entryArt.addEventListener('error', () => {
  if (!currentPokemon) return
  const fallback =
    currentPokemon.sprites.other['official-artwork'].front_default ||
    currentPokemon.sprites.front_default
  if (fallback && !entryArt.src.endsWith(fallback)) entryArt.src = fallback
})

function renderTypes(pokemon) {
  entryTypes.innerHTML = ''
  pokemon.types.forEach((t) => {
    const badge = document.createElement('span')
    badge.className = 'type-badge'
    badge.textContent = t.type.name
    badge.style.backgroundColor = TYPE_COLORS[t.type.name] || '#7d8a99'
    entryTypes.appendChild(badge)
  })
}

function renderStats(pokemon) {
  statsEl.innerHTML = ''
  const rows = pokemon.stats.map((s) => {
    const row = document.createElement('div')
    row.className = 'stat'
    const pct = Math.min(100, (s.base_stat / STAT_SCALE) * 100)
    row.innerHTML = `
      <span class="stat-name">${shortStatName(s.stat.name)}</span>
      <span class="stat-track"><span class="stat-fill"></span></span>
      <span class="stat-val">${s.base_stat}</span>
    `
    statsEl.appendChild(row)
    return { fill: row.querySelector('.stat-fill'), pct }
  })

  if (reduceMotion) {
    rows.forEach(({ fill, pct }) => (fill.style.width = `${pct}%`))
    return
  }

  rows.forEach(({ fill, pct }, i) => {
    gsap.fromTo(
      fill,
      { width: '0%' },
      { width: `${pct}%`, duration: 0.55, ease: 'power2.out', delay: 0.05 * i }
    )
  })
}

function shortStatName(name) {
  return (
    {
      hp: 'HP',
      attack: 'ATK',
      defense: 'DEF',
      'special-attack': 'SP.A',
      'special-defense': 'SP.D',
      speed: 'SPD'
    }[name] || name
  )
}

function titleCase(value) {
  return value.replace(/(^|[\s-])([a-z])/g, (_, sep, char) => sep + char.toUpperCase())
}

function renderMeta(pokemon) {
  const abilities = pokemon.abilities
    .map((a) => titleCase(a.ability.name.replace(/-/g, ' ')))
    .join(', ')
  metaEl.innerHTML = `
    <dt>Height</dt><dd>${(pokemon.height / 10).toFixed(1)} m</dd>
    <dt>Weight</dt><dd>${(pokemon.weight / 10).toFixed(1)} kg</dd>
    <dt>Abilities</dt><dd>${abilities}</dd>
  `
}

function renderEntry(pokemon) {
  currentPokemon = pokemon
  screenError.classList.remove('is-visible')
  entry.classList.remove('is-empty')

  entryArt.src = artFor(pokemon)
  entryArt.alt = pokemon.name
  entryId.textContent = `No. ${String(pokemon.id).padStart(4, '0')}`
  entryName.textContent = pokemon.name.replace('-', ' ')
  renderTypes(pokemon)
  renderStats(pokemon)
  renderMeta(pokemon)

  if (reduceMotion) {
    gsap.set(entry, { opacity: 1, y: 0 })
    return
  }

  gsap.fromTo(entry, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' })
  gsap.fromTo(
    screenScan,
    { top: '-18%', opacity: 1 },
    { top: '104%', opacity: 0, duration: 0.7, ease: 'none' }
  )
}

function showError(message) {
  entry.classList.add('is-empty')
  screenError.textContent = message
  screenError.classList.add('is-visible')
  statsEl.innerHTML = ''
  metaEl.innerHTML = ''
}

// ---------- Data ----------
// Requests are tagged so a slower earlier lookup can't resolve after a
// newer one and clobber what is on screen (hit this for real: a random
// lookup landed after a failed search and wiped its error message).
let requestSeq = 0

async function loadEntry(query) {
  const key = String(query).trim().toLowerCase()
  if (!key) return

  const seq = ++requestSeq

  try {
    const res = await fetch(`${API}${encodeURIComponent(key)}`)
    if (!res.ok) throw new Error('not found')
    const pokemon = await res.json()
    if (seq !== requestSeq) return

    if (!bootComplete) {
      pendingPokemon = pokemon
      currentPokemon = pokemon
      return
    }
    renderEntry(pokemon)
  } catch {
    if (seq !== requestSeq) return
    showError(`NO DATA FOR "${key.toUpperCase()}"`)
  }
}

function stepEntry(delta) {
  if (!currentPokemon) return
  let next = currentPokemon.id + delta
  if (next < 1) next = MAX_ENTRY
  if (next > MAX_ENTRY) next = 1
  loadEntry(next)
}

// ---------- Wiring ----------
openBtn.addEventListener('click', openUnit)

replayBtn.addEventListener('click', async () => {
  if (reduceMotion) return
  await closeUnit()
  await openUnit()
})

searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  openUnit()
  loadEntry(searchInput.value)
})

prevBtn.addEventListener('click', () => stepEntry(-1))
nextBtn.addEventListener('click', () => stepEntry(1))

randomBtn.addEventListener('click', () => {
  loadEntry(Math.floor(Math.random() * MAX_ENTRY) + 1)
})

shinyToggle.addEventListener('change', () => {
  if (!currentPokemon) return
  entryArt.src = artFor(currentPokemon)
  if (!reduceMotion) {
    gsap.fromTo(entryArt, { opacity: 0.2, scale: 0.94 }, { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' })
  }
})

// ---------- Init ----------
entry.classList.add('is-empty')
gsap.set(leds, { opacity: 0.45 })
loadEntry(Math.floor(Math.random() * 151) + 1)
window.setTimeout(openUnit, 250)
