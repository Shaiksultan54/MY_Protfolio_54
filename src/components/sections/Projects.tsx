import React, { useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';

const useScrollAnimation = () => {
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
};

export const Projects = () => {
  const { ref, inView } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: '1',
      title: 'ResQ_Bubble',
      emoji: '🚨',
      description: 'Real-time disaster relief platform with IoT integration and AI-powered resource allocation for emergency response. Finalist at HackForge hosted by ISL Engineering College.',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Socket.IO', 'IoT', 'AI/ML'],
      category: 'web',
      status: 'complete',
      githubUrl: 'https://github.com/Shaiksultan54/ResQ_Bubble',
      liveUrl: null,
      imageUrl: '/img/Screenshot (149).png'
    },
    {
      id: '2',
      title: 'Trait-Tracer',
      emoji: '🎯',
      description: 'AI-powered personality-based recruitment platform with advanced candidate matching algorithms and automated screening using machine learning.',
      techStack: ['React.js', 'Python', 'TensorFlow', 'PostgreSQL', 'AI/ML'],
      category: 'ai',
      status: 'progress',
      githubUrl: 'https://github.com/Shaiksultan54',
      liveUrl: null,
      imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '3',
      title: 'C4GT - SEETA Project',
      emoji: '💼',
      description: 'Open-source contribution to SEETA during C4GT program with NSUT. Contributed to government tech initiatives and invoice management systems.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Open Source'],
      category: 'web',
      status: 'complete',
      githubUrl: 'https://github.com/Shaiksultan54',
      liveUrl: null,
      imageUrl: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '4',
      title: 'Farmer Management System',
      emoji: '🌾',
      description: 'Comprehensive farmer management system with predictive analytics for crop yield optimization and agricultural data management.',
      techStack: ['ASP.NET Core', 'Entity Framework', 'SQL Server', 'C#'],
      category: 'web',
      status: 'complete',
      githubUrl: 'https://github.com/Shaiksultan54',
      liveUrl: null,
      imageUrl: 'https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '5',
      title: 'Inventory Management System',
      emoji: '📦',
      description: 'Enterprise-grade inventory management platform with real-time tracking, automated reordering, and comprehensive reporting.',
      techStack: ['C# .NET', 'WPF', 'SQL Server', 'Entity Framework'],
      category: 'desktop',
      status: 'complete',
      githubUrl: 'https://github.com/Shaiksultan54',
      liveUrl: null,
      imageUrl: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '6',
      title: 'Tender Management Platform',
      emoji: '📋',
      description: 'Complete tender management solution with document handling, automated workflow processes, and bid tracking system.',
      techStack: ['React.js', 'Node.js', 'PostgreSQL', 'JWT', 'REST API'],
      category: 'web',
      status: 'progress',
      githubUrl: 'https://github.com/Shaiksultan54',
      liveUrl: null,
      imageUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600'
    },

    {
      id: '7',
      title: 'IoT Robotics Projects',
      emoji: '🤖',
      description: 'Collection of IoT and robotics projects developed using Tinkercad. Includes circuit designs and embedded systems programming.',
      techStack: ['Arduino', 'IoT', 'C++', 'Tinkercad', 'Embedded Systems'],
      category: 'mobile',
      status: 'complete',
      githubUrl: 'https://github.com/Shaiksultan54',
      liveUrl: null,
      imageUrl: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'desktop', label: 'Desktop Apps' },
    { id: 'mobile', label: 'IoT/Embedded' },
    { id: 'ai', label: 'AI/ML' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my work spanning full-stack development, AI/ML, and IoT innovations
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Github className="w-4 h-4" />
              <a 
                href="https://github.com/Shaiksultan54" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                @Shaiksultan54
              </a>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 shadow-md ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-cyan-50 dark:hover:bg-gray-700 hover:scale-105'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span className="font-medium">{category.label}</span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-gray-200 dark:border-gray-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="text-3xl bg-white/95 dark:bg-gray-900/95 rounded-xl p-3 shadow-lg backdrop-blur-sm">
                      {project.emoji}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm ${
                      project.status === 'complete' 
                        ? 'bg-green-500/90 text-white' 
                        : 'bg-yellow-500/90 text-white'
                    }`}>
                      {project.status === 'complete' ? '✓ Complete' : '⚡ In Progress'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-medium border border-cyan-200 dark:border-cyan-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 group/link"
                    >
                      <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm font-medium">View Code</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 group/link"
                      >
                        <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Banner */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>

          </div>
        </div>
      </div>
    </section>
  );
};
