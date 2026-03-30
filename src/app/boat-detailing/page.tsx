import Image from 'next/image';
import Link from 'next/link';

export default function BoatDetailingPage() {
  const services = [
    { name: "Washing", description: "Gentle marine-grade washing" },
    { name: "Waxing", description: "UV-resistant marine wax application" },
    { name: "Polishing", description: "Professional polish and restoration" },
    { name: "Buffing", description: "Expert buffing for marine finish" },
    { name: "Wet-Sanding", description: "Fine wet-sanding for smooth finish" },
    { name: "Oxidation Removal", description: "Remove oxidation and discoloration" },
    { name: "Mold & Mildew", description: "Complete mold and mildew removal" },
    { name: "Brightwork Polishing", description: "Polish chrome and metal fittings" },
    { name: "Non-Skid Cleaning", description: "Deep clean non-slip surfaces" },
    { name: "Compartment Cleaning", description: "Interior and storage area detail" },
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

  const galleryImages = [
    '/images/hero-yacht-cruising.jpg',
    '/images/gallery-mega-yacht.jpg',
    '/images/gallery-yacht-palm-trees.jpg',
    '/images/gallery-yacht-deck.jpg',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <Image
          src="/images/hero-boat-ocean.jpg"
          alt="Boat Detailing Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="container-custom relative z-10 pt-24 md:pt-20">
          <div className="max-w-2xl">
            <span className="badge badge-accent mb-4 animate-fade-in-up">Professional Marine Service</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Boat <span className="text-[#FFBA00]">Detailing</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Professional marine detailing that protects your boat from saltwater, sun, and oxidation. Keep your vessel looking like new.
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
                <span className="text-gray-800 ml-2">15% OFF all boat detailing services</span>
              </div>
            </div>
            <Link href="/contact" className="px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
              Claim Discount
            </Link>
          </div>
        </div>
      </section>

      {/* Why Boat Detailing Matters */}
      <section className="py-20 bg-[#004FBB]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-[#FFBA00]">Marine Detailing?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Saltwater Protection", desc: "Protect against corrosion and saltwater damage" },
              { title: "UV Protection", desc: "UV-resistant waxes protect from sun damage" },
              { title: "Value Preservation", desc: "Maintain your boat's value and lifespan" },
              { title: "Expert Care", desc: "Specialized marine detailing expertise" },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#FFBA00] flex items-center justify-center">
                  <svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-primary mb-4">Our Services</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete <span className="gradient-text-blue">Marine Services</span>
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

      {/* Marine Coating Info */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-primary mb-4">Expertise</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Marine <span className="gradient-text">Expertise</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Specialized Marine Knowledge</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[#004FBB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">
                    Expert in fiberglass, gel coat, and stainless steel restoration
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[#004FBB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">
                    Understanding of marine-specific environmental challenges
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[#004FBB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">
                    Experience with various boat types and sizes
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[#004FBB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">
                    Knowledge of mold, mildew, and algae prevention
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Premium Marine Products</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[#004FBB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">
                    Marine-grade cleaning solutions and protectants
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[#004FBB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">
                    UV-resistant waxes formulated for saltwater environments
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[#004FBB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">
                    Professional-grade polishes and coatings
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-[#004FBB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
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
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-primary mb-4">Our Process</span>
            <h2 className="text-4xl font-bold text-gray-900">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "Inspection", description: "Complete assessment of boat condition" },
              { step: "Wash & Prep", description: "Marine-grade washing and preparation" },
              { step: "Restoration", description: "Polishing, wet-sanding, and corrections" },
              { step: "Protection", description: "Apply protective coatings and wax" },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 text-center h-full">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#004FBB] text-white flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.step}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {index < 3 && (
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
              Marine Detailing <span className="gradient-text">Packages</span>
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
                    <p className="text-gray-600 text-sm mt-2">Contact us for custom boat sizes and pricing</p>
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

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-primary mb-4">Our Work</span>
            <h2 className="text-4xl font-bold text-gray-900">Marine Detailing Gallery</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((src, index) => (
              <div key={index} className="relative aspect-square rounded-2xl overflow-hidden group">
                <Image
                  src={src}
                  alt={`Boat detailing result ${index + 1}`}
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
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-accent mb-4">Testimonials</span>
            <h2 className="text-4xl font-bold text-gray-900">Boat Owner Reviews</h2>
          </div>
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
              <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-md border-l-4 border-[#004FBB]">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#FFBA00] text-xl">★</span>
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
            Keep Your Boat in <span className="text-[#FFBA00]">Pristine Condition</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule your marine detailing appointment today and protect your investment from saltwater damage and oxidation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn btn-accent text-base px-8 py-4">
              Schedule Your Appointment
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
