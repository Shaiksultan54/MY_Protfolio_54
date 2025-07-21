import React, { useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const Projects: React.FC = () => {
  const { ref, inView } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: '1',
      title: 'ResQ_Bubble',
      emoji: '🚨',
      description: 'Real-time disaster relief platform with IoT integration and AI-powered resource allocation for emergency response.',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Socket.IO', 'AI/ML'],
      category: 'web',
      status: 'complete',
      githubUrl: 'https://github.com/shaiksultan',
      liveUrl: '#',
      imageUrl: 'https://images.pexels.com/photos/73833/worm-s-eye-view-photography-of-concrete-building-73833.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '2',
      title: 'Trait-Tracer',
      emoji: '🎯',
      description: 'AI-powered recruitment platform with advanced candidate matching algorithms and automated screening.',
      techStack: ['React.js', 'Python', 'TensorFlow', 'PostgreSQL'],
      category: 'web',
      status: 'complete',
      githubUrl: 'https://github.com/shaiksultan',
      liveUrl: '#',
      imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '3',
      title: 'ANN DATA',
      emoji: '🌾',
      description: 'Comprehensive farmer management system with predictive analytics for crop yield optimization.',
      techStack: ['ASP.NET Core', 'Entity Framework', 'SQL Server', 'C#'],
      category: 'web',
      status: 'complete',
      githubUrl: 'https://github.com/shaiksultan',
      imageUrl: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '4',
      title: 'ZK Invoicing System',
      emoji: '💰',
      description: 'Open-source invoicing system built during C4GT program with NSUT, featuring automated billing.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      category: 'web',
      status: 'complete',
      githubUrl: 'https://github.com/shaiksultan',
      liveUrl: '#',
      imageUrl: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '5',
      title: 'Inventory Management System',
      emoji: '📦',
      description: 'Enterprise inventory management platform with real-time tracking and automated reordering.',
      techStack: ['C# .NET', 'WPF', 'SQL Server', 'Entity Framework'],
      category: 'desktop',
      status: 'complete',
      githubUrl: 'https://github.com/shaiksultan',
      imageUrl: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '6',
      title: 'Tender Management Platform',
      emoji: '📋',
      description: 'Complete tender management solution with document handling and automated workflow processes.',
      techStack: ['React.js', 'Node.js', 'PostgreSQL', 'JWT'],
      category: 'web',
      status: 'progress',
      githubUrl: 'https://github.com/shaiksultan',
      imageUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'desktop', label: 'Desktop Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI/ML' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work and technical achievements
            </p>
          </div>

          {/* Filter Buttons */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`glass-card px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === category.id
                    ? 'bg-cyan-600 text-white shadow-lg'
                    : 'hover:bg-cyan-50 dark:hover:bg-gray-700'
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
                className={`glass-card overflow-hidden hover:scale-105 transition-all duration-500 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="relative">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-3xl bg-white/90 dark:bg-gray-900/90 rounded-lg p-2">
                      {project.emoji}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'complete' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-white'
                    }`}>
                      {project.status === 'complete' ? 'Complete' : 'In Progress'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};