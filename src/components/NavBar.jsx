import { Menu, X } from 'lucide-react'
import { SiApple, SiGoogleplay } from 'react-icons/si'
import { useEffect, useState } from 'react'
import { container } from './ui'
import { useDownloadModal } from './downloadModalContext'
import logo from '../assets/logo.png'

// Each link points at a landing-page section id. The leading "/" makes them
// work from the other pages too.
const links = [
  { label: 'Find Reliable Workers', id: 'find-workers' },
  { label: 'Become a Provider', id: 'become-a-provider' },
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'Trust & Verification', id: 'trust' },
]

/** The section currently in the middle of the viewport, if any (home page only). */
function useActiveSection() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
          else setActive((cur) => (cur === e.target.id ? null : cur))
        })
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return active
}

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const openModal = useDownloadModal()
  const activeId = useActiveSection()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stroke bg-white">
      <div className={`${container} flex items-center justify-between py-4`}>
        {/* Figma node 1:856 (224 × 40) */}
        <a href="/" className="shrink-0">
          <img
            src={logo}
            alt="JobHopper"
            className="h-[34px] w-[190px] object-contain sm:h-[40px] sm:w-[224px]"
          />
        </a>

        <nav className="hidden items-start gap-10 xl:flex">
          {links.map(({ label, id }) => {
            const active = id === activeId
            return (
              <a
                key={label}
                href={`/#${id}`}
                aria-current={active ? 'location' : undefined}
                className="flex flex-col items-center justify-center gap-1"
              >
                <span
                  className={`text-[16px] whitespace-nowrap transition-colors ${
                    active
                      ? 'font-semibold text-navy'
                      : 'font-normal text-muted hover:text-navy'
                  }`}
                >
                  {label}
                </span>
                <span
                  className={`h-0.5 w-4 rounded-sm bg-green transition-opacity ${active ? 'opacity-100' : 'opacity-0'}`}
                />
              </a>
            )
          })}
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
            {links.map(({ label, id }) => (
              <a
                key={label}
                href={`/#${id}`}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-2 py-3 text-[16px] ${
                  id === activeId ? 'font-semibold text-navy' : 'font-normal text-muted'
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
