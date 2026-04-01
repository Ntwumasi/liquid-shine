'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function MaintenancePage() {
  const [openPackage, setOpenPackage] = useState<string | null>('boat');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const packages = [
    {
      id: 'boat',
      name: "Boat Maintenance Package",
      requirement: "To be included in the Boat Maintenance Program, your vessel must be serviced a minimum of twice a year (bi-annually). The boat will receive a Glossy Package detail at each service.",
      discounts: [
        { frequency: "Bi-annually", discount: "10%", description: "A boat serviced bi-annually will receive the stated 10% discount on their maintenance services for participating in the maintenance program." },
        { frequency: "Every 4 months", discount: "15%", description: "A boat serviced every 4 months (3 times annually) will receive a 15% discount on their maintenance services." },
        { frequency: "Quarterly", discount: "20%", description: "A boat serviced quarterly (every 3 months) will receive a 20% discount on their maintenance services." },
        { frequency: "Monthly", discount: "25%", description: "A boat serviced monthly will receive a 25% discount on their maintenance services." },
      ],
    },
    {
      id: 'rv',
      name: "RV Maintenance Package",
      requirement: "To be included in the RV Maintenance Program, your RV must be serviced a minimum of twice a year (bi-annually). The RV will receive a Glossy Package detail at each service.",
      discounts: [
        { frequency: "Bi-annually", discount: "10%", description: "An RV serviced bi-annually will receive the stated 10% discount on their maintenance services for participating in the maintenance program." },
        { frequency: "Every 4 months", discount: "15%", description: "An RV serviced every 4 months (3 times annually) will receive a 15% discount on their maintenance services." },
        { frequency: "Quarterly", discount: "20%", description: "An RV serviced quarterly (every 3 months) will receive a 20% discount on their maintenance services." },
        { frequency: "Monthly", discount: "25%", description: "An RV serviced monthly will receive a 25% discount on their maintenance services." },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0080FF]/10 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center scroll-animate">
            <h1 className="text-outline text-4xl md:text-6xl mb-6">
              MAINTENANCE PACKAGES
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Keep your investment looking its best with our professional maintenance programs.
              Regular care protects your vehicle and maintains that fresh detail look.
            </p>
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
                <span className="font-bold text-white text-lg">All Active duty Military, Veterans, and First Responders</span>
                <span className="text-white ml-2">get a 10% Discount off of all services</span>
              </div>
            </div>
            <Link href="/contact" className="px-6 py-2 bg-white text-[#0080FF] font-semibold rounded-sm hover:bg-gray-100 transition-colors uppercase text-sm tracking-wide">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* Why Our Maintenance Packages Make Sense */}
      <section className="py-20 bg-[#111111]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate-left">
              <span className="badge badge-primary mb-4">Why Us</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">
                <span className="text-outline">Why Our Maintenance Packages</span> <span className="text-[#0080FF]">Make Sense</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                Whether it&apos;s an auto, boat, or RV, buying one is a huge investment. One of the most important factors in helping that investment maintain its value is proper maintenance. Oxidation, sun, salt, heat, hard water, and improper washing and drying techniques can wreak havoc on the appearance and finish of your investment. Because proper maintenance is so important, the Liquid Shine Team has developed maintenance packages appropriate for your auto, boat, or RV.
              </p>
            </div>
            <div className="relative scroll-animate-right">
              <div className="relative rounded-sm overflow-hidden border border-white/10">
                <Image
                  src="/images/IMG_5783.jpeg"
                  alt="Professional Maintenance"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 scroll-animate">
            <p className="text-gray-400 text-lg mb-6">
              There are several advantages to participating in a maintenance program. First and foremost, you don&apos;t have to do the work yourself! Taking away the pressure of having to maintain your investment yourself frees up time to spend however you choose. Second, your investment stays in top shape because it is serviced on regular intervals. There isn&apos;t enough time between the regular service intervals for dirt, grime, and other harmful contaminants to build up and cause problems with the finish. Lastly, as an incentive for consistent care, Liquid Shine offers a discount on all services and increasing discounts on maintenance services based on the frequency of care. As always, Veteran and First Responder Discounts are applied in addition to any maintenance package discounts!
            </p>
            <p className="text-white font-bold text-lg">
              To start with a maintenance package requires at least a Glossy Package service to bring your auto, boat, or RV up to our standards and to prepare it for our maintenance work going forward. Check out our packages and discounts below!
            </p>
          </div>
        </div>
      </section>

      {/* Maintenance Packages */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="space-y-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-[#111111] border rounded-sm overflow-hidden transition-all duration-300 ${
                  openPackage === pkg.id ? 'border-[#0080FF]' : 'border-white/10'
                }`}
              >
                {/* Package Header */}
                <button
                  onClick={() => setOpenPackage(openPackage === pkg.id ? null : pkg.id)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-2xl font-black text-[#0080FF] uppercase tracking-wide">
                    {pkg.name}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-[#0080FF] transition-transform duration-300 flex-shrink-0 ${
                      openPackage === pkg.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Package Content */}
                <div className={`overflow-hidden transition-all duration-500 ${openPackage === pkg.id ? 'max-h-[1000px]' : 'max-h-0'}`}>
                  <div className="p-6 pt-0 border-t border-white/10">
                    <p className="text-gray-400 mb-8">{pkg.requirement}</p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {pkg.discounts.map((discount, i) => (
                        <div key={i} className="bg-[#0a0a0a] border border-white/10 rounded-sm p-5 hover:border-[#0080FF]/30 transition-colors">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-white font-bold uppercase tracking-wide">{discount.frequency}</span>
                            <span className="text-2xl font-black text-[#0080FF]">{discount.discount}</span>
                          </div>
                          <p className="text-gray-500 text-sm">{discount.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 text-center">
                      <Link href="/contact" className="btn btn-accent">
                        Get Started with {pkg.name}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#111111]">
        <div className="container-custom">
          <h2 className="text-outline text-3xl md:text-4xl text-center mb-16 scroll-animate">
            MAINTENANCE PROGRAM BENEFITS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "No Work For You",
                desc: "Taking away the pressure of having to maintain your investment yourself frees up time to spend however you choose.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Stays in Top Shape",
                desc: "Your investment stays in top shape because it is serviced on regular intervals, preventing contaminant buildup.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "Increasing Discounts",
                desc: "As an incentive for consistent care, Liquid Shine offers increasing discounts based on the frequency of care.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`scroll-animate scroll-delay-${i + 1} bg-[#0a0a0a] border border-white/10 rounded-sm p-8 text-center hover:border-[#0080FF]/50 transition-colors`}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#0080FF]/20 flex items-center justify-center text-[#0080FF]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_5785.jpeg"
            alt="Background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0080FF]/90 to-[#0066cc]/90" />
        </div>
        <div className="container-custom relative z-10 text-center scroll-animate-scale">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">
            Ready to Get Started with Our Maintenance Services?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us now to figure out which maintenance package works best for you and leave the stress of maintaining your auto, boat, or RV behind!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0080FF] font-bold rounded-sm hover:bg-gray-100 transition-colors uppercase tracking-wide"
          >
            Let&apos;s Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
