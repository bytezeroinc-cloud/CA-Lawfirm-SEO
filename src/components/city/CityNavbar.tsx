import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import type { CityAccent, ThemeTokens } from '../../data/cities'

const NAV_LINKS = [
  { label: 'AI SEO',     href: '/ai-seo-law-firms-california' },
  { label: 'AI Website', href: '/ai-website-development-law-firms-california' },
  { label: 'AI Marketing', href: '/ai-marketing-law-firms-california' },
]

export default function CityNavbar({
  accent,
  theme,
}: {
  accent: CityAccent
  theme?: ThemeTokens
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const isLight = !!theme?.isLight

  // Theme-aware glass
  const navGlassBg = isLight ? 'rgba(255,255,255,0.70)' : undefined
  const navGlassBorder = isLight ? '1px solid rgba(0,0,0,0.08)' : undefined

  const linkColor = isLight ? 'rgba(29,29,31,0.75)' : 'rgba(255,255,255,0.65)'
  const linkHoverColor = isLight ? '#1d1d1f' : '#fff'

  return (
    <header className="relative z-50 px-6 sm:px-10 md:px-16 pt-3 sm:pt-4">
      <nav
        className={isLight ? 'max-w-6xl mx-auto rounded-xl px-4 sm:px-6 py-3 flex items-center justify-between' : 'max-w-6xl mx-auto liquid-glass rounded-xl px-4 sm:px-6 py-3 flex items-center justify-between'}
        style={isLight ? { background: navGlassBg, border: navGlassBorder, backdropFilter: 'blur(20px) saturate(1.2)', WebkitBackdropFilter: 'blur(20px) saturate(1.2)' } : undefined}
      >
        <a href="/" className="flex items-center shrink-0">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-9 w-auto object-contain"
            style={isLight ? { filter: 'invert(1) brightness(0.18)' } : undefined}
          />
        </a>

        <div className="hidden lg:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm transition-colors duration-200"
              style={{ color: linkColor }}
              onMouseEnter={(e) => (e.currentTarget.style.color = linkHoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="tel:+18336675253"
          className="hidden lg:flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-200 hover:scale-[1.03]"
          style={{
            background: accent.gradient,
            color: '#fff',
            boxShadow: isLight ? '0 6px 18px rgba(0,0,0,0.18)' : `0 0 18px ${accent.glow}`,
          }}
        >
          <Phone size={14} strokeWidth={2.5} />
          Call Us
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-9 h-9 flex items-center justify-center relative"
          aria-label="Toggle menu"
          style={{ color: isLight ? '#1d1d1f' : '#fff' }}
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
        className={isLight ? 'lg:hidden mx-1 mt-1 rounded-xl overflow-hidden' : 'lg:hidden mx-1 mt-1 liquid-glass rounded-xl overflow-hidden'}
        style={{
          maxHeight: menuOpen ? '300px' : '0px',
          opacity: menuOpen ? 1 : 0,
          transition: 'max-height 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease',
          ...(isLight ? { background: navGlassBg, border: navGlassBorder, backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } : {}),
        }}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="py-2.5 text-sm transition-colors"
              style={{
                color: linkColor,
                borderBottom: `1px solid ${isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.06)'}`,
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+18336675253"
            className="mt-3 w-full flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold"
            style={{ background: accent.gradient, color: '#fff', boxShadow: isLight ? '0 6px 18px rgba(0,0,0,0.18)' : `0 0 14px ${accent.glow}` }}
            onClick={() => setMenuOpen(false)}
          >
            <Phone size={14} strokeWidth={2.5} />
            Call Us
          </a>
        </div>
      </div>
    </header>
  )
}
