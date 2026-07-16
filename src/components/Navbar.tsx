import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Compass', path: '/compass' },
  { name: 'Access', path: '/access' },
  { name: 'Growth', path: '/growth' },
  { name: 'Our Story', path: '/our-story' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] max-w-7xl rounded-full border transition-all duration-300 flex items-center px-5 md:px-7 py-3 md:py-4 ${
          scrolled
            ? 'bg-white/10 backdrop-blur-xl border-white/20'
            : 'border-white/10 drop-shadow-lg'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="mr-auto flex items-center">
          <img
            src="/PP-logo-trans.png"
            alt="PROPELLER"
            className="h-7 md:h-9 w-auto brightness-0 invert"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 mr-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`uppercase tracking-[0.3em] text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-[#008080]'
                  : 'text-white/80 hover:text-[#008080]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-1 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 z-[100] bg-brand-darkest flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 p-2 text-white"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              >
                <Link
                  to={link.path}
                  className="block text-4xl md:text-6xl font-black text-white my-3 hover:text-[#008080] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
