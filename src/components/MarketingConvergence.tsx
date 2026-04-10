import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Smartphone, Globe, Search, BarChart2, PieChart,
  Scale, TrendingUp, Zap, Target, Layers, Activity, ArrowRight,
} from 'lucide-react'

/* ── Node definitions ───────────────────────────────── */
interface NodeDef {
  offX: number
  offY: number
  w: number
  h: number
  dur: number
  initDelay: number
  content: React.ReactNode
}

const N = (
  offX: number, offY: number,
  content: React.ReactNode,
  dur: number, initDelay: number,
  w = 42, h = 38,
): NodeDef => ({ offX, offY, w, h, dur, initDelay, content })

const NODES: NodeDef[] = [
  N(-310,  -140, <BarChart2  size={17} strokeWidth={1.4}/>, 3.2, 0.0),
  N( 280,  -160, <Target     size={17} strokeWidth={1.4}/>, 2.8, 0.6),
  N(-340,    60, <Activity   size={17} strokeWidth={1.4}/>, 3.5, 1.2),
  N( 330,   100, <TrendingUp size={17} strokeWidth={1.4}/>, 3.0, 1.8),
  N(-170,  -210, <Search     size={17} strokeWidth={1.4}/>, 2.6, 0.3),
  N( 190,  -195, <Layers     size={17} strokeWidth={1.4}/>, 3.3, 1.0),
  N(-220,   190, <PieChart   size={17} strokeWidth={1.4}/>, 2.9, 1.5),
  N( 230,   185, <Smartphone size={17} strokeWidth={1.4}/>, 3.1, 0.8),
  N(  30,   220, <Globe      size={17} strokeWidth={1.4}/>, 2.7, 2.1),
  N( -30,  -225, <Zap        size={17} strokeWidth={1.4}/>, 3.4, 0.4),
  N(-295,  -200,
    <span style={{display:'flex',alignItems:'center',gap:5,fontSize:10.5,fontWeight:700,
      letterSpacing:'0.05em',color:'rgba(255,255,255,0.75)',whiteSpace:'nowrap'}}>
      <span style={{width:6,height:6,borderRadius:'50%',background:'rgba(255,255,255,0.65)',
        flexShrink:0,display:'inline-block'}}/>
      99% ROAS
    </span>,
    3.0, 1.6, 96, 34),
]

