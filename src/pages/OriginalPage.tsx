import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import LogoTicker from '../components/LogoTicker'
import Services from '../components/Services'
import CapabilityCards from '../components/CapabilityCards'
import BeforeAfter from '../components/BeforeAfter'
import TrafficGrowth from '../components/TrafficGrowth'
import Process from '../components/Process'
import Results from '../components/Results'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function OriginalPage() {
  return (
    <div className="bg-[#050508] min-h-screen overflow-x-hidden w-full noise-overlay">
      <Navbar />
      <Hero />
      <LogoTicker />
      <Services />
      <CapabilityCards />
      <BeforeAfter />
      <TrafficGrowth />
      <Process />
      <Results />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
