import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/shaiksultan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/shaiksultan', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/shaiksultan', label: 'Twitter' },
    { icon: Mail, href: 'mailto:sultan541790@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Shaik Sultan
                </h3>
                <p className="text-gray-400 mb-4 max-w-md">
                  Full Stack Developer & DevOps Enthusiast passionate about creating 
                  innovative solutions that make a difference. Let's build something amazing together!
                </p>
              </div>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400">Email</p>
                  <a
                    href="mailto:sultan541790@gmail.com"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    sultan541790@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a
                    href="tel:+919876543210"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    +91 9876543210
                  </a>
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white">Hyderabad, Telangana</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} Shaik Sultan. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>
            
            <div className="flex items-center space-x-4 text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <span>•</span>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center space-x-1 hover:text-white transition-colors duration-300"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};