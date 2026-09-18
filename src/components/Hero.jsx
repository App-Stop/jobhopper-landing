import { HardHat } from 'lucide-react'
import { container, StoreBadges } from './ui'
import heroWorker from '../assets/hero-worker.png'
import heroCustomer from '../assets/hero-customer.png'

/**
 * The hero artwork is two full-frame exports that cross-fade — the "Worker"
 * view (Figma node 1:83) and the "Customer" view (1:106). Each export already
 * contains its backdrop circle, phone and floating modals, so nothing is
 * layered on top here; the timing lives in the hero-fade-* utilities.
 */
function HeroArt() {
  return (
    <div className="relative aspect-[736/600] w-full">
      <img
        src={heroWorker}
        alt="A tradesperson reviewing a completed job and their payout in the JobHopper app"
        className="hero-fade-worker absolute inset-0 size-full object-contain"
      />
      <img
        src={heroCustomer}
        alt="A customer matched with a nearby verified technician in the JobHopper app"
        aria-hidden="true"
        className="hero-fade-customer absolute inset-0 size-full object-contain"
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className={`${container} grid items-center gap-12 pt-12 lg:pt-15 xl:grid-cols-[minmax(0,1fr)_minmax(0,560px)] xl:gap-12 xl:pt-15 2xl:grid-cols-[minmax(0,750px)_minmax(0,736px)] 2xl:gap-16 2xl:pt-[90px]`}
      >
        <div className="flex flex-col items-start justify-center gap-5 mb-10">
          <div className="flex items-center gap-1.5 rounded-full bg-green-bg-soft px-2.5 py-1">
            <HardHat className="size-5 shrink-0 text-green" strokeWidth={2.2} />
            <p className="text-[12px] font-semibold text-green sm:text-[13px]">
              Over 15,000+ Verified Workers Nearby
            </p>
          </div>

          <h1 className="text-[36px] leading-[1.15] font-extrabold text-navy sm:text-[46px] lg:text-[54px] xl:text-[54px] 2xl:text-[64px]">
            The Two-Sided Marketplace for{' '}
            <span className="text-green">Trades &amp; Services</span>
          </h1>

          <p className="max-w-[750px] text-[17px] leading-[28px] text-muted sm:text-[18px] lg:text-[20px] lg:leading-[32px]">
            Need an emergency plumber tonight or a painter this weekend?
            JobHopper connects you with verified local professionals who compete
            for your job — so you get fair prices, fast.
          </p>

          <StoreBadges className="mt-1" />
        </div>

        <div className="mx-auto w-full max-w-[560px] self-end xl:max-w-none">
          <HeroArt />
        </div>
      </div>
    </section>
  )
}
