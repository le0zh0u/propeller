import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CompassPage from './pages/CompassPage'
import AccessPage from './pages/AccessPage'
import GrowthPage from './pages/GrowthPage'
import StoryPage from './pages/StoryPage'
import ContactPage from './pages/ContactPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [displayChildren, setDisplayChildren] = useState(children)
  const [displayLocation, setDisplayLocation] = useState(location)

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      const el = containerRef.current
      if (!el) {
        setDisplayLocation(location)
        setDisplayChildren(children)
        return
      }

      gsap.to(el, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut',
        onComplete: () => {
          window.scrollTo(0, 0)
          setDisplayLocation(location)
          setDisplayChildren(children)
          gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.4, delay: 0.1, ease: 'power2.out' })
        },
      })
    }
  }, [location, children, displayLocation.pathname])

  useEffect(() => {
    setDisplayChildren(children)
  }, [children])

  return (
    <div ref={containerRef} key={displayLocation.pathname}>
      {displayChildren}
    </div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-abyss text-pearl">
      <ScrollToTop />
      <Navigation />
      <main>
        <PageTransition>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/compass" element={<CompassPage />} />
            <Route path="/access" element={<AccessPage />} />
            <Route path="/growth" element={<GrowthPage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}
