import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] border-t border-[#334155] text-white mt-auto">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-start md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <div className="w-12 h-12 bg-[#1a56db] rounded-lg flex items-center justify-center group-hover:bg-[#1e40af] transition-colors duration-300">
                <span className="text-white font-bold text-lg">LS</span>
              </div>
              <span className="font-bold text-lg group-hover:text-[#1a56db] transition-colors duration-300">
                Liquid Shine
              </span>
            </Link>
            <p className="text-[#cbd5e1] text-sm leading-relaxed">
              Professional mobile detailing services for automotive, marine, and recreational vehicles.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#1a56db]">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ceramic-coating"
                  className="text-[#cbd5e1] hover:text-[#1a56db] transition-colors duration-300"
                >
                  Ceramic Coating
                </Link>
              </li>
              <li>
                <Link
                  href="/auto-detailing"
                  className="text-[#cbd5e1] hover:text-[#1a56db] transition-colors duration-300"
                >
                  Auto Detailing
                </Link>
              </li>
              <li>
                <Link
                  href="/boat-detailing"
                  className="text-[#cbd5e1] hover:text-[#1a56db] transition-colors duration-300"
                >
                  Boat Detailing
                </Link>
              </li>
              <li>
                <Link
                  href="/rv-detailing"
                  className="text-[#cbd5e1] hover:text-[#1a56db] transition-colors duration-300"
                >
                  RV Detailing
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#1a56db]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-[#cbd5e1] hover:text-[#1a56db] transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-[#cbd5e1] hover:text-[#1a56db] transition-colors duration-300"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[#cbd5e1] hover:text-[#1a56db] transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-[#cbd5e1] hover:text-[#1a56db] transition-colors duration-300"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#1a56db]">Contact</h3>
            <div className="space-y-3">
              <div>
                <p className="text-[#94a3b8] text-xs uppercase tracking-wider mb-1">Phone</p>
                <a
                  href="tel:978-660-1356"
                  className="text-[#cbd5e1] hover:text-[#1a56db] transition-colors duration-300 text-sm"
                >
                  (978) 660-1356
                </a>
              </div>
              <div>
                <p className="text-[#94a3b8] text-xs uppercase tracking-wider mb-1">Address</p>
                <p className="text-[#cbd5e1] text-sm leading-relaxed">
                  Liquid Shine, LLC
                  <br />
                  8955 US Hwy 301 N, Ste 330
                  <br />
                  Parrish, FL 34219
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-[#334155] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Social Icons */}
            <div className="flex items-center space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cbd5e1] hover:text-[#1a56db] transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 12.013c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 23 18.062 23 12.013z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cbd5e1] hover:text-[#1a56db] transition-colors duration-300"
                aria-label="X/Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.17-6.763-5.91 6.763h-3.308l7.73-8.835L2.5 2.25h6.75l4.915 6.516L17.41 2.25h.834zM15.69 19.812h1.806L8.271 4.1H6.366l9.324 15.712z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cbd5e1] hover:text-[#1a56db] transition-colors duration-300"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cbd5e1] hover:text-[#1a56db] transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.695.278.273 2.759.06 7.051.009 8.331 0 8.756 0 12s.011 3.669.06 4.948c.213 4.294 2.635 6.773 6.992 6.982 1.279.058 1.704.07 4.948.07 3.245 0 3.669-.012 4.949-.07 4.356-.209 6.78-2.688 6.993-6.981.058-1.279.07-1.704.07-4.949 0-3.244-.011-3.669-.07-4.948-.213-4.293-2.635-6.774-6.992-6.982C15.669.012 15.245 0 12 0z" />
                  <circle cx="12" cy="12" r="3.6" />
                  <circle cx="18.406" cy="5.594" r="0.9" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-[#94a3b8] text-sm">
                &copy; {currentYear} Liquid Shine, LLC. All rights reserved.
              </p>
              <div className="space-x-4 text-sm mt-2">
                <Link
                  href="/privacy"
                  className="text-[#cbd5e1] hover:text-[#1a56db] transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <span className="text-[#334155]">|</span>
                <Link
                  href="/terms"
                  className="text-[#cbd5e1] hover:text-[#1a56db] transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
