import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

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
    q: 'What does an AI law firm website cost?',
    a: 'Our packages start at $2,500 for a Starter site and go up to $8,000 for full-scale digital domination. Every plan includes custom design, SEO architecture, State Bar compliance, and mobile optimization. No hidden fees, no long-term contracts.',
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

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  // Split 8 FAQs into two columns of 4
  const col1 = faqs.slice(0, 4)
  const col2 = faqs.slice(4, 8)

  return (
    <section id="faq" ref={ref} className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">FAQ</span>
          </span>
          <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
            Frequently Asked
            <br />
            <span className="glow-text-warm">Questions</span>
          </h2>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            {col1.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * idx }}
              >
                <FAQItem
                  faq={faq}
                  isOpen={openIdx === idx}
                  toggle={() => setOpenIdx(openIdx === idx ? null : idx)}
                />
              </motion.div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            {col2.map((faq, idx) => {
              const globalIdx = idx + 4
              return (
                <motion.div
                  key={globalIdx}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.05 * idx + 0.1 }}
                >
                  <FAQItem
                    faq={faq}
                    isOpen={openIdx === globalIdx}
                    toggle={() => setOpenIdx(openIdx === globalIdx ? null : globalIdx)}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
