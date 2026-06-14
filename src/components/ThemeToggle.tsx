import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme, init } = useThemeStore();

  useEffect(() => {
    init();
  }, []);

  const handleToggle = () => toggleTheme();

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
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      className="p-1 focus:outline-none"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDarkMode}
      role="switch"
      tabIndex={0}
    >
      <motion.div
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="flex items-center justify-center"
      >
        {isDarkMode ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Sun size={20} className="text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Moon size={20} className="text-gray-600 dark:text-gray-300" />
          </motion.div>
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
