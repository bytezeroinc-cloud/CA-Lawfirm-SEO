import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, TrendingUp, Globe, Gauge, MapPin, FileText, BarChart3 } from 'lucide-react'

/* ─── Visual Header Components ──────────────────────────── */

/** SERP ranking visual */
function SerpVisual() {
  const results = [
    { pos: '#1', label: 'Your Firm', highlight: true },
    { pos: '#2', label: 'Competitor A', highlight: false },
    { pos: '#3', label: 'Competitor B', highlight: false },
  ]
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-2.5 px-5 pt-4">
      {results.map((r) => (
        <div
          key={r.pos}
          className="flex items-center gap-2.5 rounded-lg px-3 py-2"
          style={{
            background: r.highlight ? 'rgba(255,140,66,0.14)' : 'rgba(255,255,255,0.04)',
            border: `1px solid ${r.highlight ? 'rgba(255,140,66,0.30)' : 'rgba(255,255,255,0.07)'}`,
          }}
        >
          <span
            className="text-[10px] font-black w-6 shrink-0"
            style={{ color: r.highlight ? '#FF8C42' : 'rgba(255,255,255,0.25)' }}
          >
            {r.pos}
          </span>
          <span
            className="text-[11px] font-medium"
            style={{ color: r.highlight ? 'rgba(255,255,255,0.90)' : 'rgba(255,255,255,0.35)' }}
          >
            {r.label}
          </span>
          {r.highlight && (
            <span
              className="ml-auto text-[9px] font-bold px-2 py-0.5 rounded"
              style={{ background: 'rgba(255,140,66,0.18)', color: '#FF8C42', border: '1px solid rgba(255,140,66,0.30)' }}
            >
              You
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

/** AI citations list */
function AICitedVisual() {
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
          <span className="w-2 h-2 rounded-full shrink-0" style={{ background: p.color, boxShadow: `0 0 6px ${p.color}` }} />
          <span className="text-[12px] font-medium text-white/85 flex-1">{p.name}</span>
          <span className="text-[9px] font-semibold px-2 py-0.5 rounded" style={{ background: 'rgba(16,185,129,0.15)', color: '#10B981', border: '1px solid rgba(16,185,129,0.3)' }}>
            Cited
          </span>
        </div>
      ))}
    </div>
  )
}

/** PageSpeed gauge */
function SpeedVisual() {
  const score = 97
  const circumference = 2 * Math.PI * 36
  const dashOffset = circumference - (score / 100) * circumference
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        <svg width="90" height="90" viewBox="0 0 90 90">
          <circle cx="45" cy="45" r="36" fill="none" stroke="rgba(52,211,153,0.12)" strokeWidth="6" />
          <circle
            cx="45" cy="45" r="36"
            fill="none"
            stroke="#34D399"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            transform="rotate(-90 45 45)"
            style={{ filter: 'drop-shadow(0 0 8px rgba(52,211,153,0.6))' }}
          />
        </svg>
        <div className="absolute text-center">
          <div className="font-black text-[22px] leading-none" style={{ color: '#34D399' }}>{score}</div>
          <div className="text-[8px] text-white/30 uppercase tracking-wider mt-0.5">Score</div>
        </div>
      </div>
    </div>
  )
}

/** CA cities pills */
function CitiesVisual() {
  const cities = ['Los Angeles', 'San Francisco', 'San Diego', 'San Jose', 'Sacramento', 'Fresno']
  const colors = ['#FF8C42', '#60A5FA', '#34D399', '#C084FC', '#FBBF24', '#F472B6']
  return (
    <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-2 p-5">
      {cities.map((c, i) => (
        <span
          key={c}
          className="px-2.5 py-1 rounded-full text-[10px] font-medium"
          style={{ background: `${colors[i]}16`, border: `1px solid ${colors[i]}30`, color: colors[i] }}
        >
          {c}
        </span>
      ))}
    </div>
  )
}

/** Growth bars */
function GrowthBars() {
  const bars = [10, 18, 26, 38, 52, 68, 88, 100]
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-1.5 pb-5 px-5 pt-8">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-md"
          style={{
            height: `${h}%`,
            background: i === bars.length - 1
              ? 'linear-gradient(to top, #C084FC, #E0AAFF)'
              : `rgba(192, 132, 252, ${0.12 + i * 0.09})`,
          }}
        />
      ))}
    </div>
  )
}

/** Analytics visual */
function AnalyticsVisual() {
  const metrics = [
    { label: 'Organic Traffic', val: '+312%', color: '#FF8C42' },
    { label: 'Keyword Rankings', val: '247 top 3', color: '#60A5FA' },
    { label: 'Conversions', val: '12.4%', color: '#34D399' },
  ]
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-2.5 px-5">
      {metrics.map((m) => (
        <div key={m.label} className="flex items-center justify-between">
          <span className="text-[11px] text-white/45">{m.label}</span>
          <span className="text-[12px] font-bold" style={{ color: m.color }}>{m.val}</span>
        </div>
      ))}
    </div>
  )
}

