import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

import { frames } from './frames.js'

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// 🛞 Buttery global scroll — pairs natively with the ScrollTriggers below
if (!prefersReducedMotion) {
  ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1.2,
    normalizeScroll: true,
    ignoreMobileResize: true
  })
}

// 🎞️ Scroll-scrubbed car flipbook
const frameImg = document.getElementById('car-frame')
let currentFrame = 0

function updateImage(index) {
  if (frames[index]) {
    frameImg.src = frames[index].base64
  }
}

updateImage(currentFrame)

ScrollTrigger.create({
  trigger: '#content',
  start: 'top top',
  end: 'bottom bottom',
  scrub: true,
  onUpdate: (self) => {
    const index = Math.floor(self.progress * (frames.length - 1))
    if (index !== currentFrame) {
      currentFrame = index
      updateImage(index)
    }
  }
})

// 📏 Top scroll-progress bar
gsap.to('.scroll-progress', {
  scaleX: 1,
  ease: 'none',
  scrollTrigger: {
    trigger: '#content',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true
  }
})

// 🧭 Header background once the hero is scrolled past
ScrollTrigger.create({
  trigger: '.section--hero',
  start: 'bottom top',
  onEnter: () => document.getElementById('header').classList.add('header--scrolled'),
  onLeaveBack: () => document.getElementById('header').classList.remove('header--scrolled')
})

// ✨ Hero intro — plays once on load, never on scroll (it's above the fold)
const heroTimeline = gsap.timeline({ delay: 0.2 })
heroTimeline
  .from('.hero__kicker', { opacity: 0, y: 12, duration: 0.6, ease: 'power2.out' })
  .from(
    '.hero__line',
    { opacity: 0, yPercent: 100, duration: 0.9, stagger: 0.12, ease: 'power3.out' },
    '-=0.3'
  )
  .from('.hero__subtitle', { opacity: 0, y: 16, duration: 0.7, ease: 'power2.out' }, '-=0.4')
  .from(
    '.hero__ctas .btn',
    { opacity: 0, y: 16, stagger: 0.1, duration: 0.6, ease: 'power2.out' },
    '-=0.5'
  )
  .from('.hero__scroll-cue', { opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')

// 🪄 Word-by-word reveal for section headings (triggered once, entering viewport)
document.querySelectorAll('.reveal-words').forEach((heading) => {
  const words = heading.textContent.trim().split(/\s+/)
  heading.innerHTML = words
    .map(
      (word) =>
        `<span class="reveal-word-mask"><span class="reveal-word">${word}</span></span>&nbsp;`
    )
    .join('')

  gsap.from(heading.querySelectorAll('.reveal-word'), {
    opacity: 0,
    yPercent: 100,
    duration: 0.7,
    stagger: 0.06,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: heading,
      start: 'top 85%',
      once: true
    }
  })
})

// 🌌 Dream section parallax visual (kept within a ~10% differential)
if (document.querySelector('.dream__visual')) {
  gsap.from('.dream__visual', {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.dream__visual',
      start: 'top 85%',
      once: true
    }
  })

  if (!prefersReducedMotion) {
    gsap.to('.dream__visual', {
      yPercent: -8,
      ease: 'none',
      scrollTrigger: {
        trigger: '.section--dream',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
  }
}

gsap.utils.toArray('.dream__benefit').forEach((el, i) => {
  gsap.from(el, {
    opacity: 0,
    y: 24,
    duration: 0.6,
    delay: i * 0.08,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 90%',
      once: true
    }
  })
})

// 🏁 Models — pinned horizontal gallery on desktop, native scroll-snap on mobile
const modelsMatch = gsap.matchMedia()

modelsMatch.add('(min-width: 901px)', () => {
  const track = document.querySelector('.models__track')
  if (!track) return

  const getScrollDistance = () => track.scrollWidth - window.innerWidth
  // Stretch the pin beyond the raw overflow so each wheel tick only advances
  // the cards a little. Keep the x-mapping itself linear — an eased curve on
  // a scrubbed transform makes the middle of the drag race ahead of the
  // eased edges, which reads as a jump, not a smoother motion.
  const getPinDistance = () => getScrollDistance() * 1.4

  const trigger = ScrollTrigger.create({
    trigger: '.models__pin',
    start: 'top top',
    end: () => `+=${getPinDistance()}`,
    pin: true,
    scrub: 0.5,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    animation: gsap.to(track, {
      x: () => -getScrollDistance(),
      ease: 'none'
    })
  })

  return () => trigger.kill()
})

gsap.utils.toArray('.service-row').forEach((row, i) => {
  gsap.from(row, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    delay: i * 0.08,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: row,
      start: 'top 90%',
      once: true
    }
  })
})

// 📣 Testimonial
gsap.from('.testimonial', {
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.testimonial',
    start: 'top 85%',
    once: true
  }
})

// 🧲 Magnetic buttons
if (!prefersReducedMotion) {
  document.querySelectorAll('[data-magnetic]').forEach((btn) => {
    const moveX = gsap.quickTo(btn, 'x', { duration: 0.5, ease: 'power3.out' })
    const moveY = gsap.quickTo(btn, 'y', { duration: 0.5, ease: 'power3.out' })

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect()
      const relX = e.clientX - (rect.left + rect.width / 2)
      const relY = e.clientY - (rect.top + rect.height / 2)
      moveX(relX * 0.35)
      moveY(relY * 0.35)
    })

    btn.addEventListener('mouseleave', () => {
      moveX(0)
      moveY(0)
    })
  })
}
