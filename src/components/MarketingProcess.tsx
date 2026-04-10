import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, Megaphone, Zap, TrendingUp } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Marketing Audit & Strategy',
    desc: 'We audit your current marketing stack — Google Ads, SEO, social, and email — to find wasted spend, missed opportunities, and the fastest path to more qualified cases.',
    detail: 'Full channel audit & ROI analysis',
    accentColor: '#C084FC',
    headerBg: 'linear-gradient(135deg, #1E0830 0%, #0E0418 55%, #080508 100%)',
    delay: 0,
  },
  {
    num: '02',
    icon: Megaphone,
    title: 'Campaign Build & Launch',
    desc: 'We build your AI-powered campaigns across every relevant channel — Google Ads, Meta, SEO, and email — with tracking from day one so you know exactly what\'s working.',
    detail: 'Full-stack campaign setup',
    accentColor: '#FF8C42',
    headerBg: 'linear-gradient(135deg, #3D1800 0%, #1E0B00 55%, #080506 100%)',
    delay: 80,
  },
  {
    num: '03',
    icon: Zap,
    title: 'AI Optimization & Automation',
    desc: 'Smart bidding, predictive audience targeting, automated email nurture, and continuous A/B testing — our AI stack optimizes every campaign in real time to lower your cost per lead.',
    detail: 'Continuous AI-driven optimization',
    accentColor: '#34D399',
    headerBg: 'linear-gradient(135deg, #082018 0%, #041008 55%, #050508 100%)',
    delay: 160,
  },
  {
    num: '04',
    icon: TrendingUp,
    title: 'Scale & Report',
    desc: 'Monthly performance reviews with clear revenue attribution — cost per lead, case value, and ROAS — so you can scale what works and cut what doesn\'t with confidence.',
    detail: 'Revenue-attributed reporting',
    accentColor: '#60A5FA',
    headerBg: 'linear-gradient(135deg, #081828 0%, #040C16 55%, #050508 100%)',
    delay: 240,
  },
]

export default function MarketingProcess() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" ref={ref} className="relative py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/world-light.jpg" alt="" className="w-full h-full object-cover object-center" style={{ opacity: 0.40 }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(4,6,18,0.82) 0%, rgba(6,10,22,0.76) 50%, rgba(4,6,16,0.88) 100%)', backdropFilter: 'blur(1px)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(0,0,0,0.60) 100%)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC]" />
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">How It Works</span>
          </span>
          <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
            From Audit to
            <br />
            <span style={{ color: '#C084FC', filter: 'drop-shadow(0 0 20px rgba(192,132,252,0.5))' }}>Revenue Growth</span>
          </h2>
        </motion.div>

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
                <div className="relative overflow-hidden flex flex-col justify-between p-5" style={{ height: 140, background: step.headerBg }}>
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
