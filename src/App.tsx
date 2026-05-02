import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VexPage from './pages/VexPage'
import SeoPage from './pages/SeoPage'
import MarketingPage from './pages/MarketingPage'
import CinematicPage from './pages/CinematicPage'
import CityPage from './pages/CityPage'
import { citySlugs } from './data/cities'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VexPage />} />
        <Route path="/vex" element={<VexPage />} />
        <Route path="/ai-website-development-law-firms-california" element={<VexPage />} />
        <Route path="/ai-seo-law-firms-california" element={<SeoPage />} />
        <Route path="/ai-marketing-law-firms-california" element={<MarketingPage />} />
        <Route path="/cinematic" element={<CinematicPage />} />

        {/* City landing pages — one route per city, exact match */}
        {citySlugs.map((slug) => (
          <Route
            key={slug}
            path={`/ai-agency-law-firms-${slug}`}
            element={<CityPage citySlug={slug} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
