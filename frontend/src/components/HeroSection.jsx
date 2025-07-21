import React, { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);

  const portfolioData = {
    personal: {
      name: "Kent Harvey Bongcales",
      title: "Full Stack Developer & UI/UX Designer",
      tagline: "Creating digital experiences that blend innovation with user-centric design"
    }
  };

  const { personal } = portfolioData;

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleScroll = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100"
    >
      {/* Enhanced animated background elements with mouse interaction */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px) scale(${1 + mousePosition.x * 0.1})`
          }}
        />
        <div 
          className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * 20}px) scale(${1 + mousePosition.y * 0.1})`
          }}
        />
        <div 
          className="absolute -bottom-8 left-20 w-80 h-80 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * -15}px) scale(${1 + mousePosition.x * 0.05})`
          }}
        />
      </div>

      {/* Enhanced floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-60 transition-transform duration-1000 ease-out ${
              i % 3 === 0 ? 'w-3 h-3' : i % 3 === 1 ? 'w-5 h-5' : 'w-4 h-4'
            }`}
            style={{
              top: `${15 + (i * 7)}%`,
              left: `${10 + (i * 8)}%`,
              transform: `translate(${mousePosition.x * (10 + i * 2)}px, ${mousePosition.y * (5 + i)}px) rotate(${mousePosition.x * 360}deg)`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-purple-100/20 pointer-events-none" />

      {/* Main content */}
      <div className={`relative z-10 px-6 max-w-7xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Text content */}
          <div className="text-left lg:text-left order-2 lg:order-1">
            {/* Status badge */}
            <div className="mb-8">
              <div className="inline-block p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="bg-white rounded-full px-6 py-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Available for new projects
                  </span>
                </div>
              </div>
            </div>

            {/* Enhanced title with typing effect */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className={`block text-gray-900 mb-2 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Hi, I'm
              </span>
              <span className={`block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-700 delay-500 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {personal.name}
              </span>
            </h1>

            {/* Enhanced description */}
            <div className={`text-lg md:text-xl text-gray-600 mb-8 max-w-2xl transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="block mb-2 font-medium text-gray-900">{personal.title}</span>
              <span className="block leading-relaxed">{personal.tagline}</span>
            </div>

            {/* Enhanced action buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-start items-start transition-all duration-700 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="group px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full transition-all duration-300 hover:border-purple-500 hover:text-purple-600 hover:scale-105 hover:shadow-lg">
                <span className="flex items-center gap-2">
                  <span>Get In Touch</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right side - Image section */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center">
            <div className="relative">
              {/* Decorative rings and elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer ring */}
                <div 
                  className="w-96 h-96 border-2 border-purple-300/30 rounded-full animate-pulse"
                  style={{
                    transform: `rotate(${mousePosition.x * 180}deg)`
                  }}
                />
                {/* Middle ring */}
                <div 
                  className="absolute w-80 h-80 border border-indigo-300/40 rounded-full animate-pulse"
                  style={{
                    transform: `rotate(${mousePosition.y * -120}deg)`,
                    animationDelay: '1s'
                  }}
                />
                {/* Inner ring */}
                <div 
                  className="absolute w-64 h-64 border border-pink-300/30 rounded-full animate-pulse"
                  style={{
                    transform: `rotate(${mousePosition.x * 90}deg)`,
                    animationDelay: '2s'
                  }}
                />
              </div>

              {/* Floating accent elements */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-60"
                    style={{
                      top: `${20 + Math.sin(i * Math.PI / 4) * 30}%`,
                      left: `${50 + Math.cos(i * Math.PI / 4) * 35}%`,
                      transform: `translate(-50%, -50%) rotate(${mousePosition.x * 360 + i * 45}deg) translateY(${mousePosition.y * 10}px)`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  />
                ))}
              </div>

              {/* Main image container */}
              <div className={`relative z-10 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="relative w-96 h-[32rem] rounded-3xl overflow-hidden shadow-2xl group">
                  {/* Glassmorphism frame - REMOVED backdrop-blur-md */}
                  <div className="absolute inset-0 bg-white/10 border border-white/30 rounded-3xl z-20" />
                  
                  {/* Enhanced gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-transparent to-indigo-400/20 z-10 group-hover:opacity-40 transition-all duration-500 rounded-3xl" />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 z-15 rounded-3xl" /> */}
                  
                  {/* Profile image */}
                  <img 
                    src="/projects/me.png" 
                    alt={personal.name}
                    className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110 filter brightness-105"
                  />
                  
                  {/* Multiple glow layers */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/25 to-indigo-500/25 scale-110 -z-10 group-hover:scale-125 transition-all duration-500" />
                  {/* <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500/15 to-purple-500/15 scale-105 -z-5 group-hover:scale-115 transition-all duration-500" /> */}
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-400/50 transition-all duration-500"
                      style={{
                        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3), rgba(99, 102, 241, 0.3)) border-box',
                        WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'subtract'
                      }} />
                </div>
              </div>

              {/* Additional floating elements */}
              <div className="absolute top-10 right-10 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-70 animate-bounce" 
                   style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-10 left-10 w-4 h-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-70 animate-bounce" 
                   style={{ animationDelay: '1.5s' }} />
              <div className="absolute top-20 left-16 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div 
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-700 delay-1100 hover:scale-110 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          onClick={handleScroll}
        >
          <div className="flex flex-col items-center text-gray-500 hover:text-purple-600 transition-colors duration-300">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center hover:border-purple-500">
              <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced galaxy particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              transform: `translate(${mousePosition.x * (5 + Math.random() * 10)}px, ${mousePosition.y * (5 + Math.random() * 10)}px)`
            }}
          />
        ))}
      </div>

      {/* New: Glowing orbs that follow mouse */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30 blur-sm transition-all duration-300 ease-out"
          style={{
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-50 blur-sm transition-all duration-500 ease-out"
          style={{
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;