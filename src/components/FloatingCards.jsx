import avatar from '../assets/hero/avatar.png'
import checkBadge from '../assets/hero/icon-check-badge.svg'
import star from '../assets/hero/icon-star.svg'
import pin from '../assets/hero/icon-pin.svg'
import enroute from '../assets/hero/icon-enroute.svg'
import plane from '../assets/emergency/icon-plane.svg'

/**
 * Exported card images from Figma (src/assets/cards/card-*.png, 2x, no shadow).
 * When a card's image exists it replaces the coded fallback below.
 */
const exported = Object.fromEntries(
  Object.entries(
    import.meta.glob('../assets/cards/card-*.png', { eager: true, import: 'default' }),
  ).map(([path, url]) => [path.match(/card-([\w-]+)\.png$/)[1], url]),
)

/**
 * The small in-app modals that float over the hero and emergency artwork.
 * All sizes are the Figma pixel values — the parent canvases scale as a whole.
 * `lift` is the float amplitude from the Figma timeline (6 / 5 / 4 px).
 */
function Card({ name, alt, className = '', style, lift = 5, children }) {
  const floatStyle = { '--float': `-${lift}px`, ...style }
  if (exported[name]) {
    return (
      <img
        src={exported[name]}
        alt={alt}
        className={`float-card absolute w-[180px] max-w-none drop-shadow-[0px_4px_40px_rgba(0,0,0,0.16)] ${className}`}
        style={floatStyle}
      />
    )
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className={`float-card absolute flex w-[180px] flex-col items-center gap-[10px] rounded-[12px] border-[0.4px] border-chip bg-white p-[8px] drop-shadow-[0px_4px_40px_rgba(0,0,0,0.16)] ${className}`}
      style={floatStyle}
    >
      {children}
    </div>
  )
}

function Row({ label, value, valueClass = 'font-medium text-ink' }) {
  return (
    <div className="flex w-full items-center justify-between">
      <p className="text-[8px] text-ink">{label}</p>
      <p className={`text-right ${valueClass}`}>{value}</p>
    </div>
  )
}

const detailBox =
  'flex w-full flex-col items-start gap-[6px] rounded-[8px] bg-chip p-[6.4px] text-[8px] whitespace-nowrap'

/** Figma 1:88 */
export function JobCompletedCard(props) {
  return (
    <Card name="job-completed" alt="Job completed — funds added to your account" lift={6} {...props}>
      <div className="flex w-full items-center gap-[6px]">
        <img src={checkBadge} alt="" className="size-[24px] shrink-0" />
        <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
          <p className="text-[10px] font-semibold text-ink-soft">Job Completed</p>
          <p className="text-[8px] leading-[9px] text-ink">
            Funds have been added to your account.
          </p>
        </div>
      </div>
      <div className={detailBox}>
        <Row label="Job" value="Kitchen Sink Leaking" />
        <Row label="Earning" value="$120" valueClass="font-bold text-green" />
        <Row label="Customer" value="Martin Alex" />
      </div>
    </Card>
  )
}

/** Figma 1:110 / 1:328 */
export function TechnicianFoundCard(props) {
  return (
    <Card name="technician-found" alt="Technician found — Martin Alex, 0.8 miles away" lift={5} {...props}>
      <p className="w-full text-center text-[10px] font-semibold text-ink-soft">
        Technician Found
      </p>
      <div className="flex w-full items-center gap-[10px]">
        <img src={avatar} alt="" className="size-[30px] shrink-0 rounded-full" />
        <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
          <p className="text-[10px] font-medium text-ink-soft">Martin Alex</p>
          <div className="flex items-center gap-[3px] text-[7.2px] whitespace-nowrap text-ink">
            <img src={star} alt="" className="h-[8.559px] w-[9px]" />
            <span>
              <span className="font-semibold">4.9 </span>(247)
            </span>
            <span className="font-medium">92 trust Score</span>
          </div>
          <div className="flex items-center gap-[1.8px]">
            <img src={pin} alt="" className="h-[8px] w-[6px]" />
            <span className="text-[7.2px] whitespace-nowrap text-navy">
              0.8 miles away
            </span>
          </div>
        </div>
      </div>
      <div className={detailBox}>
        <Row label="Job" value="Kitchen Sink Leaking" />
        <Row label="Offered" value="$120" valueClass="text-[10px] font-bold text-green" />
      </div>
      <div className="flex w-full justify-center rounded-[30px] bg-green py-[6px] text-[8px] font-bold text-white">
        Accept
      </div>
    </Card>
  )
}

/** Figma 1:132 */
export function EnRouteCard(props) {
  return (
    <Card name="en-route" alt="Technician en route, arriving in 12 minutes" lift={4} {...props}>
      <div className="flex w-full items-center gap-[6px]">
        <img src={enroute} alt="" className="size-[26px] shrink-0" />
        <div className="flex min-w-0 flex-1 flex-col gap-[4px]">
          <p className="text-[10px] font-semibold text-ink-soft">Technician en route</p>
          <p className="text-[8px] whitespace-nowrap text-muted">Arriving in 12 minutes</p>
        </div>
      </div>
    </Card>
  )
}

/** Figma 1:350 */
export function UrgentRequestCard(props) {
  return (
    <Card name="urgent-request" alt="Urgent request sent — waiting for a technician" lift={5} {...props}>
      <img src={plane} alt="" className="size-[40px]" />
      <div className="flex w-full flex-col gap-[4px] text-center text-ink">
        <p className="text-[12px] font-semibold text-ink-soft">Urgent Request Sent!</p>
        <p className="text-[8px] leading-[8.8px]">Waiting for technician to respond...</p>
      </div>
      <div className="flex w-full flex-col gap-[4px] text-center text-ink">
        <p className="text-[6px] leading-[8.8px]">Remaining time</p>
        <p className="text-[12px] font-semibold">02:00</p>
      </div>
      <div className="flex h-[25.6px] w-full items-center justify-center rounded-[12px] bg-blue-bg-soft text-[8px] font-bold text-navy">
        Cancel Request
      </div>
    </Card>
  )
}
