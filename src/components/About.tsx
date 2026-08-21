import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Rocket,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const About: React.FC = () => {
  const heading = "About Me";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  const stats = [
    { icon: Rocket, value: "2", label: "Production Systems Shipped" },
    { icon: TrendingUp, value: "35%", label: "Engagement Boost" },
    { icon: CheckCircle2, value: "100%", label: "On-time Delivery" },
  ];

  const focusAreas = [
    "Real-time systems with Socket.io & WebSockets",
    "RAG pipelines with LangChain & Pinecone",
    "Role-based access control (JWT + RBAC)",
    "Cross-origin auth in split production deployments",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-[#050816] dark:via-[#0B1126] dark:to-[#111827]"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-[-120px] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-[120px]"
        />
        <motion.div
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute right-[-100px] top-[100px] h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[120px]"
        />
        <div className="absolute bottom-[-120px] left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white flex justify-center flex-wrap"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {heading.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 112 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="h-[4px] bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mx-auto mt-5 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mt-6 text-sm md:text-base leading-7 text-gray-600 dark:text-gray-300"
          >
            Passionate about crafting modern, visually engaging, and highly
            responsive digital experiences with clean code and elegant UI
            design.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-[90px]" />

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative group w-full max-w-[380px] lg:max-w-[420px]"
            >
              <div className="relative overflow-hidden rounded-[26px] border border-white/30 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-2xl shadow-2xl">
                <img
                  src="/raza.png"
                  alt="Raza Zaheer"
                  className="w-full h-auto object-cover rounded-[26px] transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold text-blue-700 dark:text-blue-300 mb-4"
            >
              <Briefcase size={14} />
              Frontend Developer · Exploring Full-Stack &amp; AI
            </motion.div>

            <h3
              className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-snug"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Who I Am
            </h3>

            <p className="text-sm md:text-base italic text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              I'm{" "}
              <span className="font-semibold not-italic text-gray-900 dark:text-white">
                Raza Zaheer
              </span>
              , a Computer Science graduate and{" "}
              <span className="font-semibold not-italic text-gray-900 dark:text-white">
                Front-End Developer
              </span>{" "}
              with 2+ years of freelance experience delivering production React.js and
              Next.js applications, now expanding into full-stack and AI-integrated
              development. I've independently architected and deployed two end-to-end
              systems: a real-time analytics platform with role-based access control and
              live Socket.io data streaming, and a RAG-powered chatbot built on Pinecone
              and LangChain for context-aware document retrieval.
            </p>

            <p className="text-sm md:text-base italic text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
              Beyond writing clean components, I enjoy the harder engineering problems —
              WebSocket reconnection handling, cross-origin auth across split production
              deployments, and REST API integration end-to-end. Across 10+ client
              projects, I've maintained{" "}
              <span className="font-semibold not-italic text-gray-900 dark:text-white">
                100% on-time delivery
              </span>{" "}
              while improving user engagement by up to 35% through better UX and
              performance.
            </p>

            {/* Compact Focus Area Tags */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {focusAreas.map((item) => (
                <span
                  key={item}
                  className="text-[11px] font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* Smaller Compact Stat Boxes */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-2.5"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  className="group/stat rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl px-2.5 py-3 text-center shadow-sm hover:border-purple-400/40 transition-all duration-300"
                >
                  <stat.icon className="w-4 h-4 mx-auto mb-1 text-gray-400 dark:text-gray-400 group-hover/stat:text-purple-400 transition-colors duration-300" />
                  <div
                    className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[9px] md:text-[10px] font-medium tracking-wide uppercase leading-tight text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
