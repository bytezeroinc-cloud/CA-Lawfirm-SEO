import { useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Plus, ArrowRight } from 'lucide-react'
import { getTheme } from '../../data/cities'
import type { City, CityFAQ as CityFAQItem } from '../../data/cities'

export default function CityFAQ({ city }: { city: City }) {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { accent } = city
  const t = getTheme(city)
  const isLight = t.isLight

  const half = Math.ceil(city.faqs.length / 2)
  const leftCol = city.faqs.slice(0, half)
  const rightCol = city.faqs.slice(half)

  const renderFaq = (faq: CityFAQItem, globalIdx: number) => {
    const isOpen = open === globalIdx
    return (
      <motion.div
        key={globalIdx}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: globalIdx * 0.06 }}
        className="rounded-xl overflow-hidden"
        style={{
          background: t.bgCard,
          backdropFilter: isLight ? 'blur(20px) saturate(1.2)' : 'blur(8px)',
          WebkitBackdropFilter: isLight ? 'blur(20px) saturate(1.2)' : 'blur(8px)',
          border: `1px solid ${isLight
            ? (isOpen ? 'rgba(0,0,0,0.16)' : t.borderSubtle)
            : `rgba(${accent.primaryRgb},${isOpen ? '0.32' : '0.14'})`}`,
          transition: 'border-color 0.3s ease',
          boxShadow: isOpen
            ? (isLight ? '0 12px 40px rgba(0,0,0,0.08)' : `0 12px 40px rgba(${accent.primaryRgb},0.10)`)
            : (isLight ? '0 1px 3px rgba(0,0,0,0.03)' : 'none'),
        }}
      >
        <button
          onClick={() => setOpen(isOpen ? null : globalIdx)}
          className="w-full flex items-start justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left transition-colors"
          style={{ color: t.textPrimary }}
        >
          <span className="text-[14px] sm:text-[15px] font-semibold leading-snug" style={{ color: t.textPrimary }}>
            {faq.q}
          </span>
          <span
            className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 mt-0.5"
            style={{
              background: `rgba(${accent.primaryRgb},${isLight ? 0.06 : 0.10})`,
              border: `1px solid rgba(${accent.primaryRgb},${isLight ? 0.20 : 0.30})`,
              transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            }}
          >
            <Plus size={14} style={{ color: accent.primary }} strokeWidth={2.4} />
          </span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div
                className="px-5 sm:px-6 pb-5 sm:pb-6 text-[13.5px] sm:text-[14px] leading-relaxed"
                style={{
                  borderTop: `1px solid rgba(${accent.primaryRgb},${isLight ? 0.10 : 0.12})`,
                  paddingTop: '16px',
                  color: t.textSecondary,
                }}
              >
                {faq.a}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    )
  }

  return (
    <section ref={ref} className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-14 text-center"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
            style={{
              background: t.glassBg,
              border: `1px solid ${t.glassBorder}`,
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: accent.primary, boxShadow: `0 0 6px ${accent.primary}` }}
            />
            <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: t.textSecondary }}>
              {city.name} FAQs
            </span>
          </span>
          <h2
            className="font-display font-bold leading-tight"
            style={{ fontSize: 'clamp(26px, 3.6vw, 46px)', letterSpacing: '-0.02em', color: t.textPrimary }}
          >
            Questions{' '}
            <span style={isLight
              ? { color: accent.secondary }
              : { color: accent.primary, filter: `drop-shadow(0 0 18px ${accent.glow})` }
            }>
              {city.name}
            </span>{' '}
            firms ask us
          </h2>
          <p className="mt-4 text-[14px] max-w-2xl mx-auto leading-relaxed" style={{ color: t.textMuted }}>
            Quick answers to the most common questions. Don&apos;t see yours? Book a free strategy call and ask us anything.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
          <div className="flex flex-col gap-3">
            {leftCol.map((faq, i) => renderFaq(faq, i))}
          </div>
          <div className="flex flex-col gap-3">
            {rightCol.map((faq, i) => renderFaq(faq, i + half))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <p className="text-[14px] text-center sm:text-left" style={{ color: t.textSecondary }}>
            Still have questions about your {city.name} growth strategy?
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg px-6 py-3 text-[14px] font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: accent.gradient,
              color: '#fff',
              boxShadow: isLight ? '0 8px 24px rgba(0,0,0,0.16)' : `0 0 24px ${accent.glow}`,
            }}
          >
            Book Free Strategy Call
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
