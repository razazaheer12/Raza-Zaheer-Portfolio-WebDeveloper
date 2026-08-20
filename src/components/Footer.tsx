import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/razazaheer12',
      icon: Github,
      hoverColor: 'hover:text-white',
      hoverBg: 'hover:bg-gray-800 dark:hover:bg-gray-700',
      hoverShadow: 'hover:shadow-[0_0_20px_rgba(100,100,100,0.4)]',
      hoverBorder: 'hover:border-gray-600',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/raza-zaheer/',
      icon: Linkedin,
      hoverColor: 'hover:text-white',
      hoverBg: 'hover:bg-blue-600',
      hoverShadow: 'hover:shadow-[0_0_20px_rgba(37,99,235,0.45)]',
      hoverBorder: 'hover:border-blue-500',
    },
    {
      name: 'Email',
      href: 'mailto:razazaheer2002@gmail.com',
      icon: Mail,
      hoverColor: 'hover:text-white',
      hoverBg: 'hover:bg-pink-500',
      hoverShadow: 'hover:shadow-[0_0_20px_rgba(236,72,153,0.45)]',
      hoverBorder: 'hover:border-pink-400',
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
    <footer className="relative bg-gradient-to-b from-white to-gray-50 dark:from-[#0B1126] dark:to-[#050816] border-t border-gray-200/60 dark:border-white/[0.06] overflow-hidden">

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 bottom-0 h-[250px] w-[250px] rounded-full bg-blue-500/8 dark:bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[-80px] bottom-0 h-[220px] w-[220px] rounded-full bg-purple-500/8 dark:bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 pb-8">

        {/* Top section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8 mb-10"
        >
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-[14px] flex items-center justify-center text-white font-bold text-sm bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 shadow-lg">
              RZ
            </div>
            <span
              className="text-sm uppercase tracking-[3px] text-gray-500 dark:text-gray-400 font-semibold"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Portfolio
            </span>
          </motion.a>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-1"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * i }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                className="px-4 py-2 rounded-full text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-300"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
            <div className="h-[3px] w-16 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
          </div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={social.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.08 * i }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.93 }}
                  className={`
                    w-10 h-10 rounded-xl flex items-center justify-center
                    text-gray-500 dark:text-gray-400
                    border border-gray-200 dark:border-white/10
                    bg-white/60 dark:bg-white/[0.03] backdrop-blur-sm
                    ${social.hoverColor} ${social.hoverBg} ${social.hoverShadow} ${social.hoverBorder}
                    transition-all duration-300
                  `}
                >
                  <Icon size={17} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <p
            className="text-xs text-gray-400 dark:text-gray-500 text-center flex items-center gap-1.5"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            © 2025 Raza Zaheer · Made with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Heart size={12} className="text-pink-500 fill-pink-500" />
            </motion.span>
            · All rights reserved
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-lg border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] flex items-center justify-center group-hover:border-blue-400/40 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 transition-all duration-300">
              <ArrowUp size={13} />
            </div>
          </motion.button>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
