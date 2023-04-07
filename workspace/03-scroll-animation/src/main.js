import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import { frames } from './frames.js'

const frameImg = document.getElementById('car-frame')
let currentFrame = 0

// Actualiza la imagen del background según el índice
function updateImage(index) {
  if (frames[index]) {
    frameImg.src = frames[index].base64
  }
}

updateImage(currentFrame)

// 🎞️ Scroll controlado del flipbook del carro
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

// ✨ Hero animations
gsap.from('.title', {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: 'power2.out'
})

gsap.from('.subtitle', {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.3,
  ease: 'power2.out'
})

gsap.from('.hero-buttons .btn', {
  opacity: 0,
  scale: 0.9,
  stagger: 0.2,
  delay: 0.5,
  duration: 0.5,
  ease: 'back.out(1.7)'
})

// 🌌 Dream parallax visual
if (document.querySelector('.dream-visual')) {
  gsap.to('.dream-visual', {
    yPercent: -10,
    ease: 'none',
    scrollTrigger: {
      trigger: '.section--dream',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })
}

// 🚗 Animaciones de tarjetas
gsap.utils.toArray('.card--product').forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 0.6,
    delay: i * 0.1,
    ease: 'power2.out'
  })
})

// 🛠️ Servicios animados
gsap.utils.toArray('.service').forEach((el, i) => {
  gsap.from(el, {
    scrollTrigger: el,
    opacity: 0,
    y: 40,
    duration: 0.6,
    delay: i * 0.1,
    ease: 'power2.out'
  })
})

// 📣 Testimonio animado
gsap.from('.testimonial', {
  scrollTrigger: '.testimonial',
  opacity: 0,
  scale: 0.9,
  duration: 1,
  ease: 'back.out(1.5)'
})

// 🔘 Botón con glow continuo
const ctaBtn = document.querySelector('.btn--pulse')
if (ctaBtn) {
  gsap.to(ctaBtn, {
    boxShadow: '0 0 20px #00f0ff',
    repeat: -1,
    yoyo: true,
    duration: 1.2,
    ease: 'sine.inOut'
  })
}
