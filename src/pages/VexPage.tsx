import VexHero from '../components/VexHero'
import LogoTicker from '../components/LogoTicker'
import BentoGrid from '../components/BentoGrid'
import BeforeAfter from '../components/BeforeAfter'
import Process from '../components/Process'
import PracticeAreas from '../components/PracticeAreas'
import GeoSection from '../components/GeoSection'
import Results from '../components/Results'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import VideoSection from '../components/VideoSection'

// Bento gets its own atmospheric video (deep/space feel)
const BENTO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4'

// Content sections — Mux HLS stream
const SECTIONS_VIDEO =
  'https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8'

export default function VexPage() {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">

      {/* 1. Cinematic hero */}
      <VexHero />

      {/* 2. Logo ticker */}
      <LogoTicker light />

      {/* 3. Bento Feature Grid */}
      <VideoSection videoUrl={BENTO_VIDEO} overlay={0.52}>
        <BentoGrid />
      </VideoSection>

      {/* 4. All content sections */}
      <VideoSection videoUrl={SECTIONS_VIDEO} overlay={0.62} zoom>
        <BeforeAfter />
        <PracticeAreas />
        <GeoSection />
        <Process />
        <Results />
        <Pricing />
      </VideoSection>

      {/* 5. Footer */}
      <Footer />
    </div>
  )
}