/* ─── Card Data ─────────────────────────────────────────── */
const cards = [
  {
    id: 'rankings',
    col: 'lg:col-span-1',
    headerH: 144,
    headerBg: 'linear-gradient(135deg, #3D1800 0%, #1E0B00 55%, #080506 100%)',
    category: 'GOOGLE RANKINGS',
    title: 'Top 3 Keyword Rankings',
    desc: 'Dominate the first page for high-intent legal queries across your practice areas and California cities.',
    metric: 'Top 3',
    accentColor: '#FF8C42',
    Icon: TrendingUp,
    visual: 'serp',
    delay: 0,
  },
  {
    id: 'ai',
    col: 'lg:col-span-1',
    headerH: 144,
    headerBg: 'linear-gradient(135deg, #081828 0%, #040C16 55%, #050508 100%)',
    category: 'AI SEARCH (GEO)',
    title: 'Cited by 5+ AI Platforms',
    desc: 'GEO-optimized so ChatGPT, Perplexity, Google AI, Claude, and Gemini recommend your firm by name.',
    metric: '5+',
    accentColor: '#60A5FA',
    Icon: Globe,
    visual: 'ai',
    delay: 80,
  },
  {
    id: 'speed',
    col: 'lg:col-span-1',
    headerH: 144,
    headerBg: 'linear-gradient(135deg, #082018 0%, #041008 55%, #050508 100%)',
    category: 'TECHNICAL SEO',
    title: '95+ PageSpeed Score',
    desc: 'Core Web Vitals, schema markup, crawlability, and site architecture — all optimized to Google\'s highest standards.',
    metric: '95+',
    accentColor: '#34D399',
    Icon: Gauge,
    visual: 'speed',
    delay: 160,
  },
  {
    id: 'local',
    col: 'lg:col-span-1',
    headerH: 144,
    headerBg: 'linear-gradient(135deg, #201400 0%, #100A00 55%, #050508 100%)',
    category: 'LOCAL SEO',
    title: '199+ California Cities',
    desc: 'Hyper-local SEO targeting every city where your ideal clients search — from LA to Sacramento and beyond.',
    metric: '199+',
    accentColor: '#FBBF24',
    Icon: MapPin,
    visual: 'cities',
    delay: 240,
  },
  {
    id: 'content',
    col: 'lg:col-span-1',
    headerH: 144,
    headerBg: 'linear-gradient(135deg, #1E0830 0%, #100418 55%, #050508 100%)',
    category: 'CONTENT GROWTH',
    title: '300% Traffic Growth',
    desc: 'AI-researched content strategy targeting practice-area keywords that attract high-value clients, not just clicks.',
    metric: '300%',
    accentColor: '#C084FC',
    Icon: FileText,
    visual: 'growth',
    delay: 320,
  },
  {
    id: 'analytics',
    col: 'lg:col-span-1',
    headerH: 144,
    headerBg: 'linear-gradient(135deg, #0E0520 0%, #06021A 55%, #050508 100%)',
    category: 'ROI REPORTING',
    title: 'Real-Time Analytics',
    desc: 'Monthly dashboards showing keyword rankings, traffic growth, conversion rates, and direct ROI from your SEO investment.',
    metric: '12.4%',
    accentColor: '#8B5CF6',
    Icon: BarChart3,
    visual: 'analytics',
    delay: 400,
  },
]

/* ─── Main Component ─────────────────────────────────────── */
export default function SeoBentoGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative py-14 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Ambient blue glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.05) 0%, transparent 65%)' }}
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">What's Included</span>
          </span>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            Full-Stack SEO.
            <br />
            <span style={{ color: '#60A5FA', filter: 'drop-shadow(0 0 20px rgba(96,165,250,0.5))' }}>Nothing Left Out.</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {cards.map((card) => {
            const Icon = card.Icon
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 28, scale: 0.97, filter: 'blur(8px)' }}
                animate={inView ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.7, delay: card.delay / 1000, ease: [0.22, 1, 0.36, 1] }}
                className={`bento-card group cursor-default overflow-hidden flex flex-col ${card.col}`}
                style={{
                  height: '300px',
                  background: 'rgba(16,16,22,0.96)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
              >
                {/* Visual Header */}
                <div className="relative overflow-hidden" style={{ height: card.headerH, background: card.headerBg }}>
                  {/* Grid pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                      backgroundSize: '32px 32px',
                    }}
                  />
                  {/* Decorative metric */}
                  <div className="absolute inset-0 flex items-center justify-center select-none" style={{ opacity: 0.50 }}>
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
                  {/* Ambient bottom glow */}
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-2/3 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at center bottom, ${card.accentColor}30 0%, transparent 70%)` }}
                  />
                  {/* Visual overlays */}
                  {card.visual === 'serp'     && <SerpVisual />}
                  {card.visual === 'ai'       && <AICitedVisual />}
                  {card.visual === 'speed'    && <SpeedVisual />}
                  {card.visual === 'cities'   && <CitiesVisual />}
                  {card.visual === 'growth'   && <GrowthBars />}
                  {card.visual === 'analytics'&& <AnalyticsVisual />}
                  {/* Neon top border */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none" style={{ background: `linear-gradient(to right, transparent, ${card.accentColor}70, transparent)` }} />
                  {/* Hover shimmer */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: `linear-gradient(135deg, transparent 30%, ${card.accentColor}10 100%)` }} />
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                        style={{ background: `${card.accentColor}35`, border: `1.5px solid ${card.accentColor}`, boxShadow: `0 0 14px ${card.accentColor}45` }}
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
                      style={{ background: `${card.accentColor}15`, border: `1px solid ${card.accentColor}50` }}
                    >
                      <ArrowUpRight size={11} style={{ color: card.accentColor }} />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-[15px] leading-tight mb-1.5" style={{ color: '#ffffff' }}>
                    {card.title}
                  </h3>
                  <p className="text-[12px] text-white/80 leading-relaxed">{card.desc}</p>

                  <div
                    className="mt-3 h-[1px] transition-all duration-500"
                    style={{ background: `linear-gradient(to right, ${card.accentColor}50, transparent)`, opacity: 0.5 }}
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
