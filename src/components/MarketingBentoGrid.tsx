import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Target, FileText, Mail, Zap, BarChart3, Users } from 'lucide-react'

/* ─── Visual Header Components ──────────────────────────── */

/** Google Ads ROAS visual */
function AdsROASVisual() {
  const campaigns = [
    { name: 'Personal Injury', roas: '4.8x', color: '#C084FC' },
    { name: 'Family Law',       roas: '3.9x', color: '#A855F7' },
    { name: 'Criminal Defense', roas: '5.2x', color: '#9333EA' },
  ]
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-2.5 px-5 pt-4">
      {campaigns.map((c) => (
        <div key={c.name} className="flex items-center justify-between rounded-lg px-3 py-2"
          style={{ background: 'rgba(192,132,252,0.09)', border: '1px solid rgba(192,132,252,0.20)' }}>
          <span className="text-[11px] text-white/60">{c.name}</span>
          <span className="text-[12px] font-black" style={{ color: c.color }}>{c.roas} ROAS</span>
        </div>
      ))}
    </div>
  )
}

/** Content pipeline visual */
function ContentPipelineVisual() {
  const stages = [
    { label: 'Blog Posts', count: '4/mo', color: '#FF8C42' },
    { label: 'Landing Pages', count: '2/mo', color: '#C084FC' },
    { label: 'Social Content', count: '12/mo', color: '#34D399' },
    { label: 'Email Copy', count: '4/mo', color: '#60A5FA' },
  ]
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-2 px-5">
      {stages.map((s) => (
        <div key={s.label} className="flex items-center justify-between">
          <span className="text-[11px] text-white/45">{s.label}</span>
          <span className="text-[11px] font-bold" style={{ color: s.color }}>{s.count}</span>
        </div>
      ))}
    </div>
  )
}

