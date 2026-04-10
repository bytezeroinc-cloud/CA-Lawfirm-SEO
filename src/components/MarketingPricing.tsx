import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check, ArrowRight, Zap, Sparkles, Crown, ChevronDown } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    price: '999',
    period: '/month',
    desc: 'For solo practitioners ready to start generating leads with AI-powered marketing.',
    features: [
      'Google Ads management (up to $2k spend)',
      'AI content: 2 blog posts/month',
      'Email nurture sequence (5 emails)',
      'Monthly performance dashboard',
      'Google Business Profile optimization',
      'Basic conversion tracking',
    ],
    cta: 'Get Started',
    popular: false,
    warm: false,
    accentColor: '#8B83FF',
  },
  {
    name: 'Growth',
    icon: Sparkles,
    price: '1,997',
    period: '/month',
    desc: 'For established firms ready to dominate their market with full-channel AI marketing.',
    features: [
      'Everything in Starter',
      'Google & Meta Ads (up to $10k spend)',
      'AI content: 4 blog posts + 2 landing pages',
      'Full email automation suite',
      'Lead scoring & CRM integration',
      'Competitor campaign monitoring',
      'Monthly strategy call',
      'AI search (GEO) optimization',
    ],
    cta: 'Get Started',
    popular: true,
    warm: true,
    accentColor: '#C084FC',
  },
  {
    name: 'Dominate',
    icon: Crown,
    price: '3,497',
    period: '/month',
    desc: 'Full-scale AI marketing for multi-location and high-growth California law firms.',
    features: [
      'Everything in Growth',
      'Unlimited ad spend management',
      'Weekly content production',
      'Social media management',
      'AI video ad creative',
      'Dedicated account manager',
      'Weekly performance calls',
      'Custom AI automation workflows',
      '199+ CA city geo-targeting',
      'Quarterly growth strategy review',
    ],
    cta: 'Talk To Us',
    popular: false,
    warm: false,
    accentColor: '#FF8C42',
  },
]

const faqs = [
  {
    q: 'How quickly will I see results from AI marketing?',
    a: 'Google Ads can generate leads within 48-72 hours of launch. SEO and content marketing typically see meaningful traction in 60-90 days. Email automation results are measurable from week one. We set clear expectations and milestone targets at the start of every engagement.',
  },
  {
    q: 'Do you manage our Google Ads spend directly?',
    a: 'Yes — we manage the full Google Ads account including campaign setup, bid strategy, A/B testing, and negative keyword management. Ad spend is billed directly to your Google account; we charge a management fee on top. We\'re transparent about every dollar.',
  },
  {
    q: 'What makes AI marketing different from traditional marketing?',
    a: 'Traditional agencies rely on manual optimization, periodic A/B tests, and gut instinct. Our AI tools analyze performance in real time, auto-adjust bids based on predicted case value, score leads before they hit your inbox, and surface content opportunities competitors haven\'t found yet.',
  },
  {
    q: 'Is your marketing compliant with California State Bar rules?',
    a: 'Yes. Every ad, landing page, email, and piece of content we produce is reviewed against California State Bar advertising guidelines — Rule 7.1 and related rules. We never use prohibited terminology or make guarantees about outcomes.',
  },
  {
    q: 'Do you work with law firms outside California?',
    a: 'Our core focus is California law firms because we\'ve built deep geo-specific knowledge of CA markets, competitors, and search patterns. We occasionally take on select out-of-state clients — reach out to discuss your situation.',
  },
  {
    q: 'What AI tools do you actually use?',
    a: 'We use n8n for workflow automation, Windsor.ai for cross-channel data aggregation, ChatGPT API for content generation and ad copy, Google AI APIs for smart bidding, and custom ML models for lead scoring. We show clients exactly what\'s in the stack — no black boxes.',
  },
  {
    q: 'Can I keep my existing Google Ads account?',
    a: 'Yes. We prefer to work within your existing account to preserve historical data and Quality Scores. If you\'re starting fresh, we\'ll set up a new account with the right structure from day one.',
  },
  {
    q: 'What does the monthly reporting look like?',
    a: 'Every client gets a live dashboard with cost per lead, ROAS by channel, keyword rankings, email open/click rates, and new case attribution. Monthly calls walk through the numbers and plan the next 30 days. No hiding behind vanity metrics.',
  },
]

