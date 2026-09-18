import { HardHat, Wrench } from 'lucide-react'
import { container } from './ui'
import { useDownloadModal } from './downloadModalContext'

const options = [
  {
    Icon: Wrench,
    label: 'I need a service',
    hint: 'Find plumber, electrician, painter',
    className: 'bg-green',
  },
  {
    Icon: HardHat,
    label: 'I want to work',
    hint: 'Set your schedule, earn daily',
    className: 'bg-navy border-2 border-white',
  },
]

export default function NeedHelpBand() {
  const openModal = useDownloadModal()
  return (
    <section className="bg-navy-band py-10 sm:py-12 lg:min-h-[243px] lg:py-8">
      <div
        className={`${container} flex flex-col items-center justify-center gap-6`}
      >
        <p className="w-full max-w-[750px] text-center text-[18px] leading-[32px] font-semibold text-white sm:text-[20px]">
          What do you need help with?
        </p>
        <div className="flex w-full max-w-[750px] flex-col items-stretch gap-5 sm:flex-row">
          {options.map(({ Icon, label, hint, className }) => (
            <div
              key={label}
              className="flex flex-1 flex-col items-center justify-center gap-3"
            >
              <button
                type="button"
                onClick={openModal}
                className={`flex w-full flex-col items-center justify-center gap-2 rounded-[32px] px-8 py-4 transition-transform duration-200 hover:-translate-y-0.5 ${className}`}
              >
                <Icon className="size-8 shrink-0 text-white" strokeWidth={1.8} />
                <span className="text-[17px] font-bold whitespace-nowrap text-white sm:text-[18px]">
                  {label}
                </span>
              </button>
              <p className="text-center text-[14px] text-chip">{hint}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
