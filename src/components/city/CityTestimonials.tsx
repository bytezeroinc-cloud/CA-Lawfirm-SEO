import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, BadgeCheck } from 'lucide-react'
import { getTheme } from '../../data/cities'
import type { City } from '../../data/cities'

type Testimonial = {
  name: string
  initials: string
  firm: string
  city: string
  rating: number
  color: string
  quote: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sandra Lee',
    initials: 'SL',
    firm: 'Lee Employment Law',
    city: 'Sacramento',
    rating: 5,
    color: '#67E8F9',
    quote:
      'Google AI Overviews started featuring our content within 6 weeks. The schema markup and E-E-A-T optimization made the difference — we\'re now treated as an authoritative source.',
  },
  {
    name: 'Robert Kim',
    initials: 'RK',
    firm: 'Kim & Park',
    city: 'Los Angeles',
    rating: 5,
    color: '#60A5FA',
    quote:
      'We rank top 3 for 47 practice-area + city keyword combinations across California. The AI keyword clustering approach is something I\'ve never seen before.',
  },
  {
    name: 'Marcus Rivera',
    initials: 'MR',
    firm: 'Rivera & Associates',
    city: 'Los Angeles',
    rating: 5,
    color: '#A78BFA',
    quote:
      'We went from page 4 to the top 3 results for "personal injury lawyer Los Angeles" in under 60 days. The AI content strategy was unlike anything a traditional SEO agency had tried.',
  },
  {
    name: 'Priya Nair',
    initials: 'PN',
    firm: 'Nair Law Group',
    city: 'San Jose',
    rating: 5,
    color: '#F472B6',
    quote:
      'ChatGPT now recommends our firm by name when people ask about immigration attorneys in Silicon Valley. GEO optimization is real — and it works.',
  },
  {
    name: 'Anthony Morales',
    initials: 'AM',
    firm: 'Morales Criminal Defense',
    city: 'Los Angeles',
    rating: 5,
    color: '#FF8C42',
    quote:
      'We\'re getting cited in Google AI Overviews for competitive criminal defense queries in Los Angeles. Our organic impressions tripled in 90 days.',
  },
  {
    name: 'Rachel Hoffman',
    initials: 'RH',
    firm: 'Hoffman Elder Law',
    city: 'Santa Barbara',
    rating: 5,
    color: '#C084FC',
    quote:
      'The internal linking architecture they built made our whole site more authoritative. Pages that were stuck on page 2 for years finally hit page 1 without any new content.',
  },
  {
    name: 'Melissa Grant',
    initials: 'MG',
    firm: 'Grant Immigration Law',
    city: 'Fresno',
    rating: 5,
    color: '#A855F7',
    quote:
      'The monthly SEO reporting dashboard shows exactly which keywords drove which consultations. Finally, real attribution — not vanity metrics.',
  },
  {
    name: 'Carlos Vega',
    initials: 'CV',
    firm: 'Vega Personal Injury',
    city: 'Riverside',
    rating: 5,
    color: '#34D399',
    quote:
      'Our cost-per-lead dropped 38% after switching to AI-optimized content. The long-tail keyword strategy targets people who are actually ready to hire — not just browsing.',
  },
  {
    name: 'James Whitfield',
    initials: 'JW',
    firm: 'Whitfield Estate Planning',
    city: 'Orange County',
    rating: 5,
    color: '#EC4899',
    quote:
      'Their landing-page strategy is brilliant. They built pages for cities we never thought were worth it. Every page is unique, not just template-swapped.',
  },
  {
    name: 'Tina Hu',
    initials: 'TH',
    firm: 'Hu Family Law',
    city: 'San Jose',
    rating: 5,
    color: '#22D3EE',
    quote:
      'What this team produces is deeply researched and follows our State Bar compliance guardrails. It\'s content that\'s actually accurate — and we\'re getting cited.',
  },
]

const STYLES = `
  @keyframes city-marquee-scroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .city-marquee-track {
    display: flex;
    width: max-content;
    animation: city-marquee-scroll 60s linear infinite;
  }
  .city-marquee:hover .city-marquee-track {
    animation-play-state: paused;
  }
`

export default function CityTestimonials({ city }: { city: City }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { accent } = city
  const t = getTheme(city)
  const isLight = t.isLight

  // Duplicate so the marquee loops seamlessly
  const items = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section ref={ref} className="relative py-20 sm:py-28 overflow-hidden">
      <style>{STYLES}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-12 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-xl">
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
                Client Results
              </span>
            </span>
            <h2
              className="font-display font-bold leading-tight"
              style={{
                fontSize: 'clamp(28px, 4vw, 52px)',
                letterSpacing: '-0.02em',
                color: t.textPrimary,
              }}
            >
              What Law Firms
              <br />
              <span style={isLight
                ? { color: accent.secondary }
                : { color: accent.primary, filter: `drop-shadow(0 0 18px ${accent.glow})` }
              }>
                Are Saying
              </span>
            </h2>
          </div>
          <div
            className="flex items-start gap-2 max-w-xs text-[12px]"
            style={{ color: t.textMuted }}
          >
            <span className="text-[20px] leading-none" style={{ color: accent.primary, opacity: 0.6 }}>&ldquo;</span>
            <span>Real results from California law firms.</span>
          </div>
        </motion.div>
      </div>

      {/* Marquee slider */}
      <div className="city-marquee w-full overflow-hidden">
        <div className="city-marquee-track gap-4 sm:gap-5 px-4 sm:px-6 md:px-12">
          {items.map((item, i) => (
            <article
              key={`${item.name}-${i}`}
              className="shrink-0 w-[300px] sm:w-[360px] rounded-2xl p-5 sm:p-6 flex flex-col gap-4"
              style={{
                background: t.bgCard,
                backdropFilter: isLight ? 'blur(20px) saturate(1.2)' : 'blur(8px)',
                WebkitBackdropFilter: isLight ? 'blur(20px) saturate(1.2)' : 'blur(8px)',
                border: `1px solid ${t.borderSubtle}`,
                boxShadow: isLight
                  ? '0 8px 28px rgba(0,0,0,0.06)'
                  : '0 12px 40px rgba(0,0,0,0.45)',
              }}
            >
              {/* Top accent strip */}
              <div
                className="h-[2px] -mx-5 sm:-mx-6 -mt-5 sm:-mt-6"
                style={{ background: `linear-gradient(to right, transparent, ${item.color}, transparent)` }}
              />

              <header className="flex items-start justify-between gap-3 mt-1">
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-[12px]"
                    style={{
                      background: `${item.color}1A`,
                      border: `1px solid ${item.color}40`,
                      color: item.color,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {item.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="font-display font-semibold text-[14px] truncate"
                        style={{ color: t.textPrimary }}
                      >
                        {item.name}
                      </span>
                      <BadgeCheck size={13} style={{ color: '#3B82F6' }} fill="#3B82F6" stroke="#fff" />
                    </div>
                    <div className="text-[11px] leading-tight truncate" style={{ color: t.textMuted }}>
                      {item.firm}, {item.city}
                    </div>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={11}
                      style={{ color: item.color }}
                      fill={item.color}
                      strokeWidth={0}
                    />
                  ))}
                </div>
              </header>

              <p className="text-[12.5px] sm:text-[13px] leading-relaxed" style={{ color: t.textSecondary }}>
                {item.quote}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
