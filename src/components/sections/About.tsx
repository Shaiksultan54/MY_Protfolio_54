import React from 'react';
import { MapPin, Calendar, Award, Target, Coffee, Code2, GraduationCap, Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const About: React.FC = () => {
  const { ref, inView } = useScrollAnimation();

  const achievements = [
    { icon: Code2, label: 'Projects Completed', value: '15+' },
    { icon: Award, label: 'Hackathon Finalist', value: '2' },
    { icon: Coffee, label: 'Cups of Coffee', value: '500+' },
    { icon: Target, label: 'Client Satisfaction', value: '98%' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate developer with a love for creating innovative solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className={`space-y-6 transition-all duration-1000 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-600" />
                <span>Hyderabad, Telangana</span>
                <Calendar className="w-5 h-5 text-cyan-600 ml-6" />
                <span>CSE Student (2021-2025)</span>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm a passionate <strong className="text-cyan-600">Full Stack Developer</strong> and 
                  <strong className="text-purple-600"> DevOps Enthusiast</strong> currently pursuing my 
                  Bachelor of Engineering in Computer Science from ISL Engineering College, Osmania University.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Currently working as a Jr. Software Engineer at MyTechIN, I specialize in 
                  modern web technologies, cloud deployment, and building scalable applications. 
                  My goal is to create efficient, user-friendly solutions that solve real-world problems.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me leading the Robotics Club at my college, 
                  participating in hackathons, or working on freelance projects that challenge my skills.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Focus Areas</h4>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Full Stack Development</li>
                    <li>• Cloud Architecture</li>
                    <li>• DevOps Practices</li>
                    <li>• UI/UX Design</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Interests</h4>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Robotics & IoT</li>
                    <li>• AI/ML Integration</li>
                    <li>• Open Source</li>
                    <li>• Hackathons</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Side - Education & Experience Cards */}
            <div className={`space-y-6 transition-all duration-1000 delay-400 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              {/* Education Card */}
              <div className="glass-card p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                      Education
                    </h3>
                    <p className="text-cyan-600 dark:text-cyan-400 font-medium">
                      Bachelor of Engineering - CSE
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 dark:text-gray-300">
                    ISL Engineering College, Osmania University
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    2021 - 2025 | GPA: 8.2/10
                  </p>
                </div>
              </div>

              {/* Experience Card */}
              <div className="glass-card p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                      Current Role
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">
                      Jr. Software Engineer
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 dark:text-gray-300">
                    MyTechIN - Part Time
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    May 2024 - Present
                  </p>
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((item, index) => (
                  <div 
                    key={index}
                    className="text-center p-4 glass-card"
                  >
                    <item.icon className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {item.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};