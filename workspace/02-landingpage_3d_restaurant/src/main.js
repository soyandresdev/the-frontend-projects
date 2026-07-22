import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { SplitText } from 'gsap/SplitText'
import { createStage } from './scene.js'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const isDesktop = window.matchMedia('(min-width: 1001px)').matches
const debug = new URLSearchParams(location.search).has('debug')

document.body.classList.add('is-loading')

/* ------------------------------------------------------------------
   Camera stations — where the kiosk sits for each section.
   Values are tuned by eye; `yaw` rotates the model, the rest is camera.
------------------------------------------------------------------- */
const STATIONS = {
  hero:   { x: 7.5,  y: 3.0, z: 8.5,  tx: -2.6, ty: 1.6, tz: 0, yaw: 0,    fov: 38 },
  story:  { x: 5.4,  y: 2.4, z: 9.6,  tx: -3.0, ty: 1.9, tz: 0, yaw: 0.6,  fov: 36 },
  menu:   { x: -4.6, y: 1.6, z: 8.6,  tx: 0.6,  ty: 1.9, tz: 0, yaw: 1.3,  fov: 40 },
  stats:  { x: 2.0,  y: 8.2, z: 12.5, tx: 0,    ty: 1.0, tz: 0, yaw: 2.4,  fov: 36 },
  order:  { x: 7.2,  y: 2.4, z: 8.8,  tx: 1.0,  ty: 1.8, tz: 0, yaw: 3.3,  fov: 36 },
  footer: { x: 11,   y: 5.2, z: 12.5, tx: 0,    ty: 1.6, tz: 0, yaw: 4.4,  fov: 42 }
}

// Phones: widen the lens so the kiosk fits a portrait viewport, and aim the
// camera higher so the kiosk drops below the copy instead of sitting behind it.
if (!isDesktop) {
  for (const s of Object.values(STATIONS)) {
    s.fov += 14
    s.tx = 0
  }
  STATIONS.hero.ty = 3.0
  STATIONS.story.ty = 3.6
  STATIONS.order.ty = 3.4
  STATIONS.stats.ty = 0.4
}

/* ------------------------------------------------------------------
   3D stage
------------------------------------------------------------------- */
const loaderCount = document.getElementById('loader-count')
const loaderBar = document.getElementById('loader-bar')
const progressState = { v: 0 }

function paintProgress(p) {
  loaderCount.textContent = String(Math.round(p * 100)).padStart(2, '0')
  loaderBar.style.transform = `scaleX(${p})`
}

let modelReady = false

const stage = createStage({
  canvas: document.getElementById('scene'),
  reducedMotion,
  onProgress: (p) => {
    if (modelReady) return
    gsap.killTweensOf(progressState)
    gsap.to(progressState, {
      v: Math.min(p, 0.99),
      duration: 0.6,
      ease: 'power2.out',
      onUpdate: () => paintProgress(progressState.v)
    })
  },
  onReady: () => {
    modelReady = true
    gsap.killTweensOf(progressState)
    gsap.to(progressState, {
      v: 1,
      duration: 0.5,
      ease: 'power2.out',
      onUpdate: () => paintProgress(progressState.v),
      onComplete: revealSite
    })
  }
})

Object.assign(stage.cam, STATIONS.hero)

/* ------------------------------------------------------------------
   Smooth scroll (desktop only — touch keeps native momentum)
------------------------------------------------------------------- */
let smoother = null
if (!reducedMotion) {
  smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1.3,
    effects: false,
    normalizeScroll: true,
    ignoreMobileResize: true
  })
  smoother.paused(true)
}

/* ------------------------------------------------------------------
   Preloader → site reveal
------------------------------------------------------------------- */
const loader = document.getElementById('loader')
let revealed = false

function revealSite() {
  if (revealed) return
  revealed = true

  const tl = gsap.timeline({
    defaults: { ease: 'power4.inOut' },
    onComplete: () => {
      loader.remove()
      document.body.classList.remove('is-loading')
      smoother?.paused(false)
      ScrollTrigger.refresh()
    }
  })

  tl.to('.loader__count, .loader__label, .loader__bar, .loader__foot', {
    yPercent: -40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.04,
    ease: 'power3.in'
  })
    .to('.loader__kanji', { scale: 1.6, opacity: 0, duration: 0.8, ease: 'power3.in' }, '<')
    .to(loader, { yPercent: -100, duration: 1.1 }, '-=0.25')
    .add(heroIntro, '-=0.75')
}

