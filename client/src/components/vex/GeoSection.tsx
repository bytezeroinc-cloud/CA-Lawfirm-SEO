import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Heart, Code2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/* ── Types ─────────────────────────────────────────────────── */
interface Logo {
  name: string
  bg: string
  size: number
  iconUrl?: string
  LucideIcon?: LucideIcon
  iconColor?: string
  iconFill?: string
}

/* ── Platform data ─────────────────────────────────────────── */
const outerLogos: Logo[] = [
  { name: 'ChatGPT',    bg: '#10A37F', size: 52, iconUrl: 'https://cdn.simpleicons.org/openai/ffffff' },
  { name: 'Perplexity', bg: '#6C2BD9', size: 50, iconUrl: 'https://cdn.simpleicons.org/perplexity/ffffff' },
  { name: 'Gemini',     bg: '#4285F4', size: 50, iconUrl: 'https://cdn.simpleicons.org/googlegemini/ffffff' },
  { name: 'Lovable',    bg: '#FF5E8A', size: 50, LucideIcon: Heart,  iconColor: '#ffffff', iconFill: 'white' },
  { name: 'Figma',      bg: '#F24E1E', size: 50, iconUrl: 'https://cdn.simpleicons.org/figma/ffffff' },
]

const innerLogos: Logo[] = [
  { name: 'Claude',    bg: '#CC7A00', size: 46, iconUrl: 'https://cdn.simpleicons.org/anthropic/ffffff' },
  { name: 'Google AI', bg: '#4285F4', size: 44, iconUrl: 'https://cdn.simpleicons.org/google/ffffff' },
  { name: 'Replit',    bg: '#F26207', size: 44, iconUrl: 'https://cdn.simpleicons.org/replit/ffffff' },
  { name: 'Cursor',    bg: '#0F1929', size: 44, LucideIcon: Code2, iconColor: '#00C2FF' },
]

const platformBadges = [
  { name: 'Google AI',  bg: '#4285F4' },
  { name: 'ChatGPT',    bg: '#10A37F' },
  { name: 'Perplexity', bg: '#6C2BD9' },
  { name: 'Claude',     bg: '#CC7A00' },
  { name: 'Gemini',     bg: '#8B77FF' },
]

const optimizeList = [
  'Speakable schema markup for voice & AI search',
  'Structured FAQ content AI platforms cite',
  'E-E-A-T signals for authoritativeness',
  'Named entity optimization for your firm',
  'llms.txt configuration for AI crawlers',
  'Citability scoring built into every page',
]

/* ── Planet badge — circular logo ─────────────────────────── */
function LogoBadge({ logo }: { logo: Logo }) {
  const LIcon = logo.LucideIcon
  const iconSize = Math.round(logo.size * 0.50)
  return (
    <div
      title={logo.name}
      style={{
        width: logo.size,
        height: logo.size,
        borderRadius: '50%',
        background: logo.bg,
        border: '2.5px solid rgba(255,255,255,0.22)',
        boxShadow: `0 0 0 3px rgba(0,0,0,0.45), 0 6px 22px ${logo.bg}85`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        userSelect: 'none',
        flexShrink: 0,
      }}
    >
      {logo.iconUrl && (
        <img
          src={logo.iconUrl}
          alt={logo.name}
          draggable={false}
          style={{ width: iconSize, height: iconSize, objectFit: 'contain', display: 'block' }}
        />
      )}
      {LIcon && (
        <LIcon
          size={iconSize}
          color={logo.iconColor ?? '#fff'}
          strokeWidth={1.6}
          fill={logo.iconFill ?? 'none'}
        />
      )}
    </div>
  )
}

