'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function CeramicCoatingPage() {
  // Initialize scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale'
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  const benefits = [
    {
      title: "Long-Lasting Protection",
      desc: "Shield your vehicle from UV rays, oxidation, bird droppings, tree sap, and harsh chemicals for years, not months.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Hydrophobic Properties",
      desc: "Water beads up and rolls off effortlessly, taking dirt and contaminants with it. Your car stays cleaner, longer.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Enhanced Gloss & Shine",
      desc: "Achieve that deep, wet-look shine that turns heads. Ceramic coating enhances your paint's depth and clarity.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: "Scratch Resistance",
      desc: "The hardened ceramic layer provides a sacrificial barrier against light scratches, swirl marks, and minor abrasions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Reduced Maintenance",
      desc: "Spend less time washing and more time enjoying your vehicle. Dirt and grime wash off with minimal effort.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Chemical Resistance",
      desc: "Protect against acid rain, bug splatter, and environmental contaminants that can etch and damage unprotected paint.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const systemXProducts = [
    {
      name: "CRYSTAL",
      warranty: "3 Year",
      description: "Entry-level professional ceramic protection. Perfect for daily drivers seeking enhanced gloss and basic protection.",
      features: ["UV Protection", "Hydrophobic Surface", "Enhanced Gloss", "Easy Maintenance"],
      tier: "Entry",
    },
    {
      name: "PRO",
      warranty: "6 Year",
      description: "Mid-range protection with superior durability. Ideal for enthusiasts who want long-lasting results.",
      features: ["Everything in Crystal", "Increased Hardness", "Better Chemical Resistance", "Deeper Gloss"],
      tier: "Popular",
      popular: true,
    },
    {
      name: "MAX",
      warranty: "10 Year",
      description: "Ultimate protection with lifetime-grade durability. For collectors and those who demand the absolute best.",
      features: ["Everything in Pro", "Maximum Hardness (9H)", "Lifetime-Grade Durability", "Premium Finish"],
      tier: "Premium",
    },
  ];

  const process = [
    {
      step: "1",
      title: "CLEAN THE GRIME",
      desc: "Utilizing proper wash techniques, we clean the dirt and grime from your vehicle, we chemically decontaminate and clay bar it, and then dry it, preparing the surface for protection.",
      image: "/images/gallery-corvette-dark.jpg"
    },
    {
      step: "2",
      title: "POLISH IT UP",
      desc: "A high speed dual action polisher and quality polishing compounds are utilized to remove paint swirls and scratches, and to polish the paint to make it POP!",
      image: "/images/gallery-koenigsegg-white.jpg"
    },
    {
      step: "3",
      title: "COAT IT OVER",
      desc: "We use professional grade coatings from System X to coat your vehicle with a 3-year, 6-year, or 10-year coating to give it a highly durable and hydrophobic protective layer, and a deep, \"wet look\" shine!",
      image: "/images/Ceramic-Coating-Tesla-3.jpg"
    },
    {
      step: "4",
      title: "DRESS TO SHINE",
      desc: "We coat all of the trim and plastic pieces with a ceramic coating to provide quality UV protection and a deep gloss, and make the tires all shiny, giving your vehicle that Liquid Shine look!",
      image: "/images/Auto-Detailing-2018-Corvette-Convertible-After.jpg"
    },
  ];

  const packages = [
    {
      name: "One-Step Express",
      warranty: "3-Year Crystal",
      description: "Light polish + ceramic coating for vehicles in good condition",
      prices: { coupe: 800, sedan: 900, midSuv: 1000, fullSize: 1100 },
    },
    {
      name: "One-Step Glossy",
      warranty: "6-Year Pro",
      description: "Standard polish + ceramic coating for enhanced gloss and protection",
      prices: { coupe: 1200, sedan: 1300, midSuv: 1400, fullSize: 1500 },
      popular: true,
    },
    {
      name: "One-Step Liquid Shine",
      warranty: "10-Year Max",
      description: "Deep polish + premium ceramic coating for maximum protection",
      prices: { coupe: 1600, sedan: 1700, midSuv: 1800, fullSize: 1900 },
    },
    {
      name: "Two-Step Express",
      warranty: "3-Year Crystal",
      description: "Two-stage polish + ceramic coating for paint correction",
      prices: { coupe: 1100, sedan: 1200, midSuv: 1300, fullSize: 1400 },
    },
    {
      name: "Two-Step Glossy",
      warranty: "6-Year Pro",
      description: "Two-stage polish + ceramic coating for significant paint correction",
      prices: { coupe: 1500, sedan: 1600, midSuv: 1700, fullSize: 1800 },
    },
    {
      name: "Two-Step Liquid Shine",
      warranty: "10-Year Max",
      description: "Full paint correction + premium ceramic for show-quality finish",
      prices: { coupe: 1900, sedan: 2000, midSuv: 2100, fullSize: 2200 },
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <Image
          src="/images/Ceramic-Coating-Tesla-1.jpg"
          alt="Ceramic Coating Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        <div className="container-custom relative z-10 pt-24 md:pt-20">
          <div className="max-w-2xl">
            <span className="badge badge-primary mb-4 animate-fade-in-up">System X Authorized Installer</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">
              <span className="text-outline">Ceramic</span> <span className="text-[#0080FF]">Coating</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional-grade ceramic coating protection that delivers a deep &quot;wet look&quot; shine and superior water-shedding capabilities for years of protection.
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
                <span className="text-white/90 ml-2">10% OFF all ceramic coating services</span>
              </div>
            </div>
            <Link href="/contact" className="px-6 py-2 bg-white text-[#0080FF] font-semibold rounded-sm hover:bg-gray-100 transition-colors uppercase text-sm tracking-wide">
              Claim Discount
            </Link>
          </div>
        </div>
      </section>

      {/* What is Ceramic Coating Section */}
      <section className="py-20 bg-[#111111]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate-left">
              <span className="badge badge-primary mb-4">What Is It?</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">
                <span className="text-outline">What Is</span> <span className="text-[#0080FF]">Ceramic Coating?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                Ceramic coating is a liquid polymer that chemically bonds with your vehicle&apos;s factory paint, creating a permanent or semi-permanent layer of protection. Unlike traditional waxes that sit on top of the paint and wash away, ceramic coating becomes part of your paint&apos;s surface.
              </p>
              <p className="text-gray-400 text-lg mb-6">
                Whether you have a one-of-a-kind exotic car or just a daily driver that you love, we have a professional ceramic coating package to protect your investment and keep it looking showroom-new for years to come.
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/logo-system-x-authorized-installer.jpeg"
                  alt="System X Authorized"
                  width={120}
                  height={120}
                  className="rounded-sm border border-white/10"
                />
                <div>
                  <p className="text-white font-bold">Authorized Installer</p>
                  <p className="text-gray-500 text-sm">System X Ceramic Coatings</p>
                </div>
              </div>
            </div>
            <div className="relative scroll-animate-right">
              {/* Video Section */}
              <div className="relative rounded-sm overflow-hidden border border-white/10">
                <video
                  className="w-full aspect-video"
                  controls
                  poster="/images/Ceramic-Coating-Tesla-2.jpg"
                >
                  <source src="/videos/Ceramic-Coating-System-X-Automotive-Video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-gray-500 text-sm mt-3 text-center">System X Ceramic Coating in Action</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animate">
            <span className="badge badge-primary mb-4">Why Ceramic Coating?</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              <span className="text-outline">Benefits Of</span> <span className="text-[#0080FF]">Ceramic Coating</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Discover why thousands of vehicle owners choose professional ceramic coating over traditional wax and sealants.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className={`scroll-animate scroll-delay-${index + 1} bg-white/5 border border-white/10 p-8 rounded-sm hover:border-[#0080FF]/30 transition-all group`}>
                <div className="w-16 h-16 mb-6 rounded-sm bg-[#0080FF]/20 flex items-center justify-center text-[#0080FF] group-hover:bg-[#0080FF] group-hover:text-white transition-all">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{benefit.title}</h3>
                <p className="text-gray-500">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Video Section - Modern Design */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container-custom">
          {/* Video Container */}
          <div className="max-w-5xl mx-auto scroll-animate">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 group">
              {/* Decorative border glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0080FF]/20 via-transparent to-[#0080FF]/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Video iframe */}
              <div className="relative aspect-video bg-black rounded-xl overflow-hidden border border-white/10">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/Ni-dbFSq5-I?start=34&rel=0&modestbranding=1"
                  title="System X Ceramic Coating"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* System X Authorization Section */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="scroll-animate-left">
              <h2 className="text-3xl md:text-4xl font-black text-[#0080FF] mb-6 leading-tight">
                Professional Ceramic Coating Installers Authorized to Install System X Coatings
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                At Liquid Shine, we are authorized installers of System X ceramic coating products. We carry and regularly install the 3-year Crystal coating, 6-year Pro coating, and the 10-year Max coating. Contact us to see which coating will best fit your needs and your budget!
              </p>
              <Link href="/contact" className="btn btn-accent">
                Request Your Free Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="scroll-animate-right flex justify-center lg:justify-end">
              <div className="relative bg-[#111111] rounded-xl p-8 border border-white/10 shadow-2xl max-w-sm">
                {/* Accredited badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-sm">
                  Accredited Installation Center
                </div>

                {/* System X Logo */}
                <div className="mt-4">
                  <Image
                    src="/images/logo-system-x-authorized-installer.jpeg"
                    alt="System X Ceramic Protection - Accredited Installation Center"
                    width={280}
                    height={140}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System X Products Section */}
      <section className="py-20 bg-[#111111]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animate">
            <span className="badge badge-primary mb-4">System X Ceramic</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              <span className="text-outline">Protection</span> <span className="text-[#0080FF]">Levels</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We exclusively use System X® ceramic coatings — the most advanced paint protection available. Choose the level of protection that fits your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {systemXProducts.map((product, index) => (
              <div key={index} className={`scroll-animate-scale scroll-delay-${index + 1} bg-[#0a0a0a] border rounded-sm overflow-hidden transition-all hover:border-[#0080FF]/50 ${product.popular ? 'border-[#0080FF] ring-1 ring-[#0080FF]' : 'border-white/10'}`}>
                {product.popular && (
                  <div className="bg-[#0080FF] text-white text-center py-2 font-bold text-sm uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">{product.tier}</p>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tight">
                      System X <span className="text-[#0080FF]">{product.name}</span>
                    </h3>
                    <p className="text-[#0080FF] font-bold text-xl mt-2">{product.warranty} Warranty</p>
                  </div>
                  <p className="text-gray-400 text-center mb-6">{product.description}</p>
                  <ul className="space-y-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-400">
                        <svg className="w-5 h-5 text-[#0080FF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process - Modern Circular Design */}
      <section className="py-24 relative overflow-hidden">
        {/* Background with gradient overlay */}
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
              Process We Follow for <span className="text-[#0080FF]">Auto Ceramic Coating</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We are a fully self-contained and mobile ceramic coating and auto detailing service. We come to you and we bring everything we need. We provide our own power, water, and everything else necessary to give your auto, boat, or RV that Liquid Shine look.
            </p>
          </div>

          {/* Circular Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 items-start">
            {process.map((item, index) => (
              <div key={index} className={`relative scroll-animate scroll-delay-${index + 1} flex flex-col items-center text-center`}>
                {/* Circular Image Container */}
                <div className="relative mb-6 group">
                  {/* Outer ring with glow */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:border-[#0080FF] transition-colors duration-500" style={{ margin: '-8px', padding: '8px' }} />

                  {/* Image circle */}
                  <div className="relative w-44 h-44 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-[#0080FF]/50 transition-all duration-500 shadow-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Step Number - Large and Bold */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-7xl md:text-6xl lg:text-7xl font-black text-[#0080FF] drop-shadow-[0_0_20px_rgba(0,128,255,0.5)] z-10" style={{ fontFamily: 'Impact, sans-serif' }}>
                    {item.step}
                  </div>

                  {/* Arrow to next step */}
                  {index < 3 && (
                    <div className="hidden md:flex absolute top-1/2 -right-6 lg:-right-4 -translate-y-1/2 items-center z-20">
                      <svg className="w-8 h-8 text-[#0080FF] animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                      </svg>
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wider">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-[#111111]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16 scroll-animate">
            <span className="badge badge-primary mb-4">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              <span className="text-outline">Coating</span> <span className="text-[#0080FF]">Packages</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Choose from our one-step or two-step packages based on your vehicle&apos;s current condition.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div key={index} className={`scroll-animate scroll-delay-${(index % 3) + 1} bg-[#0a0a0a] rounded-sm border overflow-hidden hover:border-[#0080FF]/50 transition-all ${pkg.popular ? 'border-[#0080FF] ring-1 ring-[#0080FF]' : 'border-white/10'}`}>
                {pkg.popular && (
                  <div className="bg-[#0080FF] text-white text-center py-2 font-bold text-sm uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 uppercase">{pkg.name}</h3>
                  <p className="text-[#0080FF] font-semibold mb-3">{pkg.warranty} Warranty</p>
                  <p className="text-gray-500 text-sm mb-6">{pkg.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm mb-6">
                    <div className="bg-white/5 border border-white/10 p-3 rounded-sm text-center">
                      <p className="text-gray-500 text-xs">Coupe</p>
                      <p className="font-bold text-[#0080FF] text-lg">${pkg.prices.coupe}</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-3 rounded-sm text-center">
                      <p className="text-gray-500 text-xs">Sedan</p>
                      <p className="font-bold text-[#0080FF] text-lg">${pkg.prices.sedan}</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-3 rounded-sm text-center">
                      <p className="text-gray-500 text-xs">Mid-SUV</p>
                      <p className="font-bold text-[#0080FF] text-lg">${pkg.prices.midSuv}</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-3 rounded-sm text-center">
                      <p className="text-gray-500 text-xs">Full-Size</p>
                      <p className="font-bold text-[#0080FF] text-lg">${pkg.prices.fullSize}</p>
                    </div>
                  </div>
                  <Link href="/contact" className="block w-full btn btn-primary text-center text-sm py-3">
                    Get Quote
                  </Link>
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
            <span className="badge badge-primary mb-4">Our Results</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              <span className="text-outline">Ceramic Coating</span> <span className="text-[#0080FF]">Gallery</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/images/Ceramic-Coating-Tesla-1.jpg',
              '/images/Ceramic-Coating-Tesla-2.jpg',
              '/images/Ceramic-Coating-Tesla-3.jpg',
              '/images/gallery-corvette-dark.jpg',
              '/images/Auto-Detailing-2018-Corvette-Convertible-After.jpg',
              '/images/Auto-Detailing-2018-BMW-3-Series.jpg',
              '/images/gallery-koenigsegg-white.jpg',
              '/images/Auto-Detailing-2018-Dodge-Charger.jpg',
            ].map((src, index) => (
              <div key={index} className={`scroll-animate-scale scroll-delay-${(index % 4) + 1} relative aspect-square rounded-sm overflow-hidden group border border-white/10 hover:border-[#0080FF]/30 transition-colors`}>
                <Image
                  src={src}
                  alt={`Ceramic coating result ${index + 1}`}
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
      <section className="py-20 bg-[#111111] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0080FF] rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0080FF] rounded-full opacity-5 blur-3xl" />
        <div className="container-custom relative z-10 text-center scroll-animate-scale">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            <span className="text-outline">Protect Your</span> <span className="text-[#0080FF]">Investment</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Schedule your ceramic coating consultation today and experience the Liquid Shine difference.
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
