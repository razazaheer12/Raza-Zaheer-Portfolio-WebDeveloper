import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  MapPin,
  Mail,
  User,
  Briefcase,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 0.08 * i, ease: "easeOut" },
    }),
  };

  const infoCards = [
    {
      icon: <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      label: "Full Name",
      value: "Raza Zaheer",
      valueClass: "text-gray-700 dark:text-gray-300",
    },
    {
      icon: <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
      label: "Email",
      value: "razazaheer2002@gmail.com",
      valueClass: "text-gray-700 dark:text-gray-300 break-all",
    },
    {
      icon: <MapPin className="w-4 h-4 text-pink-600 dark:text-pink-400" />,
      label: "Location",
      value: "Karachi, Pakistan",
      valueClass: "text-gray-700 dark:text-gray-300",
    },
    {
      icon: <Briefcase className="w-4 h-4 text-green-600 dark:text-green-400" />,
      label: "Availability",
      value: "Available for Work",
      valueClass: "text-green-600 dark:text-green-400 font-semibold",
      pulse: true,
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-[#050816] dark:via-[#0B1126] dark:to-[#111827]"
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
          className="text-center mb-16"
        >
          {/* Animated Heading */}
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

          {/* Gradient Line — animated draw-in */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 112 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="h-[4px] bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mx-auto mt-5 rounded-full"
          />

          {/* Small Intro */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mt-7 text-sm md:text-base leading-7 text-gray-600 dark:text-gray-300"
          >
            Passionate about crafting modern, visually engaging, and highly
            responsive digital experiences with clean code and elegant UI
            design.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Glow Behind — slow pulse */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-[120px]"
            />

            {/* Rotating gradient ring behind the card */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="absolute h-[360px] w-[360px] rounded-[34px]"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(59,130,246,0.35), rgba(168,85,247,0.35), rgba(236,72,153,0.35), rgba(59,130,246,0.35))",
                filter: "blur(18px)",
              }}
            />

            {/* Image Container */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative group"
            >
              {/* Main Card */}
              <div className="relative overflow-hidden rounded-[30px] border border-white/20 bg-white/70 dark:bg-white/5 backdrop-blur-2xl shadow-2xl">
                <img
                  src="/raza.png"
                  alt="Raza Zaheer"
                  className="w-full max-w-sm lg:max-w-md object-cover rounded-[30px] transition duration-700 group-hover:scale-105"
                />

                {/* Sheen sweep on hover */}
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
              className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300 mb-6"
            >
              <Briefcase size={16} />
              Frontend Developer · Exploring Full-Stack &amp; AI
            </motion.div>

            {/* Main Title */}
            <h3
              className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-5 leading-snug"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Who I Am
            </h3>

            {/* Paragraph */}
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-7 mb-5">
              I'm a Front-End Developer with 2+ years of freelance experience building
              production React.js and Next.js applications — currently expanding into
              full-stack and AI-integrated development. I've independently architected
              and deployed two end-to-end systems: a real-time MERN chat platform with
              live presence tracking and instant messaging via Socket.io, and a RAG-powered
              chatbot using Pinecone and LangChain for context-aware document retrieval.
            </p>

            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-7 mb-8">
              Beyond writing clean components, I enjoy solving the harder engineering
              problems — resolving WebSocket reconnection issues, handling cross-origin
              auth in split production deployments, and integrating REST APIs end-to-end.
              Across my freelance work, I've maintained 100% on-time delivery while
              improving user engagement by up to 35% through better UX and performance.
            </p>

            {/* Highlights — quick-scan proof points for recruiters */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-3 mb-8"
            >
              {[
                { value: "2", label: "Production Systems Shipped" },
                { value: "35%", label: "Engagement Boost" },
                { value: "100%", label: "On-time Delivery" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  className="rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl px-3 py-4 text-center shadow-sm hover:shadow-lg hover:border-purple-300/40 dark:hover:border-purple-400/30 transition-all duration-300"
                >
                  <div
                    className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[11px] md:text-xs leading-tight text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Info Cards — staggered entrance + hover lift */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {infoCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-4 shadow-md hover:shadow-xl hover:border-purple-300/40 dark:hover:border-purple-400/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    {card.pulse ? (
                      <span className="relative flex h-4 w-4 items-center justify-center">
                        <motion.span
                          animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                          transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                          className="absolute inline-flex h-2 w-2 rounded-full bg-green-500"
                        />
                        {card.icon}
                      </span>
                    ) : (
                      card.icon
                    )}
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {card.label}
                    </h4>
                  </div>

                  <p className={`text-xs ${card.valueClass}`}>
                    {card.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Resume Button */}
            <motion.a
              href="/Raza_Zaheer_Resume.pdf"
              download="Raza_Zaheer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-3 rounded-2xl border border-gray-300 dark:border-white/15 bg-white/80 dark:bg-white/5 backdrop-blur-sm px-7 py-4 text-gray-800 dark:text-white font-medium shadow-sm transition-all duration-500 hover:border-transparent hover:text-white hover:shadow-[0_10px_50px_rgba(168,85,247,0.4)] overflow-hidden"
            >
              {/* Gradient fill — slides in on hover */}
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <Download className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
              <span className="relative z-10 tracking-wide">Download Resume</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
