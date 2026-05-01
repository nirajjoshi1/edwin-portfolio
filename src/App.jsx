import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import BookCallPage from './pages/BookCallPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import ServicesPage from './pages/ServicesPage'
import TestimonialsPage from './pages/TestimonialsPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/book-a-call" element={<BookCallPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