/* ------------------------------------------------------------------
   Hero intro (plays once, above the fold — never scroll-triggered)
------------------------------------------------------------------- */
function heroIntro() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  // Camera swoops in from a wider shot into the hero station
  if (!reducedMotion) {
    tl.fromTo(
      stage.cam,
      { x: STATIONS.hero.x + 5, y: STATIONS.hero.y + 3.2, z: STATIONS.hero.z + 6, fov: 46 },
      { ...STATIONS.hero, duration: 2.2, ease: 'power3.out' },
      0
    )
  }

  tl.from('.nav', { yPercent: -100, opacity: 0, duration: 0.9 }, 0.1)
    .from('.hero__kicker', { opacity: 0, x: -16, duration: 0.7 }, 0.25)
    .from(
      '.hero__line',
      { yPercent: 110, duration: 1.1, stagger: 0.09, ease: 'power4.out' },
      0.3
    )
    .from('.hero__sub', { opacity: 0, y: 18, duration: 0.8 }, 0.85)
    .from('.hero__ctas .btn', { opacity: 0, y: 14, stagger: 0.08, duration: 0.6 }, 1.0)
    .from('.hero__kanji', { opacity: 0, y: 24, duration: 0.9 }, 1.0)
    .from('.hero__cue, .hero__ticket', { opacity: 0, duration: 0.7 }, 1.25)

  return tl
}

/* ------------------------------------------------------------------
   Scroll-driven camera: each section scrubs the stage to its station
------------------------------------------------------------------- */
const sections = gsap.utils.toArray('[data-station]')

if (!reducedMotion) {
  sections.slice(1).forEach((section) => {
    const station = STATIONS[section.dataset.station]
    if (!station) return

    gsap.to(stage.cam, {
      ...station,
      ease: 'none',
      immediateRender: false,
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'top 25%',
        scrub: 1.2,
        invalidateOnRefresh: true
      }
    })
  })
}

// The veil fades on sections where the kiosk should shine through
gsap.to('#veil', {
  opacity: 0.45,
  ease: 'none',
  scrollTrigger: { trigger: '#menu', start: 'top 80%', end: 'top 20%', scrub: true }
})
gsap.to('#veil', {
  opacity: 1,
  ease: 'none',
  immediateRender: false,
  scrollTrigger: { trigger: '#order', start: 'top bottom', end: 'top 30%', scrub: true }
})

/* ------------------------------------------------------------------
   Chrome: progress bar, nav state
------------------------------------------------------------------- */
gsap.to('#progress', {
  scaleX: 1,
  ease: 'none',
  scrollTrigger: { trigger: '#content', start: 'top top', end: 'bottom bottom', scrub: true }
})

ScrollTrigger.create({
  trigger: '.hero',
  start: 'bottom 90%',
  onEnter: () => document.getElementById('nav').classList.add('is-scrolled'),
  onLeaveBack: () => document.getElementById('nav').classList.remove('is-scrolled')
})

/* ------------------------------------------------------------------
   Story: word-by-word fill scrubbed by scroll
------------------------------------------------------------------- */
const storyText = document.getElementById('story-text')
const storySplit = new SplitText(storyText, { type: 'words', wordsClass: 'w' })

if (!reducedMotion) {
  gsap.to(storySplit.words, {
    opacity: 1,
    stagger: 0.06,
    ease: 'none',
    scrollTrigger: {
      trigger: storyText,
      start: 'top 78%',
      end: 'bottom 45%',
      scrub: 0.6
    }
  })
} else {
  gsap.set(storySplit.words, { opacity: 1 })
}

// Reveal helper — once, early, wave stagger
function reveal(targets, { y = 24, stagger = 0.1, start = 'top 88%', duration = 0.8 } = {}) {
  gsap.utils.toArray(targets).forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      y: reducedMotion ? 0 : y,
      duration,
      delay: i * stagger,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start, once: true }
    })
  })
}

