import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'

/* ─── Brand SVG Icons ───────────────────────────────────── */

function GoogleIcon({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

function MetaIcon({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient id="meta-g1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0099FF"/>
          <stop offset="100%" stopColor="#A033FF"/>
        </linearGradient>
        <linearGradient id="meta-g2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF5C5C"/>
          <stop offset="100%" stopColor="#FF9A3C"/>
        </linearGradient>
      </defs>
      {/* Simplified Meta infinity */}
      <ellipse cx="13" cy="20" rx="7" ry="11" stroke="url(#meta-g1)" strokeWidth="3.5" fill="none" transform="rotate(-15 13 20)"/>
      <ellipse cx="27" cy="20" rx="7" ry="11" stroke="url(#meta-g2)" strokeWidth="3.5" fill="none" transform="rotate(15 27 20)"/>
    </svg>
  )
}

function MicrosoftIcon({ size = 52 }: { size?: number }) {
  const s = size * 0.44
  const gap = size * 0.06
  const o = (size - 2 * s - gap) / 2
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <rect x={o} y={o} width={s} height={s} fill="#F25022" rx="2"/>
      <rect x={o + s + gap} y={o} width={s} height={s} fill="#7FBA00" rx="2"/>
      <rect x={o} y={o + s + gap} width={s} height={s} fill="#00A4EF" rx="2"/>
      <rect x={o + s + gap} y={o + s + gap} width={s} height={s} fill="#FF8C42" rx="2"/>
    </svg>
  )
}

/* ─── Secondary Platform Icons ─────────────────────────── */

function GoogleAdsIcon({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="1.5" y="12" width="5" height="10" rx="1.5" fill="#FF8C42"/>
      <rect x="9.5" y="6"  width="5" height="16" rx="1.5" fill="#4285F4"/>
      <rect x="17.5" y="2" width="5" height="20" rx="1.5" fill="#34A853"/>
    </svg>
  )
}

function InstagramIcon({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="ig-grad" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FF9A5C"/>
          <stop offset="25%"  stopColor="#F56040"/>
          <stop offset="60%"  stopColor="#C13584"/>
          <stop offset="100%" stopColor="#833AB4"/>
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="url(#ig-grad)" strokeWidth="2"/>
      <circle cx="12" cy="12" r="4.5" stroke="url(#ig-grad)" strokeWidth="2"/>
      <circle cx="17.5" cy="6.5" r="1.4" fill="url(#ig-grad)"/>
    </svg>
  )
}

function LinkedInIcon({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#0A66C2">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

/* ─── Brand-colored Tool Logo SVGs (20px) ──────────────── */
function LogoGA4() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF8C42" strokeWidth="1.8" strokeLinecap="round">
      <rect x="2" y="13" width="4" height="8" rx="1"/>
      <rect x="10" y="7" width="4" height="14" rx="1"/>
      <rect x="18" y="3" width="4" height="18" rx="1"/>
    </svg>
  )
}
function LogoCallRail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00C65E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}
function LogoLooker() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4285F4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      <path d="M8 11h6M11 8v6"/>
    </svg>
  )
}
function LogoWindsor() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 7 18 12 9 17 18 21 6"/>
    </svg>
  )
}
function LogoN8n() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="4" cy="12" r="2.5"/>
      <circle cx="20" cy="12" r="2.5"/>
      <circle cx="12" cy="5" r="2.5"/>
      <line x1="6.5" y1="12" x2="17.5" y2="12"/>
      <line x1="12" y1="7.5" x2="6" y2="10.5"/>
      <line x1="12" y1="7.5" x2="18" y2="10.5"/>
    </svg>
  )
}
function LogoHubSpot() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF7A59" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="15" cy="9" r="4"/>
      <circle cx="15" cy="9" r="1.5" fill="#FF7A59" stroke="none"/>
      <line x1="15" y1="13" x2="15" y2="17"/>
      <circle cx="15" cy="19" r="2"/>
      <line x1="11" y1="9" x2="4" y2="9"/>
      <line x1="4" y1="6" x2="4" y2="12"/>
    </svg>
  )
}
function LogoOpenAI() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#10A37F">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.677l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.843-3.386 2.02-1.164a.076.076 0 0 1 .071 0l4.83 2.786a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.663zm2.010-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
    </svg>
  )
}
function LogoZapier() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF4A00" strokeWidth="1.8" strokeLinecap="round">
      <line x1="12" y1="2" x2="12" y2="22"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <line x1="5.64" y1="5.64" x2="18.36" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="5.64" y2="18.36"/>
      <circle cx="12" cy="12" r="4"/>
    </svg>
  )
}
function LogoSemrush() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF642E" strokeWidth="1.8" strokeLinecap="round">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      <path d="M8 15l2-4 2 3 2-5 2 6"/>
    </svg>
  )
}
function LogoAhrefs() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F07D26" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 20L12 4l9 16"/>
      <path d="M7 14h10"/>
    </svg>
  )
}
function LogoChatGPT() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#10A37F">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.677l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.843-3.386 2.02-1.164a.076.076 0 0 1 .071 0l4.83 2.786a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.663zm2.010-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
    </svg>
  )
}
function LogoSurferSEO() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6C63FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12c2-3 4-4 6-2s4 1 6-2 4-3 6-1"/>
      <path d="M2 17c2-3 4-4 6-2s4 1 6-2 4-3 6-1"/>
    </svg>
  )
}

