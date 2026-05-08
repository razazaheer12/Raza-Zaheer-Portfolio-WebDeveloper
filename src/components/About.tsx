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
    title: 'Front-End Web Developer (Freelance)',
    company: 'Self Employed',
    duration: '2023 – Present',
    description:
      'Built responsive websites with HTML, CSS, JS, React.js. Focused on UI/UX, accessibility, and performance. Delivered multiple freelance projects.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
    side: 'left',
    icon: <Briefcase size={12} />,
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
    icon: <Building2 size={12} />,
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
    icon: <Code2 size={12} />,
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
    icon: <GraduationCap size={12} />,
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

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050816] py-16"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute right-[-120px] top-0 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute bottom-[-200px] left-1/2 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4 flex justify-center"
        >
          <div
            className="rounded-md border border-[#6B4EFF]/40 bg-[#131C39] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[2.5px] text-[#8FA8FF] shadow-[0_0_20px_rgba(104,87,255,0.2)]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            MY JOURNEY
          </div>
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-7 max-w-md text-center text-[12.5px] leading-5 text-[#A0A7C0]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          A timeline of my professional experience and academic background.
        </motion.p>

        {/* Combined Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2
            className="text-[18px] font-semibold tracking-tight text-white md:text-[20px]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Experience{' '}
            <span className="bg-gradient-to-r from-[#A855F7] to-[#F472FF] bg-clip-text text-transparent">
              & Education
            </span>
          </h2>
          <div className="mx-auto mt-2.5 h-[2px] w-[60px] rounded-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CFF] to-[#D946EF]" />
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#5EA8FF] via-[#8B5CFF] to-[#D946EF] lg:block" />

          <div className="space-y-8">
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
                {/* Connector */}
                <div
                  className={`absolute top-1/2 hidden h-[2px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-[#5EA8FF] to-[#B06CFF] lg:block ${
                    item.side === 'left'
                      ? 'left-[calc(50%-50px)]'
                      : 'right-[calc(50%-50px)]'
                  }`}
                />

                {/* Center Icon - Compact Circle (36px) */}
                <div className="absolute left-1/2 top-1/2 z-30 hidden h-[36px] w-[36px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0B1126] lg:flex">
                  <div
                    className={`flex h-[26px] w-[26px] items-center justify-center rounded-full text-white ${
                      item.type === 'experience'
                        ? 'bg-gradient-to-br from-[#3B82F6] to-[#2563EB]'
                        : 'bg-gradient-to-br from-[#A855F7] to-[#7E22CE]'
                    }`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Card - More Compact Padding (p-3.5) */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="group relative w-full overflow-hidden rounded-xl border border-white/10 bg-[#0B1126]/95 p-3.5 shadow-[0_8px_25px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-500 hover:border-[#8B5CFF]/40 lg:w-[38%]"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 via-[#8B5CFF]/5 to-[#EC4899]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Side Glow */}
                  <div
                    className={`absolute left-0 top-3.5 h-8 w-[2px] rounded-full ${
                      item.type === 'experience'
                        ? 'bg-[#3B82F6]'
                        : 'bg-[#A855F7]'
                    }`}
                  />

                  <div className="relative z-10">
                    {/* Duration - 7.5px */}
                    <div
                      className={`inline-flex rounded px-1.5 py-[1.5px] text-[7.5px] font-semibold tracking-wide ${
                        item.type === 'experience'
                          ? 'bg-[#3B82F6]/15 text-[#8DB7FF]'
                          : 'bg-[#A855F7]/15 text-[#D8B4FE]'
                      }`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.duration}
                    </div>

                    {/* Title - 10px */}
                    <h3
                      className="mt-1 text-[10px] font-semibold leading-tight text-white"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {item.title}
                    </h3>

                    {/* Company - 8.5px */}
                    <p
                      className={`mt-0.5 text-[8.5px] font-medium ${
                        item.type === 'experience'
                          ? 'text-[#60A5FA]'
                          : 'text-[#C084FC]'
                      }`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.company}
                    </p>

                    {/* Description - 8px with Tight line-height */}
                    <p
                      className="mt-1 text-[8px] leading-[12px] text-[#A3AEC2]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.description}
                    </p>

                    {/* Tech Tags - 7.5px */}
                    {item.tech && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {item.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded border border-[#3B82F6]/20 bg-[#3B82F6]/10 px-1 py-[1.5px] text-[7.5px] font-medium text-[#93C5FD]"
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
