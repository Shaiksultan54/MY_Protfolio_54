import React, { useState } from 'react';
import { Code2, Server, Database, MonitorSmartphone } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const Skills: React.FC = () => {
  const { ref, inView } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: Code2 },
    { id: 'frontend', label: 'Frontend', icon: MonitorSmartphone },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'database', label: 'Database', icon: Database },
  ];

  const skills = [
    // Frontend
    { name: 'React.js', category: 'frontend', proficiency: 85, years: 1, icon: '⚛️' },
    { name: 'WinForms', category: 'frontend', proficiency: 90, years: 1, icon: '🪟' },
    { name: 'HTML5 / CSS3', category: 'frontend', proficiency: 92, years: 2, icon: '🌐' },
    { name: 'JavaScript', category: 'frontend', proficiency: 88, years: 2, icon: '🟨' },

    // Backend
    { name: 'ASP.NET Core', category: 'backend', proficiency: 90, years: 2, icon: '🔷' },
    { name: 'C#', category: 'backend', proficiency: 92, years: 2, icon: '💠' },
    { name: '.NET (Windows & Web Apps)', category: 'backend', proficiency: 88, years: 2, icon: '🧩' },
    { name: 'Node.js', category: 'backend', proficiency: 80, years: 1, icon: '🟢' },
    { name: 'Python', category: 'backend', proficiency: 60, years: 0.5, icon: '🐍' },

    // Database
    { name: 'SQL Server', category: 'database', proficiency: 90, years: 2, icon: '🗄️' },
    { name: 'MongoDB', category: 'database', proficiency: 80, years: 1, icon: '🍃' },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Full-stack developer with hands-on experience in building dynamic web and Windows applications using modern technologies and frameworks.
            </p>
          </div>

          {/* Category Filter */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`glass-card px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-cyan-600 text-white shadow-lg'
                    : 'hover:bg-cyan-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.label}</span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`glass-card p-6 hover:scale-105 transition-all duration-500 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl">{skill.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.years} year{skill.years !== 1 ? 's' : ''} experience
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Proficiency
                    </span>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: inView ? `${skill.proficiency}%` : '0%',
                        transitionDelay: `${index * 100 + 500}ms`,
                      }}
                    />
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
