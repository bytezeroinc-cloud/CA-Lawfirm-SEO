import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Search, Rocket, Zap, TrendingUp, ArrowRight } from 'lucide-react'

const STYLES = `
  /* Hover glow + lift */
  .process-card { transition: box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease; }
  .process-card:hover { transform: translateY(-6px); }
  .process-card-purple:hover {
    border-color: rgba(192,132,252,0.65) !important;
    box-shadow: 0 0 60px rgba(192,132,252,0.22), 0 0 20px rgba(192,132,252,0.12), inset 0 1px 0 rgba(192,132,252,0.18) !important;
  }
  .process-card-orange:hover {
    transform: translateY(-6px);
  }
  .process-card-orange:hover .process-card-border {
    box-shadow: inset 0 0 0 1.5px rgba(255,140,66,0.75), 0 0 60px rgba(255,140,66,0.25), 0 0 20px rgba(255,140,66,0.14) !important;
  }
  .process-card-green:hover {
    border-color: rgba(52,211,153,0.60) !important;
    box-shadow: 0 0 60px rgba(52,211,153,0.22), 0 0 20px rgba(52,211,153,0.12) !important;
  }
  .process-card-blue:hover {
    transform: translateY(-6px);
  }
  .process-card-blue:hover .process-card-border {
    box-shadow: inset 0 0 0 1.5px rgba(96,165,250,0.70), 0 0 60px rgba(96,165,250,0.22), 0 0 20px rgba(96,165,250,0.12) !important;
  }

  /* Top-line running scanner */
  @keyframes lineScan {
    0%   { transform: translateX(-100%); }
    100% { transform: translateX(390%); }
  }
  .card-topline {
    position: absolute;
    top: -1px; left: 0; right: 0;
    height: 3px;
    border-radius: 9999px 9999px 0 0;
    z-index: 20;
    pointer-events: none;
    overflow: hidden;
  }
  /* Base dim track */
  .card-topline-purple { background: rgba(192,132,252,0.18); }
  .card-topline-orange { background: rgba(255,140,66,0.18); }
  .card-topline-green  { background: rgba(52,211,153,0.18); }
  .card-topline-blue   { background: rgba(96,165,250,0.18); }

  /* Moving scanner beam — child element */
  .card-topline-scanner {
    position: absolute;
    top: 0; left: 0;
    width: 35%; height: 100%;
    animation: lineScan 3s ease-in-out infinite;
  }
  .card-topline-purple .card-topline-scanner {
    background: linear-gradient(90deg, transparent 0%, rgba(192,132,252,0.6) 25%, rgba(255,255,255,1) 50%, rgba(192,132,252,0.6) 75%, transparent 100%);
    filter: drop-shadow(0 0 4px rgba(192,132,252,0.9));
    animation-delay: 0s;
  }
  .card-topline-orange .card-topline-scanner {
    background: linear-gradient(90deg, transparent 0%, rgba(255,140,66,0.6) 25%, rgba(255,255,255,1) 50%, rgba(255,140,66,0.6) 75%, transparent 100%);
    filter: drop-shadow(0 0 4px rgba(255,140,66,0.9));
    animation-delay: -0.75s;
  }
  .card-topline-green .card-topline-scanner {
    background: linear-gradient(90deg, transparent 0%, rgba(52,211,153,0.6) 25%, rgba(255,255,255,1) 50%, rgba(52,211,153,0.6) 75%, transparent 100%);
    filter: drop-shadow(0 0 4px rgba(52,211,153,0.9));
    animation-delay: -1.5s;
  }
  .card-topline-blue .card-topline-scanner {
    background: linear-gradient(90deg, transparent 0%, rgba(96,165,250,0.6) 25%, rgba(255,255,255,1) 50%, rgba(96,165,250,0.6) 75%, transparent 100%);
    filter: drop-shadow(0 0 4px rgba(96,165,250,0.9));
    animation-delay: -2.25s;
  }

  /* Timeline circle pulse */
  @keyframes circlePulse {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50%       { opacity: 0; transform: scale(1.6); }
  }
`

