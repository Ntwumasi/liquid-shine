export default function AutoDetailingPage() {
  const packages = [
    {
      name: "Basic Detailing",
      description: "Perfect for regular maintenance",
      services: [
        "Full vehicle exterior washing",
        "Tire and wheel cleaning",
        "Interior vacuum and dusting",
        "Window cleaning (exterior and interior)",
        "Door jambs wiped clean",
      ],
      prices: { coupe: 150, sedan: 175, midSuv: 200, fullSize: 225 },
    },
    {
      name: "Standard Detailing",
      description: "Most popular package",
      services: [
        "Full vehicle exterior washing",
        "Tire and wheel cleaning",
        "Interior vacuum, dusting, and trim cleaning",
        "Window and mirror cleaning",
        "Door jambs and trim detail",
        "Waxing and polishing (single stage)",
        "Tire shine application",
      ],
      prices: { coupe: 300, sedan: 350, midSuv: 400, fullSize: 450 },
    },
    {
      name: "Premium Detailing",
      description: "Complete transformation",
      services: [
        "Full vehicle exterior washing",
        "Tire and wheel cleaning",
        "Complete interior cleaning (vacuum, dusting, shampooing)",
        "Window, mirror, and headlight cleaning",
        "Door jambs and engine bay light clean",
        "Two-stage waxing and polishing",
        "Paint correction",
        "Buffing and protection coating",
        "Tire shine and trim dressing",
      ],
      prices: { coupe: 500, sedan: 600, midSuv: 700, fullSize: 800 },
    },
    {
      name: "Deluxe Package",
      description: "Ultimate car care experience",
      services: [
        "Full vehicle exterior washing",
        "Tire and wheel cleaning with micro-fiber treatment",
        "Complete interior cleaning with steam cleaning",
        "Carpet and upholstery shampooing",
        "Headlight restoration and protection",
        "Full engine bay cleaning and detailing",
        "Two-stage professional polishing",
        "Paint correction and buffing",
        "Premium ceramic protective coating",
        "Tire shine and premium trim dressing",
      ],
      prices: { coupe: 800, sedan: 950, midSuv: 1100, fullSize: 1250 },
    },
  ];

  const services = [
    { icon: "🧼", name: "Washing", description: "Thorough exterior washing with premium soaps" },
    { icon: "✨", name: "Waxing", description: "Professional wax application for protection" },
    { icon: "🔧", name: "Polishing", description: "Expert polishing to restore shine" },
    { icon: "💎", name: "Buffing", description: "Fine buffing for mirror-like finish" },
    { icon: "🎨", name: "Paint Correction", description: "Remove swirls and scratches" },
    { icon: "🔧", name: "Engine Bay Cleaning", description: "Detail and clean engine compartment" },
    { icon: "💡", name: "Headlight Restoration", description: "Restore clarity and protection" },
    { icon: "🏠", name: "Interior Cleaning", description: "Deep clean all interior surfaces" },
    { icon: "💨", name: "Steam Cleaning", description: "Professional steam cleaning for carpets" },
    { icon: "🛋️", name: "Carpet & Upholstery", description: "Complete shampooing and restoration" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-center">Auto Detailing Services</h1>
          <p className="text-xl text-blue-100 text-center mb-8 max-w-3xl mx-auto">
            Professional auto detailing that transforms your vehicle inside and out. From basic washing to complete restoration.
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
                <span className="font-bold text-2xl">15% OFF</span> all auto detailing services for active and veteran military members
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Detailing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Liquid Shine Elite?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Technicians</h3>
                <p className="text-gray-600">
                  Certified and trained professionals with years of experience in auto detailing.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Products</h3>
                <p className="text-gray-600">
                  We use only the highest quality detailing products and equipment.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile Service</h3>
                <p className="text-gray-600">
                  We come to you! Professional detailing at your home or workplace.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">
                  100% customer satisfaction guarantee on all our detailing services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailing Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Detailing Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "Inspection", description: "Assess vehicle condition" },
              { step: "Wash", description: "Professional washing" },
              { step: "Polish", description: "Restore shine and clarity" },
              { step: "Protect", description: "Apply protective coatings" },
              { step: "Final Touch", description: "Quality inspection" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-blue-600 mb-3">{index + 1}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.step}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Detailing Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-blue-100">{pkg.description}</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {pkg.services.map((service, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <span className="text-blue-600 font-bold mt-1">✓</span>
                          {service}
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Before & After Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-300 rounded-lg h-64 flex items-center justify-center">
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
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Customer Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Rodriguez",
                text: "Best detailing service I've ever used! My car looks absolutely stunning. The team was professional and thorough.",
                rating: 5,
              },
              {
                name: "David Thompson",
                text: "Incredible attention to detail. They came to my home and did an amazing job. Highly recommended!",
                rating: 5,
              },
              {
                name: "Jessica Lee",
                text: "The transformation is unbelievable! My car went from dull to showroom quality. Worth every dollar!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
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
          <h2 className="text-4xl font-bold mb-6">Transform Your Vehicle Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule your auto detailing appointment and see the difference professional care can make.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            Schedule Now
          </button>
        </div>
      </section>
    </div>
  );
}
