import SeoHero from '../components/SeoHero'
import LogoTicker from '../components/LogoTicker'
import SeoBentoGrid from '../components/SeoBentoGrid'
import BeforeAfter from '../components/BeforeAfter'
import PracticeAreas from '../components/PracticeAreas'
import GeoSection from '../components/GeoSection'
import SeoProcess from '../components/SeoProcess'
import Results from '../components/Results'
import SeoPricing from '../components/SeoPricing'
import Footer from '../components/Footer'
import VideoSection from '../components/VideoSection'

// Bento gets its own atmospheric video
const BENTO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4'

// Content sections — Mux HLS stream
const SECTIONS_VIDEO =
  'https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8'

export default function SeoPage() {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">

      {/* 1. Cinematic hero */}
      <SeoHero />

      {/* 2. Logo ticker */}
      <LogoTicker light />

      {/* 3. Bento Feature Grid */}
      <VideoSection videoUrl={BENTO_VIDEO} overlay={0.52}>
        <SeoBentoGrid />
      </VideoSection>

      {/* 4. All content sections */}
      <VideoSection videoUrl={SECTIONS_VIDEO} overlay={0.62} zoom>
        <BeforeAfter />
        <PracticeAreas />
        <GeoSection />
        <SeoProcess />
        <Results />
        <SeoPricing />
      </VideoSection>

      {/* 5. Footer */}
      <Footer />
    </div>
  )
}
