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
    icon: <SiHtml5 className="w-10 h-10 md:w-14 md:h-14 text-orange-500" />,
  },
  {
    name: "CSS3",
    icon: <SiCss3 className="w-10 h-10 md:w-14 md:h-14 text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-10 h-10 md:w-14 md:h-14 text-yellow-400" />,
  },
  {
    name: "React",
    icon: <SiReact className="w-10 h-10 md:w-14 md:h-14 text-sky-400" />,
  },
  {
    name: "Next.js",
    icon: (
      <SiNextdotjs className="w-10 h-10 md:w-14 md:h-14 text-black dark:text-white" />
    ),
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-10 h-10 md:w-14 md:h-14 text-green-500" />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="w-10 h-10 md:w-14 md:h-14 text-cyan-400" />,
  },
  {
    name: "GitHub",
    icon: (
      <SiGithub className="w-10 h-10 md:w-14 md:h-14 text-gray-800 dark:text-white" />
    ),
  },
  {
    name: "Figma",
    icon: <SiFigma className="w-10 h-10 md:w-14 md:h-14 text-pink-500" />,
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

  const SkillCard = ({ skill }: { skill: (typeof skills)[0] }) => (
    <motion.div
      whileHover={{ y: -6, scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col items-center justify-center min-w-[140px] md:min-w-[170px] rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-[#0B1126]/90 backdrop-blur-xl p-6 shadow-[0_8px_25px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_25px_rgba(0,0,0,0.25)] hover:border-[#8B5CFF]/40 transition-all duration-500"
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3B82F6]/5 via-[#8B5CFF]/5 to-[#EC4899]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Icon */}
      <div className="relative z-10 mb-4 flex items-center justify-center rounded-2xl bg-gray-100 dark:bg-[#131C39] p-4 shadow-md group-hover:scale-110 transition-transform duration-300">
        {skill.icon}
      </div>

      {/* Name */}
      <p className="relative z-10 text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-[#8FA8FF] transition-colors">
        {skill.name}
      </p>
    </motion.div>
  );

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-[#050816] dark:via-[#0B1126] dark:to-[#050816] transition-colors duration-500"
    >
      {/* Background Blur Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute right-[-120px] top-0 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute bottom-[-200px] left-1/2 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-5 flex justify-center"
        >
          <div className="rounded-md border border-[#6B4EFF]/40 bg-gray-100 dark:bg-[#131C39] px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-[#6B4EFF] dark:text-[#8FA8FF] shadow-[0_0_20px_rgba(104,87,255,0.15)]">
            MY EXPERTISE
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={typingContainer}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 flex justify-center"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {heading.split("").map((char, i) => (
              <motion.span key={i} variants={typingLetter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>

          <div className="mx-auto mt-4 h-[4px] w-[90px] rounded-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CFF] to-[#D946EF]" />

          <p className="text-center text-base md:text-lg text-gray-700 dark:text-[#A0A7C0] max-w-2xl mx-auto mt-6 leading-7">
            I've worked with a variety of technologies in the web development
            world. Here are the main areas of my expertise.
          </p>
        </motion.div>

        {/* Skills Marquee */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Fade */}
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white dark:from-[#050816] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white dark:from-[#050816] to-transparent z-10 pointer-events-none"></div>

          {/* Row 1 */}
          <motion.div
            className="flex gap-6 md:gap-8 whitespace-nowrap mb-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
          >
            {skills.concat(skills).map((skill, i) => (
              <SkillCard key={`row1-${i}`} skill={skill} />
            ))}
          </motion.div>

          {/* Row 2 */}
          <motion.div
            className="flex gap-6 md:gap-8 whitespace-nowrap"
            animate={{ x: ["-100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {skills.concat(skills).map((skill, i) => (
              <SkillCard key={`row2-${i}`} skill={skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
