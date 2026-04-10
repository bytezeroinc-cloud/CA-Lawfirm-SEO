import SeoHero from '../components/SeoHero'
import LogoTicker from '../components/LogoTicker'
import SeoBentoGrid from '../components/SeoBentoGrid'
import SeoTestimonials from '../components/SeoTestimonials'
import SeoStatsBridge from '../components/SeoStatsBridge'
import SeoAIPlatformsScroll from '../components/SeoAIPlatformsScroll'
import BeforeAfter from '../components/BeforeAfter'
import PracticeAreas from '../components/PracticeAreas'
import GeoSection from '../components/GeoSection'
import SeoProcess from '../components/SeoProcess'
import Results from '../components/Results'
import SeoPricing from '../components/SeoPricing'
import Footer from '../components/Footer'
import VideoSection from '../components/VideoSection'

const BENTO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4'

/** Lightweight image-bg wrapper used throughout this page */
function ImgBg({
  src,
  overlay = 0.62,
  position = 'center',
  children,
}: {
  src: string
  overlay?: number
  position?: string
  children: React.ReactNode
}) {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: `url('${src}')`, backgroundPosition: position, backgroundSize: 'cover' }}
      />
      <div className="absolute inset-0" style={{ background: `rgba(0,0,0,${overlay})` }} />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default function SeoPage() {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">

      {/* 1 ── Cinematic hero — heavenly door video */}
      <SeoHero />

      {/* 2 ── Logo ticker — light strip */}
      <LogoTicker light />

      {/* 3 ── Bento grid — atmospheric video bg */}
      <VideoSection videoUrl={BENTO_VIDEO} overlay={0.52}>
        <SeoBentoGrid />
      </VideoSection>

      {/* 4 ── Testimonials — glowing desert reader bg */}
      <ImgBg src="/bg-desert-reader.png" overlay={0.60} position="center top">
        <SeoTestimonials />
      </ImgBg>

      {/* 5 ── Stats bridge — pure white, light break */}
      <SeoStatsBridge />

      {/* 6 ── AI Platforms horizontal scroll — light grey */}
      <SeoAIPlatformsScroll />

      {/* 7 ── Before/After comparison — dark terrain texture */}
      <ImgBg src="/bg-dark-terrain.webp" overlay={0.35} position="center">
        <BeforeAfter />
      </ImgBg>

      {/* 8 ── Practice areas — golden desert monolith */}
      <ImgBg src="/bg-monolith-gold.png" overlay={0.60} position="center">
        <PracticeAreas />
      </ImgBg>

      {/* 9 ── GEO / California coverage — aerial California + globe rings */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/bg-california.jpg')", backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
        {/* Overlay with globe rings blended on top-right */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(0,0,0,0.58)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25"
          style={{
            backgroundImage: "url('/bg-globe-rings.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center left',
          }}
        />
        <div className="relative z-10">
          <GeoSection />
        </div>
      </div>

      {/* 10 ── Process — white light section */}
      <div style={{ background: '#f5f5f7' }}>
        <SeoProcess />
      </div>

      {/* 11 ── Results — nighttime monolith, dramatic scale */}
      <ImgBg src="/bg-monolith-night.png" overlay={0.55} position="center bottom">
        <Results />
      </ImgBg>

      {/* 12 ── Pricing — shepherd under galaxy */}
      <ImgBg src="/bg-galaxy-shepherd.png" overlay={0.65} position="center">
        <SeoPricing />
      </ImgBg>

      {/* 13 ── Footer */}
      <Footer />
    </div>
  )
}
