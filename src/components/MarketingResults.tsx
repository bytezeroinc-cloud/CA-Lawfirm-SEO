import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { TrendingUp, DollarSign, Target, Star } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    value: 4.8,
    suffix: 'x',
    label: 'Average ROAS',
    desc: 'Return on ad spend across Google + Bing + Meta',
    accentColor: '#C084FC',
    headerBg: 'linear-gradient(135deg, #1E0830 0%, #0E0418 55%, #080508 100%)',
  },
  {
    icon: DollarSign,
    value: 42,
    suffix: '%',
    label: 'Lower Cost Per Lead',
    desc: 'vs. agencies running Google Ads alone',
    accentColor: '#34D399',
    headerBg: 'linear-gradient(135deg, #082018 0%, #041008 55%, #050508 100%)',
  },
  {
    icon: Target,
    value: 312,
    suffix: '+',
    label: 'Qualified Leads / Month',
    desc: 'Average across Growth & Dominate plan clients',
    accentColor: '#FF8C42',
    headerBg: 'linear-gradient(135deg, #3D1800 0%, #1E0B00 55%, #080506 100%)',
  },
  {
    icon: Star,
    value: 28,
    suffix: 'k+',
    label: 'Avg Monthly Revenue Added',
    desc: 'Tracked from paid campaigns to signed retainers',
    accentColor: '#FBBF24',
    headerBg: 'linear-gradient(135deg, #201400 0%, #100A00 55%, #050508 100%)',
  },
]

/* Monthly lead volume data */
const dataPoints = [
  { month: 'M1', leads: 28, spend: 3200 },
  { month: 'M2', leads: 45, spend: 3200 },
  { month: 'M3', leads: 72, spend: 4000 },
  { month: 'M4', leads: 98, spend: 4500 },
  { month: 'M5', leads: 134, spend: 4500 },
  { month: 'M6', leads: 178, spend: 5000 },
  { month: 'M7', leads: 224, spend: 5500 },
  { month: 'M8', leads: 268, spend: 5500 },
  { month: 'M9', leads: 312, spend: 6000 },
]

function getPath(points: typeof dataPoints, width: number, height: number, key: 'leads' | 'spend') {
  const padding = { top: 20, right: 20, bottom: 36, left: 44 }
  const chartW = width - padding.left - padding.right
  const chartH = height - padding.top - padding.bottom
  const vals = points.map(p => p[key])
  const maxVal = Math.max(...vals) * 1.15
  const coords = points.map((p, i) => ({
    x: padding.left + (i / (points.length - 1)) * chartW,
    y: padding.top + chartH - (p[key] / maxVal) * chartH,
  }))
  let path = `M ${coords[0].x} ${coords[0].y}`
  for (let i = 1; i < coords.length; i++) {
    const cp1x = coords[i - 1].x + (coords[i].x - coords[i - 1].x) * 0.4
    const cp2x = coords[i].x - (coords[i].x - coords[i - 1].x) * 0.4
    path += ` C ${cp1x} ${coords[i - 1].y}, ${cp2x} ${coords[i].y}, ${coords[i].x} ${coords[i].y}`
  }
  const areaPath = path + ` L ${coords[coords.length - 1].x} ${padding.top + chartH} L ${coords[0].x} ${padding.top + chartH} Z`
  return { linePath: path, areaPath, coords, padding, chartH, maxVal }
}

function CountUp({ end, suffix, inView, color }: { end: number; suffix: string; inView: boolean; color: string }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const dur = 2000
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setVal(Number((eased * end).toFixed(end % 1 !== 0 ? 1 : 0)))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, end])

  return (
    <span
      className="font-display font-black leading-none"
      style={{ fontSize: 'clamp(36px, 5vw, 56px)', color, filter: `drop-shadow(0 0 24px ${color}70)`, letterSpacing: '-0.03em' }}
    >
      {val}{suffix}
    </span>
  )
}

