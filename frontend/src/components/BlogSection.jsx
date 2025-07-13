import React, { useState } from 'react';
import { portfolioData } from '../data/mock';

const BlogSection = () => {
  const { blog } = portfolioData;
  const [selectedTag, setSelectedTag] = useState('All');

  // Get all unique tags
  const allTags = ['All', ...new Set(blog.flatMap(post => post.tags))];
  
  // Filter posts by selected tag
  const filteredPosts = selectedTag === 'All' 
    ? blog 
    : blog.filter(post => post.tags.includes(selectedTag));

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-indigo-50/30 relative overflow-hidden" id="blog">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-200/20 to-transparent rounded-full blur-3xl" data-parallax="0.2"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-indigo-200/20 to-transparent rounded-full blur-3xl" data-parallax="0.3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-animate="fade-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Latest</span>
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing thoughts on web development, technology trends, and lessons learned 
            from building modern applications.
          </p>
        </div>

        {/* Tag filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-animate="fade-up" data-animate-delay="200">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                selectedTag === tag
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-300 hover:border-purple-300 hover:text-purple-600'
              }`}
              data-cursor-hover
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Featured posts */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredPosts.filter(post => post.featured).map((post, index) => (
              <article
                key={post.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                data-animate="scale-in"
                data-animate-delay={index * 100}
                data-cursor-hover
              >
                {/* Featured badge */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-medium rounded-full">
                  Featured
                </div>

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Meta info */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <span>{formatDate(post.date)}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read more link */}
                  <a
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-purple-600 font-medium transition-colors duration-300"
                    data-cursor-hover
                  >
                    <span>Read Article</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Hover gradient border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
              </article>
            ))}
          </div>
        </div>

        {/* Other posts */}
        {filteredPosts.filter(post => !post.featured).length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8" data-animate="fade-up">
              More Articles
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPosts.filter(post => !post.featured).map((post, index) => (
                <article
                  key={post.id}
                  className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                  data-animate="fade-up"
                  data-animate-delay={index * 100}
                  data-cursor-hover
                >
                  {/* Meta info */}
                  <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                    <span>{formatDate(post.date)}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h4>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2 text-sm">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Read more link */}
                  <a
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-purple-600 font-medium text-sm transition-colors duration-300"
                    data-cursor-hover
                  >
                    <span>Read More</span>
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>

                  {/* Hover gradient border */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16" data-animate="fade-up" data-animate-delay="600">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Stay Updated</h3>
            <p className="text-gray-600">Get notified when I publish new articles and insights.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              data-cursor-hover
            />
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300 whitespace-nowrap" data-cursor-hover>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Floating blog icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/8 text-xl opacity-10" data-float>📝</div>
        <div className="absolute top-1/3 right-1/8 text-xl opacity-10" data-float>💡</div>
        <div className="absolute bottom-1/4 left-1/4 text-xl opacity-10" data-float>🚀</div>
        <div className="absolute top-1/2 right-1/4 text-xl opacity-10" data-float>⚡</div>
      </div>
    </section>
  );
};

export default BlogSection;