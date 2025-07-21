import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const Testimonials: React.FC = () => {
  const { ref, inView } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: '1',
      name: 'Sarah Johnson',
      position: 'Product Manager',
      company: 'TechCorp',
      testimonial: 'Alex delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.',
      rating: 5,
      photoUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '2',
      name: 'Michael Chen',
      position: 'CTO',
      company: 'StartupXYZ',
      testimonial: 'Working with Alex was a game-changer for our startup. He built a scalable architecture that handles our growing user base beautifully. Highly recommended!',
      rating: 5,
      photoUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      position: 'Marketing Director',
      company: 'Growth Agency',
      testimonial: 'Alex created a stunning portfolio website that perfectly represents our brand. The design is modern, responsive, and the performance is outstanding.',
      rating: 5,
      photoUrl: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '4',
      name: 'David Kim',
      position: 'Founder',
      company: 'InnovateLab',
      testimonial: 'The IoT dashboard Alex developed for us is incredibly intuitive and powerful. He understood our complex requirements and delivered a solution that works flawlessly.',
      rating: 5,
      photoUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Don't just take my word for it - here's what my clients have to say
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className={`relative transition-all duration-1000 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="glass-card p-8 md:p-12 relative overflow-hidden">
              <Quote className="absolute top-8 left-8 w-16 h-16 text-blue-500/20" />
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-8">
                    "{testimonials[currentIndex].testimonial}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentIndex].photoUrl}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-blue-500/20"
                    />
                    <div className="text-left">
                      <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {testimonials[currentIndex].position}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-card p-3 hover:scale-110 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-card p-3 hover:scale-110 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-400 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                15+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Happy Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                25+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                98%
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};