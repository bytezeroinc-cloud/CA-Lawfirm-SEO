import CinematicHero from '../components/CinematicHero'
import LogoTicker from '../components/LogoTicker'
import BentoGrid from '../components/BentoGrid'
import BeforeAfter from '../components/BeforeAfter'
import TrafficGrowth from '../components/TrafficGrowth'
import Process from '../components/Process'
import Results from '../components/Results'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import VideoSection from '../components/VideoSection'

// Background videos for each zone
const BENTO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4'

const SECTIONS_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4'

export default function CinematicPage() {
  return (
    <div className="bg-[#050508] min-h-screen overflow-x-hidden w-full noise-overlay">

      {/* ── Hero — has its own video (fixed) ── */}
      <CinematicHero />

      {/* ── Logo ticker — plain dark strip ── */}
      <LogoTicker />

      {/* ── Bento Grid — video 2 background ── */}
      <VideoSection videoUrl={BENTO_VIDEO} overlay={0.62}>
        <BentoGrid />
      </VideoSection>

      {/* ── All remaining content sections — video 1 with zoom ── */}
      <VideoSection videoUrl={SECTIONS_VIDEO} overlay={0.72} zoom>
        <BeforeAfter />
        <TrafficGrowth />
        <Process />
        <Results />
        <Pricing />
        <FAQ />
        <Contact />
      </VideoSection>

      <Footer />
    </div>
  )
}
