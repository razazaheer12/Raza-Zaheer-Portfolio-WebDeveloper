import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { Mail, MessageSquare, Send, User, Github, Linkedin } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

interface FormData {
  name: string;
  email: string;
  message: string;
}

// ================= Typing Animation =================
const TypingAnimation = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className: string;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const typing = setInterval(() => {
        if (i <= text.length) {
          setDisplayText(text.slice(0, i));
          i++;
        } else clearInterval(typing);
      }, 100);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
          className="text-blue-500 dark:text-blue-400"
        >
          |
        </motion.span>
      )}
    </span>
  );
};

// ================= Contact Section =================
const Contact = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsSubmitted(true);
      toast.success('✅ Message sent successfully!');
      reset();
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch {
      toast.error('❌ Failed to send message. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden transition-colors duration-500 bg-gradient-to-br from-[#F6F9FF] via-[#EEF3FF] to-[#F4F0FF] dark:from-[#030712] dark:via-[#070F21] dark:to-[#0B1528]"
    >
      {/* Floating Animated Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.18), transparent 45%)',
        }}
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-50/20 via-purple-50/10 to-pink-50/20 dark:from-blue-950/10 dark:via-indigo-950/15 dark:to-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* ================= Centered Heading ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <TypingAnimation
              text="Get In Touch"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white"
            />
          </h2>

          {/* === Neon Glow Underline === */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: '90px', opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mx-auto h-[4px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_10px_#8b5cf6,0_0_20px_#3b82f6]"
          ></motion.div>

          <p
            className="max-w-3xl mx-auto mt-6 text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed tracking-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Have a project in mind or want to discuss potential opportunities? Feel free to
            reach out to me through any of the following channels.
          </p>
        </motion.div>

        {/* ================= Contact Grid ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* ================= Left Column ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="space-y-4">
              <h3
                className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Contact Information
              </h3>

              <div className="flex flex-col space-y-4 text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-3 group">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/30 text-blue-500 transition-colors duration-300">
                    <Mail size={22} />
                  </div>
                  <span className="group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                    razazaheer2002@gmail.com
                  </span>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/30 text-purple-500 flex items-center justify-center text-lg w-[44px] h-[44px]">
                    🌐
                  </div>
                  <span className="group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300">
                    Karachi, Pakistan
                  </span>
                </div>
              </div>
            </div>

            {/* Follow Me */}
            <div>
              <h3
                className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Follow Me
              </h3>
              <div className="flex space-x-4 sm:space-x-6">
                {[
                  {
                    href: 'https://github.com/razazaheer12',
                    icon: <Github size={24} />,
                    gradient: 'from-gray-700 to-gray-900 dark:from-gray-800 dark:to-black',
                    label: 'GitHub Profile',
                    shadow: 'shadow-gray-500/10 dark:shadow-black/40',
                  },
                  {
                    href: 'https://www.linkedin.com/in/raza-zaeer-416745340/',
                    icon: <Linkedin size={24} />,
                    gradient: 'from-blue-600 to-indigo-700',
                    label: 'LinkedIn Profile',
                    shadow: 'shadow-blue-500/20',
                  },
                ].map(({ href, icon, gradient, label, shadow }, idx) => (
                  <motion.a
                    key={idx}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.08,
                      y: -4,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 bg-gradient-to-br ${gradient} ${shadow} rounded-2xl flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10 dark:border-white/[0.05]`}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ================= Right Column ================= */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3
                className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white mb-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Send me an Email
              </h3>
              <p
                className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Ready to start a conversation? Feel free to reach out through LinkedIn or email me
                directly.
              </p>
            </div>

            {/* ===== Contact Form ===== */}
            <div className="bg-white/75 dark:bg-[#080d1a]/85 backdrop-blur-2xl rounded-[24px] p-6 sm:p-8 shadow-[0_15px_50px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_70px_rgba(0,0,0,0.6)] border border-gray-200/60 dark:border-white/[0.05] transition-all duration-500 hover:border-blue-500/20 hover:shadow-[0_0_60px_rgba(59,130,246,0.15)]">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <motion.input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      id="name"
                      whileFocus={{ scale: 1.01 }}
                      className="pl-12 w-full rounded-xl border border-gray-200 dark:border-white/[0.08] bg-white/90 dark:bg-[#050a14] p-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-gray-300 dark:hover:border-white/15"
                      placeholder="Your name"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <motion.input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      type="email"
                      id="email"
                      whileFocus={{ scale: 1.01 }}
                      className="pl-12 w-full rounded-xl border border-gray-200 dark:border-white/[0.08] bg-white/90 dark:bg-[#050a14] p-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-gray-300 dark:hover:border-white/15"
                      placeholder="yourname@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-gray-400" size={20} />
                    <motion.textarea
                      {...register('message', { required: 'Message is required' })}
                      id="message"
                      rows={5}
                      whileFocus={{ scale: 1.01 }}
                      className="pl-12 w-full rounded-xl border border-gray-200 dark:border-white/[0.08] bg-white/90 dark:bg-[#050a14] p-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none transition-all duration-300 hover:border-gray-300 dark:hover:border-white/15"
                      placeholder="Type your message..."
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center justify-center text-green-500 text-lg font-semibold py-3"
                  >
                    ✅ Message Sent!
                  </motion.div>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-7 py-4 text-white font-medium shadow-[0_10px_30px_rgba(79,70,229,0.3)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_15px_50px_rgba(139,92,246,0.5)] disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                        <span className="tracking-wide">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        <span className="tracking-wide">Send Message</span>
                      </>
                    )}
                  </button>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast Notifications */}
      <Toaster position="bottom-center" />
    </section>
  );
};

export default Contact;
