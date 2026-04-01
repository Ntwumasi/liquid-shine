'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const mainNavLinks = [
    { href: '/', label: 'Home' },
    { href: '/ceramic-coating', label: 'Ceramic Coating' },
    { href: '/auto-detailing', label: 'Auto Detailing' },
  ];

  const otherServices = [
    { href: '/boat-detailing', label: 'Boat Detailing', icon: '⚓' },
    { href: '/rv-detailing', label: 'RV Detailing', icon: '🚐' },
    { href: '/maintenance', label: 'Maintenance', icon: '🔧' },
    { href: '/packages', label: 'Packages', icon: '📦' },
  ];

  const secondaryNavLinks = [
    { href: '/about-us', label: 'About Us' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black ${
          isScrolled
            ? 'shadow-lg shadow-black/20 py-2 border-b border-white/5'
            : 'py-4'
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center group relative z-10">
              <Image
                src="/images/logo.png"
                alt="Liquid Shine Elite Mobile Detailing"
                width={207}
                height={69}
                className="h-12 sm:h-14 md:h-16 w-auto transition-all duration-500 group-hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                    isActive(link.href)
                      ? 'text-[#0080FF] bg-[#0080FF]/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#0080FF]" />
                  )}
                </Link>
              ))}

              {/* Other Services Dropdown */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-1 ${
                    otherServices.some(s => isActive(s.href))
                      ? 'text-[#0080FF] bg-[#0080FF]/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Other Services
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-2 w-48 bg-[#111111] border border-white/10 rounded-xl shadow-xl overflow-hidden transition-all duration-200 ${
                    isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  {otherServices.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-3 text-sm font-medium transition-colors ${
                        isActive(link.href)
                          ? 'text-[#0080FF] bg-[#0080FF]/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {secondaryNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                    isActive(link.href)
                      ? 'text-[#0080FF] bg-[#0080FF]/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#0080FF]" />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Header Actions */}
            <div className="flex items-center gap-3 lg:hidden">
              {/* Call Button - Mobile */}
              <a
                href="tel:978-660-1356"
                className="w-11 h-11 rounded-full bg-[#0080FF] flex items-center justify-center text-white shadow-lg shadow-[#0080FF]/30 active:scale-95 transition-transform"
                aria-label="Call us"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`relative w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                  isMenuOpen
                    ? 'bg-white text-black'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <div className="w-5 h-4 relative flex flex-col justify-between">
                  <span className={`w-full h-0.5 rounded-full transition-all duration-300 origin-center ${isMenuOpen ? 'bg-black rotate-45 translate-y-[7px]' : 'bg-current'}`} />
                  <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : 'bg-current'}`} />
                  <span className={`w-full h-0.5 rounded-full transition-all duration-300 origin-center ${isMenuOpen ? 'bg-black -rotate-45 -translate-y-[7px]' : 'bg-current'}`} />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute inset-0 flex flex-col transition-all duration-500 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Header Spacer */}
          <div className="h-24 flex-shrink-0" />

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto overscroll-contain">
            <div className="container-custom py-6">

              {/* Main CTA */}
              <div className={`mb-8 transition-all duration-500 delay-100 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-3 w-full py-5 bg-gradient-to-r from-[#0080FF] to-[#0066cc] text-white font-bold text-lg rounded-2xl shadow-lg shadow-[#0080FF]/30 active:scale-[0.98] transition-transform"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Get a Free Quote
                </Link>
              </div>

              {/* Primary Services */}
              <div className={`mb-8 transition-all duration-500 delay-150 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-2">Services</h3>
                <div className="space-y-2">
                  {mainNavLinks.filter(l => l.href !== '/').map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-4 px-5 py-4 rounded-2xl font-semibold text-lg transition-all active:scale-[0.98] ${
                        isActive(link.href)
                          ? 'bg-[#0080FF] text-white shadow-lg shadow-[#0080FF]/20'
                          : 'bg-white/5 text-white hover:bg-white/10'
                      }`}
                    >
                      <span className={`w-3 h-3 rounded-full ${isActive(link.href) ? 'bg-white' : 'bg-[#0080FF]'}`} />
                      {link.label}
                      <svg className="w-5 h-5 ml-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Services Grid */}
              <div className={`mb-8 transition-all duration-500 delay-200 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-2">More Services</h3>
                <div className="grid grid-cols-2 gap-3">
                  {otherServices.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex flex-col items-center justify-center gap-2 p-5 rounded-2xl font-medium transition-all active:scale-[0.95] ${
                        isActive(link.href)
                          ? 'bg-[#0080FF] text-white shadow-lg shadow-[#0080FF]/20'
                          : 'bg-white/5 text-white hover:bg-white/10'
                      }`}
                    >
                      <span className="text-2xl">{link.icon}</span>
                      <span className="text-sm text-center">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className={`transition-all duration-500 delay-250 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-2">Quick Links</h3>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-5 py-3 rounded-full font-medium transition-all active:scale-95 ${
                      isActive('/') && pathname === '/'
                        ? 'bg-[#0080FF] text-white'
                        : 'bg-white/5 text-white hover:bg-white/10'
                    }`}
                  >
                    Home
                  </Link>
                  {secondaryNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-5 py-3 rounded-full font-medium transition-all active:scale-95 ${
                        isActive(link.href)
                          ? 'bg-[#0080FF] text-white'
                          : 'bg-white/5 text-white hover:bg-white/10'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className={`flex-shrink-0 border-t border-white/10 bg-black/50 backdrop-blur-lg transition-all duration-500 delay-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="container-custom py-6">
              <div className="flex items-center justify-between">
                {/* Phone */}
                <a
                  href="tel:978-660-1356"
                  className="flex items-center gap-3 text-white font-semibold"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0080FF]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0080FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Call Now</p>
                    <p className="text-base">(978) 660-1356</p>
                  </div>
                </a>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#0080FF] transition-all active:scale-95"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 12.013c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 23 18.062 23 12.013z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#0080FF] transition-all active:scale-95"
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
        </div>
      </div>
    </>
  );
}
