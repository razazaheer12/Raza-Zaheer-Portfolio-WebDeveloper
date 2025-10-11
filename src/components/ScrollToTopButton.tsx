import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const hero = document.getElementById("home");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        onClick={scrollToTop}
        whileHover={{
          scale: 1.1,
          y: -4,
          boxShadow: "0 0 25px rgba(99,102,241,0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        className="
          relative p-3 rounded-full 
          bg-gradient-to-r from-blue-500 to-purple-500
          text-white
          hover:from-purple-500 hover:to-blue-500
          transition-all duration-500 ease-in-out
          shadow-md hover:shadow-xl
          group
        "
        aria-label="Back to top"
      >
        <ArrowUp
          size={22}
          className="transition-transform duration-300 group-hover:-translate-y-1"
        />
      </motion.button>
    </motion.div>
  );
};

export default ScrollToTopButton;