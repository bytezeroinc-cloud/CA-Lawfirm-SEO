import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Gavel, Shield, Heart, Globe, FileText, AlertTriangle, ArrowRight } from 'lucide-react'

const areas = [
  {
    icon: Gavel,
    title: 'Personal Injury',
    desc: 'PI leads are the most expensive in legal — $150–$400 per click. We build AI-powered Google Ads campaigns with exact-match injury-type targeting (car accident, truck wreck, slip & fall), smart bidding on case value not clicks, and Meta retargeting funnels that turn one visit into a signed retainer.',
    accentColor: '#EA580C',
    aura: 'rgba(251,146,60,0.55)',
  },
  {
    icon: Shield,
    title: 'Criminal Defense',
    desc: 'Criminal defense searches spike at 2 AM and demand immediate action. We run 24/7 Google Ads with call-only extensions, geo-fenced courthouse targeting, and AI-optimized landing pages for every charge type — DUI, assault, drug possession — so your phone rings when it matters most.',
    accentColor: '#7C3AED',
    aura: 'rgba(167,139,250,0.50)',
  },
  {
    icon: Heart,
    title: 'Family Law',
    desc: 'Divorce and custody clients research for weeks before calling. We build content marketing funnels with SEO-optimized guides, empathetic Meta ad creative, and email nurture sequences that build trust over time — converting anxious researchers into consultations at 40% lower CPL than competitors.',
    accentColor: '#0D9488',
    aura: 'rgba(45,212,191,0.50)',
  },
  {
    icon: Globe,
    title: 'Immigration Law',
    desc: 'We run bilingual Google Ads and Meta campaigns — English and Spanish — with culturally targeted creative for every visa type (DACA, green card, asylum, citizenship). Community-specific landing pages and WhatsApp lead capture connect your firm to every California immigrant community.',
    accentColor: '#EA580C',
    aura: 'rgba(251,146,60,0.55)',
  },
  {
    icon: FileText,
    title: 'Estate Planning',
    desc: 'High-net-worth clients don\'t click cheap ads. We run LinkedIn and Google Display campaigns targeting affluent zip codes, financial advisor referral networks, and educational content funnels — webinar registrations, trust planning guides — that position your firm as the premium choice before competitors even appear.',
    accentColor: '#7C3AED',
    aura: 'rgba(167,139,250,0.50)',
  },
  {
    icon: AlertTriangle,
    title: 'DUI Defense',
    desc: 'DUI clients search on a cracked phone screen, possibly in a parking lot. We run call-only ads with 10-day DMV deadline urgency messaging, geo-target near police stations and courthouse zip codes, and bid aggressively on weekend/late-night hours when arrest volume peaks — capturing cases before competitors wake up.',
    accentColor: '#0D9488',
    aura: 'rgba(45,212,191,0.50)',
  },
]

export default function MarketingPracticeAreas() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 sm:px-6 md:px-12 overflow-hidden"
    >
      {/* ── Dark world background + glassmorphism overlay ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/world-dark.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.55 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(160deg, rgba(8,6,20,0.78) 0%, rgba(4,10,28,0.72) 50%, rgba(6,8,18,0.82) 100%)',
            backdropFilter: 'blur(2px)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC]" />
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">Practice Area Specialization</span>
          </span>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            AI Marketing for Every
            <br />
            <span style={{ color: '#C084FC', filter: 'drop-shadow(0 0 20px rgba(192,132,252,0.5))' }}>Practice Area</span>
          </h2>
          <p className="mt-4 text-[14px] max-w-xl mx-auto leading-relaxed text-white/50">
            Each practice area has distinct search behavior, ad costs, and conversion psychology.
            As a dedicated legal marketing agency, our AI tailors every campaign to match — so your budget works harder.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7">
          {areas.map((area, idx) => {
            const Icon = area.icon
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Colored aura glow behind card */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    inset: '-20px -12px -26px -12px',
                    background: `radial-gradient(ellipse at 50% 85%, ${area.aura} 0%, transparent 65%)`,
                    filter: 'blur(22px)',
                    zIndex: 0,
                  }}
                />

                {/* Glass card */}
                <div
                  className="group relative flex flex-col cursor-default rounded-2xl overflow-hidden"
                  style={{
                    zIndex: 1,
                    background: 'rgba(10,10,18,0.72)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    backdropFilter: 'blur(16px)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.06)',
                    minHeight: '280px',
                    transition: 'box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.transform = 'translateY(-4px)'
                    el.style.boxShadow = `0 12px 40px rgba(0,0,0,0.65), 0 0 0 1px ${area.accentColor}40, inset 0 1px 0 rgba(255,255,255,0.08)`
                    el.style.borderColor = `${area.accentColor}35`
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.transform = 'translateY(0)'
                    el.style.boxShadow = '0 4px 24px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.06)'
                    el.style.borderColor = 'rgba(255,255,255,0.10)'
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="h-[1px]"
                    style={{ background: `linear-gradient(to right, transparent, ${area.accentColor}60, transparent)` }}
                  />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Icon + Title row */}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          background: `${area.accentColor}18`,
                          border: `1.5px solid ${area.accentColor}45`,
                          boxShadow: `0 0 16px ${area.accentColor}25`,
                        }}
                      >
                        <Icon size={17} style={{ color: area.accentColor }} strokeWidth={1.8} />
                      </div>
                      <h3
                        className="font-display font-bold text-[16px] leading-snug text-white"
                      >
                        {area.title} Law Firms
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-[13px] leading-relaxed flex-1 text-white/55">
                      {area.desc}
                    </p>

                    {/* CTA pill */}
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '14px', marginTop: '16px' }}>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2.5 rounded-xl px-3.5 py-2 cursor-pointer group/link transition-all duration-200"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.20)',
                        }}
                      >
                        <Icon size={13} style={{ color: area.accentColor }} strokeWidth={2} />
                        <span
                          className="text-[11px] font-bold uppercase tracking-wider text-white/75"
                        >
                          Learn More
                        </span>
                        <ArrowRight
                          size={10}
                          style={{ color: area.accentColor }}
                          className="transition-transform duration-200 group-hover/link:translate-x-0.5"
                          strokeWidth={2.5}
                        />
                      </a>
                    </div>
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
