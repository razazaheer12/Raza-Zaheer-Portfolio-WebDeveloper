import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTopButton from './components/ScrollToTopButton';
import { useThemeStore } from './store/themeStore';
import Skills from './components/Skills';
import SEO from './components/SEO';

function App() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <div>
      <SEO />
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <main className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </motion.div>
        </main>
        <Footer />

        {/* Floating Scroll Button */}
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default App;
