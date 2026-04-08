import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Search, Globe, ShieldCheck, TrendingUp, Scale, Cpu } from 'lucide-react'

/* ─────────────────────────────────────────────
   Visual Header Components
───────────────────────────────────────────── */

/** Mini bar chart for growth card */
function GrowthBars() {
  const bars = [12, 22, 28, 38, 55, 72, 95, 100]
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-1.5 pb-6 px-6 pt-8">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-md"
          style={{
            height: `${h}%`,
            background: i === bars.length - 1
              ? 'linear-gradient(to top, #FF8C42, #FFB07A)'
              : `rgba(255, 140, 66, ${0.15 + i * 0.08})`,
          }}
        />
      ))}
    </div>
  )
}

/** AI platform logos — clean list style matching reference */
function AIPlatforms() {
  const platforms = [
    { name: 'ChatGPT',    color: '#10B981' },
    { name: 'Perplexity', color: '#A78BFA' },
    { name: 'Google AI',  color: '#60A5FA' },
    { name: 'Claude',     color: '#F59E0B' },
    { name: 'Gemini',     color: '#FB923C' },
  ]
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-1.5 px-5">
      {platforms.map((p) => (
        <div key={p.name} className="flex items-center gap-2.5">
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ background: p.color, boxShadow: `0 0 6px ${p.color}` }}
          />
          <span className="text-[12px] font-medium text-white/85 flex-1">{p.name}</span>
          <span
            className="text-[9px] font-semibold px-2 py-0.5 rounded"
            style={{ background: 'rgba(16,185,129,0.15)', color: '#10B981', border: '1px solid rgba(16,185,129,0.3)' }}
          >
            Cited
          </span>
        </div>
      ))}
    </div>
  )
}

/** Practice area pills */
function PracticeAreas() {
  const areas = ['Personal Injury', 'Criminal Defense', 'Family Law', 'Immigration', 'Estate Planning', 'DUI Defense']
  const colors = ['#FF8C42', '#8B83FF', '#34D399', '#60A5FA', '#F472B6', '#FBBF24']
  return (
    <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-2 p-5">
      {areas.map((a, i) => (
        <span
          key={a}
          className="px-3 py-1.5 rounded-full text-[10px] font-medium"
          style={{
            background: `${colors[i]}18`,
            border: `1px solid ${colors[i]}35`,
            color: colors[i],
          }}
        >
          {a}
        </span>
      ))}
    </div>
  )
}

/** Compliance visual — colored dots only */
function ComplianceVisual() {
  const dots = ['#8B83FF', '#F472B6', '#FBBF24']
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex gap-3">
        {dots.map((c, i) => (
          <span
            key={i}
            className="w-4 h-4 rounded-full"
            style={{ background: c, boxShadow: `0 0 12px ${c}` }}
          />
        ))}
      </div>
    </div>
  )
}

