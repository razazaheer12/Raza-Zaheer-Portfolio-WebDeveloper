import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, ArrowUp } from "lucide-react";

const projects = [
    { title: "🤖 PDF RAG Chatbot",
    description:
      "An intelligent chatbot that lets you upload any PDF and have a real conversation with it — powered by RAG (Retrieval-Augmented Generation), Pinecone Vector DB, and Google Gemma AI.",
    image: "https://i.ibb.co/bMFv7gjm/607546176-9b0c21e5-9508-4cb8-a001-95792037d7a1.png",
    tech: ["React", "TypeScript", "Next.JS", "Tailwind CSS", "Pinecone", "Google Gemma","Vector DB", "RAG", "LangChain", "Lucide React", "Shadcn", "LLM Integration"],
    githubUrl: "https://github.com/razazaheer12/Pdf-RAG-Chatbot",

  },
   {
    title: "Real-Time Chat App",
    description:
      "Real-Time Chat App is a modern, production-ready messaging platform where users can sign up, join topic-based chat rooms, send private direct messages, see who's online in real time, and personalize their profile — all wrapped in a sleek, mobile-responsive dark UI. Built from the ground up with the MERN stack (MongoDB, Express, React, Node.js) and powered by Socket.io for instant, bidirectional communication.",
    image: "https://i.ibb.co/sJ5V7yL8/Gemini-Generated-Image-sk1pkdsk1pkdsk1p.png",
    tech: ["React (Vite)", "Zustand", "Tailwind CSS", "React Router ", "Socket.io", "Node.js + Express", "MongoDB Atlas + Mongoose", "JWT ", "bcrypt.js", "Cloudinary"],
    liveUrl: "https://real-time-chat-app-pi-lake.vercel.app",
    githubUrl: "https://github.com/razazaheer12/Real-Time-Chat_App",
  },  
  {
    title: "Quizlett - Advanced MCQ's based Web/App",
    description:
      "A modern, interactive multiple-choice quiz application built with Next.js, featuring three comprehensive quiz sections: Mathematics, Programming, and General Knowledge. Test your knowledge with instant feedback, progress tracking, achievements, and a beautiful dark/light theme interface.",
    image: "https://i.ibb.co/k2kXHJ49/Screenshot-2025-09-24-042547.png",
    tech: ["React", "TypeScript", "Next.JS", "Tailwind CSS", "Shadcn-ui", "Lucide React"],
    liveUrl: "https://advanced-mcq-quiz.vercel.app/",
    githubUrl: "https://github.com/razazaheer12/Quizlett--advanced-mcq-quiz",
  },
  {
    title: "Neural Canvas - AI Style Studio",
    description:
      "Neural Canvas, your ultimate AI-powered art style studio. This innovative web application transforms your ordinary photos into stunning masterpieces by applying sophisticated AI-inspired filters and real-time adjustments.",
    image: "https://i.ibb.co/QhzDFNC/Screenshot-2026-05-07-000415.png",
    tech: ["JavaScript", "CSS", "HTML"],
    liveUrl: "https://canvas-photoeditor-ai.netlify.app/",
    githubUrl: "https://github.com/razazaheer12/Neural-Canvas--AI-Art-Style-Transfer-Studio",
  },
  {
    title: "WeatherFlow NextGen - App",
    description:
      "Advance Weather App - Next Gen, a cutting-edge, user-friendly weather application built with modern web technologies. Delivers real-time weather insights, interactive forecasts, and seamless offline capabilities.",
    image: "https://i.ibb.co/7xr4JTLZ/Screenshot-2025-09-19-015926.png",
    tech: ["React", "Next.js", "OpenWeather API", "TypeScript", "Chart.js", "Tailwind CSS"],
    liveUrl: "https://advance-weather-app-next-gen.vercel.app/",
    githubUrl: "https://github.com/razazaheer12/Advance_Weather_App-Next_Gen",
  },
  {
    title: "🌙☀️ Sun & Moon Tracker",
    description:
      "SunMoon Tracker is a high-precision, interactive web application designed to visualize the real-time positions of the sun and the moon. A beautiful React + Vite + TypeScript app with timezone-aware world time windows.",
    image: "https://i.ibb.co/ym34jL7c/Screenshot-2026-05-06-234111.png",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Shadcn/UI", "Date-fns"],
    liveUrl: "https://sun-moon-tracker-a27p.vercel.app/",
    githubUrl: "https://github.com/razazaheer12/Sun_Moon-Tracker",
  },
  {
    title: "MyPDF - Free Online PDF Toolkit",
    description:
      "A modern, fast, and secure web application for converting PDF documents to Word and vice versa. Features drag-and-drop uploads, real-time progress tracking, and download history management.",
    image: "https://i.ibb.co/hJ6ZgTz4/Screenshot-2025-09-24-041724.png",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://mypdf-converter.vercel.app/",
    githubUrl: "https://github.com/razazaheer12/MyPDF_converter",
  },
  {
    title: "🍽️ Recipe Finder",
    description:
      "A beautiful, feature-rich web application to discover delicious recipes from around the world. Search for your favorite meals, view detailed instructions, check ingredients, and watch cooking videos.",
    image: "https://i.ibb.co/W4JDQ78s/Screenshot-2026-05-06-030926.png",
    tech: ["HTML 5", "CSS 3", "JavaScript (ES6)", "Fetch API", "TheMealDB API"],
    liveUrl: "https://recipe-finder-12.netlify.app/",
    githubUrl: "https://github.com/razazaheer12/Recipe-Finder",
  },
  {
    title: "Cocktail Explorer 🍸",
    description:
      "A Premium Express + Axios + EJS modern web application using the free TheCocktailDB API to search and display cocktail recipes. Users can view detailed drink information including images, ingredients, and instructions.",
    image: "https://i.ibb.co/YBKRpzCY/Screenshot-2026-05-19-041257.png",
    tech: ["Node.js", "Express.js", "EJS", "AXIOS", "TheCocktailDB API"],
    liveUrl: "https://cocktail-explorer-psi.vercel.app/",
    githubUrl: "https://github.com/razazaheer12/Cocktail-Explorer",
  },
  {
    title: "🐍 Modern Snake Game",
    description:
      "A modern Snake Game built with HTML, CSS, and JavaScript. Control the snake with arrow keys, eat grains to grow, and score points. Now with Pause/Resume buttons, speed boosts, and sound effects.",
    image: "https://i.ibb.co/PZ4hSbHB/Screenshot-2025-09-19-012154.png",
    tech: ["HTML 5", "CSS 3", "JavaScript (ES6)"],
    liveUrl: "https://snake-game0999.netlify.app/",
    githubUrl: "https://github.com/razazaheer12/Snake-game",
  },
];

