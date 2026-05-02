/**
 * City landing page data — unique content per California market.
 * Each city has a distinct accent color, hero image, pain-point narrative,
 * and service angle so pages don't feel like one template with swapped names.
 */

export type CityAccent = {
  primary: string        // hex
  primaryRgb: string     // 'r,g,b' for rgba()
  secondary: string
  glow: string           // 'rgba(...)'
  gradient: string       // CSS gradient string
}

export type PainPoint = {
  pain: string
  detail: string
  solution: string
  metric?: string
}

export type ServiceAngle = {
  service: 'AI SEO' | 'AI Web Development' | 'AI Marketing'
  href: string
  headline: string        // city-specific value prop
  description: string
  bullets: string[]
}

export type MarketStat = {
  label: string
  value: string
  caption?: string
}

export type CityFAQ = {
  q: string
  a: string
}

export type ProcessStep = {
  number: string         // "01", "02", etc.
  title: string
  description: string
  duration: string       // e.g. "Week 1"
}

export type WhyUsItem = {
  stat: string           // big number
  statLabel: string      // small caption
  title: string
  description: string
}

export type SectionBackgrounds = {
  /** image OR video URL (mp4) — auto-detected by extension */
  hero?: string
  painPoints?: string
  whatWeDo?: string
  howWeWork?: string
  whyUs?: string
  testimonials?: string
  faq?: string
  closing?: string
}

export type CityTheme = 'dark' | 'light'

export type ThemeTokens = {
  /** page-level base background */
  bgPage: string
  /** section background (alternate) */
  bgSection: string
  /** card surface */
  bgCard: string
  /** card surface (alt / elevated) */
  bgCardAlt: string
  /** primary text color */
  textPrimary: string
  /** secondary text */
  textSecondary: string
  /** muted text */
  textMuted: string
  /** subtle border for cards & dividers */
  borderSubtle: string
  /** strong border (e.g. on hover) */
  borderStrong: string
  /** glass background tint */
  glassBg: string
  /** glass border */
  glassBorder: string
  /** subtle backdrop overlay color (for image bgs) */
  overlayRgb: string  // 'r,g,b'
  /** is this a light theme? */
  isLight: boolean
}

export function getTheme(city: City): ThemeTokens {
  if (city.theme === 'light') {
    return {
      bgPage: '#fafafa',
      bgSection: '#f5f5f7',
      bgCard: '#ffffff',
      bgCardAlt: '#fbfbfd',
      textPrimary: '#1d1d1f',
      textSecondary: 'rgba(29,29,31,0.65)',
      textMuted: 'rgba(29,29,31,0.40)',
      borderSubtle: 'rgba(0,0,0,0.08)',
      borderStrong: 'rgba(0,0,0,0.16)',
      glassBg: 'rgba(255,255,255,0.72)',
      glassBorder: 'rgba(0,0,0,0.08)',
      overlayRgb: '245,245,247',
      isLight: true,
    }
  }
  return {
    bgPage: '#000000',
    bgSection: '#05050a',
    bgCard: 'rgba(14,12,22,0.85)',
    bgCardAlt: 'rgba(14,12,22,0.92)',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255,255,255,0.65)',
    textMuted: 'rgba(255,255,255,0.40)',
    borderSubtle: 'rgba(255,255,255,0.10)',
    borderStrong: 'rgba(255,255,255,0.20)',
    glassBg: 'rgba(255,255,255,0.04)',
    glassBorder: 'rgba(255,255,255,0.10)',
    overlayRgb: '5,5,10',
    isLight: false,
  }
}

export type City = {
  slug: string
  name: string
  shortName: string
  region: string
  metaTitle: string
  metaDescription: string

  /* Theme — dark (default) or light (Apple-style) */
  theme?: CityTheme

  /* Visual identity */
  heroImage: string                       // fallback static image
  heroVideo?: string                      // optional video for hero (preferred when present)
  sectionBackgrounds?: SectionBackgrounds // per-section backgrounds for visual variety
  accent: CityAccent
  badgeLabel: string

  /* Hero copy */
  eyebrow: string
  headline: string
  headlineAccent: string
  subhead: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }

  /* Quick stats bar (under hero) */
  heroStats: MarketStat[]

  /* Pain points → solutions (3 max) */
  painPoints: PainPoint[]

  /* Services with city-specific angles */
  services: ServiceAngle[]

  /* How we work — 4-step process */
  process?: ProcessStep[]

  /* Why Work With Us — 3-4 differentiators with proof */
  whyUs?: WhyUsItem[]

  /* Market intelligence panel */
  marketIntel: {
    headline: string
    summary: string
    stats: MarketStat[]
    competitionLevel: 'Low' | 'Medium' | 'Medium-High' | 'High' | 'Very High'
    competitionColor: string
    topPractices: string[]
    opportunity: string
  }

  /* Closing CTA + FAQ */
  closing: {
    headline: string
    subhead: string
  }
  faqs: CityFAQ[]
}

