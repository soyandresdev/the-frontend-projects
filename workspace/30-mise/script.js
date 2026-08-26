const BASE = 'https://www.themealdb.com/api/json/v1/1/'
const FAV_KEY = 'mise-favorites'
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search-input')
const categoryRow = document.getElementById('category-row')
const resultsSection = document.getElementById('results-section')
const resultsHeading = document.getElementById('results-heading')
const cardsGrid = document.getElementById('cards-grid')
const emptyState = document.getElementById('empty-state')
const detailView = document.getElementById('detail-view')
const detailContent = document.getElementById('detail-content')
const backBtn = document.getElementById('back-btn')
const randomBtn = document.getElementById('random-btn')
const favoritesBtn = document.getElementById('favorites-btn')

let favorites = loadFavorites()
let activeCategoryChip = null
let lastDetailMealId = null

// ---------- Favorites ----------
function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAV_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveFavorites() {
  try {
    localStorage.setItem(FAV_KEY, JSON.stringify(favorites))
  } catch {
    // storage unavailable, keep working in-memory
  }
}

function isFavorited(id) {
  return favorites.some((f) => f.idMeal === id)
}

function toggleFavorite(meal, btnEl) {
  if (isFavorited(meal.idMeal)) {
    favorites = favorites.filter((f) => f.idMeal !== meal.idMeal)
  } else {
    favorites.push({
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
      strMealThumb: meal.strMealThumb,
      strCategory: meal.strCategory || ''
    })
  }
  saveFavorites()
  btnEl.classList.toggle('is-favorited', isFavorited(meal.idMeal))
}

// ---------- Categories ----------
async function loadCategories() {
  try {
    const res = await fetch(`${BASE}list.php?c=list`)
    const data = await res.json()
    const names = (data.meals || []).map((m) => m.strCategory)

    const allChip = createCategoryChip('All', true)
    categoryRow.appendChild(allChip)
    names.forEach((name) => categoryRow.appendChild(createCategoryChip(name, false)))
  } catch {
    // categories are a nice-to-have — search still works without them
  }
}

function createCategoryChip(name, isActive) {
  const chip = document.createElement('button')
  chip.type = 'button'
  chip.className = 'category-chip'
  chip.classList.toggle('is-active', isActive)
  chip.textContent = name
  if (isActive) activeCategoryChip = chip

  chip.addEventListener('click', () => {
    activeCategoryChip?.classList.remove('is-active')
    chip.classList.add('is-active')
    activeCategoryChip = chip
    favoritesBtn.classList.remove('is-active')

    if (name === 'All') {
      searchMeals(searchInput.value.trim() || 'chicken')
    } else {
      filterByCategory(name)
    }
  })

  return chip
}

// ---------- Search / filter / favorites views ----------
async function searchMeals(term) {
  resultsHeading.textContent = `Searching for "${term}"…`
  try {
    const res = await fetch(`${BASE}search.php?s=${encodeURIComponent(term)}`)
    const data = await res.json()
    renderResults(data.meals, `Results for "${term}"`, `No recipes found for "${term}". Try another search.`)
  } catch {
    renderResults(null, '', 'Something went wrong reaching TheMealDB. Please try again.')
  }
}

async function filterByCategory(name) {
  resultsHeading.textContent = `Loading ${name}…`
  try {
    const res = await fetch(`${BASE}filter.php?c=${encodeURIComponent(name)}`)
    const data = await res.json()
    const meals = (data.meals || []).map((m) => ({ ...m, strCategory: name }))
    renderResults(meals, `${name} recipes`, `No recipes found in ${name}.`)
  } catch {
    renderResults(null, '', 'Something went wrong reaching TheMealDB. Please try again.')
  }
}

function showFavoritesView() {
  activeCategoryChip?.classList.remove('is-active')
  activeCategoryChip = null
  renderResults(favorites, 'Your favorites', 'No favorites yet — tap the heart on a recipe to save it.')
}

function renderResults(meals, heading, emptyMessage) {
  detailView.classList.add('is-hidden')
  resultsSection.classList.remove('is-hidden')
  resultsHeading.textContent = heading
  cardsGrid.innerHTML = ''

  if (!meals || meals.length === 0) {
    emptyState.textContent = emptyMessage
    emptyState.classList.remove('is-hidden')
    return
  }

  emptyState.classList.add('is-hidden')
  meals.forEach((meal) => cardsGrid.appendChild(createCard(meal)))

  if (!prefersReducedMotion) {
    gsap.from(cardsGrid.children, {
      opacity: 0,
      y: 16,
      duration: 0.45,
      stagger: 0.05,
      ease: 'power2.out'
    })
  }
}

