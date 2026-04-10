const STATS = [
  { value: '4.8×', label: 'Average ROAS', sub: 'Across Google + Bing + Meta campaigns', color: '#C084FC' },
  { value: '-42%', label: 'Cost per lead reduction', sub: 'vs. traditional agency management', color: '#FF8C42' },
  { value: '$28', label: 'Avg cost per qualified lead', sub: 'For personal injury practice areas', color: '#34D399' },
  { value: '312+', label: 'Qualified leads / month', sub: 'For full-funnel campaign clients', color: '#60A5FA' },
  { value: '95%', label: 'Client retention rate', sub: 'Year-over-year active campaigns', color: '#F472B6' },
]

export default function MarketingStatsBridge() {
  return (
    <section className="py-20" style={{ background: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, #e5e5ea)' }} />
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Campaign performance</span>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, #e5e5ea)' }} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px" style={{ background: '#e5e5ea' }}>
          {STATS.map((s, i) => (
            <div key={i} className="flex flex-col gap-2 px-6 py-8" style={{ background: '#fff' }}>
              <div className="h-0.5 w-8 rounded-full mb-2" style={{ background: s.color }} />
              <div
                className="font-thin"
                style={{ fontSize: 'clamp(28px, 2.8vw, 44px)', color: s.color, letterSpacing: '-0.03em', lineHeight: 1, fontFamily: "'Brockmann', sans-serif", fontWeight: 100 }}
              >
                {s.value}
              </div>
              <div className="text-sm font-semibold text-gray-900 leading-tight">{s.label}</div>
              <div className="text-xs text-gray-500 leading-snug">{s.sub}</div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Aggregated from California law firm campaigns — 90-day rolling averages
        </p>
      </div>
    </section>
  )
}
