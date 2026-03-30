'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Category = 'All' | 'Auto' | 'Marine' | 'RV' | 'Ceramic Coating';

interface GalleryItem {
  id: number;
  title: string;
  category: Category;
  image: string;
  description?: string;
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<GalleryItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const galleryItems: GalleryItem[] = [
    // Auto Detailing
    { id: 1, title: '2018 Corvette Convertible', category: 'Auto', image: '/images/Auto-Detailing-2018-Corvette-Convertible-After.jpg', description: 'Full detail and ceramic coating' },
    { id: 2, title: 'BMW 3 Series', category: 'Auto', image: '/images/Auto-Detailing-BMW-3-Series.jpg', description: 'Premium paint correction' },
    { id: 3, title: '2018 Jeep Wrangler Rubicon', category: 'Auto', image: '/images/Auto-Detailing-2018-Jeep-Wrangler-Rubicon.jpg', description: 'Complete interior & exterior detail' },
    { id: 4, title: 'Dodge Charger', category: 'Auto', image: '/images/Auto-Detailing-Dodge-Charger.jpg', description: 'Show-ready finish' },
    { id: 5, title: 'Ford F350', category: 'Auto', image: '/images/Auto-Detailing-Ford-F350.jpg', description: 'Heavy-duty detail service' },
    { id: 6, title: '2019 Ram 1500', category: 'Auto', image: '/images/Auto-Detailing-2019-Ram-1500.jpg', description: 'Full truck restoration' },

    // Marine
    { id: 7, title: 'Boat Ocean Detail', category: 'Marine', image: '/images/hero-boat-ocean.jpg', description: 'Marine-grade protection' },
    { id: 8, title: 'Yacht Cruising', category: 'Marine', image: '/images/hero-yacht-cruising.jpg', description: 'Premium yacht detailing' },
    { id: 9, title: 'Mega Yacht', category: 'Marine', image: '/images/gallery-mega-yacht.jpg', description: 'Full vessel restoration' },
    { id: 10, title: 'Yacht with Palm Trees', category: 'Marine', image: '/images/gallery-yacht-palm-trees.jpg', description: 'UV protection coating' },

    // RV
    { id: 11, title: 'RV Front View', category: 'RV', image: '/images/gallery-rv-front.jpg', description: 'Complete RV detail' },
    { id: 12, title: 'RV on the Road', category: 'RV', image: '/images/gallery-rv-road.jpg', description: 'Road-trip ready finish' },

    // Ceramic Coating
    { id: 13, title: 'Tesla Ceramic Coating', category: 'Ceramic Coating', image: '/images/Ceramic-Coating-Tesla-1.jpg', description: 'System X ceramic protection' },
    { id: 14, title: 'Tesla Detail Work', category: 'Ceramic Coating', image: '/images/Ceramic-Coating-Tesla-2.jpg', description: 'Multi-year protection' },
    { id: 15, title: 'Tesla Premium Coating', category: 'Ceramic Coating', image: '/images/Ceramic-Coating-Tesla-3.jpg', description: 'Ultimate shine finish' },
  ];

  const categories: Category[] = ['All', 'Auto', 'Marine', 'RV', 'Ceramic Coating'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (item: GalleryItem) => {
    setCurrentImage(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (!currentImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === currentImage.id);
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    }
    setCurrentImage(filteredItems[newIndex]);
  }, [currentImage, filteredItems]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'ArrowRight') navigateImage('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, navigateImage]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:pt-36 sm:pb-28 overflow-hidden bg-gradient-to-br from-[#004FBB] via-[#0066cc] to-[#003d91]">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFBA00]/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float delay-300" />
        </div>

        <div className="container-custom relative text-center">
          <span className="badge badge-accent mb-6 animate-fade-in-up">Our Portfolio</span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up delay-100">
            Our <span className="text-[#FFBA00]">Work</span> Gallery
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Showcasing our finest mobile detailing transformations across auto, marine, and RV services
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-white border-b border-gray-100 sticky top-20 z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-400 ${
                  activeFilter === category
                    ? 'bg-[#004FBB] text-white shadow-lg shadow-blue-500/30 scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {category}
                {activeFilter === category && (
                  <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                    {category === 'All' ? galleryItems.length : galleryItems.filter(i => i.category === category).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:py-24">
        <div className="container-custom">
          {isLoading ? (
            // Loading Skeleton
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-[4/3] rounded-2xl skeleton" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(item)}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Hover Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="badge badge-accent mb-2 w-fit">{item.category}</span>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      {item.description && (
                        <p className="text-sm text-gray-200">{item.description}</p>
                      )}
                    </div>

                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="p-4 bg-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.category}</p>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-[#FFBA00] group-hover:scale-150 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredItems.length === 0 && !isLoading && (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-500 text-lg">No items found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#004FBB] via-[#0066cc] to-[#003d91] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFBA00]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom max-w-4xl text-center relative">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Impressed by Our <span className="text-[#FFBA00]">Work?</span>
          </h2>
          <p className="text-blue-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Experience the same level of care and attention to detail for your vehicle.
            Let us transform it into a showroom masterpiece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-accent text-base">
              Schedule Your Detail
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="tel:978-660-1356" className="btn bg-white/10 border-2 border-white/30 text-white hover:bg-white hover:text-[#004FBB]">
              (978) 660-1356
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && currentImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-10"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-10"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImage.image}
              alt={currentImage.title}
              width={1200}
              height={800}
              className="max-h-[80vh] w-auto object-contain rounded-lg"
              priority
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <span className="badge badge-accent mb-2">{currentImage.category}</span>
              <h3 className="text-xl font-bold text-white">{currentImage.title}</h3>
              {currentImage.description && (
                <p className="text-sm text-gray-300 mt-1">{currentImage.description}</p>
              )}
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
            {filteredItems.findIndex(item => item.id === currentImage.id) + 1} / {filteredItems.length}
          </div>
        </div>
      )}
    </div>
  );
}
