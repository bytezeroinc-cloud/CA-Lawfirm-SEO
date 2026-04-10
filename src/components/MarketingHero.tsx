import { useState, useEffect, useRef } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4'

const NAV_LINKS = ['AI SEO', 'AI Website', 'AI Marketing']

const STATS = [
  { value: 300, suffix: '%', unit: '',  label: 'Average ROAS Growth',       color: '#C084FC' },
  { value: 6,   suffix: '+', unit: '',  label: 'AI Marketing Tools Used',   color: '#FF8C42' },
  { value: 199, suffix: '+', unit: '',  label: 'California Cities Covered', color: '#34D399' },
  { value: 95,  suffix: '%', unit: '',  label: 'Client Retention Rate',     color: '#60A5FA' },
]

const LINE_1 = 'AI Marketing for'
const LINE_2 = 'California Law Firms'

let _idx = 0
const buildLine = (text: string) =>
  text.split('').map((char) => ({ char, delay: 200 + _idx++ * 30 }))

_idx = 0
const CHARS_1 = buildLine(LINE_1)
_idx++
const CHARS_2 = buildLine(LINE_2)

const DURATION = 1600
const TICK = 25

export default function MarketingHero() {
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [counts, setCounts] = useState(STATS.map(() => 0))
  const frameRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setMounted(true))
    )
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const startAt = Date.now() + 400
    frameRef.current = setInterval(() => {
      const elapsed = Date.now() - startAt
      if (elapsed < 0) return
      const t = Math.min(elapsed / DURATION, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setCounts(STATS.map((s) => Math.round(s.value * eased)))
      if (t >= 1 && frameRef.current) clearInterval(frameRef.current)
    }, TICK)
    return () => { if (frameRef.current) clearInterval(frameRef.current) }
  }, [mounted])

  const charStyle = (delay: number): React.CSSProperties => ({
    display: 'inline-block',
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateX(0px)' : 'translateX(-18px)',
    transition: 'opacity 500ms ease, transform 500ms ease',
    transitionDelay: `${delay}ms`,
  })

  const fadeStyle = (delay: number, duration = 1000): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transition: `opacity ${duration}ms ease`,
    transitionDelay: `${delay}ms`,
  })

  return (
    <div
      className="relative bg-black text-white overflow-hidden flex flex-col"
      style={{
        fontFamily: "'Brockmann', sans-serif",
        WebkitFontSmoothing: 'antialiased',
        minHeight: '100svh',
      }}
    >
      {/* Background Video */}
      <video
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Dark overlay with purple tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, rgba(12,0,20,0.18) 40%, rgba(0,0,0,0.58) 100%)',
        }}
      />

      {/* Navbar */}
      <header className="relative z-50 px-6 sm:px-10 md:px-16 pt-3 sm:pt-4">
        <nav className="max-w-6xl mx-auto liquid-glass rounded-xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center shrink-0">
            <img src="/logo.svg" alt="VEX Logo" className="h-9 w-auto object-contain" />
          </a>

          <div className="hidden lg:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={
                  link === 'AI SEO' ? '/ai-seo-law-firms-california'
                  : link === 'AI Website' ? '/'
                  : '/ai-marketing-law-firms-california'
                }
                className="text-sm transition-colors duration-200"
                style={{
                  color: link === 'AI Marketing' ? 'rgba(192,132,252,0.9)' : 'rgba(255,255,255,0.65)',
                }}
              >
                {link}
              </a>
            ))}
          </div>

          <a
            href="tel:+18336675253"
            className="hidden lg:flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-200 hover:scale-[1.03]"
            style={{
              background: 'linear-gradient(135deg, #C084FC, #9333EA)',
              color: '#fff',
              boxShadow: '0 0 18px rgba(192,132,252,0.4)',
            }}
          >
            <Phone size={14} strokeWidth={2.5} />
            Call Us
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-9 h-9 flex items-center justify-center relative"
            aria-label="Toggle menu"
          >
            <span className="absolute transition-all duration-400" style={{ opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
              <X size={18} />
            </span>
            <span className="absolute transition-all duration-400" style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
              <Menu size={18} />
            </span>
          </button>
        </nav>

        <div
          className="lg:hidden mx-1 mt-1 liquid-glass rounded-xl overflow-hidden"
          style={{
            maxHeight: menuOpen ? '300px' : '0px',
            opacity: menuOpen ? 1 : 0,
            transition: 'max-height 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease',
          }}
        >
          <div className="px-5 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={
                  link === 'AI SEO' ? '/ai-seo-law-firms-california'
                  : link === 'AI Website' ? '/'
                  : '/ai-marketing-law-firms-california'
                }
                className="py-2.5 text-sm text-white/70 hover:text-white border-b border-white/[0.06] last:border-0 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="tel:+18336675253"
              className="mt-3 w-full flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold"
              style={{ background: 'linear-gradient(135deg, #C084FC, #9333EA)', color: '#fff', boxShadow: '0 0 14px rgba(192,132,252,0.35)' }}
              onClick={() => setMenuOpen(false)}
            >
              <Phone size={14} strokeWidth={2.5} />
              Call Us
            </a>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex-1 flex items-end justify-center px-5 sm:px-10 md:px-16 pb-8 sm:pb-12 md:pb-16 pt-16 sm:pt-24 md:pt-32">
        <div className="w-full max-w-6xl mx-auto">

          {/* Badge */}
          <div className="mb-4 sm:mb-5" style={fadeStyle(400)}>
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest"
              style={{
                background: 'rgba(192,132,252,0.10)',
                border: '1px solid rgba(192,132,252,0.28)',
                color: 'rgba(192,132,252,0.85)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#C084FC', boxShadow: '0 0 8px #C084FC' }} />
              AI-POWERED LEGAL MARKETING
            </span>
          </div>

          <h1
            className="mb-4 sm:mb-5 md:mb-7 font-thin"
            style={{
              fontSize: 'clamp(22px, 4.2vw, 64px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              fontWeight: 100,
            }}
          >
            <div>
              {CHARS_1.map(({ char, delay }, i) => (
                <span key={i} style={charStyle(delay)}>{char === ' ' ? '\u00A0' : char}</span>
              ))}
            </div>
            <div>
              {CHARS_2.map(({ char, delay }, i) => (
                <span key={i} style={charStyle(delay)}>{char === ' ' ? '\u00A0' : char}</span>
              ))}
            </div>
          </h1>

          <p
            className="text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-xs sm:max-w-md md:max-w-xl"
            style={{ fontSize: 'clamp(13px, 1.8vw, 18px)', lineHeight: 1.6, ...fadeStyle(800) }}
          >
            AI-powered campaigns — Google Ads, content, email, and lead generation — built specifically for California law firms. Measurable ROI, delivered.
          </p>

          <div className="flex flex-col sm:flex-row gap-3" style={fadeStyle(1200)}>
            <a href="#contact" className="w-full sm:w-auto rounded-lg px-5 sm:px-6 py-2.5 text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
              style={{ background: 'linear-gradient(135deg, #C084FC, #9333EA)', color: '#fff', boxShadow: '0 0 20px rgba(192,132,252,0.35)' }}>
              Get Free Marketing Audit
            </a>
            <a href="#contact" className="w-full sm:w-auto liquid-glass border border-white/20 rounded-lg px-5 sm:px-6 py-2.5 text-sm font-medium text-white hover:bg-white/10 active:scale-[0.98] transition-all text-center">
              Book Strategy Call
            </a>
          </div>

        </div>
      </main>

      {/* Stats Bar */}
      <div className="relative z-20 px-6 sm:px-10 md:px-16 pb-8 sm:pb-10" style={fadeStyle(1600, 800)}>
        <div
          className="max-w-6xl mx-auto rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(230,230,238,0.11)',
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            border: '1px solid rgba(255,255,255,0.16)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.14), 0 4px 24px rgba(0,0,0,0.18)',
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className={[
                  'px-5 sm:px-6 py-4 md:py-5 flex flex-col gap-0.5',
                  i < STATS.length - 1 ? 'border-r border-white/[0.08]' : '',
                  i < 2 ? 'border-b border-white/[0.06] lg:border-b-0' : '',
                ].join(' ')}
              >
                <div
                  className="font-thin leading-none"
                  style={{
                    fontSize: 'clamp(20px, 2.8vw, 38px)',
                    fontWeight: 100,
                    color: stat.color,
                    letterSpacing: '-0.02em',
                    fontFamily: "'Brockmann', sans-serif",
                  }}
                >
                  {counts[i]}{stat.suffix}
                  {stat.unit && (
                    <span className="ml-1" style={{ fontSize: 'clamp(13px, 1.2vw, 16px)', opacity: 0.75 }}>
                      {stat.unit}
                    </span>
                  )}
                </div>
                <p className="text-white/40 leading-tight" style={{ fontSize: 'clamp(10px, 0.9vw, 12px)', marginTop: '4px' }}>
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
