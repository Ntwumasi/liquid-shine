'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function PaintProtectionFilmPage() {
  // Initialize scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale'
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const highlights = [
    { value: '8 mil', label: 'Film Thickness' },
    { value: '10 Year', label: 'Warranty' },
    { value: 'Self-Healing', label: 'Top Coat' },
    { value: '100%', label: 'Mobile Service' },
  ];

  const benefits = [
    {
      lead: 'Ultra-durable 8-mil thickness',
      rest: 'that stands up to rock chips, scratches, road debris, and everyday wear.',
    },
    {
      lead: 'Self-healing top coat',
      rest: 'where light swirls and scratches disappear with heat from the sun or warm water.',
    },
    {
      lead: 'Deeper, wet-look gloss',
      rest: 'that enriches your paint’s natural shine while remaining virtually invisible.',
    },
    {
      lead: 'UV resistance',
      rest: 'that helps prevent fading, oxidation, and discoloration under the Florida sun.',
    },
    {
      lead: 'Smooth hydrophobic surface',
      rest: 'so dirt and water sheet off, making washing easier and keeping the finish showroom-fresh longer.',
    },
    {
      lead: 'Full 10-year warranty',
      rest: 'against yellowing, cracking, bubbling, and peeling — backed by the manufacturer.',
    },
  ];

  const coverage = [
    {
      name: 'Partial Front',
      description:
        'The most common impact zones covered: partial hood, partial fenders, full front bumper, and mirrors. A smart, budget-conscious starting point.',
      includes: ['Front bumper', 'Partial hood (18–24")', 'Partial fenders', 'Side mirrors'],
    },
    {
      name: 'Full Front',
      description:
        'Seamless, edge-to-edge protection across the entire front end — no visible film line down the middle of your hood.',
      includes: ['Full hood', 'Full fenders', 'Front bumper', 'Side mirrors', 'Headlights'],
      popular: true,
    },
    {
      name: 'Track Pack',
      description:
        'Full front coverage plus the high-abrasion areas that take the most punishment on the road and at speed.',
      includes: ['Everything in Full Front', 'Rocker panels', 'A-pillars & roof leading edge', 'Rear wheel arches'],
    },
    {
      name: 'Full Vehicle',
      description:
        'Every painted panel wrapped in film. The highest level of physical protection available for your vehicle’s finish.',
      includes: ['All painted panels', 'Bumpers & mirrors', 'Door cups & handle areas', 'Luggage/loading area'],
    },
  ];

  const addOns = [
    'Headlights & fog lights',
    'Door edge guards',
    'Door cup guards',
    'Rocker panels',
    'Rear bumper loading ledge',
    'Roof leading edge',
  ];

  const process = [
    {
      step: '1',
      title: 'DECONTAMINATE',
      desc: 'Your vehicle gets a full hand wash, chemical decontamination, and clay bar treatment. Film is only as good as the surface underneath it, so nothing gets trapped beneath the wrap.',
      image: '/images/Auto-Detailing-2018-Dodge-Charger.jpg',
    },
    {
      step: '2',
      title: 'CORRECT THE PAINT',
      desc: 'We polish out swirls and light defects before any film goes on. PPF magnifies whatever it covers — correcting first means you lock in a flawless finish, not flawed paint.',
      image: '/images/Auto-Detailing-2018-BMW-3-Series.jpg',
    },
    {
      step: '3',
      title: 'PRECISION-FIT THE FILM',
      desc: 'Panels are wrapped using computer-cut patterns matched to your exact year, make, and model — with edges tucked and wrapped wherever the panel allows for a truly invisible install.',
      image: '/images/car-detail.jpeg',
    },
    {
      step: '4',
      title: 'CURE & INSPECT',
      desc: 'Every edge is squeegeed, heat-set, and inspected under multiple light sources. We walk you through aftercare so the film performs for the full length of its warranty.',
      image: '/images/hero-corvette-showroom.jpg',
    },
  ];

  const comparison = [
    { feature: 'Blocks rock chips & road debris', ppf: true, ceramic: false },
    { feature: 'Self-healing from light scratches', ppf: true, ceramic: false },
    { feature: 'Hydrophobic, easy-clean surface', ppf: true, ceramic: true },
    { feature: 'UV & fade protection', ppf: true, ceramic: true },
    { feature: 'Deep gloss enhancement', ppf: true, ceramic: true },
    { feature: 'Chemical & bug-etch resistance', ppf: true, ceramic: true },
    { feature: 'Can be applied over the other', ppf: false, ceramic: true },
  ];

  const faqs = [
    {
      q: 'Is paint protection film visible once installed?',
      a: 'No. Our film is optically clear and installed with computer-cut patterns that tuck the edges wherever the panel allows. Up close you may find an edge if you look for it — from a normal viewing distance the film is invisible, and it actually deepens your paint’s gloss.',
    },
    {
      q: 'How does self-healing actually work?',
      a: 'The film’s elastomeric top coat has a “memory.” When light swirls or fingernail scratches occur, heat — from the sun, a hot rinse, or a heat gun — lets the surface flow back to its original shape and the marks disappear.',
    },
    {
      q: 'Should I get PPF or ceramic coating?',
      a: 'They solve different problems. PPF is a physical barrier that stops rock chips; ceramic coating is a chemical barrier that adds gloss, UV protection, and easy cleaning. Many of our Gulf Coast clients do both — PPF on high-impact panels and System X ceramic over the whole vehicle.',
    },
    {
      q: 'Can you install PPF at my home or office?',
      a: 'Yes. We are fully mobile and self-contained — we bring our own power, water, and lighting. For film installation we do need a clean, covered, wind-free space such as a garage or covered bay. Tell us where you are and we’ll confirm the setup when you book.',
    },
    {
      q: 'How long does the film last?',
      a: 'Our premium film carries a full 10-year warranty against yellowing, cracking, bubbling, and peeling. With routine washing and normal use, you can expect a decade of protection.',
    },
    {
      q: 'What does PPF cost?',
      a: 'Pricing depends on the coverage level you choose and the size and complexity of your vehicle’s panels. Give us a call or request a free estimate and we’ll quote your exact vehicle — no guesswork, no surprises.',
    },
  ];

  const serviceAreas = [
    'Bradenton', 'Palmetto', 'Ellenton', 'Parrish', 'Lakewood Ranch',
    'Anna Maria Island', 'Sarasota', 'Venice', 'Osprey', 'Nokomis',
    'North Port', 'Englewood',
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <Image
          src="/images/hero-corvette-showroom.jpg"
          alt="Paint Protection Film Installation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        <div className="container-custom relative z-10 pt-24 md:pt-20">
          <div className="max-w-2xl">
            <span className="badge badge-primary mb-4 animate-fade-in-up">Now Offering PPF</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">
              <span className="text-outline">Paint Protection</span> <span className="text-[#0080FF]">Film</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Protect your paint. Enhance your shine. Anywhere you are. Our premium PPF delivers serious defense with an ultra-durable 8-mil thickness that stands up to rock chips, scratches, road debris, and everyday wear.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-accent">
                Get Free Estimate
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="tel:978-660-1356" className="btn btn-secondary">
                (978) 660-1356
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Spec Highlights */}
      <section className="py-12 bg-[#111111] border-y border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className={`scroll-animate scroll-delay-${index + 1} text-center`}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0080FF] mb-2 leading-tight">
                  {item.value}
                </div>
                <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Is PPF */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate-left">
              <span className="badge badge-primary mb-4">What Is It?</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">
                <span className="text-outline">What Is</span> <span className="text-[#0080FF]">PPF?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                Paint Protection Film is a thick, transparent, self-healing urethane film applied directly over your vehicle&apos;s painted surfaces. Where a ceramic coating protects chemically, PPF protects <em className="text-white not-italic font-semibold">physically</em> — it takes the hit from the rock so your clear coat doesn&apos;t.
              </p>
              <p className="text-gray-400 text-lg mb-6">
                Our premium film measures a full 8 mil thick — enough to absorb the impacts that leave chips and stars in unprotected paint — while staying optically clear. It deepens your vehicle&apos;s natural gloss for a richer, wet-look finish and remains virtually invisible once installed.
              </p>
              <p className="text-gray-400 text-lg">
                Backed by a full 10-year warranty, it also offers self-healing properties, UV resistance to help prevent fading, and a smooth hydrophobic surface that makes washing easier and keeps your car looking showroom-fresh longer.
              </p>
            </div>
            <div className="relative scroll-animate-right">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10">
                <Image
                  src="/images/Auto-Detailing-2018-Corvette-Convertible-After.jpg"
                  alt="Glossy corvette front end — the high-impact area paint protection film covers"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-500 text-sm mt-3 text-center">
                Invisible protection, deeper gloss — no change to your paint&apos;s color or finish
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#111111]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto scroll-animate">
            <span className="badge badge-primary mb-4">Why PPF</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 uppercase tracking-tight">
              Benefits Of <span className="text-[#0080FF]">Paint Protection Film</span>
            </h2>
            <ul className="space-y-5 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4 text-lg text-gray-300">
                  <span className="mt-2 w-2 h-2 flex-shrink-0 rounded-full bg-[#0080FF]" />
                  <span>
                    <span className="font-bold text-white">{benefit.lead}</span> {benefit.rest}
                  </span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-accent">
              Request Your Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animate">
            <span className="badge badge-primary mb-4">Coverage</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              <span className="text-outline">Coverage</span> <span className="text-[#0080FF]">Options</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Protect the panels that matter most, or wrap the whole vehicle. Every install is quoted to your exact year, make, and model — call us for pricing on your vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coverage.map((option, index) => (
              <div
                key={index}
                className={`scroll-animate-scale scroll-delay-${index + 1} bg-[#111111] border rounded-sm overflow-hidden transition-all hover:border-[#0080FF]/50 ${
                  option.popular ? 'border-[#0080FF] ring-1 ring-[#0080FF]' : 'border-white/10'
                }`}
              >
                {option.popular && (
                  <div className="bg-[#0080FF] text-white text-center py-2 font-bold text-sm uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">
                    {option.name}
                  </h3>
                  <p className="text-gray-400 mb-6">{option.description}</p>
                  <ul className="space-y-3">
                    {option.includes.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-400">
                        <svg className="w-5 h-5 text-[#0080FF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="mt-12 max-w-4xl mx-auto scroll-animate">
            <div className="bg-[#111111] border border-white/10 rounded-sm p-8">
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                Popular Add-Ons
              </h3>
              <p className="text-gray-500 mb-6">
                Mix and match with any coverage level to protect the spots that take the most abuse.
              </p>
              <div className="flex flex-wrap gap-3">
                {addOns.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-white/5 border border-white/10 text-gray-300 text-sm rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-car-front.jpg"
            alt="Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animate">
            <span className="badge badge-primary mb-4">Professional</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Our <span className="text-[#0080FF]">PPF Installation</span> Process
            </h2>
            <p className="text-gray-400 text-lg">
              Film is permanent-feeling protection — it deserves a permanent-quality install. Here is exactly what happens to your vehicle, start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 items-start">
            {process.map((item, index) => (
              <div key={index} className={`relative scroll-animate scroll-delay-${index + 1} flex flex-col items-center text-center`}>
                <div className="relative mb-6 group">
                  <div className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:border-[#0080FF] transition-colors duration-500" style={{ margin: '-8px', padding: '8px' }} />

                  <div className="relative w-44 h-44 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-[#0080FF]/50 transition-all duration-500 shadow-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-7xl md:text-6xl lg:text-7xl font-black text-[#0080FF] drop-shadow-[0_0_20px_rgba(0,128,255,0.5)] z-10" style={{ fontFamily: 'Impact, sans-serif' }}>
                    {item.step}
                  </div>

                  {index < 3 && (
                    <div className="hidden md:flex absolute top-1/2 -right-6 lg:-right-4 -translate-y-1/2 items-center z-20">
                      <svg className="w-8 h-8 text-[#0080FF] animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                      </svg>
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wider">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PPF vs Ceramic */}
      <section className="py-20 bg-[#111111]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 scroll-animate">
            <span className="badge badge-primary mb-4">Compare</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              <span className="text-outline">PPF vs</span> <span className="text-[#0080FF]">Ceramic Coating</span>
            </h2>
            <p className="text-gray-400 text-lg">
              These aren&apos;t competing products — they&apos;re partners. PPF stops physical damage; ceramic coating handles chemical and UV attack. Together they&apos;re the most complete protection available.
            </p>
          </div>

          <div className="max-w-3xl mx-auto scroll-animate overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-500 font-medium uppercase tracking-wider text-sm">Protection</th>
                  <th className="py-4 px-4 text-[#0080FF] font-black uppercase tracking-wide">PPF</th>
                  <th className="py-4 px-4 text-white font-black uppercase tracking-wide">Ceramic</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index} className="border-b border-white/5">
                    <td className="py-4 px-4 text-gray-300">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {row.ppf ? (
                        <svg className="w-6 h-6 text-[#0080FF] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-gray-700 text-xl">&mdash;</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.ceramic ? (
                        <svg className="w-6 h-6 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-gray-700 text-xl">&mdash;</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="text-center mt-10">
              <Link href="/ceramic-coating" className="btn btn-secondary">
                Explore Ceramic Coating
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12 scroll-animate">
            <span className="badge badge-primary mb-4">Questions</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              <span className="text-outline">PPF</span> <span className="text-[#0080FF]">FAQ</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 gap-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className={`scroll-animate scroll-delay-${(index % 4) + 1} group bg-[#111111] border border-white/10 rounded-sm hover:border-[#0080FF]/30 transition-colors`}
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6 text-white font-bold">
                  {faq.q}
                  <svg
                    className="w-5 h-5 text-[#0080FF] flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-6 text-gray-400 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-[#111111]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto scroll-animate">
            <span className="badge badge-primary mb-4">Mobile Service</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              <span className="text-outline">We Come</span> <span className="text-[#0080FF]">To You</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Serving all of Manatee and Sarasota Counties. Film installation needs a clean, covered space — we&apos;ll confirm the setup with you when you book.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 bg-white/5 border border-white/10 text-gray-400 text-sm rounded-full"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0080FF] rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0080FF] rounded-full opacity-5 blur-3xl" />
        <div className="container-custom relative z-10 text-center scroll-animate-scale">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            <span className="text-outline">Protect Your Paint.</span> <span className="text-[#0080FF]">Enhance Your Shine.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Anywhere you are. Contact us for a free PPF estimate on your exact vehicle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn btn-accent text-base px-8 py-4">
              Get Free Estimate
            </Link>
            <a href="tel:978-660-1356" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors uppercase tracking-wide">
              (978) 660-1356
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
