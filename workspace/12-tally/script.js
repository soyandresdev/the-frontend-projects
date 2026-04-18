const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const ICONS = {
  users:
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>',
  box: '<svg viewBox="0 0 24 24"><path d="M3 8l9-5 9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>',
  trend: '<svg viewBox="0 0 24 24"><path d="M4 17l6-6 4 4 6-8"/><path d="M14 7h6v6"/></svg>'
}

const GLYPHS = {
  dollar: '$',
  heart: '♥',
  star: '★'
}

const STATS = [
  {
    value: 128940,
    decimals: 0,
    label: 'Total users',
    color: [13, 148, 136],
    icon: ICONS.users,
    trend: [40, 55, 48, 62, 70, 65, 80, 92]
  },
  {
    value: 84200,
    prefix: '$',
    decimals: 0,
    label: 'Revenue',
    color: [217, 119, 6],
    glyph: GLYPHS.dollar,
    trend: [30, 34, 32, 45, 42, 58, 55, 70]
  },
  {
    value: 3421,
    decimals: 0,
    label: 'Orders',
    color: [124, 58, 237],
    icon: ICONS.box,
    trend: [60, 58, 65, 50, 72, 68, 75, 80]
  },
  {
    value: 23.5,
    decimals: 1,
    suffix: '%',
    label: 'Growth',
    color: [225, 29, 72],
    icon: ICONS.trend,
    trend: [20, 25, 22, 35, 30, 48, 44, 60]
  },
  {
    value: 98,
    decimals: 0,
    suffix: '%',
    label: 'Satisfaction',
    color: [37, 99, 235],
    glyph: GLYPHS.heart,
    trend: [80, 82, 85, 84, 90, 88, 95, 98]
  },
  {
    value: 4.8,
    decimals: 1,
    label: 'Avg. rating',
    color: [22, 163, 74],
    glyph: GLYPHS.star,
    trend: [70, 72, 75, 74, 80, 82, 85, 88]
  }
]

const grid = document.getElementById('grid')

function buildSparkline(trend) {
  const svgns = 'http://www.w3.org/2000/svg'
  const w = 100
  const h = 30
  const max = Math.max(...trend)
  const min = Math.min(...trend)
  const range = max - min || 1

  const points = trend.map((v, i) => {
    const x = (i / (trend.length - 1)) * w
    const y = h - 2 - ((v - min) / range) * (h - 6)
    return [x, y]
  })

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ')
  const fillPath = `M${points[0][0]},${h} L${points.map((p) => `${p[0]},${p[1]}`).join(' L')} L${points[points.length - 1][0]},${h} Z`

  const svg = document.createElementNS(svgns, 'svg')
  svg.setAttribute('class', 'sparkline')
  svg.setAttribute('viewBox', `0 0 ${w} ${h}`)
  svg.setAttribute('preserveAspectRatio', 'none')

  const fill = document.createElementNS(svgns, 'path')
  fill.setAttribute('class', 'fill')
  fill.setAttribute('d', fillPath)

  const line = document.createElementNS(svgns, 'path')
  line.setAttribute('d', linePath)

  svg.append(fill, line)
  return { svg, line }
}

function animateCount(el, stat) {
  const { value, decimals = 0, prefix = '', suffix = '' } = stat

  const format = (n) =>
    `${prefix}${n.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    })}${suffix}`

  if (prefersReducedMotion) {
    el.textContent = format(value)
    return
  }

  const duration = 1400
  const start = performance.now()

  function step(now) {
    const t = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - t, 3) // power3-out
    el.textContent = format(value * eased)
    if (t < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

function animateSparkline(line) {
  if (prefersReducedMotion) return
  const length = line.getTotalLength()
  line.style.strokeDasharray = String(length)
  line.style.strokeDashoffset = String(length)
  line.animate([{ strokeDashoffset: length }, { strokeDashoffset: 0 }], {
    duration: 900,
    delay: 250,
    easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
    fill: 'forwards'
  })
}

const cards = STATS.map((stat, index) => {
  const card = document.createElement('article')
  card.className = 'stat-card'
  card.style.setProperty('--card-r', stat.color[0])
  card.style.setProperty('--card-g', stat.color[1])
  card.style.setProperty('--card-b', stat.color[2])
  card.style.animationDelay = `${index * 70}ms`

  const icon = document.createElement('div')
  icon.className = 'stat-icon'
  icon.innerHTML = stat.icon ?? `<span style="font-size:1.1rem">${stat.glyph}</span>`

  const value = document.createElement('div')
  value.className = 'stat-value'
  value.textContent = '0'

  const label = document.createElement('div')
  label.className = 'stat-label'
  label.textContent = stat.label

  const { svg, line } = buildSparkline(stat.trend)

  card.append(icon, value, label, svg)
  grid.appendChild(card)

  return { card, value, line, stat }
})

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      const match = cards.find((c) => c.card === entry.target)
      if (!match) return

      entry.target.classList.add('is-visible')
      animateCount(match.value, match.stat)
      animateSparkline(match.line)
      observer.unobserve(entry.target)
    })
  },
  { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
)

cards.forEach(({ card }) => observer.observe(card))
