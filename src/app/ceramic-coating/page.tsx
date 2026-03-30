export default function CeramicCoatingPage() {
  const packages = [
    {
      name: "One-Step Express",
      warranty: "3-year Crystal",
      washing: ["Full vehicle washing", "Tire cleaning"],
      coating: ["Light polish", "Ceramic coating application"],
      prices: { coupe: 800, sedan: 900, midSuv: 1000, fullSize: 1100 },
    },
    {
      name: "One-Step Glossy",
      warranty: "6-year Pro",
      washing: ["Full vehicle washing", "Tire cleaning", "Interior vacuum"],
      coating: ["Standard polish", "Ceramic coating application", "Trim protection"],
      prices: { coupe: 1200, sedan: 1300, midSuv: 1400, fullSize: 1500 },
    },
    {
      name: "One-Step Liquid Shine",
      warranty: "10-year Max",
      washing: ["Full vehicle washing", "Tire cleaning", "Interior detail", "Engine bay light clean"],
      coating: ["Deep polish", "Ceramic coating application", "Trim & glass protection", "Nano sealing"],
      prices: { coupe: 1600, sedan: 1700, midSuv: 1800, fullSize: 1900 },
    },
    {
      name: "Two-Step Express",
      warranty: "3-year Crystal",
      washing: ["Full vehicle washing", "Tire cleaning", "Wheel arches cleaned"],
      coating: ["Two-stage polish", "Ceramic coating application"],
      prices: { coupe: 1100, sedan: 1200, midSuv: 1300, fullSize: 1400 },
    },
    {
      name: "Two-Step Glossy",
      warranty: "6-year Pro",
      washing: ["Full vehicle washing", "Tire cleaning", "Wheel arches cleaned", "Door jambs cleaned"],
      coating: ["Two-stage polish", "Ceramic coating application", "Trim protection", "Glass coating"],
      prices: { coupe: 1500, sedan: 1600, midSuv: 1700, fullSize: 1800 },
    },
    {
      name: "Two-Step Liquid Shine",
      warranty: "10-year Max",
      washing: ["Full vehicle washing", "Tire cleaning", "Wheel arches cleaned", "Door jambs cleaned", "Engine bay detail"],
      coating: ["Two-stage deep polish", "Ceramic coating application", "Trim & glass protection", "Nano sealing", "Paint protection film prep"],
      prices: { coupe: 1900, sedan: 2000, midSuv: 2100, fullSize: 2200 },
    },
  ];

  const process = [
    { step: "CLEAN THE GRIME", description: "Thorough washing and preparation" },
    { step: "POLISH IT UP", description: "Professional polishing and correction" },
    { step: "COAT IT OVER", description: "Expert ceramic coating application" },
    { step: "DRESS TO SHINE", description: "Final detailing and protection" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-center">Ceramic Coating Services</h1>
          <p className="text-xl text-blue-100 text-center mb-8 max-w-3xl mx-auto">
            Professional ceramic coating protection for your vehicle. Long-lasting shine and protection against the elements.
          </p>
          <div className="flex justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              CALL US NOW!
            </button>
          </div>
        </div>
      </section>

      {/* Military Discount Banner */}
      <section className="bg-blue-50 border-l-4 border-blue-600 py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🎖️</div>
            <div>
              <h3 className="text-xl font-bold text-blue-900">Military Discount</h3>
              <p className="text-blue-700">
                <span className="font-bold text-2xl">10% OFF</span> all ceramic coating services for active and veteran military members
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Better */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What Makes Our Ceramic Paint Coatings Better?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Grade</h3>
              <p className="text-gray-600">
                We use only the highest quality ceramic coatings tested and proven for durability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Long-Lasting Protection</h3>
              <p className="text-gray-600">
                Warranties up to 10 years with proper maintenance. Protect your investment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Unmatched Shine</h3>
              <p className="text-gray-600">
                Ceramic coating creates a brilliant, mirror-like finish that turns heads.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Maintenance</h3>
              <p className="text-gray-600">
                Reduces washing frequency and makes cleaning significantly easier.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Water Beading</h3>
              <p className="text-gray-600">
                Superior water beading and hydrophobic properties protect against contaminants.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Installation</h3>
              <p className="text-gray-600">
                Certified technicians ensure perfect application every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Ceramic Coating Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-blue-600 text-white rounded-lg p-6 h-full">
                  <div className="absolute -top-8 -left-4 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold border-4 border-white">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold mt-4 mb-2">{item.step}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-8 w-8 h-1 bg-blue-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System X Authorized */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">System X Authorized Installer</h2>
          <p className="text-xl text-gray-700 mb-6">
            We are proud to be an authorized installer of System X ceramic coatings, using only genuine, professional-grade products backed by manufacturer warranties.
          </p>
          <div className="bg-white rounded-lg p-8 shadow-md max-w-2xl mx-auto">
            <p className="text-gray-600 text-lg mb-4">
              Our partnership with System X ensures you receive the highest quality ceramic coating products and expert installation from certified technicians.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <p className="text-gray-600">Genuine Products</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">10Y+</div>
                <p className="text-gray-600">Warranty Coverage</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <p className="text-gray-600">Years in Business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Ceramic Coating Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-blue-100">Warranty: {pkg.warranty}</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Washing Includes:</h4>
                    <ul className="space-y-2">
                      {pkg.washing.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <span className="text-blue-600 font-bold mt-1">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Prepping & Coating Includes:</h4>
                    <ul className="space-y-2">
                      {pkg.coating.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <span className="text-blue-600 font-bold mt-1">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="font-bold text-gray-900 mb-3">Vehicle Pricing:</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="text-gray-600">Coupe</p>
                        <p className="text-2xl font-bold text-blue-600">${pkg.prices.coupe}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="text-gray-600">Sedan</p>
                        <p className="text-2xl font-bold text-blue-600">${pkg.prices.sedan}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="text-gray-600">Mid-SUV</p>
                        <p className="text-2xl font-bold text-blue-600">${pkg.prices.midSuv}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="text-gray-600">Full-Size</p>
                        <p className="text-2xl font-bold text-blue-600">${pkg.prices.fullSize}</p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">📸</div>
                  <p className="text-gray-600">Gallery Image {item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Customer Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                text: "Amazing work! My car looks brand new with the ceramic coating. Highly recommended!",
                rating: 5,
              },
              {
                name: "Sarah Johnson",
                text: "The shine is incredible and maintenance is so much easier now. Worth every penny!",
                rating: 5,
              },
              {
                name: "Mike Davis",
                text: "Professional service, attention to detail, and outstanding results. Will definitely come back!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Vehicle?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule your ceramic coating appointment today and experience the Liquid Shine Elite difference.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            Schedule Now
          </button>
        </div>
      </section>
    </div>
  );
}
