import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

export const Hero: React.FC = () => {
  return (
    <section className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 particle-bg opacity-30"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-cyan-900 dark:to-purple-900"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          {/* <div className="mb-8">
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 p-1 animate-pulse-slow">
                <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Available</span>
              </div>
            </div>
          </div> */}
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 p-1 animate-pulse-slow">
            <img 
            src="src/public/img/photo.jpeg" // <-- make sure this path is correct
            alt="Shaik Sultan"
            className="w-full h-full rounded-full object-cover"/>
            </div>

          
          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Shaik Sultan
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-16 flex items-center justify-center">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'DevOps Enthusiast',
                2000,
                'React.js Specialist',
                2000,
                'Problem Solver',
                2000,
                'Tech Innovator',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-semibold"
            />
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span className="text-gray-600 dark:text-gray-300">Hyderabad, Telangana</span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Highly adaptable and self-motivated Application Engineer with a quick-learning mindset and a passion for solving real-world problems through software.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="src/public/Resume/NEW_SHAIK SULTAN.pdf"
              download
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </a>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Shaiksultan54" 
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 hover:scale-110 transition-all duration-300"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a 
                href="https://linkedin.com/in/shaiksultan" 
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-blue-600" />
              </a>
              <a 
                href="mailto:sultan541790@gmail.com"
                className="glass-card p-3 hover:scale-110 transition-all duration-300"
              >
                <Mail className="w-6 h-6 text-green-600" />
              </a>
            </div>
          </div>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['React.js', 'Node.js', 'C# .NET', 'MongoDB', 'AWS', 'DevOps'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 glass-card text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* CTA Button */}
          <a
            href="#about"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore My Work
            <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};