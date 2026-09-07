const SEED = [
  { id: 'r1', name: 'Emma Wilson', handle: '@emmaw', score: 2850, color: '#c8f53c' },
  { id: 'r2', name: 'James Chen', handle: '@jchen', score: 2540, color: '#5ad1f0' },
  { id: 'r3', name: 'Sofia Garcia', handle: '@sofig', score: 2210, color: '#f58a3c' },
  { id: 'r4', name: 'Michael Brown', handle: '@mikeb', score: 1890, color: '#b48cf0' },
  { id: 'r5', name: 'Olivia Taylor', handle: '@oliviat', score: 1650, color: '#f06890' },
  { id: 'r6', name: 'Noah Idris', handle: '@nidris', score: 1480, color: '#6ee7a8' },
  { id: 'r7', name: 'Mei Tanaka', handle: '@meit', score: 1320, color: '#f2c744' },
  { id: 'r8', name: 'Luca Rossi', handle: '@lrossi', score: 1105, color: '#8fa8ff' }
]

const TICK_MS = 1600

const rowsEl = document.getElementById('rows')
const liveBadge = document.getElementById('live-badge')
const liveLabel = document.getElementById('live-label')
const toggleBtn = document.getElementById('toggle-btn')
const roundBtn = document.getElementById('round-btn')
const resetBtn = document.getElementById('reset-btn')

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

let racers = []
let rowMap = new Map()
let timer = null
let running = false

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function buildRows() {
  rowsEl.innerHTML = ''
  rowMap = new Map()

  racers.forEach((racer) => {
    const li = document.createElement('li')
    li.className = 'row'
    li.dataset.id = racer.id

    li.innerHTML = `
      <span class="rank-chip"></span>
      <div class="racer">
        <span class="avatar"></span>
        <span class="racer-id">
          <span class="name"></span>
          <span class="handle"></span>
        </span>
        <span class="delta"></span>
      </div>
      <span class="score"></span>
    `

    const avatar = li.querySelector('.avatar')
    avatar.textContent = initials(racer.name)
    avatar.style.backgroundColor = racer.color
    li.querySelector('.name').textContent = racer.name
    li.querySelector('.handle').textContent = racer.handle

    rowsEl.appendChild(li)
    rowMap.set(racer.id, {
      root: li,
      chip: li.querySelector('.rank-chip'),
      delta: li.querySelector('.delta'),
      score: li.querySelector('.score')
    })
  })
}

function paintStatic() {
  racers.forEach((racer, i) => {
    const els = rowMap.get(racer.id)
    els.root.dataset.rank = i + 1
    els.root.classList.toggle('is-leader', i === 0)
    els.chip.textContent = i + 1
    els.score.textContent = racer.score.toLocaleString('en-US')
    racer.rank = i + 1
  })
}

function rollScore(els, from, to) {
  if (reduceMotion || from === to) {
    els.score.textContent = to.toLocaleString('en-US')
    return
  }
  const proxy = { v: from }
  gsap.to(proxy, {
    v: to,
    duration: 0.6,
    ease: 'power2.out',
    onUpdate: () => {
      els.score.textContent = Math.round(proxy.v).toLocaleString('en-US')
    }
  })
}

