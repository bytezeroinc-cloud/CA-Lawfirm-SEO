import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const tools = [
  {
    name: 'n8n',
    tagline: 'Workflow Automation',
    desc: 'We build custom n8n workflows that connect your ads, CRM, forms, and email — automating the manual work that most agencies bill hours for.',
    useCase: 'Lead capture → CRM → nurture sequence in under 60 seconds',
    color: '#FF6B6B',
    delay: 0,
  },
  {
    name: 'Windsor.ai',
    tagline: 'Cross-Channel Attribution',
    desc: 'Windsor aggregates data from Google Ads, Meta, email, and organic into one dashboard — so you see which channels are actually generating retained cases.',
    useCase: 'Revenue attribution across 8+ marketing channels',
    color: '#60A5FA',
    delay: 80,
  },
  {
    name: 'ChatGPT API',
    tagline: 'AI Content & Copy',
    desc: 'We use GPT-4 to generate ad copy variants, blog outlines, email sequences, and landing page copy — tested at scale, not guessed by hand.',
    useCase: '20+ ad variants tested per campaign per month',
    color: '#10B981',
    delay: 160,
  },
  {
    name: 'Google AI APIs',
    tagline: 'Smart Bidding Engine',
    desc: 'Google\'s machine learning automatically adjusts bids for every auction based on predicted conversion probability — no manual guesswork.',
    useCase: 'Bid optimization on every single search query',
    color: '#FBBF24',
    delay: 240,
  },
  {
    name: 'Meta Advantage+',
    tagline: 'Social Ad Targeting',
    desc: 'Meta\'s AI finds your most likely clients across Facebook and Instagram — targeting by behavior, life events, and interest signals relevant to legal needs.',
    useCase: 'Lookalike audiences built from your best past clients',
    color: '#818CF8',
    delay: 320,
  },
  {
    name: 'HubSpot / Clio',
    tagline: 'CRM & Intake Integration',
    desc: 'We integrate directly with your legal CRM so every lead from every channel flows into your intake pipeline with full source tracking and lead scoring.',
    useCase: 'Zero leads lost between ad click and intake call',
    color: '#FF8C42',
    delay: 400,
  },
]

export default function MarketingToolStack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(192,132,252,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC]" />
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">Transparent Tech Stack</span>
          </span>
          <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
            The AI Tools Behind
            <br />
            <span style={{ color: '#C084FC', filter: 'drop-shadow(0 0 20px rgba(192,132,252,0.5))' }}>Your Campaigns</span>
          </h2>
          <p className="mt-4 text-white/35 text-sm max-w-md mx-auto leading-relaxed">
            We show you exactly what's running your marketing — not a black box. Every tool has a purpose, a measurable output, and you own the data.
          </p>
        </motion.div>

        {/* Tool grid — 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.65, delay: tool.delay / 1000, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: 'rgba(14,14,20,0.97)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.45)',
              }}
            >
              {/* Tool name header */}
              <div
                className="px-5 py-4 flex items-center justify-between"
                style={{
                  background: `linear-gradient(135deg, ${tool.color}12 0%, transparent 100%)`,
                  borderBottom: `1px solid ${tool.color}18`,
                }}
              >
                <div>
                  <div
                    className="font-display font-black text-[22px] leading-none"
                    style={{ color: tool.color, letterSpacing: '-0.02em', filter: `drop-shadow(0 0 12px ${tool.color}60)` }}
                  >
                    {tool.name}
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest mt-1" style={{ color: `${tool.color}90` }}>
                    {tool.tagline}
                  </div>
                </div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ background: tool.color }}
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <p className="text-[13px] text-white/55 leading-relaxed">{tool.desc}</p>

                {/* Use case callout */}
                <div
                  className="mt-auto rounded-xl px-4 py-3 flex items-start gap-2.5"
                  style={{ background: `${tool.color}09`, border: `1px solid ${tool.color}20` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: tool.color, boxShadow: `0 0 6px ${tool.color}` }} />
                  <span className="text-[12px] font-medium leading-snug" style={{ color: `${tool.color}CC` }}>
                    {tool.useCase}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center text-[12px] text-white/20 mt-8"
        >
          All data is owned by you. We never lock you into proprietary platforms — your Google Ads, CRM, and analytics accounts always remain yours.
        </motion.p>
      </div>
    </section>
  )
}
