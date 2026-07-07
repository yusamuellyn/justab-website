import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Landing.jsx'
import PrivacyPolicy from './PrivacyPolicy.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}
