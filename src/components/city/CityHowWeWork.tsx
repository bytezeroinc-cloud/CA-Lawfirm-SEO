import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Search, Rocket, Zap, TrendingUp, ArrowRight } from 'lucide-react'
import { getTheme } from '../../data/cities'
import type { City, ProcessStep } from '../../data/cities'

const FALLBACK_PROCESS: ProcessStep[] = [
  { number: '01', title: 'Audit & Strategy', description: 'We benchmark your site, search visibility, and ad spend, then build a custom growth plan.', duration: 'Week 1' },
  { number: '02', title: 'Build & Launch', description: 'New site, content, and ad campaigns shipped — leads start flowing in week one.', duration: 'Week 2' },
  { number: '03', title: 'Optimize', description: 'AI tunes targeting, bidding, and conversion paths against real client outcomes.', duration: 'Weeks 3–6' },
  { number: '04', title: 'Scale & Report', description: 'Compounding wins, transparent reporting, and quarterly strategy reviews.', duration: 'Ongoing' },
]

const TIMELINE_ICONS = [Search, Rocket, Zap, TrendingUp]

const CARD_BULLETS_1 = [
  'Full-channel marketing audit',
  'Competitor + market gap analysis',
  'Priority growth roadmap',
]
const CARD_BULLETS_4 = [
  'Revenue-attributed ROAS by channel',
  'Cost per lead & cost per case',
  'Keyword-level call tracking',
  'Quarterly strategy review',
]