/* ────────────────────────────────────────────────────────────── */
/*  LOS ANGELES — Apple-style · Light · Silver/Charcoal           */
/* ────────────────────────────────────────────────────────────── */
const losAngeles: City = {
  slug: 'los-angeles',
  name: 'Los Angeles',
  shortName: 'LA',
  region: 'Southern California · LA County',
  metaTitle: 'AI Marketing Agency for Los Angeles Law Firms | SEO, Web Dev, Ads',
  metaDescription:
    'AI-powered SEO, web development, and marketing for Los Angeles law firms. Win more PI cases, capture the bilingual market, and lower acquisition cost across LA County.',
  theme: 'dark',
  heroImage: '/nebula-i1.jpg',
  heroVideo: '/nebula-v1.mp4',
  sectionBackgrounds: {
    painPoints: '/nebula-i2.jpg',
    whatWeDo: '/nebula-v2.mp4',
    howWeWork: '/nebula-i3.jpg',
    whyUs: '/nebula-v3.mp4',
    testimonials: '/nebula-v8.mp4',
    faq: '/nebula-i1.jpg',
    closing: '/nebula-v4.mp4',
  },
  accent: {
    primary: '#D946EF',
    primaryRgb: '217,70,239',
    secondary: '#F0ABFC',
    glow: 'rgba(217,70,239,0.45)',
    gradient: 'linear-gradient(135deg, #C084FC 0%, #D946EF 50%, #EC4899 100%)',
  },
  badgeLabel: 'LOS ANGELES · LA COUNTY',
  eyebrow: 'AI MARKETING AGENCY',
  headline: 'Get More Cases for Your',
  headlineAccent: 'Los Angeles Law Firm.',
  subhead:
    'We do three things to grow your law firm: (1) AI-powered SEO to rank you on Google, Maps, and AI Overviews. (2) AI marketing campaigns on Google, Bing, Meta, and YouTube to fill your pipeline with qualified leads. (3) A new high-converting website that turns visitors into booked consultations. Built specifically for LA. Measurable ROI. Fast turnaround.',
  primaryCta: { label: 'Get LA Market Audit', href: '#contact' },
  secondaryCta: { label: 'Book Strategy Call', href: 'tel:+18336675253' },
  heroStats: [
    { label: 'LA County Population', value: '9.7M' },
    { label: 'Spanish-Speaking', value: '47%' },
    { label: 'Avg CPL Reduction', value: '−42%' },
    { label: 'Mobile Traffic Share', value: '78%' },
  ],
  painPoints: [
    {
      pain: 'LA clients can\'t find your firm in a sea of competitors',
      detail:
        'Los Angeles has 14,000+ active law firms competing for the same keywords. Without local SEO, your firm gets buried beneath mega-firms, directory listings, and out-of-area competitors who simply rank higher.',
      solution:
        'Hyper-local SEO across 76 LA County neighborhoods — Beverly Hills, DTLA, Long Beach, the Valley, and more — plus AI Overview optimization that puts you in front of LA clients the moment they search.',
      metric: '+3.4× LA-area organic traffic in 90 days',
    },
    {
      pain: '47% of LA speaks Spanish — and your firm probably doesn\'t market to them',
      detail:
        'Nearly half of LA County is Hispanic. Most LA law firms run English-only websites and ad campaigns, leaving the highest-converting segment of the market to a handful of bilingual competitors.',
      solution:
        'Native-quality Spanish content, bilingual landing pages, hreflang-correct site architecture, and Spanish-language Google + Meta ad campaigns — all built and maintained automatically.',
      metric: '+3.1× lead volume from Hispanic markets',
    },
    {
      pain: 'Visitors land on your site — and bounce in seconds',
      detail:
        'LA clients are visually fluent. A dated, slow, or generic-template website kills consultations within seconds — even when SEO and ads are working perfectly. 78% of LA legal traffic is mobile, where the bar is even higher.',
      solution:
        'A new, modern, mobile-first website built for conversions: cinematic feel, sub-1.5s load, AI intake forms in English & Spanish, and clear CTAs that turn LA visitors into booked consults.',
      metric: '+58% website-to-consult conversion',
    },
  ],
  services: [
    {
      service: 'AI SEO',
      href: '/ai-seo-law-firms-california',
      headline: 'Rank across all 76 LA County neighborhoods',
      description:
        'When LA clients search "lawyer near me," we make sure they find you. Hyper-local SEO across Beverly Hills, DTLA, Long Beach, Hollywood, the Valley — plus bilingual content that captures Spanish-speaking LA.',
      bullets: [
        'Neighborhood-level landing pages (76 LA County areas)',
        'Spanish-language SEO + hreflang implementation',
        'Google AI Overviews & Local Pack optimization',
        'Citations across LA-specific legal directories',
      ],
    },
    {
      service: 'AI Web Development',
      href: '/ai-website-development-law-firms-california',
      headline: 'A new website that matches LA\'s standard',
      description:
        'Built for the LA market: modern design, sub-1.5s mobile load, AI intake in English and Spanish, and conversion paths engineered to turn local search traffic into booked consultations.',
      bullets: [
        'Modern, mobile-first design (78% of LA legal traffic is mobile)',
        'Bilingual AI intake (English + Spanish)',
        'Cinematic motion + clear conversion CTAs',
        'Built-in conversion tracking for Google + Meta',
      ],
    },
    {
      service: 'AI Marketing',
      href: '/ai-marketing-law-firms-california',
      headline: 'Multi-channel campaigns built for LA',
      description:
        'Google, Bing, Meta, and YouTube campaigns managed by AI in real time. Smart bidding by neighborhood, bilingual creative, and budget pacing that wins on cost while competitors overpay.',
      bullets: [
        'Bing arbitrage (30–40% lower CPC than Google)',
        'Bilingual ad creative across Google, Meta, YouTube',
        'Zip-code-level bid optimization',
        'Full-funnel attribution + transparent reporting',
      ],
    },
  ],
  process: [
    {
      number: '01',
      title: 'Audit & Discovery',
      description:
        'We analyze your current LA visibility, ad spend, website, and competitors across all 76 LA County submarkets. You get a clear report on where your budget is leaking and the biggest opportunities to win more cases.',
      duration: 'Days 1–5',
    },
    {
      number: '02',
      title: 'Strategy & Plan',
      description:
        'We map your ideal LA clients, target practice areas, and the neighborhoods most likely to send qualified cases. Then we build a custom growth plan covering SEO, paid ads, website, and intake.',
      duration: 'Week 2',
    },
    {
      number: '03',
      title: 'Build & Launch',
      description:
        'New website, on-page SEO, Google + Bing + Meta campaigns, bilingual creative, and AI-powered intake — shipped in weeks, not months. LA leads start flowing immediately after launch.',
      duration: 'Weeks 3–6',
    },
    {
      number: '04',
      title: 'Grow & Optimize',
      description:
        'Continuous tracking, weekly campaign optimization, and monthly reporting. As LA leads come in, we refine targeting, content, and conversion paths so results compound month over month.',
      duration: 'Ongoing',
    },
  ],
  whyUs: [
    {
      stat: '7 days',
      statLabel: 'From signup to live',
      title: 'Speed without compromise',
      description:
        'AI-engineered workflows let us launch new sites and ad campaigns in days — not the months traditional agencies need. You see LA traffic and leads in week one.',
    },
    {
      stat: '76',
      statLabel: 'LA neighborhoods covered',
      title: 'Built specifically for LA County',
      description:
        'Beverly Hills, Long Beach, Hollywood, the Valley, DTLA — every campaign and content engine is calibrated for the specific LA submarket you serve, in English and Spanish.',
    },
    {
      stat: '−42%',
      statLabel: 'Avg cost per lead',
      title: 'Measurable ROI, not vanity metrics',
      description:
        'Every dollar of LA ad spend is tracked, attributed, and optimized in real time. You see exactly which neighborhoods, channels, and keywords deliver consults — and which to cut.',
    },
    {
      stat: '95%',
      statLabel: 'Client retention rate',
      title: 'Long-term partnership',
      description:
        'We win when you win. Our LA clients stay because results compound — more rankings, more leads, more cases — month after month, quarter after quarter.',
    },
  ],
  marketIntel: {
    headline: 'The LA legal market in numbers',
    summary:
      'Los Angeles is the largest, most competitive, and most diverse legal market in California. Winning here requires precision — not brute-force budget. Local SEO depth and bilingual reach are the real differentiators.',
    stats: [
      { label: 'Avg CPC range (PI)', value: '$18 – $42' },
      { label: 'Bing CPC delta', value: '−34%' },
      { label: 'Mobile traffic share', value: '78%' },
      { label: 'Bilingual conversion lift', value: '+3.1×' },
    ],
    competitionLevel: 'Very High',
    competitionColor: '#EF4444',
    topPractices: ['Personal Injury', 'Family Law', 'Employment', 'Criminal Defense', 'Immigration', 'Estate Planning'],
    opportunity:
      'Bilingual content + neighborhood-level SEO are the most underexploited edges in LA. Firms that move first lock in 18–24 months of cost arbitrage before competitors catch up.',
  },
  closing: {
    headline: 'Ready to grow your Los Angeles firm?',
    subhead:
      'Get a free audit of your website, search visibility, and ad spend across LA County — and a clear plan for how we\'d bring you more clients.',
  },
  faqs: [
    {
      q: 'Do you work with all law firm practice areas in LA?',
      a: 'Yes. We work with personal injury, family law, criminal defense, employment, estate planning, business, immigration, entertainment, and more. Every campaign is calibrated to your specific practice — and to the LA neighborhoods most likely to send those cases.',
    },
    {
      q: 'How long before we see leads from SEO and ads?',
      a: 'Paid ads (Google, Bing, Meta) start delivering qualified LA leads within 7–14 days of launch. SEO builds compounding momentum from month two and typically delivers strong organic flow by month four to six.',
    },
    {
      q: 'Do you handle Spanish-language SEO and advertising?',
      a: 'Yes — and it\'s a core part of every LA engagement. Native-quality Spanish content, bilingual landing pages, Spanish-language ad copy, and hreflang-correct site architecture. 47% of LA County is Hispanic; we treat it as a primary market, not a translation.',
    },
    {
      q: 'Do you build the website, or do we keep our current one?',
      a: 'Most of our LA clients launch a new website with us — modern, mobile-first, fast, and engineered for conversions. If your existing site is solid, we can also optimize it instead. We\'ll recommend whichever path delivers more cases for less spend.',
    },
    {
      q: 'How much does a typical LA engagement cost?',
      a: 'Engagements are scoped to your firm size, target neighborhoods, and growth goals. Most LA firms invest between $3k–$10k/month for ongoing SEO + paid + website management, with a one-time setup for new sites. Free audit included before any commitment.',
    },
    {
      q: 'Will the content be reviewed by attorneys?',
      a: 'Yes. AI accelerates content production, but every page, ad, and FAQ is reviewed for legal accuracy and California Bar compliance before it goes live. We coordinate with your team or our network of practicing attorneys depending on what you prefer.',
    },
    {
      q: 'How is performance reported, and how often?',
      a: 'You get a real-time dashboard showing rankings, traffic, leads, and ad ROI by LA neighborhood 24/7. Plus a detailed monthly report with insights and a strategy review call. No black-box reporting — you see exactly where every dollar lands.',
    },
    {
      q: 'What does the free audit include?',
      a: 'A full review of your current website performance, search visibility across LA County, ad spend efficiency, top LA competitor analysis, and a prioritized action plan with projected lead lift. Delivered in 48 hours, no commitment required.',
    },
  ],
}

