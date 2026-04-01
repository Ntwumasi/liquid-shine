'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Custom hook for intersection observer
function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(element);
      }
    }, { threshold: 0.1, ...options });

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Section refs for animations
  const aboutSection = useInView();
  const servicesSection = useInView();
  const benefitsSection = useInView();
  const statsSection = useInView();
  const gallerySection = useInView();
  const certSection = useInView();
  const testimonialSection = useInView();

  const heroSlides = [
    {
      image: '/images/IMG_5783.jpeg',
      title: 'Exotic Car Specialists',
      subtitle: 'Lamborghini, Ferrari, and beyond',
    },
    {
      image: '/images/IMG_5785.jpeg',
      title: 'Professional Mobile Detailing',
      subtitle: 'We bring the shine to you',
    },
    {
      image: '/images/Ceramic-Coating-Tesla-1.jpg',
      title: 'Ceramic Coating Experts',
      subtitle: 'Long-lasting protection for your investment',
    },
    {
      image: '/images/hero-yacht-cruising.jpg',
      title: 'Marine Detailing',
      subtitle: 'Keep your vessel in pristine condition',
    },
    {
      image: '/images/gallery-rv-road.jpg',
      title: 'RV Detailing Services',
      subtitle: 'From roof to wheels, we do it all',
    },
  ];

  const services = [
    {
      title: 'Auto Detailing',
      description: 'Washing, waxing, polishing, buffing, paint correction, ceramic coating, engine bay cleaning, headlight restoration, interior cleaning, steam cleaning, carpet & upholstery shampooing and extraction, and fabric & leather protection.',
      href: '/auto-detailing',
      image: '/images/IMG_5785.jpeg',
      icon: '/images/car.png',
    },
    {
      title: 'Ceramic Coating',
      description: 'Professional-grade System X ceramic coating for years of protection and that incredible gloss finish. The most advanced paint protection available.',
      href: '/ceramic-coating',
      image: '/images/IMG_5783.jpeg',
      icon: '/images/shield-1.png.webp',
    },
    {
      title: 'Marine Detailing',
      description: 'Washing, waxing, polishing, buffing, wet-sanding, oxidation removal, mold & mildew removal, brightwork polishing, non-skid cleaning, compartment cleaning, engine room cleaning, and fiberglass cleaning & protection.',
      href: '/boat-detailing',
      image: '/images/hero-boat-ocean.jpg',
      icon: '/images/boat.png',
    },
    {
      title: 'RV Detailing',
      description: 'Washing, waxing, polishing, buffing, wet-sanding, oxidation removal, bug removal, roof cleaning, window cleaning, wheels cleaned & polished, and tires & trim dressed.',
      href: '/rv-detailing',
      image: '/images/gallery-rv-front.jpg',
      icon: '/images/noun_motorhome_541935-1.png',
    },
  ];

  const serviceAreas = {
    manatee: ['Bradenton', 'Palmetto', 'Ellenton', 'Parrish', 'Lakewood Ranch', 'Anna Maria Island', 'Holmes Beach', 'Bradenton Beach', 'Myakka'],
    sarasota: ['Sarasota', 'Venice', 'Osprey', 'Nokomis', 'North Port', 'Englewood'],
  };

  const testimonials = [
    {
      name: 'Robert Rietz',
      role: 'Tesla Model S Owner',
      text: 'Incredible attention to detail. My car has never looked better. The ceramic coating they applied still beads water perfectly after 6 months!',
    },
    {
      name: 'Sarah Duncan',
      role: 'Boat Owner',
      text: 'They came to my marina and transformed my boat. Professional, thorough, and the results speak for themselves. Highly recommend!',
    },
    {
      name: 'Chris Ohler',
      role: 'RV Enthusiast',
      text: 'Best mobile detailing service in the area. They handled my 40ft RV with care and expertise. Worth every penny.',
    },
  ];

  const galleryImages = [
    { src: '/images/IMG_5783.jpeg', alt: 'Lamborghini Huracán STO' },
    { src: '/images/IMG_5785.jpeg', alt: 'Ferrari 488' },
    { src: '/images/IMG_5784.jpeg', alt: 'Lamborghini Wheel Detail' },
    { src: '/images/gallery-corvette-dark.jpg', alt: 'Corvette Detail' },
    { src: '/images/Ceramic-Coating-Tesla-3.jpg', alt: 'Tesla Ceramic Coating' },
    { src: '/images/gallery-koenigsegg-white.jpg', alt: 'Exotic Car Detail' },
    { src: '/images/Auto-Detailing-2018-Corvette-Convertible-After.jpg', alt: 'Corvette Convertible' },
    { src: '/images/Auto-Detailing-2018-BMW-3-Series.jpg', alt: 'BMW 3 Series' },
    { src: '/images/gallery-interior-leather.jpg', alt: 'Interior Detail' },
  ];

  const stats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '8+', label: 'Years Experience' },
    { value: '100%', label: 'Satisfaction' },
    { value: '24/7', label: 'Support' },
  ];

  const benefits = [
    { title: 'Durability', desc: 'Protection that lasts for years, not months' },
    { title: 'Easy Maintenance', desc: 'Dirt and grime wash off effortlessly' },
    { title: 'Stunning Aesthetics', desc: 'Deep gloss and mirror-like finish' },
    { title: 'Increased Value', desc: 'Preserve and protect your investment' },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero Slider Section */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
                <span className="w-2 h-2 bg-[#0080FF] rounded-full animate-pulse" />
                Serving Manatee & Sarasota Counties
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight uppercase tracking-tight">
                <span className="text-outline">
                  {heroSlides[currentSlide].title.split(' ').slice(0, -1).join(' ')}
                </span>{' '}
                <span className="text-[#0080FF]">
                  {heroSlides[currentSlide].title.split(' ').slice(-1)}
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                {heroSlides[currentSlide].subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link href="/contact" className="btn btn-accent text-base px-8 py-4">
                  Book Your Appointment
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a href="tel:978-660-1356" className="btn btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-gray-900 text-base px-8 py-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (978) 660-1356
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-[#0080FF] w-8'
                  : 'bg-white/50 hover:bg-white/80 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow Navigation - Hidden on mobile for cleaner touch experience */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 items-center justify-center text-white hover:bg-white/20 transition-all hidden md:flex"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 items-center justify-center text-white hover:bg-white/20 transition-all hidden md:flex"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      {/* Military Discount Banner */}
      <section className="py-4 bg-[#0080FF]">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white text-center sm:text-left">
              All active duty <span className="font-bold">Military, Veterans, and First Responders</span> get a <span className="text-white font-bold underline">10% Discount</span> off of all services
            </p>
            <Link href="/contact" className="px-5 py-2 bg-white text-[#0080FF] font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap text-sm">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-[#0a0a0a]">
        <div className="container-custom" ref={aboutSection.ref}>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${aboutSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <span className="badge badge-primary mb-4">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                We are a Professional Mobile Detailing Service{' '}
                <span className="gradient-text">Committed To Excellence</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                At Liquid Shine, we are committed to delivering you the best Professional Mobile Detailing services possible. Whether you are looking to detail your Auto, Boat, or RV, we would love to have the opportunity to make it look beautiful.
              </p>

              <h3 className="font-bold text-white mb-4">Servicing all of Manatee and Sarasota Counties, including:</h3>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#0080FF] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-400">{serviceAreas.manatee.join(', ')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#0080FF] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-400">{serviceAreas.sarasota.join(', ')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#0080FF] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-400">We come to you with everything we need in our fully self-contained unit</span>
                </li>
              </ul>

              <Link href="/contact" className="btn btn-primary">
                Book Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="relative">
              <Image
                src="/images/hero-yacht-cruising.jpg"
                alt="Yacht Detailing"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-[#111111] relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0080FF]/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float delay-300" />
        </div>
        <div className="container-custom relative" ref={servicesSection.ref}>
          <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-1000 ${servicesSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="badge badge-primary mb-4">Professional</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              <span className="text-outline">Detailing Services We</span> <span className="text-[#0080FF]">Offer</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We are a fully self-contained and mobile detailing service. We come to you and we bring everything we need. We provide our own power, water, and everything else necessary to give your auto, boat, or RV that Liquid Shine look.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.filter(s => s.title !== 'Ceramic Coating').map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className={`group text-center transition-all duration-700 ${servicesSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Angular Image */}
                <div className="relative w-40 h-40 mx-auto mb-6 rounded-lg overflow-hidden border-2 border-white/10 group-hover:border-[#0080FF] transition-all duration-300 clip-corners">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed px-4">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-primary mb-4">See Our Work</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              <span className="text-outline">Detailing</span> <span className="text-[#0080FF]">In Action</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Watch our team bring vehicles back to showroom condition
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              { src: '/videos/IMG_3796.mov', poster: '/images/IMG_5783.jpeg' },
              { src: '/videos/IMG_3854.MOV', poster: '/images/IMG_5785.jpeg' },
              { src: '/videos/IMG_3857.MOV', poster: '/images/IMG_5784.jpeg' },
              { src: '/videos/E7643D04-E42C-4C0E-A124-F0423EFE1FF1.MOV', poster: '/images/gallery-corvette-dark.jpg' },
            ].map((video, index) => (
              <div
                key={index}
                className="relative aspect-[9/16] rounded-lg overflow-hidden border border-white/10 hover:border-[#0080FF]/50 transition-all shadow-xl cursor-pointer"
                onClick={(e) => {
                  const videoEl = e.currentTarget.querySelector('video');
                  const overlay = e.currentTarget.querySelector('.video-overlay') as HTMLElement;
                  if (videoEl) {
                    if (videoEl.paused) {
                      videoEl.play();
                      if (overlay) overlay.style.opacity = '0';
                    } else {
                      videoEl.pause();
                      if (overlay) overlay.style.opacity = '1';
                    }
                  }
                }}
              >
                <video
                  className="w-full h-full object-cover"
                  poster={video.poster}
                  muted
                  loop
                  playsInline
                  onEnded={(e) => {
                    const overlay = e.currentTarget.parentElement?.querySelector('.video-overlay') as HTMLElement;
                    if (overlay) overlay.style.opacity = '1';
                  }}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                {/* Play indicator */}
                <div className="video-overlay absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center active:scale-90 transition-transform">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Benefits */}
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0080FF]/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative" ref={benefitsSection.ref}>
          <div className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-1000 ${benefitsSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              <span className="text-outline">Why Choose</span> <span className="text-[#0080FF]">Liquid Shine?</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Experience the difference professional mobile detailing makes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 text-center hover:bg-white/10 hover:border-[#0080FF]/30 hover:-translate-y-2 transition-all duration-500 ${benefitsSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#0080FF] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-500">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#111111] border-y border-white/5" ref={statsSection.ref}>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${statsSection.isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-6xl font-bold text-[#0080FF] mb-2">{stat.value}</div>
                <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-24 bg-[#0a0a0a]" ref={gallerySection.ref}>
        <div className="container-custom">
          <div className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-1000 ${gallerySection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="badge badge-primary mb-4">Experienced</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Work <span className="gradient-text">Gallery</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Check out the work we have done for other clients in the community!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <Link
                key={index}
                href="/gallery"
                className={`relative aspect-square overflow-hidden rounded-sm group cursor-pointer transition-all duration-700 hover:shadow-2xl border border-white/10 hover:border-[#0080FF]/30 ${gallerySection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-medium text-sm">View Gallery</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/gallery" className="btn btn-primary">
              View Full Gallery
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* System X Certification */}
      <section className="py-20 bg-[#111111]" ref={certSection.ref}>
        <div className="container-custom">
          <div className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 ${certSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="lg:w-1/3 flex justify-center">
              <Image
                src="/images/logo-system-x-authorized-installer.jpeg"
                alt="System X Authorized Installer"
                width={300}
                height={300}
                className="rounded-2xl shadow-lg border border-white/10"
              />
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <span className="badge badge-primary mb-4">Certified Excellence</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Authorized System X Ceramic Coating Installer
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                We are proud to be an authorized installer of System X ceramic coatings — the most advanced paint protection available. Our certified technicians use only genuine System X products to ensure your vehicle receives the highest level of protection and shine.
              </p>
              <Link href="/ceramic-coating" className="btn btn-primary">
                Learn About Ceramic Coating
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#0a0a0a]" ref={testimonialSection.ref}>
        <div className="container-custom">
          <div className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-1000 ${testimonialSection.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="badge badge-primary mb-4">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-[#111111] rounded-sm p-8 md:p-12 border border-white/10">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-[#0080FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
                &ldquo;{testimonials[currentTestimonial].text}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-white text-lg">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-500">{testimonials[currentTestimonial].role}</p>
                </div>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? 'bg-[#0080FF] w-8'
                          : 'bg-white/20 hover:bg-white/40 w-3'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#111111] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0080FF] rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0080FF] rounded-full opacity-5 blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              <span className="text-outline">Ready to Get</span> <span className="text-[#0080FF]">Started?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Contact us today for a free quote and discover why hundreds of vehicle owners trust Liquid Shine for their detailing needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-accent text-base px-8 py-4">
                Book Your Appointment
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="tel:978-660-1356" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (978) 660-1356
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
