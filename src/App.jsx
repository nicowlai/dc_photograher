import Home from './pages/Home'
import BioContact from './pages/BioContact'
import Portfolio from './pages/Portfolio'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/bio-contact" element={<BioContact />} />
    <Route path="/portfolio" element={<Portfolio />} />
  </Routes>
</BrowserRouter>
  )
}

export default App