reveal('.story .section__head', { stagger: 0 })
reveal('.fact', { y: 30, stagger: 0.1 })
reveal('.stats .section__head', { stagger: 0 })
reveal('.order__copy > *', { y: 26, stagger: 0.08 })
reveal('.order__form', { y: 34, stagger: 0 })
reveal('.footer__grid, .footer__bar', { y: 20, stagger: 0.1 })

// Footer logotype slides up from behind its own overflow
gsap.from('.footer__logo', {
  yPercent: 40,
  opacity: 0,
  duration: 1.2,
  ease: 'power4.out',
  scrollTrigger: { trigger: '.footer', start: 'top 85%', once: true }
})

/* ------------------------------------------------------------------
   Menu: pinned horizontal gallery on desktop, native snap scroll on touch
------------------------------------------------------------------- */
const mm = gsap.matchMedia()

mm.add('(min-width: 1001px)', () => {
  const track = document.getElementById('menu-track')
  const dishes = gsap.utils.toArray('.dish')

  const distance = () => track.scrollWidth - window.innerWidth + 32
  const pinDistance = () => distance() * 1.25

  const scrollTween = gsap.to(track, { x: () => -distance(), ease: 'none' })

  const pin = ScrollTrigger.create({
    trigger: '.menu__pin',
    start: 'top top',
    end: () => `+=${pinDistance()}`,
    pin: true,
    scrub: 0.6,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    animation: scrollTween
  })

  // Menu head + cards float in when the section arrives
  const head = gsap.from('.section__head--menu > *', {
    opacity: 0,
    y: 20,
    stagger: 0.08,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.menu__pin', start: 'top 70%', once: true }
  })

  const cards = gsap.from(dishes, {
    opacity: 0,
    y: 40,
    rotateY: -6,
    stagger: 0.07,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.menu__pin', start: 'top 60%', once: true }
  })

  // Subtle 3D tilt toward the cursor
  const tilts = []
  if (!reducedMotion) {
    dishes.forEach((card) => {
      const rx = gsap.quickTo(card, 'rotateX', { duration: 0.6, ease: 'power3.out' })
      const ry = gsap.quickTo(card, 'rotateY', { duration: 0.6, ease: 'power3.out' })
      const onMove = (e) => {
        const r = card.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        ry(px * 8)
        rx(-py * 8)
      }
      const onLeave = () => { rx(0); ry(0) }
      card.addEventListener('pointermove', onMove)
      card.addEventListener('pointerleave', onLeave)
      tilts.push(() => {
        card.removeEventListener('pointermove', onMove)
        card.removeEventListener('pointerleave', onLeave)
      })
    })
  }

  return () => {
    pin.kill()
    scrollTween.kill()
    head.scrollTrigger?.kill()
    cards.scrollTrigger?.kill()
    tilts.forEach((off) => off())
    gsap.set([track, ...dishes], { clearProps: 'all' })
  }
})

mm.add('(max-width: 1000px)', () => {
  reveal('.section__head--menu', { stagger: 0 })
  reveal('.dish', { y: 30, stagger: 0.06 })
})

/* ------------------------------------------------------------------
   Stats count-up
------------------------------------------------------------------- */
const fmt = new Intl.NumberFormat('en-US')

gsap.utils.toArray('[data-count]').forEach((el) => {
  const target = parseFloat(el.dataset.count)
  const decimals = parseInt(el.dataset.decimals || '0', 10)
  const state = { v: 0 }

  const paint = () => {
    el.textContent =
      el.dataset.format === 'm'
        ? fmt.format(Math.round(state.v))
        : state.v.toFixed(decimals)
  }
  paint()

  gsap.to(state, {
    v: target,
    duration: reducedMotion ? 0.01 : 2.2,
    ease: 'power3.out',
    onUpdate: paint,
    scrollTrigger: { trigger: el, start: 'top 85%', once: true }
  })
})

gsap.from('.stat', {
  opacity: 0,
  y: 26,
  stagger: 0.1,
  duration: 0.8,
  ease: 'power3.out',
  scrollTrigger: { trigger: '.stats__grid', start: 'top 85%', once: true }
})

