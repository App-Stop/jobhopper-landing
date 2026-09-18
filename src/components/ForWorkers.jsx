import { Check } from 'lucide-react'
import { AvailableOn, Button, container, Eyebrow } from './ui'
import forWorkers from '../assets/for-workers.png'
import { useDownloadModal } from './downloadModalContext'

const benefits = [
  'Set your own hourly rate or bid on preset flat budgets',
  'Withdraw earnings directly to your bank next-day',
  'Build a verified reputation with reviews that follow you',
]

export default function ForWorkers() {
  const openModal = useDownloadModal()
  return (
    <section className="bg-green-bg-soft py-16 xl:py-20 2xl:py-0">
      <div
        className={`${container} flex flex-col items-center gap-12 xl:min-h-[640px] 2xl:min-h-[800px] xl:flex-row xl:gap-16 2xl:gap-[120px]`}
      >
        {/* Figma node 1:365 — both worker app screens as one frame */}
        <img
          src={forWorkers}
          alt="Browsing available jobs and tracking earnings in the JobHopper app"
          className="w-full max-w-[460px] shrink-0 object-contain lg:max-w-[540px] xl:max-w-[500px] 2xl:max-w-[617px]"
        />

        <div className="flex min-w-0 flex-1 flex-col items-start gap-6 lg:gap-8">
          <Eyebrow variant="outline">For Workers</Eyebrow>

          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] font-extrabold text-navy sm:text-[34px] lg:text-[40px]">
              Pick Your Jobs. Set Your Rate.
              <br />
              Keep Your Earnings.
            </h2>
            <p className="text-[16px] leading-[26px] text-muted sm:text-[18px]">
              Browse local jobs with upfront budgets, bid your price, and get
              paid directly — no percentage cuts, just a flat booking fee. Your
              earnings go straight to your wallet.
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <Check
                  className="size-5 shrink-0 text-green"
                  strokeWidth={2.75}
                />
                <span className="text-[15px] font-semibold text-navy sm:text-[16px]">
                  {b}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-6 lg:gap-8">
            <Button variant="green" arrow onClick={openModal}>
              Sign Up as a Service Provider
            </Button>
            <AvailableOn />
          </div>
        </div>
      </div>
    </section>
  )
}
