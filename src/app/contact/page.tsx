'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    phone: '',
    services: {
      auto: false,
      boat: false,
      rv: false,
      maintenance: false,
    },
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission handled by UI only
    alert('Thank you for your interest! We will contact you shortly.');
    // Reset form
    setFormData({
      name: '',
      city: '',
      email: '',
      phone: '',
      services: {
        auto: false,
        boat: false,
        rv: false,
        maintenance: false,
      },
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml?utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><circle cx=%22600%22 cy=%22300%22 r=%22400%22 fill=%22%231a56db%22 opacity=%220.05%22/></svg>')] bg-no-repeat bg-center"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Thank You For Considering Liquid Shine
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            Get in touch with us today to schedule your mobile detailing service
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 sm:py-24 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            {/* Phone Card */}
            <div className="bg-slate-700 rounded-lg p-8 border border-blue-500 border-opacity-30 hover:border-opacity-100 transition-all text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full mb-4 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <a href="tel:9786601356" className="text-blue-400 hover:text-blue-300 text-lg font-semibold">
                (978) 660-1356
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-slate-700 rounded-lg p-8 border border-blue-500 border-opacity-30 hover:border-opacity-100 transition-all text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full mb-4 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <a href="mailto:info@liquid-shine.com" className="text-blue-400 hover:text-blue-300 text-lg font-semibold break-all">
                info@liquid-shine.com
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-slate-700 rounded-lg p-8 border border-blue-500 border-opacity-30 hover:border-opacity-100 transition-all text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full mb-4 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Address</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                8955 US Hwy 301 N<br />
                Ste 330<br />
                Parrish, FL 34219
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:py-24 bg-slate-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
                placeholder="John Doe"
              />
            </div>

            {/* City Field */}
            <div>
              <label htmlFor="city" className="block text-white font-semibold mb-2">
                City Name
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
                placeholder="Tampa, FL"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-white font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Services Checkboxes */}
            <div>
              <label className="block text-white font-semibold mb-4">
                Interested Services
              </label>
              <div className="space-y-3">
                <label className="flex items-center text-gray-300 hover:text-white cursor-pointer transition">
                  <input
                    type="checkbox"
                    name="auto"
                    checked={formData.services.auto}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 bg-slate-700 border-slate-600 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="ml-3">Auto Detailing</span>
                </label>
                <label className="flex items-center text-gray-300 hover:text-white cursor-pointer transition">
                  <input
                    type="checkbox"
                    name="boat"
                    checked={formData.services.boat}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 bg-slate-700 border-slate-600 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="ml-3">Boat Detailing</span>
                </label>
                <label className="flex items-center text-gray-300 hover:text-white cursor-pointer transition">
                  <input
                    type="checkbox"
                    name="rv"
                    checked={formData.services.rv}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 bg-slate-700 border-slate-600 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="ml-3">RV Detailing</span>
                </label>
                <label className="flex items-center text-gray-300 hover:text-white cursor-pointer transition">
                  <input
                    type="checkbox"
                    name="maintenance"
                    checked={formData.services.maintenance}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 bg-slate-700 border-slate-600 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="ml-3">Maintenance Packages</span>
                </label>
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition resize-none"
                placeholder="Tell us more about your vehicle and what you're looking for..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
