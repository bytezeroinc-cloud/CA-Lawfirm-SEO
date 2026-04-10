import MarketingHero from '../components/MarketingHero'
import LogoTicker from '../components/LogoTicker'
import { MarketingPaidSection, MarketingAISection } from '../components/MarketingBentoGrid'
import AIvsTraditionalMarketing from '../components/AIvsTraditionalMarketing'
import MarketingPracticeAreas from '../components/MarketingPracticeAreas'
import MarketingProcess from '../components/MarketingProcess'
import MarketingConvergence from '../components/MarketingConvergence'
import MarketingPricing from '../components/MarketingPricing'
import Footer from '../components/Footer'
import VideoSection from '../components/VideoSection'

const COSMIC_VIDEO = '/bg-cosmic-swirl.mp4'
const AI_STACK_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4'

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
        className="absolute inset-0"
        style={{ backgroundImage: `url('${src}')`, backgroundPosition: position, backgroundSize: 'cover' }}
      />
      <div className="absolute inset-0" style={{ background: `rgba(0,0,0,${overlay})` }} />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default function MarketingPage() {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">

      {/* 1 ── Hero */}
      <MarketingHero />

      {/* 2 ── Social proof */}
      <LogoTicker light />

      {/* 3 ── What we manage: paid channels + performance stats */}
      <VideoSection videoUrl={COSMIC_VIDEO} overlay={0.55}>
        <MarketingPaidSection />
      </VideoSection>

      {/* 4 ── AI convergence orbital */}
      <MarketingConvergence />

      {/* 5 ── Why we win: AI vs traditional */}
      <div style={{ background: '#05050a' }}>
        <AIvsTraditionalMarketing />
      </div>

      {/* 6 ── AI intelligence: content, automation, attribution */}
      <VideoSection videoUrl={AI_STACK_VIDEO} overlay={0.58}>
        <MarketingAISection />
      </VideoSection>

      {/* 7 ── How we work: process */}
      <div style={{ background: '#05050a' }}>
        <MarketingProcess />
      </div>

      {/* 8 ── Practice area specialization */}
      <ImgBg src="/bg-monolith-gold.png" overlay={0.60}>
        <MarketingPracticeAreas />
      </ImgBg>

      {/* 9 ── Pricing */}
      <ImgBg src="/bg-galaxy-shepherd.png" overlay={0.65}>
        <MarketingPricing />
      </ImgBg>

      {/* 10 ── Footer */}
      <Footer />
    </div>
  )
}
