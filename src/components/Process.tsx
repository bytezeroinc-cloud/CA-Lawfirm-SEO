import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageSquare, Cpu, Code2, Rocket } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Discovery Call',
    desc: 'We learn your practice areas, competitive landscape, ideal clients, and growth goals in a free 30-minute strategy session.',
    detail: 'Free competitive audit included',
    accentColor: '#FF8C42',
    headerBg: 'linear-gradient(135deg, #3D1800 0%, #1E0B00 55%, #080506 100%)',
    delay: 0,
  },
  {
    num: '02',
    icon: Cpu,
    title: 'AI Research & Strategy',
    desc: 'Our AI analyzes 500+ top law firm sites in your practice area to identify winning design patterns, content structures, and SEO opportunities.',
    detail: 'AI-powered market analysis',
    accentColor: '#8B5CF6',
    headerBg: 'linear-gradient(135deg, #1A0B30 0%, #0D0618 55%, #050508 100%)',
    delay: 80,
  },
  {
    num: '03',
    icon: Code2,
    title: 'Build & Optimize',
    desc: 'Hand-coded with SEO architecture, GEO optimization, schema markup, Core Web Vitals tuning, and State Bar compliant content — all in 5–7 days.',
    detail: '5–7 day delivery',
    accentColor: '#60A5FA',
    headerBg: 'linear-gradient(135deg, #081828 0%, #040C16 55%, #050508 100%)',
    delay: 160,
  },
  {
    num: '04',
    icon: Rocket,
    title: 'Launch & Monitor',
    desc: 'Go live with ongoing SEO, AI search monitoring, performance optimization, and monthly reporting to keep climbing the rankings.',
    detail: 'Ongoing growth partnership',
    accentColor: '#34D399',
    headerBg: 'linear-gradient(135deg, #082018 0%, #041008 55%, #050508 100%)',
    delay: 240,
  },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" ref={ref} className="relative py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* ── Light world background + glassmorphism overlay ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/world-light.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.40 }}
        />
        {/* Deep dark overlay to keep text readable */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(160deg, rgba(4,6,18,0.82) 0%, rgba(6,10,22,0.76) 50%, rgba(4,6,16,0.88) 100%)',
            backdropFilter: 'blur(1px)',
          }}
        />
        {/* Edge vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(0,0,0,0.60) 100%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">How We Build Your Site</span>
          </span>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            From Discovery Call to
            <br />
            <span className="glow-text-warm">Google Domination</span>
          </h2>
        </motion.div>

        {/* Bento Cards Grid — 4 columns desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 28, scale: 0.97, filter: 'blur(8px)' }}
                animate={inView ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.7, delay: step.delay / 1000, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-default overflow-hidden flex flex-col rounded-2xl"
                style={{
                  background: 'rgba(16,16,22,0.96)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
              >
                {/* ── Header area: step number + icon ── */}
                <div
                  className="relative overflow-hidden flex flex-col justify-between p-5"
                  style={{
                    height: 140,
                    background: step.headerBg,
                  }}
                >
                  {/* Subtle grid pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.10]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                      backgroundSize: '28px 28px',
                    }}
                  />

                  {/* Neon top border */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
                    style={{ background: `linear-gradient(to right, transparent, ${step.accentColor}70, transparent)` }}
                  />

                  {/* Ambient bottom glow */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at center bottom, ${step.accentColor}25 0%, transparent 70%)` }}
                  />

                  {/* Step number badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span
                      className="font-display font-black text-[48px] leading-none select-none"
                      style={{
                        color: step.accentColor,
                        opacity: 0.18,
                        letterSpacing: '-0.04em',
                      }}
                    >
                      {step.num}
                    </span>

                    {/* Icon */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${step.accentColor}18`,
                        border: `1.5px solid ${step.accentColor}50`,
                        boxShadow: `0 0 20px ${step.accentColor}30`,
                      }}
                    >
                      <Icon
                        size={20}
                        style={{ color: step.accentColor, filter: `drop-shadow(0 0 6px ${step.accentColor})` }}
                        strokeWidth={1.8}
                      />
                    </div>
                  </div>

                  {/* Step label */}
                  <div className="relative z-10">
                    <span
                      className="text-[10px] font-extrabold uppercase tracking-widest"
                      style={{ color: step.accentColor, textShadow: `0 0 10px ${step.accentColor}60` }}
                    >
                      Step {step.num}
                    </span>
                  </div>

                  {/* Hover shimmer */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `linear-gradient(135deg, transparent 30%, ${step.accentColor}10 100%)` }}
                  />
                </div>

                {/* ── Content area: title + description + detail ── */}
                <div
                  className="p-5 flex flex-col flex-1"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                >
                  {/* Title */}
                  <h3
                    className="font-display font-bold text-white leading-tight mb-3"
                    style={{ fontSize: '16px' }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-white/60 leading-relaxed flex-1">
                    {step.desc}
                  </p>

                  {/* Detail tag */}
                  <div
                    className="mt-4 pt-4 flex items-center gap-2"
                    style={{ borderTop: `1px solid ${step.accentColor}18` }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: step.accentColor, boxShadow: `0 0 6px ${step.accentColor}` }}
                    />
                    <span
                      className="text-[11px] font-semibold uppercase tracking-wider"
                      style={{ color: step.accentColor }}
                    >
                      {step.detail}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
