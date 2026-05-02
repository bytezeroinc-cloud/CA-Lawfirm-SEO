import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Target, Zap, ArrowRight } from 'lucide-react'
import { getTheme } from '../../data/cities'
import type { City } from '../../data/cities'

export default function CityMarketIntel({ city }: { city: City }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { accent, marketIntel } = city
  const t = getTheme(city)
  const isLight = t.isLight

  const overlayBase = isLight ? 'rgba(245,245,247,0.85)' : 'rgba(4,4,10,0.70)'
  const overlayMid = isLight ? 'rgba(245,245,247,0.65)' : `rgba(${accent.primaryRgb},0.10)`
  const overlayBottom = isLight ? 'rgba(245,245,247,0.95)' : 'rgba(4,4,12,0.92)'
  const edgeFade = isLight ? 'rgba(245,245,247,0.85)' : 'rgba(0,0,0,0.70)'

  return (
    <section ref={ref} className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Background — accent image with theme-aware overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/city-accent.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: isLight ? 0.20 : 0.35,
            filter: isLight ? 'saturate(0.4) brightness(1.15)' : 'none',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(160deg, ${overlayBase} 0%, ${overlayMid} 50%, ${overlayBottom} 100%)`,
          }}
        />
        <div className="absolute inset-x-0 top-0 h-32" style={{ background: `linear-gradient(to bottom, ${edgeFade}, transparent)` }} />
        <div className="absolute inset-x-0 bottom-0 h-32" style={{ background: `linear-gradient(to top, ${edgeFade}, transparent)` }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
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
                  Local Market Intelligence
                </span>
              </span>

              <h2
                className="font-display font-bold leading-tight mb-5"
                style={{ fontSize: 'clamp(26px, 3.6vw, 46px)', letterSpacing: '-0.02em', color: t.textPrimary }}
              >
                {marketIntel.headline}
              </h2>

              <p className="text-[15px] leading-relaxed mb-8 max-w-md" style={{ color: t.textSecondary }}>
                {marketIntel.summary}
              </p>

              {/* Top practices */}
              <div className="mb-8">
                <div className="text-[10px] font-semibold uppercase tracking-widest mb-3 flex items-center gap-2" style={{ color: t.textMuted }}>
                  <Target size={12} style={{ color: accent.primary }} />
                  Top Practice Areas
                </div>
                <div className="flex flex-wrap gap-2">
                  {marketIntel.topPractices.map((p) => (
                    <span
                      key={p}
                      className="text-[12px] rounded-full px-3 py-1.5"
                      style={{
                        background: `rgba(${accent.primaryRgb},${isLight ? 0.05 : 0.08})`,
                        border: `1px solid rgba(${accent.primaryRgb},${isLight ? 0.15 : 0.20})`,
                        color: t.textPrimary,
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Competition badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: t.textMuted }}>
                  Competition
                </div>
                <span
                  className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded"
                  style={{
                    color: marketIntel.competitionColor,
                    background: `${marketIntel.competitionColor}${isLight ? '12' : '15'}`,
                    border: `1px solid ${marketIntel.competitionColor}40`,
                  }}
                >
                  {marketIntel.competitionLevel}
                </span>
              </div>

              {/* Opportunity callout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="rounded-xl p-5 relative overflow-hidden"
                style={{
                  background: `rgba(${accent.primaryRgb},${isLight ? 0.05 : 0.08})`,
                  border: `1px solid rgba(${accent.primaryRgb},${isLight ? 0.18 : 0.25})`,
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[1px]"
                  style={{ background: `linear-gradient(to right, transparent, ${accent.primary}, transparent)` }}
                />
                <div className="flex items-start gap-3">
                  <div
                    className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      background: `rgba(${accent.primaryRgb},${isLight ? 0.10 : 0.18})`,
                      border: `1px solid rgba(${accent.primaryRgb},${isLight ? 0.25 : 0.40})`,
                    }}
                  >
                    <Zap size={15} style={{ color: accent.primary }} strokeWidth={2.4} />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: accent.primary }}>
                      The opportunity
                    </div>
                    <p className="text-[13.5px] leading-relaxed" style={{ color: t.textPrimary, opacity: isLight ? 0.85 : 1 }}>
                      {marketIntel.opportunity}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {marketIntel.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 + i * 0.08 }}
                className="rounded-2xl p-5 sm:p-6 relative overflow-hidden"
                style={{
                  background: t.bgCard,
                  backdropFilter: isLight ? 'blur(20px) saturate(1.2)' : 'blur(8px)',
                  WebkitBackdropFilter: isLight ? 'blur(20px) saturate(1.2)' : 'blur(8px)',
                  border: `1px solid ${isLight ? t.borderSubtle : `rgba(${accent.primaryRgb},0.18)`}`,
                  boxShadow: isLight ? '0 4px 16px rgba(0,0,0,0.04)' : 'none',
                  minHeight: '140px',
                }}
              >
                <div
                  className="absolute top-0 left-0 h-full w-[2px]"
                  style={{ background: `linear-gradient(to bottom, ${accent.primary}, transparent)` }}
                />
                <div className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: t.textMuted }}>
                  {s.label}
                </div>
                <div
                  className="font-display font-bold leading-tight"
                  style={{
                    fontSize: 'clamp(24px, 2.8vw, 36px)',
                    color: accent.primary,
                    letterSpacing: '-0.02em',
                    filter: isLight ? 'none' : `drop-shadow(0 0 12px ${accent.glow})`,
                  }}
                >
                  {s.value}
                </div>
                {s.caption && (
                  <div className="text-[11px] mt-2 leading-tight" style={{ color: t.textMuted }}>{s.caption}</div>
                )}
              </motion.div>
            ))}

            {/* Trend indicator card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="col-span-2 rounded-2xl p-5 sm:p-6 flex items-center gap-4"
              style={{
                background: isLight
                  ? `linear-gradient(135deg, rgba(${accent.primaryRgb},0.06), rgba(255,255,255,0.6))`
                  : `linear-gradient(135deg, rgba(${accent.primaryRgb},0.10), rgba(${accent.primaryRgb},0.02))`,
                border: `1px solid ${isLight ? t.borderSubtle : `rgba(${accent.primaryRgb},0.20)`}`,
                backdropFilter: isLight ? 'blur(16px)' : undefined,
              }}
            >
              <TrendingUp size={24} style={{ color: accent.primary }} strokeWidth={2} />
              <div className="flex-1">
                <div className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: t.textMuted }}>
                  Win window for {city.name}
                </div>
                <div className="text-[13px] leading-snug" style={{ color: t.textPrimary, opacity: isLight ? 0.85 : 0.80 }}>
                  Move now and lock in 18–24 months of cost arbitrage before competitors catch up.
                </div>
              </div>
              <a
                href="#contact"
                className="hidden md:inline-flex shrink-0 items-center gap-2 rounded-lg px-5 py-2.5 text-[13px] font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: accent.gradient,
                  color: '#fff',
                  boxShadow: isLight ? '0 6px 18px rgba(0,0,0,0.16)' : `0 0 18px ${accent.glow}`,
                }}
              >
                Capture It
                <ArrowRight size={14} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="md:hidden mt-8 flex justify-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg px-6 py-3 text-[14px] font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: accent.gradient,
              color: '#fff',
              boxShadow: isLight ? '0 8px 24px rgba(0,0,0,0.16)' : `0 0 24px ${accent.glow}`,
            }}
          >
            Capture the Win Window
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
