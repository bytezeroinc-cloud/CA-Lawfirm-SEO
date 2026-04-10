import MarketingHero from '../components/MarketingHero'
import LogoTicker from '../components/LogoTicker'
import MarketingChannels from '../components/MarketingChannels'
import AIvsTraditionalMarketing from '../components/AIvsTraditionalMarketing'
import MarketingToolStack from '../components/MarketingToolStack'
import GeoSection from '../components/GeoSection'
import MarketingProcess from '../components/MarketingProcess'
import Results from '../components/Results'
import MarketingPricing from '../components/MarketingPricing'
import Footer from '../components/Footer'
import VideoSection from '../components/VideoSection'

// Atmospheric bento video
const BENTO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4'

// Content sections — Mux HLS stream
const SECTIONS_VIDEO =
  'https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8'

export default function MarketingPage() {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">

      {/* 1. Cinematic hero */}
      <MarketingHero />

      {/* 2. Logo ticker */}
      <LogoTicker light />

      {/* 3. Marketing Channels — 6 expanded service cards */}
      <VideoSection videoUrl={BENTO_VIDEO} overlay={0.52}>
        <MarketingChannels />
      </VideoSection>

      {/* 4. All content sections */}
      <VideoSection videoUrl={SECTIONS_VIDEO} overlay={0.62} zoom>
        {/* Marketing-specific: AI vs Traditional agencies */}
        <AIvsTraditionalMarketing />

        {/* Marketing-specific: actual AI tool stack */}
        <MarketingToolStack />

        {/* Shared: California geo coverage */}
        <GeoSection />

        {/* Marketing-specific: audit → launch → optimize → scale */}
        <MarketingProcess />

        {/* Shared: proven results numbers */}
        <Results />

        {/* Marketing-specific: pricing + FAQ */}
        <MarketingPricing />
      </VideoSection>

      {/* 5. Footer */}
      <Footer />
    </div>
  )
}
