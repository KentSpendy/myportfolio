import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/mock';

const ProjectsSection = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Stagger animation delays
  const getAnimationDelay = (index) => `${index * 150}ms`;

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-indigo-50/30 relative overflow-hidden" 
      id="projects"
    >
      {/* Enhanced background elements with parallax */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translateY(${scrollY * 0.3}px) translateX(${scrollY * 0.1}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div 
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translateY(${scrollY * -0.2}px) translateX(${scrollY * -0.1}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/15 to-teal-400/15 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(-50%, -50%) translateY(${scrollY * 0.15}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30 animate-bounce"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
                transform: `translateY(${scrollY * (0.1 + i * 0.05)}px)`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Header with stagger animations */}
        <div className="text-center mb-16">
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gray-900 block mb-2">Featured</span>
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Projects
              </span>
            </h2>
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto mb-8 animate-pulse" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A curated collection of projects showcasing my expertise in full-stack development, 
              innovative problem-solving, and modern web technologies.
            </p>
          </div>
        </div>

        {/* Enhanced Filter buttons with better animations */}
        <div 
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-400 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`group relative px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/80 backdrop-blur-sm text-gray-600 border border-gray-200 hover:border-purple-300 hover:text-purple-600 hover:bg-white'
              }`}
              style={{ animationDelay: getAnimationDelay(index) }}
            >
              <span className="relative z-10">{category}</span>
              {activeFilter === category && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-10 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Projects grid with better animations */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 ${
                project.featured ? 'lg:col-span-2' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ 
                transitionDelay: `${600 + index * 150}ms`,
                animationDelay: getAnimationDelay(index)
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Enhanced project image with better effects */}
              <div className={`relative overflow-hidden ${project.featured ? 'h-80' : 'h-64'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Enhanced overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  
                  <a
                    href={project.githubUrl}
                    className="px-8 py-4 bg-gray-900/95 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 transform translate-y-8 group-hover:translate-y-0 shadow-lg"
                  >
                    <span className="flex items-center gap-2">
                      <span>Source Code</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </span>
                  </a>
                </div>

                {/* Enhanced featured badge */}
                {project.featured && (
                  <div className="absolute top-6 right-6 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg animate-pulse">
                    ⭐ Featured
                  </div>
                )}
              </div>

              {/* Enhanced project content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-semibold rounded-full border border-indigo-200">
                    {project.category}
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Enhanced technologies */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-purple-100 hover:text-purple-700 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${techIndex * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enhanced project links */}
                <div className="flex gap-6">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-indigo-600 hover:text-purple-600 font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-600 hover:text-purple-600 font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <span>Source Code</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Enhanced hover effect with animated gradient border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
            </div>
          ))}
        </div>

        {/* Enhanced CTA button */}
        <div 
          className={`text-center mt-20 transition-all duration-1000 delay-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button className="group relative px-12 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              <span>Explore All Projects</span>
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .project-card {
          transition: all 0.7s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        
        .project-card:hover {
          transform: translateY(-8px) scale(1.02);
        }
        
        .project-image {
          transition: transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;