/* ────────────────────────────────────────────────────────────── */
/*  SAN DIEGO — Cyan/Teal · Coastal · Military + Family + PI       */
/* ────────────────────────────────────────────────────────────── */
const sanDiego: City = {
  slug: 'san-diego',
  name: 'San Diego',
  shortName: 'SD',
  region: 'Southern California · San Diego County',
  metaTitle: 'AI Marketing Agency for San Diego Law Firms | SEO, Web Dev, Ads',
  metaDescription:
    'AI-powered SEO, web development, and marketing for San Diego law firms. Get found across SD County, fill your pipeline with qualified consults, and grow case load month over month.',
  theme: 'dark',
  heroImage: '/city-sd-hero.jpg',
  heroVideo: '/galaxy-stars.mp4',
  sectionBackgrounds: {
    painPoints: '/bg-globe-rings.jpg',
    whatWeDo: '/ai-seo-hero.mp4',
    howWeWork: '/blackhole.mp4',
    whyUs: '/city-sd-hero.jpg',
    testimonials: '/world-orbit.jpg',
    faq: '/world-frost.jpg',
    closing: '/galaxy-stars.mp4',
  },
  accent: {
    primary: '#22D3EE',
    primaryRgb: '34,211,238',
    secondary: '#67E8F9',
    glow: 'rgba(34,211,238,0.45)',
    gradient: 'linear-gradient(135deg, #22D3EE 0%, #0E7490 100%)',
  },
  badgeLabel: 'SAN DIEGO · NORTH & SOUTH COUNTY',
  eyebrow: 'AI MARKETING AGENCY',
  headline: 'Get More Cases for Your',
  headlineAccent: 'San Diego Law Firm.',
  subhead:
    'We do three things to grow your law firm: (1) AI-powered SEO to rank you on Google, Maps, and AI Overviews. (2) AI marketing campaigns on Google, Bing, Meta, and YouTube to fill your pipeline with qualified leads. (3) A new high-converting website that turns visitors into booked consultations. Built specifically for San Diego. Measurable ROI. Fast turnaround.',
  primaryCta: { label: 'Get San Diego Audit', href: '#contact' },
  secondaryCta: { label: 'Book Strategy Call', href: 'tel:+18336675253' },
  heroStats: [
    { label: 'SD County Population', value: '3.3M' },
    { label: 'Avg CPL Reduction', value: '−38%' },
    { label: 'Active SD Law Firms', value: '4.2k+' },
    { label: 'Mobile Traffic Share', value: '82%' },
  ],
  painPoints: [
    {
      pain: 'Clients searching in San Diego can\'t find your firm online',
      detail:
        'San Diego has 4,200+ active law firms competing for the same keywords. Without strong local SEO across SD\'s 18 submarkets, your firm gets buried beneath bigger firms, directories, and out-of-area competitors.',
      solution:
        'Hyper-local SEO across every SD submarket — Coronado, Chula Vista, La Jolla, Pacific Beach, North County — plus AI Overview optimization and Google Maps presence that puts you in front of SD clients exactly when they search.',
      metric: '+3.2× SD-area organic traffic in 90 days',
    },
    {
      pain: 'Ad budget burning fast without delivering qualified consults',
      detail:
        'San Diego is competitive — and seasonal. Tourism surges, military deployments, summer DUI peaks — generic campaigns miss the timing and waste budget on tire-kickers all year long.',
      solution:
        'AI-managed Google, Bing, Meta, and YouTube campaigns with intent-based targeting, geo precision, seasonal bid pacing, and real-time optimization. Every dollar spent on someone actually ready to hire a lawyer.',
      metric: '−38% cost per qualified lead',
    },
    {
      pain: 'Visitors land on your site — and leave without calling',
      detail:
        'A slow, dated, or confusing website kills consultations. 82% of SD legal traffic is mobile. An unconverting site loses the majority of visitors before they ever fill out a form.',
      solution:
        'A modern, mobile-first website with intelligent AI intake forms (English + Spanish), fast load times, clear CTAs, and trust signals that turn SD browsers into booked consultations.',
      metric: '+58% website-to-consult conversion',
    },
  ],
  services: [
    {
      service: 'AI SEO',
      href: '/ai-seo-law-firms-california',
      headline: 'Get found across San Diego County',
      description:
        'When SD clients search "lawyer near me," we make sure they find you. Hyper-local SEO across every SD submarket plus bilingual content for the Spanish-speaking 38% of South County.',
      bullets: [
        'Submarket landing pages (Coronado, Chula Vista, La Jolla, North County)',
        'Spanish-language SEO + hreflang implementation',
        'Google AI Overviews & Local Pack optimization',
        'Reviews, citations, and authority building',
      ],
    },
    {
      service: 'AI Web Development',
      href: '/ai-website-development-law-firms-california',
      headline: 'A new website that converts SD visitors',
      description:
        'Built for the SD market: modern mobile-first design, AI intake in English & Spanish, and conversion paths engineered to turn local search traffic into booked consultations.',
      bullets: [
        'Modern, mobile-first design (82% of SD legal traffic is mobile)',
        'Bilingual AI intake (English + Spanish)',
        'Verifiable case-result modules + clear CTAs',
        'Built-in conversion tracking for Google + Meta',
      ],
    },
    {
      service: 'AI Marketing',
      href: '/ai-marketing-law-firms-california',
      headline: 'Smart campaigns built for San Diego',
      description:
        'Google, Bing, Meta, and YouTube campaigns managed by AI in real time. Seasonal bid pacing, geo precision around bases and courthouses, and bilingual creative — all calibrated for SD.',
      bullets: [
        'Seasonal AI bid pacing for SD demand cycles',
        'Geo-fenced ads (bases, courthouses, border crossings)',
        'Bilingual Google + Meta creative pipelines',
        'Full-funnel attribution + transparent reporting',
      ],
    },
  ],
  process: [
    {
      number: '01',
      title: 'Audit & Discovery',
      description:
        'We analyze your current SD visibility, ad spend, website, and competitors across all SD submarkets. You get a clear report on what\'s leaking budget and the biggest opportunities to win more cases.',
      duration: 'Days 1–5',
    },
    {
      number: '02',
      title: 'Strategy & Plan',
      description:
        'We map your ideal SD clients, target practice areas, and submarkets most likely to send qualified cases. Then we build a custom growth plan covering SEO, paid ads, website, and intake.',
      duration: 'Week 2',
    },
    {
      number: '03',
      title: 'Build & Launch',
      description:
        'New website, on-page SEO, Google + Bing + Meta campaigns, bilingual creative, and AI intake — shipped in weeks, not months. SD leads start flowing immediately after launch.',
      duration: 'Weeks 3–6',
    },
    {
      number: '04',
      title: 'Grow & Optimize',
      description:
        'Continuous tracking, weekly campaign optimization, and monthly reporting. As SD leads come in, we refine targeting, content, and conversion paths so results compound month over month.',
      duration: 'Ongoing',
    },
  ],
  whyUs: [
    {
      stat: '7 days',
      statLabel: 'From signup to live',
      title: 'Speed without compromise',
      description:
        'AI-engineered workflows let us launch new sites and ad campaigns in days — not the months traditional agencies need. You see SD traffic and leads in week one.',
    },
    {
      stat: '18',
      statLabel: 'SD submarkets covered',
      title: 'Built specifically for San Diego',
      description:
        'Coronado, La Jolla, Chula Vista, Pacific Beach, North County — every campaign and content engine is calibrated for the SD submarket you serve, in English and Spanish.',
    },
    {
      stat: '−38%',
      statLabel: 'Avg cost per lead',
      title: 'Measurable ROI, not vanity metrics',
      description:
        'Every dollar of SD ad spend is tracked, attributed, and optimized in real time. You see exactly which submarkets, channels, and keywords deliver consults — and which to cut.',
    },
    {
      stat: '95%',
      statLabel: 'Client retention rate',
      title: 'Long-term partnership',
      description:
        'We win when you win. Our SD clients stay because results compound — more rankings, more leads, more cases — month after month, quarter after quarter.',
    },
  ],
  marketIntel: {
    headline: 'The San Diego legal market in numbers',
    summary:
      'San Diego is medium-competition with high case quality. Your edge here is local fluency — submarkets, seasons, and bilingual reach — not raw ad budget.',
    stats: [
      { label: 'Avg CPC range', value: '$14 – $35' },
      { label: 'Mobile traffic share', value: '82%' },
      { label: 'Spanish search share', value: '38%' },
      { label: 'Seasonal demand lift', value: '+47%' },
    ],
    competitionLevel: 'Medium',
    competitionColor: '#FBBF24',
    topPractices: ['Personal Injury', 'Family Law', 'Criminal Defense', 'DUI', 'Immigration', 'Estate Planning'],
    opportunity:
      'Bilingual content + submarket-level SEO + seasonal AI bid pacing are the most underexploited edges in SD. Firms that move first lock in 18–24 months of cost arbitrage before competitors catch up.',
  },
  closing: {
    headline: 'Ready to grow your San Diego firm?',
    subhead:
      'Get a free audit of your website, search visibility, and ad spend across SD County — and a clear plan for how we\'d bring you more clients.',
  },
  faqs: [
    {
      q: 'Do you work with all law firm practice areas in San Diego?',
      a: 'Yes. We work with personal injury, family law, criminal defense, DUI, employment, estate planning, business, immigration, and more. Every campaign is calibrated to your specific practice and to the SD submarkets most likely to send those cases.',
    },
    {
      q: 'How long before we see leads from SEO and ads?',
      a: 'Paid ads (Google, Bing, Meta) start delivering qualified SD leads within 7–14 days of launch. SEO builds compounding momentum from month two and typically delivers strong organic flow by month four to six.',
    },
    {
      q: 'Do you handle Spanish-language SEO and advertising?',
      a: 'Yes — and it\'s a core part of every SD engagement. Native-quality Spanish content, bilingual landing pages, Spanish-language ad copy, and hreflang-correct site architecture. South County is 38% Spanish-speaking; we treat it as a primary market, not a translation.',
    },
    {
      q: 'Do you build the website, or do we keep our current one?',
      a: 'Most of our SD clients launch a new website with us — modern, mobile-first, fast, and engineered for conversions. If your existing site is solid, we can also optimize it instead. We\'ll recommend whichever path delivers more cases for less spend.',
    },
    {
      q: 'How much does a typical SD engagement cost?',
      a: 'Engagements are scoped to your firm size, target submarkets, and growth goals. Most SD firms invest between $3k–$10k/month for ongoing SEO + paid + website management, with a one-time setup for new sites. Free audit included before any commitment.',
    },
    {
      q: 'Will the content be reviewed by attorneys?',
      a: 'Yes. AI accelerates content production, but every page, ad, and FAQ is reviewed for legal accuracy and California Bar compliance before it goes live. We coordinate with your team or our network of practicing attorneys depending on what you prefer.',
    },
    {
      q: 'How is performance reported, and how often?',
      a: 'You get a real-time dashboard showing rankings, traffic, leads, and ad ROI by SD submarket 24/7. Plus a detailed monthly report with insights and a strategy review call. No black-box reporting — you see exactly where every dollar lands.',
    },
    {
      q: 'What does the free audit include?',
      a: 'A full review of your current website performance, search visibility across SD County, ad spend efficiency, top SD competitor analysis, and a prioritized action plan with projected lead lift. Delivered in 48 hours, no commitment required.',
    },
  ],
}

