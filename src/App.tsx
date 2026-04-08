import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VexPage from './pages/VexPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VexPage />} />
        <Route path="/vex" element={<VexPage />} />
      </Routes>
    </BrowserRouter>
  )
}
