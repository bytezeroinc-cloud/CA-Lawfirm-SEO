import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { getTheme } from '../../data/cities'
import type { City } from '../../data/cities'

export default function CityMidCTA({ city }: { city: City }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { accent } = city
  const t = getTheme(city)
  const isLight = t.isLight

  return (
    <section ref={ref} className="relative px-4 sm:px-6 md:px-12 py-10 sm:py-14" style={{ background: t.bgPage }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto rounded-2xl px-6 sm:px-10 py-7 sm:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative overflow-hidden"
        style={{
          background: isLight
            ? `linear-gradient(135deg, rgba(${accent.primaryRgb},0.04), rgba(255,255,255,0.7) 60%, rgba(255,255,255,1))`
            : `linear-gradient(135deg, rgba(${accent.primaryRgb},0.10), rgba(${accent.primaryRgb},0.02) 60%, rgba(0,0,0,0.0))`,
          border: `1px solid ${isLight ? t.borderSubtle : `rgba(${accent.primaryRgb},0.25)`}`,
          boxShadow: isLight ? '0 8px 28px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div
          className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl pointer-events-none"
          style={{ background: accent.primary, opacity: isLight ? 0.10 : 0.40 }}
        />

        <div className="relative z-10 max-w-xl">
          <div className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: accent.primary }}>
            Built for {city.name}
          </div>
          <h3
            className="font-display font-bold leading-tight"
            style={{ fontSize: 'clamp(18px, 2.2vw, 26px)', letterSpacing: '-0.01em', color: t.textPrimary }}
          >
            See exactly how we&apos;d compete in {city.name} for your firm.
          </h3>
          <p className="mt-2 text-[13.5px] leading-snug" style={{ color: t.textSecondary }}>
            Free audit covering local SEO footprint, ad efficiency, site quality, and review sentiment.
          </p>
        </div>

        <a
          href="#contact"
          className="group relative z-10 shrink-0 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-[14px] font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: accent.gradient,
            color: '#fff',
            boxShadow: isLight ? '0 8px 24px rgba(0,0,0,0.16)' : `0 0 24px ${accent.glow}`,
          }}
        >
          Start Free Audit
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </motion.div>
    </section>
  )
}
