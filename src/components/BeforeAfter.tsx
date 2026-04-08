import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { X, Check } from 'lucide-react'

const comparisons = [
  {
    category: 'Delivery',
    before: '3–6 months build time',
    after: 'AI-built and launched in 7 days',
  },
  {
    category: 'Cost',
    before: '$10,000–$30,000+ for custom design',
    after: 'Starting at $2,500 with AI efficiency',
  },
  {
    category: 'SEO',
    before: 'SEO added as afterthought (if at all)',
    after: 'SEO architecture built from day one',
  },
  {
    category: 'AI Search',
    before: 'Invisible to ChatGPT, Perplexity & AI Overviews',
    after: 'GEO-optimized — cited by 5+ AI platforms',
  },
  {
    category: 'Compliance',
    before: 'Risky disclaimers, missing disclosures',
    after: 'CA State Bar Rules 7.1–7.5 compliant',
  },
  {
    category: 'Speed',
    before: 'Slow loading, poor Core Web Vitals',
    after: '95+ PageSpeed, sub-second load time',
  },
]

export default function BeforeAfter() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 px-4 sm:px-6 overflow-hidden">
      {/* Deep background atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Red flood left */}
        <div className="absolute -left-20 top-0 bottom-0 w-[55%]"
          style={{ background: 'radial-gradient(ellipse 80% 70% at 20% 50%, rgba(239,68,68,0.14) 0%, transparent 70%)' }} />
        {/* Green flood right */}
        <div className="absolute -right-20 top-0 bottom-0 w-[55%]"
          style={{ background: 'radial-gradient(ellipse 80% 70% at 80% 50%, rgba(52,211,153,0.14) 0%, transparent 70%)' }} />
        {/* Centre split line glow */}
        <div className="absolute left-1/2 top-[10%] bottom-[10%] w-px -translate-x-1/2"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.04) 70%, transparent)' }} />
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">AI vs Traditional</span>
          </span>
          <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Old Way vs{' '}
            <span className="glow-text-warm">Our Way</span>
          </h2>
          <p className="mt-3 text-white/40 text-sm max-w-md mx-auto">
            See exactly why California law firms are switching to AI-built websites.
          </p>
        </motion.div>

        {/* Comparison grid */}
        <div className="grid lg:grid-cols-[1fr_56px_1fr] gap-4 lg:gap-0 items-start">

          {/* ── Left: Traditional ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Red aura halo */}
            <div className="absolute pointer-events-none" style={{
              inset: '-32px -20px -40px -20px',
              background: 'radial-gradient(ellipse at 50% 50%, rgba(239,68,68,0.30) 0%, transparent 68%)',
              filter: 'blur(24px)',
              zIndex: 0,
            }} />
            <div className="relative rounded-2xl overflow-hidden" style={{ zIndex: 1,
              background: 'linear-gradient(145deg, rgba(239,68,68,0.13) 0%, rgba(15,10,10,0.85) 100%)',
              border: '1px solid rgba(239,68,68,0.35)',
              boxShadow: '0 0 60px rgba(239,68,68,0.18), 0 0 120px rgba(239,68,68,0.08), inset 0 1px 0 rgba(239,68,68,0.18)',
            }}
          >
            {/* Column header */}
            <div
              className="px-6 py-4 flex items-center gap-3"
              style={{ borderBottom: '1px solid rgba(239,68,68,0.15)' }}
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={{ background: 'rgba(239,68,68,0.18)', border: '1px solid rgba(239,68,68,0.4)' }}
              >
                <X size={14} color="#EF4444" strokeWidth={2.5} />
              </div>
              <span
                className="text-[11px] font-extrabold uppercase tracking-widest"
                style={{ color: '#EF4444' }}
              >
                Traditional Website
              </span>
            </div>

            {/* Rows */}
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
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: 'rgba(239,68,68,0.15)',
                      border: '1px solid rgba(239,68,68,0.35)',
                    }}
                  >
                    <X size={10} color="#EF4444" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="text-[9px] font-semibold uppercase tracking-widest text-white/20 mb-0.5">
                      {row.category}
                    </div>
                    <div className="text-[13px] text-white/55 leading-snug">
                      {row.before}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            </div>
          </motion.div>

          {/* ── Center VS divider ── */}
          <div className="hidden lg:flex flex-col items-center justify-center self-stretch py-10 gap-3">
            <div className="w-px flex-1" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent)' }} />
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
              }}
            >
              <span className="text-[10px] font-bold text-white/30">VS</span>
            </div>
            <div className="w-px flex-1" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent)' }} />
          </div>

          {/* ── Right: AI-Powered ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Green aura halo */}
            <div className="absolute pointer-events-none" style={{
              inset: '-32px -20px -40px -20px',
              background: 'radial-gradient(ellipse at 50% 50%, rgba(52,211,153,0.28) 0%, transparent 68%)',
              filter: 'blur(24px)',
              zIndex: 0,
            }} />
            <div className="relative rounded-2xl overflow-hidden" style={{ zIndex: 1,
              background: 'linear-gradient(145deg, rgba(52,211,153,0.12) 0%, rgba(10,15,12,0.88) 100%)',
              border: '1px solid rgba(52,211,153,0.40)',
              boxShadow: '0 0 60px rgba(52,211,153,0.18), 0 0 120px rgba(52,211,153,0.08), inset 0 1px 0 rgba(52,211,153,0.20)',
            }}
          >
            {/* Column header */}
            <div
              className="px-6 py-4 flex items-center gap-3"
              style={{ borderBottom: '1px solid rgba(52,211,153,0.18)' }}
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: 'rgba(52,211,153,0.18)',
                  border: '1px solid rgba(52,211,153,0.45)',
                  boxShadow: '0 0 10px rgba(52,211,153,0.2)',
                }}
              >
                <Check size={14} color="#34D399" strokeWidth={2.5} />
              </div>
              <span
                className="text-[11px] font-extrabold uppercase tracking-widest"
                style={{ color: '#34D399', textShadow: '0 0 12px rgba(52,211,153,0.5)' }}
              >
                AI-Powered Website
              </span>
            </div>

            {/* Rows */}
            <div className="p-4 flex flex-col gap-1">
              {comparisons.map((row, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.15 + idx * 0.07 }}
                  className="flex items-start gap-3 rounded-xl px-4 py-3"
                  style={{ background: 'rgba(52,211,153,0.04)' }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: 'rgba(52,211,153,0.18)',
                      border: '1px solid rgba(52,211,153,0.45)',
                      boxShadow: '0 0 8px rgba(52,211,153,0.25)',
                    }}
                  >
                    <Check size={10} color="#34D399" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="text-[9px] font-semibold uppercase tracking-widest text-white/25 mb-0.5">
                      {row.category}
                    </div>
                    <div className="text-[13px] text-white/90 leading-snug font-medium">
                      {row.after}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
