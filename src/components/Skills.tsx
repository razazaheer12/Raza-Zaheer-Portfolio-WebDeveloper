import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiGithub,
  SiFigma,
  SiNodedotjs,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

// Skills Data
const skills = [
  { name: "HTML5", icon: <SiHtml5 className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-yellow-400" /> },
  { name: "React", icon: <SiReact className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-sky-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-black dark:text-white" /> },
  { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-green-500" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-cyan-400" /> },
  { name: "GitHub", icon: <SiGithub className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-gray-800 dark:text-white" /> },
  { name: "Figma", icon: <SiFigma className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-pink-500" /> },
];

// Typing animation variants
const typingContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const typingLetter = {
  hidden: { opacity: 0, y: `0.25em` },
  visible: { opacity: 1, y: `0em`, transition: { duration: 0.3 } },
};

const Skills = () => {
  const heading = "My Skills";

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={typingContainer}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 flex justify-center"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {heading.split("").map((char, i) => (
              <motion.span key={i} variants={typingLetter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>

          <p className="text-center text-base text-gray-700 dark:text-gray-300 max-w-xl mx-auto mt-6">
            I've worked with a variety of technologies in the web development world. Here are the main areas of my expertise:
          </p>
        </motion.div>

        {/* Skills Section */}
        <div className="relative w-full overflow-hidden overflow-x-hidden">
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Row 1 (scroll left) */}
          <motion.div
            className="flex gap-8 sm:gap-12 md:gap-16 whitespace-nowrap mb-10"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {skills.concat(skills).map((skill, i) => (
              <div
                key={`row1-${i}`}
                className="flex flex-col items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <div className="mb-2 transition-transform hover:scale-110">{skill.icon}</div>
                <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                  {skill.name}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Marquee Row 2 (scroll right) */}
          <motion.div
            className="flex gap-8 sm:gap-12 md:gap-16 whitespace-nowrap"
            animate={{ x: ["-100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
          >
            {skills.concat(skills).map((skill, i) => (
              <div
                key={`row2-${i}`}
                className="flex flex-col items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <div className="mb-2 transition-transform hover:scale-110">{skill.icon}</div>
                <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                  {skill.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
