'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function BoatDetailingPage() {
  const [openPackage, setOpenPackage] = useState<string | null>('glossy');

  // Initialize scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const process = [
    {
      step: "1",
      title: "CLEAN THE GRIME",
      desc: "Utilizing proper wash techniques, we clean the dirt and grime from your boat and then dry it, preparing the surface for protection.",
      image: "/images/hero-yacht-cruising.jpg"
    },
    {
      step: "2",
      title: "MAKE IT SLICK",
      desc: "Quality products are used to provide protection for the paint or gelcoat from the environment and harmful UV rays. This keeps the surface shiny, slick, and looking showroom new.",
      image: "/images/gallery-yacht-palm-trees.jpg"
    },
    {
      step: "3",
      title: "CLEAN THE INSIDE",
      desc: "We clean the topsides just like we do the hullsides! We clean the interior, clean out the compartments, and apply protection just like on the outside.",
      image: "/images/gallery-mega-yacht.jpg"
    },
    {
      step: "4",
      title: "THE DETAILS COUNT",
      desc: "We clean the seats & vinyl and remove any mold & mildew, polish all of the brightwork, clean out all of the compartments, and even make the electronics sparkle. All of the little details count, and that's part of the Liquid Shine difference!",
      image: "/images/gallery-yacht-deck.jpg"
    },
  ];

  const serviceAreas = [
    "Bradenton", "Palmetto", "Ellenton", "Parrish", "Lakewood Ranch",
    "Anna Maria Island", "Holmes Beach", "Bradenton Beach", "Myakka",
    "Sarasota", "Venice", "Osprey", "Nokomis", "North Port", "Englewood"
  ];

  const packages = [
    {
      id: 'glossy',
      name: "Glossy Package",
      description: "Complete boat detailing with polymer sealant protection",
      hullIncludes: [
        "Hand wash from rub rail down",
        "Orange scum (tannins) stain removal — not available for boats left in the water or on lifts",
        "Polymer sealant machine applied to the hull sides (provides protection for approximately 4-6 months with proper care)",
      ],
      topsideIncludes: [
        "Hand wash of topside and interior",
        "Non-skid cleaning",
        "Compartment cleaning",
        "Mold and mildew removal",
        "Brightwork polishing",
        "Cleaning of isinglass and plastic works",
        "Vinyl protectant applied to all vinyl surfaces",
        "Polymer sealant machine applied to gel coat (provides protection for approximately 4 to 6 months with proper care)",
      ],
      prices: {
        hullOrTopside: [
          { size: "Up to 22'", price: "$225" },
          { size: "22' – 28'", price: "$300" },
          { size: "28' – 34'", price: "$350" },
          { size: "34' – 40'", price: "$400" },
        ],
        combined: [
          { size: "Up to 22'", price: "$400" },
          { size: "22' – 28'", price: "$525" },
          { size: "28' – 34'", price: "$625" },
          { size: "34' – 40'", price: "$750" },
        ],
      },
    },
    {
      id: 'liquid-shine',
      name: "Liquid Shine Package",
      subtitle: "2-Step Gelcoat Correction — Polish and Sealant",
      description: "Premium boat detailing with SiO2 ceramic protection for a true liquid shine",
      hullIncludes: [
        "Hand wash from rub rail down",
        "Orange scum (tannins) stain removal—not available for boats left in the water or on lifts",
        "Gelcoat machined polished to remove light scratches and lay the foundation for a liquid shine",
        "SiO2 Polymer sealant machine applied to provide liquid shine (provides protection for approximately 6-9 months with proper care)",
        "SiO2 Spray top coating applied to provide additional protection and hydrophobic properties",
      ],
      topsideIncludes: [
        "Topside hand wash",
        "Gelcoat machine polished to remove light scratches and lay the foundation for a liquid shine",
        "Non-skid cleaning",
        "Compartment cleaning",
        "Mold and mildew removal",
        "Brightwork polishing",
        "Cleaning of isinglass and plastic works",
        "Cleaning the inboard or inboard/outboard engine and compartment, with owner's authorization (for vessels up to 40 feet; vessels over 40 feet will have an additional charge for engine cleaning)",
        "SiO2 spray sealant applied to isinglass and plastic works",
        "SiO2 vinyl protectant applied to all vinyl surfaces",
      ],
      prices: {
        hullOrTopside: [
          { size: "Up to 22'", price: "$375" },
          { size: "22' – 28'", price: "$475" },
          { size: "28' – 34'", price: "$575" },
          { size: "34' – 40'", price: "$675" },
        ],
        combined: [
          { size: "Up to 22'", price: "$550" },
          { size: "22' – 28'", price: "$700" },
          { size: "28' – 34'", price: "$850" },
          { size: "34' – 40'", price: "$1,000" },
        ],
      },
    },
  ];

  const galleryImages = [
    '/images/gallery-yacht-palm-trees.jpg',
    '/images/gallery-mega-yacht.jpg',
    '/images/hero-yacht-cruising.jpg',
    '/images/gallery-yacht-deck.jpg',
    '/images/hero-boat-ocean.jpg',
    '/images/hero-yacht-aerial.jpg',
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <Image
          src="/images/gallery-mega-yacht.jpg"
          alt="Boat Detailing Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        <div className="container-custom relative z-10 pt-24 md:pt-20">
          <div className="max-w-2xl">
            <span className="badge badge-primary mb-4 animate-fade-in-up">Professional Marine Service</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">
              <span className="text-outline">Boat</span> <span className="text-[#0080FF]">Detailing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional marine detailing that protects your boat from saltwater, sun, and oxidation. Keep your vessel looking like new.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-accent">
                Get Free Estimate
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="tel:978-660-1356" className="btn btn-secondary">
                (978) 660-1356
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Military Discount Banner */}
      <section className="bg-[#0080FF] py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-3xl">🎖️</span>
              <div>
                <span className="font-bold text-white text-lg">Military & First Responders:</span>
                <span className="text-white/90 ml-2">15% OFF all boat detailing services</span>
              </div>
            </div>
            <Link href="/contact" className="px-6 py-2 bg-white text-[#0080FF] font-semibold rounded-sm hover:bg-gray-100 transition-colors uppercase text-sm tracking-wide">
              Claim Discount
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes Our Boat Detailing Services Better */}
      <section className="py-20 bg-[#111111]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate-left">
              <span className="badge badge-primary mb-4">Why Us</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">
                <span className="text-outline">What Makes Our Boat Detailing</span> <span className="text-[#0080FF]">Services Better?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                At Liquid Shine, we are committed to delivering you the best Professional Mobile Detailing services possible. Whether you are looking to detail your Auto, Boat, or RV, we would love to have the opportunity to make your investment look beautiful!
              </p>
              <p className="text-white font-bold mb-4">Servicing all of Manatee and Sarasota Counties, including:</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {serviceAreas.map((area, i) => (
                  <span key={i} className="px-3 py-1 bg-[#0080FF]/20 text-[#0080FF] text-sm rounded-full border border-[#0080FF]/30">
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 mb-6">
                We come to you with everything we need in our fully self-contained unit.
              </p>
              <Link href="/contact" className="btn btn-accent">
                Request Your Free Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative scroll-animate-right">
              <div className="relative rounded-sm overflow-hidden border border-white/10">
                <Image
                  src="/images/gallery-mega-yacht.jpg"
                  alt="Professional Boat Detailing"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process - Circular Design */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-boat-ocean.jpg"
            alt="Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animate">
            <span className="badge badge-primary mb-4">Professional</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Process We Follow for <span className="text-[#0080FF]">Detailing</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We are a fully self-contained and mobile detailing service. We come to you and we bring everything we need. We provide our own power, water, and everything else necessary to give your auto, boat, or RV that Liquid Shine look.
            </p>
          </div>

          {/* Circular Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 items-start">
            {process.map((item, index) => (
              <div key={index} className={`relative scroll-animate scroll-delay-${index + 1} flex flex-col items-center text-center`}>
                {/* Circular Image Container */}
                <div className="relative mb-6 group">
                  <div className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:border-[#0080FF] transition-colors duration-500" style={{ margin: '-8px', padding: '8px' }} />

                  <div className="relative w-44 h-44 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-[#0080FF]/50 transition-all duration-500 shadow-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-7xl md:text-6xl lg:text-7xl font-black text-[#0080FF] drop-shadow-[0_0_20px_rgba(0,128,255,0.5)] z-10" style={{ fontFamily: 'Impact, sans-serif' }}>
                    {item.step}
                  </div>

                  {index < 3 && (
                    <div className="hidden md:flex absolute top-1/2 -right-6 lg:-right-4 -translate-y-1/2 items-center z-20">
                      <svg className="w-8 h-8 text-[#0080FF] animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                      </svg>
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wider">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boat Detailing Packages */}
      <section className="py-20 bg-[#111111]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animate">
            <span className="badge badge-primary mb-4">Experienced</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              <span className="text-outline">Our Boat Detailing</span> <span className="text-[#0080FF]">Packages</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Regardless of whether you want a quick wash with a little protection provided, or want a deeper cleaning with a longer shine added, we&apos;ve got a boat detailing package to fit your needs.
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-[#0a0a0a] border rounded-sm overflow-hidden transition-all duration-300 ${
                  openPackage === pkg.id ? 'border-[#0080FF]' : 'border-white/10'
                }`}
              >
                {/* Package Header */}
                <button
                  onClick={() => setOpenPackage(openPackage === pkg.id ? null : pkg.id)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <div>
                    <h3 className="text-2xl font-black text-[#0080FF] uppercase tracking-wide">
                      {pkg.name}
                    </h3>
                    {pkg.subtitle && (
                      <p className="text-white font-semibold mt-1">{pkg.subtitle}</p>
                    )}
                    <p className="text-gray-400 mt-2">{pkg.description}</p>
                  </div>
                  <svg
                    className={`w-6 h-6 text-[#0080FF] transition-transform duration-300 flex-shrink-0 ${
                      openPackage === pkg.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Package Content */}
                <div className={`overflow-hidden transition-all duration-500 ${openPackage === pkg.id ? 'max-h-[2000px]' : 'max-h-0'}`}>
                  <div className="p-6 pt-0 border-t border-white/10">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {/* Hull Includes */}
                      <div>
                        <h4 className="text-xl font-bold text-white mb-4">Hull Includes</h4>
                        <ul className="space-y-3">
                          {pkg.hullIncludes.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-[#0080FF] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-400 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Topside Includes */}
                      <div>
                        <h4 className="text-xl font-bold text-white mb-4">Topside Includes</h4>
                        <ul className="space-y-3">
                          {pkg.topsideIncludes.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-[#0080FF] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-400 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="bg-[#111111] rounded-sm p-6 border border-white/10">
                      <h4 className="text-xl font-bold text-[#0080FF] mb-6">{pkg.name} Prices:</h4>

                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Hull OR Topside Only */}
                        <div>
                          <h5 className="text-white font-semibold mb-4">Hull OR Topside Only:</h5>
                          <div className="space-y-2">
                            {pkg.prices.hullOrTopside.map((price, i) => (
                              <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                                <span className="text-gray-400">{price.size}</span>
                                <span className="text-[#0080FF] font-bold">{price.price}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Hull and Topside Combined */}
                        <div>
                          <h5 className="text-white font-semibold mb-4">Hull and Topside combined:</h5>
                          <div className="space-y-2">
                            {pkg.prices.combined.map((price, i) => (
                              <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                                <span className="text-gray-400">{price.size}</span>
                                <span className="text-[#0080FF] font-bold">{price.price}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Notes */}
                      <div className="mt-6 pt-6 border-t border-white/10 space-y-2 text-sm text-gray-500">
                        <p>• Vessels over 40&apos; — Call for quote</p>
                        <p>• Pricing is for center consoles, bowriders, flats, and bay boats. Express cruisers, cabin cruisers, and sport fishers add $100 up to 28&apos;, $150 28&apos; – 34&apos;, or $200 over 34&apos;.</p>
                        <p>• Additional charges apply for excessively dirty interiors (leaves or other debris removal) and/or excessively cluttered compartments that need to be emptied prior to cleaning.</p>
                        <p>• Add Engine and Engine Compartment Cleaning of inboard or inboard/outboard — $75 for single; $150 for twins</p>
                      </div>
                    </div>

                    <div className="mt-6 text-center">
                      <Link href="/contact" className="btn btn-accent">
                        Get Quote for {pkg.name}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12 scroll-animate">
            <span className="badge badge-primary mb-4">Experienced</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              <span className="text-outline">Our Boat Detailing</span> <span className="text-[#0080FF]">Gallery</span>
            </h2>
            <p className="text-gray-400">Check out the work we have done for other clients in the community!</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <div key={index} className={`scroll-animate-scale scroll-delay-${(index % 3) + 1} relative aspect-square rounded-sm overflow-hidden group border border-white/10 hover:border-[#0080FF]/30 transition-colors`}>
                <Image
                  src={src}
                  alt={`Boat detailing result ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/gallery" className="btn btn-secondary">
              View All of Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#111111] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0080FF] rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0080FF] rounded-full opacity-5 blur-3xl" />
        <div className="container-custom relative z-10 text-center scroll-animate-scale">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            <span className="text-outline">Keep Your Boat in</span> <span className="text-[#0080FF]">Pristine Condition</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Schedule your marine detailing appointment today and protect your investment from saltwater damage and oxidation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn btn-accent text-base px-8 py-4">
              Get Free Estimate
            </Link>
            <a href="tel:978-660-1356" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors uppercase tracking-wide">
              (978) 660-1356
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
