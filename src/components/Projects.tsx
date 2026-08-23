import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  FolderGit2,
  Github,
  Layers3,
  Sparkles,
  Star,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  badge?: string;
  badgeColor?: string;
  projectType?: string;
  focus?: string;
  highlights?: string[];
};

// ─────────────────────────────────────────────────────────────
// Projects Data
// ─────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    title: "Real-Time Analytics Dashboard",
    description:
      "A production-grade, RBAC analytics dashboard that streams live business metrics via WebSockets. Features role-scoped data visualization (Admin/Analyst/Viewer), dynamic filtering, and admin-only CSV/PDF export — built with a fully type-safe TypeScript stack.",
    image:
      "https://github.com/user-attachments/assets/27b90ee2-7411-4750-b63b-0c150d486f8e",
    tech: [
      "Next.js 16",
      "NestJS",
      "TypeScript",
      "Socket.io",
      "Prisma",
      "Supabase",
      "Recharts",
      "Zustand",
      "JWT",
      "Tailwind CSS",
    ],
    githubUrl:
      "https://github.com/razazaheer12/Real-Time-Analytics-Dashboard",
    featured: true,
    badge: "Enterprise",
    badgeColor: "from-emerald-500 to-teal-400",
    projectType: "Production Dashboard",
    focus: "Real-time analytics & RBAC",
    highlights: ["Live metrics", "Role-based access", "Data export"],
  },
  {
    title: "PDF RAG Chatbot",
    description:
      "An intelligent chatbot that lets you upload any PDF and have a real conversation with it — powered by RAG (Retrieval-Augmented Generation), Pinecone Vector DB, and Google Gemma AI.",
    image:
      "https://i.ibb.co/pB4tTTp5/Gemini-Generated-Image-e637dde637dde637.png",
    tech: [
      "Next.JS",
      "TypeScript",
      "Pinecone",
      "LangChain",
      "RAG",
      "LLM Integration",
      "Shadcn",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/razazaheer12/Pdf-RAG-Chatbot",
    featured: true,
    badge: "AI Project",
    badgeColor: "from-purple-500 to-pink-500",
    projectType: "AI Application",
    focus: "Document intelligence & RAG",
    highlights: ["PDF conversations", "Vector search", "LLM integration"],
  },
  {
    title: "Real-Time Chat App",
    description:
      "Production-ready messaging platform with topic-based chat rooms, private DMs, real-time online presence, and profile customization. Built with MERN stack and Socket.io for instant bidirectional communication.",
    image:
      "https://i.ibb.co/sJ5V7yL8/Gemini-Generated-Image-sk1pkdsk1pkdsk1p.png",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Zustand",
      "Cloudinary",
      "Tailwind CSS",
    ],
    liveUrl: "https://real-time-chat-app-pi-lake.vercel.app",
    githubUrl: "https://github.com/razazaheer12/Real-Time-Chat_App",
    featured: true,
    badge: "Full-Stack",
    badgeColor: "from-blue-500 to-cyan-400",
    projectType: "Full-Stack Application",
    focus: "Real-time communication",
    highlights: ["Live messaging", "Private DMs", "Online presence"],
  },
  {
    title: "Quizlett - MCQ Platform",
    description:
      "Modern interactive quiz app with Math, Programming, and General Knowledge sections. Features instant feedback, progress tracking, achievements, and dark/light theme.",
    image:
      "https://i.ibb.co/hRH5F9Zk/Gemini-Generated-Image-odfpbtodfpbtodfp.png",
    tech: ["Next.JS", "TypeScript", "Tailwind CSS", "Shadcn-ui"],
    liveUrl: "https://advanced-mcq-quiz.vercel.app/",
    githubUrl:
      "https://github.com/razazaheer12/Quizlett--advanced-mcq-quiz",
  },
  {
    title: "WeatherFlow NextGen",
    description:
      "Cutting-edge weather application with real-time insights, interactive forecasts, and seamless offline capabilities built with modern web technologies.",
    image:
      "https://i.ibb.co/VWGvfcth/Gemini-Generated-Image-7i62xc7i62xc7i62.png",
    tech: [
      "Next.js",
      "TypeScript",
      "OpenWeather API",
      "Chart.js",
      "Tailwind CSS",
    ],
    liveUrl: "https://advance-weather-app-next-gen.vercel.app/",
    githubUrl:
      "https://github.com/razazaheer12/Advance_Weather_App-Next_Gen",
  },
  {
    title: "Sun & Moon Tracker",
    description:
      "High-precision interactive app visualizing real-time positions of the sun and moon with timezone-aware world time windows.",
    image:
      "https://i.ibb.co/ym34jL7c/Screenshot-2026-05-06-234111.png",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Date-fns"],
    liveUrl: "https://sun-moon-tracker-a27p.vercel.app/",
    githubUrl: "https://github.com/razazaheer12/Sun_Moon-Tracker",
  },
  {
    title: "MyPDF - Free PDF Toolkit",
    description:
      "Fast and secure PDF-to-Word converter with drag-and-drop uploads, real-time progress tracking, and download history management.",
    image:
      "https://i.ibb.co/hJ6ZgTz4/Screenshot-2025-09-24-041724.png",
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
    image:
      "https://i.ibb.co/YBKRpzCY/Screenshot-2026-05-19-041257.png",
    tech: ["Node.js", "Express.js", "EJS", "AXIOS", "TheCocktailDB API"],
    liveUrl: "https://cocktail-explorer-psi.vercel.app/",
    githubUrl: "https://github.com/razazaheer12/Cocktail-Explorer",
  },
  {
    title: "Neural Canvas - AI Art Studio",
    description:
      "AI-powered art style studio that transforms photos into stunning masterpieces using sophisticated AI-inspired filters and real-time adjustments.",
    image:
      "https://i.ibb.co/QhzDFNC/Screenshot-2026-05-07-000415.png",
    tech: ["JavaScript", "CSS3", "HTML5"],
    liveUrl: "https://canvas-photoeditor-ai.netlify.app/",
    githubUrl:
      "https://github.com/razazaheer12/Neural-Canvas--AI-Art-Style-Transfer-Studio",
  },
  {
    title: "Modern Snake Game",
    description:
      "Classic Snake Game reimagined with pause/resume, speed boosts, sound effects, and a clean modern UI. Built with vanilla JS.",
    image:
      "https://i.ibb.co/PZ4hSbHB/Screenshot-2025-09-19-012154.png",
    tech: ["HTML5", "CSS3", "JavaScript ES6"],
    liveUrl: "https://snake-game0999.netlify.app/",
    githubUrl: "https://github.com/razazaheer12/Snake-game",
  },
];