function createCard(meal) {
  const card = document.createElement('article')
  card.className = 'recipe-card'
  card.dataset.id = meal.idMeal

  const media = document.createElement('div')
  media.className = 'card-media'
  const img = document.createElement('img')
  img.loading = 'lazy'
  img.src = `${meal.strMealThumb}/medium`
  img.alt = meal.strMeal
  media.appendChild(img)

  const favBtn = document.createElement('button')
  favBtn.type = 'button'
  favBtn.className = 'fav-btn'
  favBtn.classList.toggle('is-favorited', isFavorited(meal.idMeal))
  favBtn.innerHTML = '&#9825;'
  favBtn.setAttribute('aria-label', 'Save to favorites')
  favBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    toggleFavorite(meal, favBtn)
  })
  media.appendChild(favBtn)

  const body = document.createElement('div')
  body.className = 'card-body'
  body.innerHTML = `
    <span class="card-category">${meal.strCategory || ''}</span>
    <h3 class="card-title">${meal.strMeal}</h3>
  `

  card.append(media, body)
  card.addEventListener('click', () => openDetailFromCard(meal.idMeal, card))
  return card
}

// ---------- Detail view ----------
function cleanInstructions(text) {
  // TheMealDB's own data occasionally embeds a stray "▢" checklist-bullet
  // character on its own line between steps — strip it along with the
  // blank line it leaves behind, rather than showing a bullet to nowhere.
  return (text || '')
    .split('\n')
    .filter((line) => line.trim() !== '▢')
    .join('\n')
    .trim()
}

function buildIngredientList(meal) {
  const items = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`]?.trim()
    const measure = meal[`strMeasure${i}`]?.trim()
    if (ingredient) items.push({ ingredient, measure: measure || '' })
  }
  return items
}

function renderDetail(meal) {
  const ingredients = buildIngredientList(meal)

  detailContent.innerHTML = `
    <div class="detail-hero"><img src="${meal.strMealThumb}/large" alt="${meal.strMeal}" /></div>
    <div class="detail-info">
      <div class="detail-badges">
        <span class="detail-badge">${meal.strCategory || ''}</span>
        <span class="detail-badge">${meal.strArea || ''}</span>
      </div>
      <h2 class="detail-title">${meal.strMeal}</h2>

      <p class="detail-section-label">Ingredients</p>
      <ul class="ingredient-list">
        ${ingredients.map((i) => `<li><span>${i.ingredient}</span><span>${i.measure}</span></li>`).join('')}
      </ul>

      <p class="detail-section-label">Instructions</p>
      <p class="instructions">${cleanInstructions(meal.strInstructions)}</p>

      ${
        meal.strYoutube
          ? `<a class="youtube-link" href="${meal.strYoutube}" target="_blank" rel="noopener noreferrer">&#9654; Watch on YouTube</a>`
          : ''
      }
    </div>
  `
}

function openDetailFromCard(idMeal, cardEl) {
  fetch(`${BASE}lookup.php?i=${idMeal}`)
    .then((res) => res.json())
    .then((data) => showMealDetail(data.meals[0], cardEl))
    .catch(() => {})
}

function showMealDetail(meal, originCardEl) {
  lastDetailMealId = meal.idMeal
  const originImg = originCardEl?.querySelector('img')
  const state = originImg && !prefersReducedMotion ? Flip.getState(originImg) : null

  renderDetail(meal)
  resultsSection.classList.add('is-hidden')
  detailView.classList.remove('is-hidden')

  const heroImg = detailContent.querySelector('.detail-hero img')

  if (state) {
    Flip.from(state, {
      targets: heroImg,
      duration: 0.6,
      ease: 'power2.inOut',
      absolute: true,
      scale: true
    })
  } else if (!prefersReducedMotion) {
    gsap.from(detailContent, { opacity: 0, y: 12, duration: 0.4, ease: 'power2.out' })
  }
}

backBtn.addEventListener('click', () => {
  const matchingCard = cardsGrid.querySelector(`[data-id="${lastDetailMealId}"]`)
  const heroImg = detailContent.querySelector('.detail-hero img')
  const state = matchingCard && !prefersReducedMotion ? Flip.getState(heroImg) : null

  resultsSection.classList.remove('is-hidden')
  detailView.classList.add('is-hidden')

  if (state) {
    const cardImg = matchingCard.querySelector('img')
    Flip.from(state, { targets: cardImg, duration: 0.5, ease: 'power2.inOut', absolute: true, scale: true })
  } else if (!prefersReducedMotion) {
    gsap.from(resultsSection, { opacity: 0, duration: 0.3, ease: 'power1.out' })
  }
})

// ---------- Wiring ----------
searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const term = searchInput.value.trim()
  if (!term) return
  activeCategoryChip?.classList.remove('is-active')
  activeCategoryChip = null
  favoritesBtn.classList.remove('is-active')
  searchMeals(term)
})

randomBtn.addEventListener('click', async () => {
  try {
    const res = await fetch(`${BASE}random.php`)
    const data = await res.json()
    showMealDetail(data.meals[0], null)
  } catch {
    // ignore transient network errors
  }
})

favoritesBtn.addEventListener('click', () => {
  const goingToFavorites = !favoritesBtn.classList.contains('is-active')
  favoritesBtn.classList.toggle('is-active', goingToFavorites)
  if (goingToFavorites) {
    showFavoritesView()
  } else {
    searchMeals(searchInput.value.trim() || 'chicken')
  }
})

// ---------- Init ----------
loadCategories()
searchMeals('chicken')
