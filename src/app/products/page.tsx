'use client';

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Ceramic Coating Protection',
      description: 'Professional-grade ceramic coating provides long-lasting protection against UV rays, chemical contaminants, and environmental damage. Creates a hydrophobic surface for easy cleaning.',
      features: ['UV Protection', '12-24 Month Durability', 'Hydrophobic', 'Enhances Gloss'],
    },
    {
      id: 2,
      name: 'Paint Sealant',
      description: 'High-quality paint sealant forms a protective barrier that guards against oxidation, water spots, and minor scratches. Perfect for maintaining your vehicle\'s finish.',
      features: ['Water Repellent', '6-12 Month Protection', 'Deep Gloss Finish', 'Easy Maintenance'],
    },
    {
      id: 3,
      name: 'Interior Protectant',
      description: 'Advanced formula that protects and conditions leather, vinyl, and fabric surfaces. Helps prevent fading, cracking, and maintains a fresh appearance inside your vehicle.',
      features: ['Leather Conditioning', 'UV Fade Protection', 'Dirt Resistance', 'Pleasant Scent'],
    },
    {
      id: 4,
      name: 'Glass Coating',
      description: 'Specialized ceramic coating for glass surfaces that repels water, reduces glare, and improves visibility in all weather conditions. Safe for all glass types.',
      features: ['Water Beading', 'Glare Reduction', '12 Month Warranty', 'All-Weather Ready'],
    },
    {
      id: 5,
      name: 'Trim & Plastic Restorer',
      description: 'Restores faded plastic trim, rubber seals, and composite materials to their original appearance. Protects against future UV damage and environmental wear.',
      features: ['Color Restoration', 'Long-Lasting Finish', 'Matte or Gloss Options', 'UV Protection'],
    },
    {
      id: 6,
      name: 'Maintenance Detail Package',
      description: 'Complete quarterly maintenance package including exterior wash, ceramic coating touch-up, interior conditioning, and glass treatment to keep your vehicle in pristine condition.',
      features: ['Quarterly Schedule', 'Full Coverage', 'Booking Flexibility', 'Member Discounts'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml?utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><circle cx=%22600%22 cy=%22300%22 r=%22400%22 fill=%22%231a56db%22 opacity=%220.05%22/></svg>')] bg-no-repeat bg-center"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Our Product Lineup
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            Professional-grade detailing products and services for lasting protection
          </p>
        </div>
      </section>

      {/* About Products Section */}
      <section className="py-16 px-4 sm:py-24 bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            System X Products
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              At Liquid Shine Elite Mobile Detailing, we exclusively use System X ceramic coating products—industry-leading solutions trusted by professionals worldwide. These premium products combine cutting-edge nanotechnology with proven results to deliver unmatched protection and shine.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our System X product lineup is carefully selected to work synergistically, ensuring your vehicle receives complete protection from exterior paint to interior surfaces. Each product is formulated to be durable, environmentally conscious, and designed for long-lasting results.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you're protecting a luxury vehicle, a boat, or an RV, our System X products provide the professional-grade protection you deserve. We're committed to using only the best to ensure your investment is protected for years to come.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-slate-700 rounded-lg p-8 border border-blue-500 border-opacity-30 hover:border-opacity-100 transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                {/* Product Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7.5-1a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                {/* Product Name */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 pt-6 border-t border-slate-600">
                  <p className="text-blue-300 font-semibold text-sm uppercase tracking-wide">
                    Key Features
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <svg className="w-4 h-4 mr-2 mt-1 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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

      {/* Why Choose System X */}
      <section className="py-16 px-4 sm:py-24 bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Why Choose System X?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-white mb-2">Advanced Nanotechnology</h3>
                <p className="text-gray-300">Cutting-edge formula provides superior protection at the molecular level.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300">Trusted by professionals and customers worldwide for consistent, lasting protection.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-white mb-2">Long-Lasting Protection</h3>
                <p className="text-gray-300">Durability that extends months or even years, providing exceptional value for your investment.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M17.657 17.657a8 8 0 01-11.314 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-white mb-2">Eco-Friendly</h3>
                <p className="text-gray-300">Environmentally conscious formulations that protect your vehicle and the planet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Experience System X Protection
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Ready to protect your vehicle with professional-grade System X products?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Schedule Service
            </a>
            <a
              href="/about-us"
              className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors border border-white border-opacity-30"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
