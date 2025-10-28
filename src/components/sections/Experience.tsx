import React from 'react';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const Experience: React.FC = () => {
  const { ref, inView } = useScrollAnimation();

  const experiences = [
    {
      id: '1',
      company: 'MyTechIN',
      role: 'Jr. Software Engineer',
      duration: 'May 2024 - Present',
      location: 'Hyderabad, Telangana (Part-time)',
      responsibilities: [
        'Developed enterprise applications using .NET and React.js with focus on scalable architecture',
        'Built comprehensive inventory management system with real-time tracking capabilities',
        'Implemented tender management platform with automated workflow processes',
        'Collaborated with cross-functional teams in Agile development environment'
      ],
      technologies: ['React.js', 'C# .NET', 'SQL Server', 'Entity Framework', 'JWT'],
      achievements: [
        'Successfully delivered inventory management system reducing manual work by 60%',
        'Implemented JWT authentication system improving security standards',
        'Developed automated tender processing reducing approval time by 40%'
      ]
    },

    {
      id: '2',
      company: 'ISL Engineering College',
      role: 'Robotics Club Lead',
      duration: 'Sep 2022 - Present',
      location: 'Hyderabad, Telangana',
      responsibilities: [
        'Led robotics club activities and organized technical workshops',
        'Mentored junior students in robotics and IoT development',
        'Organized hackathons and technical competitions',
        'Coordinated with industry experts for guest lectures'
      ],
      technologies: ['Arduino', 'Raspberry Pi', 'IoT', 'Python', 'C++'],
      achievements: [
        'Increased club membership by 150% during leadership tenure',
        'Organized 5+ successful technical workshops and competitions',
        'Led team to hackathon finals at IIIT Hyderabad and MJ College'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My journey in software development and leadership roles
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-cyan-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                } transition-all duration-1000 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={{ transitionDelay: `${index * 200}ms` }}>
                  <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-cyan-600 dark:text-cyan-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1 mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                            <CheckCircle className="w-3 h-3 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
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