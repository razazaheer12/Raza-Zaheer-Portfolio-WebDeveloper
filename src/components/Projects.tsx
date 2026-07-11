import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight, ArrowUp, Star } from "lucide-react";

const projects = [
  {
    title: "PDF RAG Chatbot",
    description:
      "An intelligent chatbot that lets you upload any PDF and have a real conversation with it — powered by RAG (Retrieval-Augmented Generation), Pinecone Vector DB, and Google Gemma AI.",
    image: "https://i.ibb.co/pB4tTTp5/Gemini-Generated-Image-e637dde637dde637.png",
    tech: ["Next.JS", "TypeScript", "Pinecone", "LangChain", "RAG", "LLM Integration", "Shadcn", "Tailwind CSS"],
    githubUrl: "https://github.com/razazaheer12/Pdf-RAG-Chatbot",
    featured: true,
    badge: "AI Project",
    badgeColor: "from-purple-500 to-pink-500",
  },
  {
    title: "Real-Time Chat App",
    description:
      "Production-ready messaging platform with topic-based chat rooms, private DMs, real-time online presence, and profile customization. Built with MERN stack and Socket.io for instant bidirectional communication.",
    image: "https://i.ibb.co/sJ5V7yL8/Gemini-Generated-Image-sk1pkdsk1pkdsk1p.png",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT", "Zustand", "Cloudinary", "Tailwind CSS"],
    liveUrl: "https://real-time-chat-app-pi-lake.vercel.app",
    githubUrl: "https://github.com/razazaheer12/Real-Time-Chat_App",
    featured: true,
    badge: "Full-Stack",
    badgeColor: "from-blue-500 to-cyan-400",
  },
  {
    title: "Quizlett - MCQ Platform",
    description:
      "Modern interactive quiz app with Math, Programming, and General Knowledge sections. Features instant feedback, progress tracking, achievements, and dark/light theme.",
    image: "https://i.ibb.co/hRH5F9Zk/Gemini-Generated-Image-odfpbtodfpbtodfp.png",
    tech: ["Next.JS", "TypeScript", "Tailwind CSS", "Shadcn-ui"],
    liveUrl: "https://advanced-mcq-quiz.vercel.app/",
    githubUrl: "https://github.com/razazaheer12/Quizlett--advanced-mcq-quiz",
  },
  {
    title: "WeatherFlow NextGen",
    description:
      "Cutting-edge weather application with real-time insights, interactive forecasts, and seamless offline capabilities built with modern web technologies.",
    image: "https://i.ibb.co/VWGvfcth/Gemini-Generated-Image-7i62xc7i62xc7i62.png",
    tech: ["Next.js", "TypeScript", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    liveUrl: "https://advance-weather-app-next-gen.vercel.app/",
    githubUrl: "https://github.com/razazaheer12/Advance_Weather_App-Next_Gen",
  },
  {
    title: "Sun & Moon Tracker",
    description:
      "High-precision interactive app visualizing real-time positions of the sun and moon with timezone-aware world time windows.",
    image: "https://i.ibb.co/ym34jL7c/Screenshot-2026-05-06-234111.png",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Date-fns"],
    liveUrl: "https://sun-moon-tracker-a27p.vercel.app/",
    githubUrl: "https://github.com/razazaheer12/Sun_Moon-Tracker",
  },
  {
    title: "MyPDF - Free PDF Toolkit",
    description:
      "Fast and secure PDF-to-Word converter with drag-and-drop uploads, real-time progress tracking, and download history management.",
    image: "https://i.ibb.co/hJ6ZgTz4/Screenshot-2025-09-24-041724.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://mypdf-converter.vercel.app/",
    githubUrl: "https://github.com/razazaheer12/MyPDF_converter",
  },
  {
    title: "Recipe Finder",
    description:
      "Feature-rich app to discover recipes worldwide. Search meals, view detailed instructions, check ingredients, and watch cooking videos.",
    image: "https://i.ibb.co/W4JDQ78s/Screenshot-2026-05-06-030926.png",
    tech: ["HTML5", "CSS3", "JavaScript ES6", "TheMealDB API"],
    liveUrl: "https://recipe-finder-12.netlify.app/",
    githubUrl: "https://github.com/razazaheer12/Recipe-Finder",
  },
  {
    title: "Cocktail Explorer",
    description:
      "Premium Express + EJS web app using TheCocktailDB API to search and display cocktail recipes with ingredients and instructions.",
    image: "https://i.ibb.co/YBKRpzCY/Screenshot-2026-05-19-041257.png",
    tech: ["Node.js", "Express.js", "EJS", "AXIOS", "TheCocktailDB API"],
    liveUrl: "https://cocktail-explorer-psi.vercel.app/",
    githubUrl: "https://github.com/razazaheer12/Cocktail-Explorer",
  },
  {
    title: "Neural Canvas - AI Art Studio",
    description:
      "AI-powered art style studio that transforms photos into stunning masterpieces using sophisticated AI-inspired filters and real-time adjustments.",
    image: "https://i.ibb.co/QhzDFNC/Screenshot-2026-05-07-000415.png",
    tech: ["JavaScript", "CSS3", "HTML5"],
    liveUrl: "https://canvas-photoeditor-ai.netlify.app/",
    githubUrl: "https://github.com/razazaheer12/Neural-Canvas--AI-Art-Style-Transfer-Studio",
  },
  {
    title: "Modern Snake Game",
    description:
      "Classic Snake Game reimagined with pause/resume, speed boosts, sound effects, and a clean modern UI. Built with vanilla JS.",
    image: "https://i.ibb.co/PZ4hSbHB/Screenshot-2025-09-19-012154.png",
    tech: ["HTML5", "CSS3", "JavaScript ES6"],
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

// ── Featured Card (large, top 2 projects) ─────────────────────
const FeaturedCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, x: index === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    transition={{ duration: 0.65, delay: 0.1 * index, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="group relative flex flex-col rounded-3xl overflow-hidden border border-gray-200/70 dark:border-white/[0.08] bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl shadow-md hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-purple-500/10 hover:border-purple-300/40 dark:hover:border-white/[0.15] transition-all duration-500"
  >
    {/* Image */}
    <div className="relative overflow-hidden h-56 sm:h-64">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-400" />

      {/* Featured badge */}
      <div className="absolute top-4 left-4">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-white bg-gradient-to-r ${project.badgeColor} shadow-lg`}
          style={{ fontFamily: "'Sora', sans-serif" }}>
          <Star size={10} fill="white" />
          {project.badge}
        </span>
      </div>

      {/* Action buttons */}
      <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-white/15 backdrop-blur-md text-gray-800 dark:text-white text-xs font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg"
            style={{ fontFamily: "'Sora', sans-serif" }}>
            <ExternalLink size={12} /> Live
          </a>
        )}
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-white/15 backdrop-blur-md text-gray-800 dark:text-white text-xs font-semibold hover:bg-violet-600 hover:text-white transition-all duration-300 shadow-lg"
          style={{ fontFamily: "'Sora', sans-serif" }}>
          <Github size={12} /> Code
        </a>
      </div>

      {/* Sheen sweep */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 p-6">
      {/* Hover gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

      <h3
        className="relative text-lg font-bold mb-2.5 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-snug"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        {project.title}
      </h3>
      <p
        className="relative text-sm text-gray-500 dark:text-gray-400 mb-5 leading-[1.8] line-clamp-3"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="relative flex flex-wrap gap-1.5 mt-auto">
        {project.tech.map((tech) => (
          <motion.span
            key={tech}
            whileHover={{ scale: 1.08, y: -1 }}
            className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 hover:bg-purple-50 dark:hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-200 dark:hover:border-purple-500/20 transition-all duration-300 cursor-default"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

// ── Regular Card ──────────────────────────────────────────────
const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    className="group relative flex flex-col rounded-2xl overflow-hidden border border-gray-200/70 dark:border-white/[0.07] bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl shadow-sm hover:shadow-xl hover:shadow-blue-500/8 dark:hover:shadow-purple-500/8 hover:border-gray-300/80 dark:hover:border-white/[0.12] transition-all duration-500"
  >
    {/* Image */}
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-600 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Action buttons */}
      <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-400">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/90 dark:bg-white/10 backdrop-blur-md border border-white/30 text-gray-800 dark:text-white text-xs font-semibold hover:bg-blue-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-lg"
            style={{ fontFamily: "'Sora', sans-serif" }}>
            <ExternalLink size={13} /> Live
          </a>
        )}
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/90 dark:bg-white/10 backdrop-blur-md border border-white/30 text-gray-800 dark:text-white text-xs font-semibold hover:bg-violet-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-lg"
          style={{ fontFamily: "'Sora', sans-serif" }}>
          <Github size={13} /> Code
        </a>
      </div>

      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 p-5">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      <h3
        className="relative text-sm md:text-base font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-snug"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        {project.title}
      </h3>
      <p
        className="relative text-xs text-gray-500 dark:text-gray-400 mb-4 leading-[1.75] line-clamp-3"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {project.description}
      </p>

      <div className="relative flex flex-wrap gap-1.5 mt-auto">
        {project.tech.map((tech) => (
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
);

// ── Main Component ─────────────────────────────────────────────
const Projects = () => {
  const title = "Featured Projects";
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);
  const visibleRegular = showAll ? regularProjects : regularProjects.slice(0, 3);

  const handleToggle = () => {
    if (showAll) sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowAll(!showAll);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-[#050816] dark:via-[#0B1126] dark:to-[#111827]"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 left-[-80px] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[150px]"
        />
        <motion.div
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute right-[-80px] top-[100px] h-[360px] w-[360px] rounded-full bg-violet-500/10 blur-[150px]"
        />
        <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 h-[320px] w-[320px] rounded-full bg-pink-500/8 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Heading */}
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

          {/* Accent line — animated draw-in */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-blue-500/40" />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="h-[3px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            />
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-pink-500/40" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 text-sm md:text-[0.95rem] text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-[1.8]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            From AI-integrated backends to pixel-perfect frontends — each project
            was built to solve a real problem and ship to production.
          </motion.p>
        </motion.div>

        {/* Featured projects label */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300/50 dark:via-white/10 to-transparent" />
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[2.5px] text-gray-400 dark:text-gray-500 font-semibold whitespace-nowrap"
            style={{ fontFamily: "'Sora', sans-serif" }}>
            <Star size={11} className="text-yellow-400" fill="currentColor" />
            Hero Projects
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300/50 dark:via-white/10 to-transparent" />
        </div>

        {/* Featured 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
          {featuredProjects.map((project, i) => (
            <FeaturedCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* More projects label */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300/50 dark:via-white/10 to-transparent" />
          <span className="text-xs uppercase tracking-[2.5px] text-gray-400 dark:text-gray-500 font-semibold whitespace-nowrap"
            style={{ fontFamily: "'Sora', sans-serif" }}>
            More Projects
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300/50 dark:via-white/10 to-transparent" />
        </div>

        {/* Regular projects 3-column grid */}
        <AnimatePresence>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {visibleRegular.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </AnimatePresence>

        {/* Toggle Button */}
        {regularProjects.length > 4 && (
          <div className="mt-14 flex justify-center">
            <motion.button
              onClick={handleToggle}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl border border-gray-300 dark:border-white/15 bg-white/80 dark:bg-white/5 backdrop-blur-sm px-7 py-4 text-gray-800 dark:text-white font-medium shadow-sm transition-all duration-500 hover:border-transparent hover:text-white hover:shadow-[0_10px_50px_rgba(168,85,247,0.4)]"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
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
            </motion.button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
