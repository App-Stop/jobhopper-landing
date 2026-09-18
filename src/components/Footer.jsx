import logo from '../assets/logo.png'

const columns = [
  {
    title: 'For Customers',
    links: ['Find Plumbers', 'Find Electricians', 'Verified Reviews'],
  },
  {
    title: 'For Workers',
    links: ['Become a Provider', 'Escrow Security', 'Earning Estimator'],
  },
  {
    title: 'Company',
    links: ['Trust & Safety', 'Careers', 'Contact Support'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-white px-5 pt-16 pb-10 sm:px-8 lg:px-20 lg:pt-20">
      <div className="mx-auto flex max-w-[1760px] flex-col gap-12 lg:gap-[60px]">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-16">
          <div className="flex w-full max-w-[360px] flex-col gap-6">
            {/* Figma node 1:832 (224 × 40) */}
            <img
              src={logo}
              alt="JobHopper"
              className="h-[40px] w-[224px] object-contain"
            />
            <p className="text-[15px] leading-[24px] text-muted">
              The marketplace connecting verified tradespeople with customers
              who need them. Every payment protected by escrow.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:flex lg:gap-16">
            {columns.map(({ title, links }) => (
              <div key={title} className="flex flex-col gap-4">
                <p className="text-[15px] font-bold text-navy">{title}</p>
                {links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[14px] text-muted transition-colors hover:text-navy"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-stroke pt-8 text-[14px] text-muted sm:flex-row sm:items-center">
          <p>© 2026 JobHopper Technologies Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-navy">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-navy">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
