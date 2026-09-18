import escrowIcon from '../assets/icon-escrow.png'
import backgroundCheckIcon from '../assets/icon-background-check.png'
import conflictIcon from '../assets/icon-conflict-resolution.png'
import { container, Eyebrow } from './ui'

const pillars = [
  {
    icon: escrowIcon,
    title: 'Escrow Protection',
    body: 'Client funds are locked securely in escrow before work begins, and only release when you confirm completion.',
  },
  {
    icon: backgroundCheckIcon,
    title: 'Direct Background Check',
    body: 'Comprehensive national criminal and identity checks are performed, ensuring that all users are trustworthy.',
  },
  {
    icon: conflictIcon,
    title: 'Conflict Resolution',
    body: 'JobHopper operators are available 24/7 to resolve invoice or detail discrepancies instantly.',
  },
]

export default function Trust() {
  return (
    <section className="bg-white py-16 lg:py-[120px]">
      <div className={`${container} flex flex-col items-center gap-10`}>
        <div className="flex max-w-[1000px] flex-col items-center gap-4">
          <Eyebrow>Institutional Safety</Eyebrow>
          <h2 className="text-center text-[28px] font-extrabold text-navy sm:text-[34px] lg:text-[40px]">
            Trust Built Into Every Transaction
          </h2>
          <p className="text-center text-[16px] text-muted sm:text-[18px]">
            Every professional passes background screening, identity
            verification, and credential checks before they can accept a single
            job.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          {pillars.map(({ icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col items-center justify-center gap-6 rounded-[20px] px-6 pt-8 pb-4 text-center sm:gap-10 sm:px-10 sm:pt-12 sm:pb-8 lg:gap-[60px] lg:pt-[60px] lg:pb-10"
            >
              <img
                src={icon}
                alt=""
                aria-hidden="true"
                className="size-20 shrink-0 object-contain"
              />
              <div className="flex flex-col gap-2.5">
                <h3 className="text-[18px] font-bold text-navy">{title}</h3>
                <p className="text-[14px] leading-[22px] text-muted">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
