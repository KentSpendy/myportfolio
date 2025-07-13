import React from 'react';
import { portfolioData } from '../data/mock';

const AboutSection = () => {
  const { personal, experience } = portfolioData;

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="about">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-100 to-transparent rounded-full opacity-50" data-parallax="0.3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-indigo-100 to-transparent rounded-full opacity-50" data-parallax="0.2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Bio */}
          <div className="space-y-8" data-animate="slide-left">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gray-900">About</span>
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Me
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p data-animate="fade-up" data-animate-delay="200">
                {personal.bio}
              </p>
              
              <p data-animate="fade-up" data-animate-delay="400">
                When I'm not coding, you can find me exploring the latest in AI and machine learning, 
                contributing to open source projects, or mentoring aspiring developers. I believe in 
                writing clean, maintainable code that solves real-world problems.
              </p>

              <div className="flex flex-wrap gap-4 pt-4" data-animate="fade-up" data-animate-delay="600">
                <div className="flex items-center gap-2 text-sm bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Available for new projects</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-full">
                  <span>📍</span>
                  <span>{personal.location}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4" data-animate="fade-up" data-animate-delay="800">
              <a
                href={personal.social.github}
                className="p-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl hover:from-indigo-100 hover:to-purple-100 transition-all duration-300 hover:scale-110 group"
                data-cursor-hover
              >
                <svg className="w-5 h-5 text-gray-700 group-hover:text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href={personal.social.linkedin}
                className="p-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl hover:from-blue-200 hover:to-blue-300 transition-all duration-300 hover:scale-110 group"
                data-cursor-hover
              >
                <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={personal.social.twitter}
                className="p-3 bg-gradient-to-r from-sky-100 to-sky-200 rounded-xl hover:from-sky-200 hover:to-sky-300 transition-all duration-300 hover:scale-110 group"
                data-cursor-hover
              >
                <svg className="w-5 h-5 text-sky-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right column - Experience & Stats */}
          <div className="space-y-8" data-animate="slide-right">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl" data-animate="scale-in" data-animate-delay="200">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  5+
                </div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl" data-animate="scale-in" data-animate-delay="400">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl" data-animate="scale-in" data-animate-delay="600">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  100k+
                </div>
                <div className="text-gray-600 font-medium">Users Served</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl" data-animate="scale-in" data-animate-delay="800">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">Support Available</div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6" data-animate="fade-up">Experience</h3>
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-purple-200 last:border-l-0 last:pb-0"
                  data-animate="fade-up"
                  data-animate-delay={200 * (index + 1)}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100" data-cursor-hover>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="text-lg font-bold text-gray-900">{exp.position}</h4>
                      <span className="text-sm text-gray-500">@ {exp.company}</span>
                    </div>
                    <div className="text-sm text-purple-600 font-medium mb-3">{exp.duration}</div>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;