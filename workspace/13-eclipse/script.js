const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const themeSwitch = document.getElementById('theme-switch')

function applyTheme(isDark) {
  document.documentElement.classList.toggle('dark', isDark)
  localStorage.setItem('eclipse-theme', isDark ? 'dark' : 'light')
}

function toggleTheme(event) {
  const goingDark = !document.documentElement.classList.contains('dark')

  const canAnimate =
    !prefersReducedMotion &&
    typeof document.startViewTransition === 'function' &&
    event.clientX !== undefined

  if (!canAnimate) {
    applyTheme(goingDark)
    return
  }

  // El barrido circular parte del botón, no del centro de la pantalla —
  // así se siente como si el nuevo tema realmente saliera del switch.
  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  )

  const transition = document.startViewTransition(() => applyTheme(goingDark))

  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
      },
      {
        duration: 550,
        easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
        pseudoElement: '::view-transition-new(root)'
      }
    )
  })
}

themeSwitch.addEventListener('click', toggleTheme)
