import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OriginalPage from './pages/OriginalPage'
import CinematicPage from './pages/CinematicPage'
import VexPage from './pages/VexPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OriginalPage />} />
        <Route path="/cinematic" element={<CinematicPage />} />
        <Route path="/vex" element={<VexPage />} />
      </Routes>
    </BrowserRouter>
  )
}
