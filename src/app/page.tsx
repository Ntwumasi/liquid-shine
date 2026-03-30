'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const heroSlides = [
    {
      title: 'Professional Mobile Detailing For Autos, Boats and RVs',
      description:
        'Experience exceptional ceramic coating, paint correction, and professional mobile detailing services in Bradenton, Palmetto, Ellenton, Parrish, Lakewood Ranch, and the greater Sarasota area.',
    },
    {
      title: 'Professional Auto Detailing',
      description:
        'Keep your vehicle looking showroom fresh with our comprehensive auto detailing services.',
    },
    {
      title: 'Professional Boat Detailing',
      description:
        'Protect your boat investment with our specialized marine detailing services.',
    },
    {
      title: 'Professional RV Detailing',
      description:
        'Keep your RV in pristine condition with our professional detailing expertise.',
    },
  ];

  const testimonials = [
    {
      name: 'R. Rietz',
      text: 'Excellent service and attention to detail. Highly recommended!',
      source: 'Google',
    },
    {
      name: 'S. Duncan',
      text: 'The team was professional and thorough. My car looks amazing!',
      source: 'Google',
    },
    {
      name: 'C. Ohler',
      text: 'Best detailing service in the area. Worth every penny.',
      source: 'Google',
    },
    {
      name: 'L. Gregory',
      text: 'Mobile service is super convenient. Quality is top-notch.',
      source: 'Google',
    },
    {
      name: 'S. Hayes',
      text: 'Professional, reliable, and affordable. They exceeded my expectations.',
      source: 'Google',
    },
  ];

  const services = [
    {
      title: 'Auto Detailing',
      description:
        'Complete auto detailing including ceramic coating, paint correction, interior cleaning, and protection services.',
    },
    {
      title: 'Boat Detailing',
      description:
        'Specialized marine detailing with marine-grade ceramic coating, gel coat restoration, and protective treatments.',
    },
    {
      title: 'RV Detailing',
      description:
        'Comprehensive RV detailing including exterior restoration, interior deep cleaning, and long-lasting protection.',
    },
  ];

  const benefits = [
    {
      title: 'Durability & Strength',
      description: 'Long-lasting protection that keeps your vehicles looking new.',
    },
    {
      title: 'Ease of Maintenance',
      description: 'Reduced maintenance requirements with our protective coatings.',
    },
    {
      title: 'Beautiful & Shiny',
      description: 'Stunning results that turn heads and protect your investment.',
    },
    {
      title: 'Increased Value',
      description: 'Maintain or increase your resale value with professional detailing.',
    },
  ];

  const blogs = [
    {
      title: 'The Benefits of Ceramic Coating for Your Vehicle',
      date: 'March 15, 2026',
      excerpt:
        'Learn why ceramic coating is the best investment for long-term vehicle protection and appearance.',
    },
    {
      title: 'Seasonal Boat Care Tips',
      date: 'March 8, 2026',
      excerpt:
        'Discover essential maintenance tips to keep your boat in perfect condition year-round.',
    },
    {
      title: 'RV Detailing: Protect Your Home Away From Home',
      date: 'February 28, 2026',
      excerpt:
        'Find out how professional detailing extends the life and beauty of your RV investment.',
    },
  ];

  // Auto-rotate hero slider
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(heroInterval);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(testimonialInterval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slider */}
      <section className="relative w-full h-screen bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative h-full flex items-center justify-center z-20">
          <div className="text-center text-white max-w-4xl px-4 md:px-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              {heroSlides[currentSlide].description}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#1a56db] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide
                  ? 'bg-[#1a56db] w-8'
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Military/Veterans Banner */}
      <section className="bg-gray-200 py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-xl md:text-2xl font-bold text-gray-800">
              All active duty Military, Veterans, and First Responders get a
              <span className="text-[#1a56db]"> 10% Discount</span> off of all
              services
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-[#1a56db] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 whitespace-nowrap"
          >
            CONTACT US TODAY
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We are a Professional Mobile Detailing Service Committed To
                Excellence.
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Liquid Shine Elite Mobile Detailing proudly serves Manatee and
                Sarasota Counties including Bradenton, Palmetto, Ellenton,
                Parrish, Lakewood Ranch, Sarasota, and surrounding areas. With
                years of experience, we bring professional detailing directly to
                your location.
              </p>
              <div className="text-gray-700 mb-8">
                <p className="font-semibold mb-3">Service Areas:</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-[#1a56db] mr-3">•</span> Bradenton
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#1a56db] mr-3">•</span> Palmetto
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#1a56db] mr-3">•</span> Ellenton
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#1a56db] mr-3">•</span> Parrish
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#1a56db] mr-3">•</span> Lakewood Ranch
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#1a56db] mr-3">•</span> Sarasota
                  </li>
                </ul>
              </div>
              <Link
                href="/book"
                className="inline-block bg-[#1a56db] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                BOOK NOW
              </Link>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="bg-gray-700 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl text-gray-500 mb-3">⛵</div>
                <p className="text-gray-400 text-lg">Boat Detailing Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#1a56db] to-blue-700">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Professional Detailing Services We Offer
          </h2>
          <p className="text-center text-blue-100 mb-12 text-lg">
            Comprehensive detailing solutions for all your vehicles
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                {/* Circular placeholder */}
                <div className="relative h-48 bg-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">
                      {index === 0 ? '🚗' : index === 1 ? '⛵' : '🚐'}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Liquid Shine Elite
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg h-64 group cursor-pointer"
              >
                {/* Background gradient placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 group-hover:from-blue-700 group-hover:to-blue-950 transition duration-300" />

                {/* Content overlay */}
                <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Work Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gray-700 rounded-lg h-64 flex items-center justify-center hover:bg-gray-600 transition duration-300"
              >
                <p className="text-gray-400 text-lg">Gallery Image {item}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block bg-[#1a56db] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              VIEW ALL OF OUR WORK
            </Link>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-16 md:py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Get Started Working With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/services/auto"
              className="bg-gray-800 hover:bg-gray-700 rounded-lg p-8 text-center transition duration-300 group"
            >
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#1a56db] transition">
                Auto Detailing Packages
              </h3>
              <p className="text-gray-300 mb-4">
                Comprehensive auto detailing solutions tailored to your needs
              </p>
              <span className="text-[#1a56db] font-semibold">Learn More →</span>
            </Link>

            <Link
              href="/services/boat"
              className="bg-gray-800 hover:bg-gray-700 rounded-lg p-8 text-center transition duration-300 group"
            >
              <div className="text-5xl mb-4">⛵</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#1a56db] transition">
                Boat Detailing Packages
              </h3>
              <p className="text-gray-300 mb-4">
                Specialized marine detailing to protect your boat investment
              </p>
              <span className="text-[#1a56db] font-semibold">Learn More →</span>
            </Link>

            <Link
              href="/services/rv"
              className="bg-gray-800 hover:bg-gray-700 rounded-lg p-8 text-center transition duration-300 group"
            >
              <div className="text-5xl mb-4">🚐</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#1a56db] transition">
                RV Detailing Packages
              </h3>
              <p className="text-gray-300 mb-4">
                Keep your RV in pristine condition with expert detailing
              </p>
              <span className="text-[#1a56db] font-semibold">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 md:p-12 shadow-lg">
            <div className="text-center mb-6">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-800 text-lg italic mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-gray-900 font-bold text-lg mb-1">
                {testimonials[currentTestimonial].name}
              </p>
              <p className="text-gray-600">
                via {testimonials[currentTestimonial].source}
              </p>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition ${
                    index === currentTestimonial
                      ? 'bg-[#1a56db] w-6'
                      : 'bg-gray-400 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-gray-900 to-[#1a56db]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to go to the next level?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Experience the Liquid Shine Difference today. Contact us for a free
            quote on your detailing needs.
          </p>
          <Link
            href="/book"
            className="inline-block bg-white hover:bg-gray-100 text-[#1a56db] font-bold py-4 px-10 rounded-lg transition duration-300 text-lg"
          >
            BOOK YOUR APPOINTMENT NOW
          </Link>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Latest News & Updates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
              >
                <div className="bg-gray-700 h-40 flex items-center justify-center">
                  <p className="text-gray-400">Blog Image</p>
                </div>
                <div className="p-6">
                  <p className="text-[#1a56db] text-sm font-semibold mb-2">
                    {blog.date}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{blog.excerpt}</p>
                  <Link
                    href="/blog"
                    className="text-[#1a56db] font-semibold hover:text-blue-700 transition"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-white border-t-4 border-[#1a56db]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Contact us now to see the Liquid Shine Difference!
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Let our professional team transform your vehicles today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1a56db] hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg transition duration-300 text-lg"
          >
            CONTACT US
          </Link>
        </div>
      </section>
    </div>
  );
}
