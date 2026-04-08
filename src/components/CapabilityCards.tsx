import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Search, Palette, Cpu, BarChart3 } from 'lucide-react'

const capabilities = [
  {
    category: 'STRATEGY',
    icon: Search,
    title: 'Research & SEO Architecture',
    desc: 'We dig deep into your market, competitor landscape, and search intent to build an SEO foundation that drives qualified traffic from day one.',
    gradient: 'from-[#FF8C42]/20 via-[#FF6B1A]/10 to-transparent',
    borderColor: 'rgba(255, 140, 66, 0.15)',
  },
  {
    category: 'CRAFT',
    icon: Palette,
    title: 'Design & Brand Experience',
    desc: 'From concept to launch, we obsess over every detail to deliver interfaces that communicate authority, build trust, and convert visitors into clients.',
    gradient: 'from-[#8B83FF]/20 via-[#6C63FF]/10 to-transparent',
    borderColor: 'rgba(108, 99, 255, 0.15)',
  },
  {
    category: 'TECHNOLOGY',
    icon: Cpu,
    title: 'AI-Powered Development',
    desc: 'Machine learning analyzes 500+ top law firm sites to generate optimized layouts, content structures, and conversion patterns specific to your practice area.',
    gradient: 'from-[#FF8C42]/15 via-[#8B83FF]/10 to-transparent',
    borderColor: 'rgba(255, 140, 66, 0.12)',
  },
  {
    category: 'GROWTH',
    icon: BarChart3,
    title: 'Performance & Analytics',
    desc: 'Real-time dashboards showing lead sources, call tracking, form submissions, and ROI — continuously optimized with A/B testing and AI-driven insights.',
    gradient: 'from-[#FFB07A]/15 via-[#FF8C42]/10 to-transparent',
    borderColor: 'rgba(255, 176, 122, 0.12)',
  },
]

export default function CapabilityCards() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 px-6 overflow-hidden">
      {/* Warm ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,140,66,0.03) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">Our Approach</span>
          </span>
          <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Built Different,
            <br />
            <span className="glow-text-warm">By Design</span>
          </h2>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="group relative rounded-2xl overflow-hidden cursor-default"
                style={{ border: `1px solid ${cap.borderColor}` }}
              >
                {/* Gradient header zone (replacing image) */}
                <div className={`relative h-[200px] bg-gradient-to-br ${cap.gradient} overflow-hidden`}>
                  {/* Decorative grid */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
                      `,
                      backgroundSize: '40px 40px',
                    }}
                  />
                  {/* Large icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon
                      size={64}
                      className="text-white/[0.06] group-hover:text-white/[0.1] transition-colors duration-500"
                      strokeWidth={0.8}
                    />
                  </div>
                  {/* Floating orbs */}
                  <div
                    className="absolute top-[30%] right-[20%] w-[120px] h-[120px] rounded-full"
                    style={{
                      background: idx % 2 === 0
                        ? 'radial-gradient(circle, rgba(255,140,66,0.1) 0%, transparent 70%)'
                        : 'radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)',
                      animation: 'warm-pulse 5s ease-in-out infinite',
                      animationDelay: `${idx * 0.5}s`,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-7 bg-[rgba(10,10,15,0.8)] backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-medium text-white/30 uppercase tracking-widest">{cap.category}</span>
                    <div className="w-9 h-9 rounded-full glass flex items-center justify-center group-hover:bg-white/[0.06] transition-colors">
                      <ArrowUpRight size={14} className="text-white/30 group-hover:text-[#FF8C42] transition-colors" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-white text-[20px] mb-2.5">{cap.title}</h3>
                  <p className="text-[13px] text-white/35 leading-relaxed">{cap.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
