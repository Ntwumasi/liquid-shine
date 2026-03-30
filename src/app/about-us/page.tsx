'use client';

import { useEffect, useState } from 'react';

export default function AboutUs() {
  const [servicesCompleted, setServicesCompleted] = useState(0);
  const [satisfiedClients, setSatisfiedClients] = useState(0);

  // Animate counters on mount
  useEffect(() => {
    const completedTarget = 2500;
    const satisfiedTarget = 100;
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setServicesCompleted(Math.floor(completedTarget * progress));
      setSatisfiedClients(Math.floor(satisfiedTarget * progress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml?utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><circle cx=%22600%22 cy=%22300%22 r=%22400%22 fill=%22%231a56db%22 opacity=%220.05%22/></svg>')] bg-no-repeat bg-center"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            About Liquid Shine
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            Professional Mobile Detailing Excellence Since 2021
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:py-24 bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            The Liquid Shine Story
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Founded in August 2021, Liquid Shine Elite Mobile Detailing was born from a passion for excellence and customer satisfaction. Our mission is simple yet powerful: to deliver exceptional mobile detailing services that exceed expectations every single time.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We understand that your vehicles are more than just transportation—they're investments that deserve professional care. That's why we've committed to using only the highest quality products and techniques to ensure every detail is perfect.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our dedication to customer experience is unwavering. We stand behind our work with a 100% satisfaction guarantee. If you're not completely happy with our service, we'll make it right. This commitment has made us a trusted name in mobile detailing across Florida.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            By The Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-8 text-center border border-white border-opacity-20">
              <div className="text-5xl sm:text-6xl font-bold text-white mb-2">
                {servicesCompleted.toLocaleString()}+
              </div>
              <p className="text-blue-100 text-lg font-semibold">
                Detail Services Completed
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-8 text-center border border-white border-opacity-20">
              <div className="text-5xl sm:text-6xl font-bold text-white mb-2">
                {satisfiedClients}%
              </div>
              <p className="text-blue-100 text-lg font-semibold">
                Satisfied Clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:py-24 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Auto Detailing */}
            <div className="bg-slate-700 rounded-lg p-8 border border-blue-500 border-opacity-30 hover:border-opacity-100 transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Auto Detailing</h3>
              <p className="text-gray-300 leading-relaxed">
                Complete exterior and interior detailing for cars and trucks. From paint protection to interior conditioning, we restore your vehicle to showroom condition.
              </p>
            </div>

            {/* Boat Detailing */}
            <div className="bg-slate-700 rounded-lg p-8 border border-blue-500 border-opacity-30 hover:border-opacity-100 transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M17.657 17.657a8 8 0 01-11.314 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Boat Detailing</h3>
              <p className="text-gray-300 leading-relaxed">
                Specialized marine detailing services to keep your boat pristine. We handle gelcoat protection, marine-grade ceramic coatings, and comprehensive cleaning.
              </p>
            </div>

            {/* RV Detailing */}
            <div className="bg-slate-700 rounded-lg p-8 border border-blue-500 border-opacity-30 hover:border-opacity-100 transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m2-1l-2-1m2 1v2.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">RV Detailing</h3>
              <p className="text-gray-300 leading-relaxed">
                Complete RV maintenance and detailing. From awning cleaning to slide-out maintenance, we keep your home on wheels looking and performing beautifully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Experience Liquid Shine?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Contact us today to schedule your mobile detailing appointment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="/gallery"
              className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors border border-white border-opacity-30"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
