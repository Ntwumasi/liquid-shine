'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AutoDetailingPage() {
  const [openPackage, setOpenPackage] = useState<string | null>('express');

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
      desc: "Utilizing proper wash techniques, we clean the dirt and grime from your vehicle, we clay it and then dry it, preparing the surface for protection.",
      image: "/images/gallery-corvette-dark.jpg"
    },
    {
      step: "2",
      title: "MAKE IT SLICK",
      desc: "Quality products are used to provide protection for the paint from the environment and harmful UV rays. This keeps the surface shiny, slick, and looking showroom new.",
      image: "/images/IMG_5785.jpeg"
    },
    {
      step: "3",
      title: "CLEAN THE INSIDE",
      desc: "We vacuum the floorboards, shampoo the seats, steam the interior, and even use an extractor if needed to make sure that your interior ends up looking just as impressive as the outside does!",
      image: "/images/gallery-koenigsegg-white.jpg"
    },
    {
      step: "4",
      title: "DRESS IT UP",
      desc: "We dress up the all of the trim, plastics, and leather, and make the tires all shiny, giving your vehicle that Liquid Shine look!",
      image: "/images/IMG_5783.jpeg"
    },
  ];

  const serviceAreas = [
    "Tampa Area", "Bradenton", "Palmetto", "Ellenton", "Parrish",
    "Lakewood Ranch", "Anna Maria Island", "Holmes Beach",
    "Bradenton Beach", "Myakka", "Sarasota"
  ];

  const packages = [
    {
      id: 'express',
      name: "Express Package",
      description: "This package is designed for those vehicles that are reasonably well maintained and in good shape, and just need a little bit of love to make it look brand new again; this package is designed as a moderate cleaning package",
      exteriorIncludes: [
        "Pre-wash rinse of vehicle to rinse off loose dirt particles",
        "Degrease bugs, wheels, and tires",
        "Brush wash wheels, wheel barrels, and tires",
        "Clean door jams and trunk jams",
        "Engine bay degreased and cleaned",
        "Apply foam cannon soap to lift and encapsulate dirt particles from the paint",
        "Contact hand wash to remove dirt particles without marring the paint",
        "Clay mitt/towel paint contaminant removal to remove particles and contaminants imbedded in the paint",
        "Clean and decontaminate windshield",
        "Blow dry/hand dry with microfiber towel",
        "Add wax protection to Paint",
        "Dress tires to a satin shine",
        "Dress trim/black textured plastics with UV protectant",
        "Clean glass inside and out",
      ],
      interiorIncludes: [
        "Drill Brushed floors",
        "Compressed Air Blow out of floors",
        "Vacuum interior",
        "Floor mats, upholstered seats (if applicable) and trunk",
        "Wipe down and meticulously clean interior to include dashboard, door panels, consoles, leather/vinyl seats (if applicable), and the cracks, crevices, and vents",
        "Dress dashboard and all vinyl, plastics, and leather with UV protectant",
      ],
      note: "**This package is designed for vehicles that are in reasonably good shape and just need to be freshened up. It does NOT include deep cleaning of the interior. Pet hair, excessive ground-in dirt, and/or spills and stains will NOT be removed with this package. See Glossy or Liquid Shine packages to address these issues**",
      prices: [
        { size: "Coupe (small 2-door)", price: "$175", time: "2 to 3 hours" },
        { size: "Sedan (4-door car/Ford Ecosport/Chevy Trax or Equinox)", price: "$225", time: "2 to 3 hours" },
        { size: "Mid-Size SUV/Mid-Size Truck/Luxury Full Size Sedan", price: "$250-$275", time: "2 to 4 hours" },
        { size: "Full Size SUV/Full Size Truck/Minivan", price: "$300", time: "3 to 4 hours" },
        { size: "Oversized SUV/Oversized Truck", price: "$350", time: "3 to 4 hours" },
      ],
      petHairNote: "**Pet hair removal is not included as standard in this package. For moderate pet hair removal, add $50; for excessive pet hair removal, add $100**",
    },
    {
      id: 'glossy',
      name: "Glossy Package",
      description: "This package is for those vehicles that need a little bit of work, but when they get that work, they will be brought back to life and look stunning; this package is designed to be a deeper cleaning package",
      exteriorIncludes: [
        "Everything in the Express Package",
        "Additional clay bar paint contaminant removal, as necessary",
        "Machine application of polymer sealant for improved protection",
      ],
      interiorIncludes: [
        "Everything in the Express Package",
        "Steam clean interior, as necessary",
        "Headliner gently cleaned",
        "**Please note that headliners are sensitive; We will do the best we can to gently clean, but some stains may remain**",
        "Shampoo floorboards, floor mats, and cloth seats (if applicable)",
        "Carpet extraction will be utilized if necessary",
      ],
      prices: [
        { size: "Coupe", price: "$250", time: "3.5 to 4.5 hours" },
        { size: "Sedan", price: "$350", time: "3.5 to 4.5 hours" },
        { size: "Mid-SUV/Mid-Size Truck/Luxury Full Size Sedan", price: "$375", time: "4.5 to 5.5 hours" },
        { size: "Full Size SUV/Full Size Truck/Minivan", price: "$400", time: "5 to 6 hours" },
        { size: "Oversized SUV/Oversized Truck", price: "$450", time: "6+ hours" },
      ],
      petHairNote: "**Pet hair removal is not included as standard in this package. For moderate pet hair removal, add $50; for excessive pet hair removal, add $100**",
    },
    {
      id: 'liquid-shine',
      name: "Liquid Shine Package",
      description: "This package is for those people that not only want the best of the best for their vehicles, they want people to stop and gawk when they drive by",
      exteriorIncludes: [
        "Everything in Glossy Package",
        "Engine bay degreased, dried, and dressed, if authorized by the owner",
        "Machine application of an \"all-in-one\" polish and protectant to clean and enhance the paint and remove minor paint defects, and bring the paint to a deep shine",
        "Spray sealant applied as a \"topper\" for additional protection and shine",
        "Painted/clear coated wheel faces treated with high temperature protectant",
        "Chrome exhaust tips treated with high temperature protectant",
        "Can upgrade to a one-step paint enhancement — add $100",
      ],
      interiorIncludes: [
        "Everything in the Glossy Package",
        "Fabric guard protection applied to all fabric surfaces",
        "Leather fabric protectant applied",
      ],
      prices: [
        { size: "Coupe", price: "$375", time: "4 to 5 hours" },
        { size: "Sedan", price: "$450", time: "5 to 6 hours" },
        { size: "Mid-Size SUV/Mid-Size Truck/Luxury Full Size Sedan", price: "$525", time: "6 to 7 hours" },
        { size: "Full Size SUV/Full Size Truck/Minivan", price: "$600", time: "7+ hours" },
        { size: "Oversized SUV/Oversized Truck", price: "$675", time: "6+ hours" },
      ],
      petHairNote: "** Moderate pet hair removal is included in this package; for excessive pet hair removal, add $50",
      additionalNote: "Add Spray Ceramic Coating in place of wax/polymer sealant for $200",
    },
    {
      id: 'express-paint',
      name: "Express Paint Enhancement Package (One-Step)",
      description: "This package is for those vehicles that need some attention to their paint to look their best, but just need a little bit of work to be brought back to life",
      exteriorIncludes: [
        "Pre-wash rinse of vehicle to rinse off loose dirt particles",
        "Degrease bugs, wheels, and tires",
        "Brush wash wheels, wheel barrels, and tires",
        "Clean door jams and trunk jams",
        "Apply foam cannon soap to lift and encapsulate dirt particles from the paint",
        "Contact hand wash to remove dirt particles",
        "Chemical paint contaminant removal to remove iron particles attached to the paint",
        "Clay mitt/towel paint contaminant removal to remove particles and contaminants imbedded in the paint",
        "Clean and decontaminate windshield",
        "Blow dry/hand dry with microfiber towel",
        "Dress tires to a satin shine",
        "Dress trim/black textured plastics with UV protectant",
        "Clean glass inside and out",
        "Vehicle polished with one-step polish to remove light surface scratches, clean the paint, and provide a deep shine",
        "Machine application of wax/polymer sealant protection",
        "Spray sealant applied as a \"topper\" for additional protection",
        "Painted/clear coated wheel faces treated with high temperature protectant",
        "Chrome exhaust tips treated with high temperature protectant",
        "Engine bay degreased and dressed, if authorized by the owner",
        "Black textured plastics treated with UV protectant dressing",
        "Designed to remove approximately 50-65% of paint scratches and swirls",
      ],
      note: "**This is an EXTERIOR ONLY package**",
      additionalNote: "Add Spray Ceramic Coating in place of wax/polymer sealant for $200",
      prices: [
        { size: "Coupe", price: "$300", time: "4 to 5 hours" },
        { size: "Sedan", price: "$375", time: "4.5 to 5.5 hours" },
        { size: "Mid-Size SUV/Mid-Size Truck/Luxury Full Size Sedan", price: "$450", time: "5 to 6 hours" },
        { size: "Full Size SUV/Full Size Truck/Minivan", price: "$525", time: "6 to 7 hours" },
      ],
    },
    {
      id: 'advanced-paint',
      name: "Advanced Paint Enhancement Package (Two-Step)",
      description: "This package is for those vehicles that need more attention to their paint to look their best",
      exteriorIncludes: [
        "Pre-wash rinse of vehicle to rinse off loose dirt particles",
        "Degrease bugs, wheels, and tires",
        "Brush wash wheels, wheel barrels, and tires",
        "Clean door jams and trunk jams",
        "Apply foam cannon soap to lift and encapsulate dirt particles from the paint",
        "Contact hand wash to remove dirt particles",
        "Chemical paint contaminant removal to remove iron particles attached to the paint",
        "Clay mitt/towel paint contaminant removal to remove particles and contaminants imbedded in the paint",
        "Clean and decontaminate windshield",
        "Blow dry/hand dry with microfiber towel",
        "Dress tires to a satin shine",
        "Dress trim/black textured plastics with UV protectant",
        "Clean glass inside and out",
        "Light compounding to deep clean the paint and reduce scratches and swirls",
        "Light polish to increase depth and gloss of paint",
        "Paint sealant or wax applied for protection",
        "Painted/clear coated wheel faces treated with high temperature protectant",
        "Chrome exhaust tips treated with high temperature protectant",
        "Engine bay degreased and dressed, if authorized by the owner",
        "Black textured plastics treated with UV protectant dressing",
        "Designed to remove approximately 60-75% of paint scratches and swirls",
      ],
      note: "**This is an EXTERIOR ONLY package**",
      additionalNote: "Add Spray Ceramic Coating in place of wax/polymer sealant for $200",
      prices: [
        { size: "Coupe", price: "$575", time: "5 to 7 hours" },
        { size: "Sedan", price: "$650", time: "5 to 7 hours" },
        { size: "Mid-Size SUV/Mid-Size Truck/Luxury Full Size Sedan", price: "$725", time: "6 to 8 hours" },
        { size: "Full Size SUV/Full Size Truck/Minivan", price: "$800", time: "6 to 8 hours" },
      ],
    },
    {
      id: 'wash-vacuum',
      name: "Wash n Vacuum",
      description: "This is a basic detail package. No Cleaning of the interior occurs (stain removal, scuffs etc.). Designed for those vehicles that need maintenance or for those cars that don't need a full detail.",
      exteriorIncludes: [
        "Basic Exterior wash",
        "Spray sealant for 6 months of protection",
        "Provides a durable, glass-like shine",
        "Rims faces/tires",
        "Blow dry/hand dry with microfiber towel",
      ],
      interiorIncludes: [
        "Door Jambs",
        "Light Superficial Interior Vacuum",
        "Dusting of High Profile areas",
        "Interior/Exterior Windows",
        "Cleaning and dressing of floor mats",
      ],
      prices: [
        { size: "Sedan", price: "$150", time: "" },
        { size: "Mid Size SUV", price: "$175", time: "" },
        { size: "Trucks, Vans & Oversized", price: "$200", time: "" },
      ],
      note: "You are able to add requests to this but that will alter the price.",
    },
  ];

  const galleryImages = [
    '/images/IMG_5785.jpeg',
    '/images/IMG_5783.jpeg',
    '/images/IMG_5784.jpeg',
    '/images/Auto-Detailing-2018-Corvette-Convertible-After.jpg',
    '/images/gallery-corvette-dark.jpg',
    '/images/gallery-koenigsegg-white.jpg',
  ];

  const testimonials = [
    { name: "T. Harvey", text: "Thanks to Liquid Shine Elite Mobile Detailing for making my car look like new!", source: "Facebook" },
    { name: "Robert R.", text: "Incredible attention to detail. My car has never looked better. The ceramic coating they applied still beads water perfectly after 6 months!", source: "Google" },
    { name: "Sarah D.", text: "Professional, thorough, and the results speak for themselves. Highly recommend!", source: "Google" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <Image
          src="/images/IMG_5783.jpeg"
          alt="Auto Detailing Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        <div className="container-custom relative z-10 pt-24 md:pt-20">
          <div className="max-w-2xl">
            <span className="badge badge-primary mb-4 animate-fade-in-up">Professional Service</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">
              <span className="text-outline">Auto</span> <span className="text-[#0080FF]">Detailing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional auto detailing that transforms your vehicle inside and out. From basic washing to complete restoration.
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
                <span className="text-white/90 ml-2">15% OFF all auto detailing services</span>
              </div>
            </div>
            <Link href="/contact" className="px-6 py-2 bg-white text-[#0080FF] font-semibold rounded-sm hover:bg-gray-100 transition-colors uppercase text-sm tracking-wide">
              Claim Discount
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes Us Better Section */}
      <section className="py-20 bg-[#111111]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate-left">
              <span className="badge badge-primary mb-4">Why Us</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                What Makes Our Auto Detailing <span className="text-[#0080FF]">Services Better?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                At Liquid Shine, we are committed to delivering you the best Professional Mobile Detailing services possible. Whether you are looking to detail your Auto, Boat, or RV, we would love to have the opportunity to make your investment look beautiful!
              </p>
              <div className="mb-6">
                <p className="text-white font-bold mb-3">Servicing all of Manatee and Sarasota Counties, including:</p>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area, index) => (
                    <span key={index} className="px-3 py-1 bg-white/5 border border-white/10 rounded-sm text-gray-400 text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <svg className="w-5 h-5 text-[#0080FF] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
                <p className="text-gray-400">We come to you with everything we need in our fully self-contained unit</p>
              </div>
              <Link href="/contact" className="btn btn-accent mt-4">
                Request Your Free Quote
              </Link>
            </div>
            <div className="scroll-animate-right">
              <div className="relative rounded-sm overflow-hidden border border-white/10">
                <Image
                  src="/images/IMG_5783.jpeg"
                  alt="Exotic Car Detailing"
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
              Process We Follow for <span className="text-[#0080FF]">Auto Detailing</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We are a fully self-contained and mobile auto detailing service. We come to you and we bring everything we need. We provide our own power, water, and everything else necessary to give your auto, boat, or RV that Liquid Shine look.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 items-start">
            {process.map((item, index) => (
              <div key={index} className={`relative scroll-animate scroll-delay-${index + 1} flex flex-col items-center text-center`}>
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

      {/* Packages Section */}
      <section className="py-20 bg-[#111111]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animate">
            <span className="badge badge-primary mb-4">Experienced</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Our Auto Detailing <span className="text-[#0080FF]">Packages</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Regardless of whether you want a quick wash with a little protection provided, or want a deeper cleaning with a longer shine added, we&apos;ve got a package to fit your needs.
            </p>
          </div>

          <div className="space-y-4">
            {packages.map((pkg) => (
              <div key={pkg.id} className="border border-white/10 rounded-sm overflow-hidden">
                <button
                  onClick={() => setOpenPackage(openPackage === pkg.id ? null : pkg.id)}
                  className="w-full flex items-center justify-between p-6 bg-[#0a0a0a] hover:bg-white/5 transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-sm transition-colors ${openPackage === pkg.id ? 'bg-[#0080FF]' : 'bg-white/30'}`} />
                    <h3 className="text-xl md:text-2xl font-black text-[#0080FF]">{pkg.name}</h3>
                  </div>
                  <svg
                    className={`w-6 h-6 text-white transition-transform ${openPackage === pkg.id ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openPackage === pkg.id && (
                  <div className="p-6 bg-[#0a0a0a]/50 border-t border-white/10">
                    <p className="text-gray-400 mb-8">{pkg.description}</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      {pkg.exteriorIncludes && (
                        <div>
                          <h4 className="text-xl font-bold text-white mb-4">Exterior Includes</h4>
                          <ul className="space-y-2">
                            {pkg.exteriorIncludes.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                                <span className="text-[#0080FF] mt-1">■</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {pkg.interiorIncludes && (
                        <div>
                          <h4 className="text-xl font-bold text-white mb-4">Interior Includes</h4>
                          <ul className="space-y-2">
                            {pkg.interiorIncludes.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                                <span className="text-[#0080FF] mt-1">■</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {pkg.note && (
                      <p className="text-yellow-500/80 text-sm mb-6 italic">{pkg.note}</p>
                    )}

                    <div className="bg-white/5 border border-white/10 rounded-sm p-6">
                      <h4 className="text-xl font-bold text-white mb-4 text-center">Prices starting at:</h4>
                      <ul className="space-y-2 max-w-2xl mx-auto">
                        {pkg.prices.map((price, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                            <span className="text-[#0080FF] mt-1">■</span>
                            <span>
                              <span className="text-white font-semibold">{price.size}</span> — <span className="text-[#0080FF] font-bold">{price.price}</span>
                              {price.time && <span className="text-gray-500"> ({price.time} to complete)</span>}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-gray-500 text-xs mt-4 text-center">Prices stated are based on the vehicle being in average condition. Excessively dirty/stained interiors will result in additional charges</p>
                      {pkg.petHairNote && (
                        <p className="text-yellow-500/80 text-xs mt-2 text-center">{pkg.petHairNote}</p>
                      )}
                      {pkg.additionalNote && (
                        <p className="text-[#0080FF] text-sm mt-3 text-center font-semibold">{pkg.additionalNote}</p>
                      )}
                    </div>

                    <div className="text-center mt-6">
                      <Link href="/contact" className="btn btn-accent">
                        Get Quote for {pkg.name}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12 scroll-animate">
            <span className="badge badge-primary mb-4">Experienced</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Our Auto Detailing <span className="text-[#0080FF]">Gallery</span>
            </h2>
            <p className="text-gray-400">
              Check out the work we have done for other clients in the community!
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <div key={index} className={`scroll-animate-scale scroll-delay-${(index % 3) + 1} relative aspect-[4/3] rounded-sm overflow-hidden group border border-white/10 hover:border-[#0080FF]/30 transition-colors`}>
                <Image
                  src={src}
                  alt={`Auto detailing result ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/gallery" className="btn btn-secondary">
              View Our All Work
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#111111]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12 scroll-animate">
            <span className="badge badge-primary mb-4">Customer Focused</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              What Our <span className="text-[#0080FF]">Clients Say</span>
            </h2>
            <p className="text-gray-400">
              Check out all of the great things our past and present clients have to say about us and the work we&apos;ve done!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`scroll-animate scroll-delay-${index + 1} bg-[#0a0a0a] border border-white/10 rounded-sm p-8 text-center hover:border-[#0080FF]/30 transition-colors`}>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#0080FF]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-lg mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <p className="text-white font-bold">{testimonial.name}</p>
                <p className="text-[#0080FF] text-sm">— via {testimonial.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0080FF] rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0080FF] rounded-full opacity-5 blur-3xl" />
        <div className="container-custom relative z-10 text-center scroll-animate-scale">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            <span className="text-outline">Transform Your</span> <span className="text-[#0080FF]">Vehicle</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Schedule your auto detailing appointment and see the difference professional care can make.
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