/* ────────────────────────────────────────────────────────────── */
/*  SAN FRANCISCO — Tech · Employment · IP · Electric Blue        */
/* ────────────────────────────────────────────────────────────── */
const sanFrancisco: City = {
  slug: 'san-francisco',
  name: 'San Francisco',
  shortName: 'SF',
  region: 'Northern California · Bay Area',
  metaTitle: 'AI Marketing Agency for San Francisco Law Firms | SEO, Web Dev, Ads',
  metaDescription:
    "AI-native marketing for San Francisco law firms. Win sophisticated tech and employment-law clients with technical credibility and intent-driven targeting.",
  heroImage: '/city-sf-hero.jpg',
  heroVideo: '/sf-saffron-globe.mp4',
  sectionBackgrounds: {
    painPoints: '/midjourney-mono.mp4',
    whatWeDo: '/bg-monolith-gold.png',
    howWeWork: '/midjourney-mono.mp4',
    whyUs: '/silver-aura.mp4',
    testimonials: '/world-light.jpg',
    faq: '/bg-monolith-night.png',
    closing: '/sf-saffron-globe.mp4',
  },
  accent: {
    primary: '#D4A02A',
    primaryRgb: '212,160,42',
    secondary: '#F4D17A',
    glow: 'rgba(212,160,42,0.45)',
    gradient: 'linear-gradient(135deg, #D4A02A 0%, #B07814 100%)',
  },
  badgeLabel: 'SAN FRANCISCO · BAY AREA',
  eyebrow: 'AI MARKETING AGENCY',
  headline: 'Get More Cases for Your',
  headlineAccent: 'San Francisco Law Firm.',
  subhead:
    'We do three things to grow your law firm: (1) AI-powered SEO to rank you on Google, Maps, and AI Overviews. (2) AI marketing campaigns on Google, Bing, Meta, and YouTube to fill your pipeline with qualified leads. (3) A new high-converting website that turns visitors into booked consultations. Built specifically for San Francisco. Measurable ROI. Fast turnaround.',
  primaryCta: { label: 'Get SF Market Audit', href: '#contact' },
  secondaryCta: { label: 'Book Strategy Call', href: 'tel:+18336675253' },
  heroStats: [
    { label: 'SF Bay Area Population', value: '7.7M' },
    { label: 'Avg CPL Reduction', value: '−51%' },
    { label: 'Active Bay Area Firms', value: '8.5k+' },
    { label: 'Avg Lead Volume Lift', value: '+3.4×' },
  ],
  painPoints: [
    {
      pain: 'Clients searching in SF can\'t find your firm online',
      detail:
        'Most San Francisco law firms rank below page one for the keywords that actually drive cases. Your prospects land on big-firm sites, directory listings, or competitors with deeper SEO — and never reach you.',
      solution:
        'AI-powered local SEO that ranks your firm in Google Search, Google Maps, and AI Overviews for the terms your real clients use. Built specifically around SF neighborhoods, practice areas, and search intent.',
      metric: '+3.4× organic traffic in 90 days',
    },
    {
      pain: 'Ad spend disappearing without delivering qualified consults',
      detail:
        'SF is one of the most expensive ad markets in California. Without smart targeting, your budget burns on clicks from tire-kickers, DIY researchers, and unqualified prospects — leaving few real consults at the end of the month.',
      solution:
        'AI-managed Google, Bing, Meta, and YouTube campaigns with intent-based targeting, geo precision, and real-time bid optimization. Every dollar focused on people actually ready to hire a lawyer.',
      metric: '−51% cost per qualified lead',
    },
    {
      pain: 'Visitors land on your website — and leave without calling',
      detail:
        'A slow, dated, or confusing website kills consultations. Even when SEO and ads send you traffic, an unconverting site quietly loses 80%+ of visitors before they ever pick up the phone or fill out a form.',
      solution:
        'A new AI-built website engineered for conversions — fast load, clear CTAs, intelligent intake forms, mobile-first design, and trust signals that turn browsers into booked consults.',
      metric: '+58% website-to-consult conversion',
    },
  ],
  services: [
    {
      service: 'AI SEO',
      href: '/ai-seo-law-firms-california',
      headline: 'Get found by SF clients searching for help',
      description:
        'When someone in San Francisco searches for a lawyer, we make sure they find you. AI-powered local SEO that ranks your firm in Google Search, Google Maps, and the new AI Overviews — across every practice area you serve.',
      bullets: [
        'Local SEO across San Francisco neighborhoods + Bay Area',
        'Google Maps + Local Pack optimization',
        'Google AI Overview & ChatGPT citation strategy',
        'Reviews, citations, and authority building',
      ],
    },
    {
      service: 'AI Web Development',
      href: '/ai-website-development-law-firms-california',
      headline: 'A new website that turns visitors into clients',
      description:
        'Your website is your most important salesperson. We build modern, fast, mobile-optimized law firm sites with intelligent intake forms and clear conversion paths — designed to turn search traffic into booked consultations.',
      bullets: [
        'Modern, mobile-first design built for conversions',
        'Fast load times + perfect Core Web Vitals',
        'AI-powered intake forms + chat',
        'Clear CTAs, trust signals, and case-result modules',
      ],
    },
    {
      service: 'AI Marketing',
      href: '/ai-marketing-law-firms-california',
      headline: 'Smarter ads that bring in qualified cases',
      description:
        'Multi-channel campaigns across Google, Bing, Meta, and YouTube — managed by AI, optimized in real time, and built around what actually books consults. No wasted spend, no vanity metrics.',
      bullets: [
        'Google + Bing search ads with intent-based targeting',
        'Meta & YouTube ads for awareness + retargeting',
        'Real-time bid optimization & smart budget pacing',
        'Full-funnel attribution & transparent reporting',
      ],
    },
  ],
  process: [
    {
      number: '01',
      title: 'Audit & Discovery',
      description:
        'We analyze your current website, search rankings, ad spend, and competitors in San Francisco. You get a clear report on what\'s working, what\'s leaking budget, and the biggest opportunities to win more clients.',
      duration: 'Days 1–5',
    },
    {
      number: '02',
      title: 'Strategy & Plan',
      description:
        'We map your ideal clients, target practice areas, and SF submarkets. Then we build a custom growth plan covering SEO, paid ads, and your website — with clear goals and timelines.',
      duration: 'Week 2',
    },
    {
      number: '03',
      title: 'Build & Launch',
      description:
        'New website, on-page SEO, Google + Bing + Meta campaigns, intake automation. AI accelerates execution so you go live in weeks, not months — and leads start flowing immediately.',
      duration: 'Weeks 3–6',
    },
    {
      number: '04',
      title: 'Grow & Optimize',
      description:
        'Continuous tracking, weekly optimization, and monthly reporting. As leads come in, we refine the targeting, content, and conversion paths so results compound month over month.',
      duration: 'Ongoing',
    },
  ],
  whyUs: [
    {
      stat: '7 days',
      statLabel: 'From signup to live',
      title: 'Speed without compromise',
      description:
        'AI-engineered workflows let us launch new sites and ad campaigns in days — not the months traditional agencies need. You see traffic and leads in week one.',
    },
    {
      stat: '199+',
      statLabel: 'CA cities covered',
      title: 'Built specifically for California',
      description:
        'We don\'t do generic playbooks. Every campaign and content engine is calibrated for California search behavior, local competition, and the specific market you serve.',
    },
    {
      stat: '−51%',
      statLabel: 'Avg cost per lead',
      title: 'Measurable ROI, not vanity metrics',
      description:
        'Every dollar of ad spend is tracked, attributed, and optimized in real time. You see exactly which channels deliver consults — and which to cut. No black-box reporting.',
    },
    {
      stat: '95%',
      statLabel: 'Client retention rate',
      title: 'Long-term partnership, not project work',
      description:
        'We win when you win. Our clients stay because results compound — more rankings, more leads, more cases — month after month, quarter after quarter.',
    },
  ],
  marketIntel: {
    headline: 'The San Francisco legal market in numbers',
    summary:
      'San Francisco is one of the most competitive and expensive legal markets in California. Winning here means smart targeting, strong local SEO, and a website that actually converts the traffic you pay for.',
    stats: [
      { label: 'Avg CPC range', value: '$22 – $48' },
      { label: 'Mobile traffic share', value: '76%' },
      { label: 'Avg case value uplift', value: '+38%' },
      { label: 'Local search share', value: '64%' },
    ],
    competitionLevel: 'High',
    competitionColor: '#F97316',
    topPractices: ['Personal Injury', 'Family Law', 'Employment', 'Criminal Defense', 'Estate Planning', 'Business Law'],
    opportunity:
      'Most SF law firms are still relying on outdated websites and broad-match Google Ads. Firms that move first on AI-driven SEO, conversion-focused websites, and smart paid campaigns capture the market before competitors catch up.',
  },
  closing: {
    headline: 'Ready to grow your San Francisco firm?',
    subhead:
      'Get a free audit of your website, search visibility, and ad spend — and a clear plan for how we\'d bring you more clients in San Francisco.',
  },
  faqs: [
    {
      q: 'Do you work with all law firm practice areas in San Francisco?',
      a: 'Yes. We work with personal injury, family law, criminal defense, employment, estate planning, business, immigration, and more. Every campaign is calibrated to your specific practice — but the system works across the board.',
    },
    {
      q: 'How long before we see leads from SEO and ads?',
      a: 'Paid ads (Google, Bing, Meta) start delivering qualified leads within 7–14 days of launch. SEO builds compounding momentum from month two and typically delivers strong organic lead flow by month four to six.',
    },
    {
      q: 'How is this different from a traditional marketing agency?',
      a: 'We use AI to do in days what traditional agencies take months for — site builds, content production, ad optimization, intake, reporting. You get faster results, lower costs, and full transparency on what\'s working.',
    },
    {
      q: 'Do you build the website, or do we keep our current one?',
      a: 'Most of our SF clients launch a new website with us — modern, fast, mobile-optimized, and engineered for conversions. If your existing site is solid, we can also optimize it instead. We\'ll recommend whichever path delivers more cases for less spend.',
    },
    {
      q: 'How much does a typical engagement cost?',
      a: 'Engagements are scoped to your firm size, growth goals, and competitive landscape. Most San Francisco firms invest between $3k–$10k/month for ongoing SEO + paid + website management, with a one-time setup for new sites. Free audit included before any commitment.',
    },
    {
      q: 'Will the content be reviewed by attorneys?',
      a: 'Yes. AI accelerates content production, but every page, ad, and FAQ is reviewed for legal accuracy and California Bar compliance before it goes live. We coordinate with your team or our network of practicing attorneys depending on what you prefer.',
    },
    {
      q: 'How is performance reported, and how often?',
      a: 'You get a real-time dashboard showing rankings, traffic, leads, and ad ROI 24/7. Plus a detailed monthly report with insights, recommendations, and a strategy review call. No black-box reporting — you see exactly where every dollar lands.',
    },
    {
      q: 'What does the free audit include?',
      a: 'A full review of your current website performance, search visibility across SF, ad spend efficiency, top competitor analysis, and a prioritized action plan with projected lead lift. Delivered in 48 hours, no commitment required.',
    },
  ],
}

