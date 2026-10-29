import { useEffect, useState } from 'react'
import { container, Eyebrow } from './ui'

const legalPages = [
  { href: '/privacy-and-policy', label: 'Privacy Policy' },
  { href: '/terms-and-conditions', label: 'Terms & Conditions' },
]

/** A detail still to be filled in before the page goes live. */
export function Ph({ children }) {
  return (
    <mark className="rounded-md bg-[#fff3b0] px-1.5 py-0.5 text-ink">
      {children}
    </mark>
  )
}

export function P({ children }) {
  return <p>{children}</p>
}

export function H3({ children }) {
  return (
    <h3 className="pt-2 text-[17px] font-bold text-navy sm:text-[18px]">
      {children}
    </h3>
  )
}

export function List({ children }) {
  return (
    <ul className="flex flex-col gap-2.5 pl-5 marker:text-green [&>li]:list-disc [&>li]:pl-1">
      {children}
    </ul>
  )
}

export function B({ children }) {
  return <strong className="font-semibold text-ink">{children}</strong>
}

export function A({ href, children }) {
  return (
    <a
      href={href}
      className="font-semibold text-green underline decoration-green/40 underline-offset-4 transition-colors hover:decoration-green"
    >
      {children}
    </a>
  )
}

/** Two-column table; `rows` is a list of [left, right] cells. */
export function Table({ head, rows }) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-stroke">
      <table className="w-full border-collapse text-left text-[15px] leading-[24px]">
        <thead className="bg-blue-bg-soft text-navy">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-bold sm:px-6">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells, i) => (
            <tr key={i} className="border-t border-stroke align-top">
              {cells.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3.5 sm:px-6 ${j === 0 ? 'w-[40%] text-ink' : ''}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** Highlights the section currently under the sticky header in the contents list. */
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-15% 0px -70% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])

  return active
}

/**
 * Shared shell for the legal pages: header band, a sticky contents list on
 * desktop, and the numbered sections.
 */
export default function LegalPage({ title, summary, sections }) {
  const [ids] = useState(() => sections.map((s) => s.id))
  const active = useActiveSection(ids)
  const path = window.location.pathname.replace(/\/$/, '')

  useEffect(() => {
    document.title = `JobHopper — ${title}`
  }, [title])

  return (
    <>
      <section className="bg-blue-bg-soft py-14 lg:py-[100px]">
        <div className={`${container} flex flex-col items-start gap-5`}>
          <Eyebrow variant="outline">Legal</Eyebrow>
          <h1 className="text-[34px] leading-tight font-extrabold text-navy sm:text-[44px] lg:text-[56px]">
            {title}
          </h1>
          <p className="text-[15px] text-muted sm:text-[16px]">
            JobHopper mobile app (iPhone and Android) · Effective date:{' '}
            <Ph>[date]</Ph> · Last updated: <Ph>[date]</Ph>
          </p>
          <nav className="mt-2 flex flex-wrap gap-2.5">
            {legalPages.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                aria-current={path === href ? 'page' : undefined}
                className={`rounded-full px-5 py-2.5 text-[14px] font-bold transition-colors sm:text-[15px] ${
                  path === href
                    ? 'bg-navy text-white'
                    : 'border border-navy text-navy hover:bg-white'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-[100px]">
        <div
          className={`${container} flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20`}
        >
          <aside className="hidden w-[300px] shrink-0 lg:sticky lg:top-[120px] lg:block">
            <p className="mb-4 text-[13px] font-bold tracking-wide text-navy uppercase">
              On this page
            </p>
            <ol className="flex flex-col border-l border-stroke">
              {sections.map(({ id, title: label }, i) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`-ml-px block border-l-2 py-1.5 pl-4 text-[14px] leading-[20px] transition-colors ${
                      active === id
                        ? 'border-green font-semibold text-navy'
                        : 'border-transparent text-muted hover:text-navy'
                    }`}
                  >
                    {i + 1}. {label}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <article className="flex max-w-[900px] min-w-0 flex-1 flex-col gap-12 text-[16px] leading-[28px] text-muted sm:text-[17px]">
            <div className="rounded-[20px] bg-green-bg-soft p-6 text-ink sm:p-8">
              <p className="mb-2 text-[13px] font-bold tracking-wide text-green uppercase">
                In short
              </p>
              <p>{summary}</p>
            </div>

            {sections.map(({ id, title: heading, body }, i) => (
              <section
                key={id}
                id={id}
                className="flex scroll-mt-[120px] flex-col gap-4 border-t border-stroke pt-10 first-of-type:border-t-0 first-of-type:pt-0"
              >
                <h2 className="flex items-baseline gap-3 text-[22px] leading-tight font-extrabold text-navy sm:text-[26px]">
                  <span className="text-green">{i + 1}.</span>
                  {heading}
                </h2>
                {body}
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  )
}
