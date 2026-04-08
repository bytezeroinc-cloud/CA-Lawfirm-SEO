import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

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

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const iv = setInterval(() => setActiveTestimonial(i => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(iv)
  }, [])

  return (
    <section ref={ref} className="relative py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(16,16,22,0.96)',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)',
          }}
        >
          <div
            className="h-[1px]"
            style={{ background: 'linear-gradient(to right, transparent, #FF8C4250, transparent)' }}
          />
          <div className="p-8 md:p-12 text-center">
            <span
              className="font-display font-black text-[64px] leading-none select-none block -mb-2"
              style={{ color: '#FF8C42', opacity: 0.15, letterSpacing: '-0.05em' }}
            >
              "
            </span>
            <p className="text-[15px] md:text-[17px] text-white/65 leading-relaxed mb-8">
              {testimonials[activeTestimonial].quote}
            </p>
            <p className="font-display font-semibold text-white text-[14px]">{testimonials[activeTestimonial].name}</p>
            <p className="text-[11px] text-white/35 mt-0.5 mb-3">{testimonials[activeTestimonial].title}</p>
            <span
              className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-6"
              style={{
                background: 'rgba(255,140,66,0.1)',
                border: '1px solid rgba(255,140,66,0.25)',
                color: '#FF8C42',
              }}
            >
              {testimonials[activeTestimonial].area}
            </span>
            {/* Dots */}
            <div className="flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === activeTestimonial ? 24 : 8,
                    background: i === activeTestimonial ? '#FF8C42' : 'rgba(255,255,255,0.15)',
                    boxShadow: i === activeTestimonial ? '0 0 10px rgba(255,140,66,0.5)' : 'none',
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
