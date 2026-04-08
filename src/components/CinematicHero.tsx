import { useState } from 'react'
import { Search, User, Menu, X, Play, ChevronLeft, ChevronRight, Star, Clock, MapPin } from 'lucide-react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4'

const navLinks = ['Services', 'Process', 'Results', 'Pricing', 'FAQ']

export default function CinematicHero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div
      id="home"
      className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── Background Video ── */}
      <video
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* ── Bottom Blur (reduced — no fog over text) ── */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          maskImage: 'linear-gradient(to top, black 0%, transparent 42%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 42%)',
        }}
      />

      {/* ── Dark Gradient Backing (above blur, below content — ensures text legibility) ── */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background:
            'linear-gradient(to top, rgba(5,5,8,0.94) 0%, rgba(5,5,8,0.72) 28%, rgba(5,5,8,0.25) 52%, transparent 72%)',
        }}
      />

      {/* ── Top Gradient Vignette (navbar legibility) ── */}
      <div
        className="fixed inset-x-0 top-0 h-32 pointer-events-none"
        style={{
          zIndex: 3,
          background: 'linear-gradient(to bottom, rgba(5,5,8,0.72) 0%, rgba(5,5,8,0.2) 60%, transparent 100%)',
        }}
      />

      {/* ── Navbar ── */}
      <nav className="relative z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 md:py-6">
        {/* Logo */}
        <a
          href="#home"
          className="font-bold text-base md:text-lg tracking-tight text-white animate-blur-fade-up"
          style={{ animationDelay: '0ms' }}
        >
          CaliforniaLawFirmSEO
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-white/70 hover:text-white transition-colors animate-blur-fade-up"
              style={{ animationDelay: `${100 + i * 50}ms` }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-2 liquid-glass rounded-full px-4 md:px-6 py-2 text-sm font-medium animate-blur-fade-up cursor-pointer"
            style={{ animationDelay: '350ms' }}
          >
            <Search size={15} />
            <span>Get Free Audit</span>
          </a>
          <button
            className="hidden sm:flex w-10 h-10 rounded-full liquid-glass items-center justify-center animate-blur-fade-up"
            style={{ animationDelay: '400ms' }}
          >
            <User size={17} />
          </button>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 rounded-full liquid-glass flex items-center justify-center animate-blur-fade-up"
            style={{ animationDelay: '350ms' }}
            aria-label="Toggle menu"
          >
            <span
              className="absolute transition-all duration-500 ease-out"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'rotate(0deg) scale(1)' : 'rotate(-180deg) scale(0.5)',
              }}
            >
              <X size={18} />
            </span>
            <span
              className="absolute transition-all duration-500 ease-out"
              style={{
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? 'rotate(180deg) scale(0.5)' : 'rotate(0deg) scale(1)',
              }}
            >
              <Menu size={18} />
            </span>
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        className="lg:hidden absolute left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-lg border-t border-b border-white/10 shadow-2xl"
        style={{
          top: '72px',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-12px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease',
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="py-3 px-3 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/5 transition-all"
              style={{
                transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                opacity: menuOpen ? 1 : 0,
                transition: `transform 0.4s cubic-bezier(0.22,1,0.36,1) ${50 + i * 50}ms, opacity 0.3s ease ${50 + i * 50}ms`,
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          {/* Mobile-only buttons */}
          <div className="flex gap-3 pt-3 mt-2 border-t border-white/10 sm:hidden">
            <a
              href="#contact"
              className="flex items-center gap-2 liquid-glass rounded-full px-5 py-2 text-sm flex-1 justify-center cursor-pointer"
            >
              <Search size={15} /> Get Free Audit
            </a>
            <button className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center">
              <User size={17} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Hero Content (bottom-aligned) ── */}
      <div className="relative z-20 flex-1 flex flex-col justify-end px-4 sm:px-6 md:px-12 pb-8 md:pb-16">
        <div className="flex flex-col md:flex-row items-end gap-6 md:gap-10">
          {/* Left — Main Content */}
          <div className="flex-1 min-w-0">
            {/* Metadata row */}
            <div
              className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 md:mb-8 animate-blur-fade-up"
              style={{ animationDelay: '300ms' }}
            >
              <span
                className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white/90 rounded-full px-3 py-1.5"
                style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <Star size={13} className="fill-[#FF8C42] text-[#FF8C42]" />
                4.9/5 Rated
              </span>
              <span
                className="flex items-center gap-1.5 text-xs sm:text-sm text-white/85 rounded-full px-3 py-1.5"
                style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <Clock size={13} />
                7 Day Delivery
              </span>
              <span
                className="flex items-center gap-1.5 text-xs sm:text-sm text-white/85 rounded-full px-3 py-1.5"
                style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <MapPin size={13} />
                199+ CA Cities
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-normal mb-4 md:mb-6 animate-blur-fade-up text-white"
              style={{
                fontSize: 'clamp(36px, 6.5vw, 84px)',
                letterSpacing: '-0.04em',
                lineHeight: 1.04,
                animationDelay: '400ms',
                textShadow: '0 2px 40px rgba(0,0,0,0.9), 0 1px 12px rgba(0,0,0,0.7)',
              }}
            >
              Rank on Google.<br />
              <span className="shimmer-text">Get Cited by AI.</span>
            </h1>

            {/* Description */}
            <p
              className="text-base sm:text-lg md:text-xl text-white/75 mb-6 md:mb-12 max-w-2xl animate-blur-fade-up"
              style={{
                animationDelay: '500ms',
                textShadow: '0 1px 20px rgba(0,0,0,0.8)',
              }}
            >
              Custom AI-built websites for California law firms — live in 7 days, dominating Google, and cited by ChatGPT &amp; Perplexity.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#contact"
                className="flex items-center gap-2 bg-white text-black rounded-full font-medium px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-gray-100 transition-colors animate-blur-fade-up cursor-pointer text-[15px]"
                style={{ animationDelay: '600ms' }}
              >
                <Play size={17} className="fill-black shrink-0" />
                Start Your Site
              </a>
              <a
                href="#results"
                className="rounded-full font-medium liquid-glass px-6 sm:px-8 py-2.5 sm:py-3 animate-blur-fade-up text-[15px] cursor-pointer"
                style={{ animationDelay: '700ms' }}
              >
                See Results
              </a>
            </div>
          </div>

          {/* Right — Navigation arrows */}
          <div className="flex gap-3 shrink-0">
            <a
              href="#services"
              className="liquid-glass rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center gap-2 text-sm font-medium animate-blur-fade-up cursor-pointer"
              style={{ animationDelay: '800ms' }}
            >
              <ChevronLeft size={17} />
              <span className="hidden sm:block">Services</span>
            </a>
            <a
              href="#contact"
              className="liquid-glass rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center gap-2 text-sm font-medium animate-blur-fade-up cursor-pointer"
              style={{ animationDelay: '900ms' }}
            >
              <span className="hidden sm:block">Get Started</span>
              <ChevronRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