/* ────────────────────────────────────────────────────────────── */
/*  SACRAMENTO — Warm Orange · State Capital · Family · Estate    */
/* ────────────────────────────────────────────────────────────── */
const sacramento: City = {
  slug: 'sacramento',
  name: 'Sacramento',
  shortName: 'SAC',
  region: 'Central Valley · State Capital',
  metaTitle: 'AI Marketing Agency for Sacramento Law Firms | SEO, Web Dev, Ads',
  metaDescription:
    'AI-powered SEO, web development, and marketing for Sacramento law firms. Get found across the Central Valley, fill your pipeline, and grow case load month over month.',
  theme: 'dark',
  heroImage: '/bg-saturn.png',
  heroVideo: '/nebula-v14.mp4',
  sectionBackgrounds: {
    painPoints: '/bg-desert-reader.png',
    whatWeDo: '/nebula-v12.mp4',
    howWeWork: '/nebula-v13.mp4',
    whyUs: '/bg-california.jpg',
    testimonials: '/nebula-v11.mp4',
    faq: '/world-light.jpg',
    closing: '/marketing-aura.mp4',
  },
  accent: {
    primary: '#FF8C42',
    primaryRgb: '255,140,66',
    secondary: '#FFB07A',
    glow: 'rgba(255,140,66,0.45)',
    gradient: 'linear-gradient(135deg, #FF8C42 0%, #E6753A 100%)',
  },
  badgeLabel: 'SACRAMENTO · STATE CAPITAL',
  eyebrow: 'AI MARKETING AGENCY',
  headline: 'Get More Cases for Your',
  headlineAccent: 'Sacramento Law Firm.',
  subhead:
    'We do three things to grow your law firm: (1) AI-powered SEO to rank you on Google, Maps, and AI Overviews. (2) AI marketing campaigns on Google, Bing, Meta, and YouTube to fill your pipeline with qualified leads. (3) A new high-converting website that turns visitors into booked consultations. Built specifically for Sacramento. Measurable ROI. Fast turnaround.',
  primaryCta: { label: 'Get Sacramento Audit', href: '#contact' },
  secondaryCta: { label: 'Book Strategy Call', href: 'tel:+18336675253' },
  heroStats: [
    { label: 'Sac Metro Population', value: '2.4M' },
    { label: 'Avg CPL Reduction', value: '−40%' },
    { label: 'Active Sac Law Firms', value: '2.8k+' },
    { label: 'Organic Lead Share', value: '60%+' },
  ],
  painPoints: [
    {
      pain: 'Sacramento clients can\'t find your firm in local search',
      detail:
        'Sacramento and the Central Valley have strong local-search behavior, but most firms rank below page one. Your prospects find directories, mega-firms, and out-of-area competitors — not you.',
      solution:
        'Hyper-local SEO across the Sacramento Metro — Elk Grove, Roseville, Folsom, Davis, West Sac — plus AI Overview optimization and Google Maps presence that puts you in front of Sacramento clients exactly when they search.',
      metric: '+3.5× Sacramento-area organic traffic in 90 days',
    },
    {
      pain: 'Ad spend disappears on the wrong searchers',
      detail:
        'Sacramento\'s lower CPCs feel forgiving — but a 30% wasted-spend rate is fatal in this market. Generic campaigns leak budget on tire-kickers and DIY researchers all month long, leaving few real consults.',
      solution:
        'AI-managed Google, Bing, Meta, and YouTube campaigns with intent-based targeting, geo precision, and real-time bid optimization. Every dollar focused on someone actually ready to hire a lawyer.',
      metric: '−40% cost per qualified lead',
    },
    {
      pain: 'Visitors land on your site — and bounce without contacting you',
      detail:
        'Sacramento clients filter heavily on pricing transparency, reviews, and trust signals. A site without those — or one that loads slowly on mobile — loses 80%+ of visitors before they ever pick up the phone.',
      solution:
        'A modern, mobile-first website with transparent pricing, AI intake forms, clear CTAs, review/case-result modules, and trust signals that turn Sacramento browsers into booked consultations.',
      metric: '+62% website-to-consult conversion',
    },
  ],
  services: [
    {
      service: 'AI SEO',
      href: '/ai-seo-law-firms-california',
      headline: 'Get found across the Sacramento Metro',
      description:
        'When Sacramento clients search for a lawyer, we make sure they find you. Hyper-local SEO across every Sac submarket plus bilingual content for South Sac and Yolo County.',
      bullets: [
        'Submarket landing pages (Elk Grove, Roseville, Folsom, Davis)',
        'Bilingual SEO for South Sac + Yolo County',
        'Google AI Overviews & Local Pack optimization',
        'Reputation + review schema integration',
      ],
    },
    {
      service: 'AI Web Development',
      href: '/ai-website-development-law-firms-california',
      headline: 'A new website built to convert Sacramento',
      description:
        'Built for the Sacramento market: clear pricing, transparent process, mobile-first design, AI intake, and trust signals — engineered to turn local search traffic into booked consultations.',
      bullets: [
        'Transparent pricing + cost calculators',
        'Mobile-first design + sub-1.5s load times',
        'AI intake forms with case-fit triage',
        'Built-in conversion tracking for Google + Meta',
      ],
    },
    {
      service: 'AI Marketing',
      href: '/ai-marketing-law-firms-california',
      headline: 'Disciplined campaigns built for Sacramento',
      description:
        'Multi-channel campaigns across Google, Bing, Meta, and YouTube — managed by AI, optimized in real time, and built around what books consults. SEO-led growth with paid amplification.',
      bullets: [
        'SEO-led growth with paid amplification',
        'Bing arbitrage (high state-worker share)',
        'Retargeting + email nurture for long decision cycles',
        'Full-funnel attribution + transparent reporting',
      ],
    },
  ],
  process: [
    {
      number: '01',
      title: 'Audit & Discovery',
      description:
        'We analyze your current Sacramento visibility, ad spend, website, and competitors across the Central Valley. You get a clear report on what\'s leaking budget and the biggest opportunities to win more cases.',
      duration: 'Days 1–5',
    },
    {
      number: '02',
      title: 'Strategy & Plan',
      description:
        'We map your ideal Sacramento clients, target practice areas, and the submarkets most likely to send qualified cases. Then we build a custom growth plan covering SEO, paid ads, website, and intake.',
      duration: 'Week 2',
    },
    {
      number: '03',
      title: 'Build & Launch',
      description:
        'New website, on-page SEO, Google + Bing + Meta campaigns, transparent pricing pages, and AI intake — shipped in weeks. Sacramento leads start flowing immediately after launch.',
      duration: 'Weeks 3–6',
    },
    {
      number: '04',
      title: 'Grow & Optimize',
      description:
        'Continuous tracking, weekly campaign optimization, and monthly reporting. As Sacramento leads come in, we refine targeting, content, and conversion paths so results compound month over month.',
      duration: 'Ongoing',
    },
  ],
  whyUs: [
    {
      stat: '7 days',
      statLabel: 'From signup to live',
      title: 'Speed without compromise',
      description:
        'AI-engineered workflows let us launch new sites and ad campaigns in days — not the months traditional agencies need. You see Sacramento traffic and leads in week one.',
    },
    {
      stat: '199+',
      statLabel: 'CA cities covered',
      title: 'Built specifically for California',
      description:
        'Sacramento, Elk Grove, Roseville, Folsom, Davis — every campaign and content engine is calibrated for the specific Sacramento submarket you serve, in English and Spanish.',
    },
    {
      stat: '−40%',
      statLabel: 'Avg cost per lead',
      title: 'Measurable ROI, not vanity metrics',
      description:
        'Every dollar of Sacramento ad spend is tracked, attributed, and optimized in real time. You see exactly which submarkets, channels, and keywords deliver consults — and which to cut.',
    },
    {
      stat: '95%',
      statLabel: 'Client retention rate',
      title: 'Long-term partnership',
      description:
        'We win when you win. Our Sacramento clients stay because results compound — more rankings, more leads, more cases — month after month, quarter after quarter.',
    },
  ],
  marketIntel: {
    headline: 'The Sacramento legal market in numbers',
    summary:
      'Sacramento is medium-competition with high-trust dynamics. Family law and government workers shape demand. Win on transparency, reviews, and disciplined spend.',
    stats: [
      { label: 'Avg CPC range', value: '$12 – $28' },
      { label: 'Bing usage (state workers)', value: '+22% vs avg' },
      { label: 'Review-driven decisions', value: '78%' },
      { label: 'Organic share (mature firms)', value: '60%+' },
    ],
    competitionLevel: 'Medium',
    competitionColor: '#FBBF24',
    topPractices: ['Family Law', 'Estate Planning', 'Personal Injury', 'Criminal Defense', 'Employment', 'Business Law'],
    opportunity:
      'Reputation + bilingual content + transparent pricing are the three biggest open lanes. Most Sacramento firms run only one of those.',
  },
  closing: {
    headline: 'Ready to grow your Sacramento firm?',
    subhead:
      'Get a free audit of your website, search visibility, and ad spend across the Central Valley — and a clear plan for how we\'d bring you more clients.',
  },
  faqs: [
    {
      q: 'Do you work with all law firm practice areas in Sacramento?',
      a: 'Yes. We work with family law, estate planning, personal injury, criminal defense, employment, business, immigration, and more. Every campaign is calibrated to your specific practice and to the Sacramento submarkets most likely to send those cases.',
    },
    {
      q: 'How long before we see leads from SEO and ads?',
      a: 'Paid ads (Google, Bing, Meta) start delivering qualified Sacramento leads within 7–14 days of launch. SEO builds compounding momentum from month two and typically delivers strong organic flow by month four to six.',
    },
    {
      q: 'Should we publish flat-fee pricing on the website?',
      a: 'In Sacramento, yes — at minimum publish ranges or a clear cost calculator. State workers and budget-conscious clients filter heavily on pricing transparency. Hiding it loses you clients before they ever see your case results.',
    },
    {
      q: 'Do you build the website, or do we keep our current one?',
      a: 'Most of our Sacramento clients launch a new website with us — modern, mobile-first, fast, and engineered for conversions. If your existing site is solid, we can also optimize it instead. We\'ll recommend whichever path delivers more cases for less spend.',
    },
    {
      q: 'How important are Google reviews in Sacramento?',
      a: 'Very. 78% of decisions in this market are influenced by Google review quality. We deploy AI-managed review request flows that ethically increase volume and average rating without violating ABA guidelines.',
    },
    {
      q: 'How much does a typical Sacramento engagement cost?',
      a: 'Engagements are scoped to your firm size, target submarkets, and growth goals. Most Sacramento firms invest between $2.5k–$8k/month for ongoing SEO + paid + website management, with a one-time setup for new sites. Free audit included before any commitment.',
    },
    {
      q: 'Will the content be reviewed by attorneys?',
      a: 'Yes. AI accelerates content production, but every page, ad, and FAQ is reviewed for legal accuracy and California Bar compliance before it goes live. We coordinate with your team or our network of practicing attorneys depending on what you prefer.',
    },
    {
      q: 'How is performance reported, and how often?',
      a: 'You get a real-time dashboard showing rankings, traffic, leads, and ad ROI by Sacramento submarket 24/7. Plus a detailed monthly report with insights and a strategy review call. No black-box reporting — you see exactly where every dollar lands.',
    },
  ],
}