/* ------------------------------------------------------------------
   Reservation form (no backend — flips to a confirmation state)
------------------------------------------------------------------- */
const form = document.getElementById('order-form')
const done = document.getElementById('order-done')
const stoolNum = document.getElementById('stool-num')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = form.elements.name
  if (!name.value.trim()) {
    gsap.fromTo(name, { x: -6 }, { x: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' })
    name.focus()
    return
  }

  stoolNum.textContent = `#0${1 + Math.floor(Math.random() * 7)}`

  gsap.timeline()
    .to('.order__fields, .order__form .btn--wide, .order__fine', {
      opacity: 0,
      y: -10,
      duration: 0.35,
      ease: 'power2.in',
      stagger: 0.03
    })
    .set(done, { visibility: 'visible' })
    .to(done, { opacity: 1, duration: 0.4, ease: 'power2.out' })
    .from(
      done.children,
      { opacity: 0, y: 16, stagger: 0.08, duration: 0.6, ease: 'power3.out' },
      '<0.1'
    )
})

document.getElementById('order-reset').addEventListener('click', () => {
  form.reset()
  gsap.timeline()
    .to(done, { opacity: 0, duration: 0.3, ease: 'power2.in' })
    .set(done, { visibility: 'hidden' })
    .to('.order__fields, .order__form .btn--wide, .order__fine', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power3.out',
      stagger: 0.04
    })
})

/* ------------------------------------------------------------------
   Nav: anchors through the smoother, mobile overlay
------------------------------------------------------------------- */
function scrollToHash(hash) {
  const target = document.querySelector(hash)
  if (!target) return
  if (smoother) smoother.scrollTo(target, true, 'top top')
  else target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })
}

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const hash = a.getAttribute('href')
    if (hash.length < 2) return
    e.preventDefault()
    if (overlayOpen) toggleOverlay(false)
    scrollToHash(hash)
  })
})

const burger = document.getElementById('burger')
const overlay = document.getElementById('overlay')
let overlayOpen = false

const overlayTl = gsap.timeline({ paused: true })
  .set(overlay, { visibility: 'visible' })
  .fromTo(overlay, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.7, ease: 'power4.inOut' })
  .from('.overlay__links a', { yPercent: 40, opacity: 0, stagger: 0.07, duration: 0.6, ease: 'power3.out' }, '-=0.3')
  .from('.overlay__foot', { opacity: 0, duration: 0.4 }, '-=0.3')

function toggleOverlay(open) {
  overlayOpen = open
  burger.classList.toggle('is-open', open)
  burger.setAttribute('aria-expanded', String(open))
  overlay.classList.toggle('is-open', open)
  overlay.setAttribute('aria-hidden', String(!open))
  if (open) overlayTl.timeScale(1).play()
  else overlayTl.timeScale(1.6).reverse()
}

burger.addEventListener('click', () => toggleOverlay(!overlayOpen))

/* ------------------------------------------------------------------
   Magnetic buttons (fine pointers only)
------------------------------------------------------------------- */
if (!reducedMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.querySelectorAll('[data-magnetic]').forEach((btn) => {
    const mx = gsap.quickTo(btn, 'x', { duration: 0.5, ease: 'power3.out' })
    const my = gsap.quickTo(btn, 'y', { duration: 0.5, ease: 'power3.out' })
    btn.addEventListener('pointermove', (e) => {
      const r = btn.getBoundingClientRect()
      mx((e.clientX - (r.left + r.width / 2)) * 0.3)
      my((e.clientY - (r.top + r.height / 2)) * 0.3)
    })
    btn.addEventListener('pointerleave', () => { mx(0); my(0) })
  })
}

/* ------------------------------------------------------------------
   "Now serving" ticket ticks up now and then
------------------------------------------------------------------- */
const ticket = document.getElementById('ticket')
let ticketNum = 427
function tickTicket() {
  ticketNum += 1
  gsap.timeline()
    .to(ticket, { yPercent: -60, opacity: 0, duration: 0.25, ease: 'power2.in' })
    .add(() => { ticket.textContent = `#${String(ticketNum).padStart(4, '0')}` })
    .fromTo(ticket, { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.35, ease: 'power3.out' })
  setTimeout(tickTicket, 4000 + Math.random() * 5000)
}
if (!reducedMotion) setTimeout(tickTicket, 5000)

/* ------------------------------------------------------------------
   Debug: expose the camera state for tuning stations in the console
------------------------------------------------------------------- */
if (debug) {
  window.__stage = stage
  window.__STATIONS = STATIONS
}
