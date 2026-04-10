import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check, ArrowRight, Zap, Sparkles, Crown, ChevronDown } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    price: '1,500',
    period: '/month',
    desc: 'For solo practitioners and small firms building their online presence.',
    features: [
      'Up to 10 target keywords',
      'On-page SEO optimization',
      'Technical SEO audit & fixes',
      'Google Business Profile',
      'Monthly ranking report',
      'CA State Bar compliant content',
      '1 blog post per month',
    ],
    cta: 'Get Started',
    popular: false,
    warm: false,
    accentColor: '#8B83FF',
  },
  {
    name: 'Growth',
    icon: Sparkles,
    price: '2,997',
    period: '/month',
    desc: 'For established firms ready to dominate Google and AI search.',
    features: [
      'Everything in Starter',
      'Up to 50 target keywords',
      'GEO optimization (AI search)',
      'Full schema markup suite',
      'Local SEO — 10+ CA cities',
      '4 blog posts per month',
      'Monthly strategy call',
      'Competitor monitoring',
      'Conversion rate analysis',
    ],
    cta: 'Get Started',
    popular: true,
    warm: true,
    accentColor: '#FF8C42',
  },
  {
    name: 'Dominate',
    icon: Crown,
    price: '4,997',
    period: '/month',
    desc: 'Full-scale SEO domination for multi-location and high-growth firms.',
    features: [
      'Everything in Growth',
      'Unlimited keywords',
      'Multi-location SEO coverage',
      'Weekly content production',
      'Authority link building',
      'AI overview monitoring',
      'Dedicated account manager',
      'Quarterly strategy review',
      '199+ CA city targeting',
      'Competitor gap campaigns',
    ],
    cta: 'Talk To Us',
    popular: false,
    warm: false,
    accentColor: '#C084FC',
  },
]

const faqs = [
  {
    q: 'How long before I see SEO results?',
    a: 'For new or underperforming sites, expect measurable movement in 60-90 days and significant ranking gains in 4-6 months. Our clients average 300% organic traffic growth within 12 months. SEO is a compounding investment — results accelerate over time.',
  },
  {
    q: 'Is your SEO different from a regular SEO agency?',
    a: 'Yes. We combine traditional technical SEO with Generative Engine Optimization (GEO) — optimizing you for Google AND AI platforms like ChatGPT, Perplexity, and Google AI Overviews. Most agencies still ignore AI search entirely.',
  },
  {
    q: 'Do you specialize in law firm SEO specifically?',
    a: 'Exclusively. Legal SEO is uniquely competitive — keyword CPCs reach $300+, compliance requirements are strict, and client psychology varies by practice area. We\'ve built our entire system around California law firms.',
  },
  {
    q: 'What makes California law firm SEO different?',
    a: 'California has 199,000+ licensed attorneys — the most competitive legal market in the US. You need California-specific keyword strategies, city-by-city local SEO, State Bar advertising compliance, and AI search optimization to stand out.',
  },
  {
    q: 'Do you handle content writing?',
    a: 'Yes. Every plan includes professionally written, SEO-optimized content. Our Growth and Dominate plans include practice-area blog posts written to target high-value keywords and establish E-E-A-T authority signals.',
  },
  {
    q: 'Will my site rank for AI Overviews and voice search?',
    a: 'Absolutely. We implement speakable schema, structured FAQ markup, llms.txt, and E-E-A-T optimization so your firm appears in Google AI Overviews, ChatGPT responses, and Perplexity citations.',
  },
  {
    q: 'Can you work with my existing website?',
    a: 'Yes. Our SEO services work with any platform — WordPress, Squarespace, Webflow, or custom code. We\'ll audit your current site and implement optimizations without disrupting your existing setup.',
  },
  {
    q: 'Is there a minimum contract length?',
    a: 'We offer month-to-month contracts with no long-term lock-in. That said, SEO requires consistent effort — we recommend a 6-month commitment for the best results. Most clients stay with us long-term because the ROI speaks for itself.',
  },
]

