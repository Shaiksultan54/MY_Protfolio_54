import React from 'react';
import { Code, Cloud, Smartphone, Wrench, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const Services: React.FC = () => {
  const { ref, inView } = useScrollAnimation();

  const services = [
    {
      id: '1',
      title: 'Web Development',
      description: 'Full-stack web applications using modern frameworks and best practices. From responsive frontends to scalable backends.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
      icon: Code,
      color: 'blue'
    },
    {
      id: '2',
      title: 'Cloud Solutions',
      description: 'Cloud architecture design and implementation. Scalable, secure, and cost-effective solutions on major cloud platforms.',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
      icon: Cloud,
      color: 'purple'
    },
    {
      id: '3',
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications with native performance. iOS and Android apps from a single codebase.',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
      icon: Smartphone,
      color: 'green'
    },
    {
      id: '4',
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure management. Streamline your development workflow.',
      technologies: ['Jenkins', 'Docker', 'CI/CD', 'Monitoring'],
      icon: Wrench,
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Services I Offer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions to help bring your ideas to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`glass-card p-8 hover:scale-105 transition-all duration-500 group ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-4 rounded-lg bg-gradient-to-r ${getColorClasses(service.color)} text-white transition-all duration-300 group-hover:scale-110`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        Key Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="glass-card p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's discuss how I can help bring your vision to life with modern, 
                scalable solutions tailored to your needs.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};