import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Cpu,
  Search,
  Globe,
  Gauge,
  ShieldCheck,
  BarChart3,
  ArrowUpRight,
} from 'lucide-react'

const services = [
  {
    icon: Cpu,
    title: 'AI-Designed in 7 Days',
    desc: 'Machine learning analyzes 500+ top-performing law firm sites to generate layouts proven to convert — delivered in a week, not months.',
    metric: '7 Days',
    metricLabel: 'Delivery',
    gradient: 'from-[#FF8C42]/20 to-orange-500/15',
    iconColor: 'text-[#FF8C42]',
    warm: true,
  },
  {
    icon: Search,
    title: 'Built to Rank on Google',
    desc: 'Every page, schema markup, and URL structure is engineered for Google dominance in your practice area and California city.',
    metric: '#1-3',
    metricLabel: 'Google Rankings',
    gradient: 'from-violet-500/20 to-purple-500/15',
    iconColor: 'text-[#8B83FF]',
    warm: false,
  },
  {
    icon: Globe,
    title: 'AI Search (GEO) Optimized',
    desc: 'Speakable schema, structured FAQ, E-E-A-T signals, and citability scoring so ChatGPT, Perplexity, and Google AI cite your firm.',
    metric: '5+',
    metricLabel: 'AI Platforms',
    gradient: 'from-[#FF8C42]/15 to-[#FFB07A]/10',
    iconColor: 'text-[#FFB07A]',
    warm: true,
  },
  {
    icon: Gauge,
    title: 'Mobile-First & Fast',
    desc: 'Core Web Vitals optimized from day one — 95+ PageSpeed score. Your site loads faster than 99% of law firm websites in California.',
    metric: '95+',
    metricLabel: 'PageSpeed',
    gradient: 'from-amber-500/20 to-orange-500/15',
    iconColor: 'text-[#FF8C42]',
    warm: true,
  },
  {
    icon: ShieldCheck,
    title: 'CA State Bar Compliant',
    desc: 'Compliant with California State Bar Rules 7.1-7.5 — proper disclaimers, testimonial disclosures, and specialization language baked in.',
    metric: '100%',
    metricLabel: 'Compliance',
    gradient: 'from-emerald-500/20 to-green-500/15',
    iconColor: 'text-emerald-400',
    warm: false,
  },
  {
    icon: BarChart3,
    title: 'Integrated Lead Capture',
    desc: 'AI-optimized conversion funnels, call tracking, form submissions, and real-time dashboards showing lead sources and ROI.',
    metric: '3.2x',
    metricLabel: 'More Leads',
    gradient: 'from-[#8B83FF]/15 to-[#FF8C42]/10',
    iconColor: 'text-[#8B83FF]',
    warm: false,
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" ref={ref} className="relative py-28 px-6 overflow-hidden">
      {/* Warm bg orb */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,140,66,0.03) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(108,99,255,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">Every AI Website Includes</span>
          </span>
          <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Everything Your Firm Needs
            <br />
            <span className="glow-text-warm">To Dominate Online</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, idx) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.06 * idx }}
                className={`rounded-2xl p-7 group cursor-default ${svc.warm ? 'glass-card-warm' : 'glass-card'}`}
              >
                {/* Hover gradient bg */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${svc.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl ${svc.warm ? 'glass-warm' : 'glass'} flex items-center justify-center mb-5 transition-shadow`}
                    style={{
                      boxShadow: svc.warm ? '0 0 0 rgba(255,140,66,0)' : undefined,
                    }}
                  >
                    <Icon size={20} className={svc.iconColor} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-white text-[17px] mb-2.5">{svc.title}</h3>

                  {/* Description */}
                  <p className="text-[13px] text-white/40 leading-relaxed mb-5">{svc.desc}</p>

                  {/* Metric */}
                  <div className="flex items-end justify-between">
                    <div>
                      <span className={`text-2xl font-display font-bold ${svc.warm ? 'glow-text-warm' : 'glow-text'}`}>{svc.metric}</span>
                      <span className="text-[11px] text-white/30 ml-2 uppercase tracking-wider">{svc.metricLabel}</span>
                    </div>
                    <ArrowUpRight size={16} className={`text-white/15 group-hover:${svc.warm ? 'text-[#FF8C42]' : 'text-[#6C63FF]'} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all`} />
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