export default function MarketingResults() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const chartW = 560
  const chartH = 220
  const { linePath, areaPath, coords, padding, chartH: ch, maxVal } = getPath(dataPoints, chartW, chartH, 'leads')
  const yTicks = [0, 100, 200, 300]

  return (
    <section id="results" ref={ref} className="relative py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(192,132,252,0.04) 0%, transparent 65%)' }}
      />

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC]" />
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">Paid Media Results</span>
          </span>
          <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
            What Clients Actually
            <br />
            <span style={{ color: '#C084FC', filter: 'drop-shadow(0 0 20px rgba(192,132,252,0.5))' }}>See on Their Dashboard</span>
          </h2>
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 28, scale: 0.97, filter: 'blur(8px)' }}
                animate={inView ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-default overflow-hidden flex flex-col rounded-2xl"
                style={{
                  background: 'rgba(16,16,22,0.96)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
              >
                <div
                  className="relative overflow-hidden flex items-end justify-between px-5 pt-4 pb-3"
                  style={{ height: 100, background: stat.headerBg }}
                >
                  <div className="absolute inset-0 opacity-[0.10]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`, backgroundSize: '28px 28px' }} />
                  <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: `linear-gradient(to right, transparent, ${stat.accentColor}70, transparent)` }} />
                  <div className="relative z-10">
                    <CountUp end={stat.value} suffix={stat.suffix} inView={inView} color={stat.accentColor} />
                  </div>
                  <div className="relative z-10 w-9 h-9 rounded-xl flex items-center justify-center mb-0.5"
                    style={{ background: `${stat.accentColor}18`, border: `1.5px solid ${stat.accentColor}50`, boxShadow: `0 0 14px ${stat.accentColor}30` }}>
                    <Icon size={16} style={{ color: stat.accentColor }} strokeWidth={1.8} />
                  </div>
                </div>
                <div className="px-5 py-4 flex flex-col gap-0.5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="text-[13px] font-semibold text-white/85">{stat.label}</span>
                  <span className="text-[11px] text-white/35">{stat.desc}</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Chart — qualified leads over 9 months */}
        <motion.div
          initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl overflow-hidden"
          style={{ background: 'rgba(16,16,22,0.96)', border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 8px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)' }}
        >
          <div className="h-[1px]" style={{ background: 'linear-gradient(to right, transparent, rgba(192,132,252,0.55), transparent)' }} />

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-0">
            <div className="p-7 flex flex-col justify-between" style={{ borderRight: '1px solid rgba(255,255,255,0.06)' }}>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest mb-2 block" style={{ color: '#C084FC' }}>
                  Qualified Leads
                </span>
                <h3 className="font-display font-bold text-white text-[22px] leading-tight mb-3">
                  More Cases, Same Budget
                </h3>
                <p className="text-[13px] text-white/45 leading-relaxed">
                  These aren't raw form fills — they're pre-qualified leads scored by practice area and case value before they reach your intake team. Cost per qualified lead drops as AI optimization compounds month over month.
                </p>
              </div>

              <div className="flex gap-6 mt-6 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <DollarSign size={12} className="text-white/30" strokeWidth={2} />
                    <span className="text-[10px] text-white/30 uppercase tracking-wider font-medium">Avg CPL</span>
                  </div>
                  <p className="font-display font-bold text-white text-[26px] leading-none" style={{ letterSpacing: '-0.02em' }}>$68</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Target size={12} style={{ color: '#C084FC' }} strokeWidth={2} />
                    <span className="text-[10px] text-white/30 uppercase tracking-wider font-medium">Close Rate</span>
                  </div>
                  <p className="font-display font-bold text-[26px] leading-none" style={{ color: '#C084FC', letterSpacing: '-0.02em', filter: 'drop-shadow(0 0 10px rgba(192,132,252,0.55))' }}>
                    28%
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 flex items-center">
              <svg viewBox={`0 0 ${chartW} ${chartH}`} className="w-full h-auto">
                <defs>
                  <linearGradient id="mktAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C084FC" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#C084FC" stopOpacity="0.01" />
                  </linearGradient>
                  <linearGradient id="mktLineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#C084FC" />
                    <stop offset="100%" stopColor="#E0AAFF" />
                  </linearGradient>
                </defs>
                {yTicks.map(tick => {
                  const y = padding.top + ch - (tick / maxVal) * ch
                  return (
                    <g key={tick}>
                      <line x1={padding.left} y1={y} x2={chartW - padding.right} y2={y} stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                      <text x={padding.left - 6} y={y + 4} textAnchor="end" fill="rgba(255,255,255,0.2)" fontSize="10" fontFamily="Inter">{tick}</text>
                    </g>
                  )
                })}
                {dataPoints.map((p, i) => {
                  const x = padding.left + (i / (dataPoints.length - 1)) * (chartW - padding.left - padding.right)
                  return <text key={p.month} x={x} y={chartH - 6} textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="10" fontFamily="Inter">{p.month}</text>
                })}
                <path d={areaPath} fill="url(#mktAreaGrad)" />
                <path d={linePath} fill="none" stroke="url(#mktLineGrad)" strokeWidth="2.5" strokeLinecap="round"
                  style={{ strokeDasharray: 1000, animation: inView ? 'chart-draw 2s ease forwards' : 'none' }} />
                {coords.map((c, i) => (
                  <g key={i}>
                    <circle cx={c.x} cy={c.y} r="4.5" fill="#050508" stroke="#C084FC" strokeWidth="2" />
                    <circle cx={c.x} cy={c.y} r="2" fill="#C084FC" />
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
