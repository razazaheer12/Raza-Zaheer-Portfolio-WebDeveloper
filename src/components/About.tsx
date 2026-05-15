import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const heading = "About Me";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white flex justify-center flex-wrap"
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

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
  src="/raza.png"
  alt="Raza Zaheer"
  className="w-full max-w-sm lg:max-w-md object-cover rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700"
/>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Who I Am
            </h3>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
              I’m a Frontend Developer passionate about creating modern,
              responsive, and user-friendly web experiences. I specialize in
              blending clean code with intuitive design to build fast,
              accessible, and visually engaging applications.
            </p>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              I love solving complex problems with clean, intuitive solutions
              while staying updated with modern tools, frameworks, and design
              trends in the fast-evolving web world.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-10">
              
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">
                  Name:
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Raza Zaheer
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">
                  Email:
                </h4>
                <p className="text-gray-600 dark:text-gray-300 break-all">
                  razazaheer2002@gmail.com
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">
                  Location:
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Karachi, Pakistan
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">
                  Availability:
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Full-time
                </p>
              </div>
            </div>

            {/* Resume Button */}
<a
  href="/razazaheer_resume.pdf"
  download="razazaheer_resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>

              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
