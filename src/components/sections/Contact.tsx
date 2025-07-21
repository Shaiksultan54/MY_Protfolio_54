import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const Contact: React.FC = () => {
  const { ref, inView } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sultan541790@gmail.com',
      href: 'mailto:sultan541790@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9876543210',
      href: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, Telangana',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shaiksultan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/shaiksultan', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/shaiksultan', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                      placeholder="Project inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center space-x-2 px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : submitStatus === 'success'
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <span>✓</span>
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className={`transition-all duration-1000 delay-400 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center space-x-4 p-4 glass-card hover:scale-105 transition-all duration-300 group"
                      >
                        <div className="p-3 bg-cyan-600 text-white rounded-lg group-hover:bg-cyan-700 transition-colors duration-300">
                          <info.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                            {info.label}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    Follow Me
                  </h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 glass-card hover:scale-110 transition-all duration-300 group"
                        aria-label={social.label}
                      >
                        <social.icon className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-6 bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-900/20 dark:to-purple-900/20">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    Let's Build Something Amazing Together
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    I'm always excited to work on new projects and help bring innovative ideas to life. 
                    Whether you need a website, mobile app, or enterprise solution, I'm here to help.
                  </p>
                  <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium">Available for new projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};