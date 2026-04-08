import { Helmet } from 'react-helmet'
import VexHero from '../components/vex/VexHero'
import LogoTicker from '../components/vex/LogoTicker'
import BentoGrid from '../components/vex/BentoGrid'
import BeforeAfter from '../components/vex/BeforeAfter'
import Process from '../components/vex/Process'
import PracticeAreas from '../components/vex/PracticeAreas'
import GeoSection from '../components/vex/GeoSection'
import Results from '../components/vex/Results'
import Pricing from '../components/vex/Pricing'
import VexFooter from '../components/vex/VexFooter'
import VideoSection from '../components/vex/VideoSection'

// Bento gets its own atmospheric video (deep/space feel)
const BENTO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4'

// Content sections — Mux HLS stream
const SECTIONS_VIDEO =
  'https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8'

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AI Website Development for California Law Firms",
  "description": "AI-powered law firm websites built to rank on Google and get cited by ChatGPT. Delivered in 7 days. California State Bar compliant. Serving 200+ CA cities.",
  "url": "https://californialawfirmseo.com/ai-website-development-law-firms-california",
  "publisher": {
    "@type": "Organization",
    "name": "ByteZero Inc",
    "url": "https://bytezeroinc.com"
  }
}

export default function VexPage() {
  return (
    <>
      <Helmet>
        <title>AI Website Development for California Law Firms | ByteZero Inc</title>
        <meta name="description" content="AI-powered law firm websites built to rank on Google and get cited by ChatGPT. Delivered in 7 days. California State Bar compliant. Serving 200+ CA cities." />
        <link rel="canonical" href="https://californialawfirmseo.com/ai-website-development-law-firms-california" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI Website Development for California Law Firms | ByteZero Inc" />
        <meta property="og:description" content="AI-powered law firm websites built to rank and convert. Delivered in 7 days. Serving California attorneys." />
        <meta property="og:url" content="https://californialawfirmseo.com/ai-website-development-law-firms-california" />
        <meta property="og:image" content="https://californialawfirmseo.com/attached_assets/generated_images/Law_firm_office_hero_a8ed8329.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Website Development for California Law Firms | ByteZero Inc" />
        <meta name="twitter:description" content="AI-powered law firm websites built to rank and convert. Delivered in 7 days. Serving California attorneys." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ByteZero Inc" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

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
        <VexFooter />
      </div>
    </>
  )
}
