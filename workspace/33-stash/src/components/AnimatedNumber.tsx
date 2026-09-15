import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Counts from the previously shown figure up to the new one. Driven by rAF
 * rather than a CSS transition because the value is text, not a style.
 */
export function useCountUp(target: number, duration = 750): number {
  // Starts at zero so the figure counts up on mount, not only when it
  // later changes. `shownRef` tracks what is actually on screen, so a run
  // interrupted mid-count resumes from there instead of a stale origin.
  const [display, setDisplay] = useState(0)
  const shownRef = useRef(0)
  const frameRef = useRef(0)

  useEffect(() => {
    if (prefersReducedMotion()) {
      shownRef.current = target
      setDisplay(target)
      return
    }

    const from = shownRef.current
    if (from === target) return

    const start = performance.now()
    // easeOutCubic: quick to read, settles gently.
    const ease = (t: number) => 1 - Math.pow(1 - t, 3)

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      const value = from + (target - from) * ease(progress)
      shownRef.current = value
      setDisplay(value)
      if (progress < 1) frameRef.current = requestAnimationFrame(tick)
    }

    frameRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameRef.current)
  }, [target, duration])

  return display
}

export function AnimatedMoney({
  value,
  format
}: {
  value: number
  format: (value: number) => string
}) {
  const shown = useCountUp(value)
  // Tabular figures keep the text from jittering while the digits change.
  return <span className="tabular">{format(shown)}</span>
}
