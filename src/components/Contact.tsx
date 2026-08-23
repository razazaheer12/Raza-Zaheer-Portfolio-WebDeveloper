import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { Mail, MessageSquare, Send, User, Github, Linkedin, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

interface FormData {
  name: string;
  email: string;
  message: string;
}

// ── Info Card ─────────────────────────────────────────────────
const InfoCard = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.02 }}
    className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200/70 dark:border-white/[0.07] bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl shadow-sm hover:shadow-lg hover:border-purple-300/40 dark:hover:border-white/[0.15] transition-all duration-300"
  >
    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-[#131C39]/80 border border-[#6B4EFF]/40 shadow-[0_0_12px_rgba(104,87,255,0.15)]">
      {icon}
    </div>
    <div>
      <p className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-[1.5px]" style={{ fontFamily: "'Sora', sans-serif" }}>{label}</p>
      <p className="text-sm font-semibold text-gray-800 dark:text-white mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{value}</p>
    </div>
  </motion.div>
);

// ── Contact Component ─────────────────────────────────────────
const Contact = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: data.name, from_email: data.email, message: data.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsSubmitted(true);
      toast.success('Message sent successfully!');
      reset();
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-[#050816] dark:via-[#0B1126] dark:to-[#111827] relative overflow-hidden transition-colors duration-500"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-40 top-0 h-[380px] w-[380px] rounded-full bg-blue-500/10 blur-[150px]"
        />
        <motion.div
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute right-[-100px] top-[80px] h-[360px] w-[360px] rounded-full bg-purple-500/10 blur-[150px]"
        />
        <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 h-[300px] w-[300px] rounded-full bg-pink-500/8 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

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
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-[#8B5CF6]/50
                bg-[#0F1228]/80
                px-4 py-1.5
                text-[10px] md:text-xs
                font-semibold
                uppercase
                tracking-[2.8px]
                text-[#C4B5FD]
                shadow-[0_0_20px_rgba(139,92,246,0.16)]
                backdrop-blur-md
                transition-all duration-300
                hover:border-[#A855F7]/80
                hover:text-white
                hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
              "
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <MessageCircle
                size={13}
                className="text-[#A78BFA]"
              />
              LET'S CONNECT
            </div>
          </motion.div>

          {/* Deep Purple Dual-Tone Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              text-4xl md:text-5xl
              font-extrabold
              tracking-tight
              text-gray-900 dark:text-white
            "
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Get In{" "}
            <span
              className="
                bg-gradient-to-r
                from-[#8B5CF6]
                via-[#A855F7]
                to-[#D946EF]
                bg-clip-text
                text-transparent
              "
            >
              Touch
            </span>
          </motion.h2>

          {/* Glowing Accent Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 88 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="
              h-[3px]
              rounded-full
              bg-gradient-to-r
              from-[#3B82F6]
              via-[#8B5CF6]
              to-[#EC4899]
              mt-4
              mx-auto
            "
          />

          {/* Subtitle Description (Italicized) */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mt-6 text-sm md:text-base text-gray-500 dark:text-gray-400 italic leading-[1.8]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Have a project in mind or want to discuss opportunities? I'm just a message away.
            Let's build something great together.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Intro text */}
            <div>
              <h3
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3"
                style={{ fontFamily: "'Sora', Poppins, sans-serif" }}
              >
                Let's work together
              </h3>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-[1.8]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                I'm currently open to freelance projects and full-time frontend roles.
                Whether you have a quick question or a big idea — my inbox is always open.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-3">
              {[
                { icon: <Mail size={18} className="text-[#8FA8FF]" />, label: 'Email', value: 'razazaheer2002@gmail.com' },
                { icon: <MapPin size={18} className="text-[#8FA8FF]" />, label: 'Location', value: 'Karachi, Pakistan' },
                { icon: <CheckCircle2 size={18} className="text-[#8FA8FF]" />, label: 'Status', value: 'Available for Work' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  viewport={{ once: true }}
                >
                  <InfoCard {...item} />
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs uppercase tracking-[2px] text-gray-400 dark:text-gray-500 font-semibold mb-4"
                style={{ fontFamily: "'Sora', sans-serif" }}>
                Find me on
              </p>
              <div className="flex gap-3">
                {[
                  { href: 'https://github.com/razazaheer12', icon: <Github size={20} aria-hidden="true" />, label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/raza-zaheer/', icon: <Linkedin size={20} aria-hidden="true" />, label: 'LinkedIn' },
                ].map(({ href, icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] border border-purple-500/30 text-gray-200 text-sm font-semibold shadow-sm hover:border-purple-500 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all duration-300"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    <span className="text-purple-400">{icon}</span> {label}
                  </motion.a>
                ))}
              </div>
            </div>
          
          </motion.div>

          {/* Right Column — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl border border-gray-200/70 dark:border-white/[0.07] bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl shadow-xl p-6 sm:p-8 hover:border-purple-300/30 dark:hover:border-white/[0.12] transition-all duration-500">

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <h3
                className="relative text-xl font-bold text-gray-900 dark:text-white mb-6"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Send me a message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-5">

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-[1px]"
                    style={{ fontFamily: "'Sora', sans-serif" }}>
                    Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={17} />
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      placeholder="Your name"
                      className="pl-11 w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] p-3.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>
                  {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-[1px]"
                    style={{ fontFamily: "'Sora', sans-serif" }}>
                    Email <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={17} />
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' },
                      })}
                      type="email"
                      placeholder="your@email.com"
                      className="pl-11 w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] p-3.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>
                  {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-[1px]"
                    style={{ fontFamily: "'Sora', sans-serif" }}>
                    Message <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-gray-400" size={17} />
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className="pl-11 w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] p-3.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 hover:border-gray-300 dark:hover:border-white/20 resize-none transition-all duration-300"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>
                  {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>}
                </div>

                {/* Submit Button */}
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-green-600 dark:text-green-400 font-semibold"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    <CheckCircle2 size={20} />
                    Message Sent Successfully!
                  </motion.div>
                ) : (
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.025 }}
                    whileTap={{ scale: 0.975 }}
                    className="group relative w-full inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl border border-purple-900/70 bg-[#0b0a1d]/80 px-7 py-4 font-medium text-gray-200 shadow-sm backdrop-blur-sm transition-all duration-500 hover:border-purple-500 hover:text-white hover:shadow-[0_10px_50px_rgba(168,85,247,0.25)] dark:border-purple-900/70 dark:bg-[#0b0a1d]/80 dark:text-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    <span className="absolute inset-0 rounded-2xl bg-purple-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {isSubmitting ? (
                      <>
                        <div className="relative z-10 animate-spin rounded-full h-5 w-5 border-b-2 border-current" />
                        <span className="relative z-10 text-xs tracking-wide">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="relative z-10 w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                        <span className="relative z-10 text-xs tracking-wide">Send Message</span>
                      </>
                    )}
                  </motion.button>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <Toaster
        position="bottom-center"
        toastOptions={{
          style: { background: isDarkMode ? '#0B1126' : '#fff', color: isDarkMode ? '#fff' : '#1f2937', border: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.08)', borderRadius: '14px', fontFamily: "'Sora', sans-serif", fontSize: '14px' },
        }}
      />
    </section>
  );
};

export default Contact;
