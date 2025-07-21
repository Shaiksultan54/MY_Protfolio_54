import React from 'react';
import { Clock, Eye, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const Blog: React.FC = () => {
  const { ref, inView } = useScrollAnimation();

  const blogPosts = [
    {
      id: '1',
      title: 'Building Scalable React Applications',
      category: 'Frontend',
      preview: 'Learn best practices for structuring React applications that can grow with your team and user base.',
      readTime: 8,
      imageUrl: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      engagementMetrics: {
        likes: 234,
        views: 1520,
        comments: 42
      }
    },
    {
      id: '2',
      title: 'DevOps Best Practices with Docker',
      category: 'DevOps',
      preview: 'Complete guide to containerization and deployment strategies for modern web applications.',
      readTime: 12,
      imageUrl: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600',
      engagementMetrics: {
        likes: 189,
        views: 980,
        comments: 28
      }
    },
    {
      id: '3',
      title: 'Cloud Architecture Patterns',
      category: 'Cloud',
      preview: 'Explore common cloud architecture patterns and when to use them for maximum efficiency.',
      readTime: 15,
      imageUrl: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      engagementMetrics: {
        likes: 312,
        views: 2100,
        comments: 56
      }
    },
    {
      id: '4',
      title: 'Modern JavaScript Features',
      category: 'JavaScript',
      preview: 'Stay up-to-date with the latest JavaScript features and how they can improve your code.',
      readTime: 6,
      imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
      engagementMetrics: {
        likes: 156,
        views: 850,
        comments: 23
      }
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Frontend: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      DevOps: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      Cloud: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      JavaScript: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    };
    return colors[category as keyof typeof colors] || colors.Frontend;
  };

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights from my development journey
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className={`glass-card overflow-hidden hover:scale-105 transition-all duration-500 group ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.preview}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{post.readTime} min read</span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.engagementMetrics.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.engagementMetrics.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.engagementMetrics.comments}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-2">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* View All Button */}
          <div className={`text-center mt-12 transition-all duration-1000 delay-600 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Posts
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};