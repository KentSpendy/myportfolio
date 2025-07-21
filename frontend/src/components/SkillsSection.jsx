import React, { useEffect, useState } from 'react';
import { portfolioData } from '../data/mock';

const SkillsSection = () => {
  const { skills, services } = portfolioData;
  const [animatedSkills, setAnimatedSkills] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.classList.add('animate-in');
                setAnimatedSkills(prev => new Set([...prev, bar.dataset.skill]));
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
      observer.observe(skillsContainer);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="skills">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl" data-parallax="0.2"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" data-parallax="0.3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-animate="fade-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Skills &</span>
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating exceptional digital experiences through cutting-edge technologies 
            and innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Skills */}
          <div className="space-y-8" data-animate="slide-left" id="skills-container">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h3>
            
            {skills.map((skillGroup, groupIndex) => (
              <div
                key={skillGroup.category}
                className="space-y-6"
                data-animate="fade-up"
                data-animate-delay={groupIndex * 200}
              >
                <h4 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
                  <span className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
                  {skillGroup.category}
                </h4>
                
                <div className="space-y-4">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <div key={tech.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{tech.icon}</span>
                          <span className="font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
                            {tech.name}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-gray-600">
                          {tech.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className="skill-bar h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                          data-skill={tech.name}
                          style={{ '--skill-level': `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Certifications */}
            <div className="mt-12 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl" data-animate="scale-in" data-animate-delay="600">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Certifications & Awards</h4>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>AWS Certified Solutions Architect Puhon hehe</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  <span>Google Cloud Professional Developer Puhon hehe</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>React Developer Expert Certificate Puhon hehe</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-8" data-animate="slide-right">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">What I Offer</h3>
            
            <div className="grid gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group relative p-8 bg-white rounded-2xl border border-gray-100 hover:border-purple-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  data-animate="scale-in"
                  data-animate-delay={index * 100}
                  data-cursor-hover
                >
                  {/* Service icon */}
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {service.title}
                  </h4>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover gradient border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center pt-8" data-animate="fade-up" data-animate-delay="800">
              <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300" data-cursor-hover>
                <span className="flex items-center gap-2">
                  <span>Let's Work Together</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating skill icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/8 text-2xl opacity-20" data-float>⚛️</div>
        <div className="absolute top-1/3 right-1/8 text-2xl opacity-20" data-float>🐍</div>
        <div className="absolute bottom-1/4 left-1/4 text-2xl opacity-20" data-float>☁️</div>
        <div className="absolute top-1/2 right-1/4 text-2xl opacity-20" data-float>🚀</div>
        <div className="absolute bottom-1/3 right-1/8 text-2xl opacity-20" data-float>💚</div>
      </div>
    </section>
  );
};

export default SkillsSection;