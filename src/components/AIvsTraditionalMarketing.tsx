import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { X, Check, ArrowRight } from 'lucide-react'

const comparisons = [
  {
    category: 'Bid Optimization',
    before: 'Manual bid adjustments once a week',
    after: 'AI-automated bidding adjusts every hour based on predicted case value',
  },
  {
    category: 'Lead Scoring',
    before: 'Intake team screens every inquiry manually',
    after: 'AI scores and ranks leads before they reach your team — auto-filters time-wasters',
  },
  {
    category: 'Ad Creative',
    before: 'Same ad copy runs for months, tested quarterly',
    after: 'ChatGPT generates 20+ copy variants; winning ads identified in days',
  },
  {
    category: 'Reporting',
    before: 'Monthly PDF with clicks and impressions — no revenue tie',
    after: 'Live dashboard: cost per lead → cost per case → revenue attributed to each keyword',
  },
  {
    category: 'Email Follow-Up',
    before: 'Manual follow-ups, leads fall through the cracks',
    after: 'Automated nurture sequences keep leads warm for 90 days — no manual effort',
  },
  {
    category: 'Search Channels',
    before: 'Google Ads only — Bing and Microsoft Ads ignored',
    after: 'Google + Bing managed together — Bing delivers 20–35% lower CPC for legal keywords',
  },
  {
    category: 'Measurement',
    before: 'Clicks and impressions in a PDF — no connection to actual cases',
    after: 'GA4 + call tracking ties every keyword → click → call → signed retainer',
  },
]

