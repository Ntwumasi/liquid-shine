'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function RVDetailingPage() {
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
      desc: "Utilizing proper wash techniques, we clean the dirt and grime from your RV and then dry it, preparing the surface for protection.",
      image: "/images/gallery-rv-front.jpg"
    },
    {
      step: "2",
      title: "GO FOR A CLIMB",
      desc: "We head up to the roof to inspect the seams and sealant. We then clean the roof and make it sparkle like new.",
      image: "/images/gallery-rv-road.jpg"
    },
    {
      step: "3",
      title: "MAKE IT SLICK",
      desc: "Quality products are used to provide protection for the paint or gelcoat from the environment and harmful UV rays. This keeps the surface shiny, slick, and looking showroom new.",
      image: "/images/airstream-inc-hKw3HbDF1ew-unsplash.jpg"
    },
    {
      step: "4",
      title: "BRING THE SHINE",
      desc: "We clean the windows, polish the rims, and dress the tires, leaving your RV sparkling with a Liquid Shine.",
      image: "/images/camper-2260094_1920.jpg"
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
      description: "Complete exterior wash with carnauba wax protection",
      exteriorIncludes: [
        "Pre-wash rinse of vehicle to rinse off loose dirt particles",
        "Degrease bugs, wheels, and tires",
        "Brush wash wheels, wheel barrels, and tires",
        "Clean roof",
        "Apply foam cannon soap to lift dirt particles from the paint/gelcoat",
        "Contact hand wash to remove dirt particles",
        "Blow dry/hand dry with microfiber towel",
        "Windows cleaned to a streak free sparkling shine",
        "Machine apply carnauba wax protection",
        "Polish rims",
        "Dress tires to a satin shine",
      ],
      prices: [
        { type: "Travel Trailer", price: "$10/foot" },
        { type: "5th Wheel", price: "$13/foot" },
        { type: "Motorhome", price: "$15/foot" },
      ],
    },
    {
      id: 'liquid-shine',
      name: "Liquid Shine Package",
      description: "Everything in Glossy plus one-step polish and polymer sealant",
      basedOn: "Everything included in the Glossy Package, plus:",
      additionalIncludes: [
        "Vehicle polished with one-step polish to remove light surface scratches, clean the paint/gelcoat, and provide a deep shine",
        "Machine application of wax/polymer sealant protection",
        "Spray sealant applied as a \"topper\" for additional protection",
      ],
      prices: [
        { type: "Travel Trailer", price: "$15/foot" },
        { type: "5th Wheel", price: "$18/foot" },
        { type: "Motorhome", price: "$20/foot" },
      ],
    },
    {
      id: 'severe-oxidation',
      name: "Severe Oxidation Removal and Paint/Gelcoat Revitalization",
      description: "Complete restoration for heavily oxidized RVs",
      basedOn: "Everything included in the Liquid Shine Package, plus:",
      additionalIncludes: [
        "Vehicle compounded by machine to remove oxidation and surface scratches",
        "If oxidation is severe enough, additional compounding steps or wet sanding may be required to properly remove the oxidation",
        "Vehicle polished with a finishing wax/sealant to remove surface scratches and any marring caused by the compounding, clean the paint, and provide a deep shine",
      ],
      prices: [
        { type: "Travel Trailer", price: "$20/foot" },
        { type: "5th Wheel", price: "$23/foot" },
        { type: "Motorhome", price: "$25/foot" },
      ],
      note: "**Severe oxidation that requires multiple compounding or wet sanding steps will be charged an additional $5/foot for each additional step required",
    },
  ];

  const galleryImages = [
    '/images/gallery-rv-front.jpg',
    '/images/airstream-inc-hKw3HbDF1ew-unsplash.jpg',
    '/images/camping-beach-sea-landscape.jpg',
    '/images/camper-2260094_1920.jpg',
    '/images/gallery-rv-road.jpg',
    '/images/Class-Super-C-Motorhomes-Diesel-Class-C-RV.jpg',
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <Image
          src="/images/gallery-rv-road.jpg"
          alt="RV Detailing Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        <div className="container-custom relative z-10 pt-24 md:pt-20">
          <div className="max-w-2xl">
            <span className="badge badge-primary mb-4 animate-fade-in-up">Professional Service</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">
              <span className="text-outline">RV Detailing</span> <span className="text-[#0080FF]">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Whether you have a travel trailer, a fifth wheel, or a motorhome, we&apos;ve got you covered with an RV detailing package to fit your needs. If you live in Bradenton, Palmetto, Ellenton, Parrish, Lakewood Ranch, or Sarasota, we&apos;ll come to you with our mobile detailing setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-accent">
                Get Free Estimate
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="tel:978-660-1356" className="btn btn-secondary">
                Call Us Now!
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
                <span className="text-white/90 ml-2">15% OFF all RV detailing services</span>
              </div>
            </div>
            <Link href="/contact" className="px-6 py-2 bg-white text-[#0080FF] font-semibold rounded-sm hover:bg-gray-100 transition-colors uppercase text-sm tracking-wide">
              Claim Discount
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes Our RV Detailing Services Better */}
      <section className="py-20 bg-[#111111]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate-left">
              <span className="badge badge-primary mb-4">Why Us</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">
                <span className="text-outline">What Makes Our RV Detailing</span> <span className="text-[#0080FF]">Services Better?</span>
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
                  src="/images/1280px-Powerhouse_Coach_-_luxury_motor_coach_based_on_Volvo_NH12.jpg"
                  alt="Professional RV Detailing"
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
            src="/images/camping-beach-sea-landscape.jpg"
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

      {/* RV Detailing Packages */}
      <section className="py-20 bg-[#111111]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animate">
            <span className="badge badge-primary mb-4">Experienced</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              <span className="text-outline">Our RV Detailing</span> <span className="text-[#0080FF]">Packages</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Regardless of whether you want a quick wash with a little protection provided, or want a deeper cleaning with a longer shine added, we&apos;ve got an RV detailing package to fit your needs.
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
                    <h3 className="text-2xl font-black text-[#0080FF] uppercase tracking-wide flex items-center gap-3">
                      <span className="text-2xl">🚐</span>
                      {pkg.name}
                    </h3>
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
                <div className={`overflow-hidden transition-all duration-500 ${openPackage === pkg.id ? 'max-h-[1500px]' : 'max-h-0'}`}>
                  <div className="p-6 pt-0 border-t border-white/10">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {/* Includes */}
                      <div>
                        {pkg.basedOn ? (
                          <>
                            <h4 className="text-xl font-bold text-white mb-4">{pkg.basedOn}</h4>
                            <ul className="space-y-3">
                              {pkg.additionalIncludes?.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <svg className="w-5 h-5 text-[#0080FF] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                  <span className="text-gray-400 text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <>
                            <h4 className="text-xl font-bold text-white mb-4">Exterior Includes</h4>
                            <ul className="space-y-3">
                              {pkg.exteriorIncludes?.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <svg className="w-5 h-5 text-[#0080FF] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                  <span className="text-gray-400 text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>

                      {/* Pricing */}
                      <div>
                        <h4 className="text-xl font-bold text-white mb-4">Prices starting at:</h4>
                        <div className="space-y-3">
                          {pkg.prices.map((price, i) => (
                            <div key={i} className="flex justify-between items-center py-3 px-4 bg-[#111111] rounded-sm border border-white/10">
                              <span className="text-gray-300 font-medium">{price.type}</span>
                              <span className="text-[#0080FF] font-bold text-xl">{price.price}</span>
                            </div>
                          ))}
                        </div>

                        {pkg.note && (
                          <p className="mt-4 text-sm text-gray-500 italic">{pkg.note}</p>
                        )}
                      </div>
                    </div>

                    <div className="text-center">
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

      {/* RV Types We Service */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12 scroll-animate">
            <span className="badge badge-primary mb-4">All RV Types</span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              <span className="text-outline">RV Types</span> <span className="text-[#0080FF]">We Service</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { type: "Motorhomes", description: "Class A, B & C motorhomes", icon: "🚐" },
              { type: "Travel Trailers", description: "All sizes and types", icon: "🏕️" },
              { type: "Fifth Wheels", description: "Luxury and standard models", icon: "🚛" },
              { type: "Toy Haulers", description: "Specialized heavy-duty care", icon: "🎮" },
            ].map((item, index) => (
              <div key={index} className={`scroll-animate scroll-delay-${index + 1} bg-[#111111] p-6 rounded-sm text-center border border-white/10 hover:border-[#0080FF]/30 transition-all hover:-translate-y-1`}>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-white mb-2 uppercase tracking-wide">{item.type}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-[#111111]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12 scroll-animate">
            <span className="badge badge-primary mb-4">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              <span className="text-outline">RV Detailing</span> <span className="text-[#0080FF]">Gallery</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <div key={index} className={`scroll-animate-scale scroll-delay-${(index % 3) + 1} relative aspect-square rounded-sm overflow-hidden group border border-white/10 hover:border-[#0080FF]/30 transition-colors`}>
                <Image
                  src={src}
                  alt={`RV detailing result ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/gallery" className="btn btn-secondary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0080FF] rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0080FF] rounded-full opacity-5 blur-3xl" />
        <div className="container-custom relative z-10 text-center scroll-animate-scale">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            <span className="text-outline">Get Your RV Ready</span> <span className="text-[#0080FF]">for the Road</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Schedule your RV detailing appointment today and keep your home on wheels in top condition for all your adventures.
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
