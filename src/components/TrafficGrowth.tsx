import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { DollarSign, Target } from 'lucide-react'

const dataPoints = [
  { month: 'M1', value: 12 },
  { month: 'M2', value: 18 },
  { month: 'M3', value: 35 },
  { month: 'M4', value: 48 },
  { month: 'M5', value: 62 },
  { month: 'M6', value: 78 },
  { month: 'M7', value: 105 },
  { month: 'M8', value: 128 },
  { month: 'M9', value: 148 },
]

function getPath(points: typeof dataPoints, width: number, height: number) {
  const padding = { top: 20, right: 20, bottom: 40, left: 50 }
  const chartW = width - padding.left - padding.right
  const chartH = height - padding.top - padding.bottom
  const maxVal = Math.max(...points.map(p => p.value)) * 1.1

  const coords = points.map((p, i) => ({
    x: padding.left + (i / (points.length - 1)) * chartW,
    y: padding.top + chartH - (p.value / maxVal) * chartH,
  }))

  let path = `M ${coords[0].x} ${coords[0].y}`
  for (let i = 1; i < coords.length; i++) {
    const cp1x = coords[i - 1].x + (coords[i].x - coords[i - 1].x) * 0.4
    const cp1y = coords[i - 1].y
    const cp2x = coords[i].x - (coords[i].x - coords[i - 1].x) * 0.4
    const cp2y = coords[i].y
    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${coords[i].x} ${coords[i].y}`
  }

  // Area fill path
  const areaPath = path + ` L ${coords[coords.length - 1].x} ${padding.top + chartH} L ${coords[0].x} ${padding.top + chartH} Z`

  return { linePath: path, areaPath, coords, padding, chartH, maxVal }
}

export default function TrafficGrowth() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const width = 560
  const height = 280
  const { linePath, areaPath, coords, padding, chartH, maxVal } = getPath(dataPoints, width, height)

  const yTicks = [0, 50, 100, 150]

  return (
    <section ref={ref} className="relative py-20 px-6 overflow-hidden section-glow-warm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card-warm rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left — Text */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display font-bold text-white text-[28px] md:text-[34px] leading-tight mb-4"
              >
                Qualified Traffic Growth
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[14px] text-white/40 leading-relaxed mb-8"
              >
                By aligning technical infrastructure with search intent,
                we consistently scale high-value organic traffic. This
                isn't vanity traffic; these are users actively searching
                for representation.
              </motion.p>

              {/* KPI row */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex gap-8"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign size={14} className="text-white/30" strokeWidth={1.8} />
                    <span className="text-[11px] text-white/30 uppercase tracking-wider font-medium">Avg CPA</span>
                  </div>
                  <p className="font-display font-bold text-white text-[28px]">$340</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Target size={14} className="text-[#FF8C42]" strokeWidth={1.8} />
                    <span className="text-[11px] text-white/30 uppercase tracking-wider font-medium">Conversion</span>
                  </div>
                  <p className="font-display font-bold text-[#FF8C42] text-[28px]">12.4%</p>
                </div>
              </motion.div>
            </div>

            {/* Right — Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
                {/* Y-axis grid lines */}
                {yTicks.map(tick => {
                  const y = padding.top + chartH - (tick / (maxVal)) * chartH
                  return (
                    <g key={tick}>
                      <line
                        x1={padding.left}
                        y1={y}
                        x2={width - padding.right}
                        y2={y}
                        stroke="rgba(255,255,255,0.05)"
                        strokeDasharray="4 4"
                      />
                      <text x={padding.left - 8} y={y + 4} textAnchor="end" fill="rgba(255,255,255,0.25)" fontSize="11" fontFamily="Inter">
                        {tick}
                      </text>
                    </g>
                  )
                })}

                {/* X-axis labels */}
                {dataPoints.map((p, i) => {
                  const x = padding.left + (i / (dataPoints.length - 1)) * (width - padding.left - padding.right)
                  return (
                    <text
                      key={p.month}
                      x={x}
                      y={height - 10}
                      textAnchor="middle"
                      fill="rgba(255,255,255,0.25)"
                      fontSize="11"
                      fontFamily="Inter"
                    >
                      {p.month}
                    </text>
                  )
                })}

                {/* Gradient definition */}
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF8C42" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#FF8C42" stopOpacity="0.01" />
                  </linearGradient>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FF8C42" />
                    <stop offset="100%" stopColor="#FFB07A" />
                  </linearGradient>
                </defs>

                {/* Area fill */}
                <path d={areaPath} fill="url(#areaGrad)" />

                {/* Line */}
                <path
                  d={linePath}
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    strokeDasharray: 1000,
                    animation: inView ? 'chart-draw 2s ease forwards' : 'none',
                  }}
                />

                {/* Data points */}
                {coords.map((c, i) => (
                  <g key={i}>
                    <circle cx={c.x} cy={c.y} r="5" fill="#050508" stroke="#FF8C42" strokeWidth="2" />
                    <circle cx={c.x} cy={c.y} r="2" fill="#FF8C42" />
                  </g>
                ))}
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
