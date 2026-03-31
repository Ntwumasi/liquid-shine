'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PackagesPage() {
  const [activeCategory, setActiveCategory] = useState('auto');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'auto', label: 'Auto Detailing' },
    { id: 'boat', label: 'Boat Detailing' },
    { id: 'rv', label: 'RV Detailing' },
    { id: 'ceramic', label: 'Ceramic Coating' },
  ];

  const packages = {
    auto: [
      {
        name: "Express Package",
        tagline: "Quick refresh for well-maintained vehicles",
        price: "Starting at $175",
        features: [
          "Exterior hand wash & dry",
          "Clay bar treatment",
          "Wax protection",
          "Interior vacuum",
          "Dashboard wipe-down",
          "Glass cleaning",
        ],
      },
      {
        name: "Glossy Package",
        tagline: "Complete detail for a showroom finish",
        price: "Starting at $375",
        popular: true,
        features: [
          "Everything in Express",
          "One-step paint correction",
          "Deep interior cleaning",
          "Leather/vinyl conditioning",
          "Engine bay cleaning",
          "Trim restoration",
        ],
      },
      {
        name: "Liquid Shine Package",
        tagline: "The ultimate transformation",
        price: "Starting at $500",
        features: [
          "Everything in Glossy",
          "Two-step paint correction",
          "Premium sealant protection",
          "Steam cleaning",
          "Odor elimination",
          "6-month protection",
        ],
      },
    ],
    boat: [
      {
        name: "Deck & Hull Wash",
        tagline: "Basic exterior cleaning",
        price: "Starting at $200",
        features: [
          "Hull wash and rinse",
          "Deck scrub and clean",
          "Chrome polishing",
          "Vinyl wipe-down",
          "Glass cleaning",
        ],
      },
      {
        name: "Full Marine Detail",
        tagline: "Complete boat restoration",
        price: "Starting at $400",
        popular: true,
        features: [
          "Hull oxidation removal",
          "Deck deep cleaning",
          "Interior full detail",
          "Metal polishing",
          "Canvas cleaning",
          "Wax protection",
        ],
      },
      {
        name: "Ceramic Marine Package",
        tagline: "Long-lasting protection",
        price: "Starting at $1,200",
        features: [
          "Full marine detail included",
          "Ceramic coating on hull",
          "Ceramic coating on deck",
          "Interior ceramic treatment",
          "2-year warranty",
        ],
      },
    ],
    rv: [
      {
        name: "RV Wash & Wax",
        tagline: "Essential exterior care",
        price: "Starting at $250",
        features: [
          "Full exterior wash",
          "Roof cleaning",
          "Wax protection",
          "Wheel cleaning",
          "Awning cleaning",
        ],
      },
      {
        name: "Complete RV Detail",
        tagline: "Inside and out perfection",
        price: "Starting at $500",
        popular: true,
        features: [
          "Full exterior wash & wax",
          "Interior deep cleaning",
          "Carpet shampooing",
          "Upholstery cleaning",
          "Kitchen & bathroom sanitizing",
          "Oxidation removal",
        ],
      },
      {
        name: "RV Ceramic Protection",
        tagline: "Ultimate long-term protection",
        price: "Starting at $2,000",
        features: [
          "Complete detail included",
          "Full ceramic coating",
          "Roof coating",
          "Trim protection",
          "5-year warranty",
        ],
      },
    ],
    ceramic: [
      {
        name: "Entry Level Coating",
        tagline: "1-year protection",
        price: "Starting at $500",
        features: [
          "One-step paint correction",
          "Single layer ceramic coating",
          "Wheel faces coated",
          "Glass coating",
          "1-year warranty",
        ],
      },
      {
        name: "Professional Coating",
        tagline: "3-year protection",
        price: "Starting at $1,000",
        popular: true,
        features: [
          "Two-step paint correction",
          "Two-layer ceramic coating",
          "Full wheel coating",
          "Glass & trim coating",
          "Interior protection",
          "3-year warranty",
        ],
      },
      {
        name: "Ultimate Coating",
        tagline: "5+ year protection",
        price: "Starting at $1,500",
        features: [
          "Full paint correction",
          "Multi-layer ceramic coating",
          "Complete wheel coating",
          "All surfaces protected",
          "Annual maintenance included",
          "5-year warranty",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0080FF]/10 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center scroll-animate">
            <h1 className="text-outline text-4xl md:text-6xl mb-6">
              DETAILING PACKAGES
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the perfect package for your vehicle. From quick refreshes to complete transformations,
              we have options for every need and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 sticky top-20 bg-[#0a0a0a]/95 backdrop-blur-xl z-30 border-b border-white/10">
        <div className="container-custom">
          <div className="flex justify-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#0080FF] text-white'
                    : 'bg-[#111111] text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {packages[activeCategory as keyof typeof packages].map((pkg, i) => (
              <div
                key={i}
                className={`relative bg-[#111111] border rounded-2xl overflow-hidden scroll-animate transition-all duration-300 ${
                  pkg.popular
                    ? 'border-[#0080FF] ring-2 ring-[#0080FF]/20'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#0080FF] text-white text-xs font-bold rounded-full uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 mb-4">{pkg.tagline}</p>
                  <p className="text-3xl font-bold text-[#0080FF] mb-6">{pkg.price}</p>

                  <div className="space-y-3">
                    {pkg.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#0080FF] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-black/30 border-t border-white/5">
                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 font-semibold rounded-xl transition-colors ${
                      pkg.popular
                        ? 'bg-[#0080FF] hover:bg-[#0066cc] text-white'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-[#111111]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center scroll-animate">
            <p className="text-gray-400">
              <span className="text-white font-semibold">Note:</span> Prices vary based on vehicle size and condition.
              Contact us for a personalized quote. Additional services and add-ons available upon request.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0080FF] to-[#0066cc]">
        <div className="container-custom text-center scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not Sure Which Package to Choose?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation. We&apos;ll assess your vehicle&apos;s condition
            and recommend the perfect package for your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0080FF] font-bold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Get Free Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
