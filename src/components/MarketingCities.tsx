import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/* ── California legal markets with ad spend context ── */
const markets = [
  {
    city: 'Los Angeles',
    slug: 'los-angeles',
    pop: '3.9M',
    avgCpc: '$18–42',
    topPractice: 'Personal Injury',
    competition: 'Very High',
    competitionColor: '#EF4444',
    opportunity: 'Bing underutilized — 30% lower CPC than Google',
    accentColor: '#C084FC',
    delay: 0,
  },
  {
    city: 'San Francisco',
    slug: 'san-francisco',
    pop: '870K',
    avgCpc: '$22–48',
    topPractice: 'Employment Law',
    competition: 'High',
    competitionColor: '#F97316',
    opportunity: 'Tech workers need employment/IP attorneys',
    accentColor: '#60A5FA',
    delay: 60,
  },
  {
    city: 'San Diego',
    slug: 'san-diego',
    pop: '1.4M',
    avgCpc: '$14–35',
    topPractice: 'Criminal Defense',
    competition: 'Medium',
    competitionColor: '#FBBF24',
    opportunity: 'Military community = high DUI/criminal volume',
    accentColor: '#34D399',
    delay: 120,
  },
  {
    city: 'Sacramento',
    slug: 'sacramento',
    pop: '525K',
    avgCpc: '$12–28',
    topPractice: 'Family Law',
    competition: 'Medium',
    competitionColor: '#FBBF24',
    opportunity: 'Government workers = strong employment caseload',
    accentColor: '#FF8C42',
    delay: 180,
  },
  {
    city: 'San Jose',
    slug: 'san-jose',
    pop: '1.0M',
    avgCpc: '$20–44',
    topPractice: 'Immigration',
    competition: 'High',
    competitionColor: '#F97316',
    opportunity: 'Largest immigrant population in CA — high PI volume',
    accentColor: '#A855F7',
    delay: 240,
  },
  {
    city: 'Orange County',
    slug: 'orange-county',
    pop: '3.2M',
    avgCpc: '$15–38',
    topPractice: 'Estate Planning',
    competition: 'Medium-High',
    competitionColor: '#F97316',
    opportunity: 'Wealthy demographics = estate & business law',
    accentColor: '#FBBF24',
    delay: 300,
  },
]

const channelBreakdown = [
  { label: 'Google Search', pct: 52, color: '#C084FC' },
  { label: 'Microsoft / Bing', pct: 18, color: '#60A5FA' },
  { label: 'Meta / Social', pct: 16, color: '#FF8C42' },
  { label: 'YouTube', pct: 8, color: '#34D399' },
  { label: 'Display / Retargeting', pct: 6, color: '#FBBF24' },
]

export default function MarketingCities() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/world-orbit.jpg" alt="" className="w-full h-full object-cover object-center" style={{ opacity: 0.35 }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(4,4,10,0.60) 0%, rgba(6,4,16,0.70) 50%, rgba(4,4,12,0.90) 100%)' }} />
        <div className="absolute inset-x-0 top-0 h-32" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.70), transparent)' }} />
        <div className="absolute inset-x-0 bottom-0 h-32" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.70), transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: Market intelligence cards ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC]" />
                <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">California Market Intelligence</span>
              </span>
              <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>
                We Know Every
                <br />
                <span style={{ color: '#C084FC', filter: 'drop-shadow(0 0 20px rgba(192,132,252,0.5))' }}>CA Legal Market</span>
              </h2>
              <p className="mt-3 text-[14px] text-white/40 leading-relaxed max-w-md">
                Campaign strategy isn't one-size-fits-all. We build separate campaigns for each market based on real CPC data, local competition, and dominant practice areas.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {markets.map((m) => (
                <motion.div
                  key={m.city}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: m.delay / 1000, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-xl overflow-hidden"
                  style={{
                    background: 'rgba(14,12,22,0.92)',
                    border: `1px solid ${m.accentColor}20`,
                    boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
                  }}
                >
                  {/* Top accent */}
                  <div className="h-[1px]" style={{ background: `linear-gradient(to right, transparent, ${m.accentColor}50, transparent)` }} />

                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <a
                          href={`/ai-marketing-law-firms-california/${m.slug}`}
                          className="font-display font-bold text-[14px] leading-tight transition-colors duration-200 hover:opacity-80"
                          style={{ color: m.accentColor }}
                        >
                          {m.city}
                        </a>
                        <div className="text-[10px] text-white/30 mt-0.5">Pop. {m.pop}</div>
                      </div>
                      <span
                        className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                        style={{ color: m.competitionColor, background: `${m.competitionColor}15`, border: `1px solid ${m.competitionColor}30` }}
                      >
                        {m.competition}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] text-white/35">Avg CPC</span>
                      <span className="text-[11px] font-bold" style={{ color: m.accentColor }}>{m.avgCpc}</span>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] text-white/35">Top Practice</span>
                      <span className="text-[11px] text-white/65">{m.topPractice}</span>
                    </div>

                    <div className="rounded-lg px-3 py-2" style={{ background: `${m.accentColor}09`, border: `1px solid ${m.accentColor}18` }}>
                      <span className="text-[10px] leading-snug" style={{ color: `${m.accentColor}CC` }}>
                        {m.opportunity}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: Budget allocation + channel breakdown ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Channel breakdown */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: 'rgba(14,12,22,0.95)', border: '1px solid rgba(192,132,252,0.18)' }}
            >
              <div className="h-[1px]" style={{ background: 'linear-gradient(to right, transparent, rgba(192,132,252,0.50), transparent)' }} />
              <div className="p-6">
                <div className="text-[10px] font-extrabold uppercase tracking-widest mb-1" style={{ color: '#C084FC' }}>
                  How We Allocate Your Budget
                </div>
                <h3 className="font-display font-bold text-white text-[18px] mb-5">
                  Every Channel in Its Place
                </h3>

                <div className="flex flex-col gap-4">
                  {channelBreakdown.map((c, i) => (
                    <motion.div
                      key={c.label}
                      initial={{ opacity: 0, x: 16 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                    >
                      <div className="flex justify-between mb-1.5">
                        <span className="text-[12px] text-white/55">{c.label}</span>
                        <span className="text-[12px] font-bold" style={{ color: c.color }}>{c.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                        <motion.div
                          className="h-full rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${c.pct}%` } : {}}
                          transition={{ duration: 1, delay: 0.4 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                          style={{ background: c.color, boxShadow: `0 0 8px ${c.color}60` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Callout stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: '199+', label: 'CA Cities Targeted', color: '#C084FC' },
                { val: '2x', label: 'Bing vs Google CPL for legal', color: '#60A5FA' },
                { val: '$0', label: 'Wasted spend on irrelevant traffic', color: '#34D399' },
                { val: '7 days', label: 'From onboarding to live campaigns', color: '#FF8C42' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.07 }}
                  className="rounded-xl p-4"
                  style={{ background: `${s.color}08`, border: `1px solid ${s.color}20` }}
                >
                  <div className="font-display font-black leading-none mb-1" style={{ fontSize: '22px', color: s.color, letterSpacing: '-0.03em' }}>
                    {s.val}
                  </div>
                  <div className="text-[11px] text-white/35 leading-tight">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
