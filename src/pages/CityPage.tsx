import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { cities, getTheme } from '../data/cities'
import CityHero from '../components/city/CityHero'
import CityPainPoints from '../components/city/CityPainPoints'
import CityServices from '../components/city/CityServices'
import CityHowWeWork from '../components/city/CityHowWeWork'
import CityWhyUs from '../components/city/CityWhyUs'
import CityMidCTA from '../components/city/CityMidCTA'
import CityMarketIntel from '../components/city/CityMarketIntel'
import CityFAQ from '../components/city/CityFAQ'
import CityTestimonials from '../components/city/CityTestimonials'
import CityClosingCTA from '../components/city/CityClosingCTA'
import SectionBg from '../components/city/SectionBg'
import LogoTicker from '../components/LogoTicker'
import Footer from '../components/Footer'

export default function CityPage({ citySlug }: { citySlug: string }) {
  const city = cities[citySlug]

  useEffect(() => {
    if (!city) return
    const prevTitle = document.title
    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? ''

    document.title = city.metaTitle
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = city.metaDescription

    return () => {
      document.title = prevTitle
      if (metaDesc) metaDesc.content = prevDesc
    }
  }, [city])

  if (!city) {
    return <Navigate to="/" replace />
  }

  const bg = city.sectionBackgrounds ?? {}
  const accentRgb = city.accent.primaryRgb
  const tokens = getTheme(city)
  const isLight = tokens.isLight

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: tokens.bgPage, color: tokens.textPrimary }}
    >
      <CityHero city={city} />

      <LogoTicker light={!isLight} />

      <SectionBg src={bg.painPoints} accentRgb={accentRgb} overlay={isLight ? 0.92 : 0.78} isLight={isLight}>
        <CityPainPoints city={city} />
      </SectionBg>

      <SectionBg src={bg.whatWeDo} accentRgb={accentRgb} overlay={isLight ? 0.90 : 0.74} isLight={isLight}>
        <CityServices city={city} />
      </SectionBg>

      <SectionBg src={bg.howWeWork} accentRgb={accentRgb} overlay={isLight ? 0.92 : 0.78} isLight={isLight}>
        <CityHowWeWork city={city} />
      </SectionBg>

      <SectionBg src={bg.whyUs} accentRgb={accentRgb} overlay={isLight ? 0.90 : 0.76} isLight={isLight}>
        <CityWhyUs city={city} />
      </SectionBg>

      <CityMidCTA city={city} />

      <CityMarketIntel city={city} />

      <SectionBg src={bg.testimonials} accentRgb={accentRgb} overlay={isLight ? 0.92 : 0.78} isLight={isLight}>
        <CityTestimonials city={city} />
      </SectionBg>

      <SectionBg src={bg.faq} accentRgb={accentRgb} overlay={isLight ? 0.94 : 0.80} isLight={isLight}>
        <CityFAQ city={city} />
      </SectionBg>

      <CityClosingCTA city={city} />

      <Footer />
    </div>
  )
}
