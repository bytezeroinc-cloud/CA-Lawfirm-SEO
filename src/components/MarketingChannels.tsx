import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, FileText, Mail, Users, BarChart3, Megaphone } from 'lucide-react'

const services = [
  {
    icon: Target,
    category: 'PAID MEDIA',
    title: 'AI-Optimized Google & Meta Ads',
    desc: 'We build and manage PPC campaigns that use machine learning to predict which prospects will become clients — not just clicks. Smart bidding, dynamic creative, and real-time optimization.',
    includes: [
      'Google Search, Display & Performance Max',
      'Meta Ads (Facebook/Instagram) for brand awareness',
      'Smart bid strategies tied to case value, not just CPC',
      'Negative keyword management & search term audits',
      'Monthly creative refresh with A/B tested copy',
    ],
    metric: '4.8x ROAS',
    metricLabel: 'Average return on ad spend',
    accentColor: '#C084FC',
    bg: 'linear-gradient(135deg, rgba(192,132,252,0.08) 0%, rgba(10,5,18,0.95) 100%)',
    border: 'rgba(192,132,252,0.20)',
    delay: 0,
  },
  {
    icon: Megaphone,
    category: 'LOCAL & GEO MARKETING',
    title: 'Dominate Your City\'s Legal Market',
    desc: 'Hyper-local campaigns targeting the specific California cities where your ideal clients are searching. From Google Business Profile to city-specific landing pages and geo-fenced ads.',
    includes: [
      'Google Business Profile management & posting',
      'City-specific landing pages for 199+ CA cities',
      'Geo-fenced display ads around courthouse & competitor areas',
      'Local Services Ads (LSA) setup and management',
      'Review generation and reputation management',
    ],
    metric: '199+ Cities',
    metricLabel: 'California markets covered',
    accentColor: '#FF8C42',
    bg: 'linear-gradient(135deg, rgba(255,140,66,0.08) 0%, rgba(18,8,0,0.95) 100%)',
    border: 'rgba(255,140,66,0.20)',
    delay: 80,
  },
  {
    icon: FileText,
    category: 'AI CONTENT MARKETING',
    title: 'Content That Ranks & Converts',
    desc: 'AI-researched, attorney-reviewed content targeting the exact questions your clients are asking on Google and AI platforms. Every piece built to rank, educate, and convert.',
    includes: [
      'Practice area blog posts (4–8/month)',
      'City-specific legal landing pages',
      'AI search (GEO) content for ChatGPT & Perplexity',
      'FAQ pages targeting long-tail queries',
      'CA State Bar Rule 7.1–7.5 compliant copy',
    ],
    metric: '300%',
    metricLabel: 'Average traffic growth in 12 months',
    accentColor: '#34D399',
    bg: 'linear-gradient(135deg, rgba(52,211,153,0.07) 0%, rgba(0,10,6,0.95) 100%)',
    border: 'rgba(52,211,153,0.18)',
    delay: 160,
  },
  {
    icon: Mail,
    category: 'EMAIL & AUTOMATION',
    title: 'Nurture Leads Into Retained Cases',
    desc: 'Automated email sequences that keep your firm top-of-mind, answer pre-consultation questions, and guide prospects from first inquiry to signed retainer — without manual follow-up.',
    includes: [
      '5-step lead nurture sequence post-inquiry',
      'Practice area filtering (PI vs family vs criminal)',
      'Appointment reminder & no-show recovery flows',
      'Re-engagement campaigns for cold leads',
      'CRM integration (Clio, HubSpot, or custom)',
    ],
    metric: '68%',
    metricLabel: 'Average open rate on legal sequences',
    accentColor: '#60A5FA',
    bg: 'linear-gradient(135deg, rgba(96,165,250,0.07) 0%, rgba(0,5,18,0.95) 100%)',
    border: 'rgba(96,165,250,0.18)',
    delay: 240,
  },
  {
    icon: Users,
    category: 'LEAD GENERATION',
    title: 'Qualified Cases, Not Just Leads',
    desc: 'Multi-channel lead gen funnels that pre-qualify prospects by practice area, case type, and budget before they ever reach your intake team — saving hours and cutting cost-per-case.',
    includes: [
      'Landing pages with case-type qualification forms',
      'Predictive lead scoring (AI ranks leads by case value)',
      'Automated intake qualification via SMS/email',
      'Call tracking with keyword-level attribution',
      'Integration with your intake software',
    ],
    metric: '-42%',
    metricLabel: 'Average reduction in cost per qualified lead',
    accentColor: '#A855F7',
    bg: 'linear-gradient(135deg, rgba(168,85,247,0.08) 0%, rgba(8,0,18,0.95) 100%)',
    border: 'rgba(168,85,247,0.20)',
    delay: 320,
  },
  {
    icon: BarChart3,
    category: 'ANALYTICS & REPORTING',
    title: 'Revenue Attribution, Not Vanity Metrics',
    desc: 'Live dashboards that connect every ad click, form submission, and phone call to actual case revenue. Know exactly which campaigns are filling your caseload and which to cut.',
    includes: [
      'Live cross-channel performance dashboard',
      'Cost-per-lead and cost-per-case by channel',
      'Keyword → lead → case revenue attribution',
      'Monthly strategy call with actionable recommendations',
      'Competitor ad spend monitoring',
    ],
    metric: '$28k',
    metricLabel: 'Average monthly revenue increase tracked',
    accentColor: '#FBBF24',
    bg: 'linear-gradient(135deg, rgba(251,191,36,0.07) 0%, rgba(16,10,0,0.95) 100%)',
    border: 'rgba(251,191,36,0.18)',
    delay: 400,
  },
]

