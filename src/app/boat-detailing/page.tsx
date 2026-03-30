export default function BoatDetailingPage() {
  const services = [
    { icon: "🧼", name: "Washing", description: "Gentle marine-grade washing" },
    { icon: "✨", name: "Waxing", description: "UV-resistant marine wax application" },
    { icon: "🔧", name: "Polishing", description: "Professional polish and restoration" },
    { icon: "💎", name: "Buffing", description: "Expert buffing for marine finish" },
    { icon: "💧", name: "Wet-Sanding", description: "Fine wet-sanding for smooth finish" },
    { icon: "🔲", name: "Oxidation Removal", description: "Remove oxidation and discoloration" },
    { icon: "🧽", name: "Mold & Mildew", description: "Complete mold and mildew removal" },
    { icon: "✨", name: "Brightwork Polishing", description: "Polish chrome and metal fittings" },
    { icon: "⚓", name: "Non-Skid Cleaning", description: "Deep clean non-slip surfaces" },
    { icon: "🚀", name: "Compartment Cleaning", description: "Interior and storage area detail" },
  ];

  const packages = [
    {
      name: "Basic Boat Wash",
      description: "Regular maintenance cleaning",
      services: [
        "Full exterior boat washing",
        "Waterline cleaning",
        "Deck cleaning",
        "Window and mirror cleaning",
        "Trim rinse and dry",
      ],
      price: "Call for pricing",
    },
    {
      name: "Standard Marine Detail",
      description: "Complete exterior care",
      services: [
        "Full exterior boat washing",
        "Waterline and hull treatment",
        "Deck cleaning and brightening",
        "Mold and mildew removal",
        "Marine wax application",
        "Chrome and metal polishing",
        "Non-skid surface cleaning",
        "Window and glass treatment",
      ],
      price: "Call for pricing",
    },
    {
      name: "Premium Marine Detail",
      description: "Comprehensive restoration",
      services: [
        "Complete boat washing and treatment",
        "Hull oxidation removal",
        "Professional wet-sanding",
        "Two-step marine polishing",
        "Premium UV-resistant wax",
        "Brightwork polishing (chrome, stainless)",
        "Non-skid cleaning and treatment",
        "Interior compartment detailing",
        "Engine room cleaning (light)",
        "Mold and mildew prevention",
      ],
      price: "Call for pricing",
    },
    {
      name: "Deluxe Full Restoration",
      description: "Complete boat transformation",
      services: [
        "Complete marine washing and treatment",
        "Hull oxidation removal and restoration",
        "Professional wet-sanding throughout",
        "Complete paint correction",
        "Three-stage marine polishing",
        "Premium ceramic marine coating",
        "Complete brightwork restoration",
        "Non-skid complete renewal",
        "Full interior cleaning and detailing",
        "Engine room professional detail",
        "Isinglass cleaning and UV protection",
        "Mold, mildew, and algae removal",
      ],
      price: "Call for pricing",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-center">Boat Detailing Services</h1>
          <p className="text-xl text-blue-100 text-center mb-8 max-w-3xl mx-auto">
            Professional marine detailing that protects your boat from saltwater, sun, and oxidation. Keep your vessel looking like new.
          </p>
          <div className="flex justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              CALL US NOW!
            </button>
          </div>
        </div>
      </section>

      {/* Why Boat Detailing Matters */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Professional Boat Detailing Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Saltwater Protection</h3>
              <p className="text-gray-600">
                Protect against corrosion and saltwater damage with specialized marine treatments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">☀️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">UV Protection</h3>
              <p className="text-gray-600">
                UV-resistant waxes and coatings protect your boat's finish from sun damage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Value Preservation</h3>
              <p className="text-gray-600">
                Regular detailing maintains your boat's value and extends its lifespan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Marine Detailing Services</h2>
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

      {/* Marine Coating Info */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Marine Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialized Marine Knowledge</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-600">
                    Expert in fiberglass, gel coat, and stainless steel restoration
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-600">
                    Understanding of marine-specific environmental challenges
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-600">
                    Experience with various boat types and sizes
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-600">
                    Knowledge of mold, mildew, and algae prevention
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Marine Products</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-600">
                    Marine-grade cleaning solutions and protectants
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-600">
                    UV-resistant waxes formulated for saltwater environments
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-600">
                    Professional-grade polishes and coatings
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-600">
                    Corrosion inhibitors and protective treatments
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Marine Detailing Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "Inspection", description: "Complete assessment of boat condition" },
              { step: "Wash & Prep", description: "Marine-grade washing and preparation" },
              { step: "Restoration", description: "Polishing, wet-sanding, and corrections" },
              { step: "Protection", description: "Apply protective coatings and wax" },
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
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Marine Detailing Packages</h2>
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
                    <p className="text-gray-900 font-bold text-lg">{pkg.price}</p>
                    <p className="text-gray-600 text-sm mt-2">Contact us for custom boat sizes and pricing</p>
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
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Boat Detailing Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-300 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">⛵</div>
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
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Boat Owner Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Captain Robert",
                text: "Professional service! My boat looks amazing and the marine detailing has protected it from the elements. Highly recommended!",
                rating: 5,
              },
              {
                name: "Linda Martinez",
                text: "Best boat detailing I've experienced. They really know how to handle marine vessels. My boat is shining like new!",
                rating: 5,
              },
              {
                name: "Tom Bradley",
                text: "Excellent attention to detail with my boat. They took care of every surface and the protection coating is working great.",
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
          <h2 className="text-4xl font-bold mb-6">Keep Your Boat in Pristine Condition</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule your marine detailing appointment today and protect your investment from saltwater damage and oxidation.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            Schedule Now
          </button>
        </div>
      </section>
    </div>
  );
}
