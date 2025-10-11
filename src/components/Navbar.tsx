
import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 backdrop-blur-lg bg-gradient-to-r from-white/70 via-gray-100/50 to-white/70 dark:from-gray-950/70 dark:via-gray-900/50 dark:to-gray-950/70 border-b border-gray-200/50 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Portfolio
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0px 0px 8px rgba(99,102,241,0.8)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-white transition-all duration-300"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.name}
                  {/* Underline effect */}
                  <span className="absolute left-0 bottom-0 h-[2px] w-full scale-x-0 origin-left transition-transform duration-300 bg-gradient-to-r from-blue-400 to-purple-500 hover:scale-x-100"></span>
                </motion.a>
              ))}

              {/* Enhanced Theme Toggle */}
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <div className="mr-2">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gradient-to-r from-white/95 via-gray-100/95 to-white/95 dark:from-gray-900/95 dark:to-gray-800/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative block px-4 py-2 text-base font-medium text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-white transition-all duration-300"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
                {/* Mobile underline */}
                <span className="absolute left-0 bottom-0 h-[2px] w-full scale-x-0 origin-left transition-transform duration-300 bg-gradient-to-r from-blue-400 to-purple-500 hover:scale-x-100"></span>
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
