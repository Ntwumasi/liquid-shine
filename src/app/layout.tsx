import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';
import ScrollAnimations from '@/components/ScrollAnimations';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Liquid Shine Elite Mobile Detailing | Professional Auto Detailing Services',
  description:
    'Professional mobile detailing services for cars, boats, and RVs. Ceramic coating, auto detailing, and more in Manatee & Sarasota Counties, FL.',
  keywords:
    'mobile detailing, auto detailing, ceramic coating, boat detailing, RV detailing, car detailing, Manatee County, Sarasota County, Parrish FL',
  openGraph: {
    title: 'Liquid Shine Elite Mobile Detailing',
    description: 'Professional mobile detailing services for automotive, marine, and recreational vehicles in Manatee & Sarasota Counties.',
    type: 'website',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Organization"],
      "@id": "https://www.liquid-shine.com/#business",
      "name": "Liquid Shine Mobile Detailing",
      "alternateName": ["Liquid Shine", "Liquid Shine Detailing", "Liquid Shine Mobile Detail"],
      "description": "Liquid Shine Mobile Detailing is a premier mobile auto and marine detailing company based in Parrish, Florida, serving Tampa, Bradenton, Palmetto, Parrish, Lakewood Ranch, Sarasota, and the surrounding Gulf Coast communities. Founded in 2016 by owner Nate Mansour, Liquid Shine is an Authorized System X Ceramic Coating Installer specializing in mobile car detailing, professional ceramic coating installation, paint protection film (PPF) removal, full-service boat and yacht detailing, paint correction, and interior restoration. Our certified technicians bring professional-grade equipment, water, and power directly to your home, office, or marina — delivering showroom-quality results without you leaving your driveway or slip.",
      "url": "https://www.liquid-shine.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.liquid-shine.com/images/Final-Concrete-Beautiful-Logo-1-1.jpg.webp",
        "width": 512,
        "height": 512
      },
      "image": [
        "https://www.liquid-shine.com/images/hero-car-front.jpg",
        "https://www.liquid-shine.com/images/Ceramic-Coating-Tesla-1.jpg",
        "https://www.liquid-shine.com/images/hero-boat-docked.jpg",
        "https://www.liquid-shine.com/images/hero-corvette-showroom.jpg"
      ],
      "telephone": "+1-978-660-1356",
      "priceRange": "$$-$$$",
      "currenciesAccepted": "USD",
      "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Apple Pay", "Google Pay", "Zelle", "Venmo"],
      "foundingDate": "2016",
      "founder": {
        "@type": "Person",
        "name": "Nate Mansour",
        "jobTitle": "Owner & Master Detailer",
        "worksFor": { "@id": "https://www.liquid-shine.com/#business" }
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8955 US Hwy 301 N Ste 330",
        "addressLocality": "Parrish",
        "addressRegion": "FL",
        "postalCode": "34219",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 27.5725,
        "longitude": -82.4321
      },
      "hasMap": "https://www.google.com/maps/search/?api=1&query=Liquid+Shine+Mobile+Detailing+8955+US+Hwy+301+N+Parrish+FL+34219",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:30",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Tampa", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Bradenton", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Palmetto", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Parrish", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Lakewood Ranch", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Sarasota", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Ellenton", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Ruskin", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Apollo Beach", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Sun City Center", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Riverview", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Brandon", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "St. Petersburg", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Clearwater", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Anna Maria", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Holmes Beach", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Longboat Key", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Siesta Key", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Venice", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Osprey", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Nokomis", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Myakka City", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "City", "name": "Wimauma", "containedInPlace": { "@type": "State", "name": "Florida" } },
        { "@type": "AdministrativeArea", "name": "Manatee County, Florida" },
        { "@type": "AdministrativeArea", "name": "Sarasota County, Florida" },
        { "@type": "AdministrativeArea", "name": "Hillsborough County, Florida" }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 27.5725, "longitude": -82.4321 },
        "geoRadius": "65000"
      },
      "knowsAbout": [
        "Mobile car detailing",
        "System X Ceramic Coating",
        "Ceramic coating installation",
        "Paint Protection Film (PPF) removal",
        "Boat and yacht detailing",
        "Marine ceramic coatings",
        "Paint correction",
        "Interior deep cleaning",
        "Headlight restoration",
        "Engine bay detailing",
        "Clay bar treatment",
        "Machine polishing",
        "Marine oxidation removal",
        "Gelcoat restoration",
        "Leather conditioning",
        "Ozone odor removal",
        "Graphene coatings"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "certification",
          "name": "System X Authorized Ceramic Coating Installer",
          "recognizedBy": {
            "@type": "Organization",
            "name": "System X Ceramic Coatings",
            "url": "https://www.systemxceramic.com/"
          }
        }
      ],
      "slogan": "Parrish & Tampa Bay's Premier Mobile Detailing, Ceramic Coating & Marine Detailing Specialists",
      "foundingLocation": { "@type": "Place", "name": "Parrish, FL" },
      "sameAs": [
        "https://www.facebook.com/LiquidShineMobileDetailing",
        "https://www.instagram.com/liquidshinedetail/"
      ],
      "hasOfferCatalog": { "@id": "https://www.liquid-shine.com/#service-catalog" },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "207",
        "bestRating": "5",
        "worstRating": "1"
      },
      "makesOffer": [
        { "@type": "Offer", "itemOffered": { "@id": "https://www.liquid-shine.com/#service-mobile-detailing" } },
        { "@type": "Offer", "itemOffered": { "@id": "https://www.liquid-shine.com/#service-ceramic-coating" } },
        { "@type": "Offer", "itemOffered": { "@id": "https://www.liquid-shine.com/#service-ppf-removal" } },
        { "@type": "Offer", "itemOffered": { "@id": "https://www.liquid-shine.com/#service-boat-detailing" } }
      ]
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://www.liquid-shine.com/#service-catalog",
      "name": "Liquid Shine Detailing Service Catalog",
      "itemListElement": [
        {
          "@type": "Service",
          "@id": "https://www.liquid-shine.com/#service-mobile-detailing",
          "name": "Mobile Car Detailing in Tampa, Bradenton & Sarasota",
          "serviceType": "Mobile Auto Detailing",
          "category": "Automotive Detailing",
          "description": "Full-service mobile car detailing that comes to your home or office anywhere in Tampa, Bradenton, Palmetto, Parrish, Lakewood Ranch, Sarasota, and surrounding areas. Includes hand wash, decontamination, clay bar, interior vacuum and shampoo, leather conditioning, wheel and tire dressing, glass cleaning, and a hand-applied sealant or wax. We bring our own water and power — all you need is a place to park.",
          "provider": { "@id": "https://www.liquid-shine.com/#business" },
          "areaServed": [
            { "@type": "City", "name": "Tampa" },
            { "@type": "City", "name": "Bradenton" },
            { "@type": "City", "name": "Palmetto" },
            { "@type": "City", "name": "Parrish" },
            { "@type": "City", "name": "Lakewood Ranch" },
            { "@type": "City", "name": "Sarasota" }
          ],
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://www.liquid-shine.com/",
            "servicePhone": "+1-978-660-1356"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://www.liquid-shine.com/"
          }
        },
        {
          "@type": "Service",
          "@id": "https://www.liquid-shine.com/#service-ceramic-coating",
          "name": "System X Ceramic Coating Installation in Tampa & Bradenton",
          "serviceType": "Ceramic Coating",
          "category": "Paint Protection",
          "description": "Liquid Shine is an Authorized System X Ceramic Coating Installer serving Tampa, Bradenton, Palmetto, Parrish, Lakewood Ranch, and Sarasota. Our certified installers perform a multi-stage paint correction before applying premium System X ceramic coatings that provide UV protection, hydrophobic water behavior, chemical resistance, and a deep glossy finish — backed by System X's manufacturer warranty. Coatings are available for paint, wheels, glass, trim, and interior surfaces on cars, trucks, and boats.",
          "provider": { "@id": "https://www.liquid-shine.com/#business" },
          "brand": {
            "@type": "Brand",
            "name": "System X Ceramic Coatings"
          },
          "areaServed": [
            { "@type": "City", "name": "Tampa" },
            { "@type": "City", "name": "Bradenton" },
            { "@type": "City", "name": "Sarasota" },
            { "@type": "City", "name": "Lakewood Ranch" },
            { "@type": "City", "name": "Parrish" },
            { "@type": "City", "name": "Palmetto" }
          ],
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://www.liquid-shine.com/"
          }
        },
        {
          "@type": "Service",
          "@id": "https://www.liquid-shine.com/#service-ppf-removal",
          "name": "Paint Protection Film (PPF) Removal in Tampa & Sarasota",
          "serviceType": "PPF Removal",
          "category": "Paint Protection Film Services",
          "description": "Safe, damage-free removal of old, yellowed, or failing paint protection film (PPF / clear bra). Liquid Shine uses professional heat and adhesive-specific solvents to lift film without lifting or marring your clear coat. Includes full adhesive residue cleanup, paint decontamination, and an optional paint correction or System X ceramic coating reapplication to restore your vehicle's finish. Serving Tampa, Bradenton, Palmetto, Parrish, Lakewood Ranch, Sarasota, and surrounding Gulf Coast communities.",
          "provider": { "@id": "https://www.liquid-shine.com/#business" },
          "areaServed": [
            { "@type": "City", "name": "Tampa" },
            { "@type": "City", "name": "Bradenton" },
            { "@type": "City", "name": "Sarasota" },
            { "@type": "City", "name": "Lakewood Ranch" }
          ],
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://www.liquid-shine.com/"
          }
        },
        {
          "@type": "Service",
          "@id": "https://www.liquid-shine.com/#service-boat-detailing",
          "name": "Boat & Yacht Detailing — Tampa Bay, Bradenton & Sarasota",
          "serviceType": "Marine Detailing",
          "category": "Boat Detailing",
          "description": "Mobile marine detailing for boats, yachts, and personal watercraft throughout Tampa Bay, Bradenton, Palmetto, Parrish, Anna Maria Island, Longboat Key, Lakewood Ranch, Sarasota, and Siesta Key — including marinas, private docks, and dry storage facilities. Services include hull washing, oxidation removal, gelcoat compounding and polishing, System X marine ceramic coatings, non-skid cleaning, vinyl and upholstery care, metal polishing, and interior cabin detailing. We service center consoles, sportfish, cruisers, sailboats, and yachts up to 80+ feet.",
          "provider": { "@id": "https://www.liquid-shine.com/#business" },
          "areaServed": [
            { "@type": "City", "name": "Tampa" },
            { "@type": "City", "name": "Bradenton" },
            { "@type": "City", "name": "Palmetto" },
            { "@type": "City", "name": "Anna Maria" },
            { "@type": "City", "name": "Holmes Beach" },
            { "@type": "City", "name": "Longboat Key" },
            { "@type": "City", "name": "Sarasota" },
            { "@type": "City", "name": "Siesta Key" }
          ],
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://www.liquid-shine.com/"
          }
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.liquid-shine.com/#website",
      "url": "https://www.liquid-shine.com/",
      "name": "Liquid Shine Mobile Detailing",
      "publisher": { "@id": "https://www.liquid-shine.com/#business" },
      "inLanguage": "en-US"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.liquid-shine.com/#webpage",
      "url": "https://www.liquid-shine.com/",
      "name": "Liquid Shine | Mobile Car Detailing, System X Ceramic Coating, PPF Removal & Boat Detailing — Tampa, Bradenton, Sarasota FL",
      "description": "Tampa Bay and Sarasota's trusted mobile detailing company. Authorized System X Ceramic Coating installer offering PPF removal, boat detailing, and paint correction — we come to you in Tampa, Bradenton, Palmetto, Parrish, Lakewood Ranch, and Sarasota.",
      "isPartOf": { "@id": "https://www.liquid-shine.com/#website" },
      "about": { "@id": "https://www.liquid-shine.com/#business" },
      "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.liquid-shine.com/images/hero-car-front.jpg" },
      "inLanguage": "en-US"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.liquid-shine.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What areas does Liquid Shine serve for mobile detailing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Liquid Shine is based in Parrish, FL and provides mobile detailing services throughout Tampa, Bradenton, Palmetto, Parrish, Lakewood Ranch, Sarasota, and surrounding Gulf Coast communities including Ellenton, Ruskin, Apollo Beach, Riverview, Anna Maria Island, Longboat Key, and Siesta Key. We bring all our own water, power, and professional equipment directly to your home, office, or marina."
          }
        },
        {
          "@type": "Question",
          "name": "Is Liquid Shine a certified ceramic coating installer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Liquid Shine is an Authorized System X Ceramic Coating Installer, which means we are trained and certified by System X and can register your coating for its manufacturer-backed warranty. System X is a professional-grade ceramic coating line designed specifically for long-term paint protection in harsh UV, salt, and humid climates like Florida's Gulf Coast."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a System X ceramic coating last in Florida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A professionally installed System X ceramic coating from Liquid Shine typically lasts between 2 and 10+ years depending on the package selected (Crystal, Diamond, Max, or Proton), with manufacturer-backed warranties available. Florida's intense sun, salt air, and humidity make professional coatings especially valuable for preserving paint and gelcoat."
          }
        },
        {
          "@type": "Question",
          "name": "Can you remove old or yellowed PPF (paint protection film) without damaging my paint?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Liquid Shine specializes in safe PPF removal using controlled heat, proper technique, and adhesive-specific solvents that lift the film and residue without damaging your factory clear coat. Old, brittle, or yellowed film requires extra care, and our technicians are experienced with all major PPF brands including 3M, XPEL, SunTek, and STEK."
          }
        },
        {
          "@type": "Question",
          "name": "Do you detail boats and yachts in Tampa Bay and Sarasota?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — marine detailing is one of our specialties. Liquid Shine services vessels at marinas, private docks, and dry storage facilities throughout Tampa Bay, Bradenton, Palmetto, Anna Maria Island, Longboat Key, Sarasota, and Siesta Key. We work on center consoles, sportfish boats, cruisers, sailboats, and yachts up to 80+ feet, offering hull washing, oxidation removal, gelcoat compounding, System X marine ceramic coatings, non-skid deck cleaning, and interior cabin detailing."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to provide water or power for mobile detailing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Liquid Shine is fully self-contained. Our mobile detailing rigs carry their own fresh water, power generators, and all professional equipment. We can service your vehicle in driveways, parking garages, office lots, and marina slips with no hookups required."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between ceramic coating, wax, and PPF?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wax is a temporary sealant lasting a few weeks to months. Ceramic coating (such as System X) is a semi-permanent liquid polymer that chemically bonds to your paint for multiple years, providing UV, chemical, and hydrophobic protection plus a deep gloss. Paint Protection Film (PPF) is a thick, self-healing urethane film that physically blocks rock chips and scratches. Many Florida clients combine PPF on high-impact panels with a ceramic coating over the entire vehicle for maximum protection."
          }
        },
        {
          "@type": "Question",
          "name": "How often should I have my car detailed in Florida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In the Tampa Bay and Sarasota climate, we recommend a full detail every 3–4 months to combat UV damage, salt air, pollen, and love bugs. Vehicles with a ceramic coating need a professional maintenance wash every 2–3 months and a decontamination service annually to keep the coating performing at its best."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer paint correction before ceramic coating?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — every ceramic coating package from Liquid Shine includes a paint correction stage. We assess your paint's condition and perform a one-step, two-step, or multi-stage correction to remove swirl marks, light scratches, water spots, and oxidation before the System X coating is applied, ensuring flawless gloss is locked in underneath."
          }
        },
        {
          "@type": "Question",
          "name": "Who owns Liquid Shine Mobile Detailing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Liquid Shine Mobile Detailing is owned and operated by Nate Mansour, who founded the company in 2016. Nate is a System X Authorized Ceramic Coating Installer and personally oversees quality on every job throughout Tampa, Bradenton, Sarasota, and the surrounding Gulf Coast."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.liquid-shine.com/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.liquid-shine.com/" }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-[#333333]`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingCallButton />
        <ScrollAnimations />
      </body>
    </html>
  );
}
