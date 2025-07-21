import React, { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ years: 0, projects: 0, users: 0 });
  const sectionRef = useRef(null);

  // Mock data for demonstration
  const portfolioData = {
    personal: {
      name: "Kent Harvey Bongcales",
      bio: "I'm a passionate full-stack developer with over 2 years of experience creating digital solutions that make a difference. My journey began with a curiosity for how things work, which led me to discover the world of programming. Since then, I've been dedicated to crafting user-centric applications that blend beautiful design with powerful functionality.",
      location: "Malaybalay City, Bukidnon",
      social: {
        github: "https://github.com/KentSpendy",
        linkedin: "https://www.linkedin.com/in/kent-harvey-bongcales-8347a72b9/",
        twitter: "https://x.com/The_Crawler21"
      }
    },
    experience: [
      {
        position: "Assistant Technician",
        company: "College of Information Sciences and Computing",
        duration: "204 - 2025",
        description: "Worked as a technician in a computer lab, assisting students with computer hardware and software issues.",
        technologies: ["HTML", "CSS", "Node.js", "React JS", "Python"]
      },
      {
        position: "Frontend Developer",
        company: "Personal Contractor",
        duration: "2020 - 2022",
        description: "Developed responsive user interfaces and improved application performance by 40%. Collaborated with design teams to implement pixel-perfect designs.",
        technologies: ["React", "Redux", "Sass", "Jest", "Webpack", "Figma"]
      },
      {
        position: "CEO",
        company: "TasteView",
        duration: "2025 - Present",
        description: "Led a team of developers and designers to create a cutting-edge e-commerce platform",
        technologies: ["React", "JavaScript", "Tailwindcss", "Firebase"]
      }
    ]
  };

  const { personal, experience } = portfolioData;

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate stats
          setTimeout(() => {
            animateCounter(2, 'years', 1000);
            animateCounter(8, 'projects', 1200);
            animateCounter(1200, 'users', 1400);
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const animateCounter = (target, key, duration) => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setAnimatedStats(prev => ({
        ...prev,
        [key]: Math.floor(start)
      }));
    }, 16);
  };

  const skills = [
    { name: "Frontend", items: ["React", "Vue.js", "TypeScript", "Next.js", "JavaScript", "Tailwind CSS", "CSS", "THML"] },
    { name: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "MySQLx", "PHP"] },
    { name: "Tools", items: ["Docker", "AWS", "Git", "Figma", "VSCode", "Slack"] },
    { name: "Soft Skills", items: ["Dedication", "Problem Solving", "Communication", "Commitment", "Honest", "Trustworthiness", "Passionate"] }
  ];
  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-purple-100/20 pointer-events-none" />
  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden" 
      id="about"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-100 to-transparent rounded-full opacity-60 transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 30}px) scale(${1 + mousePosition.x * 0.1})`
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-indigo-100 to-transparent rounded-full opacity-60 transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -20}px) scale(${1 + mousePosition.y * 0.1})`
          }}
        />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full opacity-30 blur-3xl" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30"
            style={{
              top: `${20 + (i * 5)}%`,
              left: `${10 + (i * 6)}%`,
              transform: `translate(${mousePosition.x * (10 + i * 2)}px, ${mousePosition.y * (5 + i)}px)`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Bio */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gray-900">About</span>
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Me
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-8" />
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                {personal.bio}
              </p>
              
              <p className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                When I'm not coding, you can find me exploring the latest in AI and machine learning, 
                contributing to open source projects, or mentoring aspiring developers. I believe in 
                writing clean, maintainable code that solves real-world problems.
              </p>

              <div className={`flex flex-wrap gap-4 pt-4 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <div className="flex items-center gap-2 text-sm bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-2 rounded-full border border-purple-100 hover:shadow-md transition-all duration-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Available for new projects</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-full border border-pink-100 hover:shadow-md transition-all duration-300">
                  <span>📍</span>
                  <span>{personal.location}</span>
                </div>
              </div>
            </div>

            {/* Enhanced social links */}
            <div className={`flex gap-4 pt-4 transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <a
                href={personal.social.github}
                className="p-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl hover:from-indigo-100 hover:to-purple-100 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              >
                <svg className="w-5 h-5 text-gray-700 group-hover:text-indigo-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href={personal.social.linkedin}
                className="p-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl hover:from-blue-200 hover:to-blue-300 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              >
                <svg className="w-5 h-5 text-blue-700 group-hover:text-blue-800 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={personal.social.twitter}
                className="p-3 bg-gradient-to-r from-sky-100 to-sky-200 rounded-xl hover:from-sky-200 hover:to-sky-300 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              >
                <svg className="w-5 h-5 text-sky-700 group-hover:text-sky-800 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>

            {/* Skills section */}
            <div className={`pt-8 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-purple-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <h4 className="font-semibold text-gray-900 mb-2">{skillGroup.name}</h4>
                    <div className="flex flex-wrap gap-1">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Experience & Stats */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-indigo-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {animatedStats.years}+
                </div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {animatedStats.projects}+
                </div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl border border-pink-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  {animatedStats.users}+
                </div>
                <div className="text-gray-600 font-medium">Users Served</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">Support Available</div>
              </div>
            </div>

            {/* Enhanced Experience Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience</h3>
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className={`relative pl-8 pb-8 border-l-2 border-purple-200 last:border-l-0 last:pb-0 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${300 + index * 200}ms` }}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg" />
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 group">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                        {exp.position}
                      </h4>
                      <span className="text-sm text-gray-500">@ {exp.company}</span>
                    </div>
                    <div className="text-sm text-purple-600 font-medium mb-3">{exp.duration}</div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-xs font-medium rounded-full border border-indigo-200 hover:shadow-md transition-all duration-300"
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