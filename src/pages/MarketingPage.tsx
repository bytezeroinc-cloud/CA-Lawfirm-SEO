import MarketingHero from '../components/MarketingHero'
import LogoTicker from '../components/LogoTicker'
import MarketingChannels from '../components/MarketingChannels'
import AIvsTraditionalMarketing from '../components/AIvsTraditionalMarketing'
import MarketingToolStack from '../components/MarketingToolStack'
import MarketingCities from '../components/MarketingCities'
import MarketingProcess from '../components/MarketingProcess'
import MarketingResults from '../components/MarketingResults'
import MarketingPricing from '../components/MarketingPricing'
import Footer from '../components/Footer'
import VideoSection from '../components/VideoSection'

const BENTO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4'

const SECTIONS_VIDEO =
  'https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8'

export default function MarketingPage() {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">

      {/* 1. Cinematic hero */}
      <MarketingHero />

      {/* 2. Logo ticker */}
      <LogoTicker light />

      {/* 3. 6 expanded service/channel cards */}
      <VideoSection videoUrl={BENTO_VIDEO} overlay={0.52}>
        <MarketingChannels />
      </VideoSection>

      {/* 4. All content sections — all marketing-specific */}
      <VideoSection videoUrl={SECTIONS_VIDEO} overlay={0.62} zoom>

        {/* AI vs traditional marketing agency comparison */}
        <AIvsTraditionalMarketing />

        {/* Transparent AI tool stack */}
        <MarketingToolStack />

        {/* CA city market intelligence + budget allocation — with city page links */}
        <MarketingCities />

        {/* Audit → Launch → Optimize → Scale process */}
        <MarketingProcess />

        {/* Paid media results: ROAS, CPL, lead volume, revenue */}
        <MarketingResults />

        {/* Pricing + FAQ */}
        <MarketingPricing />

      </VideoSection>

      {/* 5. Footer */}
      <Footer />
    </div>
  )
}
