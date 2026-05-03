// Logos reales del set open-source "cryptocurrency-icons" (spothq), vía CDN —
// cada SVG ya trae su círculo de marca incorporado.
const ICON_BASE = 'https://cdn.jsdelivr.net/npm/cryptocurrency-icons@0.18.1/svg/color'

const COINS = [
  { id: 'btc', name: 'Bitcoin', symbol: 'BTC', price: 68420 },
  { id: 'eth', name: 'Ethereum', symbol: 'ETH', price: 3380 },
  { id: 'sol', name: 'Solana', symbol: 'SOL', price: 164 },
  { id: 'xrp', name: 'XRP', symbol: 'XRP', price: 0.58 },
  { id: 'doge', name: 'Dogecoin', symbol: 'DOGE', price: 0.16 },
  { id: 'ada', name: 'Cardano', symbol: 'ADA', price: 0.45 }
]

const HISTORY_LENGTH = 24
const TICK_MS = 2200

const coinsEl = document.getElementById('coins')
const tapeEl = document.getElementById('tape')
const tapeDupEl = document.getElementById('tape-dup')

function decimalsFor(price) {
  return price < 10 ? 4 : price < 1000 ? 2 : 0
}

function formatPrice(price) {
  return `$${price.toLocaleString('en-US', {
    minimumFractionDigits: decimalsFor(price),
    maximumFractionDigits: decimalsFor(price)
  })}`
}

function formatChange(pct) {
  const sign = pct >= 0 ? '+' : ''
  return `${sign}${pct.toFixed(2)}%`
}

function buildSparklinePath(history) {
  const w = 76
  const h = 30
  const max = Math.max(...history)
  const min = Math.min(...history)
  const range = max - min || max * 0.001 || 1

  return history
    .map((v, i) => {
      const x = (i / (history.length - 1)) * w
      const y = h - 3 - ((v - min) / range) * (h - 6)
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')
}

const state = COINS.map((coin) => {
  const history = Array.from({ length: HISTORY_LENGTH }, () => coin.price)
  return {
    ...coin,
    history,
    baseline24h: coin.price * (1 + (Math.random() * 0.1 - 0.05)),
    el: null,
    priceEl: null,
    changeEl: null,
    sparklinePath: null,
    sparklineSvg: null
  }
})

function renderCoin(coin) {
  const card = document.createElement('article')
  card.className = 'coin'

  const icon = document.createElement('div')
  icon.className = 'coin-icon'
  const iconImg = document.createElement('img')
  iconImg.src = `${ICON_BASE}/${coin.id}.svg`
  iconImg.alt = ''
  iconImg.width = 38
  iconImg.height = 38
  iconImg.loading = 'lazy'
  icon.appendChild(iconImg)

  const info = document.createElement('div')
  info.className = 'coin-info'
  info.innerHTML = `<span class="coin-name">${coin.name}</span><span class="coin-symbol">${coin.symbol}</span>`

  const svgns = 'http://www.w3.org/2000/svg'
  const svg = document.createElementNS(svgns, 'svg')
  svg.setAttribute('class', 'sparkline')
  svg.setAttribute('viewBox', '0 0 76 30')
  const path = document.createElementNS(svgns, 'path')
  svg.appendChild(path)

  const right = document.createElement('div')
  right.className = 'coin-right'
  const price = document.createElement('div')
  price.className = 'coin-price mono'
  const change = document.createElement('div')
  change.className = 'coin-change mono'
  right.append(price, change)

  card.append(icon, info, svg, right)
  coinsEl.appendChild(card)

  coin.priceEl = price
  coin.changeEl = change
  coin.sparklineSvg = svg
  coin.sparklinePath = path
}

function updateCoinDisplay(coin, direction) {
  coin.priceEl.textContent = formatPrice(coin.price)

  if (direction) {
    coin.priceEl.classList.remove('flash-up', 'flash-down')
    void coin.priceEl.offsetWidth
    coin.priceEl.classList.add(direction === 'up' ? 'flash-up' : 'flash-down')
  }

  const changePct = ((coin.price - coin.baseline24h) / coin.baseline24h) * 100
  const changeDirection = changePct >= 0 ? 'up' : 'down'
  coin.changeEl.textContent = formatChange(changePct)
  coin.changeEl.classList.remove('up', 'down')
  coin.changeEl.classList.add(changeDirection)

  coin.sparklinePath.setAttribute('d', buildSparklinePath(coin.history))
  coin.sparklineSvg.classList.remove('up', 'down')
  coin.sparklineSvg.classList.add(changeDirection)
}

function renderTape() {
  const html = state
    .map((coin) => {
      const changePct = ((coin.price - coin.baseline24h) / coin.baseline24h) * 100
      const dir = changePct >= 0 ? 'up' : 'down'
      const arrow = dir === 'up' ? '▲' : '▼'
      return `<span><span class="sym">${coin.symbol}</span>${formatPrice(coin.price)} <span class="${dir}">${arrow} ${formatChange(changePct)}</span></span>`
    })
    .join('')

  tapeEl.innerHTML = html
  tapeDupEl.innerHTML = html
}

function tick() {
  state.forEach((coin) => {
    const delta = (Math.random() * 2 - 1) * 0.0035
    const nextPrice = Math.max(coin.price * (1 + delta), 0.0001)
    const direction = nextPrice === coin.price ? null : nextPrice > coin.price ? 'up' : 'down'

    coin.price = nextPrice
    coin.history.push(nextPrice)
    if (coin.history.length > HISTORY_LENGTH) coin.history.shift()

    updateCoinDisplay(coin, direction)
  })

  renderTape()
}

state.forEach(renderCoin)
state.forEach((coin) => updateCoinDisplay(coin, null))
renderTape()

setInterval(tick, TICK_MS)
