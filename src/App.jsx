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
import TermsAndConditions from './pages/TermsAndConditions'

const pages = {
  '/privacy-policy': PrivacyPolicy,
  '/terms-and-conditions': TermsAndConditions,
}

function Home() {
  useFoldHeight()

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
