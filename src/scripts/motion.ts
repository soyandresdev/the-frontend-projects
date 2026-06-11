/*
  motion.ts
  =========
  Capa de motion del sitio. Se importa una sola vez desde Layout.astro y se
  re-inicializa en cada navegación del ClientRouter (astro:page-load).

  Principios (animations.dev):
  - Solo transform/opacity. Nada de layout en animación.
  - Entradas con ease-out fuerte; en pantalla, ease-in-out.
  - Reveals por scroll una sola vez y en pocos momentos (cards + footer).
  - El hero se anima al cargar, no espera al scroll.
  - prefers-reduced-motion: se mantiene el fade, se elimina el movimiento.
*/
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(ScrollTrigger, SplitText, Flip)

const EASE_OUT = 'expo.out'
const EASE_INOUT = 'expo.inOut'

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const finePointer = () => window.matchMedia('(pointer: fine)').matches

let ctx: gsap.Context | null = null
const cleanups: Array<() => void> = []

function on<K extends keyof HTMLElementEventMap>(
  el: HTMLElement | Window | Document,
  type: K | string,
  fn: (e: any) => void,
  opts?: AddEventListenerOptions
) {
  el.addEventListener(type, fn, opts)
  cleanups.push(() => el.removeEventListener(type, fn, opts))
}

const $ = <T extends HTMLElement>(sel: string, root: ParentNode = document) =>
  root.querySelector<T>(sel)
const $$ = <T extends HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel))

/* ------------------------------------------------------------------ */
/* Hero intro: título por caracteres, líneas de texto, contador        */
/* ------------------------------------------------------------------ */
function initHero() {
  const splits = $$('[data-split]')
  const lines = $$('[data-line]')
  const reveals = $$('[data-reveal="hero"]')
  const counter = $<HTMLElement>('[data-counter]')

  if (reducedMotion()) {
    gsap.set([...splits, ...lines, ...reveals], { autoAlpha: 1 })
    if (counter) counter.textContent = counter.dataset.counter ?? ''
    return
  }

  const tl = gsap.timeline({ defaults: { ease: EASE_OUT } })

  splits.forEach((el, i) => {
    const split = SplitText.create(el, { type: 'chars,words', mask: 'chars', charsClass: 'char' })
    gsap.set(el, { autoAlpha: 1 })
    tl.from(
      split.chars,
      { yPercent: 110, rotate: 4, duration: 1.1, stagger: { each: 0.025, from: 'start' } },
      i === 0 ? 0.1 : '<0.15'
    )
  })

  // Líneas enteras (p. ej. la línea con degradado, que no admite split por chars)
  if (lines.length) {
    gsap.set(lines, { autoAlpha: 1 })
    tl.from(lines, { yPercent: 110, rotate: 2, duration: 1.1 }, splits.length ? '<0.2' : 0.1)
  }

  // Las líneas del hero entran como una ola: pequeño desplazamiento, ease-out fuerte.
  tl.fromTo(
    reveals,
    { autoAlpha: 0, y: 18 },
    { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.09 },
    splits.length ? '-=0.7' : 0
  )

  if (counter) {
    const target = Number(counter.dataset.counter ?? 0)
    const obj = { n: 0 }
    tl.to(
      obj,
      {
        n: target,
        duration: 1.4,
        ease: 'power3.out',
        onUpdate: () => {
          counter.textContent = String(Math.round(obj.n)).padStart(2, '0')
        }
      },
      '-=0.9'
    )
  }
}

