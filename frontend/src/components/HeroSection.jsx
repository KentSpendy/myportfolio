import React from 'react';
import { portfolioData } from '../data/mock';

const HeroSection = () => {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" data-parallax="0.3"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" data-parallax="0.4"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" data-parallax="0.2"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-indigo-400 rounded-full opacity-60" data-float></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-400 rounded-full opacity-40" data-float></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-pink-400 rounded-full opacity-50" data-float></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-indigo-500 rounded-full opacity-70" data-float></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto" data-animate="fade-up">
        <div className="mb-8">
          <div className="inline-block p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6" data-animate="scale-in" data-cursor-hover>
            <div className="bg-white rounded-full px-6 py-2">
              <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Available for new projects
              </span>
            </div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="block text-gray-900 mb-2" data-animate="slide-up" data-cursor-hover>
            Hi, I'm
          </span>
          <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent" data-animate="slide-up" data-animate-delay="200" data-cursor-hover>
            {personal.name}
          </span>
        </h1>

        <div className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto" data-animate="fade-up" data-animate-delay="400">
          <span className="block mb-2 font-medium text-gray-900">{personal.title}</span>
          <span className="block">{personal.tagline}</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-animate="fade-up" data-animate-delay="600">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl" data-cursor-hover>
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full transition-all duration-300 hover:border-purple-500 hover:text-purple-600 hover:scale-105" data-cursor-hover>
            <span className="flex items-center gap-2">
              <span>Get In Touch</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" data-animate="fade-up" data-animate-delay="800">
          <div className="flex flex-col items-center text-gray-500">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Galaxy particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
            data-float
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;