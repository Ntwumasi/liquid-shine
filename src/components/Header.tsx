'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
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
    setIsMobileServicesOpen(false);
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
    { href: '/boat-detailing', label: 'Boat Detailing' },
    { href: '/rv-detailing', label: 'RV Detailing' },
    { href: '/maintenance', label: 'Maintenance' },
    { href: '/packages', label: 'Packages' },
  ];

  const secondaryNavLinks = [
    { href: '/products', label: 'Products' },
    { href: '/about-us', label: 'About Us' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const allMobileLinks = [
    ...mainNavLinks,
    ...otherServices,
    ...secondaryNavLinks,
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-xl shadow-lg shadow-black/20 py-2 border-b border-white/5'
            : 'bg-gradient-to-b from-black/70 to-transparent py-4'
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center group relative z-10">
              <Image
                src="/images/logo.png"
                alt="Liquid Shine Elite Mobile Detailing"
                width={180}
                height={60}
                className="h-12 md:h-14 w-auto transition-all duration-500 group-hover:scale-105"
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 z-10 text-white hover:bg-white/10 ${isMenuOpen ? 'bg-[#0080FF] hover:bg-[#0066cc]' : ''}`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 rounded-full transition-all duration-300 origin-left bg-white ${isMenuOpen ? 'rotate-45 translate-y-0' : ''}`} />
                <span className={`w-full h-0.5 rounded-full transition-all duration-300 bg-white ${isMenuOpen ? 'opacity-0 scale-0' : ''}`} />
                <span className={`w-full h-0.5 rounded-full transition-all duration-300 origin-left bg-white ${isMenuOpen ? '-rotate-45 translate-y-0' : ''}`} />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#0a0a0a] z-50 lg:hidden transition-transform duration-500 ease-out shadow-2xl border-l border-white/10 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Image
              src="/images/logo.png"
              alt="Liquid Shine"
              width={140}
              height={50}
              className="h-10 w-auto"
            />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-1">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-4 rounded-xl font-medium transition-all duration-300 ${
                    isActive(link.href)
                      ? 'bg-[#0080FF] text-white'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isActive(link.href) ? 'bg-white' : 'bg-gray-500'}`} />
                  {link.label}
                </Link>
              ))}

              {/* Mobile Other Services Accordion */}
              <div className="rounded-xl overflow-hidden">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={`w-full flex items-center justify-between gap-3 px-4 py-4 rounded-xl font-medium transition-all duration-300 ${
                    otherServices.some(s => isActive(s.href))
                      ? 'bg-[#0080FF] text-white'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${otherServices.some(s => isActive(s.href)) ? 'bg-white' : 'bg-gray-500'}`} />
                    Other Services
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-60' : 'max-h-0'}`}>
                  {otherServices.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 pl-10 font-medium transition-all duration-300 ${
                        isActive(link.href)
                          ? 'bg-[#0080FF]/50 text-white'
                          : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive(link.href) ? 'bg-white' : 'bg-gray-600'}`} />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {secondaryNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-4 rounded-xl font-medium transition-all duration-300 ${
                    isActive(link.href)
                      ? 'bg-[#0080FF] text-white'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isActive(link.href) ? 'bg-white' : 'bg-gray-500'}`} />
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Menu Footer */}
          <div className="p-6 border-t border-white/10 bg-black/30">
            <a
              href="tel:978-660-1356"
              className="flex items-center justify-center gap-2 py-3 text-[#0080FF] font-semibold hover:text-[#3399ff] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (978) 660-1356
            </a>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-white/10">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#0080FF] hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 12.013c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 23 18.062 23 12.013z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#0080FF] hover:text-white transition-all">
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
    </>
  );
}