const TIMELINE_STEPS = [
  { label: 'Audit',    Icon: Search,     desc: 'Analyze & strategize' },
  { label: 'Build',    Icon: Rocket,     desc: 'Launch campaigns'      },
  { label: 'Optimize', Icon: Zap,        desc: 'AI-driven performance' },
  { label: 'Scale',    Icon: TrendingUp, desc: 'Grow & report'         },
]

const ACCENT = '#C084FC'
const ACCENT_RGB = '192,132,252'

// Slower sequential delays so the animation is clearly visible
// circle[i]: 0.3, 1.35, 2.4, 3.45  |  line[i]: 0.75, 1.8, 2.85
const circleDelay = (i: number) => 0.3 + i * 1.05
const lineDelay   = (i: number) => 0.75 + i * 1.05

export default function MarketingProcess() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section ref={ref} className="py-20 px-5 sm:px-10 md:px-16">
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
            style={{ background: 'rgba(192,132,252,0.10)', border: '1px solid rgba(192,132,252,0.25)', color: '#C084FC' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC]" />
            How It Works
          </span>
          <h2
            className="font-thin text-white mb-4"
            style={{ fontSize: 'clamp(28px, 3.5vw, 52px)', letterSpacing: '-0.025em', lineHeight: 1.1, fontWeight: 100 }}
          >
            From Audit to<br />
            <span style={{ color: '#C084FC' }}>Revenue Growth</span>
          </h2>
          <p className="text-white/35 max-w-md mx-auto text-[13px] leading-relaxed">
            How our marketing agency for lawyers delivers measurable outcomes at each stage.
          </p>
        </motion.div>

        {/* ── Timeline stepper ── */}
        <div className="mb-12 px-1" style={{ paddingTop: '28px', paddingBottom: '36px' }}>
          <div className="flex items-center">
            {TIMELINE_STEPS.flatMap((step, i) => {
              const circle = (
                <div key={`circle-${i}`} className="relative shrink-0 flex flex-col items-center">
                  {/* Label above */}
                  <div
                    className="absolute bottom-full mb-3 text-center whitespace-nowrap"
                    style={{ color: ACCENT, fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em' }}
                  >
                    {step.label}
                  </div>
                  {/* Circle */}
                  <motion.div
                    style={{
                      width: 56, height: 56,
                      borderRadius: '50%',
                      background: `rgba(${ACCENT_RGB},0.07)`,
                      border: `1.5px solid rgba(${ACCENT_RGB},0.45)`,
                      boxShadow: `0 0 18px rgba(${ACCENT_RGB},0.20)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: circleDelay(i), duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Pulse ring */}
                    <motion.div
                      className="absolute rounded-full pointer-events-none"
                      style={{ width: 56, height: 56, border: `1px solid ${ACCENT}` }}
                      initial={{ opacity: 0, scale: 1 }}
                      animate={inView ? { opacity: [0, 0.35, 0], scale: [1, 1.65, 1.65] } : {}}
                      transition={{ delay: circleDelay(i) + 0.4, duration: 1.2, ease: 'easeOut' }}
                    />
                    <step.Icon size={20} color={ACCENT} strokeWidth={1.5} />
                  </motion.div>
                  {/* Description below */}
                  <div
                    className="absolute top-full mt-3 text-center whitespace-nowrap"
                    style={{ color: 'rgba(255,255,255,0.40)', fontSize: '12px', letterSpacing: '0.01em' }}
                  >
                    {step.desc}
                  </div>
                </div>
              )

              if (i === TIMELINE_STEPS.length - 1) return [circle]

              const line = (
                <div key={`line-${i}`} className="flex-1 relative mx-3" style={{ height: 1.5 }}>
                  <div className="absolute inset-0 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }} />
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${ACCENT} 0%, rgba(${ACCENT_RGB},0.6) 100%)`,
                      boxShadow: `0 0 8px rgba(${ACCENT_RGB},0.7), 0 0 18px rgba(${ACCENT_RGB},0.3)`,
                      transformOrigin: 'left center',
                    }}
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: lineDelay(i), duration: 0.75, ease: 'easeInOut' }}
                  />
                  {/* Spark */}
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2"
                    style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff', boxShadow: `0 0 8px ${ACCENT}, 0 0 16px rgba(${ACCENT_RGB},0.8)` }}
                    initial={{ left: '0%', opacity: 0 }}
                    animate={inView ? { left: '100%', opacity: [0, 1, 1, 0] } : {}}
                    transition={{ delay: lineDelay(i), duration: 0.75, ease: 'easeInOut' }}
                  />
                </div>
              )

              return [circle, line]
            })}
          </div>
        </div>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" style={{ gridAutoRows: '1fr', alignItems: 'stretch' }}>

          {/* Card 1 — Text-focused, purple */}
          <div className="relative h-full">
            <div className="card-topline card-topline-purple"><div className="card-topline-scanner" /></div>
          <motion.div
            {...fade(0)}
            className="process-card process-card-purple relative flex flex-col justify-between rounded-2xl p-6 h-full min-h-[400px]"
            style={{
              background: 'rgba(6,4,14,0.98)',
              border: '1px solid rgba(192,132,252,0.22)',
              boxShadow: '0 0 40px rgba(192,132,252,0.08), inset 0 1px 0 rgba(192,132,252,0.10)',
            }}
          >
            <div>
              <div className="text-[13px] font-bold uppercase tracking-widest mb-5" style={{ color: '#C084FC' }}>Step 01</div>
              <h3 className="font-semibold text-white mb-4 leading-snug" style={{ fontSize: 'clamp(18px, 1.8vw, 22px)' }}>
                Marketing Audit &amp; Strategy
              </h3>
              <p className="text-white/45 text-[13px] leading-relaxed">
                We audit your full marketing stack — Google Ads, SEO, social, and email — to find wasted spend, missed opportunities, and the fastest path to qualified cases.
              </p>
            </div>
            <div>
              <div className="h-px mb-4" style={{ background: 'rgba(192,132,252,0.15)' }} />
              <div className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.25)' }}>What you get</div>
              <div className="flex flex-col gap-2">
                {['Full channel spend audit', 'Competitor gap analysis', 'Priority growth roadmap'].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(192,132,252,0.15)', border: '1px solid rgba(192,132,252,0.40)' }}>
                      <Check size={8} style={{ color: '#C084FC' }} strokeWidth={3} />
                    </div>
                    <span className="text-[12px] text-white/50">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          </div>{/* end Card 1 wrapper */}

          {/* Card 2 — California aerial, orange */}
          <div className="relative h-full">
            <div className="card-topline card-topline-orange"><div className="card-topline-scanner" /></div>
            <motion.div
              {...fade(0.1)}
              className="process-card process-card-orange relative rounded-2xl overflow-hidden h-full min-h-[400px] flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/bg-california.jpg')" }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.88) 100%)' }} />
              <div className="process-card-border absolute inset-0 rounded-2xl pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(255,140,66,0.30)', transition: 'box-shadow 0.35s ease' }} />
              <div className="relative z-10 p-6">
                <div className="text-[13px] font-bold uppercase tracking-widest mb-3" style={{ color: '#FF8C42' }}>Step 02</div>
                <h3 className="font-semibold text-white leading-snug" style={{ fontSize: 'clamp(18px, 1.8vw, 22px)' }}>
                  Campaign Build &amp; Launch
                </h3>
              </div>
              <div className="relative z-10 p-6">
                <div className="inline-flex items-baseline gap-1 mb-2" style={{ color: '#FF8C42' }}>
                  <span className="font-thin leading-none" style={{ fontSize: '52px', letterSpacing: '-0.04em', fontFamily: "'Brockmann', sans-serif", fontWeight: 100 }}>2</span>
                  <span className="text-lg font-light">days</span>
                </div>
                <p className="text-white/55 text-[12px] leading-relaxed">Full-stack campaigns live across Google, Meta, and Bing — with tracking from day one.</p>
                <div className="text-[10px] font-semibold uppercase tracking-widest mt-3" style={{ color: 'rgba(255,140,66,0.6)' }}>Live Campaign Setup</div>
              </div>
            </motion.div>
          </div>{/* end Card 2 wrapper */}

          {/* Card 3 — Metric ring, green */}
          <div className="relative h-full">
            <div className="card-topline card-topline-green"><div className="card-topline-scanner" /></div>
            <motion.div
              {...fade(0.2)}
              className="process-card process-card-green relative flex flex-col justify-between rounded-2xl overflow-hidden h-full min-h-[400px]"
              style={{
                background: 'rgba(2,10,6,0.98)',
                border: '1px solid rgba(52,211,153,0.20)',
                boxShadow: '0 0 40px rgba(52,211,153,0.06)',
              }}
            >
              <div className="p-6">
                <div className="text-[13px] font-bold uppercase tracking-widest mb-2" style={{ color: '#34D399' }}>Step 03</div>
                <h3 className="font-semibold text-white leading-snug" style={{ fontSize: 'clamp(16px, 1.6vw, 20px)' }}>
                  AI Optimization &amp; Automation
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center py-6 gap-2">
                <div className="relative flex items-center justify-center rounded-full"
                  style={{
                    width: 130, height: 130,
                    background: 'rgba(52,211,153,0.06)',
                    border: '1.5px solid rgba(52,211,153,0.35)',
                    boxShadow: '0 0 40px rgba(52,211,153,0.20), inset 0 0 30px rgba(52,211,153,0.06)',
                  }}>
                  <div className="font-thin leading-none" style={{ fontSize: '46px', color: '#34D399', letterSpacing: '-0.04em', fontFamily: "'Brockmann', sans-serif", fontWeight: 100 }}>
                    -42%
                  </div>
                </div>
                <div className="text-[11px] text-white/35 uppercase tracking-widest mt-1">Cost per lead</div>
              </div>
              <div className="p-6">
                <p className="text-white/45 text-[12px] leading-relaxed">
                  Smart bidding, predictive targeting, and automated nurture sequences compound month over month.
                </p>
              </div>
            </motion.div>
          </div>{/* end Card 3 wrapper */}

          {/* Card 4 — Dark terrain, blue */}
          <div className="relative h-full">
            <div className="card-topline card-topline-blue"><div className="card-topline-scanner" /></div>
            <motion.div
              {...fade(0.3)}
              className="process-card process-card-blue relative rounded-2xl overflow-hidden h-full min-h-[400px] flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/bg-dark-terrain.webp')" }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,8,0.65) 0%, rgba(0,0,8,0.90) 100%)' }} />
              <div className="process-card-border absolute inset-0 rounded-2xl pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(96,165,250,0.25)', transition: 'box-shadow 0.35s ease' }} />
              <div className="relative z-10 p-6">
                <div className="text-[13px] font-bold uppercase tracking-widest mb-3" style={{ color: '#60A5FA' }}>Step 04</div>
                <h3 className="font-semibold text-white leading-snug" style={{ fontSize: 'clamp(18px, 1.8vw, 22px)' }}>
                  Scale &amp; Report
                </h3>
              </div>
              <div className="relative z-10 p-6">
                <div className="text-[10px] font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(96,165,250,0.6)' }}>Monthly outcomes</div>
                <div className="flex flex-col gap-3">
                  {[
                    'Revenue-attributed ROAS by channel',
                    'Cost per lead & cost per case',
                    'Keyword-level call tracking',
                    'Quarterly growth strategy review',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <div className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(96,165,250,0.15)', border: '1px solid rgba(96,165,250,0.40)' }}>
                        <Check size={8} style={{ color: '#60A5FA' }} strokeWidth={3} />
                      </div>
                      <span className="text-[12px] text-white/60 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>{/* end Card 4 wrapper */}

        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-white/35 text-[13px] mb-5">
            Ready to go from audit to revenue in days, not months?
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
            Book Your Strategy Call
            <ArrowRight size={15} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