/* ────────────────────────────────────────────────────────────── */
/*  SANTA BARBARA — Rose/Coral · Central Coast · HNW + Estate     */
/* ────────────────────────────────────────────────────────────── */
const santaBarbara: City = {
  slug: 'santa-barbara',
  name: 'Santa Barbara',
  shortName: 'SB',
  region: 'Central Coast · Wealth Belt',
  metaTitle: 'AI Marketing Agency for Santa Barbara Law Firms | SEO, Web Dev, Ads',
  metaDescription:
    'AI-powered SEO, web development, and marketing for Santa Barbara law firms. Get found, win qualified clients, and grow case load across SB County, Montecito, and Goleta.',
  theme: 'dark',
  heroImage: '/city-sb-hero.jpg',
  heroVideo: '/glowing-aura.mp4',
  sectionBackgrounds: {
    painPoints: '/bg-galaxy-shepherd.png',
    whatWeDo: '/bg-cosmic-swirl.mp4',
    howWeWork: '/nebula-v6.mp4',
    whyUs: '/nebula-v9.mp4',
    testimonials: '/marketing-hero.mp4',
    faq: '/city-sb-hero.jpg',
    closing: '/glowing-aura.mp4',
  },
  accent: {
    primary: '#F472B6',
    primaryRgb: '244,114,182',
    secondary: '#FBCFE8',
    glow: 'rgba(244,114,182,0.45)',
    gradient: 'linear-gradient(135deg, #F472B6 0%, #BE185D 100%)',
  },
  badgeLabel: 'SANTA BARBARA · MONTECITO · GOLETA',
  eyebrow: 'AI MARKETING AGENCY',
  headline: 'Get More High-Value Cases for Your',
  headlineAccent: 'Santa Barbara Law Firm.',
  subhead:
    'We do three things to grow your law firm: (1) AI-powered SEO to rank you on Google, Maps, and AI Overviews. (2) AI marketing campaigns across Google, LinkedIn, and premium publishers to support your referral funnel. (3) A new concierge-grade website that turns visitors and referred clients into high-value cases. Built specifically for Santa Barbara. Measurable ROI. Refined.',
  primaryCta: { label: 'Get Santa Barbara Audit', href: '#contact' },
  secondaryCta: { label: 'Book Strategy Call', href: 'tel:+18336675253' },
  heroStats: [
    { label: 'SB County Pop.', value: '450k' },
    { label: 'Avg Case Value', value: '$2M+' },
    { label: 'Mobile Traffic Share', value: '74%' },
    { label: 'Referral-Driven', value: '72%' },
  ],
  painPoints: [
    {
      pain: 'SB clients can\'t find your firm online when it matters',
      detail:
        'Santa Barbara is a small but high-stakes market. Search volume is lower than LA, but every qualified visitor matters. Without strong local SEO, your firm gets buried below directories, mega-firms, and out-of-area competitors.',
      solution:
        'Hyper-local SEO across SB County, Montecito, Goleta, and Hope Ranch — plus AI Overview optimization and Google Maps presence that puts you in front of SB clients exactly when they search.',
      metric: '+3.0× SB-area organic traffic in 90 days',
    },
    {
      pain: 'Referrals dominate — but referred clients still Google you',
      detail:
        'A wealth advisor or peer refers a client to your firm. Before they call, they Google you. If your website, reviews, or online presence doesn\'t reinforce the referral, the deal cools — quietly and permanently.',
      solution:
        'Premium-but-restrained website, AI-managed reviews, curated thought-leadership, and retargeting across LinkedIn and premium publishers. Every channel reinforces trust, so referred clients land and feel reassured.',
      metric: '+34% referral-to-retainer close rate',
    },
    {
      pain: 'Visitors land on your site — and judge you in seconds',
      detail:
        'SB clients evaluate you on their phone — at lunch, in their car, after dinner. A slow, dated, or templated site signals "small operation," even when your case results are world-class. 74% of SB legal traffic is mobile.',
      solution:
        'A concierge mobile-first website with sub-1.5s load, AI intake calibrated for sensitive HNW conversations, clear case results, and direct partner-line escalation for qualified inquiries.',
      metric: '+71% mobile consult booking rate',
    },
  ],
  services: [
    {
      service: 'AI SEO',
      href: '/ai-seo-law-firms-california',
      headline: 'Get found by every qualified SB client',
      description:
        'In a smaller market, every visitor counts. We build hyper-local SEO and depth content for the exact SB queries that lead to high-value cases — with bilingual reach for Goleta and the Coast.',
      bullets: [
        'Local SEO across SB, Montecito, Goleta, Hope Ranch',
        'Authority backlinks from premium press + advisor networks',
        'Google AI Overviews & Local Pack optimization',
        'Reviews, citations, and concierge schema',
      ],
    },
    {
      service: 'AI Web Development',
      href: '/ai-website-development-law-firms-california',
      headline: 'A concierge website that earns the retainer',
      description:
        'Premium materials, refined typography, calm motion. AI intake calibrated to HNW conversations. Mobile-first, fast, and trust-led — engineered to turn referred and search traffic into booked consults.',
      bullets: [
        'Concierge mobile UX (<1.5s LCP)',
        'AI intake for sensitive HNW conversations',
        'Direct partner-line escalation paths',
        'Privacy-first analytics + premium polish',
      ],
    },
    {
      service: 'AI Marketing',
      href: '/ai-marketing-law-firms-california',
      headline: 'Brand-led campaigns built for SB',
      description:
        'Strategic Google + Bing + LinkedIn + premium-publisher placements that support the referral funnel. AI-personalized nurture for long decision cycles, and full attribution across channels.',
      bullets: [
        'LinkedIn ABM + advisor-network presence',
        'Premium-publisher retargeting (WSJ, Bloomberg)',
        'AI email nurture for long sales cycles',
        'Multi-touch attribution + transparent reporting',
      ],
    },
  ],
  process: [
    {
      number: '01',
      title: 'Audit & Discovery',
      description:
        'We analyze your current SB visibility, ad spend, website, and competitors across the Central Coast. You get a clear report on where your budget leaks and the biggest opportunities to win more cases.',
      duration: 'Days 1–5',
    },
    {
      number: '02',
      title: 'Strategy & Plan',
      description:
        'We map your ideal SB clients, target practice areas, and submarkets most likely to send qualified, high-value cases. Then we build a custom growth plan covering SEO, paid, website, and intake.',
      duration: 'Week 2',
    },
    {
      number: '03',
      title: 'Build & Launch',
      description:
        'New concierge website, on-page SEO, Google + LinkedIn + premium-publisher campaigns, AI intake, and referral-validation flows — shipped in weeks. SB leads start flowing immediately after launch.',
      duration: 'Weeks 3–6',
    },
    {
      number: '04',
      title: 'Grow & Optimize',
      description:
        'Continuous tracking, weekly campaign optimization, and monthly reporting. As SB leads come in, we refine targeting, content, and conversion paths so high-value retainers compound month over month.',
      duration: 'Ongoing',
    },
  ],
  whyUs: [
    {
      stat: '7 days',
      statLabel: 'From signup to live',
      title: 'Speed without compromise',
      description:
        'AI-engineered workflows let us launch new sites and ad campaigns in days — not the months traditional agencies need. You see SB traffic and leads in week one.',
    },
    {
      stat: '199+',
      statLabel: 'CA cities covered',
      title: 'Built specifically for California',
      description:
        'We don\'t do generic playbooks. Every campaign and content engine is calibrated for Santa Barbara search behavior, the local advisor network, and the specific HNW practice you serve.',
    },
    {
      stat: '+34%',
      statLabel: 'Referral close rate',
      title: 'Measurable ROI on referrals',
      description:
        'Most SB cases come from referrals — but the digital experience either reinforces or undermines them. We engineer the digital footprint that closes referred clients.',
    },
    {
      stat: '95%',
      statLabel: 'Client retention rate',
      title: 'Long-term partnership',
      description:
        'We win when you win. Our SB clients stay because results compound — more rankings, more referred clients, higher-value retainers — quarter after quarter.',
    },
  ],
  marketIntel: {
    headline: 'The Santa Barbara legal market in numbers',
    summary:
      'Lower volume, exceptionally high case value, referral-driven funnel. The marketing job is to support — and validate — relationships, not replace them.',
    stats: [
      { label: 'Avg CPC range', value: '$8 – $24' },
      { label: 'Avg case value (Estate)', value: '$2M+' },
      { label: 'Referral-driven matters', value: '72%' },
      { label: 'Mobile traffic share', value: '74%' },
    ],
    competitionLevel: 'Medium',
    competitionColor: '#FBBF24',
    topPractices: ['Estate Planning', 'Family Law', 'Business Law', 'Real Estate', 'Trust Litigation', 'Personal Injury'],
    opportunity:
      'A premium website + AI-managed reviews + curated thought leadership beats every other lever in SB. Volume marketing wastes budget here — concierge digital wins.',
  },
  closing: {
    headline: 'Ready to grow your Santa Barbara firm?',
    subhead:
      'Get a free audit of your website, search visibility, and ad spend across SB County — and a clear plan for how we\'d bring you more high-value clients.',
  },
  faqs: [
    {
      q: 'Do you work with all law firm practice areas in Santa Barbara?',
      a: 'Yes. We work with estate planning, family law, business, real estate, trust litigation, personal injury, employment, and more. Every campaign is calibrated to your specific practice and the SB submarkets that send those cases.',
    },
    {
      q: 'How long before we see leads from SEO and ads?',
      a: 'Paid ads (Google, Bing, LinkedIn) start delivering qualified SB leads within 7–14 days of launch. SEO builds compounding momentum from month two and typically delivers strong organic flow by month four to six.',
    },
    {
      q: 'Should we even run paid ads in Santa Barbara?',
      a: 'Selectively. Cold-acquisition paid is often inefficient in SB. But retargeting, LinkedIn ABM, and premium-publisher placements directly support the referral funnel and dramatically improve close rates on referred prospects.',
    },
    {
      q: 'Do you build the website, or do we keep our current one?',
      a: 'Most of our SB clients launch a new concierge-grade website with us — premium, mobile-first, fast, and engineered for high-value conversions. If your existing site is solid, we can also optimize it. We\'ll recommend whichever path delivers more cases for less spend.',
    },
    {
      q: 'How much does a typical Santa Barbara engagement cost?',
      a: 'Engagements are scoped to your firm size and growth goals. Most SB firms invest between $3k–$10k/month for ongoing SEO + paid + concierge website management, with a one-time setup for new sites. Free audit included before any commitment.',
    },
    {
      q: 'Will the content be reviewed by attorneys?',
      a: 'Yes. AI accelerates content production, but every page, ad, and FAQ is reviewed for legal accuracy and California Bar compliance before it goes live. We coordinate with your team or our network of practicing attorneys depending on what you prefer.',
    },
    {
      q: 'How do you measure success in a low-volume market?',
      a: 'By case value and close rate, not raw click volume. We track referral-to-retainer conversion, average matter value, qualified inquiry rate, and brand-mention growth — the metrics that actually move profit in HNW practices.',
    },
    {
      q: 'What does the free audit include?',
      a: 'A full review of your current website performance, search visibility across SB County, ad spend efficiency, top SB competitor analysis, and a prioritized action plan with projected lead lift. Delivered in 48 hours, no commitment required.',
    },
  ],
}

