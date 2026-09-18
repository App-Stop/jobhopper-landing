import { useCallback, useEffect, useState } from 'react'
import { DownloadModalContext } from './downloadModalContext'
import { StoreBadges } from './ui'
import getStarted from '../assets/get-started.png'
import qrCode from '../assets/qr-code.png'
import closeIcon from '../assets/icon-close.svg'

export function DownloadModalProvider({ children }) {
  const [open, setOpen] = useState(false)

  const openModal = useCallback((e) => {
    e?.preventDefault?.()
    setOpen(true)
  }, [])

  return (
    <DownloadModalContext.Provider value={openModal}>
      {children}
      {open && <DownloadModal onClose={() => setOpen(false)} />}
    </DownloadModalContext.Provider>
  )
}

/** Figma node 1:894 — "Popup Modal" */
function DownloadModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="download-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto w-full max-w-[800px] overflow-hidden rounded-[24px] bg-white px-6 pt-8 pb-10 shadow-[0_4px_160px_rgba(0,0,0,0.6)] sm:rounded-[30px] sm:px-[30px] sm:pt-10 sm:pb-20"
      >
        {/* Decorative backdrop circles — Figma nodes 1:895 / 1:896 */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-[463px] left-[27px] hidden size-[512px] rounded-full bg-blue-bg sm:block"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-[298px] left-[-368px] hidden size-[736px] rounded-full bg-green-bg sm:block"
        />

        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-3 right-3 size-10 cursor-pointer sm:top-5 sm:right-5 sm:size-[50px]"
        >
          <img src={closeIcon} alt="" className="size-full" />
        </button>

        <div className="relative flex flex-col gap-10 sm:gap-[60px]">
          <div className="flex flex-col items-start gap-4 pr-10">
            <span className="inline-flex rounded-full bg-blue-bg-soft px-4 py-2 text-[13px] font-bold text-navy uppercase sm:text-[14px]">
              You&apos;re one tap away
            </span>
            <h2
              id="download-modal-title"
              className="text-[28px] font-extrabold text-navy sm:text-[36px]"
            >
              Get More Done on the Go
            </h2>
            <p className="text-[16px] text-muted sm:text-[18px]">
              Hire trusted pros, manage projects, and handle payments — right
              from your phone.
            </p>
          </div>

          <div className="flex flex-col-reverse items-center justify-between gap-10 sm:flex-row">
            <img
              src={getStarted}
              alt="The JobHopper app shown on two phones"
              className="w-full max-w-[300px] shrink-0 object-contain sm:max-w-[381px]"
            />

            <div className="flex w-full max-w-[342px] flex-col items-center gap-10">
              <StoreBadges className="justify-center" opensModal={false} />
              <div className="hidden flex-col items-center gap-5 sm:flex">
                <img
                  src={qrCode}
                  alt="QR code to download the JobHopper app"
                  className="size-[132px] object-contain"
                />
                <p className="text-[14px] leading-[26px] text-muted">
                  Scan with your phone
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
