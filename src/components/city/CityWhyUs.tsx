import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'
import { getTheme } from '../../data/cities'
import type { City, WhyUsItem } from '../../data/cities'

const FALLBACK_WHY: WhyUsItem[] = [
  { stat: '7 days', statLabel: 'Onboarding to live', title: 'Speed without compromise', description: 'AI-engineered workflows ship complete systems in days, not months.' },
  { stat: '95%', statLabel: 'Client retention', title: 'Long-term partnerships', description: 'We win when you win. Every engagement is built around compounding results.' },
  { stat: '199+', statLabel: 'CA cities served', title: 'Local-market depth', description: 'Hyper-local content + ad targeting calibrated for every California submarket.' },
  { stat: '4.8×', statLabel: 'Average ROAS', title: 'Measurable ROI', description: 'Every dollar of ad spend tracked, attributed, and optimized in real time.' },
]

export default function CityWhyUs({ city }: { city: City }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { accent } = city
  const items = city.whyUs ?? FALLBACK_WHY
  const t = getTheme(city)
  const isLight = t.isLight

  return (
    <section ref={ref} className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 sm:mb-18 text-center max-w-3xl mx-auto"
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
            <Sparkles size={11} style={{ color: accent.primary }} strokeWidth={2.4} />
            <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: t.textSecondary }}>
              Why Work With Us
            </span>
          </span>
          <h2
            className="font-display font-bold leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)', letterSpacing: '-0.02em', color: t.textPrimary }}
          >
            We&apos;re not your{' '}
            <span style={isLight
              ? { color: accent.secondary }
              : { color: accent.primary, filter: `drop-shadow(0 0 18px ${accent.glow})` }
            }>
              average agency
            </span>
            {' — '}we&apos;re an AI engineering team
          </h2>
          <p className="mt-5 text-[14px] sm:text-[15px] leading-relaxed" style={{ color: t.textSecondary }}>
            Most agencies sell hours. We sell systems. Built for {city.name} firms that want compounding wins, not monthly retainers with hand-wavy reports.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.10, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-7 sm:p-8 flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-7 relative overflow-hidden"
              style={{
                background: t.bgCard,
                backdropFilter: isLight ? 'blur(20px) saturate(1.2)' : 'blur(8px)',
                WebkitBackdropFilter: isLight ? 'blur(20px) saturate(1.2)' : 'blur(8px)',
                border: `1px solid ${isLight ? t.borderSubtle : `rgba(${accent.primaryRgb},0.18)`}`,
                boxShadow: isLight
                  ? '0 8px 28px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)'
                  : '0 16px 48px rgba(0,0,0,0.5)',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(to right, transparent, ${accent.primary}, transparent)` }}
              />

              <div className="shrink-0 sm:w-32 flex flex-col gap-1">
                <div
                  className="font-display font-bold leading-none"
                  style={{
                    fontSize: 'clamp(36px, 4.2vw, 56px)',
                    color: accent.primary,
                    letterSpacing: '-0.03em',
                    filter: isLight ? 'none' : `drop-shadow(0 0 14px ${accent.glow})`,
                  }}
                >
                  {item.stat}
                </div>
                <div className="text-[11px] uppercase tracking-widest" style={{ color: t.textMuted }}>
                  {item.statLabel}
                </div>
              </div>

              <div
                className="hidden sm:block w-px self-stretch"
                style={{ background: `linear-gradient(to bottom, transparent, rgba(${accent.primaryRgb},0.25), transparent)` }}
              />

              <div className="flex-1">
                <h3
                  className="font-display font-bold mb-2 leading-snug"
                  style={{ fontSize: 'clamp(17px, 1.5vw, 20px)', color: t.textPrimary }}
                >
                  {item.title}
                </h3>
                <p className="text-[13.5px] sm:text-[14px] leading-relaxed" style={{ color: t.textSecondary }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <p className="text-[14px] text-center sm:text-left" style={{ color: t.textSecondary }}>
            See what we&apos;d do for your firm — free, no commitment.
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
            Claim Your Free Audit
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
