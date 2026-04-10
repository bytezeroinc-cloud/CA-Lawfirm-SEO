const ROW1 = [
  {
    name: 'Marcus Rivera',
    handle: 'Rivera & Associates, LA',
    avatar: 'MR',
    color: '#3B82F6',
    text: 'We went from page 4 to the top 3 results for "personal injury lawyer Los Angeles" in under 60 days. The AI content strategy was unlike anything a traditional SEO agency had tried.',
  },
  {
    name: 'Priya Nair',
    handle: 'Nair Law Group, San Jose',
    avatar: 'PN',
    color: '#8B5CF6',
    text: 'ChatGPT now recommends our firm by name when people ask about immigration attorneys in Silicon Valley. GEO optimization is real — and it works.',
  },
  {
    name: 'David Chen',
    handle: 'Chen Family Law, SF',
    avatar: 'DC',
    color: '#10B981',
    text: 'Our PageSpeed went from 51 to 97 after the technical SEO overhaul. Combined with the AI-generated city landing pages, organic traffic is up 312% in four months.',
  },
  {
    name: 'Angela Torres',
    handle: 'Torres Criminal Defense, SD',
    avatar: 'AT',
    color: '#F59E0B',
    text: "Perplexity cites our blog posts in almost every criminal defense query for San Diego. We didn't even know 'AI citation optimization' was a thing until ByteZero showed us.",
  },
  {
    name: 'James Whitfield',
    handle: 'Whitfield Estate Planning, OC',
    avatar: 'JW',
    color: '#EC4899',
    text: "The 199-city landing page strategy is brilliant. We're showing up in searches for cities we never even targeted before. Every page is unique, not spun content.",
  },
  {
    name: 'Sandra Lee',
    handle: 'Lee Employment Law, Sacramento',
    avatar: 'SL',
    color: '#06B6D4',
    text: "Google AI Overviews started featuring our content within 6 weeks. The schema markup and E-E-A-T optimization made the difference — we're now treated as an authoritative source.",
  },
  {
    name: 'Robert Kim',
    handle: 'Kim & Park, Los Angeles',
    avatar: 'RK',
    color: '#3B82F6',
    text: "We rank top 3 for 47 practice-area + city keyword combinations across California. The AI keyword clustering approach is something I've never seen before.",
  },
]

const ROW2 = [
  {
    name: 'Melissa Grant',
    handle: 'Grant Immigration Law, Fresno',
    avatar: 'MG',
    color: '#8B5CF6',
    text: 'The monthly SEO reporting dashboard shows exactly which keywords drove which consultations. Finally, real attribution — not vanity metrics.',
  },
  {
    name: 'Carlos Vega',
    handle: 'Vega Personal Injury, Riverside',
    avatar: 'CV',
    color: '#10B981',
    text: 'Our cost-per-lead dropped 38% after switching to AI-optimized content. The long-tail keyword strategy targets people who are actually ready to hire — not just browsing.',
  },
  {
    name: 'Tiffany Brooks',
    handle: 'Brooks & Sutton, San Diego',
    avatar: 'TB',
    color: '#F59E0B',
    text: 'Claude, Gemini, and Perplexity all cite our firm now. We went from zero AI visibility to being recommended across five major AI platforms in three months.',
  },
  {
    name: 'Nathan Osei',
    handle: 'Osei Business Law, Oakland',
    avatar: 'NO',
    color: '#EC4899',
    text: 'The technical site audit found 140+ crawl issues our previous agency never caught. Fixing those alone moved us from position 8 to position 2 for our main keyword.',
  },
  {
    name: 'Jennifer Wu',
    handle: 'Wu Family Law, San Jose',
    avatar: 'JW',
    color: '#06B6D4',
    text: "Every blog post ByteZero produces is deeply researched and passes our State Bar compliance review. AI content that's actually accurate — that's rare.",
  },
  {
    name: 'Anthony Morales',
    handle: 'Morales Criminal Defense, LA',
    avatar: 'AM',
    color: '#3B82F6',
    text: "We're getting cited in Google AI Overviews for competitive criminal defense queries in Los Angeles. Our organic impressions tripled in 90 days.",
  },
  {
    name: 'Rachel Hoffman',
    handle: 'Hoffman Elder Law, Santa Barbara',
    avatar: 'RH',
    color: '#8B5CF6',
    text: 'The internal linking architecture they built made our whole site more authoritative. Pages that were stuck on page 2 for years finally hit page 1 without any new content.',
  },
]

const SPEEDS = { row1: 55, row2: 65 }

function TestimonialCard({ name, handle, avatar, color, text }: typeof ROW1[0]) {
  return (
    <div
      className="flex-shrink-0 w-[320px] sm:w-[360px] mx-3 rounded-2xl p-5 flex flex-col gap-3"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
          style={{ background: color + '22', color, border: `1px solid ${color}44` }}
        >
          {avatar}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-semibold text-white truncate">{name}</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="7" fill={color} opacity="0.9" />
              <path d="M4 7l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-[11px] text-white/40 truncate block">{handle}</span>
        </div>
        <div className="ml-auto flex gap-0.5 flex-shrink-0">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="11" height="11" viewBox="0 0 12 12" fill={color}>
              <path d="M6 1l1.3 2.6L10 4l-2 2 .5 2.8L6 7.5 3.5 8.8 4 6 2 4l2.7-.4L6 1z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-[13px] leading-relaxed text-white/70">{text}</p>
    </div>
  )
}

function MarqueeRow({ items, reverse = false, speed }: { items: typeof ROW1; reverse?: boolean; speed: number }) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex"
        style={{
          width: 'max-content',
          animation: `marquee-${reverse ? 'right' : 'left'} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <TestimonialCard key={i} {...item} />
        ))}
      </div>
    </div>
  )
}

export default function SeoTestimonials() {
  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 mb-12 flex items-end justify-between">
        <div>
          <p className="text-white/40 text-sm mb-2 uppercase tracking-widest">Client results</p>
          <h2
            className="font-thin text-white"
            style={{ fontSize: 'clamp(28px, 3.5vw, 52px)', letterSpacing: '-0.02em', fontWeight: 100 }}
          >
            What Law Firms<br />Are Saying
          </h2>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-white/35 text-sm pb-1">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" opacity="0.6">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          Real results from California law firms
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="mb-4">
        <MarqueeRow items={ROW1} reverse={false} speed={SPEEDS.row1} />
      </div>

      {/* Row 2 — scrolls right */}
      <MarqueeRow items={ROW2} reverse={true} speed={SPEEDS.row2} />
    </section>
  )
}
