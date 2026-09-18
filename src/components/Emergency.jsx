import { Check } from 'lucide-react'
import { Button, container, Eyebrow } from './ui'
import brokenPipe from '../assets/broken-pipe.png'
import { useDownloadModal } from './downloadModalContext'

const features = [
  'Review trust scores and job completion rates before hiring',
  'Instantly compare bid prices with detailed breakdown',
  'See background checks and certifications on every profile',
]

export default function Emergency() {
  const openModal = useDownloadModal()
  return (
    <section className="bg-navy py-16 xl:py-20 2xl:py-0">
      <div
        className={`${container} flex flex-col items-center gap-12 xl:min-h-[640px] 2xl:min-h-[800px] xl:flex-row xl:gap-16 2xl:gap-[120px]`}
      >
        <div className="order-2 flex min-w-0 flex-1 flex-col items-start justify-center gap-8 lg:gap-10 xl:order-1">
          <Eyebrow variant="green">Emergency Service</Eyebrow>

          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] font-extrabold text-white sm:text-[34px] lg:text-[40px]">
              Broken Pipe at Midnight?
              <br />
              Help Is Close.
            </h2>
            <p className="text-[16px] leading-[26px] text-blue-bg-soft sm:text-[18px]">
              Mark your job as urgent and nearby professionals are notified
              instantly. Within minutes, track your technician on the map as
              they head to you.
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <Check
                  className="size-6 shrink-0 text-green"
                  strokeWidth={2.75}
                />
                <span className="text-[15px] font-semibold text-white sm:text-[16px]">
                  {f}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-5">
            <Button variant="green" arrow onClick={openModal}>
              Download &amp; Book Now
            </Button>
            <Button variant="outline" onClick={openModal}>How It Works</Button>
          </div>
        </div>

        {/* Figma node 1:326 — tracking screen and both modals as one frame */}
        <img
          src={brokenPipe}
          alt="Tracking an emergency technician en route in the JobHopper app"
          className="order-1 w-full max-w-[560px] object-contain lg:max-w-[700px] xl:order-2 xl:max-w-[600px] 2xl:max-w-[838px]"
        />
      </div>
    </section>
  )
}
