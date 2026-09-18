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

export default function App() {
  return (
    <DownloadModalProvider>
      <NavBar />
      <main>
        <Hero />
        <NeedHelpBand />
        <HowItWorks />
        <ForCustomers />
        <Emergency />
        <ForWorkers />
        <Trust />
        <GetStarted />
      </main>
      <Footer />
    </DownloadModalProvider>
  )
}
