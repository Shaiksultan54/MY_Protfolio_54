import React, { useState } from 'react';
import { Code2, Server, Cloud, Database, Smartphone, Wrench } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const Skills: React.FC = () => {
  const { ref, inView } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: Code2 },
    { id: 'frontend', label: 'Frontend', icon: Smartphone },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'devops', label: 'DevOps', icon: Wrench },
    { id: 'cloud', label: 'Cloud', icon: Cloud },
    { id: 'database', label: 'Database', icon: Database },
  ];

  const skills = [
    // Frontend
    { name: 'React.js', category: 'frontend', proficiency: 90, years: 2, icon: '⚛️' },
    { name: 'TypeScript', category: 'frontend', proficiency: 85, years: 1.5, icon: '🔷' },
    { name: 'Next.js', category: 'frontend', proficiency: 80, years: 1, icon: '▲' },
    { name: 'Tailwind CSS', category: 'frontend', proficiency: 95, years: 2, icon: '🎨' },
    { name: 'HTML5/CSS3', category: 'frontend', proficiency: 95, years: 3, icon: '🌐' },
    { name: 'JavaScript', category: 'frontend', proficiency: 90, years: 2.5, icon: '🟨' },
    
    // Backend
    { name: 'Node.js', category: 'backend', proficiency: 85, years: 2, icon: '🟢' },
    { name: 'C# .NET', category: 'backend', proficiency: 88, years: 1.5, icon: '🔵' },
    { name: 'Express.js', category: 'backend', proficiency: 85, years: 2, icon: '🚀' },
    { name: 'ASP.NET Core', category: 'backend', proficiency: 85, years: 1.5, icon: '🔷' },
    { name: 'REST APIs', category: 'backend', proficiency: 90, years: 2, icon: '🔗' },
    { name: 'Entity Framework', category: 'backend', proficiency: 80, years: 1, icon: '📊' },
    
    // DevOps
    { name: 'Docker', category: 'devops', proficiency: 75, years: 1, icon: '🐳' },
    { name: 'CI/CD', category: 'devops', proficiency: 70, years: 1, icon: '🔄' },
    { name: 'Git', category: 'devops', proficiency: 90, years: 3, icon: '📝' },
    { name: 'Linux', category: 'devops', proficiency: 75, years: 1.5, icon: '🐧' },
    { name: 'Jenkins', category: 'devops', proficiency: 65, years: 0.5, icon: '🏗️' },
    
    // Cloud
    { name: 'AWS', category: 'cloud', proficiency: 75, years: 1, icon: '☁️' },
    { name: 'Azure', category: 'cloud', proficiency: 70, years: 1, icon: '🌐' },
    { name: 'Vercel', category: 'cloud', proficiency: 85, years: 1.5, icon: '▲' },
    { name: 'Netlify', category: 'cloud', proficiency: 90, years: 2, icon: '🚀' },
    { name: 'Firebase', category: 'cloud', proficiency: 75, years: 1, icon: '🔥' },
    
    // Database
    { name: 'MongoDB', category: 'database', proficiency: 82, years: 1.5, icon: '🍃' },
    { name: 'SQL Server', category: 'database', proficiency: 85, years: 2, icon: '🗄️' },
    { name: 'PostgreSQL', category: 'database', proficiency: 80, years: 1.5, icon: '🐘' },
    { name: 'MySQL', category: 'database', proficiency: 80, years: 2, icon: '🐬' },
    { name: 'Redis', category: 'database', proficiency: 70, years: 1, icon: '🔴' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          {/* Category Filter */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`glass-card px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-cyan-600 text-white shadow-lg'
                    : 'hover:bg-cyan-50 dark:hover:bg-gray-700'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.label}</span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`glass-card p-6 hover:scale-105 transition-all duration-500 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transitionDelay: `${index * 100}ms`
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
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: inView ? `${skill.proficiency}%` : '0%',
                        transitionDelay: `${index * 100 + 500}ms`
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