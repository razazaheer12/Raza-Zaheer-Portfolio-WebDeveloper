import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Database, Compass } from "lucide-react";
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
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiSocketdotio,
  SiNestjs,
  SiVercel,
  SiNetlify,
  SiGit,
  SiOpenai,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const navbarPurpleGradient = "linear-gradient(90deg, #c084fc 0%, #a855f7 50%, #9333ea 100%)";

// ─── Skills Data ──────────────────────────────────────────────
const allSkills = {
  Frontend: [
    { name: "HTML5",        icon: <SiHtml5 />,       color: "text-orange-500" },
    { name: "CSS3",         icon: <SiCss3 />,        color: "text-blue-500" },
    { name: "JavaScript",   icon: <SiJavascript />,  color: "text-yellow-400" },
    { name: "TypeScript",   icon: <SiTypescript />,  color: "text-blue-600" },
    { name: "React.js",     icon: <SiReact />,       color: "text-sky-400" },
    { name: "Next.js",      icon: <SiNextdotjs />,   color: "text-white" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
    { name: "Figma",        icon: <SiFigma />,       color: "text-pink-500" },
  ],
  "Backend & DB": [
    { name: "Node.js",    icon: <SiNodedotjs />,  color: "text-green-500" },
    { name: "Express.js", icon: <SiExpress />,    color: "text-gray-300" },
    { name: "NestJS",     icon: <SiNestjs />,     color: "text-red-500" },
    { name: "MongoDB",    icon: <SiMongodb />,    color: "text-green-600" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-sky-600" },
    { name: "Docker",     icon: <SiDocker />,     color: "text-blue-400" },
  ],
  "Real-Time & AI": [
    { name: "Socket.io", icon: <SiSocketdotio />, color: "text-white" },
    { name: "LangChain", icon: <SiOpenai />,      color: "text-green-400" },
    { name: "Pinecone",  icon: <SiOpenai />,      color: "text-teal-400" },
    { name: "JWT Auth",  icon: <ShieldCheck className="w-full h-full" />, color: "text-yellow-500" },
    { name: "RAG Pipelines", icon: <Database className="w-full h-full" />, color: "text-purple-400" },
  ],
  Tools: [
    { name: "Git",     icon: <SiGit />,    color: "text-orange-600" },
    { name: "GitHub",  icon: <SiGithub />, color: "text-white" },
    { name: "VS Code", icon: <VscCode />,  color: "text-blue-500" },
    { name: "Vercel",  icon: <SiVercel />, color: "text-white" },
    { name: "Netlify", icon: <SiNetlify />,color: "text-teal-500" },
  ],
};

const categories = Object.keys(allSkills) as (keyof typeof allSkills)[];
const allFlat = Object.values(allSkills).flat();
const row1 = allFlat.slice(0, Math.ceil(allFlat.length / 2));
const row2 = allFlat.slice(Math.ceil(allFlat.length / 2));

// ─── Skill Card (for grid) ────────────────────────────────────
const SkillCard = ({ skill, index }: { skill: (typeof allFlat)[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay: 0.05 * index }}
    viewport={{ once: true }}
    whileHover={{ y: -5, scale: 1.04 }}
    className="group relative flex flex-col items-center justify-center gap-3 px-5 py-6 rounded-2xl cursor-default select-none border border-purple-900/50 bg-[#0b0a1d]/80 backdrop-blur-xl shadow-sm hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] transition-all duration-300 ease-out"
  >
    <div className={`relative text-[2.4rem] md:text-[2.8rem] ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
      {skill.icon}
    </div>

    <p
      className="relative text-[11px] md:text-xs font-semibold tracking-wide text-gray-300 group-hover:text-white transition-colors duration-300 uppercase text-center"
      style={{ fontFamily: "'Sora', sans-serif" }}
    >
      {skill.name}
    </p>
  </motion.div>
);

// ─── Marquee Row ──────────────────────────────────────────────
const MarqueeRow = ({ items, reverse = false, duration = 28 }: {
  items: (typeof allFlat)[0][];
  reverse?: boolean;
  duration?: number;
}) => {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="flex gap-4 md:gap-5 whitespace-nowrap">
      <motion.div
        className="flex gap-4 md:gap-5"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration, ease: "linear" }}
        style={{ willChange: "transform" }}
      >
        {doubled.map((skill, i) => (
          <div
            key={`${reverse ? "r" : "f"}-${i}`}
            className="group relative flex flex-col items-center justify-center gap-3 min-w-[130px] md:min-w-[150px] px-5 py-5 rounded-2xl cursor-default select-none border border-purple-900/50 bg-[#0b0a1d]/80 backdrop-blur-xl shadow-sm hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:-translate-y-1.5 transition-all duration-300 ease-out"
          >
            <div className={`text-[2.2rem] md:text-[2.6rem] ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
              {skill.icon}
            </div>
            <p
              className="text-[11px] md:text-xs font-semibold tracking-wide text-gray-300 group-hover:text-white transition-colors duration-300 uppercase"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {skill.name}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────
const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 transition-colors duration-500"
      style={{ background: "#050816" }}
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            top: 0,
            left: -100,
            background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 550,
            height: 550,
            top: "30%",
            right: -100,
            background: "radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* SECTION HEADING */}
        <div className="mb-12 md:mb-16 flex flex-col items-center text-center justify-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-7"
          >
            <div
              className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/20 px-4 py-1.5 text-xs font-semibold tracking-wide text-purple-200 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              <Compass size={13} className="text-purple-400" />
              MY ARCHITECTURE
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Tech{" "}
            <span
              style={{
                background: navbarPurpleGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Stack
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 88 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[3px] rounded-full bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500 mt-4 mx-auto"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-sm md:text-base text-gray-400 max-w-xl mx-auto mt-6 leading-[1.8]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            The languages, frameworks, tools, and architecture I leverage to build high-performance products.
          </motion.p>
        </div>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3.5 mb-10"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 backdrop-blur-md overflow-hidden ${
                  isActive
                    ? "bg-purple-600 text-white border border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                    : "bg-[#0b0a1d]/80 text-gray-300 border border-purple-900/50 hover:border-purple-500 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]"
                }`}
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                <span className="relative z-10 tracking-wide">{cat}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Category Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16"
          >
            {allSkills[activeCategory as keyof typeof allSkills].map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-900/50 to-transparent" />
          <span
            className="text-xs uppercase tracking-[3px] text-purple-300/60 font-semibold whitespace-nowrap"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            All Technologies
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-900/50 to-transparent" />
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full overflow-hidden space-y-4"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        >
          <MarqueeRow items={row1} reverse={false} duration={34} />
          <MarqueeRow items={[...row2].reverse()} reverse={true} duration={28} />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
