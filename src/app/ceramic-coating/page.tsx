import Image from 'next/image';
import Link from 'next/link';

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
      popular: true,
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

  const benefits = [
    { title: "Professional Grade", desc: "We use only the highest quality ceramic coatings tested and proven for durability." },
    { title: "Long-Lasting Protection", desc: "Warranties up to 10 years with proper maintenance. Protect your investment." },
    { title: "Unmatched Shine", desc: "Ceramic coating creates a brilliant, mirror-like finish that turns heads." },
    { title: "Easy Maintenance", desc: "Reduces washing frequency and makes cleaning significantly easier." },
    { title: "Water Beading", desc: "Superior water beading and hydrophobic properties protect against contaminants." },
    { title: "Expert Installation", desc: "Certified technicians ensure perfect application every time." },
  ];

  const process = [
    { step: "CLEAN THE GRIME", desc: "Thorough washing and preparation" },
    { step: "POLISH IT UP", desc: "Professional polishing and correction" },
    { step: "COAT IT OVER", desc: "Expert ceramic coating application" },
    { step: "DRESS TO SHINE", desc: "Final detailing and protection" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <Image
          src="/images/Ceramic-Coating-Tesla-1.jpg"
          alt="Ceramic Coating Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="container-custom relative z-10 pt-24 md:pt-20">
          <div className="max-w-2xl">
            <span className="badge badge-accent mb-4 animate-fade-in-up">Premium Protection</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Ceramic <span className="text-[#FFBA00]">Coating</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Professional ceramic coating protection for your vehicle. Long-lasting shine and protection against the elements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-accent">
                Get Protected
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
                <span className="text-gray-800 ml-2">10% OFF all ceramic coating services</span>
              </div>
            </div>
            <Link href="/contact" className="px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
              Claim Discount
            </Link>
          </div>
        </div>
      </section>

      {/* System X Certification - Featured */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3 flex justify-center">
              <Image
                src="/images/logo-system-x-authorized-installer.jpeg"
                alt="System X Authorized Installer"
                width={300}
                height={300}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <span className="badge badge-primary mb-4">Certified Excellence</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Authorized System X <span className="gradient-text">Installer</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                We are proud to be an authorized installer of System X ceramic coatings — the most advanced paint protection available. Our partnership ensures you receive the highest quality products backed by manufacturer warranties.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#004FBB]">100%</div>
                  <p className="text-gray-600 text-sm">Genuine Products</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#004FBB]">10Y+</div>
                  <p className="text-gray-600 text-sm">Warranty Coverage</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#004FBB]">Certified</div>
                  <p className="text-gray-600 text-sm">Technicians</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-primary mb-4">Why Ceramic Coating</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Makes Our Coating <span className="gradient-text-blue">Better?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 mb-4 rounded-full bg-[#004FBB] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-20 bg-[#004FBB]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Ceramic Coating <span className="text-[#FFBA00]">Process</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 h-full text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#FFBA00] text-gray-900 flex items-center justify-center text-2xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.step}</h3>
                  <p className="text-blue-100 text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#FFBA00]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-primary mb-4">Pricing</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ceramic Coating <span className="gradient-text">Packages</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${pkg.popular ? 'ring-2 ring-[#FFBA00]' : ''}`}>
                {pkg.popular && (
                  <div className="bg-[#FFBA00] text-gray-900 text-center py-2 font-bold text-sm">
                    MOST POPULAR
                  </div>
                )}
                <div className="bg-[#004FBB] text-white p-6">
                  <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                  <p className="text-[#FFBA00] font-semibold">{pkg.warranty} Warranty</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">Washing:</h4>
                    <ul className="space-y-1">
                      {pkg.washing.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                          <svg className="w-4 h-4 text-[#004FBB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">Coating:</h4>
                    <ul className="space-y-1">
                      {pkg.coating.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                          <svg className="w-4 h-4 text-[#004FBB] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-gray-50 p-2 rounded text-center">
                        <p className="text-gray-500 text-xs">Coupe</p>
                        <p className="font-bold text-[#004FBB]">${pkg.prices.coupe}</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded text-center">
                        <p className="text-gray-500 text-xs">Sedan</p>
                        <p className="font-bold text-[#004FBB]">${pkg.prices.sedan}</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded text-center">
                        <p className="text-gray-500 text-xs">Mid-SUV</p>
                        <p className="font-bold text-[#004FBB]">${pkg.prices.midSuv}</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded text-center">
                        <p className="text-gray-500 text-xs">Full-Size</p>
                        <p className="font-bold text-[#004FBB]">${pkg.prices.fullSize}</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/contact" className="block w-full mt-4 btn btn-primary text-center text-sm py-2">
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-primary mb-4">Our Results</span>
            <h2 className="text-4xl font-bold text-gray-900">Ceramic Coating Gallery</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              '/images/Ceramic-Coating-Tesla-1.jpg',
              '/images/Ceramic-Coating-Tesla-2.jpg',
              '/images/Ceramic-Coating-Tesla-3.jpg',
              '/images/gallery-corvette-dark.jpg',
            ].map((src, index) => (
              <div key={index} className="relative aspect-square rounded-2xl overflow-hidden group">
                <Image
                  src={src}
                  alt={`Ceramic coating result ${index + 1}`}
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
      <section className="py-20 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#004FBB] rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFBA00] rounded-full opacity-10 blur-3xl" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Protect Your <span className="text-[#FFBA00]">Investment?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule your ceramic coating appointment and experience the Liquid Shine difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn btn-accent text-base px-8 py-4">
              Book Your Appointment
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
