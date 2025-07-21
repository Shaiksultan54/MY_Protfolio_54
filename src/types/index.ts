export interface Project {
  id: string;
  title: string;
  emoji: string;
  description: string;
  techStack: string[];
  category: 'web' | 'mobile' | 'devops' | 'iot';
  status: 'complete' | 'progress';
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'cloud' | 'database';
  proficiency: number;
  yearsOfExperience: number;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  preview: string;
  readTime: number;
  imageUrl: string;
  engagementMetrics: {
    likes: number;
    views: number;
    comments: number;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  rating: number;
  photoUrl: string;
}