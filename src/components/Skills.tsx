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
  {
    name: "HTML5",
    icon: <SiHtml5 className="w-10 h-10 text-orange-500" />,
    level: "95%",
  },
  {
    name: "CSS3",
    icon: <SiCss3 className="w-10 h-10 text-blue-500" />,
    level: "92%",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-10 h-10 text-yellow-400" />,
    level: "90%",
  },
  {
    name: "React",
    icon: <SiReact className="w-10 h-10 text-sky-400" />,
    level: "88%",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-10 h-10 text-black dark:text-white" />,
    level: "85%",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-10 h-10 text-green-500" />,
    level: "82%",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="w-10 h-10 text-cyan-400" />,
    level: "95%",
  },
  {
    name: "GitHub",
    icon: <SiGithub className="w-10 h-10 text-gray-800 dark:text-white" />,
    level: "88%",
  },
  {
    name: "Figma",
    icon: <SiFigma className="w-10 h-10 text-pink-500" />,
    level: "80%",
  },
];

// Typing animation
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
      className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Background Blur Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={typingContainer}
          viewport={{ once: true }}
          className="text-center mb-20"
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
            I've worked with a variety of technologies in the web development
            world. Here are the main areas of my expertise:
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
