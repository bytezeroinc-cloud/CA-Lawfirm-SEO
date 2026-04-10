const STATS = [
  {
    value: '312%',
    label: 'Average organic traffic growth',
    sub: 'across California law firm clients',
    color: '#3B82F6',
  },
  {
    value: '5+',
    label: 'AI platforms that cite your firm',
    sub: 'Google, Perplexity, ChatGPT, Claude, Gemini',
    color: '#8B5CF6',
  },
  {
    value: '199+',
    label: 'California cities covered',
    sub: 'Hyper-local landing pages for every market',
    color: '#10B981',
  },
  {
    value: '97',
    label: 'Target PageSpeed score',
    sub: 'Core Web Vitals optimized by default',
    color: '#F59E0B',
  },
  {
    value: '7 days',
    label: 'Average launch timeline',
    sub: 'From kickoff to live site, fully optimized',
    color: '#EC4899',
  },
]

export default function SeoStatsBridge() {
  return (
    <section className="py-20" style={{ background: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16">
        {/* Label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, #e5e5ea)' }} />
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">By the numbers</span>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, #e5e5ea)' }} />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px" style={{ background: '#e5e5ea' }}>
          {STATS.map((s, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 px-6 py-8"
              style={{ background: '#fff' }}
            >
              {/* Top color bar */}
              <div className="h-0.5 w-8 rounded-full mb-2" style={{ background: s.color }} />

              <div
                className="font-thin"
                style={{
                  fontSize: 'clamp(28px, 2.8vw, 44px)',
                  color: s.color,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  fontFamily: "'Brockmann', sans-serif",
                  fontWeight: 100,
                }}
              >
                {s.value}
              </div>
              <div className="text-sm font-semibold text-gray-900 leading-tight">{s.label}</div>
              <div className="text-xs text-gray-500 leading-snug">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <p className="text-center text-sm text-gray-400 mt-8">
          Results from California law firms actively using ByteZero AI SEO — tracked over 90 days
        </p>
      </div>
    </section>
  )
}