export default function CityHowWeWork({ city }: { city: City }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { accent } = city
  const steps = city.process ?? FALLBACK_PROCESS
  const ACCENT = accent.primary
  const ACCENT_RGB = accent.primaryRgb
  const t = getTheme(city)
  const isLight = t.isLight

  // Image-card backgrounds — image-bg cards always have dark image + dark overlay
  const sb = city.sectionBackgrounds ?? {}
  const card2Bg = sb.howWeWork && !/\.(mp4|webm|mov)$/i.test(sb.howWeWork) ? sb.howWeWork : '/bg-monolith-night.png'
  const card4Bg = sb.whyUs && !/\.(mp4|webm|mov)$/i.test(sb.whyUs) ? sb.whyUs : '/bg-dark-terrain.webp'

  const circleDelay = (i: number) => 0.3 + i * 0.6
  const lineDelay = (i: number) => 0.6 + i * 0.6

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  // Text-card colors flip based on theme
  const textCardBg = isLight ? '#ffffff' : 'rgba(6,4,14,0.96)'
  const textCardShadow = isLight
    ? `0 8px 28px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)`
    : `0 0 40px rgba(${ACCENT_RGB},0.08), inset 0 1px 0 rgba(${ACCENT_RGB},0.10)`
  const textCardBorder = isLight ? t.borderSubtle : `rgba(${ACCENT_RGB},0.22)`
  const cardDivider = isLight ? 'rgba(0,0,0,0.08)' : `rgba(${ACCENT_RGB},0.15)`
  const labelMuted = isLight ? 'rgba(29,29,31,0.40)' : 'rgba(255,255,255,0.25)'
  const lineTrack = isLight ? 'rgba(0,0,0,0.10)' : 'rgba(255,255,255,0.08)'
  const sparkColor = isLight ? '#1d1d1f' : '#fff'

  const STYLES = `
    .city-process-card { transition: box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease; }
    .city-process-card:hover { transform: translateY(-6px); }
    .city-process-card:hover {
      border-color: rgba(${ACCENT_RGB},0.55) !important;
      box-shadow: 0 0 60px rgba(${ACCENT_RGB},0.20), 0 0 20px rgba(${ACCENT_RGB},0.10) !important;
    }
    .city-process-card:hover .city-card-border {
      box-shadow: inset 0 0 0 1.5px rgba(${ACCENT_RGB},0.65), 0 0 60px rgba(${ACCENT_RGB},0.22), 0 0 20px rgba(${ACCENT_RGB},0.12) !important;
    }
    @keyframes lineScan {
      0%   { transform: translateX(-100%); }
      100% { transform: translateX(390%); }
    }
    .city-card-topline {
      position: absolute;
      top: -1px; left: 0; right: 0;
      height: 3px;
      border-radius: 9999px 9999px 0 0;
      z-index: 20;
      pointer-events: none;
      overflow: hidden;
      background: rgba(${ACCENT_RGB},0.18);
    }
    .city-card-topline-scanner {
      position: absolute;
      top: 0; left: 0;
      width: 35%; height: 100%;
      background: linear-gradient(90deg, transparent 0%, rgba(${ACCENT_RGB},0.6) 25%, rgba(255,255,255,1) 50%, rgba(${ACCENT_RGB},0.6) 75%, transparent 100%);
      filter: drop-shadow(0 0 4px rgba(${ACCENT_RGB},0.9));
      animation: lineScan 3s ease-in-out infinite;
    }
    .city-card-topline.delay-1 .city-card-topline-scanner { animation-delay: -0.75s; }
    .city-card-topline.delay-2 .city-card-topline-scanner { animation-delay: -1.5s; }
    .city-card-topline.delay-3 .city-card-topline-scanner { animation-delay: -2.25s; }
  `

  return (
    <section ref={ref} id="process" className="py-20 px-5 sm:px-10 md:px-16">
      <style>{STYLES}</style>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest mb-5"
            style={{
              background: `rgba(${ACCENT_RGB},${isLight ? 0.06 : 0.10})`,
              border: `1px solid rgba(${ACCENT_RGB},${isLight ? 0.18 : 0.25})`,
              color: ACCENT,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT, boxShadow: `0 0 6px ${ACCENT}` }} />
            How We Work
          </span>
          <h2
            className="mb-4"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 52px)',
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              fontWeight: isLight ? 600 : 100,
              color: t.textPrimary,
            }}
          >
            From Audit to{' '}
            <span style={isLight
              ? { color: accent.secondary, fontWeight: 600 }
              : { color: ACCENT, filter: `drop-shadow(0 0 18px ${accent.glow})` }
            }>
              Compounding Wins
            </span>
          </h2>
          <p className="max-w-md mx-auto text-[13px] leading-relaxed" style={{ color: t.textMuted }}>
            How we deliver measurable outcomes for {city.name} law firms — at every stage.
          </p>
        </motion.div>

        {/* Timeline stepper */}
        <div className="mb-12 px-1" style={{ paddingTop: '28px', paddingBottom: '36px' }}>
          <div className="flex items-center">
            {steps.flatMap((step, i) => {
              const Icon = TIMELINE_ICONS[i % TIMELINE_ICONS.length]

              const circle = (
                <div key={`circle-${i}`} className="relative shrink-0 flex flex-col items-center">
                  <div
                    className="absolute bottom-full mb-3 text-center whitespace-nowrap"
                    style={{ color: ACCENT, fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em' }}
                  >
                    {step.title.split(' ')[0]}
                  </div>
                  <motion.div
                    className="relative"
                    style={{
                      width: 56, height: 56,
                      borderRadius: '50%',
                      background: `rgba(${ACCENT_RGB},${isLight ? 0.04 : 0.07})`,
                      border: `1.5px solid rgba(${ACCENT_RGB},0.45)`,
                      boxShadow: `0 0 18px rgba(${ACCENT_RGB},0.20)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: circleDelay(i), duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.div
                      className="absolute rounded-full pointer-events-none"
                      style={{ width: 56, height: 56, border: `1px solid ${ACCENT}` }}
                      initial={{ opacity: 0, scale: 1 }}
                      animate={inView ? { opacity: [0, 0.35, 0], scale: [1, 1.65, 1.65] } : {}}
                      transition={{ delay: circleDelay(i) + 0.4, duration: 1.2, ease: 'easeOut' }}
                    />
                    <Icon size={20} color={ACCENT} strokeWidth={1.5} />
                  </motion.div>
                  <div
                    className="absolute top-full mt-3 text-center whitespace-nowrap"
                    style={{ color: t.textMuted, fontSize: '12px', letterSpacing: '0.01em' }}
                  >
                    {step.duration}
                  </div>
                </div>
              )

              if (i === steps.length - 1) return [circle]

              const line = (
                <div key={`line-${i}`} className="flex-1 relative mx-3" style={{ height: 1.5 }}>
                  <div className="absolute inset-0 rounded-full" style={{ background: lineTrack }} />
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${ACCENT} 0%, rgba(${ACCENT_RGB},0.6) 100%)`,
                      boxShadow: `0 0 8px rgba(${ACCENT_RGB},0.7), 0 0 18px rgba(${ACCENT_RGB},0.3)`,
                      transformOrigin: 'left center',
                    }}
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: lineDelay(i), duration: 0.6, ease: 'easeInOut' }}
                  />
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2"
                    style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: sparkColor,
                      boxShadow: `0 0 8px ${ACCENT}, 0 0 16px rgba(${ACCENT_RGB},0.8)`,
                    }}
                    initial={{ left: '0%', opacity: 0 }}
                    animate={inView ? { left: '100%', opacity: [0, 1, 1, 0] } : {}}
                    transition={{ delay: lineDelay(i), duration: 0.6, ease: 'easeInOut' }}
                  />
                </div>
              )

              return [circle, line]
            })}
          </div>
        </div>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" style={{ gridAutoRows: '1fr', alignItems: 'stretch' }}>
          {/* Card 1 — Text + bullet list */}
          <div className="relative h-full">
            <div className="city-card-topline"><div className="city-card-topline-scanner" /></div>
            <motion.div
              {...fade(0)}
              className="city-process-card relative flex flex-col justify-between rounded-2xl p-6 h-full min-h-[400px]"
              style={{
                background: textCardBg,
                border: `1px solid ${textCardBorder}`,
                boxShadow: textCardShadow,
              }}
            >
              <div>
                <div className="text-[13px] font-bold uppercase tracking-widest mb-5" style={{ color: ACCENT }}>
                  Step {steps[0].number}
                </div>
                <h3 className="font-semibold mb-4 leading-snug" style={{ fontSize: 'clamp(18px, 1.8vw, 22px)', color: t.textPrimary }}>
                  {steps[0].title}
                </h3>
                <p className="text-[13px] leading-relaxed" style={{ color: t.textSecondary }}>{steps[0].description}</p>
              </div>
              <div>
                <div className="h-px mb-4" style={{ background: cardDivider }} />
                <div className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: labelMuted }}>
                  What you get
                </div>
                <div className="flex flex-col gap-2">
                  {CARD_BULLETS_1.map((label) => (
                    <div key={label} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: `rgba(${ACCENT_RGB},0.15)`, border: `1px solid rgba(${ACCENT_RGB},0.40)` }}>
                        <Check size={8} style={{ color: ACCENT }} strokeWidth={3} />
                      </div>
                      <span className="text-[12px]" style={{ color: t.textSecondary }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card 2 — Image background (always dark for legibility) */}
          <div className="relative h-full">
            <div className="city-card-topline delay-1"><div className="city-card-topline-scanner" /></div>
            <motion.div
              {...fade(0.1)}
              className="city-process-card relative rounded-2xl overflow-hidden h-full min-h-[400px] flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${card2Bg}')` }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.92) 100%)' }} />
              <div
                className="city-card-border absolute inset-0 rounded-2xl pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1px rgba(${ACCENT_RGB},0.30)`, transition: 'box-shadow 0.35s ease' }}
              />
              <div className="relative z-10 p-6">
                <div className="text-[13px] font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
                  Step {steps[1].number}
                </div>
                <h3 className="font-semibold text-white leading-snug" style={{ fontSize: 'clamp(18px, 1.8vw, 22px)' }}>
                  {steps[1].title}
                </h3>
              </div>
              <div className="relative z-10 p-6">
                <div className="inline-flex items-baseline gap-1 mb-2" style={{ color: ACCENT }}>
                  <span className="font-thin leading-none" style={{ fontSize: '52px', letterSpacing: '-0.04em', fontFamily: "'Brockmann', sans-serif", fontWeight: 100 }}>
                    7
                  </span>
                  <span className="text-lg font-light">days</span>
                </div>
                <p className="text-white/55 text-[12px] leading-relaxed">{steps[1].description}</p>
                <div className="text-[10px] font-semibold uppercase tracking-widest mt-3" style={{ color: `rgba(${ACCENT_RGB},0.7)` }}>
                  Live in 7 days
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card 3 — Metric ring */}
          <div className="relative h-full">
            <div className="city-card-topline delay-2"><div className="city-card-topline-scanner" /></div>
            <motion.div
              {...fade(0.2)}
              className="city-process-card relative flex flex-col justify-between rounded-2xl overflow-hidden h-full min-h-[400px]"
              style={{
                background: textCardBg,
                border: `1px solid ${textCardBorder}`,
                boxShadow: isLight ? textCardShadow : `0 0 40px rgba(${ACCENT_RGB},0.06)`,
              }}
            >
              <div className="p-6">
                <div className="text-[13px] font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>
                  Step {steps[2].number}
                </div>
                <h3 className="font-semibold leading-snug" style={{ fontSize: 'clamp(16px, 1.6vw, 20px)', color: t.textPrimary }}>
                  {steps[2].title}
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center py-6 gap-2">
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.6 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex items-center justify-center rounded-full"
                  style={{
                    width: 130, height: 130,
                    background: `rgba(${ACCENT_RGB},${isLight ? 0.04 : 0.06})`,
                    border: `1.5px solid rgba(${ACCENT_RGB},0.40)`,
                    boxShadow: `0 0 40px rgba(${ACCENT_RGB},0.20), inset 0 0 30px rgba(${ACCENT_RGB},0.06)`,
                  }}
                >
                  <motion.div
                    className="absolute rounded-full"
                    style={{ width: 130, height: 130, border: `1px solid ${ACCENT}` }}
                    initial={{ opacity: 0, scale: 1 }}
                    animate={inView ? { opacity: [0, 0.4, 0], scale: [1, 1.25, 1.25] } : {}}
                    transition={{ duration: 1.5, delay: 1.0, ease: 'easeOut', repeat: Infinity, repeatDelay: 3 }}
                  />
                  <div className="leading-none" style={{ fontSize: '46px', color: ACCENT, letterSpacing: '-0.04em', fontFamily: "'Brockmann', sans-serif", fontWeight: isLight ? 600 : 100 }}>
                    −51%
                  </div>
                </motion.div>
                <div className="text-[11px] uppercase tracking-widest mt-1" style={{ color: t.textMuted }}>Cost per lead</div>
              </div>
              <div className="p-6">
                <p className="text-[12px] leading-relaxed" style={{ color: t.textSecondary }}>{steps[2].description}</p>
              </div>
            </motion.div>
          </div>

          {/* Card 4 — Image bg + bullet list */}
          <div className="relative h-full">
            <div className="city-card-topline delay-3"><div className="city-card-topline-scanner" /></div>
            <motion.div
              {...fade(0.3)}
              className="city-process-card relative rounded-2xl overflow-hidden h-full min-h-[400px] flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${card4Bg}')` }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,8,0.65) 0%, rgba(0,0,8,0.92) 100%)' }} />
              <div
                className="city-card-border absolute inset-0 rounded-2xl pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1px rgba(${ACCENT_RGB},0.25)`, transition: 'box-shadow 0.35s ease' }}
              />
              <div className="relative z-10 p-6">
                <div className="text-[13px] font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
                  Step {steps[3].number}
                </div>
                <h3 className="font-semibold text-white leading-snug" style={{ fontSize: 'clamp(18px, 1.8vw, 22px)' }}>
                  {steps[3].title}
                </h3>
              </div>
              <div className="relative z-10 p-6">
                <div className="text-[10px] font-semibold uppercase tracking-widest mb-4" style={{ color: `rgba(${ACCENT_RGB},0.7)` }}>
                  Monthly outcomes
                </div>
                <div className="flex flex-col gap-3">
                  {CARD_BULLETS_4.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <div className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: `rgba(${ACCENT_RGB},0.15)`, border: `1px solid rgba(${ACCENT_RGB},0.40)` }}>
                        <Check size={8} style={{ color: ACCENT }} strokeWidth={3} />
                      </div>
                      <span className="text-[12px] text-white/65 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-[13px] mb-5" style={{ color: t.textMuted }}>
            Ready to go from audit to results in days, not months?
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 rounded-xl px-7 py-3.5 text-[13px] font-semibold transition-all hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background: accent.gradient,
              color: '#fff',
              boxShadow: isLight ? '0 8px 24px rgba(0,0,0,0.16)' : `0 0 28px ${accent.glow}`,
            }}
          >
            Book Your Strategy Call
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
