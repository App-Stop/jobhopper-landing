import { ArrowRight } from 'lucide-react'
import availableOn from '../assets/available-on.png'
import appStore from '../assets/app-store.png'
import playStore from '../assets/play-store.png'
import { useDownloadModal } from './downloadModalContext'

/**
 * Horizontal page rhythm. The Figma board is 1920px wide with a 200px gutter,
 * giving a 1520px content column. Below that the gutter steps down.
 */
export const container =
  'mx-auto w-full max-w-[1920px] px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-[200px]'

/** Pill label that sits above every section heading. */
export function Eyebrow({ children, variant = 'blue' }) {
  const variants = {
    blue: 'bg-blue-bg-soft text-navy',
    outline: 'border border-navy text-navy',
    green: 'bg-green text-white',
  }
  return (
    <span
      className={`inline-flex shrink-0 rounded-full px-4 py-2 text-[13px] font-bold tracking-wide uppercase sm:text-[14px] ${variants[variant]}`}
    >
      {children}
    </span>
  )
}

const buttonVariants = {
  navy: 'bg-navy text-white',
  green: 'bg-green text-white',
  outline: 'border-2 border-white text-white',
  'outline-navy': 'border-2 border-navy bg-navy text-white',
}

export function Button({
  children,
  variant = 'navy',
  arrow = false,
  className = '',
  as: Tag = 'button',
  ...rest
}) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-bold whitespace-nowrap transition-transform duration-200 hover:-translate-y-0.5 sm:px-8 sm:py-4 sm:text-[16px] ${buttonVariants[variant]} ${className}`}
      {...rest}
    >
      {children}
      {arrow && <ArrowRight className="size-5 shrink-0" strokeWidth={2.25} />}
    </Tag>
  )
}

/** "Available on  [android] [apple]" cluster. */
export function AvailableOn() {
  return (
    <div className="flex items-center gap-2.5">
      <p className="text-[16px] leading-[26px] text-muted sm:text-[18px]">
        Available on
      </p>
      <img
        src={availableOn}
        alt="Google Play and App Store"
        className="h-7 w-auto shrink-0 sm:h-8"
      />
    </div>
  )
}

/**
 * App Store / Google Play badges.
 * `size` maps the two sizes used in the design (hero vs. closing CTA).
 */
export function StoreBadges({ size = 'md', className = '', opensModal = true }) {
  const openModal = useDownloadModal()
  const lg = size === 'lg'
  const badge = lg ? 'h-[56px] 2xl:h-[68px]' : 'h-[48px] sm:h-[52px] 2xl:h-[56px]'
  const badges = [
    { src: playStore, label: 'Get it on Google Play' },
    { src: appStore, label: 'Download on the App Store' },
  ]

  return (
    <div
      className={`flex flex-wrap items-center gap-2.5 ${lg ? 'flex-col items-start gap-4 2xl:gap-[26px]' : ''} ${className}`}
    >
      {badges.map(({ src, label }) => (
        <a
          key={label}
          href="#"
          onClick={opensModal ? openModal : undefined}
          className="shrink-0 transition-transform duration-200 hover:-translate-y-0.5"
        >
          <img src={src} alt={label} className={`${badge} w-auto`} />
        </a>
      ))}
    </div>
  )
}
