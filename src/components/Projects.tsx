import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Search, X, Layers, Sparkles } from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiGithub,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiSocketdotio,
  SiVercel,
  SiOpenai,
  SiPython,
} from "react-icons/fa"; // You can use react-icons or lucide-react

// ─── Interfaces ──────────────────────────────────────────────
export interface Project {
  id: number;
  title: string;
  category: "Frontend" | "Full Stack" | "AI & ML" | "Backend";
  description: string;
  longDescription: string;
  image: string;
  tags: { name: string; icon?: React.ReactNode }[];
  github: string;
  live: string;
  featured?: boolean;
  highlights: string[];
}

// ─── Projects Data ───────────────────────────────────────────
const projectsData: Project[] = [
  {
    id: 1,
    title: "Real-Time Analytics Dashboard",
    category: "Full Stack",
    description:
      "A high-performance real-time streaming analytics platform built to visualize server metrics live with WebSockets.",
    longDescription:
      "Engineered an enterprise-grade analytics platform that monitors live server health, active socket connections, and database throughput. Built with Next.js 14 Server Actions, Socket.io for low-latency bi-directional updates, and Tailwind CSS for custom dark glassmorphic charts.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tags: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
      { name: "Socket.io" },
    ],
    github: "https://github.com/razazaheer12/Real-Time-Analytics-Dashboard",
    live: "https://analytics-demo.vercel.app",
    featured: true,
    highlights: [
      "Sub-50ms latency using WebSocket streams",
      "Interactive data visualizations with Chart.js",
      "Role-based access control with JWT Auth",
    ],
  },
  {
    id: 2,
    title: "PDF RAG Chatbot",
    category: "AI & ML",
    description:
      "An intelligent document analysis assistant leveraging Pinecone vector database and LangChain for contextual Q&A.",
    longDescription:
      "Developed an end-to-end Retrieval-Augmented Generation (RAG) system that allows users to upload complex PDF files and query them using natural language. Employs OpenAI embeddings, Pinecone vector indexing, and LangChain orchestration.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    tags: [
      { name: "React" },
      { name: "LangChain" },
      { name: "Pinecone" },
      { name: "Python" },
      { name: "Tailwind CSS" },
    ],
    github: "https://github.com/razazaheer12/pdf-rag-chatbot",
    live: "https://pdf-rag-chatbot.vercel.app",
    featured: true,
    highlights: [
      "Semantic chunking for complex PDF layouts",
      "Fast vector search with Pinecone DB",
      "Streamed AI chat responses for high responsiveness",
    ],
  },
  {
    id: 3,
    title: "Sun & Moon Tracker",
    category: "Frontend",
    description:
      "Interactive sky map rendering real-time celestial coordinates, solar events, and moon phases using spatial APIs.",
    longDescription:
      "Built a sleek mobile-first sky tracking web application. Calculates sun altitudes, twilight phases, and moon illumination percentage based on browser geo-location or searched cities globally.",
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1000&auto=format&fit=crop",
    tags: [
      { name: "React" },
      { name: "Vite" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
    github: "https://github.com/razazaheer12/Sun_Moon-Tracker",
    live: "https://sun-moon-tracker.vercel.app/",
    featured: false,
    highlights: [
      "Real-time geographical coordinate calculations",
      "Dynamic day/night dark mode transitions",
      "Optimized score of 98+ on Lighthouse",
    ],
  },
  {
    id: 4,
    title: "World Capital Quiz",
    category: "Full Stack",
    description:
      "Full-stack geography quiz application featuring global leaderboards, dynamic scoring engines, and relational databases.",
    longDescription:
      "A full-stack trivia application designed to test country and capital knowledge. Features user authentication, session-based timing, global leaderboards, and full backend containerization.",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop",
    tags: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "PostgreSQL" },
      { name: "Docker" },
    ],
    github: "https://github.com/razazaheer12/World-Capital-Quiz",
    live: "https://world-capital-quiz.hf.space",
    featured: false,
    highlights: [
      "PostgreSQL relational schema design",
      "Containerized backend hosted on Hugging Face Spaces",
      "Anti-cheat timer validation",
    ],
  },
];

const categories = ["All", "Frontend", "Full Stack", "AI & ML"];

// ─── Animations ──────────────────────────────────────────────
const typingContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const typingLetter = {
  hidden: { opacity: 0, y: "0.3em" },
  visible: { opacity: 1, y: "0em", transition: { duration: 0.35 } },
};

