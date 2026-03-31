'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function MaintenancePage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const maintenancePlans = [
    {
      name: "Monthly Maintenance",
      description: "Perfect for keeping your vehicle in pristine condition year-round",
      includes: [
        "Exterior hand wash with premium soap",
        "Wheel and tire cleaning",
        "Quick interior vacuum",
        "Dashboard and console wipe-down",
        "Glass cleaning inside and out",
        "Tire dressing application",
      ],
      frequency: "Monthly",
    },
    {
      name: "Quarterly Detail",
      description: "Comprehensive care every 3 months to maintain that showroom shine",
      includes: [
        "Full exterior wash and clay bar treatment",
        "Paint sealant or wax application",
        "Complete interior deep clean",
        "Leather/vinyl conditioning",
        "Engine bay cleaning",
        "Ceramic coating maintenance (if applicable)",
      ],
      frequency: "Every 3 Months",
    },
    {
      name: "Ceramic Coating Maintenance",
      description: "Specialized care for ceramic coated vehicles",
      includes: [
        "pH-neutral wash safe for coatings",
        "Decontamination wash when needed",
        "Ceramic boost spray application",
        "Coating inspection and touch-up",
        "Interior protection refresh",
        "Detailed condition report",
      ],
      frequency: "As Recommended",
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
              MAINTENANCE PLANS
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Keep your vehicle looking its best with our professional maintenance programs.
              Regular care protects your investment and maintains that fresh detail look.
            </p>
          </div>
        </div>
      </section>

      {/* Why Maintenance Matters */}
      <section className="py-20 bg-[#111111]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16 scroll-animate">
            <h2 className="text-outline text-3xl md:text-4xl mb-6">
              WHY REGULAR MAINTENANCE?
            </h2>
            <p className="text-gray-300 text-lg">
              Just like your car needs regular oil changes, your vehicle&apos;s appearance needs consistent care.
              Our maintenance programs ensure your paint, interior, and protective coatings stay in top condition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Protect Your Investment",
                desc: "Regular maintenance preserves your vehicle's value and keeps protective coatings working effectively.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "Extend Coating Life",
                desc: "Proper care extends the life of ceramic coatings and sealants, maximizing your protection.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Save Time & Money",
                desc: "Prevent buildup and damage that requires expensive correction work later.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 text-center scroll-animate hover:border-[#0080FF]/50 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#0080FF]/20 flex items-center justify-center text-[#0080FF]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-outline text-3xl md:text-4xl text-center mb-16 scroll-animate">
            OUR MAINTENANCE PROGRAMS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {maintenancePlans.map((plan, i) => (
              <div
                key={i}
                className="bg-[#111111] border border-white/10 rounded-2xl overflow-hidden scroll-animate hover:border-[#0080FF]/50 transition-all duration-300"
              >
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-[#0080FF]/20 text-[#0080FF] text-sm font-semibold rounded-full mb-4">
                    {plan.frequency}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>

                  <div className="space-y-3">
                    {plan.includes.map((item, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#0080FF] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-black/30 border-t border-white/5">
                  <Link
                    href="/contact"
                    className="block w-full text-center py-3 bg-[#0080FF] hover:bg-[#0066cc] text-white font-semibold rounded-xl transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0080FF] to-[#0066cc]">
        <div className="container-custom text-center scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start a Maintenance Plan?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us to discuss which maintenance program is right for your vehicle.
            We&apos;ll create a customized schedule that fits your needs and budget.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0080FF] font-bold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Schedule Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
