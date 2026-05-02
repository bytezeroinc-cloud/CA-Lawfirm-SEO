import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react'
import { getTheme } from '../../data/cities'
import type { City } from '../../data/cities'

export default function CityPainPoints({ city }: { city: City }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { accent } = city
  const t = getTheme(city)
  const isLight = t.isLight

  // Theme-aware "problem" tint (still red-ish but softer in light mode)
  const problemBg = isLight ? 'rgba(220,38,38,0.06)' : 'rgba(239,68,68,0.12)'
  const problemBorder = isLight ? 'rgba(220,38,38,0.20)' : 'rgba(239,68,68,0.25)'
  const problemText = isLight ? 'rgba(185,28,28,0.85)' : 'rgba(252,165,165,0.80)'
  const problemIcon = isLight ? '#dc2626' : '#f87171'

  const cardShadow = isLight
    ? '0 8px 28px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)'
    : '0 12px 40px rgba(0,0,0,0.45)'

  return (
    <section ref={ref} className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 sm:mb-20 text-center max-w-3xl mx-auto"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
            style={{
              background: t.glassBg,
              border: `1px solid ${t.glassBorder}`,
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: accent.primary, boxShadow: `0 0 6px ${accent.primary}` }}
            />
            <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: t.textSecondary }}>
              {city.shortName} Firm Pain Points
            </span>
          </span>
          <h2
            className="font-display font-bold leading-tight"
            style={{
              fontSize: 'clamp(28px, 4vw, 52px)',
              letterSpacing: '-0.02em',
              color: t.textPrimary,
            }}
          >
            {"What's actually broken for "}
            <span style={isLight
              ? { color: accent.secondary }
              : { color: accent.primary, filter: `drop-shadow(0 0 18px ${accent.glow})` }
            }>
              {city.name}
            </span>{' '}
            law firms
          </h2>
          <p className="mt-5 text-[14px] sm:text-[15px] leading-relaxed" style={{ color: t.textMuted }}>
            Real problems we hear from founders and managing partners — and how we fix them with AI.
          </p>
        </motion.div>

        {/* Pain → solution cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {city.painPoints.map((pp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: t.bgCard,
                backdropFilter: isLight ? 'blur(20px) saturate(1.2)' : 'blur(8px)',
                WebkitBackdropFilter: isLight ? 'blur(20px) saturate(1.2)' : 'blur(8px)',
                border: `1px solid ${isLight ? t.borderSubtle : `rgba(${accent.primaryRgb},0.18)`}`,
                boxShadow: cardShadow,
              }}
            >
              <div
                className="h-[2px]"
                style={{ background: `linear-gradient(to right, transparent, ${accent.primary}, transparent)` }}
              />

              <div className="p-6 sm:p-7 flex flex-col gap-5 flex-1">
                {/* Pain */}
                <div className="flex items-start gap-3">
                  <div
                    className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: problemBg, border: `1px solid ${problemBorder}` }}
                  >
                    <AlertCircle size={16} style={{ color: problemIcon }} strokeWidth={2.2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: problemText }}>
                      The Problem
                    </div>
                    <h3
                      className="font-display font-bold text-[16px] sm:text-[17px] leading-snug"
                      style={{ color: t.textPrimary }}
                    >
                      {pp.pain}
                    </h3>
                  </div>
                </div>

                <p className="text-[13px] sm:text-[14px] leading-relaxed" style={{ color: t.textSecondary }}>
                  {pp.detail}
                </p>

                <div className="h-px" style={{ background: `linear-gradient(to right, transparent, rgba(${accent.primaryRgb},0.30), transparent)` }} />

                {/* Solution */}
                <div className="flex items-start gap-3">
                  <div
                    className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      background: `rgba(${accent.primaryRgb},${isLight ? 0.06 : 0.12})`,
                      border: `1px solid rgba(${accent.primaryRgb},${isLight ? 0.20 : 0.30})`,
                    }}
                  >
                    <CheckCircle2 size={16} style={{ color: accent.primary }} strokeWidth={2.2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-[10px] font-semibold uppercase tracking-widest mb-1"
                      style={{ color: accent.primary }}
                    >
                      How we fix it
                    </div>
                    <p className="text-[13px] sm:text-[14px] leading-relaxed" style={{ color: t.textPrimary, opacity: isLight ? 0.85 : 1 }}>
                      {pp.solution}
                    </p>
                  </div>
                </div>

                {pp.metric && (
                  <div
                    className="mt-auto rounded-lg px-3 py-2.5 text-[12px] font-semibold"
                    style={{
                      background: `rgba(${accent.primaryRgb},${isLight ? 0.05 : 0.07})`,
                      border: `1px solid rgba(${accent.primaryRgb},${isLight ? 0.15 : 0.20})`,
                      color: accent.primary,
                    }}
                  >
                    <span className="opacity-70 font-normal mr-1.5">Result:</span>
                    {pp.metric}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inline CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <p className="text-[14px] text-center sm:text-left" style={{ color: t.textSecondary }}>
            {"Sound like your firm? Let's build the fix."}
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg px-6 py-3 text-[14px] font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: accent.gradient,
              color: '#fff',
              boxShadow: isLight ? '0 8px 24px rgba(0,0,0,0.16)' : `0 0 24px ${accent.glow}`,
            }}
          >
            Get my {city.shortName} audit
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
