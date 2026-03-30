'use client';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Ultimate Guide to Auto Detailing: Protect Your Investment',
      excerpt: 'Learn the essential steps to properly detail your vehicle and maintain its pristine condition. We cover everything from paint protection to interior conditioning.',
      date: 'March 15, 2024',
      category: 'Auto Care',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Ceramic Coating Benefits: Why Your Boat Needs Protection',
      excerpt: 'Discover how modern ceramic coatings can protect your boat from saltwater damage, UV rays, and environmental contaminants. Learn about the benefits and long-term savings.',
      date: 'March 8, 2024',
      category: 'Marine Care',
      readTime: '6 min read',
    },
    {
      id: 3,
      title: 'RV Maintenance Tips: Keep Your Home on Wheels Looking New',
      excerpt: 'Expert tips and tricks for maintaining your RV exterior and interior. From regular cleaning schedules to seasonal maintenance, we cover everything you need to know.',
      date: 'February 28, 2024',
      category: 'RV Care',
      readTime: '7 min read',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml?utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><circle cx=%22600%22 cy=%22300%22 r=%22400%22 fill=%22%231a56db%22 opacity=%220.05%22/></svg>')] bg-no-repeat bg-center"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            The Latest News
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            Expert insights on vehicle care and detailing tips
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 px-4 sm:py-24 bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-slate-700 rounded-lg overflow-hidden border border-blue-500 border-opacity-30 hover:border-opacity-100 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="p-8">
                  {/* Post Header */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-600 text-blue-100 text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 hover:text-blue-400 transition-colors cursor-pointer">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-slate-600">
                    <time className="text-gray-400 text-sm mb-4 sm:mb-0">
                      {post.date}
                    </time>
                    <a
                      href="#"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Section */}
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">
              Want to see more articles?
            </p>
            <a
              href="#"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
            >
              Load More Articles
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Subscribe to our newsletter for the latest detailing tips and special offers
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
