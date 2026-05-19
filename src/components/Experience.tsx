import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Building2,
  Code2,
} from 'lucide-react';

const timelineData = [
  {
    id: 1,
    type: 'experience',
    title: 'Front-End Web Developer',
    company: 'Self Employed',
    duration: '2023 – Present',
    description:
      'Built responsive websites with HTML, CSS, JS, React.js. Focused on UI/UX, accessibility, and performance. Delivered multiple freelance projects.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
    side: 'left',
    icon: <Briefcase size={20} />,
  },
  {
    id: 2,
    type: 'education',
    title: 'Intermediate (Pre-Engineering)',
    company: 'PECHS Science College',
    duration: '2019 – 2021',
    description:
      'Studied core subjects including Mathematics, Physics, and Chemistry. Built strong analytical and problem-solving skills.',
    side: 'right',
    icon: <Building2 size={20} />,
  },
  {
    id: 3,
    type: 'experience',
    title: 'Web Developer',
    company: 'RZ Web Studio',
    duration: '2024 – Present',
    description:
      'Leading the frontend team to build scalable modern web applications using the MERN Stack.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Next.js'],
    side: 'left',
    icon: <Code2 size={20} />,
  },
  {
    id: 4,
    type: 'education',
    title: 'Bachelor of Science – BS, Computer Science',
    company: 'IQRA University',
    duration: '2021 – 2025',
    description:
      'Focused on Data Structures, Algorithms, Web Development, Database Systems, and Information Security.',
    side: 'right',
    icon: <GraduationCap size={20} />,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 bg-white text-black dark:bg-[#050816] dark:text-white transition-colors duration-500"
    >
      {/* Background Blur Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[160px]" />
        <div className="absolute right-[-120px] top-0 h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[170px]" />
        <div className="absolute bottom-[-200px] left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-5 flex justify-center"
        >
          <div
            className="rounded-md border border-[#6B4EFF]/40 bg-gray-100 dark:bg-[#131C39] px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-[#6B4EFF] dark:text-[#8FA8FF] shadow-[0_0_20px_rgba(104,87,255,0.15)]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            MY JOURNEY
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-2xl text-center text-base leading-7 text-gray-600 dark:text-[#A0A7C0]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          A timeline of my professional experience and academic background
          that shaped my skills and knowledge.
        </motion.p>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2
            className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Experience{' '}
            <span className="bg-gradient-to-r from-[#A855F7] to-[#F472FF] bg-clip-text text-transparent">
              & Education
            </span>
          </h2>

          <div className="mx-auto mt-4 h-[4px] w-[90px] rounded-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CFF] to-[#D946EF]" />
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 bg-gradient-to-b from-[#5EA8FF] via-[#8B5CFF] to-[#D946EF] lg:block" />

          <div className="space-y-10">
            {timelineData.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  item.side === 'left'
                    ? 'lg:justify-start'
                    : 'lg:justify-end'
                }`}
              >
                {/* Connector Line */}
                <div
                  className={`absolute top-1/2 hidden h-[3px] w-[60px] -translate-y-1/2 bg-gradient-to-r from-[#5EA8FF] to-[#B06CFF] lg:block ${
                    item.side === 'left'
                      ? 'left-[calc(50%-60px)]'
                      : 'right-[calc(50%-60px)]'
                  }`}
                />

                {/* Timeline Icon */}
                <div className="absolute left-1/2 top-1/2 z-30 hidden h-[54px] w-[54px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0B1126] shadow-lg lg:flex">
                  <div
                    className={`flex h-[40px] w-[40px] items-center justify-center rounded-full text-white ${
                      item.type === 'experience'
                        ? 'bg-gradient-to-br from-[#3B82F6] to-[#2563EB]'
                        : 'bg-gradient-to-br from-[#A855F7] to-[#7E22CE]'
                    }`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white/90 dark:bg-[#0B1126]/95 p-7 shadow-[0_8px_25px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_25px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-500 hover:border-[#8B5CFF]/40 lg:w-[42%]"
                >
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 via-[#8B5CFF]/5 to-[#EC4899]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Side Border */}
                  <div
                    className={`absolute left-0 top-7 h-12 w-[4px] rounded-full ${
                      item.type === 'experience'
                        ? 'bg-[#3B82F6]'
                        : 'bg-[#A855F7]'
                    }`}
                  />

                  <div className="relative z-10">
                    
                    {/* Duration */}
                    <div
                      className={`inline-flex rounded-md px-3 py-1 text-sm font-semibold tracking-wide ${
                        item.type === 'experience'
                          ? 'bg-[#3B82F6]/15 text-blue-600 dark:text-[#8DB7FF]'
                          : 'bg-[#A855F7]/15 text-purple-600 dark:text-[#D8B4FE]'
                      }`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.duration}
                    </div>

                    {/* Title */}
                    <h3
                      className="mt-3 text-xl font-semibold leading-tight text-gray-900 dark:text-white"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {item.title}
                    </h3>

                    {/* Company */}
                    <p
                      className={`mt-2 text-base font-medium ${
                        item.type === 'experience'
                          ? 'text-blue-600 dark:text-[#60A5FA]'
                          : 'text-purple-600 dark:text-[#C084FC]'
                      }`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.company}
                    </p>

                    {/* Description */}
                    <p
                      className="mt-3 text-base leading-7 text-gray-600 dark:text-[#A3AEC2]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.description}
                    </p>

                    {/* Tech Stack */}
                    {item.tech && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-[#3B82F6]/20 bg-[#3B82F6]/10 px-3 py-1 text-sm font-medium text-blue-700 dark:text-[#93C5FD]"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
