import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import LeadForm from './LeadForm'

const testimonials = [
  {
    quote: "Our website went from invisible to the top 3 results for key personal injury terms in just 4 months. The AI-driven approach is a game-changer.",
    name: 'Sarah Chen',
    title: 'Managing Partner, Chen & Associates',
    area: 'Personal Injury',
  },
  {
    quote: "They didn't just build a website — they built a client acquisition machine. We've 3x'd our consultation requests since launch.",
    name: 'Michael Torres',
    title: 'Founding Attorney, Torres Law Group',
    area: 'Immigration Law',
  },
  {
    quote: "The speed was unbelievable — launched in 7 days and we were already ranking for our target keywords within the first month.",
    name: 'Jessica Park',
    title: 'Partner, Park & Williams LLP',
    area: 'Family Law',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const iv = setInterval(() => setActiveTestimonial(i => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(iv)
  }, [])

  return (
    <section id="contact" ref={ref} className="relative py-24 px-6 overflow-hidden">

      {/* ── Frosted globe background ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/world-light.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.35 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(160deg, rgba(4,6,18,0.86) 0%, rgba(6,10,22,0.80) 50%, rgba(4,6,16,0.90) 100%)',
            backdropFilter: 'blur(2px)',
          }}
        />
        <div className="absolute inset-x-0 top-0 h-24" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)' }} />
        <div className="absolute inset-x-0 bottom-0 h-24" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Contact header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)] animate-pulse" />
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">Available Now</span>
          </span>
          <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Get Your AI
            <br />
            <span className="glow-text-warm">Law Firm Website</span>
          </h2>
          <p className="text-[14px] text-white/35 mt-4 max-w-lg mx-auto">
            Book a free 30-minute strategy call. We'll audit your current site and show you what's possible.
          </p>
        </motion.div>

        {/* ── Form + Info ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 glass-card rounded-2xl p-8"
          >
            <LeadForm source="contact-section" />
          </motion.div>

          {/* Rotating testimonials — right side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Large rotating quote */}
            <div
              className="flex-1 rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: 'rgba(10,10,18,0.70)',
                border: '1px solid rgba(255,255,255,0.09)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.40)',
              }}
            >
              <div className="h-[1px]" style={{ background: 'linear-gradient(to right, transparent, rgba(255,140,66,0.35), transparent)' }} />
              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <span
                    className="font-display font-black text-[52px] leading-none select-none block -mb-1"
                    style={{ color: '#FF8C42', opacity: 0.18, letterSpacing: '-0.05em' }}
                  >
                    "
                  </span>
                  <p className="text-[14px] text-white/65 leading-relaxed mb-5">
                    {testimonials[activeTestimonial].quote}
                  </p>
                </div>
                <div>
                  <p className="font-display font-semibold text-white text-[13px]">{testimonials[activeTestimonial].name}</p>
                  <p className="text-[11px] text-white/30 mt-0.5 mb-3">{testimonials[activeTestimonial].title}</p>
                  <div className="flex items-center justify-between">
                    <span
                      className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                      style={{ background: 'rgba(255,140,66,0.10)', border: '1px solid rgba(255,140,66,0.25)', color: '#FF8C42' }}
                    >
                      {testimonials[activeTestimonial].area}
                    </span>
                    <div className="flex gap-1.5">
                      {testimonials.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveTestimonial(i)}
                          className="h-1.5 rounded-full transition-all duration-300"
                          style={{
                            width: i === activeTestimonial ? 20 : 6,
                            background: i === activeTestimonial ? '#FF8C42' : 'rgba(255,255,255,0.15)',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time badge */}
            <div
              className="rounded-2xl px-6 py-4 flex items-center justify-between"
              style={{
                background: 'rgba(10,10,18,0.60)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)] animate-pulse" />
                <span className="text-[11px] text-white/35 uppercase tracking-wider font-medium">Avg Response</span>
              </div>
              <span className="font-display font-bold text-white text-[18px]" style={{ letterSpacing: '-0.02em' }}>&lt; 2 Hours</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
