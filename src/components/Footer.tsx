import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/razazaheer12',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/raza-zaheer/',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:razazaheer2002@gmail.com',
      icon: Mail,
    },
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50 dark:from-[#0B1126] dark:to-[#050816] border-t border-gray-200/60 dark:border-white/[0.06] overflow-hidden text-gray-700 dark:text-gray-300">
      
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 bottom-0 h-[250px] w-[250px] rounded-full bg-blue-500/8 dark:bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[-80px] bottom-0 h-[220px] w-[220px] rounded-full bg-purple-500/8 dark:bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-10 pb-8">
        
        {/* Top Floating Back to Top Button */}
        <div className="mb-8">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
            className="w-12 h-12 rounded-full border border-gray-300 dark:border-white/20 bg-white/50 dark:bg-white/[0.03] backdrop-blur-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-purple-500 hover:text-purple-500 hover:bg-purple-500/10 dark:hover:border-purple-500 dark:hover:text-purple-400 dark:hover:bg-purple-500/20 transition-all duration-300 shadow-sm"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-gray-200/80 dark:border-white/10">
          
          {/* Brand & Intro Column */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-5">
            <a href="#home" className="inline-block">
              <img
                src="/MRZ VECTOR LOGO.png"
                alt="MRZ Logo"
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-lg">
              Let's build something impactful together. Whether you're looking for a developer to create scalable web applications, AI-driven solutions, or enterprise-grade systems, I'm always open to exciting opportunities and challenging projects. Feel free to connect.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="text-xs font-semibold tracking-widest text-gray-900 dark:text-white uppercase">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="text-xs font-semibold tracking-widest text-gray-900 dark:text-white uppercase">
              Connect
            </h3>
            <div className="space-y-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <p>
                <a href="mailto:razazaheer2002@gmail.com" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  razazaheer2002@gmail.com
                </a>
              </p>
              <p>Karachi, Pakistan</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.name !== 'Email' ? '_blank' : undefined}
                    rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    aria-label={social.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl border border-gray-300 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur-sm flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-purple-500 hover:text-purple-500 hover:bg-purple-500/10 dark:hover:border-purple-500 dark:hover:text-purple-400 dark:hover:bg-purple-500/20 transition-all duration-300"
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Bar Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© 2025 Raza Zaheer. All rights reserved.</p>
          <p>Designed & Built by Raza Zaheer</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