/* ── Main ──────────────────────────────────────────────────── */
export default function GeoSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const OUTER_R = 185
  const INNER_R = 108

  return (
    <section ref={ref} className="relative py-24 px-4 sm:px-6 md:px-12 overflow-hidden">

      {/* ── Orbit world background ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/world-orbit.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.60 }}
        />
        {/* Dark left panel so right-side text stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(105deg, rgba(4,4,10,0.30) 0%, rgba(4,4,10,0.50) 42%, rgba(2,2,8,0.88) 62%, rgba(2,2,8,0.95) 100%)',
          }}
        />
        {/* Top + bottom fade */}
        <div className="absolute inset-x-0 top-0 h-32" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.70), transparent)' }} />
        <div className="absolute inset-x-0 bottom-0 h-32" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.70), transparent)' }} />
      </div>

      {/* ── Keyframe animations ── */}
      <style>{`
        @keyframes geo-spin-cw  { to { transform: rotate(360deg);  } }
        @keyframes geo-spin-ccw { to { transform: rotate(-360deg); } }

        /* Double-beat heartbeat — scale + glow */
        @keyframes geo-heartbeat {
          0%, 60%, 100% {
            transform: scale(1);
            box-shadow:
              0 0 0  6px rgba(255,140,66,0.18),
              0 0 0 14px rgba(255,140,66,0.08),
              0 0 30px rgba(255,140,66,0.22);
          }
          14% {
            transform: scale(1.24);
            box-shadow:
              0 0 0 14px rgba(255,140,66,0.50),
              0 0 0 28px rgba(255,140,66,0.20),
              0 0 55px rgba(255,140,66,0.42);
          }
          28% {
            transform: scale(1.04);
            box-shadow:
              0 0 0  6px rgba(255,140,66,0.18),
              0 0 0 14px rgba(255,140,66,0.08),
              0 0 30px rgba(255,140,66,0.22);
          }
          42% {
            transform: scale(1.14);
            box-shadow:
              0 0 0 10px rgba(255,140,66,0.34),
              0 0 0 20px rgba(255,140,66,0.14),
              0 0 40px rgba(255,140,66,0.30);
          }
        }

        /* Pulse ring expands outward from centre */
        @keyframes geo-pulse {
          0%   { transform: translate(-50%, -50%) scale(1);   opacity: 0.62; }
          65%  { opacity: 0.20; }
          100% { transform: translate(-50%, -50%) scale(8.0); opacity: 0; }
        }

        .geo-outer       { animation: geo-spin-cw   24s linear infinite; }
        .geo-outer-logo  { animation: geo-spin-ccw  24s linear infinite; }
        .geo-inner       { animation: geo-spin-ccw  16s linear infinite; }
        .geo-inner-logo  { animation: geo-spin-cw   16s linear infinite; }
        .geo-center      { animation: geo-heartbeat  2.4s ease-in-out infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Solar System ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center"
          >
            <div
              className="relative"
              style={{ width: OUTER_R * 2 + 80, height: OUTER_R * 2 + 80 }}
            >

              {/* Heartbeat pulse rings — 4 waves, staggered */}
              {([0, 1.04, 2.08, 3.12] as const).map((delay, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: 68,
                    height: 68,
                    borderRadius: '50%',
                    border: '1.5px solid rgba(255,140,66,0.55)',
                    animation: `geo-pulse 4.16s ease-out ${delay}s infinite`,
                    pointerEvents: 'none',
                  }}
                />
              ))}

              {/* Outer orbit ring */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: 0,
                  border: '1px solid rgba(255,140,66,0.22)',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.015) 0%, transparent 55%)',
                }}
              />

              {/* Inner orbit ring */}
              <div
                className="absolute rounded-full"
                style={{
                  top:  OUTER_R + 40 - INNER_R,
                  left: OUTER_R + 40 - INNER_R,
                  width:  INNER_R * 2,
                  height: INNER_R * 2,
                  border: '1px solid rgba(255,140,66,0.28)',
                }}
              />

              {/* Outer orbit — clockwise */}
              <div
                className="geo-outer absolute"
                style={{ inset: 0, transformOrigin: 'center center' }}
              >
                {outerLogos.map((logo, i) => {
                  const angle = (i / outerLogos.length) * 360
                  return (
                    <div
                      key={logo.name}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${angle}deg) translateX(${OUTER_R}px) translate(-50%, -50%)`,
                        transformOrigin: '0 0',
                      }}
                    >
                      <div className="geo-outer-logo">
                        <LogoBadge logo={logo} />
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Inner orbit — counter-clockwise */}
              <div
                className="geo-inner absolute"
                style={{
                  top:  OUTER_R + 40 - INNER_R,
                  left: OUTER_R + 40 - INNER_R,
                  width:  INNER_R * 2,
                  height: INNER_R * 2,
                  transformOrigin: 'center center',
                }}
              >
                {innerLogos.map((logo, i) => {
                  const angle = (i / innerLogos.length) * 360
                  return (
                    <div
                      key={logo.name}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${angle}deg) translateX(${INNER_R}px) translate(-50%, -50%)`,
                        transformOrigin: '0 0',
                      }}
                    >
                      <div className="geo-inner-logo">
                        <LogoBadge logo={logo} />
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Centre — AI "Sun" with double-beat heartbeat */}
              <div
                className="absolute"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }}
              >
                <div
                  className="geo-center"
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FF8C42 0%, #FF5500 100%)',
                    border: '2.5px solid rgba(255,255,255,0.30)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ fontFamily: 'system-ui', fontWeight: 900, fontSize: 20, color: '#fff', letterSpacing: '-0.04em' }}>
                    AI
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Content ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Tag */}
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
              <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">Generative Engine Optimization</span>
            </span>

            {/* Heading */}
            <h2
              className="font-display font-bold text-white leading-tight mb-3"
              style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
            >
              Get Cited by
              <br />
              <span className="glow-text-warm">AI Platforms</span>
            </h2>

            <p className="text-[14px] text-white/45 leading-relaxed mb-8">
              78% of legal queries now trigger an AI Overview before any website link.
              Every site we build is engineered to be cited — not skipped.
            </p>

            {/* Optimize checklist */}
            <div className="mb-8">
              <p className="text-[11px] font-extrabold uppercase tracking-widest mb-4" style={{ color: '#FF8C42' }}>
                What We Optimize
              </p>
              <div className="flex flex-col gap-3">
                {optimizeList.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(255,140,66,0.15)', border: '1px solid rgba(255,140,66,0.35)' }}
                    >
                      <Check size={11} style={{ color: '#FF8C42' }} strokeWidth={2.5} />
                    </div>
                    <span className="text-[13px] text-white/70 leading-snug">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Platform badges */}
            <div className="flex flex-wrap gap-2">
              {platformBadges.map((p) => (
                <span
                  key={p.name}
                  className="px-3 py-1.5 rounded-full text-[11px] font-semibold text-white"
                  style={{
                    background: `${p.bg}22`,
                    border: `1px solid ${p.bg}55`,
                    boxShadow: `0 0 12px ${p.bg}20`,
                  }}
                >
                  {p.name}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
