import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

// Shared Deep Electric Purple Gradient
const purpleGradient = "linear-gradient(90deg, #c084fc 0%, #a855f7 50%, #9333ea 100%)";

interface ExperienceItem {
  id: number;
  type: 'experience' | 'education';
  title: string;
  company: string;
  duration: string;
  description: string;
  tech?: string[];
  icon: React.ReactNode;
}

const timelineData: ExperienceItem[] = [
  {
    id: 1,
    type: 'experience',
    title: 'Web Developer',
    company: 'RZ Web Studio',
    duration: '2024 – Present',
    description:
      'Leading the frontend team to build scalable modern web applications using the MERN Stack and Next.js.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Next.js'],
    icon: <Briefcase size={18} />,
  },
  {
    id: 2,
    type: 'experience',
    title: 'Front-End Web Developer',
    company: 'Self Employed',
    duration: '2023 – Present',
    description:
      'Built responsive websites with HTML, CSS, JS, React.js. Focused on UI/UX, accessibility, and performance. Delivered multiple freelance projects.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
    icon: <Briefcase size={18} />,
  },
  {
    id: 3,
    type: 'education',
    title: 'Bachelor of Science – BS, Computer Science',
    company: 'IQRA University',
    duration: '2021 – 2025',
    description:
      'Focused on Data Structures, Algorithms, Web Development, Database Systems, and Information Security.',
    icon: <GraduationCap size={18} />,
  },
  {
    id: 4,
    type: 'education',
    title: 'Intermediate (Pre-Engineering)',
    company: 'PECHS Science College',
    duration: '2019 – 2021',
    description:
      'Studied core subjects including Mathematics, Physics, and Chemistry. Built strong analytical and problem-solving skills.',
    icon: <GraduationCap size={18} />,
  },
];

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const filteredData = timelineData.filter((item) => item.type === activeTab);

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 bg-[#050816] text-white transition-colors duration-500"
    >
      {/* Background Deep Purple Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-150px] top-1/4 h-[450px] w-[450px] rounded-full bg-purple-900/15 blur-[160px]" />
        <div className="absolute right-[-150px] bottom-1/4 h-[450px] w-[450px] rounded-full bg-purple-600/15 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        
        {/* SECTION HEADING */}
        <div className="mb-10 flex flex-col items-center text-center justify-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-[#0b0a1d]/80 px-4 py-1.5 text-xs font-semibold tracking-widest text-purple-300 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              <Sparkles size={13} className="text-purple-400" />
              MY JOURNEY
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Experience &{" "}
            <span
              style={{
                background: purpleGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Education
            </span>
          </motion.h2>

          {/* Glowing Accent Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[3px] rounded-full bg-gradient-to-r from-purple-400 via-purple-600 to-fuchsia-500 mt-4 mx-auto shadow-[0_0_12px_rgba(168,85,247,0.5)]"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto mt-5 text-sm md:text-base text-gray-400 leading-relaxed italic"
          >
            A timeline of my professional experience and academic background that shaped my engineering mindset.
          </motion.p>
        </div>

        {/* INTERACTIVE TAB SWITCHER */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center p-1.5 rounded-2xl border border-purple-900/50 bg-[#0b0a1d]/90 backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.15)]">
            <button
              onClick={() => setActiveTab('experience')}
              className={`relative flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'experience' ? 'text-white' : 'text-gray-400 hover:text-purple-300'
              }`}
            >
              {activeTab === 'experience' && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute inset-0 bg-purple-600/80 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Briefcase size={16} className="relative z-10" />
              <span className="relative z-10">Work Experience</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`relative flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'education' ? 'text-white' : 'text-gray-400 hover:text-purple-300'
              }`}
            >
              {activeTab === 'education' && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute inset-0 bg-purple-600/80 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <GraduationCap size={16} className="relative z-10" />
              <span className="relative z-10">Education</span>
            </button>
          </div>
        </div>

        {/* TIMELINE LIST */}
        <div className="relative mx-auto max-w-3xl">
          {/* Vertical Timeline Track Line */}
          <div className="absolute left-[27px] md:left-1/2 top-4 h-[calc(100%-32px)] w-[2px] -translate-x-1/2 bg-purple-900/40" />
          <div className="absolute left-[27px] md:left-1/2 top-4 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-purple-500 via-purple-600 to-transparent shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-10"
            >
              {filteredData.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node Icon */}
                  <div className="absolute left-[27px] md:left-1/2 z-20 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-purple-500/50 bg-[#0b0a1d] text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-950/80 text-purple-300">
                      {item.icon}
                    </div>
                  </div>

                  {/* Card Element */}
                  <div className={`w-full pl-16 md:pl-0 md:w-[44%] ${index % 2 === 0 ? 'md:text-left' : 'md:text-left'}`}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.01 }}
                      transition={{ duration: 0.3 }}
                      className="group relative overflow-hidden rounded-2xl border border-purple-900/40 bg-[#0b0a1d]/90 p-6 shadow-xl backdrop-blur-xl transition-colors duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                    >
                      {/* Top Accent Strip */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Duration Tag */}
                      <span className="inline-block rounded-md border border-purple-500/30 bg-purple-950/40 px-3 py-1 text-xs font-mono font-medium text-purple-300 mb-3">
                        {item.duration}
                      </span>

                      {/* Title */}
                      <h3
                        className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-purple-300"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {item.title}
                      </h3>

                      {/* Subtitle / Company */}
                      <p className="text-sm font-semibold text-purple-400 mt-1">
                        {item.company}
                      </p>

                      {/* Description */}
                      <p className="mt-3 text-sm text-gray-300 leading-relaxed font-sans">
                        {item.description}
                      </p>

                      {/* Tech Stack Badges */}
                      {item.tech && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {item.tech.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-purple-800/40 bg-purple-950/30 px-2.5 py-1 text-xs font-mono text-purple-200/80"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Experience;
