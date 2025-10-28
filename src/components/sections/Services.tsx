import React from 'react';
import { Code, Monitor, Smartphone, Brain } from 'lucide-react';

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

export const Services = () => {
  const { ref, inView } = useScrollAnimation();

  const services = [
    {
      id: '1',
      title: 'Web Applications',
      description: 'Full-stack web applications using modern frameworks and best practices. Building responsive, scalable solutions from frontend to backend with real-time capabilities.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'Socket.IO', 'REST APIs'],
      icon: Code,
      color: 'blue',
      projects: ['ResQ_Bubble', 'Tender Management', 'C4GT/SEETA']
    },
    {
      id: '2',
      title: 'Desktop Applications',
      description: 'Enterprise-grade desktop applications with robust data management. Building Windows applications with WPF and .NET technologies for business solutions.',
      technologies: ['C# .NET', 'WPF', 'SQL Server', 'Entity Framework', 'ASP.NET Core'],
      icon: Monitor,
      color: 'purple',
      projects: ['Inventory Management', 'Farmer Management System']
    },
    {
      id: '3',
      title: 'Mobile & IoT',
      description: 'IoT solutions and embedded systems development. Building smart devices, robotics projects, and mobile integrations with real-time data processing.',
      technologies: ['Arduino', 'IoT', 'Embedded C++', 'Tinkercad', 'React Native'],
      icon: Smartphone,
      color: 'green',
      projects: ['ResQ_Bubble IoT', 'Robotics Projects']
    },
    {
      id: '4',
      title: 'AI/ML Solutions',
      description: 'AI-powered applications with machine learning algorithms. Implementing intelligent systems for predictive analytics, personality assessment, and automated decision-making.',
      technologies: ['Python', 'TensorFlow', 'AI/ML', 'Predictive Analytics', 'NLP'],
      icon: Brain,
      color: 'orange',
      projects: ['Trait-Tracer', 'ResQ_Bubble AI', 'Crop Yield Prediction']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700',
      purple: 'from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700',
      green: 'from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700',
      orange: 'from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getBgColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 dark:bg-blue-900/20',
      purple: 'bg-purple-50 dark:bg-purple-900/20',
      green: 'bg-green-50 dark:bg-green-900/20',
      orange: 'bg-orange-50 dark:bg-orange-900/20'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
              My Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive development solutions across multiple platforms and technologies
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 group border border-gray-200 dark:border-gray-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${getColorClasses(service.color)} text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Projects Built */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2 text-sm flex items-center">
                        <span className="mr-2">🚀</span>
                        Projects Built:
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.projects.map((project) => (
                          <span
                            key={project}
                            className={`px-3 py-1 ${getBgColorClasses(service.color)} text-gray-700 dark:text-gray-200 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-600`}
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2 text-sm flex items-center">
                        <span className="mr-2">⚡</span>
                        Key Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* <button className="flex items-center space-x-2 text-cyan-600 dark:text-cyan-400 font-medium hover:text-cyan-700 dark:hover:text-cyan-300 transition-all duration-300 group-hover:translate-x-2 text-sm">
                      <span>View Projects</span>
                      <ArrowRight className="w-4 h-4" />
                    </button> */}
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