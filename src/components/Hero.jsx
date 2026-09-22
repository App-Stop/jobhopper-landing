import { useRef } from 'react'
import { HardHat } from 'lucide-react'
import { gsap, EASE, useGsapReveal } from '../lib/gsap'
import { container, StoreBadges } from './ui'
import ScaledCanvas from './ScaledCanvas'
import { EnRouteCard, JobCompletedCard, TechnicianFoundCard } from './FloatingCards'
import circle from '../assets/hero/circle.svg'
import workerPerson from '../assets/hero/worker-person.png'
import workerPhone from '../assets/hero/worker-phone.png'
import customerPerson from '../assets/hero/customer-person.png'

/**
 * Hero artwork on the Figma 736 × 600 canvas. The "Worker" (1:83) and
 * "Customer" (1:106) views cross-fade on a 9s loop (hero-fade-* utilities)
 * while each floating modal bobs on its own (float-card).
 *
 * Modal offsets are each frame's absolute x/y inside the 736-wide canvas, so
 * ScaledCanvas reproduces the design exactly at every breakpoint.
 */
function HeroArt() {
  return (
    <ScaledCanvas width={736} height={600} className="overflow-hidden">
      <img src={circle} alt="" className="absolute top-[106px] left-0 size-[736px] max-w-none" />

      <div className="hero-fade-worker absolute inset-0">
        <img
          src={workerPerson}
          alt="A tradesperson reviewing a completed job and their payout in the JobHopper app"
          className="absolute top-0 left-[3px] h-[600px] w-[730px] max-w-none object-cover"
        />
        <div className="absolute top-[45.46px] left-[341.64px] flex h-[463.536px] w-[278.602px] items-center justify-center">
          <img
            src={workerPhone}
            alt=""
            className="h-[433.795px] w-[202.776px] max-w-none rotate-[10.52deg] rounded-[27px] object-cover"
          />
        </div>
        <JobCompletedCard style={{ left: 60, top: 303.1 }} />
      </div>

      <div className="hero-fade-customer absolute inset-0" aria-hidden="true">
        <img
          src={customerPerson}
          alt=""
          className="absolute top-0 left-[3px] h-[600px] w-[730px] max-w-none object-cover"
        />
        <TechnicianFoundCard style={{ left: 44, top: 145 }} />
        <EnRouteCard style={{ left: 538, top: 374 }} />
      </div>
    </ScaledCanvas>
  )
}

export default function Hero() {
  const scope = useRef(null)

  /**
   * On-load reveal: each piece of copy rises bottom-to-top one after the
   * other, the two store badges follow individually, and the artwork settles
   * in alongside them. `clearProps` hands the badges back to their Tailwind
   * hover transform once the intro has finished.
   */
  useGsapReveal(scope, () => {
    const tl = gsap.timeline({ defaults: { ease: EASE }, delay: 0.15 })

    tl.from('[data-hero-copy]', {
      y: 34,
      opacity: 0,
      duration: 0.8,
      stagger: 0.14,
      clearProps: 'transform,opacity',
    })
      .from(
        '[data-hero-badges] a',
        {
          y: 22,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          clearProps: 'transform,opacity',
        },
        '-=0.3',
      )
      .from(
        '[data-hero-art]',
        {
          y: 44,
          scale: 0.94,
          opacity: 0,
          duration: 1.2,
          clearProps: 'transform,opacity',
        },
        0.3,
      )
  })

  return (
    <section ref={scope} className="relative flex flex-col overflow-hidden bg-white xl:grow">
      <div
        className={`${container} grid items-center gap-12 pt-12 xl:grow lg:pt-15 xl:grid-cols-[minmax(0,1fr)_minmax(0,560px)] xl:gap-12 xl:pt-10 2xl:grid-cols-[minmax(0,750px)_minmax(0,680px)] 2xl:gap-14 2xl:pt-10`}
      >
        {/* At xl the copy is the taller column, so its bottom margin is what
            pushes the fold down — drop it there and keep it at 2xl, where the
            artwork is taller and the margin only nudges the copy off centre. */}
        <div className="mb-10 flex flex-col items-start justify-center gap-5 xl:mb-0 2xl:mb-10">
          <div
            data-hero-copy
            className="flex items-center gap-1.5 rounded-full bg-green-bg-soft px-2.5 py-1"
          >
            <HardHat className="size-5 shrink-0 text-green" strokeWidth={2.2} />
            <p className="text-[12px] font-semibold text-green sm:text-[13px]">
              Over 15,000+ Verified Workers Nearby
            </p>
          </div>

          {/* The 2xl max-width keeps the green "Trades & Services" on its own
              line, the way the Figma board breaks it — the column is wide
              enough that "Trades" would otherwise pull up to the line above. */}
          <h1
            data-hero-copy
            className="text-[36px] leading-[1.15] font-extrabold text-navy sm:text-[46px] lg:text-[54px] xl:text-[54px] 2xl:max-w-[720px] 2xl:text-[64px]"
          >
            The Two-Sided Marketplace for{' '}
            <span className="text-green">Trades &amp; Services</span>
          </h1>

          <p
            data-hero-copy
            className="max-w-[750px] text-[17px] leading-[28px] text-muted sm:text-[18px] lg:text-[20px] lg:leading-[32px]"
          >
            Need an emergency plumber tonight or a painter this weekend?
            JobHopper connects you with verified local professionals who compete
            for your job — so you get fair prices, fast.
          </p>

          <div data-hero-badges className="mt-1">
            <StoreBadges />
          </div>
        </div>

        <div
          data-hero-art
          className="mx-auto w-full max-w-[560px] self-end xl:max-w-none"
        >
          <HeroArt />
        </div>
      </div>
    </section>
  )
}
