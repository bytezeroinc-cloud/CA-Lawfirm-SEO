import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Gavel, Shield, Heart, Globe, FileText, AlertTriangle, ArrowRight } from 'lucide-react'

const areas = [
  {
    icon: Gavel,
    title: 'Personal Injury',
    desc: 'We build high-impact PI sites with prominent settlement galleries, injury-type landing pages (car accident, slip & fall, motorcycle), and bold "No Fee Unless We Win" CTAs — designed to instill trust and get the phone call before your competitor does.',
    accentColor: '#EA580C',
    aura: 'rgba(251,146,60,0.55)',
  },
  {
    icon: Shield,
    title: 'Criminal Defense',
    desc: 'Criminal defense sites need to project calm authority at 2 AM on a phone screen. We build bold, credential-forward designs with 24/7 intake forms, charge-type practice pages, and attorney bio sections engineered to convert fear into a retained client.',
    accentColor: '#7C3AED',
    aura: 'rgba(167,139,250,0.50)',
  },
  {
    icon: Heart,
    title: 'Family Law',
    desc: 'Divorce and custody clients are emotionally raw. We design warm, approachable sites with clear process explainers, soft visual language, private intake flows, and guided consultation booking — reducing anxiety at every step so they choose you with confidence.',
    accentColor: '#0D9488',
    aura: 'rgba(45,212,191,0.50)',
  },
  {
    icon: Globe,
    title: 'Immigration Law',
    desc: "We build fully bilingual sites — English and Spanish — with culturally adaptive content, visa-type landing pages (DACA, green card, asylum, citizenship), and community-trust visuals that speak to every California immigrant community your firm serves.",
    accentColor: '#EA580C',
    aura: 'rgba(251,146,60,0.55)',
  },
  {
    icon: FileText,
    title: 'Estate Planning',
    desc: 'High-net-worth clients judge your firm by how your website looks before they ever call. We deliver polished, premium designs with educational resource libraries, trust & will explainers, planning checklist tools, and a professional aesthetic that commands the fee you charge.',
    accentColor: '#7C3AED',
    aura: 'rgba(167,139,250,0.50)',
  },
  {
    icon: AlertTriangle,
    title: 'DUI Defense',
    desc: 'DUI clients are on a cracked phone screen, possibly in a parking lot. We build lightning-fast sites with above-the-fold "Call Now" buttons, a simplified 3-field intake form, 10-day DMV deadline urgency messaging, and zero friction between finding you and hiring you.',
    accentColor: '#0D9488',
    aura: 'rgba(45,212,191,0.50)',
  },
]

export default function PracticeAreas() {
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
        {/* Glassmorphism frost layer */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(160deg, rgba(8,6,20,0.78) 0%, rgba(4,10,28,0.72) 50%, rgba(6,8,18,0.82) 100%)',
            backdropFilter: 'blur(2px)',
          }}
        />
        {/* Vignette edges */}
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">Practice Area Specialization</span>
          </span>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            AI Websites for Every
            <br />
            <span style={{ color: '#EA580C', filter: 'drop-shadow(0 0 20px rgba(234,88,12,0.5))' }}>Practice Area</span>
          </h2>
          <p className="mt-4 text-[14px] max-w-xl mx-auto leading-relaxed text-white/50">
            Each practice area has distinct client psychology, keyword patterns, and trust signals.
            Our AI knows the difference — and builds accordingly.
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
