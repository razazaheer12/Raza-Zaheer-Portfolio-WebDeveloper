import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/razazaheer12',
      icon: Github,
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
      glowColor: 'hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/raza-zaheer-416745340/',
      icon: Linkedin,
      color: 'hover:text-purple-600 dark:hover:text-purple-400',
      glowColor: 'hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]',
    },
    {
      name: 'Email',
      href: 'mailto:razazaheer2002@gmail.com',
      icon: Mail,
      color: 'hover:text-pink-500 dark:hover:text-pink-400',
      glowColor: 'hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]',
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700 py-12">
      {/* Background subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/20 to-pink-50/30 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-8"
        >
          {/* Social Icons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8"
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    text-xl sm:text-2xl text-gray-500 dark:text-gray-400 
                    ${social.color} ${social.glowColor}
                    transition-all duration-300 ease-in-out
                    p-3 rounded-full
                    hover:bg-white/50 dark:hover:bg-gray-800/50
                    backdrop-blur-sm
                    group
                  `}
                  aria-label={social.name}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <IconComponent />
                  </motion.div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Copyright Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 dark:text-gray-400 text-center leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            © 2025 | Raza Zaheer | All rights reserved
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
