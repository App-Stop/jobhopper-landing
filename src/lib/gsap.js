import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

/** Shared easing so every reveal on the page feels like one system. */
export const EASE = 'power3.out'

/** Honour the OS "reduce motion" setting — no reveals, nothing hidden. */
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Runs `build` inside a gsap.context scoped to `scopeRef`, so every tween and
 * ScrollTrigger created in it is reverted on unmount (and the inline styles
 * GSAP wrote are cleaned up with it).
 *
 * `build` is skipped entirely when the visitor asked for reduced motion, which
 * is why the initial hidden state is set by GSAP rather than in the markup.
 */
export function useGsapReveal(scopeRef, build, deps = []) {
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return
    const ctx = gsap.context(build, scopeRef)
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

/** Horizontal travel for the split sections, and vertical for the stacked ones. */
const SHIFT = 64
const RISE = 40

/**
 * The alternating "artwork on one side, copy on the other" sections
 * (For Customers, Emergency Service, For Workers).
 *
 * Both halves start in the same timeline position, so the artwork and the copy
 * cross in from opposite edges together. `side` is which edge the ARTWORK
 * comes from; the copy always comes from the other one. The copy's direct
 * children stagger, so the eyebrow, heading, checklist and buttons arrive in
 * reading order rather than as one slab.
 *
 * Artwork is animated as a single wrapper on purpose: in Emergency the phone
 * and its two floating modals are separate nodes, and moving the wrapper keeps
 * them in sync while leaving their CSS `float-card` bob untouched.
 */
export function revealSplit({ trigger, art, copy, side = 'left' }) {
  const from = side === 'left' ? -SHIFT : SHIFT
  const clearProps = 'transform,opacity'

  return gsap
    .timeline({
      defaults: { ease: EASE, clearProps },
      scrollTrigger: { trigger, start: 'top 70%' },
    })
    .from(art, { x: from, opacity: 0, duration: 1 }, 0)
    .from(
      copy,
      { x: -from, opacity: 0, duration: 0.9, stagger: 0.12 },
      0,
    )
}

/**
 * The stacked sections (Institutional Safety, the closing CTA): a heading
 * block rises first, then the items below it rise one after the other.
 */
export function revealStack({ trigger, head, items, start = 'top 75%' }) {
  const clearProps = 'transform,opacity'

  const tl = gsap.timeline({
    defaults: { ease: EASE, clearProps },
    scrollTrigger: { trigger, start },
  })

  tl.from(head, { y: RISE, opacity: 0, duration: 0.8, stagger: 0.12 })

  if (items) {
    tl.from(
      items,
      { y: RISE + 8, opacity: 0, duration: 0.8, stagger: 0.16 },
      '-=0.4',
    )
  }

  return tl
}

export { gsap, ScrollTrigger }
