import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Phone } from 'lucide-react'
import { getTheme } from '../../data/cities'
import type { City } from '../../data/cities'

export default function CityClosingCTA({ city }: { city: City }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { accent } = city
  const t = getTheme(city)
  const isLight = t.isLight

  // Use closing bg if specified, otherwise hero image
  const bg = city.sectionBackgrounds?.closing ?? city.heroImage
  const isVideo = /\.(mp4|webm|mov)$/i.test(bg)

  const overlayTop = isLight ? 'rgba(245,245,247,0.65)' : 'rgba(0,0,0,0.65)'
  const overlayMid = isLight ? `rgba(${accent.primaryRgb},0.06)` : `rgba(${accent.primaryRgb},0.12)`
  const overlayBot = isLight ? 'rgba(245,245,247,0.92)' : 'rgba(0,0,0,0.85)'
  const edgeFade = isLight ? 'rgba(245,245,247,0.92)' : 'rgba(0,0,0,0.85)'

  return (
    <section ref={ref} id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {isVideo ? (
          <video
            src={bg}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{
              opacity: isLight ? 0.50 : 0.55,
              filter: isLight ? 'saturate(0.5) brightness(1.10)' : 'none',
              transform: 'scale(1.08)',
            }}
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${bg}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: isLight ? 0.50 : 0.55,
              filter: isLight ? 'saturate(0.5) brightness(1.10)' : 'none',
              transform: 'scale(1.05)',
            }}
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${overlayTop} 0%, ${overlayMid} 50%, ${overlayBot} 100%)`,
          }}
        />
        <div className="absolute inset-x-0 top-0 h-32" style={{ background: `linear-gradient(to bottom, ${edgeFade}, transparent)` }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{
              background: isLight ? 'rgba(255,255,255,0.70)' : `rgba(${accent.primaryRgb},0.12)`,
              border: `1px solid ${isLight ? t.borderSubtle : `rgba(${accent.primaryRgb},0.30)`}`,
              color: accent.primary,
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: accent.primary, boxShadow: `0 0 8px ${accent.primary}` }}
            />
            <span className="text-[10px] font-semibold uppercase tracking-widest">
              Free {city.name} Audit · 48-hour turnaround
            </span>
          </span>

          <h2
            className="font-display font-bold leading-tight mb-5"
            style={{ fontSize: 'clamp(28px, 4.6vw, 56px)', letterSpacing: '-0.025em', color: t.textPrimary }}
          >
            <span
              style={isLight
                ? { color: accent.primary }
                : {
                    background: `linear-gradient(120deg, #fff 0%, ${accent.primary} 60%, ${accent.secondary} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: `drop-shadow(0 0 24px ${accent.glow})`,
                  }
              }
            >
              {city.closing.headline}
            </span>
          </h2>

          <p className="text-[15px] sm:text-[17px] leading-relaxed mb-9 max-w-2xl mx-auto" style={{ color: t.textSecondary }}>
            {city.closing.subhead}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-[14.5px] font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: accent.gradient,
                color: '#fff',
                boxShadow: isLight ? '0 12px 32px rgba(0,0,0,0.20)' : `0 0 32px ${accent.glow}`,
              }}
            >
              {city.primaryCta.label}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+18336675253"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-[14.5px] font-medium active:scale-[0.98] transition-all"
              style={{
                background: isLight ? 'rgba(255,255,255,0.70)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${isLight ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.25)'}`,
                color: t.textPrimary,
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              <Phone size={15} strokeWidth={2.2} />
              (833) 667-5253
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[12px]" style={{ color: t.textMuted }}>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              No commitments · Free audit
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              48-hour turnaround
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              Built specifically for {city.name}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
