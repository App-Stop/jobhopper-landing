import { useLayoutEffect } from 'react'
import { ScrollTrigger } from './gsap'

/**
 * Publishes `--fold` on #root: the exact height the first screen (hero + the
 * "what do you need help with" band) has to be so that the band ends flush
 * with the bottom of the viewport, with no white strip below it.
 *
 * Two corrections are needed to get it exact:
 *
 * 1. #root carries a CSS `zoom` (set by the script in index.html, which scales
 *    the 1920px Figma board down to the window). `zoom` scales every length
 *    inside #root, so the viewport height is divided back out by that factor
 *    to express it in the units the layout is authored in. `clientHeight` is
 *    the real viewport and is not affected by the zoom; `getBoundingClientRect`
 *    on an element inside #root *is*, hence the matching division there.
 * 2. The header is `sticky top-0`, so at rest it still occupies its space at
 *    the top of the flow and its height comes off the total.
 *
 * The var is only consumed from xl up (see App), so below that the sections
 * keep their natural, stacked heights.
 */
export function useFoldHeight() {
  useLayoutEffect(() => {
    const root = document.getElementById('root')
    if (!root) return

    const apply = () => {
      const zoom = parseFloat(getComputedStyle(root).zoom) || 1
      const header = root.querySelector('header')
      const headerH = header ? header.getBoundingClientRect().height / zoom : 0
      root.style.setProperty(
        '--fold',
        `${document.documentElement.clientHeight / zoom - headerH}px`,
      )
      // This runs after the child components have built their ScrollTriggers,
      // and it changes the height of the hero, so every start/end below it
      // needs re-measuring.
      ScrollTrigger.refresh()
    }

    apply()
    // The zoom script in index.html registered its listener first, so by the
    // time this one runs the new zoom factor is already applied.
    window.addEventListener('resize', apply)
    return () => window.removeEventListener('resize', apply)
  }, [])
}
