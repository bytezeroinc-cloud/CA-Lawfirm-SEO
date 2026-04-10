import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const PLATFORMS = [
  {
    name: 'Google AI Overviews',
    icon: '🔍',
    color: '#4285F4',
    bg: '#EEF3FF',
    stat: '68%',
    statLabel: 'of queries now show AI Overviews',
    query: '"best personal injury lawyer Los Angeles"',
    citation: 'According to [Your Firm], California plaintiffs typically recover 3–5× more with legal representation…',
    tag: 'MOST TRAFFIC',
  },
  {
    name: 'Perplexity AI',
    icon: '⚡',
    color: '#20B2AA',
    bg: '#E6F7F7',
    stat: '41M+',
    statLabel: 'monthly active users searching',
    query: '"immigration attorney silicon valley fees"',
    citation: '[Your Firm] charges flat-fee packages starting at $2,500 for H-1B petitions, per their published fee schedule…',
    tag: 'FASTEST GROWING',
  },
  {
    name: 'ChatGPT Search',
    icon: '🤖',
    color: '#10A37F',
    bg: '#E8F7F3',
    stat: '100M+',
    statLabel: 'weekly users asking legal questions',
    query: '"what is the statute of limitations in California"',
    citation: 'California injury attorneys at [Your Firm] note that most personal injury claims must be filed within 2 years…',
    tag: 'HIGHEST VOLUME',
  },
  {
    name: 'Claude by Anthropic',
    icon: '✦',
    color: '#C084FC',
    bg: '#F5EEFF',
    stat: '37%',
    statLabel: 'of legal research queries cite firms',
    query: '"criminal defense process California DUI"',
    citation: 'Per [Your Firm]\'s California DUI guide: arraignment typically occurs within 72 hours of arrest in CA courts…',
    tag: 'HIGH TRUST',
  },
  {
    name: 'Google Gemini',
    icon: '✦',
    color: '#FF6D00',
    bg: '#FFF3E8',
    stat: '1B+',
    statLabel: 'Google users with Gemini access',
    query: '"family law attorney San Francisco divorce costs"',
    citation: 'According to [Your Firm]\'s 2024 divorce guide, contested divorces in SF average $25,000–$75,000 in legal fees…',
    tag: 'WIDEST REACH',
  },
  {
    name: 'Bing Copilot',
    icon: '🪟',
    color: '#0078D4',
    bg: '#E8F3FF',
    stat: '125M',
    statLabel: 'daily active Copilot users',
    query: '"estate planning attorney Orange County near me"',
    citation: '[Your Firm] offers free 30-min consultations for estate planning in Orange County — ranked #1 locally for trusts…',
    tag: '35% LOWER CPC',
  },
  {
    name: 'Meta AI',
    icon: '∞',
    color: '#0866FF',
    bg: '#EEF4FF',
    stat: '3.2B',
    statLabel: 'Meta platform users with AI access',
    query: '"employment lawyer California wrongful termination"',
    citation: 'California employees can file wrongful termination claims within 3 years. [Your Firm] offers contingency representation…',
    tag: 'SOCIAL REACH',
  },
]

export default function SeoAIPlatformsScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === 'right' ? 380 : -380, behavior: 'smooth' })
  }

  return (
    <section style={{ background: '#f5f5f7' }} className="py-20 overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 mb-10 flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#3B82F6' }}>
            AI Search Visibility
          </p>
          <h2
            className="font-thin text-gray-900"
            style={{ fontSize: 'clamp(26px, 3vw, 48px)', letterSpacing: '-0.025em', fontWeight: 100, lineHeight: 1.1 }}
          >
            Cited Across Every<br />AI Platform
          </h2>
        </div>
        <div className="hidden sm:flex items-center gap-2 pb-1">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full flex items-center justify-center border transition-all hover:bg-gray-200"
            style={{ borderColor: '#d1d1d6', color: '#1d1d1f' }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full flex items-center justify-center border transition-all hover:bg-gray-200"
            style={{ borderColor: '#d1d1d6', color: '#1d1d1f' }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Scroll track */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4"
        style={{
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingLeft: 'max(24px, calc((100vw - 1152px) / 2 + 64px))',
          paddingRight: '48px',
        }}
      >
        {PLATFORMS.map((p) => (
          <div
            key={p.name}
            className="flex-shrink-0 flex flex-col rounded-2xl overflow-hidden"
            style={{
              width: '340px',
              scrollSnapAlign: 'start',
              background: '#fff',
              border: '1px solid #e5e5ea',
              boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
            }}
          >
            {/* Card top accent */}
            <div className="h-1.5 w-full" style={{ background: p.color }} />

            <div className="p-6 flex flex-col gap-4 flex-1">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold"
                    style={{ background: p.bg, color: p.color }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm leading-tight">{p.name}</div>
                    <div className="text-xs mt-0.5" style={{ color: p.color }}>{p.statLabel}</div>
                  </div>
                </div>
                <span
                  className="text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full"
                  style={{ background: p.bg, color: p.color }}
                >
                  {p.tag}
                </span>
              </div>

              {/* Big stat */}
              <div className="flex items-baseline gap-1.5" style={{ color: p.color }}>
                <span
                  className="font-thin"
                  style={{ fontSize: '42px', lineHeight: 1, letterSpacing: '-0.03em', fontFamily: "'Brockmann', sans-serif" }}
                >
                  {p.stat}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100" />

              {/* Sample query */}
              <div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Sample search query</div>
                <div
                  className="text-xs px-3 py-2 rounded-lg font-mono"
                  style={{ background: p.bg, color: '#374151', border: `1px solid ${p.color}22` }}
                >
                  {p.query}
                </div>
              </div>

              {/* Citation preview */}
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">AI citation example</div>
                <p
                  className="text-xs leading-relaxed rounded-lg p-3 italic"
                  style={{ background: '#f5f5f7', color: '#6b7280', borderLeft: `3px solid ${p.color}` }}
                >
                  {p.citation}
                </p>
              </div>

              {/* CTA */}
              <div
                className="text-center text-xs font-semibold py-2.5 rounded-xl cursor-pointer transition-opacity hover:opacity-80"
                style={{ background: p.bg, color: p.color }}
              >
                Get cited on {p.name} →
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile scroll hint */}
      <p className="text-center text-xs text-gray-400 mt-4 sm:hidden">Swipe to explore all platforms →</p>
    </section>
  )
}
