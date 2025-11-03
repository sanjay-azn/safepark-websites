'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleFeaturesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (pathname === '/') {
      document.getElementById('features')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    } else {
      window.location.href = '/#features';
    }
  };

  const handleGalleryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (pathname === '/') {
      document.getElementById('gallery')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    } else {
      window.location.href = '/#gallery';
    }
  };

  const handleFaqClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (pathname === '/') {
      document.getElementById('faq-header')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    } else {
      window.location.href = '/#faq-header';
    }
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO - LEFT SIDE */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-3 flex-shrink-0 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform duration-300">
              <Image 
                src="/logo.png" 
                alt="SafePark Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-emerald-400 font-bold text-lg md:text-xl group-hover:text-emerald-300 transition-colors duration-300">
              SafePark
            </span>
          </Link>

          {/* SPACER - PUSHES CONTENT TO RIGHT */}
          <div className="flex-grow"></div>

          {/* Desktop Navigation Links - RIGHT SIDE */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/#features"
              onClick={handleFeaturesClick}
              className="text-base font-medium text-white hover:text-emerald-400 transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="/#gallery"
              onClick={handleGalleryClick}
              className="text-base font-medium text-white hover:text-emerald-400 transition-colors duration-300"
            >
              Gallery
            </a>
            <a
              href="/#faq-header"
              onClick={handleFaqClick}
              className="text-base font-medium text-white hover:text-emerald-400 transition-colors duration-300"
            >
              FAQ
            </a>
            <Link
              href="/contact"
              onClick={handleNavClick}
              className={`text-base font-medium transition-colors duration-300 ${
                pathname === '/contact' ? 'text-emerald-400' : 'text-white hover:text-emerald-400'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop Call Button - FAR RIGHT */}
          <div className="hidden md:flex items-center flex-shrink-0 ml-8">
            <a 
              href="tel:+919600840058" 
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-lg font-bold transition-colors duration-300 inline-flex items-center gap-2 text-sm md:text-base whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button - FAR RIGHT */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-emerald-400 transition-colors flex-shrink-0"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-white/10">
            <a
              href="/#features"
              onClick={handleFeaturesClick}
              className="block px-4 py-2 rounded-lg font-medium text-white hover:text-emerald-400 hover:bg-white/5 transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="/#gallery"
              onClick={handleGalleryClick}
              className="block px-4 py-2 rounded-lg font-medium text-white hover:text-emerald-400 hover:bg-white/5 transition-colors duration-300"
            >
              Gallery
            </a>
            <a
              href="/#faq-header"
              onClick={handleFaqClick}
              className="block px-4 py-2 rounded-lg font-medium text-white hover:text-emerald-400 hover:bg-white/5 transition-colors duration-300"
            >
              FAQ
            </a>
            <Link
              href="/contact"
              onClick={handleNavClick}
              className={`block px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                pathname === '/contact' 
                  ? 'text-emerald-400 bg-white/5' 
                  : 'text-white hover:text-emerald-400 hover:bg-white/5'
              }`}
            >
              Contact
            </Link>
            <a 
              href="tel:+919600840058"
              onClick={handleNavClick}
              className="block w-full bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-lg font-bold transition-colors duration-300 text-center inline-flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
        )}
      </nav>

      <style jsx>{`
        @media (max-width: 768px) {
          .hidden.md\:flex {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
