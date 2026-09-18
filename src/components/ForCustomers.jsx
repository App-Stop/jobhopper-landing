import { Check } from 'lucide-react'
import { AvailableOn, Button, container, Eyebrow } from './ui'
import forCustomers from '../assets/for-customers.png'
import { useDownloadModal } from './downloadModalContext'

const features = [
  'Review trust scores and job completion rates before hiring',
  'Instantly compare bid prices with detailed breakdown',
  'See background checks and certifications on every profile',
]

export default function ForCustomers() {
  const openModal = useDownloadModal()
  return (
    <section className="bg-blue-bg-soft py-16 xl:py-20 2xl:py-0">
      <div
        className={`${container} flex flex-col items-center gap-12 xl:min-h-[640px] 2xl:min-h-[800px] xl:flex-row xl:gap-16 2xl:gap-[120px]`}
      >
        {/* Figma node 1:262 — photo and in-app card exported as one frame */}
        <img
          src={forCustomers}
          alt="A verified professional alongside their in-app JobHopper profile card"
          className="w-full max-w-[380px] shrink-0 object-contain lg:max-w-[440px] xl:max-w-[440px] 2xl:max-w-[529px]"
        />

        <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-8 lg:gap-10">
          <Eyebrow variant="outline">for customers</Eyebrow>

          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] font-extrabold text-navy sm:text-[34px] lg:text-[40px]">
              Every Professional, Background-Checked Before You See Them
            </h2>
            <p className="text-[16px] leading-[26px] text-muted sm:text-[18px]">
              Every professional on JobHopper passes identity verification,
              background screening, and credential checks before they can bid.
              You see their completion rate, customer reviews, and
              certifications upfront — then they compete on price.
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <Check
                  className="size-6 shrink-0 text-green"
                  strokeWidth={2.75}
                />
                <span className="text-[15px] font-semibold text-navy sm:text-[16px]">
                  {f}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-6 lg:gap-10">
            <Button variant="navy" arrow onClick={openModal}>
              Find a Professional
            </Button>
            <AvailableOn />
          </div>
        </div>
      </div>
    </section>
  )
}
