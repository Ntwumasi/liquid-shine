export default function RVDetailingPage() {
  const services = [
    { icon: "🧼", name: "Washing", description: "Specialized RV exterior washing" },
    { icon: "✨", name: "Waxing", description: "UV-resistant RV wax application" },
    { icon: "🔧", name: "Polishing", description: "Professional polish and restoration" },
    { icon: "💎", name: "Buffing", description: "Expert buffing for RV finish" },
    { icon: "💧", name: "Wet-Sanding", description: "Fine wet-sanding for smooth finish" },
    { icon: "🔲", name: "Oxidation Removal", description: "Remove oxidation and discoloration" },
    { icon: "🐜", name: "Bug Removal", description: "Professional bug and stain removal" },
    { icon: "🏠", name: "Roof Cleaning", description: "Safe RV roof cleaning and treatment" },
    { icon: "🪟", name: "Window Cleaning", description: "Deep clean all windows and skylights" },
    { icon: "⚙️", name: "Wheel & Tire Care", description: "Wheels polished, tires dressed" },
  ];

  const packages = [
    {
      name: "Standard RV Wash",
      description: "Regular maintenance washing",
      services: [
        "Complete RV exterior washing",
        "Roof and sidewall cleaning",
        "Window and skylight cleaning",
        "Trim rinse and dry",
        "Bug removal from front",
      ],
      price: "Call for pricing",
    },
    {
      name: "Premium RV Detail",
      description: "Complete exterior care",
      services: [
        "Complete RV exterior washing",
        "Specialized bug and stain removal",
        "Roof cleaning and treatment",
        "Sidewall and trim cleaning",
        "RV wax application",
        "Window and skylight treatment",
        "Wheel cleaning and shine",
        "Tire dressing and protection",
      ],
      price: "Call for pricing",
    },
    {
      name: "Deluxe RV Restoration",
      description: "Comprehensive restoration",
      services: [
        "Complete RV washing and treatment",
        "Oxidation removal from all surfaces",
        "Professional wet-sanding",
        "Two-stage RV polishing",
        "Premium UV-resistant wax",
        "Complete bug and stain removal",
        "Roof cleaning and sealing",
        "Window and skylight restoration",
        "Wheel and tire professional detail",
        "Trim restoration and dressing",
      ],
      price: "Call for pricing",
    },
    {
      name: "Complete RV Transformation",
      description: "Full restoration and protection",
      services: [
        "Complete professional RV washing",
        "Complete oxidation removal and restoration",
        "Professional wet-sanding throughout",
        "Complete paint correction",
        "Three-stage RV polishing",
        "Premium ceramic RV coating",
        "Complete bug and stain elimination",
        "Roof restoration and protective coating",
        "Complete window and skylight detail",
        "Professional wheel and tire restoration",
        "Trim and accent piece restoration",
        "Interior living space refresh",
      ],
      price: "Call for pricing",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-center">RV Detailing Services</h1>
          <p className="text-xl text-blue-100 text-center mb-8 max-w-3xl mx-auto">
            Professional RV detailing that keeps your home on wheels looking spectacular. Specialized care for travel trailers, motorhomes, and fifth wheels.
          </p>
          <div className="flex justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              CALL US NOW!
            </button>
          </div>
        </div>
      </section>

      {/* RV Detailing Importance */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Professional RV Detailing Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🏜️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Weather Protection</h3>
              <p className="text-gray-600">
                Protect against sun, rain, bugs, and environmental damage with professional treatments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🛣️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Road-Ready Appearance</h3>
              <p className="text-gray-600">
                Keep your RV looking fresh and well-maintained throughout your travels.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Value & Longevity</h3>
              <p className="text-gray-600">
                Regular detailing extends your RV's lifespan and maintains resale value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">RV Detailing Services</h2>
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

      {/* RV Expertise */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our RV Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">RV Specialization</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-600">
                    Experience with all RV types and sizes
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-600">
                    Knowledge of specialized RV materials and finishes
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-600">
                    Expert in roof cleaning and maintenance
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-600">
                    Specialized bug and road stain removal
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional RV Care</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-600">
                    UV-resistant products formulated for RVs
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-600">
                    Safe methods for roof and aluminum surfaces
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-600">
                    Long-lasting protective coatings
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-600">
                    Expert wheel and tire restoration
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
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our RV Detailing Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "Inspection", description: "Complete RV assessment" },
              { step: "Wash", description: "Specialized exterior washing" },
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
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">RV Detailing Packages</h2>
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
                    <p className="text-gray-600 text-sm mt-2">Contact us for your specific RV size and pricing</p>
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

      {/* RV Types We Service */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">RV Types We Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { type: "Motorhomes", description: "Class A, B & C motorhomes" },
              { type: "Travel Trailers", description: "All sizes and types" },
              { type: "Fifth Wheels", description: "Luxury and standard models" },
              { type: "Toy Haulers", description: "Specialized heavy-duty care" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-3">🚐</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.type}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">RV Detailing Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-300 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">🚐</div>
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
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">RV Owner Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dave Wilson",
                text: "Best RV detailing service I've found! They really know how to handle motorhomes. My RV looks brand new!",
                rating: 5,
              },
              {
                name: "Patricia Anderson",
                text: "Professional team that treats your RV like their own. The restoration was incredible. Highly recommended!",
                rating: 5,
              },
              {
                name: "George Martinez",
                text: "The quality of their work is outstanding. My fifth wheel looks spectacular after their detailing. Worth every penny!",
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
          <h2 className="text-4xl font-bold mb-6">Get Your RV Ready for the Road</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule your RV detailing appointment today and keep your home on wheels in top condition for all your adventures.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            Schedule Now
          </button>
        </div>
      </section>
    </div>
  );
}