/* ------------------------------------------------------------------ */
/* Reveals por scroll (una vez, trigger temprano, ola por importancia)  */
/* ------------------------------------------------------------------ */
function initScrollReveals() {
  const items = $$('[data-reveal]:not([data-reveal="hero"])')
  if (!items.length) return

  if (reducedMotion()) {
    gsap.set(items, { autoAlpha: 1 })
    return
  }

  // Grupos: los hijos de un mismo [data-reveal-group] entran escalonados.
  const groups = $$('[data-reveal-group]')
  const grouped = new Set<HTMLElement>()
  groups.forEach((group) => {
    const children = $$('[data-reveal]', group).filter((c) => !grouped.has(c))
    children.forEach((c) => grouped.add(c))
    if (!children.length) return
    ScrollTrigger.batch(children, {
      start: 'top 88%',
      once: true,
      batchMax: 6,
      onEnter: (batch) =>
        gsap.fromTo(
          batch,
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease: EASE_OUT, stagger: 0.08, overwrite: true }
        )
    })
  })

  items
    .filter((el) => !grouped.has(el))
    .forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: EASE_OUT,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true }
        }
      )
    })
}

/* ------------------------------------------------------------------ */
/* Nav: se esconde al bajar, aparece al subir                          */
/* ------------------------------------------------------------------ */
function initNav() {
  const nav = $<HTMLElement>('[data-nav]')
  if (!nav) return
  let lastY = window.scrollY
  let hidden = false
  const onScroll = () => {
    const y = window.scrollY
    const goingDown = y > lastY && y > 120
    if (goingDown !== hidden) {
      hidden = goingDown
      nav.classList.toggle('nav-hidden', hidden)
    }
    lastY = y
  }
  on(window, 'scroll', onScroll, { passive: true })
}

/* ------------------------------------------------------------------ */
/* Magnetic: el botón sigue al ratón unos px y vuelve con muelle        */
/* ------------------------------------------------------------------ */
function initMagnetic() {
  if (!finePointer() || reducedMotion()) return
  $$('[data-magnetic]').forEach((el) => {
    const strength = Number(el.dataset.magnetic || 0.35)
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' })
    on(el, 'mousemove', (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      xTo((e.clientX - (r.left + r.width / 2)) * strength)
      yTo((e.clientY - (r.top + r.height / 2)) * strength)
    })
    on(el, 'mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.45)' })
    })
  })
}

/* ------------------------------------------------------------------ */
/* Tilt suave (avatar)                                                  */
/* ------------------------------------------------------------------ */
function initTilt() {
  if (!finePointer() || reducedMotion()) return
  $$('[data-tilt]').forEach((el) => {
    const rx = gsap.quickTo(el, 'rotationX', { duration: 0.5, ease: 'power3.out' })
    const ry = gsap.quickTo(el, 'rotationY', { duration: 0.5, ease: 'power3.out' })
    gsap.set(el, { transformPerspective: 700 })
    on(el, 'mousemove', (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width - 0.5
      const py = (e.clientY - r.top) / r.height - 0.5
      ry(px * 14)
      rx(-py * 14)
    })
    on(el, 'mouseleave', () => {
      gsap.to(el, { rotationX: 0, rotationY: 0, duration: 0.7, ease: 'power3.out' })
    })
  })
}