/** Email automation flow */
function EmailFlowVisual() {
  const steps = ['Lead Captured', 'Intro Sequence', 'Case Type Filter', 'Book Consult']
  return (
    <div className="absolute inset-0 flex items-center justify-center px-5">
      <div className="flex items-center gap-1 w-full">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-1 flex-1 min-w-0">
            <div className="flex-1 min-w-0 flex flex-col items-center gap-1">
              <div className="w-full rounded-md py-1.5 px-1 text-center"
                style={{ background: i === steps.length - 1 ? 'rgba(192,132,252,0.20)' : 'rgba(255,255,255,0.06)', border: `1px solid ${i === steps.length - 1 ? 'rgba(192,132,252,0.40)' : 'rgba(255,255,255,0.09)'}` }}>
                <span className="text-[8px] font-medium leading-tight block text-white/70">{s}</span>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="w-3 shrink-0 flex items-center justify-center">
                <div className="w-2.5 h-px" style={{ background: 'rgba(192,132,252,0.35)' }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/** Lead funnel */
function LeadFunnelVisual() {
  const funnel = [
    { label: 'Website Visitors', pct: 100, color: '#C084FC' },
    { label: 'Leads Generated', pct: 68, color: '#A855F7' },
    { label: 'Consultations', pct: 42, color: '#9333EA' },
    { label: 'Clients Retained', pct: 28, color: '#7C3AED' },
  ]
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-1.5 px-5">
      {funnel.map((f) => (
        <div key={f.label} className="flex flex-col gap-0.5">
          <div className="flex justify-between mb-0.5">
            <span className="text-[9px] text-white/40">{f.label}</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <div className="h-full rounded-full" style={{ width: `${f.pct}%`, background: f.color, boxShadow: `0 0 6px ${f.color}60` }} />
          </div>
        </div>
      ))}
    </div>
  )
}

/** Analytics dashboard */
function MarketingAnalyticsVisual() {
  const metrics = [
    { label: 'Cost Per Lead', val: '-42%', color: '#34D399' },
    { label: 'Conversion Rate', val: '+3.8x', color: '#C084FC' },
    { label: 'Monthly Revenue', val: '+$28k', color: '#FF8C42' },
  ]
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-2.5 px-5">
      {metrics.map((m) => (
        <div key={m.label} className="flex items-center justify-between">
          <span className="text-[11px] text-white/45">{m.label}</span>
          <span className="text-[13px] font-black" style={{ color: m.color }}>{m.val}</span>
        </div>
      ))}
    </div>
  )
}

/** AI Tool Stack visual */
function AIStackVisual() {
  const tools = [
    { name: 'n8n',        color: '#FF6B6B' },
    { name: 'ChatGPT',   color: '#10B981' },
    { name: 'Windsor.ai', color: '#60A5FA' },
    { name: 'Meta Ads',  color: '#3B82F6' },
    { name: 'GA4',        color: '#F59E0B' },
    { name: 'HubSpot',   color: '#FF8C42' },
  ]
  return (
    <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-2 p-5">
      {tools.map((t) => (
        <span key={t.name} className="px-2.5 py-1 rounded-full text-[10px] font-semibold"
          style={{ background: `${t.color}14`, border: `1px solid ${t.color}30`, color: t.color }}>
          {t.name}
        </span>
      ))}
    </div>
  )
}

/* ─── Card Data ─────────────────────────────────────────── */
const cards = [
  {
    id: 'ads',
    headerBg: 'linear-gradient(135deg, #1E0830 0%, #0E0418 55%, #050508 100%)',
    category: 'AI PAID MEDIA',
    title: 'Google & Meta Ads That Convert',
    desc: 'AI-optimized PPC campaigns with smart bidding, predictive targeting, and continuous A/B testing to maximize your ad spend ROI.',
    metric: '4.8x',
    accentColor: '#C084FC',
    Icon: Target,
    visual: 'ads',
    delay: 0,
  },
  {
    id: 'content',
    headerBg: 'linear-gradient(135deg, #1E0B00 0%, #0F0500 55%, #050508 100%)',
    category: 'AI CONTENT & CREATIVE',
    title: 'Content That Ranks & Converts',
    desc: 'AI-researched blog posts, landing pages, and practice area content — targeting the exact keywords your ideal clients search.',
    metric: '12x',
    accentColor: '#FF8C42',
    Icon: FileText,
    visual: 'content',
    delay: 80,
  },
  {
    id: 'email',
    headerBg: 'linear-gradient(135deg, #081828 0%, #04100E 55%, #050508 100%)',
    category: 'AI EMAIL & AUTOMATION',
    title: 'Nurture Leads Into Clients',
    desc: 'Automated email sequences that qualify leads, answer common legal questions, and guide prospects to book a consultation.',
    metric: '68%',
    accentColor: '#34D399',
    Icon: Mail,
    visual: 'email',
    delay: 160,
  },
  {
    id: 'leads',
    headerBg: 'linear-gradient(135deg, #180820 0%, #0A0412 55%, #050508 100%)',
    category: 'AI LEAD GENERATION',
    title: 'More Cases, Less Wasted Budget',
    desc: 'Multi-channel lead gen funnels that attract qualified prospects from Google, social, and AI platforms — tracked to the dollar.',
    metric: '3.8x',
    accentColor: '#A855F7',
    Icon: Users,
    visual: 'leads',
    delay: 240,
  },
  {
    id: 'analytics',
    headerBg: 'linear-gradient(135deg, #002018 0%, #001008 55%, #050508 100%)',
    category: 'AI ANALYTICS & REPORTING',
    title: 'Real ROI, Real Numbers',
    desc: 'Monthly dashboards showing cost-per-lead, conversion rates, revenue attribution, and campaign performance — no vanity metrics.',
    metric: '-42%',
    accentColor: '#34D399',
    Icon: BarChart3,
    visual: 'analytics',
    delay: 320,
  },
  {
    id: 'stack',
    headerBg: 'linear-gradient(135deg, #0E0520 0%, #06021A 55%, #050508 100%)',
    category: 'AI TECH STACK',
    title: 'Real Tools. Real Results.',
    desc: 'We use n8n automation, Windsor.ai, ChatGPT API, and Google AI — not vague "AI-powered" promises. You see the stack behind every campaign.',
    metric: '6+',
    accentColor: '#8B5CF6',
    Icon: Zap,
    visual: 'stack',
    delay: 400,
  },
]

/* ─── Main Component ─────────────────────────────────────── */
export default function MarketingBentoGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative py-14 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(192,132,252,0.05) 0%, transparent 65%)' }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-8 text-center"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC]" />
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">What's Included</span>
          </span>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            Full-Stack Marketing.
            <br />
            <span style={{ color: '#C084FC', filter: 'drop-shadow(0 0 20px rgba(192,132,252,0.5))' }}>Every Channel Covered.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {cards.map((card) => {
            const Icon = card.Icon
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 28, scale: 0.97, filter: 'blur(8px)' }}
                animate={inView ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.7, delay: card.delay / 1000, ease: [0.22, 1, 0.36, 1] }}
                className="bento-card group cursor-default overflow-hidden flex flex-col"
                style={{
                  height: '300px',
                  background: 'rgba(16,16,22,0.96)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
              >
                {/* Visual Header */}
                <div className="relative overflow-hidden" style={{ height: 144, background: card.headerBg }}>
                  <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                      backgroundSize: '32px 32px',
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center select-none" style={{ opacity: 0.50 }}>
                    <span
                      className="font-display font-black"
                      style={{
                        fontSize: 'clamp(36px, 9.6vw, 77px)',
                        color: card.accentColor,
                        letterSpacing: '-0.05em',
                        lineHeight: 1,
                        filter: `drop-shadow(0 0 30px ${card.accentColor}80)`,
                      }}
                    >
                      {card.metric}
                    </span>
                  </div>
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-2/3 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at center bottom, ${card.accentColor}30 0%, transparent 70%)` }}
                  />
                  {card.visual === 'ads'       && <AdsROASVisual />}
                  {card.visual === 'content'   && <ContentPipelineVisual />}
                  {card.visual === 'email'     && <EmailFlowVisual />}
                  {card.visual === 'leads'     && <LeadFunnelVisual />}
                  {card.visual === 'analytics' && <MarketingAnalyticsVisual />}
                  {card.visual === 'stack'     && <AIStackVisual />}
                  <div className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
                    style={{ background: `linear-gradient(to right, transparent, ${card.accentColor}70, transparent)` }} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `linear-gradient(135deg, transparent 30%, ${card.accentColor}10 100%)` }} />
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                        style={{ background: `${card.accentColor}35`, border: `1.5px solid ${card.accentColor}`, boxShadow: `0 0 14px ${card.accentColor}45` }}
                      >
                        <Icon size={12} style={{ color: card.accentColor, filter: `drop-shadow(0 0 4px ${card.accentColor})` }} strokeWidth={2.5} />
                      </div>
                      <span
                        className="text-[10px] font-extrabold uppercase tracking-widest"
                        style={{ color: card.accentColor, textShadow: `0 0 12px ${card.accentColor}80` }}
                      >
                        {card.category}
                      </span>
                    </div>
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                      style={{ background: `${card.accentColor}15`, border: `1px solid ${card.accentColor}50` }}
                    >
                      <ArrowUpRight size={11} style={{ color: card.accentColor }} />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-[15px] leading-tight mb-1.5 text-white">
                    {card.title}
                  </h3>
                  <p className="text-[12px] text-white/80 leading-relaxed">{card.desc}</p>

                  <div
                    className="mt-3 h-[1px] transition-all duration-500"
                    style={{ background: `linear-gradient(to right, ${card.accentColor}50, transparent)`, opacity: 0.5 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