/* ────────────────────────────────────────────────────────────── */
/*  ANAHEIM — Cyan/Violet · Orange County · Multilingual          */
/* ────────────────────────────────────────────────────────────── */
const anaheim: City = {
  slug: 'anaheim',
  name: 'Anaheim',
  shortName: 'OC',
  region: 'Orange County · OC Metro',
  metaTitle: 'AI Marketing Agency for Anaheim & Orange County Law Firms',
  metaDescription:
    'AI-powered SEO, web development, and marketing for Anaheim and Orange County law firms. Get found across all OC submarkets, in every language OC speaks, and grow case load.',
  theme: 'dark',
  heroImage: '/city-anaheim-hero.jpg',
  heroVideo: '/nebula-v10.mp4',
  sectionBackgrounds: {
    painPoints: '/city-anaheim-hero.jpg',
    whatWeDo: '/bg-cosmic-nebula.png',
    howWeWork: '/cosmic-nebula.mp4',
    whyUs: '/cosmic-nebula-swirl.mp4',
    testimonials: '/bg-dark-terrain.webp',
    faq: '/nebula-v7.mp4',
    closing: '/nebula-v10.mp4',
  },
  accent: {
    primary: '#06B6D4',
    primaryRgb: '6,182,212',
    secondary: '#67E8F9',
    glow: 'rgba(6,182,212,0.45)',
    gradient: 'linear-gradient(135deg, #06B6D4 0%, #6366F1 50%, #8B5CF6 100%)',
  },
  badgeLabel: 'ANAHEIM · ORANGE COUNTY',
  eyebrow: 'AI MARKETING AGENCY',
  headline: 'Get More Cases for Your',
  headlineAccent: 'Orange County Law Firm.',
  subhead:
    'We do three things to grow your law firm: (1) AI-powered SEO to rank you on Google, Maps, and AI Overviews — in English, Spanish, and Vietnamese. (2) AI marketing campaigns across every language OC searches in. (3) A new multilingual website that turns visitors into booked consultations. Built specifically for Orange County. Measurable ROI. Fast turnaround.',
  primaryCta: { label: 'Get OC Market Audit', href: '#contact' },
  secondaryCta: { label: 'Book Strategy Call', href: 'tel:+18336675253' },
  heroStats: [
    { label: 'Orange County Pop.', value: '3.2M' },
    { label: 'Bilingual Households', value: '46%' },
    { label: 'Avg CPL Reduction', value: '−45%' },
    { label: 'OC Active Law Firms', value: '6.5k+' },
  ],
  painPoints: [
    {
      pain: 'OC clients can\'t find your firm — especially in their language',
      detail:
        'Orange County is 46% bilingual: 35% Spanish, 7% Vietnamese, plus Korean and Arabic communities. Most OC law firms run English-only websites and ad campaigns, leaving 40%+ of qualified intent on the table.',
      solution:
        'Multilingual local SEO across all OC submarkets — Anaheim, Santa Ana, Garden Grove, Irvine, Huntington Beach — plus native-quality Spanish and Vietnamese content engines and Google AI Overview optimization.',
      metric: '+87% inquiry volume from multilingual content',
    },
    {
      pain: 'Ad spend disappears across the wrong audiences',
      detail:
        'OC has Disneyland tourists, family businesses, HNW residents, and immigrant communities — all with different needs. Generic campaigns chase clicks across all of them and fail every audience.',
      solution:
        'Multi-funnel AI campaigns: Spanish, Vietnamese, English-resident, and English-tourist — each with language-matched creative, geo precision, and real-time bid optimization.',
      metric: '−45% cost per qualified lead',
    },
    {
      pain: 'Visitors land on your site and bounce — language or design',
      detail:
        'A Spanish-speaking visitor hitting an English-only site bounces in seconds. So does a HNW Irvine client looking at a 2018-template website. OC\'s diversity demands a website that handles every audience.',
      solution:
        'A modern, native multilingual website with language detection, AI intake forms in all major OC languages, mobile-first design, and conversion paths calibrated for OC\'s specific audiences.',
      metric: '+62% website-to-consult conversion',
    },
  ],
  services: [
    {
      service: 'AI SEO',
      href: '/ai-seo-law-firms-california',
      headline: 'Get found across every OC submarket and language',
      description:
        'When OC clients search for a lawyer — in any language — we make sure they find you. Hyper-local SEO across all OC submarkets plus native multilingual content for Spanish, Vietnamese, Korean.',
      bullets: [
        'Submarket pages (Anaheim, Irvine, Santa Ana, Garden Grove, HB)',
        'Spanish + Vietnamese content engines (native, not translated)',
        'Google AI Overviews & Local Pack optimization',
        'Multilingual GBP + review schema',
      ],
    },
    {
      service: 'AI Web Development',
      href: '/ai-website-development-law-firms-california',
      headline: 'A native multilingual website that converts',
      description:
        'Native Spanish and Vietnamese versions, not auto-translations. Language detection, mobile-first design, AI intake in every major OC language, and conversion paths built for OC\'s specific audiences.',
      bullets: [
        'Native multilingual builds (Spanish + Vietnamese)',
        'AI intake with automatic language detection + routing',
        'Tourist-PI landing pages with remote-friendly process',
        'Mobile-first design (79% of OC legal traffic is mobile)',
      ],
    },
    {
      service: 'AI Marketing',
      href: '/ai-marketing-law-firms-california',
      headline: 'Multi-language campaigns built for OC',
      description:
        'Google, Bing, Meta, and YouTube campaigns in every language OC searches in — managed by AI, optimized in real time, and calibrated for OC\'s specific audiences.',
      bullets: [
        'Language-targeted Google + Bing + Meta',
        'Tourist-PI campaigns with out-of-state intent',
        'Multilingual creative pipelines (AI-maintained)',
        'Full-funnel attribution + transparent reporting',
      ],
    },
  ],
  process: [
    {
      number: '01',
      title: 'Audit & Discovery',
      description:
        'We analyze your current OC visibility, ad spend, website, and competitors across all OC submarkets — and across all languages OC speaks. You get a clear report on the biggest gaps.',
      duration: 'Days 1–5',
    },
    {
      number: '02',
      title: 'Strategy & Plan',
      description:
        'We map your ideal OC clients, target practice areas, languages, and submarkets. Then we build a custom multilingual growth plan covering SEO, paid ads, website, and intake.',
      duration: 'Week 2',
    },
    {
      number: '03',
      title: 'Build & Launch',
      description:
        'Native multilingual website, on-page SEO, Google + Bing + Meta campaigns in 2–4 languages, AI intake — shipped in weeks. OC leads start flowing immediately after launch.',
      duration: 'Weeks 3–6',
    },
    {
      number: '04',
      title: 'Grow & Optimize',
      description:
        'Continuous tracking, weekly campaign optimization, and monthly reporting by language and submarket. As OC leads come in, we refine targeting and content so results compound month over month.',
      duration: 'Ongoing',
    },
  ],
  whyUs: [
    {
      stat: '7 days',
      statLabel: 'From signup to live',
      title: 'Speed without compromise',
      description:
        'AI-engineered workflows let us launch new sites and ad campaigns in days — not the months traditional agencies need. You see OC traffic and leads in week one.',
    },
    {
      stat: '4 langs',
      statLabel: 'Spanish · Vietnamese · Korean · English',
      title: 'Native multilingual depth',
      description:
        'OC speaks four major languages and we market in all of them — natively, not via translation plugins. Every language gets its own content engine, ad creative, and intake flow.',
    },
    {
      stat: '−45%',
      statLabel: 'Avg cost per lead',
      title: 'Measurable ROI by language',
      description:
        'Every dollar of OC ad spend is tracked, attributed, and optimized in real time — by language and submarket. You see exactly which audiences and keywords deliver consults.',
    },
    {
      stat: '95%',
      statLabel: 'Client retention rate',
      title: 'Long-term partnership',
      description:
        'We win when you win. Our OC clients stay because results compound — more rankings, more leads, more cases — across every audience, every quarter.',
    },
  ],
  marketIntel: {
    headline: 'The Orange County legal market in numbers',
    summary:
      'OC is competitive but fragmented. The firm that builds true multilingual depth and segments OC\'s diverse audiences — tourists, residents, family businesses, HNW — wins disproportionately.',
    stats: [
      { label: 'Avg CPC range', value: '$15 – $38' },
      { label: 'Multilingual content lift', value: '+87%' },
      { label: 'Bilingual households', value: '46%' },
      { label: 'Mobile traffic share', value: '79%' },
    ],
    competitionLevel: 'Medium-High',
    competitionColor: '#F97316',
    topPractices: ['Personal Injury', 'Family Law', 'Business Law', 'Immigration', 'Estate Planning', 'Criminal Defense'],
    opportunity:
      'Multilingual depth is the single biggest underexploited lever in OC. Adding Vietnamese alone unlocks 7% of qualified demand most firms ignore entirely.',
  },
  closing: {
    headline: 'Ready to grow your Orange County firm?',
    subhead:
      'Get a free audit of your website, search visibility, and ad spend across OC County and all major languages — and a clear plan for how we\'d bring you more clients.',
  },
  faqs: [
    {
      q: 'Do you work with all law firm practice areas in Orange County?',
      a: 'Yes. We work with personal injury, family law, criminal defense, business, immigration, estate planning, employment, and more. Every campaign is calibrated to your specific practice and the OC submarkets and languages most likely to send those cases.',
    },
    {
      q: 'How long before we see leads from SEO and ads?',
      a: 'Paid ads (Google, Bing, Meta) start delivering qualified OC leads within 7–14 days of launch. SEO builds compounding momentum from month two and typically delivers strong organic flow by month four to six.',
    },
    {
      q: 'Do you build truly multilingual sites — not just translated?',
      a: 'Yes. Spanish and Vietnamese pages are built natively with native-speaker review, not auto-translated. Hreflang is set correctly. Intake forms, phone routing, and ad copy all match — so a Spanish- or Vietnamese-speaking lead never hits an English bottleneck.',
    },
    {
      q: 'How do you handle tourist personal-injury cases?',
      a: 'Separate funnel. Tourist plaintiffs need out-of-state-friendly intake (remote signing, virtual consults, clear travel-back-for-trial process). We build dedicated tourist-PI landing pages and target visitor traffic patterns around Disneyland, OC airports, and convention venues.',
    },
    {
      q: 'Do you build the website, or do we keep our current one?',
      a: 'Most of our OC clients launch a new multilingual website with us — modern, mobile-first, fast, and engineered for conversions in all major OC languages. If your existing site is solid, we can also optimize it instead.',
    },
    {
      q: 'How much does a typical OC engagement cost?',
      a: 'Engagements are scoped to your firm size, target submarkets, languages, and growth goals. Most OC firms invest between $3k–$10k/month for ongoing multilingual SEO + paid + website management, with a one-time setup for new sites.',
    },
    {
      q: 'Will the content be reviewed by attorneys?',
      a: 'Yes. AI accelerates content production, but every page, ad, and FAQ is reviewed for legal accuracy and California Bar compliance before it goes live. We coordinate with your team or our network of practicing attorneys depending on what you prefer.',
    },
    {
      q: 'How is performance reported, and how often?',
      a: 'You get a real-time dashboard showing rankings, traffic, leads, and ad ROI by OC submarket and language 24/7. Plus a detailed monthly report with insights and a strategy review call. No black-box reporting — you see exactly where every dollar lands.',
    },
  ],
}

/* ────────────────────────────────────────────────────────────── */

export const cities: Record<string, City> = {
  'los-angeles': losAngeles,
  'san-diego': sanDiego,
  'san-francisco': sanFrancisco,
  'sacramento': sacramento,
  'santa-barbara': santaBarbara,
  'anaheim': anaheim,
}

export const citySlugs = Object.keys(cities)

export const cityList = Object.values(cities)
