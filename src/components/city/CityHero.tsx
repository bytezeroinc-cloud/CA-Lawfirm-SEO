import { useState, useEffect, useRef } from 'react'
import { getTheme } from '../../data/cities'
import type { City } from '../../data/cities'
import CityNavbar from './CityNavbar'

export default function CityHero({ city }: { city: City }) {
  const [mounted, setMounted] = useState(false)
  const [counts, setCounts] = useState(city.heroStats.map(() => 0))
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setMounted(true)))
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const startAt = Date.now() + 400
    const duration = 1600
    const targets = city.heroStats.map((s) => parseFloat(s.value.replace(/[^\d.]/g, '')) || 0)

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startAt
      if (elapsed < 0) return
      const t = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setCounts(targets.map((v) => parseFloat((v * eased).toFixed(v < 10 ? 1 : 0))))
      if (t >= 1 && intervalRef.current) clearInterval(intervalRef.current)
    }, 25)

    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [mounted, city.heroStats])

  const formatStat = (raw: string, animated: number) => {
    const match = raw.match(/^([^\d]*)([\d.]+)(.*)$/)
    if (!match) return raw
    const [, prefix, , suffix] = match
    return `${prefix}${animated}${suffix}`
  }

  const fadeStyle = (delay: number, duration = 900): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
    transform: mounted ? 'translateY(0)' : 'translateY(8px)',
    transitionDelay: `${delay}ms`,
  })

  const { accent } = city
  const tokens = getTheme(city)
  const isLight = tokens.isLight

  // Light mode: Apple silver/grey overlay. Dark mode: cosmic dark.
  const overlayBg = isLight
    ? `radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.40) 0%, transparent 55%), linear-gradient(to bottom, rgba(245,245,247,0.80) 0%, rgba(245,245,247,0.55) 35%, rgba(245,245,247,0.92) 100%)`
    : `radial-gradient(ellipse at 30% 40%, rgba(${accent.primaryRgb},0.20) 0%, transparent 55%), linear-gradient(to bottom, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.30) 35%, rgba(0,0,0,0.85) 100%)`

  const statBarBg = isLight
    ? 'rgba(255,255,255,0.65)'
    : 'rgba(230,230,238,0.10)'
  const statBarBorder = isLight
    ? 'rgba(0,0,0,0.10)'
    : 'rgba(255,255,255,0.14)'
  const statBarShadow = isLight
    ? '0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)'
    : 'inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 24px rgba(0,0,0,0.18)'
  const statDividerColor = isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'

  return (
    <div
      className="relative overflow-hidden flex flex-col"
      style={{
        fontFamily: "'Brockmann', sans-serif",
        WebkitFontSmoothing: 'antialiased',
        minHeight: '100svh',
        background: isLight ? '#fafafa' : '#000',
        color: tokens.textPrimary,
      }}
    >
      {/* Background — video preferred, image fallback */}
      {city.heroVideo ? (
        <video
          src={city.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          poster={city.heroImage}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{
            zIndex: 0,
            transform: mounted ? 'scale(1.25)' : 'scale(1.32)',
            transformOrigin: 'center center',
            transition: 'transform 2.4s cubic-bezier(0.22,1,0.36,1)',
            opacity: isLight ? 0.55 : 1,
            filter: isLight ? 'saturate(0.65) brightness(1.08)' : 'none',
          }}
        />
      ) : (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 0,
            backgroundImage: `url('${city.heroImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: mounted ? 'scale(1.05)' : 'scale(1.10)',
            transition: 'transform 2s cubic-bezier(0.22,1,0.36,1)',
            opacity: isLight ? 0.6 : 1,
            filter: isLight ? 'saturate(0.7) brightness(1.05)' : 'none',
          }}
        />
      )}

      {/* Color/tonal wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1, background: overlayBg }}
      />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          opacity: isLight ? 0.03 : 0.04,
          backgroundImage: `linear-gradient(${accent.primary} 1px, transparent 1px), linear-gradient(90deg, ${accent.primary} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Navbar */}
      <CityNavbar accent={accent} theme={tokens} />

      {/* Hero content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-5 sm:px-10 md:px-16 pt-12 sm:pt-20 md:pt-24 pb-8">
        <div className="w-full max-w-6xl mx-auto">
          {/* Badge */}
          <div className="mb-5" style={fadeStyle(200)}>
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest"
              style={{
                background: isLight ? 'rgba(255,255,255,0.70)' : `rgba(${accent.primaryRgb},0.10)`,
                border: `1px solid ${isLight ? 'rgba(0,0,0,0.10)' : `rgba(${accent.primaryRgb},0.30)`}`,
                color: accent.primary,
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: accent.primary, boxShadow: `0 0 8px ${accent.primary}` }}
              />
              {city.badgeLabel}
            </span>
          </div>

          {/* Eyebrow */}
          <div
            className="mb-3 text-[12px] sm:text-[13px] uppercase tracking-[0.25em]"
            style={{ ...fadeStyle(350), color: tokens.textMuted }}
          >
            {city.eyebrow}
          </div>

          {/* Headline */}
          <h1
            className="mb-5 sm:mb-6"
            style={{
              fontSize: 'clamp(28px, 5.4vw, 76px)',
              letterSpacing: '-0.03em',
              lineHeight: 1.04,
              fontWeight: isLight ? 600 : 200,
              ...fadeStyle(500),
            }}
          >
            <div style={{ color: tokens.textPrimary }}>{city.headline}</div>
            <div
              style={
                isLight
                  ? { color: accent.secondary, fontWeight: 600 }
                  : {
                      background: `linear-gradient(120deg, #fff 0%, ${accent.primary} 50%, ${accent.secondary} 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: 300,
                      filter: `drop-shadow(0 0 30px ${accent.glow})`,
                    }
              }
            >
              {city.headlineAccent}
            </div>
          </h1>

          {/* Subhead */}
          <p
            className="mb-7 sm:mb-9 max-w-2xl"
            style={{
              fontSize: 'clamp(14px, 1.6vw, 18px)',
              lineHeight: 1.6,
              color: tokens.textSecondary,
              ...fadeStyle(700),
            }}
          >
            {city.subhead}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3" style={fadeStyle(900)}>
            <a
              href={city.primaryCta.href}
              className="group w-full sm:w-auto rounded-lg px-6 py-3 text-[14px] font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all text-center inline-flex items-center justify-center gap-2"
              style={{
                background: accent.gradient,
                color: '#fff',
                boxShadow: isLight
                  ? '0 8px 24px rgba(0,0,0,0.16)'
                  : `0 0 28px ${accent.glow}`,
              }}
            >
              {city.primaryCta.label}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href={city.secondaryCta.href}
              className="w-full sm:w-auto rounded-lg px-6 py-3 text-[14px] font-medium active:scale-[0.98] transition-all text-center"
              style={{
                background: isLight ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${isLight ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.20)'}`,
                color: tokens.textPrimary,
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              {city.secondaryCta.label}
            </a>
          </div>
        </div>
      </main>

      {/* Stats bar */}
      <div className="relative z-20 px-6 sm:px-10 md:px-16 pb-8 sm:pb-10" style={fadeStyle(1200, 800)}>
        <div
          className="max-w-6xl mx-auto rounded-2xl overflow-hidden"
          style={{
            background: statBarBg,
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            border: `1px solid ${statBarBorder}`,
            boxShadow: statBarShadow,
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {city.heroStats.map((stat, i) => (
              <div
                key={i}
                className="px-5 sm:px-6 py-4 md:py-5 flex flex-col gap-0.5"
                style={{
                  borderRight: i < city.heroStats.length - 1 ? `1px solid ${statDividerColor}` : 'none',
                  borderBottom: i < 2 ? `1px solid ${statDividerColor}` : 'none',
                }}
              >
                <div
                  className="leading-none"
                  style={{
                    fontSize: 'clamp(20px, 2.8vw, 38px)',
                    fontWeight: isLight ? 600 : 200,
                    color: accent.primary,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {formatStat(stat.value, counts[i])}
                </div>
                <p
                  className="leading-tight mt-1"
                  style={{ fontSize: 'clamp(10px, 0.9vw, 12px)', color: tokens.textMuted }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
