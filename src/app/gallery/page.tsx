'use client';

export default function Gallery() {
  const galleryItems = [
    { id: 1, title: 'Auto Detail 1', category: 'auto' },
    { id: 2, title: 'Auto Detail 2', category: 'auto' },
    { id: 3, title: 'Auto Detail 3', category: 'auto' },
    { id: 4, title: 'Boat Detail 1', category: 'boat' },
    { id: 5, title: 'Boat Detail 2', category: 'boat' },
    { id: 6, title: 'Boat Detail 3', category: 'boat' },
    { id: 7, title: 'RV Detail 1', category: 'rv' },
    { id: 8, title: 'RV Detail 2', category: 'rv' },
    { id: 9, title: 'RV Detail 3', category: 'rv' },
    { id: 10, title: 'Maintenance 1', category: 'maintenance' },
    { id: 11, title: 'Maintenance 2', category: 'maintenance' },
    { id: 12, title: 'Maintenance 3', category: 'maintenance' },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'auto':
        return 'from-blue-400 to-blue-600';
      case 'boat':
        return 'from-cyan-400 to-blue-600';
      case 'rv':
        return 'from-indigo-400 to-blue-600';
      case 'maintenance':
        return 'from-purple-400 to-blue-600';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml?utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><circle cx=%22600%22 cy=%22300%22 r=%22400%22 fill=%22%231a56db%22 opacity=%220.05%22/></svg>')] bg-no-repeat bg-center"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Our Work Gallery
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            Showcasing our finest mobile detailing transformations
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Desktop: 3 columns */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-full h-64 bg-gradient-to-br ${getCategoryColor(item.category)} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="text-center z-10">
                    <div className="text-white text-4xl font-bold opacity-30 group-hover:opacity-40 transition-opacity">
                      {item.id}
                    </div>
                    <p className="text-white text-lg font-semibold mt-2 opacity-70 group-hover:opacity-100 transition-opacity">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet: 2 columns */}
          <div className="hidden sm:grid md:hidden grid-cols-2 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-full h-48 bg-gradient-to-br ${getCategoryColor(item.category)} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="text-center z-10">
                    <div className="text-white text-4xl font-bold opacity-30 group-hover:opacity-40 transition-opacity">
                      {item.id}
                    </div>
                    <p className="text-white text-base font-semibold mt-2 opacity-70 group-hover:opacity-100 transition-opacity">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: 1 column */}
          <div className="sm:hidden grid grid-cols-1 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-full h-40 bg-gradient-to-br ${getCategoryColor(item.category)} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="text-center z-10">
                    <div className="text-white text-3xl font-bold opacity-30 group-hover:opacity-40 transition-opacity">
                      {item.id}
                    </div>
                    <p className="text-white text-sm font-semibold mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Impressed by Our Work?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Let us transform your vehicle. Contact us today!
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Schedule Your Detail
          </a>
        </div>
      </section>
    </div>
  );
}
