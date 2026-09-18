import { Menu, X } from 'lucide-react'
import { SiApple, SiGoogleplay } from 'react-icons/si'
import { useState } from 'react'
import { container } from './ui'
import { useDownloadModal } from './downloadModalContext'
import logo from '../assets/logo.png'

const links = [
  { label: 'Find Reliable Workers', active: true },
  { label: 'Become a Provider' },
  { label: 'How It Works' },
  { label: 'Trust & Verification' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const openModal = useDownloadModal()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stroke bg-white">
      <div className={`${container} flex items-center justify-between py-4`}>
        {/* Figma node 1:856 (224 × 40) */}
        <a href="#" className="shrink-0">
          <img
            src={logo}
            alt="JobHopper"
            className="h-[34px] w-[190px] object-contain sm:h-[40px] sm:w-[224px]"
          />
        </a>

        <nav className="hidden items-start gap-10 xl:flex">
          {links.map(({ label, active }) => (
            <a
              key={label}
              href="#"
              className="flex flex-col items-center justify-center gap-1"
            >
              <span
                className={`text-[16px] whitespace-nowrap ${
                  active ? 'font-semibold text-navy' : 'font-normal text-muted'
                }`}
              >
                {label}
              </span>
              {active && <span className="h-0.5 w-4 rounded-sm bg-green" />}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={openModal}
            className="hidden items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-[15px] font-bold whitespace-nowrap text-white transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex lg:px-8 lg:py-4 lg:text-[16px]"
          >
            Get the App
            <span className="flex items-center gap-2.5">
              <SiApple className="size-5" />
              <SiGoogleplay className="size-5" />
            </span>
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full text-navy xl:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-stroke bg-white xl:hidden">
          <div className={`${container} flex flex-col gap-1 py-4`}>
            {links.map(({ label, active }) => (
              <a
                key={label}
                href="#"
                onClick={() => setOpen(false)}
                className={`rounded-lg px-2 py-3 text-[16px] ${
                  active ? 'font-semibold text-navy' : 'font-normal text-muted'
                }`}
              >
                {label}
              </a>
            ))}
            <a
              href="#"
              onClick={(e) => {
                setOpen(false)
                openModal(e)
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-8 py-4 text-[16px] font-bold text-white sm:hidden"
            >
              Get the App
              <SiApple className="size-5" />
              <SiGoogleplay className="size-5" />
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