/** AI Dev Tools — 2-col dot+name list, no tags */
function AIDevTools() {
  const tools = [
    { name: 'Lovable',  color: '#FF6B9D' },
    { name: 'Replit',   color: '#F26207' },
    { name: 'Emergent', color: '#7C3AED' },
    { name: 'Cursor',   color: '#00C2FF' },
    { name: 'Bolt',     color: '#22D3EE' },
    { name: 'v0',       color: '#E2E8F0' },
  ]
  const col1 = tools.slice(0, 3)
  const col2 = tools.slice(3)
  return (
    <div className="absolute inset-0 grid grid-cols-2 gap-x-10 px-8 items-center">
      {[col1, col2].map((col, ci) => (
        <div key={ci} className="flex flex-col gap-3">
          {col.map((t) => (
            <div key={t.name} className="flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: t.color, boxShadow: `0 0 6px ${t.color}` }}
              />
              <span className="text-[13px] font-medium text-white/85">{t.name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

/** Pricing visual — horizontal pill bars matching reference */
function PricingVisual() {
  const tiers = [
    { label: 'Starter',  price: '$2,500', w: '35%', highlight: true  },
    { label: 'Growth',   price: '$4,997', w: '62%', highlight: false },
    { label: 'Dominate', price: '$7,997', w: '90%', highlight: false },
  ]
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-3 px-6">
      {tiers.map((t) => (
        <div key={t.label} className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-white/50">{t.label}</span>
            <span
              className="text-[10px] font-semibold"
              style={{ color: t.highlight ? '#C084FC' : 'rgba(255,255,255,0.35)' }}
            >
              {t.price}
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-white/[0.06]">
            <div
              className="h-full rounded-full"
              style={{
                width: t.w,
                background: t.highlight
                  ? 'linear-gradient(to right, #C084FC, #E0AAFF)'
                  : 'rgba(255,255,255,0.12)',
                boxShadow: t.highlight ? '0 0 10px #C084FC60' : 'none',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────────
   Card Data
───────────────────────────────────────────── */
const cards = [
  {
    id: 'growth',
    col: 'lg:col-span-1',
    headerH: 144,
    headerBg: 'linear-gradient(135deg, #3D1800 0%, #1E0B00 55%, #080506 100%)',
    category: 'RESULTS',
    title: '300% Traffic Growth',
    desc: 'Organic search growth in 6–12 months for California law firms.',
    metric: '300%',
    accentColor: '#FF8C42',
    Icon: TrendingUp,
    visual: 'none',
    delay: 0,
  },
  {
    id: 'geo',
    col: 'lg:col-span-1',
    headerH: 144,
    headerBg: 'linear-gradient(135deg, #081828 0%, #040C16 55%, #050508 100%)',
    category: 'AI SEARCH',
    title: 'AI Search Cited',
    desc: 'Optimized for ChatGPT, Perplexity, Gemini, and 5+ AI platforms.',
    metric: '5+',
    accentColor: '#60A5FA',
    Icon: Globe,
    visual: 'ai',
    delay: 80,
  },
  {
    id: 'compliance',
    col: 'lg:col-span-1',
    headerH: 144,
    headerBg: 'linear-gradient(135deg, #082018 0%, #041008 55%, #050508 100%)',
    category: 'COMPLIANCE',
    title: 'CA State Bar Compliant',
    desc: 'Rules 7.1–7.5 and WCAG 2.1 AA — built in from day one.',
    metric: '100%',
    accentColor: '#34D399',
    Icon: ShieldCheck,
    visual: 'compliance',
    delay: 160,
  },
  {
    id: 'seo',
    col: 'lg:col-span-1',
    headerH: 144,
    headerBg: 'linear-gradient(135deg, #1E0830 0%, #100418 55%, #050508 100%)',
    category: 'INVESTMENT',
    title: 'Starting at $2,500',
    desc: 'Professional AI-built law firm site at a fraction of agency cost — no hidden fees.',
    metric: '$2,500*',
    accentColor: '#C084FC',
    Icon: Search,
    visual: 'none',
    delay: 240,
  },
  {
    id: 'areas',
    col: 'lg:col-span-1',
    headerH: 144,
    headerBg: 'linear-gradient(135deg, #201400 0%, #100A00 55%, #050508 100%)',
    category: 'PRACTICE AREAS',
    title: '6 Specialties',
    desc: 'Custom SEO for every California practice area.',
    metric: '',
    accentColor: '#FBBF24',
    Icon: Scale,
    visual: 'practice',
    delay: 320,
  },
  {
    id: 'aidev',
    col: 'lg:col-span-1',
    headerH: 144,
    headerBg: 'linear-gradient(135deg, #0E0520 0%, #06021A 55%, #050508 100%)',
    category: 'AI DEVELOPMENT',
    title: 'Built on the Best AI Stacks',
    desc: 'We leverage Lovable, Replit, Emergent, Cursor, Bolt & v0 — the most powerful AI development platforms — to ship your law firm site faster and smarter.',
    metric: 'AI',
    accentColor: '#8B5CF6',
    Icon: Cpu,
    visual: 'aidev',
    delay: 400,
  },
]

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
export default function BentoGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative py-14 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Ambient warm glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(255,140,66,0.04) 0%, transparent 65%)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-8 text-center"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">What You Get</span>
          </span>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            Everything Built In.
            <br />
            <span className="glow-text-warm">Nothing Bolted On.</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
        >
          {cards.map((card) => {
            const Icon = card.Icon
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 28, scale: 0.97, filter: 'blur(8px)' }}
                animate={
                  inView
                    ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
                    : {}
                }
                transition={{
                  duration: 0.7,
                  delay: card.delay / 1000,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`bento-card group cursor-default overflow-hidden flex flex-col ${card.col}`}
                style={{
                  height: '300px',
                  background: 'rgba(16,16,22,0.96)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
              >
                {/* Visual Header */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    height: card.headerH,
                    background: card.headerBg,
                  }}
                >
                  {/* Subtle grid pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                      backgroundSize: '32px 32px',
                    }}
                  />
                  {/* Large decorative metric — high opacity, clearly readable */}
                  <div
                    className="absolute inset-0 flex items-center justify-center select-none"
                    style={{ opacity: 0.55 }}
                  >
                    <span
                      className="font-display font-black"
                      style={{
                        fontSize: 'clamp(36px, 9.6vw, 77px)',
                        color: card.accentColor,
                        letterSpacing: '-0.05em',
                        lineHeight: 1,
                        filter: `drop-shadow(0 0 30px ${card.accentColor}80)`,
                      }}
                    >
                      {card.metric}
                    </span>
                  </div>
                  {/* Strong ambient glow */}
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-2/3 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at center bottom, ${card.accentColor}30 0%, transparent 70%)` }}
                  />
                  {/* Visual content */}
                  {card.visual === 'bars'    && <GrowthBars />}
                  {card.visual === 'ai'      && <AIPlatforms />}
                  {card.visual === 'pricing' && <PricingVisual />}
                  {card.visual === 'practice'&& <PracticeAreas />}
                  {card.visual === 'compliance' && <ComplianceVisual />}
                  {card.visual === 'aidev'      && <AIDevTools />}
                  {/* Neon top border on header */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
                    style={{ background: `linear-gradient(to right, transparent, ${card.accentColor}70, transparent)` }}
                  />
                  {/* Hover shimmer */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `linear-gradient(135deg, transparent 30%, ${card.accentColor}10 100%)` }}
                  />
                </div>

                {/* Card Content — grows to fill remaining height */}
                <div
                  className="p-4 flex-1 flex flex-col justify-between"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                        style={{
                          background: `${card.accentColor}35`,
                          border: `1.5px solid ${card.accentColor}`,
                          boxShadow: `0 0 14px ${card.accentColor}45`,
                        }}
                      >
                        <Icon size={12} style={{ color: card.accentColor, filter: `drop-shadow(0 0 4px ${card.accentColor})` }} strokeWidth={2.5} />
                      </div>
                      <span
                        className="text-[10px] font-extrabold uppercase tracking-widest"
                        style={{ color: card.accentColor, textShadow: `0 0 12px ${card.accentColor}80` }}
                      >
                        {card.category}
                      </span>
                    </div>
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                      style={{
                        background: `${card.accentColor}15`,
                        border: `1px solid ${card.accentColor}50`,
                      }}
                    >
                      <ArrowUpRight size={11} style={{ color: card.accentColor }} />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-[15px] leading-tight mb-1.5" style={{ color: '#ffffff' }}>
                    {card.title}
                  </h3>
                  <p className="text-[12px] text-white/80 leading-relaxed">
                    {card.desc}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className="mt-3 h-[1px] transition-all duration-500"
                    style={{
                      background: `linear-gradient(to right, ${card.accentColor}50, transparent)`,
                      opacity: 0.5,
                    }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