function showDelta(els, change) {
  const badge = els.delta
  if (!change) {
    badge.textContent = ''
    badge.className = 'delta'
    gsap.set(badge, { opacity: 0 })
    return
  }

  const up = change > 0
  badge.textContent = `${up ? '▲' : '▼'}${Math.abs(change)}`
  badge.className = `delta ${up ? 'is-up' : 'is-down'}`

  if (reduceMotion) {
    gsap.set(badge, { opacity: 1 })
    return
  }

  gsap.fromTo(
    badge,
    { opacity: 0, y: up ? 6 : -6 },
    { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
  )
  gsap.to(badge, { opacity: 0, duration: 0.4, delay: 1.8, ease: 'power1.in' })
}

// The core of the piece: capture where every row currently sits, reorder the
// DOM by the new standings, then let GSAP Flip animate each row from its old
// position to its new one — that is what makes an overtake visible.
function applyStandings(previousScores) {
  const state = reduceMotion ? null : Flip.getState(rowsEl.children)
  const previousRanks = new Map(racers.map((r) => [r.id, r.rank]))

  racers.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
  racers.forEach((racer) => rowsEl.appendChild(rowMap.get(racer.id).root))

  racers.forEach((racer, i) => {
    const els = rowMap.get(racer.id)
    const newRank = i + 1
    els.root.dataset.rank = newRank
    els.root.classList.toggle('is-leader', newRank === 1)
    els.chip.textContent = newRank

    const before = previousScores?.get(racer.id) ?? racer.score
    rollScore(els, before, racer.score)

    const change = (previousRanks.get(racer.id) ?? newRank) - newRank
    showDelta(els, change)
    racer.rank = newRank
  })

  if (state) {
    // `absolute: true` lifts every row out of flow for the duration of the
    // animation, which collapses this flex column to zero height — the
    // controls below jump up underneath the moving rows, and clicks meant
    // for them land on a row instead. Row count and size never change, so
    // pinning the height for the animation keeps the layout still.
    const lockedHeight = rowsEl.getBoundingClientRect().height
    rowsEl.style.height = `${lockedHeight}px`

    Flip.from(state, {
      duration: 0.65,
      ease: 'power3.inOut',
      absolute: true,
      stagger: 0.03,
      onComplete: () => {
        rowsEl.style.height = ''
      }
    })
  }
}

function bumpScores({ heavy = false } = {}) {
  const previousScores = new Map(racers.map((r) => [r.id, r.score]))

  if (heavy) {
    // A round gives everyone a small gain, then hands two racers exactly
    // enough to clear the gap to whoever is directly ahead of them. Boosting
    // the field randomly (even with catch-up weighting) often preserved the
    // order, so the button looked broken — and over-weighting it just
    // inverted the whole field. Computing the gap guarantees a visible
    // overtake while the standings still look like a race.
    racers.forEach((racer) => {
      racer.score += Math.round(10 + Math.random() * 40)
    })

    const climbers = racers
      .map((racer, i) => ({ racer, i }))
      .filter(({ i }) => i > 0)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2)

    climbers.forEach(({ racer, i }) => {
      const gap = racers[i - 1].score - racer.score
      racer.score += Math.max(0, gap) + Math.round(15 + Math.random() * 110)
    })
  } else {
    const pool = [...racers].sort(() => Math.random() - 0.5).slice(0, 3)
    pool.forEach((racer) => {
      racer.score += Math.round(8 + Math.random() * 90)
    })
  }

  applyStandings(previousScores)
}

function setRunning(next) {
  running = next
  window.clearInterval(timer)
  timer = null

  if (running) {
    timer = window.setInterval(() => bumpScores(), TICK_MS)
    toggleBtn.textContent = 'Pause feed'
    liveBadge.classList.remove('is-paused')
    liveLabel.textContent = 'LIVE'
  } else {
    toggleBtn.textContent = 'Resume feed'
    liveBadge.classList.add('is-paused')
    liveLabel.textContent = 'PAUSED'
  }
}

function reset() {
  setRunning(false)
  racers = SEED.map((r) => ({ ...r }))
  buildRows()
  paintStatic()
  racers.forEach((racer) => showDelta(rowMap.get(racer.id), 0))
}

toggleBtn.addEventListener('click', () => setRunning(!running))
roundBtn.addEventListener('click', () => bumpScores({ heavy: true }))
resetBtn.addEventListener('click', reset)

// ---------- Init ----------
racers = SEED.map((r) => ({ ...r }))
buildRows()
paintStatic()
// Autonomous motion stays off when the visitor asked for reduced motion —
// the feed is then driven only by the buttons.
setRunning(!reduceMotion)