// ─── Main Component ───────────────────────────────────────────
const Projects: React.FC = () => {
  const heading = "Featured Projects";
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects by category and search term
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-[#050816] dark:via-[#0B1126] dark:to-[#050816] transition-colors duration-500"
    >
      {/* Ambient Glows — Matched with Skills page */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-0 h-[380px] w-[380px] rounded-full bg-blue-600/10 blur-[150px]"
        />
        <motion.div
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute right-[-120px] top-10 h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-[160px]"
        />
        <div className="absolute bottom-[-180px] left-1/2 -translate-x-1/2 h-[360px] w-[360px] rounded-full bg-fuchsia-500/8 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={typingContainer}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-[#D8B4FE] to-[#A855F7] bg-clip-text text-transparent mb-4 flex justify-center text-center"
            style={{ fontFamily: "'Sora', Montserrat, sans-serif" }}
          >
            {heading.split("").map((char, i) => (
              <motion.span key={i} variants={typingLetter} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>

          {/* Gradient Divider Line — Exact matching with Skills */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-blue-500/40" />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="h-[3px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            />
            <div className="h-px w-10 bg-gradient-l from-transparent to-pink-500/40" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto mt-6 leading-[1.8]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            A curated showcase of real-time web applications, AI integration architectures, and user interfaces.
          </motion.p>
        </motion.div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Filter Pills — Matched with Skills Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2.5 w-full md:w-auto"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`relative px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 backdrop-blur-md overflow-hidden ${
                    isActive
                      ? "bg-purple-900/40 text-white border border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                      : "bg-white/[0.04] text-purple-200/80 border border-purple-500/30 hover:border-purple-500 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                  }`}
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 tracking-wide">{cat}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative w-full md:w-72"
          >
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-300/60" />
            <input
              type="text"
              placeholder="Search tech or project..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full text-xs md:text-sm bg-white/[0.04] dark:bg-white/[0.03] text-gray-800 dark:text-gray-100 placeholder-purple-300/40 border border-purple-500/30 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 backdrop-blur-md transition-all"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            />
          </motion.div>
        </div>

        {/* Projects Cards Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 text-gray-400"
            >
              <p className="text-base font-semibold">No projects match your filter criteria.</p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-xs text-purple-400 underline hover:text-purple-300"
              >
                Reset filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.06 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200/70 dark:border-white/[0.07] bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl shadow-sm hover:border-gray-300/80 dark:hover:border-white/[0.15] hover:bg-white/90 dark:hover:bg-white/[0.07] hover:shadow-2xl transition-all duration-300 ease-out"
                >
                  {/* Subtle Card Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div>
                    {/* Project Image Banner */}
                    <div className="relative h-52 w-full overflow-hidden bg-black/20 dark:bg-white/[0.02]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1126] via-transparent to-transparent opacity-80" />

                      {/* Badge Tags over Image */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-purple-950/80 text-purple-200 border border-purple-500/40 backdrop-blur-md">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                            <Sparkles className="w-3 h-3" /> Featured
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-6">
                      <h3
                        className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-300 transition-colors duration-300 mb-2"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5 line-clamp-2"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {project.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag.name}
                            className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/10 dark:bg-white/[0.04] text-purple-200/90 border border-purple-500/20"
                            style={{ fontFamily: "'Sora', sans-serif" }}
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="p-6 pt-0 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 px-4 py-2.5 rounded-xl text-xs font-semibold text-purple-200/90 bg-white/[0.04] border border-purple-500/20 hover:border-purple-500 hover:text-white hover:bg-purple-900/20 transition-all"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      Details & Highlights
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl text-purple-200/80 bg-white/[0.04] border border-purple-500/30 hover:border-purple-500 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
                      title="View Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-purple-900/40 text-white border border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      <span>Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal Popup for Project Details */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-purple-500/40 bg-[#0B1126] text-white p-6 md:p-8 shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="mb-4">
                  <span className="text-xs uppercase tracking-widest font-semibold text-purple-400">
                    {selectedProject.category}
                  </span>
                  <h3
                    className="text-2xl font-bold mt-1 text-white"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {selectedProject.title}
                  </h3>
                </div>

                <p
                  className="text-sm text-gray-300 leading-relaxed mb-6"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {selectedProject.longDescription}
                </p>

                {/* Key Features Bullet List */}
                <div className="mb-6">
                  <h4
                    className="text-xs uppercase tracking-wider font-semibold text-purple-300 mb-3"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    Key Architecture Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span
                      key={t.name}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-purple-900/40 text-purple-200 border border-purple-500/30"
                    >
                      {t.name}
                    </span>
                  ))}
                </div>

                {/* Footer Buttons */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold bg-white/[0.05] border border-purple-500/30 hover:border-purple-500 hover:text-white transition-all"
                  >
                    <Github className="w-4 h-4" /> View GitHub Repo
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold bg-purple-900/50 border border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all"
                  >
                    <ExternalLink className="w-4 h-4" /> Launch Demo
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;
