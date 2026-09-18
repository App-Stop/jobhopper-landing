import { container, Eyebrow } from './ui'
import app1 from '../assets/app1.png'
import app2 from '../assets/app2.png'
import app3 from '../assets/app3.png'
import app4 from '../assets/app4.png'
import app5 from '../assets/app5.png'
import app6 from '../assets/app6.png'
import app7 from '../assets/app7.png'
import app8 from '../assets/app8.png'
import app9 from '../assets/app9.png'
import curve from '../assets/how-it-works-curve.svg'
import planeIcon from '../assets/icon-plane.svg'

const steps = [
  {
    n: 1,
    title: 'Browse & Post',
    body: 'Select from categories like plumbing, electrical, and painting. Describe your problem and set your target budget.',
    shots: [app1, app2, app3],
  },
  {
    n: 2,
    title: 'Get Matched Instantly',
    body: 'Verified professionals nearby see your job and send bids. Compare their ratings, past work, and prices before you choose.',
    shots: [app4, app5, app6],
  },
  {
    n: 3,
    title: 'Secure Payment & Done',
    body: 'Hire your professional with one click. Pay securely through the app and get the job completed.',
    shots: [app7, app8, app9],
  },
]

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-[120px]">
      <div className={container}>
        <div className="mx-auto flex max-w-[1520px] flex-col items-center gap-4">
          <Eyebrow>How It Works</Eyebrow>
          <h2 className="text-center text-[28px] font-extrabold text-navy sm:text-[34px] lg:text-[40px]">
            Simple. Transparent. Verified.
          </h2>
          <p className="max-w-[760px] text-center text-[16px] text-muted sm:text-[18px]">
            Post a job, compare verified professionals, and pay securely — all
            in one place.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-[900px] xl:max-w-[766px] lg:mt-[100px]">
          <ol className="relative flex flex-col gap-16 lg:gap-20">
            {/* Dashed flight path looping between the steps (Figma node 1:255),
                ending at a paper-plane marker beside step 3 (node 1:256).
                The SVG stretches horizontally, so laptops get a narrower loop. */}
            <img
              src={curve}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute top-[302px] left-[-250px] hidden h-[1192px] w-[1273px] max-w-none xl:block min-[1440px]:left-[-271px] min-[1440px]:w-[1338px]"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-[1468px] left-[31px] hidden size-[44px] place-items-center xl:grid min-[1440px]:left-[25px]"
            >
              <img src={planeIcon} alt="" className="size-8 rotate-[33.75deg]" />
            </span>
            {/* Blue track + dashed spine threading the step markers (node 1:80)
                is drawn per step in the marker column below. */}

            {steps.map(({ n, title, body, shots }, i) => (
              <li
                key={n}
                className="relative flex flex-col gap-6 sm:flex-row sm:gap-8 lg:gap-[60px]"
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute top-0 left-[9px] hidden w-9 bg-blue-bg-soft sm:block ${i === 0 ? 'rounded-t-full' : ''} ${i === steps.length - 1 ? 'h-[54px] rounded-b-full' : '-bottom-16 lg:-bottom-20'}`}
                >
                  <span className="absolute inset-x-0 top-0 bottom-0 mx-auto w-0.5 bg-[repeating-linear-gradient(to_bottom,rgb(30_58_95/0.1)_0_15px,transparent_15px_37px)]" />
                </span>
                <div className="relative flex size-[54px] shrink-0 items-center justify-center rounded-full bg-green">
                  <span className="text-[20px] font-bold text-white">{n}</span>
                </div>

                <div className="flex min-w-0 flex-1 flex-col gap-6 lg:gap-[30px]">
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-[20px] font-bold text-navy sm:text-[22px]">
                      {title}
                    </h3>
                    <p className="max-w-[600px] text-[15px] leading-[26px] text-muted sm:text-[16px]">
                      {body}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-[50px]">
                    {shots.map((shot, i) => (
                      <img
                        key={shot}
                        src={shot}
                        alt={`${title} — app screen ${i + 1}`}
                        loading="lazy"
                        className="aspect-[192/408] w-full max-w-[192px] object-contain"
                      />
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
