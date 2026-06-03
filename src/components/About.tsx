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

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-[#050816] dark:via-[#0B1126] dark:to-[#111827]"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[-120px] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[-100px] top-[100px] h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[120px]" />
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
          {/* Badge */}

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

          {/* Gradient Line */}
          <div className="w-28 h-[4px] bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mx-auto mt-5 rounded-full"></div>

          {/* Small Intro */}
          <p className="max-w-2xl mx-auto mt-7 text-sm md:text-base leading-7 text-gray-600 dark:text-gray-300">
            Passionate about crafting modern, visually engaging, and highly
            responsive digital experiences with clean code and elegant UI
            design.
          </p>
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
            {/* Glow Behind */}
            <div className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-[120px]" />

            {/* Image Container */}
            <div className="relative group">
              {/* Border Glow */}
              <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70 blur-md group-hover:opacity-100 transition duration-500"></div>

              {/* Main Card */}
              <div className="relative overflow-hidden rounded-[30px] border border-white/20 bg-white/70 dark:bg-white/5 backdrop-blur-2xl shadow-2xl">
                <img
                  src="/raza.png"
                  alt="Raza Zaheer"
                  className="w-full max-w-sm lg:max-w-md object-cover rounded-[30px] transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300 mb-6">
              <Briefcase size={16} />
              Frontend Web Developer
            </div>
            {/* Main Title */}
            <h3
              className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-5 leading-snug"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Who I Am 
            </h3>

            {/* Paragraph */}
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-7 mb-5">
              I’m a passionate Frontend Developer focused on building sleek,
              responsive, and user-friendly websites that combine clean code
              with elegant design principles.
            </p>

            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-7 mb-8">
              I enjoy transforming ideas into visually engaging digital products
              while staying updated with the latest technologies, frameworks,
              animations, and UI/UX trends to create impactful experiences.
            </p>

         {/* Info Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
  
  {/* Card */}
  <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-4 shadow-md hover:shadow-xl transition duration-300">
    <div className="flex items-center gap-2 mb-1.5">
      <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
        Full Name
      </h4>
    </div>

    <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
      Raza Zaheer
    </p>
  </div>

  {/* Card */}
  <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-4 shadow-md hover:shadow-xl transition duration-300">
    <div className="flex items-center gap-2 mb-1.5">
      <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400" />
      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
        Email
      </h4>
    </div>

    <p className="text-xs font-medium text-gray-700 dark:text-gray-300 break-all">
      razazaheer2002@gmail.com
    </p>
  </div>

  {/* Card */}
  <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-4 shadow-md hover:shadow-xl transition duration-300">
    <div className="flex items-center gap-2 mb-1.5">
      <MapPin className="w-4 h-4 text-pink-600 dark:text-pink-400" />
      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
        Location
      </h4>
    </div>

    <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
      Karachi, Pakistan
    </p>
  </div>

  {/* Card */}
  <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-4 shadow-md hover:shadow-xl transition duration-300">
    <div className="flex items-center gap-2 mb-1.5">
      <Briefcase className="w-4 h-4 text-green-600 dark:text-green-400" />
      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
        Availability
      </h4>
    </div>

    <p className="text-xs font-semibold text-green-600 dark:text-green-400">
      Available for Work
    </p>
  </div>
</div>

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

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-[#050816] dark:via-[#0B1126] dark:to-[#111827]"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[-120px] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[-100px] top-[100px] h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[120px]" />
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
          {/* Badge */}

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

          {/* Gradient Line */}
          <div className="w-28 h-[4px] bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mx-auto mt-5 rounded-full"></div>

          {/* Small Intro */}
          <p className="max-w-2xl mx-auto mt-7 text-sm md:text-base leading-7 text-gray-600 dark:text-gray-300">
            Passionate about crafting modern, visually engaging, and highly
            responsive digital experiences with clean code and elegant UI
            design.
          </p>
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
            {/* Glow Behind */}
            <div className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-[120px]" />

            {/* Image Container */}
            <div className="relative group">
              {/* Border Glow */}
              <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70 blur-md group-hover:opacity-100 transition duration-500"></div>

              {/* Main Card */}
              <div className="relative overflow-hidden rounded-[30px] border border-white/20 bg-white/70 dark:bg-white/5 backdrop-blur-2xl shadow-2xl">
                <img
                  src="/raza.png"
                  alt="Raza Zaheer"
                  className="w-full max-w-sm lg:max-w-md object-cover rounded-[30px] transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300 mb-6">
              <Briefcase size={16} />
              Frontend Web Developer
            </div>
            {/* Main Title */}
            <h3
              className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-5 leading-snug"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Who I Am 
            </h3>

            {/* Paragraph */}
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-7 mb-5">
              I’m a passionate Frontend Developer focused on building sleek,
              responsive, and user-friendly websites that combine clean code
              with elegant design principles.
            </p>

            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-7 mb-8">
              I enjoy transforming ideas into visually engaging digital products
              while staying updated with the latest technologies, frameworks,
              animations, and UI/UX trends to create impactful experiences.
            </p>

         {/* Info Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
  
  {/* Card */}
  <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-4 shadow-md hover:shadow-xl transition duration-300">
    <div className="flex items-center gap-2 mb-1.5">
      <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
        Full Name
      </h4>
    </div>

    <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
      Raza Zaheer
    </p>
  </div>

  {/* Card */}
  <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-4 shadow-md hover:shadow-xl transition duration-300">
    <div className="flex items-center gap-2 mb-1.5">
      <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400" />
      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
        Email
      </h4>
    </div>

    <p className="text-xs font-medium text-gray-700 dark:text-gray-300 break-all">
      razazaheer2002@gmail.com
    </p>
  </div>

  {/* Card */}
  <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-4 shadow-md hover:shadow-xl transition duration-300">
    <div className="flex items-center gap-2 mb-1.5">
      <MapPin className="w-4 h-4 text-pink-600 dark:text-pink-400" />
      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
        Location
      </h4>
    </div>

    <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
      Karachi, Pakistan
    </p>
  </div>

  {/* Card */}
  <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-4 shadow-md hover:shadow-xl transition duration-300">
    <div className="flex items-center gap-2 mb-1.5">
      <Briefcase className="w-4 h-4 text-green-600 dark:text-green-400" />
      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
        Availability
      </h4>
    </div>

    <p className="text-xs font-semibold text-green-600 dark:text-green-400">
      Available for Work
    </p>
  </div>
</div>

{/* Resume Button */}
 <a
  href="/razazaheer_resume.pdf"
  download="razazaheer_resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 px-7 py-4 text-white font-medium shadow-[0_10px_40px_rgba(79,70,229,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_50px_rgba(168,85,247,0.45)]"
  >
  <Download className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
   <span className="tracking-wide">
                Download Resume
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
