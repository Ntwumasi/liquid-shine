'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Category = 'All' | 'Auto' | 'Marine' | 'RV' | 'Ceramic Coating';

interface GalleryItem {
  id: number;
  title: string;
  category: Category;
  image: string;
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  const galleryItems: GalleryItem[] = [
    // Auto Detailing
    { id: 1, title: '2018 Corvette Convertible', category: 'Auto', image: '/images/Auto-Detailing-2018-Corvette-Convertible-After.jpg' },
    { id: 2, title: 'BMW 3 Series', category: 'Auto', image: '/images/Auto-Detailing-BMW-3-Series.jpg' },
    { id: 3, title: '2018 Jeep Wrangler Rubicon', category: 'Auto', image: '/images/Auto-Detailing-2018-Jeep-Wrangler-Rubicon.jpg' },
    { id: 4, title: 'Dodge Charger', category: 'Auto', image: '/images/Auto-Detailing-Dodge-Charger.jpg' },
    { id: 5, title: 'Ford F350', category: 'Auto', image: '/images/Auto-Detailing-Ford-F350.jpg' },
    { id: 6, title: '2019 Ram 1500', category: 'Auto', image: '/images/Auto-Detailing-2019-Ram-1500.jpg' },

    // Marine
    { id: 7, title: 'Boat Ocean Detail', category: 'Marine', image: '/images/hero-boat-ocean.jpg' },
    { id: 8, title: 'Yacht Cruising', category: 'Marine', image: '/images/hero-yacht-cruising.jpg' },
    { id: 9, title: 'Mega Yacht', category: 'Marine', image: '/images/gallery-mega-yacht.jpg' },
    { id: 10, title: 'Yacht with Palm Trees', category: 'Marine', image: '/images/gallery-yacht-palm-trees.jpg' },

    // RV
    { id: 11, title: 'RV Front View', category: 'RV', image: '/images/gallery-rv-front.jpg' },
    { id: 12, title: 'RV on the Road', category: 'RV', image: '/images/gallery-rv-road.jpg' },

    // Ceramic Coating
    { id: 13, title: 'Tesla Ceramic Coating', category: 'Ceramic Coating', image: '/images/Ceramic-Coating-Tesla-1.jpg' },
    { id: 14, title: 'Tesla Detail Work', category: 'Ceramic Coating', image: '/images/Ceramic-Coating-Tesla-2.jpg' },
    { id: 15, title: 'Tesla Premium Coating', category: 'Ceramic Coating', image: '/images/Ceramic-Coating-Tesla-3.jpg' },
  ];

  const categories: Category[] = ['All', 'Auto', 'Marine', 'RV', 'Ceramic Coating'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:py-28 overflow-hidden bg-gradient-to-br from-[#004FBB] to-[#0066cc]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml?utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><circle cx=%22600%22 cy=%22300%22 r=%22400%22 fill=%22%23FFBA00%22 opacity=%220.1%22/></svg>')] bg-no-repeat bg-center"></div>
        <div className="container-custom relative text-center">
          <span className="badge badge-accent mb-6">Our Portfolio</span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Our Work Gallery
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
            Showcasing our finest mobile detailing transformations across auto, marine, and RV services
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-[#004FBB] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="badge badge-accent mb-2">{item.category}</span>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>

                {/* Bottom Info Bar */}
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.category}</p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#FFBA00]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No items found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#004FBB] to-[#0066cc]">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Impressed by Our Work?
          </h2>
          <p className="text-blue-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Experience the same level of care and attention to detail for your vehicle.
            Let us transform it into a showroom masterpiece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-accent">
              Schedule Your Detail
            </Link>
            <Link href="/services" className="btn btn-secondary">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
