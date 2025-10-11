import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experienceData = [
  {
    position: 'Front-End Web Developer (Freelance)',
    company: 'Self Employed',
    duration: '2023 – Present',
    description:
      'Built responsive websites with HTML, CSS, JS, React.js. Focused on UI/UX, accessibility, and performance. Delivered multiple freelance projects.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    position: 'Web Developer',
    company: 'RZ Web Studio',
    duration: '2024 – Present',
    description:
      'Leading the frontend development team to build scalable, modern web applications. Implemented solutions using the MERN Stack with state management through Redux. Collaborated with designers using Figma to translate wireframes into fully functional applications. Ensured code quality, reusability, and performance optimization in all projects.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Next.js'],
  },
];

const educationData = [
  {
    degree: 'Intermediate (Pre-Engineering)',
    institution: 'PECHS Science College',
    years: '2019 – 2021',
    description:
      'Studied core subjects including Mathematics, Physics, and Chemistry. Built strong analytical and problem-solving skills, preparing for higher education in Computer Science.',
    type: 'education',
  },
  {
    degree: 'Bachelor of Science – BS, Computer Science',
    institution: 'IQRA University',
    years: '2021 – 2025',
    description:
      'Focused on computer science fundamentals including Data Structures, Algorithms, Operating Systems, Web & Mobile Development, Database Systems, and Information Security. Gained practical experience through projects, assignments, and final year project (VRET – Virtual Reality Exposure Therapy).',
    type: 'education',
  },
];

// Typing animation variants
const typingContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const typingText = {
  hidden: { opacity: 0, y: `0.25em` },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

// Timeline Dot
const TimelineDot = ({ index }: { index: number }) => (
  <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.4, delay: index * 0.3 }}
    viewport={{ once: true }}
    className="relative flex items-center justify-center w-6 h-6"
  >
    <motion.div
      layout
      transition={{ duration: 0.6 }}
      className="absolute w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-lg animate-pulse"
    />
    <motion.div
      layout
      transition={{ duration: 0.6 }}
      className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg z-10"
    />
  </motion.div>
);

const TimelineItem = ({
  item,
  index,
  isEducation = false,
}: {
  item: any;
  index: number;
  isEducation?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.3 }}
      viewport={{ once: true }}
      className="relative flex items-start group"
    >
      <div className="flex flex-col items-center mr-8">
        <TimelineDot index={index} />
        {index <
          (isEducation ? educationData.length - 1 : experienceData.length - 1) && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 0.8, delay: index * 0.3 + 0.3 }}
            viewport={{ once: true }}
            layout
            className="w-0.5 mt-2 flex-1 min-h-[80px] sm:min-h-[120px] 
                       bg-gradient-to-b from-blue-600 to-purple-600
                       dark:from-purple-400 dark:to-blue-400
                       transition-all duration-700 ease-in-out"
          />
        )}
      </div>

      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
        }}
        layout
        transition={{ duration: 0.6 }}
        className="flex-1 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl 
                   rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl 
                   transition-all duration-700 border 
                   border-gray-200/50 dark:border-gray-700/50"
      >
        <h3
          className="text-lg font-semibold text-gray-800 dark:text-white mb-2"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {isEducation ? item.degree : item.position}
        </h3>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
          <p
            className={`font-medium ${
              isEducation
                ? 'text-purple-600 dark:text-purple-400'
                : 'text-blue-600 dark:text-blue-400'
            }`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {isEducation ? item.institution : item.company}
          </p>
          <p
            className="text-sm text-gray-500 dark:text-gray-400 font-medium"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {isEducation ? item.years : item.duration}
          </p>
        </div>

        {item.description && (
          <p
            className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mb-3"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {item.description}
          </p>
        )}

        {!isEducation && item.tech && (
          <div className="flex flex-wrap gap-2 mt-2">
            {item.tech.map((t: string) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-medium rounded-full 
                           bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                           text-blue-600 dark:text-purple-400 
                           border border-blue-200/40 dark:border-purple-400/40
                           transition-all duration-500"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const heading = 'Experience & Education';

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden 
                 transition-colors duration-700 ease-in-out"
    >
      <motion.div
        layout
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-gradient-to-br 
                   from-blue-50/50 via-purple-50/30 to-pink-50/50
                   dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20
                   transition-all duration-1000 ease-in-out"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Typing Animation Heading */}
        <motion.div
          variants={typingContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {heading.split('').map((char, index) => (
              <motion.span key={index} variants={typingText}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h2>

          {/* Neon Gradient Underline */}
          <div className="mx-auto w-32 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_10px_rgba(139,92,246,0.7)]"></div>

          <p
            className="text-sm text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mt-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            A journey shaped by academic foundations and professional milestones,
            blending knowledge with real-world impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-gray-800 dark:text-white flex items-center"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <Briefcase className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400 transition-colors duration-700" />
              Experience
            </motion.h3>
            <div className="space-y-12">
              {experienceData.map((experience, index) => (
                <TimelineItem
                  key={experience.position}
                  item={experience}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-gray-800 dark:text-white flex items-center"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <GraduationCap className="w-6 h-6 mr-3 text-purple-600 dark:text-purple-400 transition-colors duration-700" />
              Education
            </motion.h3>
            <div className="space-y-12">
              {educationData.map((education, index) => (
                <TimelineItem
                  key={education.degree}
                  item={education}
                  index={index}
                  isEducation
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