export default function MarketingChannels() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(192,132,252,0.04) 0%, transparent 65%)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC]" />
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">What We Do</span>
          </span>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            Every Marketing Channel.
            <br />
            <span style={{ color: '#C084FC', filter: 'drop-shadow(0 0 20px rgba(192,132,252,0.5))' }}>One Unified Strategy.</span>
          </h2>
          <p className="mt-4 text-white/35 text-sm max-w-lg mx-auto leading-relaxed">
            We don't silo Google Ads from SEO from email. Every channel feeds every other — and it's all tracked to case revenue.
          </p>
        </motion.div>

        {/* Service cards — 2-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {services.map((svc) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={svc.category}
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: svc.delay / 1000, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background: svc.bg,
                  border: `1px solid ${svc.border}`,
                  boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
                }}
              >
                {/* Top accent line */}
                <div className="h-[1px]" style={{ background: `linear-gradient(to right, transparent, ${svc.accentColor}60, transparent)` }} />

                <div className="p-6 flex flex-col gap-4 flex-1">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${svc.accentColor}18`, border: `1.5px solid ${svc.accentColor}40`, boxShadow: `0 0 16px ${svc.accentColor}25` }}
                      >
                        <Icon size={18} style={{ color: svc.accentColor }} strokeWidth={1.8} />
                      </div>
                      <div>
                        <div className="text-[10px] font-extrabold uppercase tracking-widest mb-0.5" style={{ color: svc.accentColor }}>
                          {svc.category}
                        </div>
                        <h3 className="font-display font-bold text-white leading-tight" style={{ fontSize: '15px' }}>
                          {svc.title}
                        </h3>
                      </div>
                    </div>

                    {/* Metric pill */}
                    <div
                      className="shrink-0 text-right hidden sm:block"
                      style={{}}
                    >
                      <div className="font-display font-black leading-none" style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', color: svc.accentColor, letterSpacing: '-0.03em' }}>
                        {svc.metric}
                      </div>
                      <div className="text-[9px] text-white/30 mt-0.5 max-w-[100px] text-right leading-tight">
                        {svc.metricLabel}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[13px] text-white/55 leading-relaxed">{svc.desc}</p>

                  {/* Includes list */}
                  <ul className="flex flex-col gap-2 mt-auto">
                    {svc.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                          style={{ background: svc.accentColor, boxShadow: `0 0 5px ${svc.accentColor}80` }}
                        />
                        <span className="text-[12px] text-white/50 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