export default function MarketingPricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section id="pricing" ref={ref} className="relative py-24 px-4 sm:px-6 md:px-12">
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
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">Transparent Pricing</span>
          </span>
          <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
            Simple Monthly Retainers.
            <br />
            <span style={{ color: '#C084FC', filter: 'drop-shadow(0 0 20px rgba(192,132,252,0.5))' }}>No Setup Fees.</span>
          </h2>
          <p className="mt-4 text-white/40 text-sm max-w-md mx-auto">
            All plans include full onboarding, campaign setup, and our 30-day performance guarantee.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start mb-20">
          {plans.map((plan, i) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl overflow-hidden flex flex-col"
                style={{
                  marginTop: plan.popular ? '-12px' : '0',
                  background: plan.popular ? 'rgba(22, 12, 36, 0.98)' : 'rgba(14,14,20,0.98)',
                  border: plan.popular ? `1px solid ${plan.accentColor}45` : '1px solid rgba(255,255,255,0.08)',
                  boxShadow: plan.popular ? `0 0 60px ${plan.accentColor}25, 0 20px 60px rgba(0,0,0,0.5)` : '0 8px 40px rgba(0,0,0,0.4)',
                }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 h-[1.5px]" style={{ background: `linear-gradient(to right, transparent, ${plan.accentColor}, transparent)` }} />
                )}
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ background: `${plan.accentColor}20`, border: `1px solid ${plan.accentColor}50`, color: plan.accentColor }}>
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${plan.accentColor}18`, border: `1.5px solid ${plan.accentColor}40` }}>
                      <Icon size={20} style={{ color: plan.accentColor }} strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg leading-tight">{plan.name}</div>
                      <div className="text-white/30 text-xs mt-0.5">{plan.desc}</div>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-white/30 text-sm">$</span>
                    <span className="font-display font-bold leading-none" style={{ fontSize: 'clamp(32px, 4vw, 46px)', color: plan.accentColor, letterSpacing: '-0.03em' }}>
                      {plan.price}
                    </span>
                    <span className="text-white/30 text-sm ml-1">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check size={14} className="shrink-0 mt-0.5" style={{ color: plan.accentColor }} strokeWidth={2.5} />
                        <span className="text-[13px] text-white/55 leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    style={
                      plan.popular
                        ? { background: `linear-gradient(135deg, ${plan.accentColor}, #9333EA)`, color: '#fff', boxShadow: `0 0 24px ${plan.accentColor}35` }
                        : { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.75)' }
                    }
                  >
                    {plan.cta}
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Guarantee strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="rounded-2xl p-6 mb-20 text-center"
          style={{ background: 'rgba(192,132,252,0.06)', border: '1px solid rgba(192,132,252,0.18)' }}
        >
          <div className="text-[13px] text-white/60 max-w-xl mx-auto">
            <span className="font-semibold text-white">30-Day Performance Guarantee</span> — If we don't hit the agreed lead volume target in your first 30 days, we work free until we do. No contracts. Cancel anytime.
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-white" style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}>
              Frequently Asked Questions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-start justify-between gap-3 px-5 py-4 text-left"
                >
                  <span className="text-[14px] text-white/80 font-medium leading-snug">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className="shrink-0 mt-0.5 transition-transform duration-300"
                    style={{
                      color: 'rgba(192,132,252,0.6)',
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-5 pb-4 pt-0">
                        <div className="h-px mb-3" style={{ background: 'linear-gradient(to right, transparent, rgba(192,132,252,0.12), transparent)' }} />
                        <p className="text-[12px] text-white/40 leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
