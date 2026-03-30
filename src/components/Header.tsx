'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0f172a] border-b border-[#334155]">
      {/* Top Bar */}
      <div className="hidden md:block bg-[#1e293b] border-b border-[#334155] py-3">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-[#1a56db]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a
              href="tel:978-660-1356"
              className="text-white hover:text-[#1a56db] transition-colors duration-300"
            >
              (978) 660-1356
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1a56db] transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 12.013c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 23 18.062 23 12.013z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1a56db] transition-colors duration-300"
              aria-label="X/Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.17-6.763-5.91 6.763h-3.308l7.73-8.835L2.5 2.25h6.75l4.915 6.516L17.41 2.25h.834zM15.69 19.812h1.806L8.271 4.1H6.366l9.324 15.712z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1a56db] transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.695.278.273 2.759.06 7.051.009 8.331 0 8.756 0 12s.011 3.669.06 4.948c.213 4.294 2.635 6.773 6.992 6.982 1.279.058 1.704.07 4.948.07 3.245 0 3.669-.012 4.949-.07 4.356-.209 6.78-2.688 6.993-6.981.058-1.279.07-1.704.07-4.949 0-3.244-.011-3.669-.07-4.948-.213-4.293-2.635-6.774-6.992-6.982C15.669.012 15.245 0 12 0z" />
                <circle cx="12" cy="12" r="3.6" />
                <circle cx="18.406" cy="5.594" r="0.9" />
              </svg>
            </a>
            <a
              href="https://feeds.example.com/rss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1a56db] transition-colors duration-300"
              aria-label="RSS Feed"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm3 5a3 3 0 106 0 3 3 0 00-6 0z" />
                <circle cx="19" cy="19" r="1" />
                <path d="M4.5 19.5A14.5 14.5 0 0019.5 4.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#0f172a]">
        <div className="container-custom flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1a56db] rounded-lg flex items-center justify-center group-hover:bg-[#1e40af] transition-colors duration-300">
                <span className="text-white font-bold text-lg md:text-xl">LS</span>
              </div>
              <span className="hidden sm:inline text-white font-bold text-lg md:text-xl group-hover:text-[#1a56db] transition-colors duration-300">
                Liquid Shine
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-white hover:text-[#1a56db] transition-colors duration-300"
            >
              HOME
            </Link>
            <Link
              href="/ceramic-coating"
              className="px-3 py-2 text-sm font-medium text-white hover:text-[#1a56db] transition-colors duration-300"
            >
              CERAMIC COATING
            </Link>
            <Link
              href="/auto-detailing"
              className="px-3 py-2 text-sm font-medium text-white hover:text-[#1a56db] transition-colors duration-300"
            >
              AUTO DETAILING
            </Link>

            {/* Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-white hover:text-[#1a56db] transition-colors duration-300 flex items-center space-x-1">
                <span>OTHER SERVICES</span>
                <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-[#1e293b] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                <Link
                  href="/boat-detailing"
                  className="block px-4 py-2 text-sm text-white hover:text-[#1a56db] hover:bg-[#334155] transition-colors duration-300"
                >
                  Boat Detailing
                </Link>
                <Link
                  href="/rv-detailing"
                  className="block px-4 py-2 text-sm text-white hover:text-[#1a56db] hover:bg-[#334155] transition-colors duration-300"
                >
                  RV Detailing
                </Link>
              </div>
            </div>

            <Link
              href="/products"
              className="px-3 py-2 text-sm font-medium text-white hover:text-[#1a56db] transition-colors duration-300"
            >
              PRODUCTS
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-white hover:text-[#1a56db] transition-colors duration-300"
            >
              ABOUT US
            </Link>
            <Link
              href="/gallery"
              className="px-3 py-2 text-sm font-medium text-white hover:text-[#1a56db] transition-colors duration-300"
            >
              GALLERY
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-medium text-white hover:text-[#1a56db] transition-colors duration-300"
            >
              BLOG
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-white bg-[#1a56db] rounded hover:bg-[#1e40af] transition-colors duration-300"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#1a56db] hover:bg-[#1e293b] focus:outline-none transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#1e293b] border-t border-[#334155]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md text-white hover:text-[#1a56db] hover:bg-[#334155] text-sm font-medium transition-colors duration-300"
              >
                HOME
              </Link>
              <Link
                href="/ceramic-coating"
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md text-white hover:text-[#1a56db] hover:bg-[#334155] text-sm font-medium transition-colors duration-300"
              >
                CERAMIC COATING
              </Link>
              <Link
                href="/auto-detailing"
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md text-white hover:text-[#1a56db] hover:bg-[#334155] text-sm font-medium transition-colors duration-300"
              >
                AUTO DETAILING
              </Link>

              {/* Mobile Dropdown */}
              <div className="px-3 py-2">
                <button
                  onClick={toggleDropdown}
                  className="w-full text-left text-white hover:text-[#1a56db] text-sm font-medium flex items-center justify-between transition-colors duration-300"
                >
                  <span>OTHER SERVICES</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="mt-2 space-y-1 pl-4">
                    <Link
                      href="/boat-detailing"
                      onClick={closeMenu}
                      className="block px-3 py-2 rounded-md text-white hover:text-[#1a56db] hover:bg-[#334155] text-sm transition-colors duration-300"
                    >
                      Boat Detailing
                    </Link>
                    <Link
                      href="/rv-detailing"
                      onClick={closeMenu}
                      className="block px-3 py-2 rounded-md text-white hover:text-[#1a56db] hover:bg-[#334155] text-sm transition-colors duration-300"
                    >
                      RV Detailing
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/products"
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md text-white hover:text-[#1a56db] hover:bg-[#334155] text-sm font-medium transition-colors duration-300"
              >
                PRODUCTS
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md text-white hover:text-[#1a56db] hover:bg-[#334155] text-sm font-medium transition-colors duration-300"
              >
                ABOUT US
              </Link>
              <Link
                href="/gallery"
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md text-white hover:text-[#1a56db] hover:bg-[#334155] text-sm font-medium transition-colors duration-300"
              >
                GALLERY
              </Link>
              <Link
                href="/blog"
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md text-white hover:text-[#1a56db] hover:bg-[#334155] text-sm font-medium transition-colors duration-300"
              >
                BLOG
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md text-white bg-[#1a56db] hover:bg-[#1e40af] text-sm font-medium transition-colors duration-300 mt-2"
              >
                CONTACT
              </Link>

              {/* Mobile Top Bar Info */}
              <div className="pt-3 border-t border-[#334155] mt-3">
                <a
                  href="tel:978-660-1356"
                  className="block px-3 py-2 text-white hover:text-[#1a56db] text-sm transition-colors duration-300"
                >
                  (978) 660-1356
                </a>
                <div className="flex items-center justify-center space-x-4 pt-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#1a56db] transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 12.013c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 23 18.062 23 12.013z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#1a56db] transition-colors duration-300"
                    aria-label="X/Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.17-6.763-5.91 6.763h-3.308l7.73-8.835L2.5 2.25h6.75l4.915 6.516L17.41 2.25h.834zM15.69 19.812h1.806L8.271 4.1H6.366l9.324 15.712z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#1a56db] transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.695.278.273 2.759.06 7.051.009 8.331 0 8.756 0 12s.011 3.669.06 4.948c.213 4.294 2.635 6.773 6.992 6.982 1.279.058 1.704.07 4.948.07 3.245 0 3.669-.012 4.949-.07 4.356-.209 6.78-2.688 6.993-6.981.058-1.279.07-1.704.07-4.949 0-3.244-.011-3.669-.07-4.948-.213-4.293-2.635-6.774-6.992-6.982C15.669.012 15.245 0 12 0z" />
                      <circle cx="12" cy="12" r="3.6" />
                      <circle cx="18.406" cy="5.594" r="0.9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
