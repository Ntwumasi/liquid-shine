import Image from 'next/image';
import Link from 'next/link';

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
      popular: true,
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
    { name: "Washing", description: "Thorough exterior washing with premium soaps" },
    { name: "Waxing", description: "Professional wax application for protection" },
    { name: "Polishing", description: "Expert polishing to restore shine" },
    { name: "Buffing", description: "Fine buffing for mirror-like finish" },
    { name: "Paint Correction", description: "Remove swirls and scratches" },
    { name: "Engine Bay Cleaning", description: "Detail and clean engine compartment" },
    { name: "Headlight Restoration", description: "Restore clarity and protection" },
    { name: "Interior Cleaning", description: "Deep clean all interior surfaces" },
    { name: "Steam Cleaning", description: "Professional steam cleaning for carpets" },
    { name: "Carpet & Upholstery", description: "Complete shampooing and restoration" },
  ];

  const galleryImages = [
    '/images/Auto-Detailing-2018-Corvette-Convertible-After.jpg',
    '/images/Auto-Detailing-BMW-3-Series.jpg',
    '/images/Auto-Detailing-2018-Jeep-Wrangler-Rubicon.jpg',
    '/images/Auto-Detailing-Dodge-Charger.jpg',
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <Image
          src="/images/hero-car-front.jpg"
          alt="Auto Detailing Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="container-custom relative z-10 pt-24 md:pt-20">
          <div className="max-w-2xl">
            <span className="badge badge-accent mb-4 animate-fade-in-up">Professional Service</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Auto <span className="text-[#FFBA00]">Detailing</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Professional auto detailing that transforms your vehicle inside and out. From basic washing to complete restoration.
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
      <section className="bg-[#0080FF] py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-3xl">🎖️</span>
              <div>
                <span className="font-bold text-white text-lg">Military & First Responders:</span>
                <span className="text-white/90 ml-2">15% OFF all auto detailing services</span>
              </div>
            </div>
            <Link href="/contact" className="px-6 py-2 bg-white text-[#0080FF] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Claim Discount
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[#111111]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-primary mb-4">Our Services</span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete <span className="gradient-text">Detailing Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-xl text-center hover:bg-white/10 hover:border-[#0080FF]/30 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#0080FF]/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#0080FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-1">{service.name}</h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-[#0080FF]">Liquid Shine?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Expert Technicians", desc: "Certified professionals with years of experience" },
              { title: "Premium Products", desc: "Only the highest quality detailing products" },
              { title: "Mobile Service", desc: "We come to your home or workplace" },
              { title: "Satisfaction Guaranteed", desc: "100% satisfaction on all services" },
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-[#0080FF]/30 transition-colors">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#0080FF] flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailing Process */}
      <section className="py-20 bg-[#111111]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-primary mb-4">Our Process</span>
            <h2 className="text-4xl font-bold text-white">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "Inspection", desc: "Assess vehicle condition" },
              { step: "Wash", desc: "Professional washing" },
              { step: "Polish", desc: "Restore shine and clarity" },
              { step: "Protect", desc: "Apply protective coatings" },
              { step: "Final Touch", desc: "Quality inspection" },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center h-full">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#0080FF] text-white flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-white mb-1">{item.step}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-[#0080FF]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-primary mb-4">Pricing</span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Detailing <span className="gradient-text">Packages</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-[#111111] rounded-2xl border overflow-hidden hover:border-[#0080FF]/50 transition-all ${pkg.popular ? 'border-[#0080FF] ring-1 ring-[#0080FF]' : 'border-white/10'}`}>
                {pkg.popular && (
                  <div className="bg-[#0080FF] text-white text-center py-2 font-bold text-sm">
                    MOST POPULAR
                  </div>
                )}
                <div className="bg-white/5 text-white p-6 border-b border-white/10">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-gray-400">{pkg.description}</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-bold text-white mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {pkg.services.map((service, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400">
                          <svg className="w-5 h-5 text-[#0080FF] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-white/10 pt-6">
                    <h4 className="font-bold text-white mb-3">Starting At:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/5 border border-white/10 p-3 rounded-lg">
                        <p className="text-gray-500 text-sm">Coupe</p>
                        <p className="text-2xl font-bold text-[#0080FF]">${pkg.prices.coupe}</p>
                      </div>
                      <div className="bg-white/5 border border-white/10 p-3 rounded-lg">
                        <p className="text-gray-500 text-sm">Sedan</p>
                        <p className="text-2xl font-bold text-[#0080FF]">${pkg.prices.sedan}</p>
                      </div>
                      <div className="bg-white/5 border border-white/10 p-3 rounded-lg">
                        <p className="text-gray-500 text-sm">Mid-SUV</p>
                        <p className="text-2xl font-bold text-[#0080FF]">${pkg.prices.midSuv}</p>
                      </div>
                      <div className="bg-white/5 border border-white/10 p-3 rounded-lg">
                        <p className="text-gray-500 text-sm">Full-Size</p>
                        <p className="text-2xl font-bold text-[#0080FF]">${pkg.prices.fullSize}</p>
                      </div>
                    </div>
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
      <section className="py-20 bg-[#111111]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-primary mb-4">Our Work</span>
            <h2 className="text-4xl font-bold text-white">Before & After</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((src, index) => (
              <div key={index} className="relative aspect-square rounded-2xl overflow-hidden group border border-white/10 hover:border-[#0080FF]/30 transition-colors">
                <Image
                  src={src}
                  alt={`Auto detailing result ${index + 1}`}
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

      {/* CTA Section */}
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0080FF] rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0080FF] rounded-full opacity-5 blur-3xl" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Vehicle <span className="text-[#0080FF]">Today</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Schedule your auto detailing appointment and see the difference professional care can make.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn btn-accent text-base px-8 py-4">
              Book Your Appointment
            </Link>
            <a href="tel:978-660-1356" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
              (978) 660-1356
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
