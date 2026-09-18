import { container, StoreBadges } from './ui'
import getStarted from '../assets/get-started.png'
import qrCode from '../assets/qr-code.png'

export default function GetStarted() {
  return (
    <section className="bg-navy-band py-16 lg:py-20">
      <div
        className={`${container} flex flex-col items-center gap-12 xl:flex-row xl:gap-[60px] 2xl:px-[300px]`}
      >
        <div className="flex min-w-0 flex-1 flex-col items-start gap-10 2xl:gap-[60px]">
          <div className="flex flex-col gap-4">
            <h2 className="max-w-[869px] text-[32px] font-extrabold text-white sm:text-[40px] lg:text-[44px] 2xl:text-[48px]">
              Get Started — Choose How You&apos;ll Use JobHopper
            </h2>
            <p className="text-[18px] leading-[26px] text-blue-bg-soft sm:text-[22px] lg:text-[24px]">
              You can switch between customer and provider anytime.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8 lg:gap-10">
            {/* Figma node 1:449 (164 × 164) */}
            <img
              src={qrCode}
              alt="QR code to download the JobHopper app"
              className="size-[140px] shrink-0 object-contain sm:size-[164px]"
            />
            <StoreBadges size="lg" />
          </div>
        </div>

        {/* Figma node 1:814 — both tilted device mockups as one frame */}
        <img
          src={getStarted}
          alt="The JobHopper app shown on two phones"
          className="w-full max-w-[300px] shrink-0 object-contain sm:max-w-[360px] lg:max-w-[380px] 2xl:max-w-[437px]"
        />
      </div>
    </section>
  )
}
