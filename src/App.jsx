import Home from './pages/Home'
import BioContact from './pages/BioContact'
import Portfolio from './pages/Portfolio'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation()
    
    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/bio-contact" element={<BioContact />} />
            </Routes>
        </AnimatePresence>
    )
}

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