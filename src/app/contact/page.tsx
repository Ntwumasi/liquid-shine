'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission handled by UI only
    alert('Thank you for your interest! We will contact you shortly.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:pt-40 sm:pb-24 overflow-hidden bg-gradient-to-br from-[#004FBB] via-[#003d91] to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFBA00] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#004FBB] rounded-full blur-3xl"></div>
        </div>
        <div className="relative container-custom text-center">
          <span className="badge badge-accent mb-6">Contact Us</span>
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Ready to give your vehicle the care it deserves? Reach out to schedule your mobile detailing service today.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 sm:py-20 bg-slate-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phone Card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-[#004FBB]/30 hover:border-[#FFBA00] transition-all duration-300 shadow-large hover:shadow-2xl text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#004FBB] to-[#0066cc] rounded-2xl mb-6 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-soft">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Phone</h3>
              <a href="tel:9786601356" className="text-[#FFBA00] hover:text-[#e5a800] text-xl font-semibold transition-colors">
                (978) 660-1356
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-[#004FBB]/30 hover:border-[#FFBA00] transition-all duration-300 shadow-large hover:shadow-2xl text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#004FBB] to-[#0066cc] rounded-2xl mb-6 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-soft">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Address</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                8955 US Hwy 301 N<br />
                Ste 330<br />
                Parrish, FL 34219
              </p>
            </div>

            {/* Service Area Card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-[#004FBB]/30 hover:border-[#FFBA00] transition-all duration-300 shadow-large hover:shadow-2xl text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#004FBB] to-[#0066cc] rounded-2xl mb-6 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-soft">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Service Area</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Manatee County<br />
                Sarasota County<br />
                <span className="text-sm text-gray-400">And surrounding areas</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-16 px-4 bg-slate-800">
        <div className="container-custom max-w-4xl">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-12 border border-[#004FBB]/30 shadow-large text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#FFBA00] to-[#e5a800] rounded-2xl mb-6 flex items-center justify-center mx-auto shadow-soft">
              <svg className="w-10 h-10 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Business Hours</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="text-left">
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Weekdays</p>
                <p className="text-white text-xl font-bold">Monday - Friday</p>
                <p className="text-[#FFBA00] text-lg">8:00 AM - 6:00 PM</p>
              </div>
              <div className="text-left">
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Weekend</p>
                <p className="text-white text-xl font-bold">Saturday - Sunday</p>
                <p className="text-[#FFBA00] text-lg">9:00 AM - 5:00 PM</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-8">
              Appointments available by request. Call us to schedule your service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:py-24 bg-slate-900">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <span className="badge badge-primary mb-4">Send a Message</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Request a Quote
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours with a personalized quote.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 sm:p-12 border border-[#004FBB]/30 shadow-large">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-4 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFBA00] focus:ring-2 focus:ring-[#FFBA00]/50 transition"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-4 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFBA00] focus:ring-2 focus:ring-[#FFBA00]/50 transition"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-4 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFBA00] focus:ring-2 focus:ring-[#FFBA00]/50 transition"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Service Type Dropdown */}
              <div>
                <label htmlFor="serviceType" className="block text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-4 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-[#FFBA00] focus:ring-2 focus:ring-[#FFBA00]/50 transition appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23FFBA00' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                >
                  <option value="">Select a service...</option>
                  <option value="auto-detailing">Auto Detailing</option>
                  <option value="ceramic-coating">Ceramic Coating</option>
                  <option value="paint-correction">Paint Correction</option>
                  <option value="boat-detailing">Boat Detailing</option>
                  <option value="rv-detailing">RV Detailing</option>
                  <option value="maintenance-package">Maintenance Package</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-5 py-4 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFBA00] focus:ring-2 focus:ring-[#FFBA00]/50 transition resize-none"
                placeholder="Tell us about your vehicle and what you're looking for..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-accent w-full text-lg py-5 shadow-large"
            >
              Send Message
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="py-16 px-4 bg-slate-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Find Us Here
            </h2>
            <p className="text-gray-400 text-lg">
              We bring the detailing to you, but you can find our office at the location below.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-4 border border-[#004FBB]/30 shadow-large overflow-hidden">
            <div className="relative w-full h-96 bg-slate-900 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#004FBB] to-[#0066cc] rounded-2xl mb-6 flex items-center justify-center mx-auto shadow-soft">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-white text-xl font-semibold mb-2">8955 US Hwy 301 N, Ste 330</p>
                <p className="text-gray-400 text-lg mb-6">Parrish, FL 34219</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=8955+US+Hwy+301+N+Ste+330+Parrish+FL+34219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-flex"
                >
                  Open in Google Maps
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#004FBB] via-[#003d91] to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FFBA00] rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom text-center relative">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Experience the Liquid Shine difference. Professional mobile detailing services delivered right to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9786601356" className="btn btn-accent text-lg">
              Call Now: (978) 660-1356
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <Link href="/" className="btn btn-secondary text-lg">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
