import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import VideoBackground from './VideoBackground'

// Bento purple/space video as the atmospheric backdrop
const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4'

const STATS = [
  { value: 7,   suffix: '',    unit: 'Days',  label: 'Average Delivery Time',   color: '#FF8C42', glow: 'rgba(255,140,66,0.35)'  },
  { value: 95,  suffix: '+',   unit: '',      label: 'Target PageSpeed Score',  color: '#60A5FA', glow: 'rgba(96,165,250,0.35)'  },
  { value: 199, suffix: '+',   unit: '',      label: 'California Cities Served', color: '#34D399', glow: 'rgba(52,211,153,0.35)'  },
  { value: 300, suffix: '%',   unit: '',      label: 'Average Client Growth',   color: '#C084FC', glow: 'rgba(192,132,252,0.35)' },
]

// Eased count-up: fast start → arrives precisely at target
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export default function StatsTickerSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [counts, setCounts] = useState(STATS.map(() => 0))
  const animRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!inView) return
    const DURATION = 1600   // total ms
    const TICK     = 25     // ms per frame — visibly rapid ticker
    const STEPS    = Math.floor(DURATION / TICK)
    let step = 0

    animRef.current = setInterval(() => {
      step++
      const t = Math.min(step / STEPS, 1)
      const eased = easeOutCubic(t)
      setCounts(STATS.map(s => Math.round(s.value * eased)))
      if (step >= STEPS) {
        clearInterval(animRef.current!)
        setCounts(STATS.map(s => s.value)) // lock final values
      }
    }, TICK)

    return () => { if (animRef.current) clearInterval(animRef.current) }
  }, [inView])

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">

      {/* ── Purple / space video background ── */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <VideoBackground src={BG_VIDEO} />
      </div>

      {/* ── Dark overlay — lets video breathe ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1, background: 'rgba(5,5,8,0.58)' }}
      />

      {/* ── Colorful ambient orbs ── */}
      {STATS.map((s, i) => (
        <div
          key={i}
          className="absolute pointer-events-none rounded-full"
          style={{
            width: 320,
            height: 320,
            left: `${8 + i * 23}%`,
            top: '30%',
            background: `radial-gradient(circle, ${s.glow} 0%, transparent 70%)`,
            zIndex: 1,
            transform: 'translateY(-50%)',
            filter: 'blur(20px)',
          }}
        />
      ))}

      {/* ── Glassmorphism stats panel ── */}
      <div className="relative z-10 px-6 sm:px-10 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.10)',
              boxShadow: '0 8px 48px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)',
            }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className="relative px-8 py-10 md:py-14 flex flex-col gap-2"
                  style={{
                    borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                    borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  }}
                >
                  {/* Subtle top accent line */}
                  <div
                    className="absolute top-0 left-8 right-8 h-[2px] rounded-full opacity-60"
                    style={{ background: `linear-gradient(to right, ${stat.color}, transparent)` }}
                  />

                  {/* Number */}
                  <div
                    className="font-thin leading-none tracking-tight"
                    style={{
                      fontSize: 'clamp(48px, 5vw, 72px)',
                      fontWeight: 100,
                      color: stat.color,
                      textShadow: `0 0 40px ${stat.glow}`,
                      fontFamily: "'Brockmann', sans-serif",
                    }}
                  >
                    {counts[i]}
                    <span style={{ fontSize: '0.55em', fontWeight: 100 }}>
                      {stat.suffix}{stat.unit && ` ${stat.unit}`}
                    </span>
                  </div>

                  {/* Label */}
                  <p className="text-white/45 text-sm leading-snug" style={{ fontFamily: "'Brockmann', sans-serif" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
