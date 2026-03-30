import Image from 'next/image';
import Link from 'next/link';

export default function RVDetailingPage() {
  const services = [
    { name: "Washing", description: "Specialized RV exterior washing" },
    { name: "Waxing", description: "UV-resistant RV wax application" },
    { name: "Polishing", description: "Professional polish and restoration" },
    { name: "Buffing", description: "Expert buffing for RV finish" },
    { name: "Wet-Sanding", description: "Fine wet-sanding for smooth finish" },
    { name: "Oxidation Removal", description: "Remove oxidation and discoloration" },
    { name: "Bug Removal", description: "Professional bug and stain removal" },
    { name: "Roof Cleaning", description: "Safe RV roof cleaning and treatment" },
    { name: "Window Cleaning", description: "Deep clean all windows and skylights" },
    { name: "Wheel & Tire Care", description: "Wheels polished, tires dressed" },
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

  const galleryImages = [
    '/images/gallery-rv-front.jpg',
    '/images/airstream-inc-hKw3HbDF1ew-unsplash.jpg',
    '/images/camping-beach-sea-landscape.jpg',
    '/images/camper-2260094_1920.jpg',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <Image
          src="/images/gallery-rv-road.jpg"
          alt="RV Detailing Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <span className="badge badge-accent mb-4">Professional Service</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              RV <span className="text-[#FFBA00]">Detailing</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Professional RV detailing that keeps your home on wheels looking spectacular. Specialized care for travel trailers, motorhomes, and fifth wheels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-accent">
                Book Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="tel:978-660-1356" className="btn btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
                (978) 660-1356
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Military Discount Banner */}
      <section className="bg-[#FFBA00] py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-3xl">🎖️</span>
              <div>
                <span className="font-bold text-gray-900 text-lg">Military & First Responders:</span>
                <span className="text-gray-800 ml-2">15% OFF all RV detailing services</span>
              </div>
            </div>
            <Link href="/contact" className="px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
              Claim Discount
            </Link>
          </div>
        </div>
      </section>

      {/* RV Detailing Importance */}
      <section className="py-20 bg-[#004FBB]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Professional <span className="text-[#FFBA00]">RV Detailing</span> Matters
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#FFBA00] flex items-center justify-center">
                <svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Weather Protection</h3>
              <p className="text-blue-100 text-sm">
                Protect against sun, rain, bugs, and environmental damage with professional treatments.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#FFBA00] flex items-center justify-center">
                <svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Road-Ready Appearance</h3>
              <p className="text-blue-100 text-sm">
                Keep your RV looking fresh and well-maintained throughout your travels.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#FFBA00] flex items-center justify-center">
                <svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Value & Longevity</h3>
              <p className="text-blue-100 text-sm">
                Regular detailing extends your RV's lifespan and maintains resale value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-primary mb-4">Our Services</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete <span className="gradient-text-blue">RV Detailing Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#004FBB]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#004FBB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RV Expertise */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-primary mb-4">Our Expertise</span>
            <h2 className="text-4xl font-bold text-gray-900">
              Professional <span className="gradient-text">RV Care</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">RV Specialization</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[#004FBB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">
                    Experience with all RV types and sizes
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[#004FBB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">
                    Knowledge of specialized RV materials and finishes
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[#004FBB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">
                    Expert in roof cleaning and maintenance
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[#004FBB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">
                    Specialized bug and road stain removal
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional RV Care</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[#004FBB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">
                    UV-resistant products formulated for RVs
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[#004FBB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">
                    Safe methods for roof and aluminum surfaces
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[#004FBB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">
                    Long-lasting protective coatings
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-6 h-6 text-[#004FBB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
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
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-primary mb-4">Our Process</span>
            <h2 className="text-4xl font-bold text-gray-900">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "Inspection", description: "Complete RV assessment" },
              { step: "Wash", description: "Specialized exterior washing" },
              { step: "Polish", description: "Restore shine and clarity" },
              { step: "Protect", description: "Apply protective coatings" },
              { step: "Final Touch", description: "Quality inspection" },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 text-center h-full">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#004FBB] text-white flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.step}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-[#004FBB]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-primary mb-4">Pricing</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              RV Detailing <span className="gradient-text">Packages</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-[#004FBB] text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-blue-100">{pkg.description}</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {pkg.services.map((service, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <svg className="w-5 h-5 text-[#004FBB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-gray-900 font-bold text-lg">{pkg.price}</p>
                    <p className="text-gray-600 text-sm mt-2">Contact us for your specific RV size and pricing</p>
                  </div>
                  <Link href="/contact" className="block w-full mt-6 btn btn-primary text-center">
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RV Types We Service */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-accent mb-4">All RV Types</span>
            <h2 className="text-4xl font-bold text-gray-900">RV Types We Service</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { type: "Motorhomes", description: "Class A, B & C motorhomes" },
              { type: "Travel Trailers", description: "All sizes and types" },
              { type: "Fifth Wheels", description: "Luxury and standard models" },
              { type: "Toy Haulers", description: "Specialized heavy-duty care" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#004FBB]/10 flex items-center justify-center text-2xl">
                  🚐
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.type}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-primary mb-4">Our Work</span>
            <h2 className="text-4xl font-bold text-gray-900">RV Detailing Gallery</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((src, index) => (
              <div key={index} className="relative aspect-square rounded-2xl overflow-hidden group">
                <Image
                  src={src}
                  alt={`RV detailing result ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/gallery" className="btn btn-secondary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-accent mb-4">Testimonials</span>
            <h2 className="text-4xl font-bold text-gray-900">What <span className="gradient-text">RV Owners</span> Say</h2>
          </div>
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
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#004FBB]">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#FFBA00]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
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
      <section className="py-20 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#004FBB] rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFBA00] rounded-full opacity-10 blur-3xl" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Your RV Ready <span className="text-[#FFBA00]">for the Road</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule your RV detailing appointment today and keep your home on wheels in top condition for all your adventures.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn btn-accent text-base px-8 py-4">
              Schedule Now
            </Link>
            <a href="tel:978-660-1356" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-colors">
              (978) 660-1356
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
