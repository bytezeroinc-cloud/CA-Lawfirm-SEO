import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check, ArrowRight, Sparkles, Zap, Crown, ChevronDown } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    price: '2,000',
    period: 'one-time',
    desc: 'Perfect for solo practitioners launching their digital presence.',
    features: [
      'Custom 5-page AI-built website',
      'Mobile-first responsive design',
      'SEO architecture built-in',
      'Contact form + call tracking',
      'Google Business Profile setup',
      'CA State Bar compliant',
      '30-day post-launch support',
    ],
    cta: 'Get Started',
    popular: false,
    warm: false,
  },
  {
    name: 'Growth',
    icon: Sparkles,
    price: '4,500',
    period: 'one-time',
    desc: 'For firms ready to dominate their market and AI search.',
    features: [
      'Everything in Starter',
      'Up to 15 custom pages',
      'Full AI SEO architecture',
      'GEO optimization (AI search)',
      'Schema markup (all types)',
      'Blog + content strategy',
      'Conversion rate optimization',
      'Analytics dashboard',
      'Monthly SEO report',
    ],
    cta: 'Get Started',
    popular: true,
    warm: true,
  },
  {
    name: 'Dominate',
    icon: Crown,
    price: '6,000',
    period: 'one-time',
    desc: 'Full-scale digital domination for ambitious firms.',
    features: [
      'Everything in Growth',
      'Unlimited pages',
      'Multi-location SEO',
      'Video production',
      'A/B testing framework',
      'Custom integrations (CRM, intake)',
      'Dedicated account manager',
      '12-month growth partnership',
      'Quarterly strategy reviews',
      'Competitor monitoring',
    ],
    cta: 'Talk To Us',
    popular: false,
    warm: false,
  },
]

const faqs = [
  {
    q: 'How is an AI-built law firm website different from a traditional website?',
    a: 'Traditional websites take 3-6 months and cost $10,000-$30,000+. Our AI analyzes 500+ top-performing law firm websites to identify winning design patterns, content structures, and conversion elements — then generates optimized layouts, SEO architecture, and content tailored to your practice area. Result: a better website in 7 days at a fraction of the cost.',
  },
  {
    q: 'Will my AI-built website rank on Google?',
    a: 'Yes. Every site is built with SEO architecture from day one — proper URL structure, schema markup, Core Web Vitals optimization, internal linking, and keyword-targeted content. Our average client sees a 300% organic traffic increase within 6-12 months.',
  },
  {
    q: 'Will my website be found by ChatGPT and AI search tools?',
    a: 'Absolutely. We implement Generative Engine Optimization (GEO) including speakable schema, structured FAQ markup, llms.txt configuration, E-E-A-T signals, and citability scoring. Your firm gets optimized for Google AI Overviews, ChatGPT, Perplexity AI, Claude, and Google Gemini.',
  },
  {
    q: 'How long does it take to build an AI law firm website?',
    a: 'Most sites launch within 5-7 business days from kickoff. Our AI-accelerated workflow handles design generation, content structuring, and SEO planning so our team can focus on customization and quality assurance.',
  },
  {
    q: 'Is the website compliant with California State Bar advertising rules?',
    a: 'Every site is reviewed against California State Bar Rules 7.1-7.5. We handle proper disclaimers, testimonial disclosures, specialization language, and advertising compliance. Your site is also WCAG 2.1 AA accessible and ADA compliant.',
  },
  {
    q: 'Does ByteZero build websites for all practice areas?',
    a: 'Yes. We specialize in Personal Injury, Criminal Defense, Family Law, Immigration, Estate Planning, DUI Defense, and more. Each practice area gets tailored design patterns, content strategy, and SEO targeting specific to its competitive landscape.',
  },
  {
    q: 'Do you handle hosting and ongoing SEO after launch?',
    a: 'Yes. Our Growth and Dominate plans include ongoing SEO optimization, security updates, performance monitoring, AI search monitoring, and monthly reporting. We also offer standalone SEO services for firms that already have a website.',
  },
  {
    q: 'What does the price include?',
    a: 'Every plan includes custom design, full SEO architecture, CA State Bar compliance review, mobile optimization, and launch support. No hidden fees, no long-term contracts — just a high-performance website built to win clients from day one.',
  },
]

function FAQItem({ faq, isOpen, toggle }: { faq: typeof faqs[0]; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden h-fit">
      <button
        onClick={toggle}
        className="relative z-10 w-full flex items-center justify-between p-5 text-left group"
      >
        <span className="font-display font-medium text-white/80 text-[14px] pr-4 group-hover:text-white transition-colors leading-snug">
          {faq.q}
        </span>
        <ChevronDown
          size={16}
          className={`text-[#FF8C42]/60 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
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
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF8C42]/10 to-transparent mb-3" />
              <p className="text-[12px] text-white/40 leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const col1 = faqs.slice(0, 4)
  const col2 = faqs.slice(4, 8)

  return (
    <section id="pricing" ref={ref} className="relative py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* ── Pricing Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">Investment</span>
          </span>
          <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Transparent Pricing,
            <br />
            <span className="glow-text-warm">Extraordinary Value</span>
          </h2>
          <p className="text-[14px] text-white/35 mt-4 max-w-lg mx-auto">
            No hidden fees, no long-term contracts. Just results.
          </p>
        </motion.div>

        {/* ── Pricing Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start mb-20">
          {plans.map((plan, idx) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * idx }}
                className={`
                  rounded-2xl p-8 relative group
                  ${plan.popular ? 'md:-mt-4 md:mb-4 ring-1 ring-[#FF8C42]/25 glass-card-warm' : 'glass-card'}
                `}
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl ${plan.warm ? 'glass-warm' : 'glass'} flex items-center justify-center mb-5`}>
                    <Icon size={20} className={plan.warm ? 'text-[#FF8C42]' : 'text-[#8B83FF]'} strokeWidth={1.8} />
                  </div>

                  <h3 className="font-display font-semibold text-white text-[20px]">{plan.name}</h3>
                  <p className="text-[13px] text-white/35 mt-1 mb-5">{plan.desc}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-[14px] text-white/30">$</span>
                    <span className="font-display font-bold text-[40px] leading-none text-white">{plan.price}</span>
                    <span className="text-[13px] text-white/30 ml-2">{plan.period}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check size={14} className={plan.warm ? 'text-[#FF8C42] mt-0.5 shrink-0' : 'text-[#6C63FF] mt-0.5 shrink-0'} strokeWidth={2.5} />
                        <span className="text-[13px] text-white/50">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className={`
                      w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-[14px] font-semibold transition-all duration-300 group/btn
                      ${plan.popular
                        ? 'text-white'
                        : 'glass hover:bg-white/[0.06] text-white/70 hover:text-white'
                      }
                    `}
                    style={plan.popular ? {
                      background: 'linear-gradient(135deg, rgba(255,140,66,0.2) 0%, rgba(108,99,255,0.15) 100%)',
                      border: '1px solid rgba(255,140,66,0.3)',
                    } : undefined}
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
            All plans include a <span className="text-[#FF8C42]/70 font-medium">100% satisfaction guarantee</span>. Not happy? We'll rebuild it for free.
          </p>
        </motion.div>

        {/* ── FAQ ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">FAQ</span>
          </span>
          <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}>
            Frequently Asked
            <span className="glow-text-warm"> Questions</span>
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
