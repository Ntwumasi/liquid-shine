'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  const [clientsCount, setClientsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);

  // Animate counters on mount
  useEffect(() => {
    const clientsTarget = 500;
    const yearsTarget = 8;
    const satisfactionTarget = 100;
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setClientsCount(Math.floor(clientsTarget * progress));
      setYearsCount(Math.floor(yearsTarget * progress));
      setSatisfactionCount(Math.floor(satisfactionTarget * progress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:pt-40 sm:pb-32 overflow-hidden bg-gradient-to-br from-[#004FBB] via-[#0066cc] to-[#004FBB]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFBA00] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge badge-accent mb-6">Serving Manatee & Sarasota Counties</span>
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
              About Liquid Shine
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
              Elite Mobile Detailing Excellence Since 2016
            </p>
          </div>
        </div>
      </section>

      {/* Story Section with Owner Image */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-large">
                <Image
                  src="/images/Overstreet-Head-Shot-scaled.jpg"
                  alt="Liquid Shine Owner"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="badge badge-primary mb-4">Our Story</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                The Liquid Shine Story
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Liquid Shine Elite Mobile Detailing was born from a passion for perfection and a commitment to delivering unparalleled service. Proudly serving Manatee and Sarasota Counties in Florida, we bring professional detailing directly to your location.
                </p>
                <p>
                  Our journey began with a simple belief: your vehicle deserves the highest level of care and attention. Whether it's your daily driver, luxury car, boat, or RV, we treat every vehicle as if it were our own, using premium products and proven techniques.
                </p>
                <p>
                  What sets us apart is our mobile advantage. We come to you, saving you time while delivering showroom-quality results. Our dedication to excellence and customer satisfaction has made us the trusted choice for discerning vehicle owners throughout the region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="badge badge-primary mb-4">Our Foundation</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at Liquid Shine
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quality */}
            <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 border-t-4 border-[#004FBB]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#004FBB] to-[#0066cc] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                We use only premium products and proven techniques to deliver exceptional results every time.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 border-t-4 border-[#FFBA00]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFBA00] to-[#e5a800] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                Honest, transparent service built on trust and respect for our clients and their vehicles.
              </p>
            </div>

            {/* Customer Service */}
            <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 border-t-4 border-[#004FBB]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#004FBB] to-[#0066cc] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Customer Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Your satisfaction is our priority. We go above and beyond to exceed expectations.
              </p>
            </div>

            {/* Excellence */}
            <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 border-t-4 border-[#FFBA00]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFBA00] to-[#e5a800] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for perfection in every detail, making your vehicle look its absolute best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-large p-8 sm:p-12 border border-gray-200">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                    <Image
                      src="/images/logo-system-x-authorized-installer.jpeg"
                      alt="System X Authorized Installer"
                      width={224}
                      height={224}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div>
                  <span className="badge badge-accent mb-4">Certified Professional</span>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    System X Authorized Installer
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    We are proud to be a certified System X installer, bringing you the most advanced ceramic coating technology available. This certification ensures you receive professional-grade protection backed by industry-leading warranty coverage.
                  </p>
                  <p className="text-gray-600">
                    System X ceramic coatings provide unmatched durability, UV protection, and a stunning finish that lasts for years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-gradient-to-br from-[#004FBB] via-[#0066cc] to-[#004FBB] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFBA00] rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white/20 text-white backdrop-blur-sm mb-4">
              Proven Track Record
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              By The Numbers
            </h2>
            <p className="text-xl text-blue-100">
              Excellence measured in results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* 500+ Clients */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-6xl sm:text-7xl font-bold text-[#FFBA00] mb-2">
                {clientsCount}+
              </div>
              <p className="text-white text-xl font-semibold">
                Satisfied Clients
              </p>
            </div>

            {/* 8+ Years */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-6xl sm:text-7xl font-bold text-[#FFBA00] mb-2">
                {yearsCount}+
              </div>
              <p className="text-white text-xl font-semibold">
                Years of Excellence
              </p>
            </div>

            {/* 100% Satisfaction */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-6xl sm:text-7xl font-bold text-[#FFBA00] mb-2">
                {satisfactionCount}%
              </div>
              <p className="text-white text-xl font-semibold">
                Satisfaction Guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Experience the Liquid Shine Difference?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join hundreds of satisfied clients in Manatee and Sarasota Counties. Book your mobile detailing service today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-accent text-lg px-10 py-4">
                Book Now
              </Link>
              <Link href="/gallery" className="btn btn-secondary text-lg px-10 py-4">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
