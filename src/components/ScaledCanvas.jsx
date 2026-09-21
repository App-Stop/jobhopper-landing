import { useLayoutEffect, useRef, useState } from 'react'

/**
 * Lays children out on a fixed Figma-pixel canvas (width × height) and scales
 * the whole canvas to fit the available width, so absolutely positioned
 * artwork keeps the exact proportions of the design at every size.
 */
export default function ScaledCanvas({ width, height, className = '', children }) {
  const ref = useRef(null)
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / width)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [width])

  return (
    <div
      ref={ref}
      className={`relative w-full ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{ width, height, transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  )
}