export default function AIvsTraditionalMarketing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 top-0 bottom-0 w-[55%]"
          style={{ background: 'radial-gradient(ellipse 80% 70% at 20% 50%, rgba(239,68,68,0.10) 0%, transparent 70%)' }} />
        <div className="absolute -right-20 top-0 bottom-0 w-[55%]"
          style={{ background: 'radial-gradient(ellipse 80% 70% at 80% 50%, rgba(192,132,252,0.12) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC]" />
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">AI vs Traditional Marketing</span>
          </span>
          <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Why Traditional Agencies{' '}
            <br />
            <span style={{ color: '#C084FC', filter: 'drop-shadow(0 0 20px rgba(192,132,252,0.5))' }}>Can't Keep Up</span>
          </h2>
          <p className="mt-3 text-white/40 text-sm max-w-md mx-auto">
            The gap between a traditional legal marketing agency and one running AI is widening every month.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_56px_1fr] gap-4 lg:gap-0 items-start">

          {/* Left: Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
            className="relative"
          >
            <div className="absolute pointer-events-none" style={{
              inset: '-32px -20px -40px -20px',
              background: 'radial-gradient(ellipse at 50% 50%, rgba(239,68,68,0.22) 0%, transparent 68%)',
              filter: 'blur(24px)',
              zIndex: 0,
            }} />
            <div className="relative rounded-2xl overflow-hidden" style={{
              zIndex: 1,
              background: 'linear-gradient(145deg, rgba(239,68,68,0.10) 0%, rgba(15,8,8,0.92) 100%)',
              border: '1px solid rgba(239,68,68,0.30)',
              boxShadow: '0 0 60px rgba(239,68,68,0.12), inset 0 1px 0 rgba(239,68,68,0.12)',
              transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLDivElement
              el.style.boxShadow = '0 0 80px rgba(239,68,68,0.28), 0 16px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(239,68,68,0.22)'
              el.style.borderColor = 'rgba(239,68,68,0.55)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLDivElement
              el.style.boxShadow = '0 0 60px rgba(239,68,68,0.12), inset 0 1px 0 rgba(239,68,68,0.12)'
              el.style.borderColor = 'rgba(239,68,68,0.30)'
            }}
            >
              <div className="px-6 py-4 flex items-center gap-3" style={{ borderBottom: '1px solid rgba(239,68,68,0.12)' }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.35)' }}>
                  <X size={14} color="#EF4444" strokeWidth={2.5} />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest" style={{ color: '#EF4444' }}>
                  Traditional Marketing Agency
                </span>
              </div>

              <div className="p-4 flex flex-col gap-1">
                {comparisons.map((row, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.15 + idx * 0.07 }}
                    className="flex items-start gap-3 rounded-xl px-4 py-3"
                    style={{ background: 'rgba(239,68,68,0.04)' }}
                  >
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.30)' }}>
                      <X size={10} color="#EF4444" strokeWidth={3} />
                    </div>
                    <div>
                      <div className="text-[9px] font-semibold uppercase tracking-widest text-white/20 mb-0.5">{row.category}</div>
                      <div className="text-[13px] text-white/50 leading-snug">{row.before}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center VS */}
          <div className="hidden lg:flex flex-col items-center justify-center self-stretch py-10 gap-3">
            <div className="w-px flex-1" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.07), transparent)' }} />
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}>
              <span className="text-[10px] font-bold text-white/25">VS</span>
            </div>
            <div className="w-px flex-1" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.07), transparent)' }} />
          </div>

          {/* Right: ByteZero AI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
            className="relative"
          >
            <div className="absolute pointer-events-none" style={{
              inset: '-32px -20px -40px -20px',
              background: 'radial-gradient(ellipse at 50% 50%, rgba(192,132,252,0.25) 0%, transparent 68%)',
              filter: 'blur(24px)',
              zIndex: 0,
            }} />
            <div className="relative rounded-2xl overflow-hidden" style={{
              zIndex: 1,
              background: 'linear-gradient(145deg, rgba(192,132,252,0.10) 0%, rgba(10,5,18,0.92) 100%)',
              border: '1px solid rgba(192,132,252,0.35)',
              boxShadow: '0 0 60px rgba(192,132,252,0.15), inset 0 1px 0 rgba(192,132,252,0.15)',
              transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLDivElement
              el.style.boxShadow = '0 0 90px rgba(192,132,252,0.32), 0 16px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(192,132,252,0.25)'
              el.style.borderColor = 'rgba(192,132,252,0.65)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLDivElement
              el.style.boxShadow = '0 0 60px rgba(192,132,252,0.15), inset 0 1px 0 rgba(192,132,252,0.15)'
              el.style.borderColor = 'rgba(192,132,252,0.35)'
            }}
            >
              <div className="px-6 py-4 flex items-center gap-3" style={{ borderBottom: '1px solid rgba(192,132,252,0.14)' }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(192,132,252,0.18)', border: '1px solid rgba(192,132,252,0.45)', boxShadow: '0 0 10px rgba(192,132,252,0.2)' }}>
                  <Check size={14} color="#C084FC" strokeWidth={2.5} />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest"
                  style={{ color: '#C084FC', textShadow: '0 0 12px rgba(192,132,252,0.5)' }}>
                  ByteZero AI Marketing
                </span>
              </div>

              <div className="p-4 flex flex-col gap-1">
                {comparisons.map((row, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.15 + idx * 0.07 }}
                    className="flex items-start gap-3 rounded-xl px-4 py-3"
                    style={{ background: 'rgba(192,132,252,0.05)' }}
                  >
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: 'rgba(192,132,252,0.18)', border: '1px solid rgba(192,132,252,0.40)', boxShadow: '0 0 8px rgba(192,132,252,0.20)' }}>
                      <Check size={10} color="#C084FC" strokeWidth={3} />
                    </div>
                    <div>
                      <div className="text-[9px] font-semibold uppercase tracking-widest text-white/25 mb-0.5">{row.category}</div>
                      <div className="text-[13px] text-white/88 leading-snug font-medium">{row.after}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-white/35 text-[13px] mb-5">
            Ready to leave traditional marketing behind?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded-xl px-7 py-3.5 text-[13px] font-semibold transition-all hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, #C084FC, #9333EA)',
              color: '#fff',
              boxShadow: '0 0 28px rgba(192,132,252,0.35)',
            }}
          >
            Book a Free Strategy Call
            <ArrowRight size={15} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
