import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Quizlett -Advanced MCQ's based Web/App",
    description:
      "A modern, interactive multiple-choice quiz application built with Next.js, featuring three comprehensive quiz sections: Mathematics, Programming, and General Knowledge. Test your knowledge with instant feedback, progress tracking, achievements, and a beautiful dark/light theme interface.",
    image:
      "https://i.ibb.co/k2kXHJ49/Screenshot-2025-09-24-042547.png",
    tech: ["React", "TypeScript", "Next.JS", "Tailwind CSS","Shdecn-ui", "Lucide React"],
    liveUrl: "https://advanced-mcq-quiz.vercel.app/",
    githubUrl: "https://github.com/razazaheer12/Quizlett--advanced-mcq-quiz",
  },
  {
    title: "Neural Canvas - AI Style Studio",
    description:
      "Neural Canvas, your ultimate AI-powered art style studio. This innovative web application transforms your ordinary photos into stunning masterpieces by applying sophisticated AI-inspired filters and real-time adjustments. Whether you're an artist, hobbyist, or just love experimenting with visual creativity, Neural Canvas empowers you to unleash your inner artist with just a few clicks.",
    image:
      "https://i.ibb.co/2xG8s7C/Gemini-Generated-Image-7eb9ml7eb9ml7eb9.png",
    tech: ["JavaScript", "CSS", "HTML"],
    liveUrl: "https://canvas-photoeditor-ai.netlify.app/",
    githubUrl: "https://github.com/razazaheer12/Neural-Canvas--AI-Art-Style-Transfer-Studio",
  },
  {
    title: "WeatherFlow NextGen-App",
    description:
      "Advance Weather App - Next Gen, a cutting-edge, user-friendly weather application built with modern web technologies. This app delivers real-time weather insights, interactive forecasts, and seamless offline capabilities, all wrapped in a stunning, responsive design. Perfect for staying ahead of the weather, anywhere, anytime!",
    image:
      "https://i.ibb.co/7xr4JTLZ/Screenshot-2025-09-19-015926.png",
    tech: ["React", "Next.js", "OpenWeather API", "TypeScript", "Chart.js", "Tailwind CSS"],
    liveUrl: "https://advance-weather-app-next-gen.vercel.app/",
    githubUrl: "https://github.com/razazaheer12/Advance_Weather_App-Next_Gen",
  },
    {
    title: "🐍 Modern Snake Game",
    description:
      "A modern Snake Game built with HTML, CSS, and JavaScript. Control the snake with arrow keys, eat grains to grow, and score points. Now with Pause/Resume buttons, speed boosts every 5th food, and sound effects for a fun retro experience! 🎮",
    image:
      "https://i.ibb.co/PZ4hSbHB/Screenshot-2025-09-19-012154.png",
    tech: ["HTML 5", "CSS 3", "JavaScript (ES6)"],
    liveUrl: "https://snake-game0999.netlify.app/",
    githubUrl: "https://github.com/razazaheer12/Snake-game",
  },
  {
    title: "MyPDF - Free Online PDF Toolkit",
    description:
      "A modern, fast, and secure web application for converting PDF documents to Word and vice versa. Built with cutting-edge technologies to provide a seamless user experience. Features drag-and-drop uploads, real-time progress tracking, and download history management. Powered by Next.js 15, React 19, and TypeScript for optimal performance and reliability.",
    image:
     "https://i.ibb.co/hJ6ZgTz4/Screenshot-2025-09-24-041724.png",
    tech: ["Next.js","React", "TypeScript", "Tailwind CSS",],
    liveUrl: "https://mypdf-converter.vercel.app/",
    githubUrl: "https://github.com/razazaheer12/MyPDF_converter", 
  },
    {
    title: "🎓 Student Grade Calculator",
    description:
      "Student Grade Calculator (SCG) is a sleek, responsive web application designed to help students easily calculate their academic performance by entering their subjects and marks. The app provides a clear summary of total subjects, total marks, percentage, grade, and pass/fail status with an engaging UI and smooth animations.",
    image:
      "https://i.ibb.co/pjSkmKgt/Screenshot-2025-10-06-205520.png",
    tech: ["HTML 5", "CSS 3", "JavaScript (ES6)"],
    liveUrl: "https://student-grade-calculator-scg.vercel.app/",
    githubUrl: "https://github.com/razazaheer12/Student-Grade-Calculator-SCG-",
  },

];

// Typing animation variants
const typingContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const typingText = {
  hidden: { opacity: 0, y: `0.25em` },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const tiltConfig = {
  rotateX: [-5, 5],
  rotateY: [-5, 5],
  scale: 1.02,
  transition: { type: "spring", stiffness: 200, damping: 15 },
};

const Projects = () => {
  const title = "Featured Projects";
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    if (showAll) {
      // Smooth scroll back to top of projects section
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    setShowAll(!showAll);
  };

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-500/10 blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Heading with typing effect */}
        <motion.div
          variants={typingContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white relative inline-block font-montserrat">
            {title.split("").map((char, index) => (
              <motion.span key={index} variants={typingText}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <span className="block h-1 w-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 mx-auto mt-3 rounded-full"></span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-2xl sm:max-w-3xl mx-auto font-inter">
            Here are some of my recent projects. Each one was built to solve a
            specific problem and demonstrates different aspects of my skills.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title + index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={tiltConfig}
              className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-800 dark:text-gray-200 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-800 dark:text-gray-200 hover:bg-purple-600 hover:text-white transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-base sm:text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-100/70 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full text-xs sm:text-sm"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="mt-12 text-center">
          <button
            onClick={handleToggle}
            className="px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {showAll ? "Show Less" : "Show All Projects"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
