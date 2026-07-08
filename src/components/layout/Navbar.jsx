import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { IMAGES } from '@/lib/images';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 80) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        setIsOpen(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="bg-navy/90 backdrop-blur-xl border-b-[3px] border-amber">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0 py-2">
              <img
                src={IMAGES.logo}
                alt="Heritage Bay Plumbing"
                style={{ height: '72px', width: 'auto', mixBlendMode: 'screen' }}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold tracking-wide uppercase transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-amber'
                      : 'text-white/80 hover:text-amber'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+18058726302"
                className="hidden sm:flex items-center gap-2 bg-amber hover:bg-amber-hover text-navy font-bold text-sm px-5 py-2.5 rounded transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
              >
                <Phone className="w-4 h-4" />
                (805) 872-6302
              </a>
              <a
                href="tel:+18058726302"
                className="sm:hidden flex items-center justify-center w-10 h-10 bg-amber rounded text-navy"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy/95 backdrop-blur-xl border-b border-amber/20">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 text-sm font-semibold tracking-wide uppercase rounded transition-colors ${
                  location.pathname === link.path
                    ? 'text-amber bg-white/5'
                    : 'text-white/80 hover:text-amber hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+18058726302"
              className="block mt-3 text-center bg-amber hover:bg-amber-hover text-navy font-bold text-sm px-5 py-3 rounded transition-all"
            >
              Call (805) 872-6302
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}