// ─────────────────────────────────────────────────────────────
// Animation Variants
// ─────────────────────────────────────────────────────────────

const typingContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const typingText = {
  hidden: { opacity: 0, y: "0.25em" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// ─────────────────────────────────────────────────────────────
// Featured Spotlight Card (Optimized with Memo)
// ─────────────────────────────────────────────────────────────

const SpotlightCard = React.memo(
  ({
    project,
    direction,
    projectNumber,
  }: {
    project: Project;
    direction: number;
    projectNumber: number;
  }) => (
    <motion.div
      key={project.title}
      custom={direction}
      initial={{ opacity: 0, x: direction > 0 ? 70 : -70, scale: 0.985 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: direction > 0 ? -70 : 70, scale: 0.985 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-gray-200/70 bg-white/75 shadow-xl shadow-gray-900/[0.03] backdrop-blur-xl transition-all duration-500 dark:border-white/[0.08] dark:bg-white/[0.035] dark:shadow-black/20 lg:flex-row"
    >
      <div className="relative h-64 shrink-0 overflow-hidden bg-[#050816] sm:h-80 lg:h-auto lg:min-h-[390px] lg:w-[55%]">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-contain object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-70" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/25" />
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.10] to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

        <div className="absolute left-5 top-5 z-10">
          <span
            className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/40 bg-purple-600 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.8px] text-white shadow-[0_0_20px_rgba(168,85,247,0.30)]"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            <Star size={10} fill="currentColor" aria-hidden="true" />
            {project.badge}
          </span>
        </div>

        <div className="absolute bottom-5 left-5 z-10">
          <span
            className="text-[11px] font-semibold uppercase tracking-[2px] text-white/65"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Project {String(projectNumber).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col justify-between p-6 sm:p-7 lg:p-8 xl:p-9">
        <div className="pointer-events-none absolute inset-0 rounded-r-[1.75rem] bg-gradient-to-br from-blue-500/[0.04] via-purple-500/[0.05] to-pink-500/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span
                className="text-[10px] font-bold uppercase tracking-[1.8px] text-blue-600 dark:text-blue-400"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {project.projectType}
              </span>
              <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-white/20" />
              <span
                className="text-[10px] font-medium uppercase tracking-[1.2px] text-gray-400 dark:text-gray-500"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Featured
              </span>
            </div>

            <span
              className="hidden text-[11px] font-medium text-gray-400 dark:text-gray-500 sm:block"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {String(projectNumber).padStart(2, "0")} / 03
            </span>
          </div>

          <div className="mb-4">
            <h3
              className="max-w-2xl text-2xl font-bold leading-tight tracking-[-0.025em] text-gray-950 transition-colors duration-300 group-hover:text-blue-600 sm:text-3xl dark:text-white dark:group-hover:text-blue-400"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {project.title}
            </h3>
            <p
              className="mt-2 text-xs font-medium text-gray-400 dark:text-gray-500"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {project.focus}
            </p>
          </div>

          <p
            className="max-w-xl text-sm leading-[1.8] text-gray-500 dark:text-gray-400"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {project.description}
          </p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                  <span className="text-[11px] font-medium text-gray-600 dark:text-gray-300">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="my-6 h-px w-full bg-gray-200/80 dark:bg-white/[0.07]" />

          <div>
            <div className="mb-2.5 flex items-center gap-2">
              <Code2
                size={13}
                className="text-gray-400 dark:text-gray-500"
                aria-hidden="true"
              />
              <span
                className="text-[10px] font-bold uppercase tracking-[1.8px] text-gray-400 dark:text-gray-500"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Built with
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.tech.slice(0, 7).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-purple-500/15 bg-purple-500/10 px-2.5 py-1 text-[10px] font-semibold text-purple-600 dark:text-purple-300"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 7 && (
                <span
                  className="rounded-full border border-dashed border-gray-200 bg-gray-50 px-2.5 py-1 text-[10px] font-semibold text-gray-400 dark:border-white/[0.08] dark:bg-white/[0.035] dark:text-gray-500"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  +{project.tech.length - 7} more
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-7 flex flex-wrap items-center gap-2.5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta inline-flex items-center gap-2 rounded-xl border border-purple-500 bg-purple-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-purple-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-700 hover:shadow-xl hover:shadow-purple-600/25"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              <ExternalLink size={13} aria-hidden="true" />
              View Live
              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover/cta:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-purple-900/70 bg-[#0b0a1d]/80 px-4 py-2.5 text-xs font-bold text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-500 hover:bg-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-600/15"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            <Github size={13} aria-hidden="true" />
            View Code
          </a>
        </div>
      </div>
    </motion.div>
  )
);

SpotlightCard.displayName = "SpotlightCard";

// ─────────────────────────────────────────────────────────────
// Regular Project Card (Optimized with Memo)
// ─────────────────────────────────────────────────────────────

const ProjectCard = React.memo(
  ({ project, index }: { project: Project; index: number }) => (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/70 bg-white/75 shadow-sm backdrop-blur-xl transition-all duration-500 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/[0.08] dark:border-white/[0.07] dark:bg-white/[0.03] dark:hover:border-purple-500/30 dark:hover:shadow-purple-500/[0.09]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#050816]">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-center gap-2.5 px-4 pb-4 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-purple-300/60 bg-white/95 px-3.5 py-2 text-[11px] font-bold text-gray-800 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-purple-500 hover:bg-purple-600 hover:text-white dark:bg-black/50 dark:text-white dark:hover:bg-purple-600"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              <ExternalLink size={12} aria-hidden="true" />
              Live
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-purple-900/70 bg-[#0b0a1d]/90 px-3.5 py-2 text-[11px] font-bold text-gray-200 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-purple-500 hover:bg-purple-600 hover:text-white"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            <Github size={12} aria-hidden="true" />
            Code
          </a>
        </div>

        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.1] to-transparent transition-transform duration-800 group-hover:translate-x-full" />
      </div>

      <div className="relative flex flex-1 flex-col p-5">
        <div className="pointer-events-none absolute inset-0 rounded-b-2xl bg-gradient-to-br from-blue-500/[0.035] via-purple-500/[0.04] to-pink-500/[0.035] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative">
          <div className="mb-2 flex items-start justify-between gap-3">
            <h3
              className="text-sm font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-purple-600 sm:text-base dark:text-white dark:group-hover:text-purple-400"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {project.title}
            </h3>

            <ArrowUp
              size={14}
              className="mt-0.5 shrink-0 rotate-45 text-gray-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-500 dark:text-gray-600 dark:group-hover:text-purple-400"
              aria-hidden="true"
            />
          </div>

          <p
            className="mb-5 line-clamp-3 text-xs leading-[1.75] text-gray-500 dark:text-gray-400"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {project.description}
          </p>
        </div>

        <div className="relative mt-auto">
          <div className="mb-4 h-px w-full bg-gray-200/70 dark:bg-white/[0.06]" />

          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-purple-500/15 bg-purple-500/10 px-2.5 py-1 text-[10px] font-semibold text-purple-600 dark:text-purple-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {tech}
              </span>
            ))}

            {project.tech.length > 5 && (
              <span
                className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[10px] font-semibold text-gray-400 dark:border-white/[0.07] dark:bg-white/[0.025] dark:text-gray-500"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                +{project.tech.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
);

ProjectCard.displayName = "ProjectCard";

// ─────────────────────────────────────────────────────────────
// Main Projects Component
// ─────────────────────────────────────────────────────────────

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  const visibleRegularProjects = showAll
    ? regularProjects
    : regularProjects.slice(0, 3);

  const activeProject = featuredProjects[activeIndex] ?? featuredProjects[0];

  const goTo = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const previousProject = () => {
    const nextIndex =
      (activeIndex - 1 + featuredProjects.length) % featuredProjects.length;
    setDirection(-1);
    setActiveIndex(nextIndex);
  };

  const nextProject = () => {
    const nextIndex = (activeIndex + 1) % featuredProjects.length;
    setDirection(1);
    setActiveIndex(nextIndex);
  };

  const handleShowAllToggle = () => {
    if (showAll) {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setShowAll((current) => !current);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 transition-colors duration-500 dark:from-[#050816] dark:via-[#0B1126] dark:to-[#050816]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[150px]"
        />

        <motion.div
          animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute right-[-100px] top-[120px] h-[380px] w-[380px] rounded-full bg-violet-500/10 blur-[150px]"
        />

        <div className="absolute bottom-[-150px] left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-pink-500/[0.06] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.018] dark:opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={typingContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#A855F7]/40 bg-[#A855F7]/10 px-4 py-1.5 shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-md"
          >
            <FolderGit2 className="h-3.5 w-3.5 text-[#A855F7]" aria-hidden="true" />
            <span
              className="text-xs font-bold uppercase tracking-[2.5px] text-white"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Portfolio
            </span>
          </motion.div>

          <motion.h2
            variants={typingText}
            className="flex flex-wrap justify-center gap-x-3 text-4xl font-bold tracking-[-0.025em] sm:text-5xl"
            style={{ fontFamily: "'Sora', Montserrat, sans-serif" }}
          >
            <span className="text-gray-900 dark:text-white">Featured</span>
            <span className="bg-gradient-to-r from-[#A855F7] to-[#F472FF] bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-blue-500/40" />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="h-[3px] rounded-full bg-gradient-to-r from-blue-500 via-[#A855F7] to-[#F472FF]"
            />
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#F472FF]/40" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-[1.8] text-gray-500 md:text-[0.95rem] dark:text-gray-400"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            From AI-integrated backends to pixel-perfect frontends — each project was built to solve a real problem and ship to production.
          </motion.p>
        </motion.div>

        <div className="mb-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300/50 to-transparent dark:via-white/10" />
          <span
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-[10px] font-bold uppercase tracking-[2.5px] text-gray-400 dark:text-gray-500"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            <Sparkles size={11} className="text-yellow-400" fill="currentColor" aria-hidden="true" />
            Selected Work
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300/50 to-transparent dark:via-white/10" />
        </div>

        <div className="mb-5">
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              {activeProject && (
                <SpotlightCard
                  key={activeProject.title}
                  project={activeProject}
                  direction={direction}
                  projectNumber={activeIndex + 1}
                />
              )}
            </AnimatePresence>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <motion.button
              type="button"
              onClick={previousProject}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              aria-label="View previous featured project"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-900/70 bg-[#0b0a1d]/80 text-purple-300 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-purple-500 hover:bg-purple-600 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.20)] dark:border-purple-900/70 dark:bg-[#0b0a1d]/80 dark:text-purple-300 dark:hover:border-purple-500 dark:hover:bg-purple-600 dark:hover:text-white"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </motion.button>

            <div className="scrollbar-none flex items-center gap-2 overflow-x-auto px-1 sm:gap-3">
              {featuredProjects.map((project, index) => {
                const isActive = index === activeIndex;
                return (
                  <motion.button
                    type="button"
                    key={project.title}
                    onClick={() => goTo(index)}
                    whileHover={{ scale: 1.025 }}
                    whileTap={{ scale: 0.97 }}
                    aria-label={`View ${project.title}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`
                      group relative flex shrink-0 items-center gap-2
                      overflow-hidden rounded-xl border px-3 py-2.5
                      transition-all duration-300 sm:px-4
                      ${
                        isActive
                          ? "border-purple-500 bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.22)]"
                          : "border-purple-900/70 bg-[#0b0a1d]/80 text-gray-400 hover:border-purple-500 hover:bg-purple-600 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.20)] dark:border-purple-900/70 dark:bg-[#0b0a1d]/80 dark:text-gray-400 dark:hover:border-purple-500 dark:hover:bg-purple-600 dark:hover:text-white"
                      }
                    `}
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    <span
                      className={`relative text-[9px] font-bold ${
                        isActive
                          ? "text-white/80"
                          : "text-purple-300 group-hover:text-white"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span className="relative hidden whitespace-nowrap text-[10px] font-semibold sm:block">
                      {project.badge}
                    </span>
                    <span className="relative block h-1.5 w-1.5 rounded-full bg-current sm:hidden" />
                  </motion.button>
                );
              })}
            </div>

            <motion.button
              type="button"
              onClick={nextProject}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              aria-label="View next featured project"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-900/70 bg-[#0b0a1d]/80 text-purple-300 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-purple-500 hover:bg-purple-600 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.20)] dark:border-purple-900/70 dark:bg-[#0b0a1d]/80 dark:text-purple-300 dark:hover:border-purple-500 dark:hover:bg-purple-600 dark:hover:text-white"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </motion.button>
          </div>
        </div>

        <div className="mb-6 mt-14 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300/50 to-transparent dark:via-white/10" />
          <div className="inline-flex items-center gap-2 whitespace-nowrap">
            <Layers3 size={11} className="text-gray-400 dark:text-gray-500" aria-hidden="true" />
            <span
              className="text-[10px] font-bold uppercase tracking-[2.5px] text-gray-400 dark:text-gray-500"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              More Projects
            </span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300/50 to-transparent dark:via-white/10" />
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
          >
            {visibleRegularProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {regularProjects.length > 3 && (
          <div className="mt-14 flex justify-center">
            <motion.button
              type="button"
              onClick={handleShowAllToggle}
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.975 }}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl border border-purple-900/70 bg-[#0b0a1d]/80 px-7 py-3.5 font-medium text-gray-200 shadow-sm backdrop-blur-sm transition-all duration-500 hover:border-purple-500 hover:text-white hover:shadow-[0_10px_50px_rgba(168,85,247,0.25)] dark:border-purple-900/70 dark:bg-[#0b0a1d]/80 dark:text-gray-200"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              <span className="absolute inset-0 rounded-2xl bg-purple-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {showAll ? (
                <>
                  <ArrowUp className="relative z-10 h-4.5 w-4.5 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
                  <span className="relative z-10 text-xs tracking-wide">Show Less</span>
                </>
              ) : (
                <>
                  <span className="relative z-10 text-xs tracking-wide">Explore All Projects</span>
                  <ArrowRight className="relative z-10 h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
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