const TOOL_LOGOS: Record<string, React.FC> = {
  'GA4': LogoGA4,
  'CallRail': LogoCallRail,
  'Looker': LogoLooker,
  'Windsor.ai': LogoWindsor,
  'n8n': LogoN8n,
  'HubSpot': LogoHubSpot,
  'OpenAI': LogoOpenAI,
  'Zapier': LogoZapier,
  'Semrush': LogoSemrush,
  'Ahrefs': LogoAhrefs,
  'ChatGPT': LogoChatGPT,
  'SurferSEO': LogoSurferSEO,
}

/* ─── Tool Badge ────────────────────────────────────────── */
function ToolBadge({ label }: { label: string; color: string; bg: string }) {
  const Logo = TOOL_LOGOS[label]
  return (
    <span
      className="inline-flex items-center justify-center rounded-full"
      style={{
        width: 34, height: 34,
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.10)',
        color: 'rgba(255,255,255,0.55)',
      }}
      title={label}
    >
      {Logo ? <Logo /> : <span className="text-[9px] font-bold">{label[0]}</span>}
    </span>
  )
}

/* ─── Section A: Paid Platform Cards ───────────────────── */

const PAID_CARDS = [
  {
    id: 'google',
    Icon: GoogleIcon,
    SecondaryIcon: GoogleAdsIcon,
    accentColor: '#4285F4',
    headerGlow: 'rgba(66,133,244,0.18)',
    metric: '4.8×',
    metricLabel: 'Average ROAS',
    title: 'Google Search & Display',
    sub: 'Highest-intent legal traffic — reach clients searching right now.',
    tags: ['Search Ads', 'Local Service Ads', 'Display', 'YouTube'],
    features: [
      'Exact-match legal keyword targeting',
      'Smart bidding on case revenue, not clicks',
      'Google Screened LSA badge setup',
      'Weekly negative keyword audits',
    ],
    delay: 0,
  },
  {
    id: 'meta',
    Icon: MetaIcon,
    SecondaryIcon: InstagramIcon,
    accentColor: '#0866FF',
    headerGlow: 'rgba(8,102,255,0.18)',
    metric: '3.6×',
    metricLabel: 'Average ROAS',
    title: 'Meta Facebook & Instagram',
    sub: 'Reach potential clients before they search — build pipeline from awareness.',
    tags: ['Facebook Ads', 'Instagram', 'Messenger', 'Reels'],
    features: [
      'Lookalike audiences from existing clients',
      'Lead form campaigns — no landing page needed',
      'Video & carousel ad creative',
      'Retargeting pixel strategy across platforms',
    ],
    delay: 120,
  },
  {
    id: 'microsoft',
    Icon: MicrosoftIcon,
    SecondaryIcon: LinkedInIcon,
    accentColor: '#0078D4',
    headerGlow: 'rgba(0,120,212,0.18)',
    metric: '$34',
    metricLabel: 'Avg Cost Per Lead',
    title: 'Microsoft Bing & LinkedIn',
    sub: '35% lower CPC than Google — Bing users skew older and higher income.',
    tags: ['Bing Search', 'LinkedIn Ads', 'Microsoft Audience', 'MSAN'],
    features: [
      'Shared audience sync from Google Ads',
      'LinkedIn title & company targeting',
      'Exclusive B2B audience data for business law',
      'Direct import & mirror from Google campaigns',
    ],
    delay: 240,
  },
]