/* ── Component ──────────────────────────────────────── */
export default function MarketingConvergence() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="overflow-hidden"
      style={{ background: '#03030a', paddingTop: 96, paddingBottom: 80 }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-10 md:px-16">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest mb-6"
            style={{
              background: 'rgba(192,132,252,0.10)',
              border: '1px solid rgba(192,132,252,0.25)',
              color: '#C084FC',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#C084FC', boxShadow: '0 0 6px #C084FC' }} />
            AI Convergence
          </span>
          <h2
            className="text-white font-thin mb-4"
            style={{
              fontFamily: "'Brockmann', sans-serif",
              fontSize: 'clamp(28px, 3.5vw, 52px)',
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              fontWeight: 100,
            }}
          >
            One AI Core.<br />
            <span style={{ color: '#C084FC' }}>Every Channel Unified.</span>
          </h2>
          <p
            className="text-white/40 max-w-xl mx-auto leading-relaxed"
            style={{ fontSize: 'clamp(13px, 1.4vw, 16px)' }}
          >
            Every channel — Google Ads, Meta, Bing, Reddit, SEO, analytics —
            converging into a single AI-powered engine. One law firm marketing agency, every channel unified.
          </p>
        </motion.div>

      </div>

      {/* ── Full-width orbital canvas ── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: 'clamp(440px, 45vw, 620px)' }}
      >

        {/* Aura ring — pulsates with the core */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: '50%', top: '50%',
            marginLeft: -120, marginTop: -120,
            width: 240, height: 240,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
          animate={inView ? { scale: [1, 1.06, 0.97, 1.04, 1], opacity: [0.5, 0.9, 0.4, 0.7, 0.5] } : {}}
          transition={{ delay: 1.2, duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Static thin orbit circles */}
        {[180, 260, 340].map((r) => (
          <div
            key={r}
            className="absolute pointer-events-none"
            style={{
              left: '50%', top: '50%',
              marginLeft: -r, marginTop: -r,
              width: r * 2, height: r * 2,
              borderRadius: '50%',
              border: `1px solid rgba(255,255,255,${r <= 180 ? 0.09 : r <= 260 ? 0.07 : 0.05})`,
            }}
          />
        ))}

        {/* Expanding pulse rings */}
        {[1.0, 2.2, 3.4].map((d) => (
          <motion.div
            key={d}
            className="absolute pointer-events-none"
            style={{
              left: '50%', top: '50%',
              marginLeft: -49, marginTop: -49,
              width: 98, height: 98,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
            animate={inView ? { scale: [1, 3.5], opacity: [0.25, 0] } : {}}
            transition={{ delay: d, duration: 3.2, repeat: Infinity, ease: 'easeOut' }}
          />
        ))}

        {/* Thick dotted rotating ring — same left:50%/top:50% system as nodes */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: '50%', top: '50%',
            marginLeft: -70, marginTop: -70,
            width: 140, height: 140,
            borderRadius: '50%',
            border: '2.5px dotted rgba(255,255,255,0.22)',
          }}
          animate={inView ? { rotate: 360 } : {}}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />

        {/* Core — same left:50%/top:50% as nodes so they share exact center */}
        <div
          className="absolute pointer-events-none"
          style={{ left: '50%', top: '50%', marginLeft: -49, marginTop: -49 }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              style={{
                width: 98, height: 98,
                borderRadius: '50%',
                background: '#ffffff',
                boxShadow: '0 0 50px rgba(255,255,255,0.80), 0 0 110px rgba(255,255,255,0.42), 0 0 180px rgba(192,132,252,0.25)',
                display: 'flex', flexDirection: 'column' as const,
                alignItems: 'center', justifyContent: 'center', gap: 3,
              }}
              animate={inView ? {
                scale: [1, 1.07, 0.97, 1.04, 1],
                boxShadow: [
                  '0 0 50px rgba(255,255,255,0.80), 0 0 110px rgba(255,255,255,0.42), 0 0 180px rgba(192,132,252,0.25)',
                  '0 0 75px rgba(255,255,255,1.0), 0 0 160px rgba(255,255,255,0.65), 0 0 250px rgba(192,132,252,0.45)',
                  '0 0 35px rgba(255,255,255,0.62), 0 0 80px rgba(255,255,255,0.28), 0 0 130px rgba(192,132,252,0.16)',
                  '0 0 65px rgba(255,255,255,0.90), 0 0 130px rgba(255,255,255,0.52), 0 0 200px rgba(192,132,252,0.35)',
                  '0 0 50px rgba(255,255,255,0.80), 0 0 110px rgba(255,255,255,0.42), 0 0 180px rgba(192,132,252,0.25)',
                ],
              } : {}}
              transition={{ delay: 1.2, duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Scale size={24} color="#1a0830" strokeWidth={1.6} />
              <span style={{ fontSize: '8px', fontWeight: 800, color: '#1a0830', letterSpacing: '0.14em' }}>
                AI CORE
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Drifting nodes ── */}
        {NODES.map((node, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{ left: '50%', top: '50%' }}
          >
            <motion.div
              className="flex items-center justify-center"
              style={{
                marginLeft: -node.w / 2,
                marginTop: -node.h / 2,
                width: node.w,
                height: node.h,
                borderRadius: 10,
                background: 'rgba(255,255,255,0.042)',
                border: '1px solid rgba(255,255,255,0.10)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                color: 'rgba(255,255,255,0.70)',
                paddingInline: node.w > 50 ? 12 : 0,
              }}
              initial={{ x: node.offX, y: node.offY, opacity: 0, scale: 1 }}
              animate={inView ? {
                x: [node.offX, node.offX * 0.52, node.offX * 0.12, 0],
                y: [node.offY, node.offY * 0.52, node.offY * 0.12, 0],
                scale: [1, 0.80, 0.38, 0.04],
                opacity: [1, 0.90, 0.55, 0],
              } : {}}
              transition={{
                duration: node.dur,
                times: [0, 0.42, 0.78, 1],
                ease: 'easeIn',
                repeat: Infinity,
                repeatType: 'loop' as const,
                delay: node.initDelay,
              }}
            >
              {node.content}
            </motion.div>
          </div>
        ))}

      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-10 px-5"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="text-white/35 text-[13px] mb-5">
          One AI engine. Every channel working together. See what's possible for your firm.
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
          Start With a Free Audit
          <ArrowRight size={15} />
        </a>
      </motion.div>

    </section>
  )
}
