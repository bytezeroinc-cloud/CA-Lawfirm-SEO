import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, Target, Code2, TrendingUp } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'SEO Audit & Analysis',
    desc: 'We audit your current site\'s technical health, content gaps, backlink profile, and competitor landscape — giving you a clear picture of where you stand and what\'s holding you back.',
    detail: 'Full competitive gap analysis',
    accentColor: '#FF8C42',
    headerBg: 'linear-gradient(135deg, #3D1800 0%, #1E0B00 55%, #080506 100%)',
    delay: 0,
  },
  {
    num: '02',
    icon: Target,
    title: 'Strategy & Keyword Research',
    desc: 'Our AI maps 10,000+ legal search queries to your practice areas, California cities, and competitive landscape — identifying the highest-ROI keywords your firm can realistically win.',
    detail: 'AI-powered keyword mapping',
    accentColor: '#60A5FA',
    headerBg: 'linear-gradient(135deg, #081828 0%, #040C16 55%, #050508 100%)',
    delay: 80,
  },
  {
    num: '03',
    icon: Code2,
    title: 'On-Page & Technical Optimization',
    desc: 'Schema markup, Core Web Vitals fixes, content architecture, internal linking, GEO signals, and State Bar compliant messaging — all implemented to the highest technical standard.',
    detail: '95+ PageSpeed guarantee',
    accentColor: '#34D399',
    headerBg: 'linear-gradient(135deg, #082018 0%, #041008 55%, #050508 100%)',
    delay: 160,
  },
  {
    num: '04',
    icon: TrendingUp,
    title: 'Content, Links & Growth',
    desc: 'Monthly practice-area content, authority link building, AI search monitoring, and real-time reporting — keeping you climbing rankings every month with a clear ROI dashboard.',
    detail: 'Ongoing growth partnership',
    accentColor: '#C084FC',
    headerBg: 'linear-gradient(135deg, #1E0830 0%, #100418 55%, #050508 100%)',
    delay: 240,
  },
]

export default function SeoProcess() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" ref={ref} className="relative py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/world-light.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.40 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(160deg, rgba(4,6,18,0.82) 0%, rgba(6,10,22,0.76) 50%, rgba(4,6,16,0.88) 100%)',
            backdropFilter: 'blur(1px)',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(0,0,0,0.60) 100%)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">How We Grow Your Rankings</span>
          </span>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            From Audit to
            <br />
            <span style={{ color: '#60A5FA', filter: 'drop-shadow(0 0 20px rgba(96,165,250,0.5))' }}>Page One Domination</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 28, scale: 0.97, filter: 'blur(8px)' }}
                animate={inView ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.7, delay: step.delay / 1000, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-default overflow-hidden flex flex-col rounded-2xl"
                style={{
                  background: 'rgba(16,16,22,0.96)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
              >
                {/* Header area */}
                <div
                  className="relative overflow-hidden flex flex-col justify-between p-5"
                  style={{ height: 140, background: step.headerBg }}
                >
                  <div className="absolute inset-0 opacity-[0.10]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`, backgroundSize: '28px 28px' }} />
                  <div className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none" style={{ background: `linear-gradient(to right, transparent, ${step.accentColor}70, transparent)` }} />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none" style={{ background: `radial-gradient(ellipse at center bottom, ${step.accentColor}25 0%, transparent 70%)` }} />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-display font-black text-[48px] leading-none select-none" style={{ color: step.accentColor, opacity: 0.18, letterSpacing: '-0.04em' }}>
                      {step.num}
                    </span>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${step.accentColor}18`, border: `1.5px solid ${step.accentColor}50`, boxShadow: `0 0 20px ${step.accentColor}30` }}>
                      <Icon size={20} style={{ color: step.accentColor, filter: `drop-shadow(0 0 6px ${step.accentColor})` }} strokeWidth={1.8} />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest" style={{ color: step.accentColor, textShadow: `0 0 10px ${step.accentColor}60` }}>
                      Step {step.num}
                    </span>
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: `linear-gradient(135deg, transparent 30%, ${step.accentColor}10 100%)` }} />
                </div>

                {/* Content area */}
                <div className="p-5 flex flex-col flex-1" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <h3 className="font-display font-bold text-white leading-tight mb-3" style={{ fontSize: '16px' }}>
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-white/60 leading-relaxed flex-1">{step.desc}</p>
                  <div className="mt-4 pt-4 flex items-center gap-2" style={{ borderTop: `1px solid ${step.accentColor}18` }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: step.accentColor, boxShadow: `0 0 6px ${step.accentColor}` }} />
                    <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: step.accentColor }}>
                      {step.detail}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
