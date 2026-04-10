import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const CHANNELS = [
  {
    name: 'Google Search Ads',
    icon: '🔍',
    color: '#4285F4',
    bg: '#EEF3FF',
    roas: '4.2×',
    cpc: '$18–34',
    cvr: '9.4%',
    cpl: '$52',
    tag: 'HIGHEST INTENT',
    desc: 'Target attorneys at the exact moment someone searches for legal help. Immediate visibility for competitive practice areas.',
    features: ['Exact-match legal keywords', 'Ad copy A/B testing', 'Quality Score optimization', 'Negative keyword management'],
  },
  {
    name: 'Microsoft / Bing Ads',
    icon: '🪟',
    color: '#0078D4',
    bg: '#E8F3FF',
    roas: '5.1×',
    cpc: '$11–21',
    cvr: '8.7%',
    cpl: '$34',
    tag: 'LOWEST CPL',
    desc: '35% lower CPC than Google. Bing users skew older, wealthier — ideal for estate planning, business law, and high-value cases.',
    features: ['Shared audiences with Google', 'LinkedIn profile targeting', 'Exclusive B2B audience data', 'Import from Google Ads'],
  },
  {
    name: 'Meta / Facebook Ads',
    icon: '∞',
    color: '#0866FF',
    bg: '#EEF4FF',
    roas: '3.6×',
    cpc: '$8–15',
    cvr: '4.2%',
    cpl: '$61',
    tag: 'BEST AWARENESS',
    desc: 'Reach potential clients before they search. Retargeting website visitors and lookalike audiences delivers consistent lead flow.',
    features: ['Lookalike audience modeling', 'Video & carousel ads', 'Lead forms (no landing page)', 'Retargeting pixel strategy'],
  },
  {
    name: 'YouTube Ads',
    icon: '▶',
    color: '#FF0000',
    bg: '#FFEEEE',
    roas: '3.1×',
    cpc: '$0.04–0.10',
    cvr: '2.8%',
    cpl: '$79',
    tag: 'TOP OF FUNNEL',
    desc: 'Video builds authority and trust. Skippable in-stream ads targeting legal query keywords reach research-phase clients at scale.',
    features: ['In-stream video targeting', 'Custom intent audiences', 'YouTube search placements', 'Brand recall lift tracking'],
  },
  {
    name: 'Local Service Ads',
    icon: '📍',
    color: '#34A853',
    bg: '#E8F5EB',
    roas: '6.8×',
    cpc: 'Per lead',
    cvr: '28%',
    cpl: '$28',
    tag: 'GOOGLE VERIFIED',
    desc: '"Google Screened" badge builds instant credibility. Pay per lead, not per click — only for verified law firm profiles.',
    features: ['Google Screened badge', 'Pay-per-lead model', 'Appears above all ads', 'Direct call tracking'],
  },
  {
    name: 'Display & Retargeting',
    icon: '🎯',
    color: '#FF6D00',
    bg: '#FFF3E8',
    roas: '7.2×',
    cpc: '$0.50–2.00',
    cvr: '11.3%',
    cpl: '$19',
    tag: 'BEST RETARGETING',
    desc: 'Re-engage website visitors who left without contacting you. Banner and responsive ads across 2M+ websites keep your firm top of mind.',
    features: ['Website visitor retargeting', 'Dynamic creative optimization', 'Frequency capping', 'Cross-channel attribution'],
  },
]

const MetricPill = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <div className="flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl" style={{ background: color + '12' }}>
    <span className="text-[10px] uppercase tracking-wider font-medium" style={{ color: '#6b7280' }}>{label}</span>
    <span className="text-sm font-bold" style={{ color }}>{value}</span>
  </div>
)

export default function MarketingROIScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === 'right' ? 380 : -380, behavior: 'smooth' })
  }

  return (
    <section style={{ background: '#f5f5f7' }} className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 mb-10 flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#C084FC' }}>
            Paid Channel Intelligence
          </p>
          <h2
            className="font-thin text-gray-900"
            style={{ fontSize: 'clamp(26px, 3vw, 48px)', letterSpacing: '-0.025em', fontWeight: 100, lineHeight: 1.1 }}
          >
            Every Channel,<br />Every Dollar Tracked
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
        {CHANNELS.map((ch) => (
          <div
            key={ch.name}
            className="flex-shrink-0 flex flex-col rounded-2xl overflow-hidden"
            style={{
              width: '340px',
              scrollSnapAlign: 'start',
              background: '#fff',
              border: '1px solid #e5e5ea',
              boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
            }}
          >
            <div className="h-1.5 w-full" style={{ background: ch.color }} />
            <div className="p-6 flex flex-col gap-4 flex-1">

              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: ch.bg }}
                  >
                    {ch.icon}
                  </div>
                  <span className="font-semibold text-gray-900 text-sm">{ch.name}</span>
                </div>
                <span
                  className="text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full"
                  style={{ background: ch.bg, color: ch.color }}
                >
                  {ch.tag}
                </span>
              </div>

              {/* ROAS big number */}
              <div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Average ROAS</div>
                <div
                  className="font-thin"
                  style={{ fontSize: '48px', color: ch.color, letterSpacing: '-0.03em', lineHeight: 1, fontFamily: "'Brockmann', sans-serif", fontWeight: 100 }}
                >
                  {ch.roas}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2">
                <MetricPill label="Avg CPC" value={ch.cpc} color={ch.color} />
                <MetricPill label="Conv Rate" value={ch.cvr} color={ch.color} />
                <MetricPill label="Avg CPL" value={ch.cpl} color={ch.color} />
              </div>

              <div className="h-px bg-gray-100" />

              {/* Description */}
              <p className="text-xs text-gray-600 leading-relaxed flex-1">{ch.desc}</p>

              {/* Features */}
              <ul className="space-y-1.5">
                {ch.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ch.color }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-gray-400 mt-4 sm:hidden">Swipe to explore all channels →</p>
    </section>
  )
}
