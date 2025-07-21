import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Services } from './components/sections/Services';
import { Blog } from './components/sections/Blog';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { BackToTop } from './components/ui/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;