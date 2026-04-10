import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VexPage from './pages/VexPage'
import SeoPage from './pages/SeoPage'
import MarketingPage from './pages/MarketingPage'
import CinematicPage from './pages/CinematicPage'

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
      </Routes>
    </BrowserRouter>
  )
}
