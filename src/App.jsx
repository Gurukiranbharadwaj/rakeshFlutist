import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Learn from './pages/Learn'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import FluteWatermark from './components/FluteWatermark'
import ScrollToTop from './components/ScrollToTop'
import SocialFloat from './components/SocialFloat'
import './App.css'

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100 position-relative">
        <FluteWatermark />
        <Navbar />
        <main className="flex-grow-1 position-relative z-1">
          <AnimatedRoutes />
        </main>
        <Footer />
        <SocialFloat />
      </div>
    </Router>
  )
}

export default App
