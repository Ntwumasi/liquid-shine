import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { href: '/ceramic-coating', label: 'Ceramic Coating' },
    { href: '/auto-detailing', label: 'Auto Detailing' },
    { href: '/boat-detailing', label: 'Marine Detailing' },
    { href: '/rv-detailing', label: 'RV Detailing' },
  ];

  const company = [
    { href: '/about-us', label: 'About Us' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/products', label: 'Products' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const serviceAreas = [
    'Bradenton', 'Palmetto', 'Ellenton', 'Parrish', 'Lakewood Ranch',
    'Sarasota', 'Venice', 'North Port', 'Anna Maria Island'
  ];

  const socials = [
    {
      href: 'https://facebook.com',
      label: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 12.013c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 23 18.062 23 12.013z" />
        </svg>
      ),
    },
    {
      href: 'https://instagram.com',
      label: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.695.278.273 2.759.06 7.051.009 8.331 0 8.756 0 12s.011 3.669.06 4.948c.213 4.294 2.635 6.773 6.992 6.982 1.279.058 1.704.07 4.948.07 3.245 0 3.669-.012 4.949-.07 4.356-.209 6.78-2.688 6.993-6.981.058-1.279.07-1.704.07-4.949 0-3.244-.011-3.669-.07-4.948-.213-4.293-2.635-6.774-6.992-6.982C15.669.012 15.245 0 12 0z" />
          <circle cx="12" cy="12" r="3.6" />
          <circle cx="18.406" cy="5.594" r="0.9" />
        </svg>
      ),
    },
    {
      href: 'https://twitter.com',
      label: 'X',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.17-6.763-5.91 6.763h-3.308l7.73-8.835L2.5 2.25h6.75l4.915 6.516L17.41 2.25h.834zM15.69 19.812h1.806L8.271 4.1H6.366l9.324 15.712z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-[#004FBB] via-[#0066cc] to-[#004FBB] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFBA00]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom py-10 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Get Your Vehicle Detailed?</h3>
              <p className="text-blue-100">Book your mobile detailing appointment today and see the difference!</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn btn-accent">
                Get Free Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="tel:978-660-1356" className="btn bg-white/10 border border-white/30 text-white hover:bg-white hover:text-[#004FBB]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (978) 660-1356
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo-primary-transparent.png"
                alt="Liquid Shine Elite Mobile Detailing"
                width={180}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Professional mobile detailing services for auto, marine, and RV.
              Serving Manatee and Sarasota Counties with excellence since 2016.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-[#004FBB] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FFBA00] rounded-full" />
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 text-[#004FBB] group-hover:text-[#FFBA00] transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FFBA00] rounded-full" />
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 text-[#004FBB] group-hover:text-[#FFBA00] transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Service Areas */}
          <div>
            <h4 className="font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FFBA00] rounded-full" />
              Contact
            </h4>
            <div className="space-y-4 mb-6">
              <a
                href="tel:978-660-1356"
                className="flex items-center gap-3 text-gray-400 hover:text-[#FFBA00] transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-800 group-hover:bg-[#004FBB]/30 flex items-center justify-center flex-shrink-0 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-medium">(978) 660-1356</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-sm">
                  <p>8955 US Hwy 301 N, Ste 330</p>
                  <p>Parrish, FL 34219</p>
                </div>
              </div>
            </div>

            {/* Service Areas Tags */}
            <div className="mt-6">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Service Areas</p>
              <div className="flex flex-wrap gap-1.5">
                {serviceAreas.slice(0, 5).map((area) => (
                  <span
                    key={area}
                    className="px-2 py-1 bg-gray-800/50 text-gray-500 text-xs rounded-md"
                  >
                    {area}
                  </span>
                ))}
                <span className="px-2 py-1 bg-gray-800/50 text-[#FFBA00] text-xs rounded-md">
                  +{serviceAreas.length - 5} more
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {currentYear} Liquid Shine Elite Mobile Detailing. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-600 flex items-center gap-2">
                <svg className="w-4 h-4 text-[#FFBA00]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                System X Authorized
              </span>
              <span className="w-1 h-1 bg-gray-700 rounded-full hidden md:block" />
              <span className="text-gray-600 hidden md:inline">Proudly Serving Florida</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
