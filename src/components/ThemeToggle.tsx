import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme, init } = useThemeStore();

  // Initialize theme on component mount
  useEffect(() => {
    init();
  }, []);

  const handleToggle = () => {
    toggleTheme();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  return (
    <motion.button
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      whileHover={{ 
        scale: 1.05,
        boxShadow: isDarkMode 
          ? "0 0 20px rgba(251, 191, 36, 0.4)" 
          : "0 0 20px rgba(59, 130, 246, 0.4)"
      }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative p-3 rounded-full transition-all duration-500 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${isDarkMode 
          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:ring-purple-500' 
          : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 focus:ring-blue-500'
        }
        shadow-lg hover:shadow-xl
        backdrop-blur-sm
        group
      `}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDarkMode}
      role="switch"
      tabIndex={0}
    >
      {/* Background glow effect */}
      <motion.div
        className={`
          absolute inset-0 rounded-full blur-md opacity-30
          ${isDarkMode 
            ? 'bg-gradient-to-r from-yellow-400 to-orange-400' 
            : 'bg-gradient-to-r from-blue-400 to-cyan-400'
          }
        `}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Icon container */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isDarkMode ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Sun 
              size={20} 
              className="text-yellow-200 group-hover:text-yellow-100 transition-colors duration-300" 
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Moon 
              size={20} 
              className="text-blue-100 group-hover:text-white transition-colors duration-300" 
            />
          </motion.div>
        )}
      </motion.div>

      {/* Ripple effect on click */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={{ scale: 0, opacity: 0.5 }}
        animate={{ scale: 0, opacity: 0.5 }}
        whileTap={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
        }}
      />
    </motion.button>
  );
};

export default ThemeToggle;