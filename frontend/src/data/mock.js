// Mock data for the portfolio
export const portfolioData = {
  personal: {
    name: "Alex Chen",
    title: "Full Stack Developer",
    tagline: "Crafting digital experiences that transcend the ordinary",
    bio: "I'm a passionate full-stack developer with 5+ years of experience building scalable web applications. I specialize in React, Node.js, and cloud technologies, with a keen eye for user experience and performance optimization.",
    location: "San Francisco, CA",
    email: "alex.chen@example.com",
    phone: "+1 (555) 123-4567",
    social: {
      github: "https://github.com/alexchen",
      linkedin: "https://linkedin.com/in/alexchen",
      twitter: "https://twitter.com/alexchen",
      portfolio: "https://alexchen.dev"
    }
  },
  
  skills: [
    {
      category: "Frontend",
      technologies: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "📘" },
        { name: "Next.js", level: 88, icon: "▲" },
        { name: "Vue.js", level: 85, icon: "💚" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", level: 93, icon: "🟢" },
        { name: "Python", level: 87, icon: "🐍" },
        { name: "FastAPI", level: 89, icon: "⚡" },
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MongoDB", level: 88, icon: "🍃" }
      ]
    },
    {
      category: "Cloud & Tools",
      technologies: [
        { name: "AWS", level: 86, icon: "☁️" },
        { name: "Docker", level: 90, icon: "🐳" },
        { name: "Kubernetes", level: 82, icon: "⚙️" },
        { name: "CI/CD", level: 88, icon: "🔄" },
        { name: "Git", level: 95, icon: "📋" }
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Stellar Analytics Dashboard",
      description: "A real-time analytics dashboard for e-commerce businesses with advanced data visualization and predictive insights.",
      image: "https://via.placeholder.com/600x400/6366f1/ffffff?text=Stellar+Analytics",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "AWS"],
      liveUrl: "https://stellar-analytics.demo",
      githubUrl: "https://github.com/alexchen/stellar-analytics",
      featured: true,
      category: "Web Application"
    },
    {
      id: 2,
      title: "Cosmic Chat",
      description: "A modern real-time chat application with end-to-end encryption and AI-powered message suggestions.",
      image: "https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Cosmic+Chat",
      technologies: ["Next.js", "Socket.io", "Redis", "MongoDB", "OpenAI"],
      liveUrl: "https://cosmic-chat.demo",
      githubUrl: "https://github.com/alexchen/cosmic-chat",
      featured: true,
      category: "Real-time Application"
    },
    {
      id: 3,
      title: "Galaxy E-commerce",
      description: "A headless e-commerce platform with microservices architecture and advanced payment processing.",
      image: "https://via.placeholder.com/600x400/ec4899/ffffff?text=Galaxy+E-commerce",
      technologies: ["Vue.js", "FastAPI", "Docker", "Stripe", "Kubernetes"],
      liveUrl: "https://galaxy-ecommerce.demo",
      githubUrl: "https://github.com/alexchen/galaxy-ecommerce",
      featured: false,
      category: "E-commerce"
    },
    {
      id: 4,
      title: "Neural Network Visualizer",
      description: "An interactive tool for visualizing and understanding deep learning neural network architectures.",
      image: "https://via.placeholder.com/600x400/06b6d4/ffffff?text=Neural+Visualizer",
      technologies: ["React", "TensorFlow.js", "Three.js", "Python", "FastAPI"],
      liveUrl: "https://neural-viz.demo",
      githubUrl: "https://github.com/alexchen/neural-visualizer",
      featured: false,
      category: "Machine Learning"
    },
    {
      id: 5,
      title: "Quantum Task Manager",
      description: "A productivity app with advanced scheduling algorithms and team collaboration features.",
      image: "https://via.placeholder.com/600x400/f59e0b/ffffff?text=Quantum+Tasks",
      technologies: ["React Native", "Node.js", "GraphQL", "PostgreSQL"],
      liveUrl: "https://quantum-tasks.demo",
      githubUrl: "https://github.com/alexchen/quantum-tasks",
      featured: false,
      category: "Mobile Application"
    },
    {
      id: 6,
      title: "Infinity Code Editor",
      description: "A cloud-based code editor with real-time collaboration and AI-powered code completion.",
      image: "https://via.placeholder.com/600x400/10b981/ffffff?text=Infinity+Editor",
      technologies: ["React", "Monaco Editor", "WebRTC", "Node.js", "Redis"],
      liveUrl: "https://infinity-editor.demo",
      githubUrl: "https://github.com/alexchen/infinity-editor",
      featured: false,
      category: "Developer Tools"
    }
  ],

  services: [
    {
      title: "Full-Stack Development",
      description: "End-to-end web application development using modern technologies and best practices.",
      icon: "🚀",
      features: ["React/Next.js Frontend", "Node.js/Python Backend", "Database Design", "API Development"]
    },
    {
      title: "Cloud Architecture",
      description: "Scalable cloud solutions with containerization and microservices architecture.",
      icon: "☁️",
      features: ["AWS/GCP Setup", "Docker & Kubernetes", "CI/CD Pipelines", "Performance Optimization"]
    },
    {
      title: "UI/UX Development",
      description: "Beautiful, responsive interfaces with focus on user experience and accessibility.",
      icon: "🎨",
      features: ["Responsive Design", "Accessibility", "Performance", "Modern CSS"]
    },
    {
      title: "Consulting & Code Review",
      description: "Technical consultation and code review services to improve your development process.",
      icon: "💡",
      features: ["Architecture Review", "Code Quality", "Best Practices", "Performance Audit"]
    }
  ],

  blog: [
    {
      id: 1,
      title: "Building Scalable React Applications in 2025",
      excerpt: "Exploring the latest patterns and tools for creating maintainable React applications that scale with your team and user base.",
      content: "In this comprehensive guide, we'll dive deep into the architectural patterns that make React applications truly scalable...",
      date: "2025-01-15",
      readTime: "8 min read",
      tags: ["React", "Architecture", "Scalability"],
      featured: true,
      image: "https://via.placeholder.com/400x250/6366f1/ffffff?text=React+Scalability"
    },
    {
      id: 2,
      title: "The Future of Web Development: What's Coming Next",
      excerpt: "A look at emerging technologies and trends that will shape web development in the coming years.",
      content: "Web development is evolving at an unprecedented pace. From WebAssembly to edge computing...",
      date: "2025-01-10",
      readTime: "6 min read",
      tags: ["Web Development", "Future", "Technology"],
      featured: true,
      image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Future+Web"
    },
    {
      id: 3,
      title: "Optimizing Database Performance for Modern Applications",
      excerpt: "Techniques and strategies for improving database performance in high-traffic applications.",
      content: "Database performance is crucial for application success. Here are proven strategies...",
      date: "2025-01-05",
      readTime: "10 min read",
      tags: ["Database", "Performance", "Optimization"],
      featured: false,
      image: "https://via.placeholder.com/400x250/ec4899/ffffff?text=Database+Performance"
    },
    {
      id: 4,
      title: "Microservices vs Monoliths: Making the Right Choice",
      excerpt: "Understanding when to choose microservices architecture and when a monolith might be better.",
      content: "The microservices vs monolith debate continues. Let's explore the trade-offs...",
      date: "2024-12-28",
      readTime: "7 min read",
      tags: ["Architecture", "Microservices", "Design"],
      featured: false,
      image: "https://via.placeholder.com/400x250/06b6d4/ffffff?text=Architecture+Choice"
    }
  ],

  experience: [
    {
      company: "TechNova Solutions",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      description: "Leading development of enterprise web applications serving 100k+ users. Architected microservices infrastructure reducing response times by 40%.",
      technologies: ["React", "Node.js", "AWS", "Kubernetes"]
    },
    {
      company: "InnovateX",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      description: "Developed and maintained multiple client projects. Implemented CI/CD pipelines reducing deployment time by 60%.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"]
    },
    {
      company: "StartupFlow",
      position: "Frontend Developer",
      duration: "2019 - 2020",
      description: "Built responsive web applications from design mockups. Collaborated with UX team to improve user engagement by 35%.",
      technologies: ["React", "TypeScript", "SCSS", "Jest"]
    }
  ]
};