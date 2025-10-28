import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const Contact: React.FC = () => {
  const { ref, inView } = useScrollAnimation();
  const form = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) {
      console.error('Form reference is null');
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(form.current);
    
    // Get current date and time
    const now = new Date();
    const formattedTime = now.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
    
    // EmailJS template parameters matching your template variables
    const templateParams = {
      name: formData.get('from_name') as string,
      email: formData.get('from_email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      time: formattedTime,
    };

    try {
      // IMPORTANT: Verify these IDs in your EmailJS dashboard:
      // Service ID: https://dashboard.emailjs.com/admin
      // Template ID: https://dashboard.emailjs.com/admin/templates
      // Public Key: https://dashboard.emailjs.com/admin/account
      
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,  // ⚠️ VERIFY THIS in EmailJS dashboard
          template_id:import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // ⚠️ VERIFY THIS - Error says it's not found
          user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,    // ⚠️ VERIFY THIS (Public Key)
          template_params: templateParams,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`EmailJS API Error: ${response.status} - ${errorText}`);
      }

      setSubmitStatus('success');
      setIsSubmitting(false);
      if (form.current) {
        form.current.reset();
      }

      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shaiksultan9812@gmail.com',
      href: 'mailto:shaiksultan9812@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9890309844',
      href: 'tel:+919890309844'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, Telangana',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Shaiksultan54', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shaik-sultan-a705b422a/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/ShaikSulta54255', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  Send a Message
                </h3>

                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="from_name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="from_email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300 resize-none"
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
                        : submitStatus === 'error'
                        ? 'bg-red-600 hover:bg-red-700'
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
                    ) : submitStatus === 'error' ? (
                      <>
                        <span>⚠</span>
                        <span>Failed to Send</span>
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
            <div
              className={`transition-all duration-1000 delay-400 ${
                inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
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
                          <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
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