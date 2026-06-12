import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 280);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const hero = document.getElementById("home");

    if (hero) {
      hero.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.8,
          }}
          transition={{
            duration: 0.35,
          }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{
              scale: 1.08,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              group
              relative
              flex
              h-[50px]
              w-[50px]
              items-center
              justify-center
              overflow-hidden
              rounded-2xl

              bg-white/80
              dark:bg-[#0F172A]/80

              backdrop-blur-xl

              border
              border-gray-200
              dark:border-white/10

              shadow-[0_10px_30px_rgba(59,130,246,0.10)]

              hover:shadow-[0_12px_35px_rgba(139,92,246,0.18)]

              transition-all
              duration-500
            "
            aria-label="Back to top"
          >
            {/* Gradient Glow */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                bg-gradient-to-br
                from-blue-500/10
                via-purple-500/10
                to-pink-500/10
              "
            />

            {/* Icon */}
            <ArrowUp
              size={18}
              className="
                relative
                z-10
                text-blue-600
                dark:text-blue-400

                transition-all
                duration-300

                group-hover:-translate-y-1
                group-hover:text-purple-500
              "
            />

            {/* Pulse Dot */}
            <span
              className="
                absolute
                top-2
                right-2

                h-1.5
                w-1.5

                rounded-full

                bg-gradient-to-r
                from-blue-500
                to-purple-500

                animate-pulse
              "
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
