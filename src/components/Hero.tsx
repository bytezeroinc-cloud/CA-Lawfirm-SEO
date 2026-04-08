import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Clock, Gauge, MapPin, TrendingUp } from 'lucide-react'

const cycleWords = ['Websites', 'Rankings', 'Clients', 'Revenue']

const heroStats = [
  { icon: Clock, value: '7 Days', label: 'Delivery' },
  { icon: Gauge, value: '95+', label: 'PageSpeed' },
  { icon: MapPin, value: '199+', label: 'CA Cities' },
  { icon: TrendingUp, value: '300%', label: 'Growth' },
]

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [wordIdx, setWordIdx] = useState(0)

  useEffect(() => {
    const iv = setInterval(() => setWordIdx((i) => (i + 1) % cycleWords.length), 2400)
    return () => clearInterval(iv)
  }, [])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.play().catch(() => {})
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        src="/blackhole.mp4"
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.5 }}
      />

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/60 via-transparent to-[#050508]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/40 via-transparent to-[#050508]/40" />

      {/* Progressive blur at bottom */}
      <div className="progressive-blur">
        <div /><div /><div /><div /><div /><div />
      </div>

      {/* Orange Halo Glow — Left */}
      <div
        className="absolute top-[20%] left-[-5%] w-[400px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,140,66,0.08) 0%, rgba(255,140,66,0.03) 40%, transparent 70%)',
          animation: 'warm-pulse 6s ease-in-out infinite',
          filter: 'blur(40px)',
        }}
      />

      {/* Orange Halo Glow — Right */}
      <div
        className="absolute top-[15%] right-[-5%] w-[400px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,140,66,0.07) 0%, rgba(255,140,66,0.02) 40%, transparent 70%)',
          animation: 'warm-pulse 8s ease-in-out infinite',
          animationDelay: '2s',
          filter: 'blur(40px)',
        }}
      />

      {/* Orange Falling Particles — Left Halo */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`left-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${2 + Math.random() * 15}%`,
            top: '-5%',
            width: `${1.5 + Math.random() * 2.5}px`,
            height: `${1.5 + Math.random() * 2.5}px`,
            background: i % 3 === 0
              ? 'rgba(255, 140, 66, 0.8)'
              : i % 3 === 1
              ? 'rgba(255, 176, 122, 0.6)'
              : 'rgba(255, 200, 160, 0.4)',
            boxShadow: i % 2 === 0 ? '0 0 6px rgba(255, 140, 66, 0.4)' : 'none',
            animation: `fall-down ${6 + Math.random() * 8}s linear infinite`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        />
      ))}

      {/* Orange Falling Particles — Right Halo */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`right-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            right: `${2 + Math.random() * 15}%`,
            top: '-5%',
            width: `${1.5 + Math.random() * 2.5}px`,
            height: `${1.5 + Math.random() * 2.5}px`,
            background: i % 3 === 0
              ? 'rgba(255, 140, 66, 0.8)'
              : i % 3 === 1
              ? 'rgba(255, 176, 122, 0.6)'
              : 'rgba(255, 200, 160, 0.4)',
            boxShadow: i % 2 === 0 ? '0 0 6px rgba(255, 140, 66, 0.4)' : 'none',
            animation: `fall-down-reverse ${7 + Math.random() * 7}s linear infinite`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        />
      ))}

      {/* Subtle purple accent particles — center */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={`center-${i}`}
          className="absolute w-[2px] h-[2px] rounded-full pointer-events-none"
          style={{
            left: `${25 + Math.random() * 50}%`,
            bottom: '-5%',
            background: 'rgba(108,99,255,0.4)',
            animation: `float-up ${10 + Math.random() * 8}s linear infinite`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center" style={{ paddingTop: 'clamp(120px, 15vw, 180px)' }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8"
        >
          <Sparkles size={14} className="text-[#FF8C42]" />
          <span className="text-[12px] font-medium text-white/70 tracking-wider uppercase">
            AI-Powered Law Firm Websites
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="font-display font-bold leading-[1.05] tracking-tight mb-6"
          style={{ fontSize: 'clamp(36px, 6vw, 76px)' }}
        >
          <span className="text-white">AI Website Development{' '}</span>
          <br className="hidden sm:block" />
          <span className="text-white/90">For </span>
          <span className="relative inline-block" style={{ minWidth: '260px' }}>
            <span
              key={wordIdx}
              className="glow-text-warm inline-block"
              style={{ animation: 'role-fade-in 0.5s ease forwards' }}
            >
              {cycleWords[wordIdx]}
            </span>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontSize: 'clamp(15px, 1.8vw, 18px)' }}
        >
          Custom-designed, AI-optimized websites that dominate Google rankings,
          get cited by ChatGPT &amp; AI search, and convert visitors into paying clients.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 rounded-2xl text-[15px] font-semibold flex items-center gap-3 text-white overflow-hidden transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(255,140,66,0.2) 0%, rgba(108,99,255,0.15) 100%)',
              border: '1px solid rgba(255,140,66,0.3)',
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#FF8C42]/20 to-[#6C63FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              Start Your Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </a>
          <a
            href="#process"
            className="glass px-8 py-4 rounded-2xl text-[15px] font-medium text-white/70 hover:text-white flex items-center gap-3 transition-colors duration-200 cursor-pointer"
          >
            <Play size={14} className="text-[#FF8C42]" />
            See How It Works
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-14 inline-flex items-center gap-0 glass rounded-2xl overflow-hidden"
        >
          {heroStats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className={`flex items-center gap-3 px-6 py-4 ${
                  i < heroStats.length - 1 ? 'border-r border-white/[0.06]' : ''
                }`}
              >
                <Icon size={16} className="text-[#FF8C42] shrink-0" strokeWidth={1.8} />
                <div className="text-left">
                  <p className="text-[15px] font-display font-bold text-white leading-none">{stat.value}</p>
                  <p className="text-[10px] text-white/30 uppercase tracking-wider mt-0.5">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-medium">Trusted by California law firms across all practice areas</p>
          <div className="flex items-center gap-6">
            {['Personal Injury', 'Family Law', 'Criminal Defense', 'Immigration', 'DUI Defense'].map((area) => (
              <span key={area} className="text-[12px] text-white/20 font-medium hidden sm:block">{area}</span>
            ))}
            <span className="text-[12px] text-white/20 font-medium sm:hidden">6+ Practice Areas</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/20">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#FF8C42]/30 to-transparent" style={{ animation: 'scroll-down 2s ease infinite' }} />
      </motion.div>
    </section>
  )
}
