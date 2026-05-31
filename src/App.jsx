import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import MembershipPage from './pages/MembershipPage'
import TrainersPage from './pages/TrainersPage'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import SecurityNotice from './pages/SecurityNotice'
import TermsOfService from './pages/TermsOfService'
import TrackerGuide from './pages/TrackerGuide'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/trainers" element={<TrainersPage />} />
        <Route path="/coaches" element={<TrainersPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<SecurityNotice />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<TrackerGuide />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ background: '#050507', minHeight: '100vh' }}>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}