export function MarketingPaidSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-20 px-5 sm:px-10 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(66,133,244,0.10)', border: '1px solid rgba(66,133,244,0.25)', color: '#4285F4' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
            Paid Advertising Management
          </span>
          <h2
            className="font-thin text-white mb-4"
            style={{ fontSize: 'clamp(28px, 3.5vw, 52px)', letterSpacing: '-0.025em', lineHeight: 1.1, fontWeight: 100 }}
          >
            Dominate Every Platform<br />
            <span style={{ color: '#4285F4' }}>Your Clients Use</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto" style={{ fontSize: 'clamp(14px, 1.5vw, 17px)', lineHeight: 1.65 }}>
            As a law firm marketing agency, we manage Google, Meta, and Microsoft with AI bidding, predictive targeting, and full revenue attribution. Every dollar tracked to the case.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PAID_CARDS.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
              transition={{ duration: 0.7, delay: card.delay / 1000, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(12,14,24,0.88)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
                transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = `0 20px 60px ${card.accentColor}30, 0 8px 24px rgba(0,0,0,0.6)`
                el.style.borderColor = `${card.accentColor}40`
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = '0 8px 40px rgba(0,0,0,0.5)'
                el.style.borderColor = 'rgba(255,255,255,0.08)'
              }}
            >
              {/* Top glow strip */}
              <div className="h-0.5 w-full" style={{ background: card.accentColor }} />

              {/* Dual-logo header */}
              <div
                className="flex items-center justify-center gap-3 py-6"
                style={{ background: `radial-gradient(ellipse at center top, ${card.headerGlow} 0%, transparent 70%)` }}
              >
                {[card.Icon, card.SecondaryIcon].map((Logo, li) => (
                  <div
                    key={li}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.10)',
                      boxShadow: `0 0 22px ${card.accentColor}18`,
                    }}
                  >
                    <Logo size={34} />
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="px-6 pb-7 flex flex-col gap-4 flex-1">
                <div>
                  <h3 className="text-white font-semibold text-base leading-snug mb-1.5">{card.title}</h3>
                  <p className="text-white/45 text-[13px] leading-relaxed">{card.sub}</p>
                </div>

                {/* Platform tags */}
                <div className="flex flex-wrap gap-1.5">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                      style={{ background: `${card.accentColor}14`, color: card.accentColor, border: `1px solid ${card.accentColor}25` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />

                {/* Features */}
                <ul className="space-y-2.5 flex-1">
                  {card.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div
                        className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: `${card.accentColor}18`, border: `1px solid ${card.accentColor}40` }}
                      >
                        <Check size={9} style={{ color: card.accentColor }} strokeWidth={3} />
                      </div>
                      <span className="text-[12px] text-white/55 leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="mt-2 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[12px] font-semibold transition-all group-hover:opacity-80"
                  style={{ background: `${card.accentColor}15`, color: card.accentColor, border: `1px solid ${card.accentColor}30` }}
                >
                  View Strategy
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ─── Section B: AI Intelligence Cards ─────────────────── */

const AI_CARDS = [
  {
    id: 'content',
    accentColor: '#FF8C42',
    bgGlow: 'rgba(255,140,66,0.08)',
    eyebrow: 'AI Content Engine',
    title: 'Research-Backed Content That Ranks',
    desc: 'Every blog post and landing page starts with data from Semrush and Ahrefs — then ChatGPT drafts, humans refine, and Google rewards.',
    metric: '12×',
    metricSub: 'content velocity',
    tools: [
      { label: 'Semrush', color: '#FF642E', bg: '#FF642E18' },
      { label: 'Ahrefs', color: '#F07D26', bg: '#F07D2618' },
      { label: 'ChatGPT', color: '#10A37F', bg: '#10A37F18' },
      { label: 'SurferSEO', color: '#6C63FF', bg: '#6C63FF18' },
    ],
    highlights: [
      '200+ monthly keyword gap analyses per client',
      'Blog posts, city landing pages & practice area hubs',
      'E-E-A-T optimization with bar-reviewed content',
      'Programmatic internal link architecture',
    ],
    delay: 0,
  },
  {
    id: 'automation',
    accentColor: '#34D399',
    bgGlow: 'rgba(52,211,153,0.08)',
    eyebrow: 'CRM & Email Automation',
    title: 'Leads Nurtured Automatically to Clients',
    desc: 'n8n workflows connect your ads, CRM, and email — so no lead falls through. Every inquiry is scored, sequenced, and tracked.',
    metric: '68%',
    metricSub: 'avg email open rate',
    tools: [
      { label: 'n8n', color: '#FF6B6B', bg: '#FF6B6B18' },
      { label: 'HubSpot', color: '#FF7A59', bg: '#FF7A5918' },
      { label: 'OpenAI', color: '#10A37F', bg: '#10A37F18' },
      { label: 'Zapier', color: '#FF4A00', bg: '#FF4A0018' },
    ],
    highlights: [
      'AI lead scoring before intake sees the inquiry',
      '5-email automated sequences per practice area',
      'CRM sync — Google Ads → HubSpot → follow-up',
      '90-day warm-lead re-engagement campaigns',
    ],
    delay: 140,
  },
  {
    id: 'analytics',
    accentColor: '#60A5FA',
    bgGlow: 'rgba(96,165,250,0.08)',
    eyebrow: 'Full Attribution Stack',
    title: 'Know Exactly Which Ad Signed the Case',
    desc: 'GA4, CallRail, and Looker Studio tie every click to every call to every signed client — so budget decisions are made on revenue, not impressions.',
    metric: '-42%',
    metricSub: 'avg cost per lead',
    tools: [
      { label: 'GA4', color: '#FF8C42', bg: '#FF8C4218' },
      { label: 'CallRail', color: '#00C65E', bg: '#00C65E18' },
      { label: 'Looker', color: '#4285F4', bg: '#4285F418' },
      { label: 'Windsor.ai', color: '#A855F7', bg: '#A855F718' },
    ],
    highlights: [
      'Keyword-level call tracking via CallRail',
      'GA4 revenue attribution — click to signed client',
      'Monthly Looker Studio dashboard per campaign',
      'Multi-touch attribution across all channels',
    ],
    delay: 280,
  },
]

export function MarketingAISection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-20 px-5 sm:px-10 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(192,132,252,0.10)', border: '1px solid rgba(192,132,252,0.25)', color: '#C084FC' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC]" />
            AI Intelligence Stack
          </span>
          <h2
            className="font-thin text-white mb-4"
            style={{ fontSize: 'clamp(28px, 3.5vw, 52px)', letterSpacing: '-0.025em', lineHeight: 1.1, fontWeight: 100 }}
          >
            The Engine<br />
            <span style={{ color: '#C084FC' }}>Behind Every Campaign</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto" style={{ fontSize: 'clamp(14px, 1.5vw, 17px)', lineHeight: 1.65 }}>
            Three AI-powered systems running 24/7 — our marketing agency for lawyers researches keywords, nurtures leads, and closes the attribution loop from click to signed client.
          </p>
        </motion.div>

        {/* Cards — stacked with horizontal layout */}
        <div className="flex flex-col gap-5">
          {AI_CARDS.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
              transition={{ duration: 0.7, delay: card.delay / 1000, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(10,10,18,0.90)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(20px)',
                transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = `0 20px 60px ${card.accentColor}25, 0 8px 24px rgba(0,0,0,0.5)`
                el.style.borderColor = `${card.accentColor}35`
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = 'none'
                el.style.borderColor = 'rgba(255,255,255,0.07)'
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-0">

                {/* Left — metric + tools */}
                <div
                  className="flex flex-col justify-between gap-5 p-7 md:border-r"
                  style={{
                    background: card.bgGlow,
                    borderColor: 'rgba(255,255,255,0.06)',
                  }}
                >
                  {/* Eyebrow + metric */}
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: card.accentColor }}>
                      {card.eyebrow}
                    </div>
                    <div
                      className="font-thin leading-none mb-1"
                      style={{ fontSize: '56px', color: card.accentColor, letterSpacing: '-0.04em', fontFamily: "'Brockmann', sans-serif", fontWeight: 100 }}
                    >
                      {card.metric}
                    </div>
                    <div className="text-[11px] text-white/35 uppercase tracking-widest">{card.metricSub}</div>
                  </div>

                  {/* Tool badges */}
                  <div>
                    <div className="text-[10px] text-white/25 uppercase tracking-widest mb-2.5">Powered by</div>
                    <div className="flex flex-wrap gap-2">
                      {card.tools.map((t) => (
                        <ToolBadge key={t.label} label={t.label} color={t.color} bg={t.bg} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right — content */}
                <div className="p-7 flex flex-col justify-between gap-5">
                  <div>
                    <h3
                      className="text-white font-semibold mb-2 leading-snug"
                      style={{ fontSize: 'clamp(16px, 1.8vw, 22px)' }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-white/45 text-[13px] leading-relaxed">{card.desc}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {card.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div
                          className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                          style={{ background: `${card.accentColor}18`, border: `1px solid ${card.accentColor}40` }}
                        >
                          <Check size={9} style={{ color: card.accentColor }} strokeWidth={3} />
                        </div>
                        <span className="text-[12px] text-white/55 leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-white/35 text-[13px] mb-5">
            Ready to see how AI marketing turns clicks into signed cases?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded-xl px-7 py-3.5 text-[13px] font-semibold transition-all hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, #C084FC, #9333EA)',
              color: '#fff',
              boxShadow: '0 0 28px rgba(192,132,252,0.35)',
            }}
          >
            Get Your Free Marketing Audit
            <ArrowUpRight size={15} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

/* ─── Default export (legacy compat) ───────────────────── */
export default function MarketingBentoGrid() {
  return (
    <>
      <MarketingPaidSection />
      <MarketingAISection />
    </>
  )
}
