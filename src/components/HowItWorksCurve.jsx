/**
 * Dashed flight path looping between the "How It Works" steps (Figma node
 * 1:255). Inlined rather than loaded as an <img> so the stroke can be drawn
 * on scroll.
 *
 * The artwork is two disjoint arcs: segment 1 loops out to the right between
 * steps 1 and 2, segment 2 loops out to the left between steps 2 and 3. Each
 * is drawn twice — a solid wide copy inside a <mask>, and the real dashed
 * stroke underneath it. Animating the mask copy's stroke-dashoffset wipes the
 * dashed line into view while its 15/22 dash pattern stays put, which a plain
 * dashoffset tween on the dashed stroke itself could not do (the dashes would
 * march along the path instead).
 */
const SEGMENTS = [
  'M1093 0.993815C1181 10.8271 1339.5 73.5938 1339.5 291.994C1339.5 510.394 1175.17 617.16 1093 622.994',
  'M231.499 622.994C128 622.994 1 729.394 1 914.994C1 1100.59 192.666 1191.99 288.499 1192.99',
]

export default function HowItWorksCurve({ className = '' }) {
  return (
    <svg
      viewBox="0 0 1340.5 1193.99"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ overflow: 'visible' }}
    >
      <defs>
        <mask id="hiw-curve-reveal" maskUnits="userSpaceOnUse">
          {SEGMENTS.map((d, i) => (
            <path
              key={d}
              d={d}
              data-curve-mask={i + 1}
              stroke="white"
              strokeWidth="12"
              fill="none"
            />
          ))}
        </mask>
      </defs>

      <g mask="url(#hiw-curve-reveal)" opacity="0.6">
        {SEGMENTS.map((d) => (
          <path
            key={d}
            d={d}
            stroke="#1E3A5F"
            strokeWidth="2"
            strokeDasharray="15 22"
            fill="none"
          />
        ))}
      </g>
    </svg>
  )
}