/* ------------------------------------------------------------------ */
/* Card glow: la posición del ratón alimenta --mx/--my (solo CSS pinta) */
/* ------------------------------------------------------------------ */
function initCardGlow() {
  if (!finePointer()) return
  $$('[data-card]').forEach((card) => {
    on(card, 'mousemove', (e: MouseEvent) => {
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - r.left}px`)
      card.style.setProperty('--my', `${e.clientY - r.top}px`)
    })
  })
}

/* ------------------------------------------------------------------ */
/* Cursor personalizado: punto que sigue al ratón y crece sobre demos   */
/* ------------------------------------------------------------------ */
function initCursor() {
  const cursor = $<HTMLElement>('#cursor')
  if (!cursor || !finePointer() || reducedMotion()) return
  // En la página de detalle el iframe se traga los eventos de ratón: el cursor se congelaría.
  if ($('[data-demo]')) {
    gsap.set(cursor, { autoAlpha: 0 })
    return
  }
  const label = $<HTMLElement>('[data-cursor-label]', cursor)
  const xTo = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3.out' })
  const yTo = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3.out' })
  gsap.set(cursor, { xPercent: -50, yPercent: -50, scale: 0, autoAlpha: 0 })
  let shown = false

  on(window, 'mousemove', (e: MouseEvent) => {
    if (!shown) {
      shown = true
      gsap.set(cursor, { x: e.clientX, y: e.clientY })
      gsap.to(cursor, { scale: 1, autoAlpha: 1, duration: 0.4, ease: EASE_OUT })
    }
    xTo(e.clientX)
    yTo(e.clientY)
  })
  on(document, 'mouseleave', () => gsap.to(cursor, { scale: 0, autoAlpha: 0, duration: 0.3 }))
  on(
    document,
    'mouseenter',
    () => shown && gsap.to(cursor, { scale: 1, autoAlpha: 1, duration: 0.3 })
  )

  // Sobre elementos con data-cursor: se expande y muestra la etiqueta.
  on(document, 'mouseover', (e: MouseEvent) => {
    const t = (e.target as HTMLElement).closest<HTMLElement>('[data-cursor]')
    if (!t) return
    if (label) label.textContent = t.dataset.cursor || ''
    const src = t.closest<HTMLElement>('[data-color]')
    cursor.style.setProperty('--cursor', src?.dataset.color || '#fff')
    cursor.style.setProperty('--cursor-ink', src?.dataset.ink || '')
    cursor.classList.add('is-active')
  })
  on(document, 'mouseout', (e: MouseEvent) => {
    const t = (e.target as HTMLElement).closest<HTMLElement>('[data-cursor]')
    if (!t) return
    const to = (e.relatedTarget as HTMLElement | null)?.closest('[data-cursor]')
    if (to === t) return
    cursor.classList.remove('is-active')
    cursor.style.removeProperty('--cursor')
    cursor.style.removeProperty('--cursor-ink')
  })
}

/* ------------------------------------------------------------------ */
/* Filtros del grid: dificultad + búsqueda + tags, con Flip             */
/* ------------------------------------------------------------------ */
function initFilters() {
  const grid = $<HTMLElement>('[data-grid]')
  if (!grid) return
  const cards = $$('[data-card]', grid)
  const diffButtons = $$('[data-filter]')
  const tagButtons = $$('[data-tag]')
  const search = $<HTMLInputElement>('[data-search]')
  const count = $<HTMLElement>('[data-count]')
  const empty = $<HTMLElement>('[data-empty]')
  const clear = $<HTMLElement>('[data-clear]')

  const state = { difficulty: 'all', tags: new Set<string>(), q: '' }

  const matches = (card: HTMLElement) => {
    const d = card.dataset.difficulty
    const tags = (card.dataset.tags || '').split('|')
    const hay = (card.dataset.search || '').toLowerCase()
    if (state.difficulty !== 'all' && d !== state.difficulty) return false
    for (const t of state.tags) if (!tags.includes(t)) return false
    if (state.q && !hay.includes(state.q)) return false
    return true
  }

  const apply = () => {
    const animate = !reducedMotion()
    const prevHeight = grid.offsetHeight
    const flipState = animate ? Flip.getState(cards) : null
    let visible = 0
    cards.forEach((card) => {
      const ok = matches(card)
      card.classList.toggle('is-hidden', !ok)
      if (ok) visible++
    })
    // Con absolute:true las cards salen del flujo y el grid colapsaría a 0 (el footer
    // subiría de golpe y las cards entrantes aparecerían ahí). Fijamos la altura previa
    // y la llevamos suavemente a la nueva.
    const nextHeight = grid.offsetHeight
    if (count) count.textContent = String(visible)
    if (empty) empty.classList.toggle('hidden', visible > 0)
    const active = state.difficulty !== 'all' || state.tags.size > 0 || !!state.q
    if (clear) clear.classList.toggle('hidden', !active)

    if (flipState) {
      gsap.set(grid, { height: prevHeight })
      gsap.to(grid, { height: nextHeight, duration: 0.6, ease: EASE_INOUT })
      Flip.from(flipState, {
        duration: 0.6,
        ease: EASE_INOUT,
        absolute: true,
        scale: true,
        stagger: 0.02,
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { autoAlpha: 0, scale: 0.94 },
            { autoAlpha: 1, scale: 1, duration: 0.5, ease: EASE_OUT }
          ),
        onLeave: (els) =>
          gsap.to(els, { autoAlpha: 0, scale: 0.94, duration: 0.3, ease: 'power2.in' }),
        onComplete: () => {
          gsap.set(grid, { clearProps: 'height' })
          ScrollTrigger.refresh()
        }
      })
    } else {
      ScrollTrigger.refresh()
    }
  }

  diffButtons.forEach((btn) =>
    on(btn, 'click', () => {
      state.difficulty = btn.dataset.filter || 'all'
      diffButtons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)))
      apply()
    })
  )
  tagButtons.forEach((btn) =>
    on(btn, 'click', () => {
      const tag = btn.dataset.tag || ''
      const pressed = btn.getAttribute('aria-pressed') === 'true'
      pressed ? state.tags.delete(tag) : state.tags.add(tag)
      btn.setAttribute('aria-pressed', String(!pressed))
      apply()
    })
  )
  if (search) {
    let t: number | undefined
    on(search, 'input', () => {
      window.clearTimeout(t)
      t = window.setTimeout(() => {
        state.q = search.value.trim().toLowerCase()
        apply()
      }, 120)
    })
  }
  if (clear) {
    on(clear, 'click', () => {
      state.difficulty = 'all'
      state.tags.clear()
      state.q = ''
      if (search) search.value = ''
      diffButtons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === 'all')))
      tagButtons.forEach((b) => b.setAttribute('aria-pressed', 'false'))
      apply()
    })
  }
}

/* ------------------------------------------------------------------ */
/* Página de detalle: cover hasta que carga el iframe, panel plegable   */
/* ------------------------------------------------------------------ */
function initDetail() {
  const frame = $<HTMLIFrameElement>('[data-demo]')
  const cover = $<HTMLElement>('[data-demo-cover]')
  if (frame && cover) {
    const hide = () => {
      gsap.to(cover, {
        autoAlpha: 0,
        duration: reducedMotion() ? 0.2 : 0.7,
        ease: 'power2.inOut',
        delay: 0.15,
        onComplete: () => cover.remove()
      })
    }
    // Si el iframe ya cargó (cache/bfcache) no esperamos.
    try {
      if (
        frame.contentDocument?.readyState === 'complete' &&
        frame.contentWindow?.location.href !== 'about:blank'
      )
        hide()
      else on(frame, 'load', hide, { once: true })
    } catch {
      on(frame, 'load', hide, { once: true })
    }
    // Red de seguridad: nunca dejamos el cover más de 6 s.
    const t = window.setTimeout(hide, 6000)
    cleanups.push(() => window.clearTimeout(t))
  }

  const panel = $<HTMLElement>('[data-panel]')
  const toggle = $<HTMLButtonElement>('[data-panel-toggle]')
  if (panel && toggle) {
    on(toggle, 'click', () => {
      const collapsed = panel.classList.toggle('is-collapsed')
      toggle.setAttribute('aria-expanded', String(!collapsed))
      const labelShow = toggle.dataset.labelShow || ''
      const labelHide = toggle.dataset.labelHide || ''
      const span = $<HTMLElement>('span', toggle)
      if (span) span.textContent = collapsed ? labelShow : labelHide
    })
  }
}

/* ------------------------------------------------------------------ */
/* Ciclo de vida                                                        */
/* ------------------------------------------------------------------ */
function initPage() {
  document.documentElement.classList.add('js')
  ctx = gsap.context(() => {
    initHero()
    initScrollReveals()
    initNav()
    initMagnetic()
    initTilt()
    initCardGlow()
    initCursor()
    initFilters()
    initDetail()
  })
  // ScrollTrigger necesita medir tras las fuentes.
  document.fonts?.ready.then(() => ScrollTrigger.refresh())
}

function teardown() {
  cleanups.splice(0).forEach((fn) => fn())
  ctx?.revert()
  ctx = null
  ScrollTrigger.getAll().forEach((t) => t.kill())
}

document.addEventListener('astro:page-load', initPage)
document.addEventListener('astro:before-swap', teardown)
