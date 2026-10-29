import { useEffect } from 'react'
import Emergency from './components/Emergency'
import Footer from './components/Footer'
import ForCustomers from './components/ForCustomers'
import ForWorkers from './components/ForWorkers'
import GetStarted from './components/GetStarted'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import NavBar from './components/NavBar'
import { DownloadModalProvider } from './components/DownloadModal'
import NeedHelpBand from './components/NeedHelpBand'
import Trust from './components/Trust'
import { useFoldHeight } from './lib/fold'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Support from './pages/Support'
import TermsAndConditions from './pages/TermsAndConditions'

const pages = {
  '/privacy-and-policy': PrivacyPolicy,
  '/terms-and-conditions': TermsAndConditions,
  '/support': Support,
}

function Home() {
  useFoldHeight()

  // Arriving from another page via a navbar link (/#how-it-works): the browser
  // looked for the anchor before React rendered it, so jump there now.
  useEffect(() => {
    const target = window.location.hash && document.getElementById(window.location.hash.slice(1))
    if (target) requestAnimationFrame(() => target.scrollIntoView())
  }, [])

  return (
    <>
      {/* On desktop the hero and the band together are exactly one screen,
          so the band ends flush with the fold. The hero takes the slack, so
          the band keeps its own height. */}
      <div className="flex flex-col xl:min-h-[var(--fold)]">
        <Hero />
        <NeedHelpBand />
      </div>
      <HowItWorks />
      <ForCustomers />
      <Emergency />
      <ForWorkers />
      <Trust />
      <GetStarted />
    </>
  )
}

export default function App() {
  // Plain links between a handful of pages, so the path is read once on load.
  const Page = pages[window.location.pathname.replace(/\/$/, '')] ?? Home

  return (
    <DownloadModalProvider>
      <NavBar />
      <main>
        <Page />
      </main>
      <Footer />
    </DownloadModalProvider>
  )
}
