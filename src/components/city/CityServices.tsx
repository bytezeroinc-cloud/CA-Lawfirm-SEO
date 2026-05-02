import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, ArrowRight, Search, Code2, Megaphone } from 'lucide-react'
import { getTheme } from '../../data/cities'
import type { City, ServiceAngle } from '../../data/cities'

const SERVICE_ICONS: Record<ServiceAngle['service'], typeof Search> = {
  'AI SEO': Search,
  'AI Web Development': Code2,
  'AI Marketing': Megaphone,
}

export default function CityServices({ city }: { city: City }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { accent } = city
  const t = getTheme(city)
  const isLight = t.isLight

  const cardShadow = isLight
    ? '0 8px 28px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)'
    : '0 12px 40px rgba(0,0,0,0.45)'

  return (
    <section ref={ref} className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 sm:mb-18 max-w-3xl"
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
              What We Do for {city.shortName} Law Firms
            </span>
          </span>
          <h2
            className="font-display font-bold leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)', letterSpacing: '-0.02em', color: t.textPrimary }}
          >
            Three services to grow your{' '}
            <span style={isLight
              ? { color: accent.secondary }
              : { color: accent.primary, filter: `drop-shadow(0 0 18px ${accent.glow})` }
            }>
              {city.name}
            </span>{' '}
            law firm.
          </h2>
          <p className="mt-5 text-[14px] sm:text-[15px] leading-relaxed max-w-2xl" style={{ color: t.textMuted }}>
            Everything you need to bring more clients to your firm — get found on Google with AI SEO, fill your pipeline with smart ad campaigns, and convert more visitors with a new high-converting website. Each service engineered specifically for {city.name}.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {city.services.map((svc, i) => {
            const Icon = SERVICE_ICONS[svc.service]
            return (
              <motion.a
                key={svc.service}
                href={svc.href}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl overflow-hidden p-7 sm:p-8 flex flex-col gap-5 transition-all duration-400 hover:-translate-y-1"
                style={{
                  background: t.bgCard,
                  backdropFilter: isLight ? 'blur(20px) saturate(1.2)' : 'blur(8px)',
                  WebkitBackdropFilter: isLight ? 'blur(20px) saturate(1.2)' : 'blur(8px)',
                  border: `1px solid ${isLight ? t.borderSubtle : `rgba(${accent.primaryRgb},0.16)`}`,
                  boxShadow: cardShadow,
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, rgba(${accent.primaryRgb},${isLight ? 0.05 : 0.10}) 0%, transparent 60%)`,
                  }}
                />
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(to right, transparent, ${accent.primary}, transparent)` }}
                />

                {/* Icon */}
                <div className="relative flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `rgba(${accent.primaryRgb},${isLight ? 0.06 : 0.10})`,
                      border: `1px solid rgba(${accent.primaryRgb},${isLight ? 0.18 : 0.25})`,
                    }}
                  >
                    <Icon size={20} style={{ color: accent.primary }} strokeWidth={2} />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="transition-all duration-400 group-hover:translate-x-1 group-hover:-translate-y-1"
                    style={{ color: t.textMuted }}
                  />
                </div>

                <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: accent.primary }}>
                  {svc.service}
                </div>

                <h3
                  className="font-display font-bold leading-tight"
                  style={{ fontSize: 'clamp(18px, 1.5vw, 22px)', letterSpacing: '-0.01em', color: t.textPrimary }}
                >
                  {svc.headline}
                </h3>

                <p className="text-[13px] sm:text-[14px] leading-relaxed" style={{ color: t.textSecondary }}>
                  {svc.description}
                </p>

                <ul className="flex flex-col gap-2.5 mt-1">
                  {svc.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2.5 text-[12.5px] leading-snug" style={{ color: t.textPrimary, opacity: isLight ? 0.75 : 0.70 }}>
                      <span
                        className="shrink-0 mt-1.5 w-1 h-1 rounded-full"
                        style={{ background: accent.primary, boxShadow: `0 0 4px ${accent.primary}` }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-auto pt-5"
                  style={{ borderTop: `1px solid rgba(${accent.primaryRgb},${isLight ? 0.10 : 0.12})` }}
                >
                  <span
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-[13px] font-semibold transition-all duration-300 group-hover:scale-[1.02]"
                    style={{
                      background: accent.gradient,
                      color: '#fff',
                      boxShadow: isLight
                        ? '0 6px 18px rgba(0,0,0,0.12)'
                        : `0 0 18px ${accent.glow}`,
                    }}
                  >
                    Learn About {svc.service}
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Inline CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <p className="text-[14px] text-center sm:text-left" style={{ color: t.textSecondary }}>
            Want all three working together for your {city.name} firm?
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
            Get Custom Proposal
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
