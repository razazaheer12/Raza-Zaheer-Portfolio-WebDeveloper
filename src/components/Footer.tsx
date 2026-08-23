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
    <footer className="relative bg-[#050816] border-t border-purple-900/50 overflow-hidden text-gray-300">
      
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 bottom-0 h-[250px] w-[250px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute right-[-80px] bottom-0 h-[220px] w-[220px] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-10 pb-8">
        
        {/* Top Floating Back to Top Button */}
        <div className="mb-8">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
            className="w-12 h-12 rounded-full border border-purple-900/50 bg-[#0b0a1d]/80 backdrop-blur-xl flex items-center justify-center text-gray-300 hover:border-purple-500 hover:text-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 shadow-sm"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-purple-900/40">
          
          {/* Brand & Description */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            <a href="#home" className="inline-block">
              <img
                src="/MRZ VECTOR LOGO.png"
                alt="MRZ Logo"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </a>
            <p className="text-xs sm:text-sm leading-relaxed text-gray-400 max-w-md">
              Let's build something impactful together. Whether you're looking for a developer to create scalable web applications, AI-driven solutions, or enterprise-grade systems, I'm always open to exciting opportunities and challenging projects. Feel free to connect.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="text-xs font-semibold tracking-widest text-white uppercase" style={{ fontFamily: "'Sora', sans-serif" }}>
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="text-xs font-semibold tracking-widest text-white uppercase" style={{ fontFamily: "'Sora', sans-serif" }}>
              Connect
            </h3>
            <div className="space-y-1.5 text-xs sm:text-sm text-gray-400">
              <p>
                <a href="mailto:razazaheer2002@gmail.com" className="hover:text-purple-400 transition-colors">
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
                    className="w-10 h-10 rounded-xl border border-purple-500/30 bg-purple-950/20 backdrop-blur-md flex items-center justify-center text-purple-200 hover:border-purple-500 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300"
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Bar Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Raza Zaheer. All rights reserved.</p>
          <p>Designed & Built by Raza Zaheer</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