// Typing animation variants
const typingContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const typingText = {
  hidden: { opacity: 0, y: "0.25em" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Projects = () => {
  const title = "Featured Projects";
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    if (showAll) {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    setShowAll(!showAll);
  };

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-[#050816] dark:via-[#0B1126] dark:to-[#111827]"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-[-80px] h-[400px] w-[400px] rounded-full bg-blue-500/8 dark:bg-blue-500/10 blur-[150px]" />
        <div className="absolute right-[-80px] top-[100px] h-[360px] w-[360px] rounded-full bg-violet-500/8 dark:bg-violet-500/10 blur-[150px]" />
        <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 h-[320px] w-[320px] rounded-full bg-pink-500/6 dark:bg-pink-500/8 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* ── Heading ── */}
        <motion.div
          variants={typingContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white flex justify-center flex-wrap"
            style={{ fontFamily: "'Sora', Montserrat, sans-serif", letterSpacing: "-0.02em" }}
          >
            {title.split("").map((char, i) => (
              <motion.span key={i} variants={typingText} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>

          {/* Accent line */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-blue-500/40" />
            <div className="h-[3px] w-20 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-pink-500/40" />
          </div>

          <p
            className="mt-6 text-sm md:text-[0.95rem] text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-[1.8]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Here are some of my recent projects. Each one was built to solve a specific problem
            and demonstrates different aspects of my skills.
          </p>
        </motion.div>

        {/* ── Projects Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title + index}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative flex flex-col rounded-2xl overflow-hidden border border-gray-200/70 dark:border-white/[0.07] bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl shadow-sm hover:shadow-xl hover:shadow-blue-500/8 dark:hover:shadow-blue-500/10 hover:border-gray-300/80 dark:hover:border-white/[0.12] transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* ── Image ── */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-52 object-cover transition-transform duration-600 group-hover:scale-105"
                />

                {/* Gradient overlay — always subtle, full on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Action buttons — appear on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/90 dark:bg-white/10 backdrop-blur-md border border-white/30 text-gray-800 dark:text-white text-xs font-semibold hover:bg-blue-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-lg"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    <ExternalLink size={13} />
                    Live
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/90 dark:bg-white/10 backdrop-blur-md border border-white/30 text-gray-800 dark:text-white text-xs font-semibold hover:bg-violet-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-lg"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    <Github size={13} />
                    Code
                  </a>
                </div>
              </div>

              {/* ── Content ── */}
              <div className="flex flex-col flex-1 p-5">
                <h3
                  className="text-sm md:text-base font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-snug"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-[1.75] line-clamp-3"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Toggle Button — same style as Download Resume ── */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={handleToggle}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl border border-gray-300 dark:border-white/15 bg-white/80 dark:bg-white/5 backdrop-blur-sm px-7 py-4 text-gray-800 dark:text-white font-medium shadow-sm transition-all duration-500 hover:scale-105 hover:border-transparent hover:text-white hover:shadow-[0_10px_50px_rgba(168,85,247,0.4)]"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            {/* Gradient fill on hover */}
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {showAll ? (
              <>
                <ArrowUp className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                <span className="relative z-10 tracking-wide">Show Less</span>
              </>
            ) : (
              <>
                <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                <span className="relative z-10 tracking-wide">Show All Projects</span>
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;