function FAQItem({ faq, isOpen, toggle }: { faq: typeof faqs[0]; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden h-fit">
      <button onClick={toggle} className="relative z-10 w-full flex items-center justify-between p-5 text-left group">
        <span className="font-display font-medium text-white/80 text-[14px] pr-4 group-hover:text-white transition-colors leading-snug">
          {faq.q}
        </span>
        <ChevronDown size={16} className={`text-[#60A5FA]/60 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#60A5FA]/10 to-transparent mb-3" />
              <p className="text-[12px] text-white/40 leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function SeoPricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const col1 = faqs.slice(0, 4)
  const col2 = faqs.slice(4, 8)

  return (
    <section id="pricing" ref={ref} className="relative py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">SEO Investment</span>
          </span>
          <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Transparent Pricing,
            <br />
            <span style={{ color: '#60A5FA', filter: 'drop-shadow(0 0 16px rgba(96,165,250,0.5))' }}>Real Compounding Returns</span>
          </h2>
          <p className="text-[14px] text-white/35 mt-4 max-w-lg mx-auto">
            No hidden fees, no long-term lock-in. Cancel anytime — though our clients rarely do.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start mb-20">
          {plans.map((plan, idx) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * idx }}
                className={`rounded-2xl p-8 relative group ${plan.popular ? 'md:-mt-4 md:mb-4 glass-card-warm' : 'glass-card'}`}
                style={plan.popular ? { boxShadow: `0 0 0 1px rgba(96,165,250,0.25), 0 20px 60px rgba(96,165,250,0.12)` } : undefined}
              >
                <div className="relative z-10">
                  <div className={`w-11 h-11 rounded-xl ${plan.warm ? 'glass-warm' : 'glass'} flex items-center justify-center mb-5`}>
                    <Icon size={20} style={{ color: plan.accentColor }} strokeWidth={1.8} />
                  </div>

                  <h3 className="font-display font-semibold text-white text-[20px]">{plan.name}</h3>
                  <p className="text-[13px] text-white/35 mt-1 mb-5">{plan.desc}</p>

                  <div className="mb-6">
                    <span className="text-[14px] text-white/30">$</span>
                    <span className="font-display font-bold text-[40px] leading-none text-white">{plan.price}</span>
                    <span className="text-[13px] text-white/30 ml-1">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check size={14} style={{ color: plan.accentColor }} className="mt-0.5 shrink-0" strokeWidth={2.5} />
                        <span className="text-[13px] text-white/50">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-[14px] font-semibold transition-all duration-300 group/btn"
                    style={plan.popular ? {
                      background: `linear-gradient(135deg, rgba(96,165,250,0.22) 0%, rgba(59,130,246,0.16) 100%)`,
                      border: '1px solid rgba(96,165,250,0.35)',
                      color: '#fff',
                    } : {
                      color: 'rgba(255,255,255,0.65)',
                    }}
                  >
                    {plan.cta}
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mb-20"
        >
          <p className="text-[13px] text-white/25">
            All plans include a <span className="font-medium" style={{ color: 'rgba(96,165,250,0.70)' }}>100% satisfaction guarantee</span>. Not happy in 30 days? Full refund, no questions asked.
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">FAQ</span>
          </span>
          <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}>
            Frequently Asked
            <span style={{ color: '#60A5FA', filter: 'drop-shadow(0 0 16px rgba(96,165,250,0.45))' }}> Questions</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
          <div className="flex flex-col gap-3">
            {col1.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + idx * 0.05 }}
              >
                <FAQItem faq={faq} isOpen={openIdx === idx} toggle={() => setOpenIdx(openIdx === idx ? null : idx)} />
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {col2.map((faq, idx) => {
              const g = idx + 4
              return (
                <motion.div
                  key={g}
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.45 + idx * 0.05 }}
                >
                  <FAQItem faq={faq} isOpen={openIdx === g} toggle={() => setOpenIdx(openIdx === g ? null : g)} />
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
