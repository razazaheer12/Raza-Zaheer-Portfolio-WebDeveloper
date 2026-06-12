import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { Mail, MessageSquare, Send, User, Github, Linkedin, MapPin } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

interface FormData {
  name: string;
  email: string;
  message: string;
}

// ── Typing Animation ──────────────────────────────────────────
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
    const cursorBlink = setInterval(() => setShowCursor((p) => !p), 500);
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

// ── Contact Section ───────────────────────────────────────────
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
        { from_name: data.name, from_email: data.email, message: data.message },
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

  const inputBase =
    'w-full rounded-xl border border-gray-200 dark:border-white/[0.08] bg-gray-50/80 dark:bg-white/[0.03] backdrop-blur-sm px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 dark:focus:border-blue-500/50 hover:border-gray-300 dark:hover:border-white/[0.14] transition-all duration-300 shadow-sm';

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-[#050816] dark:via-[#0B1126] dark:to-[#111827] transition-colors duration-500"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-[-80px] h-[380px] w-[380px] rounded-full bg-blue-500/8 dark:bg-blue-500/10 blur-[150px]" />
        <div className="absolute right-[-80px] top-[80px] h-[360px] w-[360px] rounded-full bg-violet-500/8 dark:bg-violet-500/10 blur-[150px]" />
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 h-[300px] w-[300px] rounded-full bg-pink-500/6 dark:bg-pink-500/8 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            style={{ fontFamily: "'Sora', Montserrat, sans-serif", letterSpacing: '-0.02em' }}
          >
            <TypingAnimation
              text="Get In Touch"
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
            />
          </h2>

          {/* Accent line */}
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-blue-500/40" />
            <div className="h-[3px] w-20 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-pink-500/40" />
          </div>

          <p
            className="max-w-xl mx-auto mt-6 text-sm md:text-[0.95rem] text-gray-500 dark:text-gray-400 leading-[1.8]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Have a project in mind or want to discuss potential opportunities? Feel free to
            reach out — I'd love to hear from you.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-12 items-start">

          {/* ── Left: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact info card */}
            <div className="rounded-2xl border border-gray-200/70 dark:border-white/[0.07] bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl p-6 shadow-sm space-y-5">
              <h3
                className="text-base font-semibold text-gray-900 dark:text-white"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Contact Information
              </h3>

              {[
                {
                  icon: <Mail className="w-4 h-4" />,
                  value: 'razazaheer2002@gmail.com',
                  color: 'text-blue-500 dark:text-blue-400',
                  bg: 'bg-blue-50 dark:bg-blue-500/10',
                },
                {
                  icon: <MapPin className="w-4 h-4" />,
                  value: 'Karachi, Pakistan',
                  color: 'text-rose-500 dark:text-rose-400',
                  bg: 'bg-rose-50 dark:bg-rose-500/10',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-xl ${item.bg} ${item.color} flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <span
                    className="text-sm text-gray-600 dark:text-gray-300 break-all"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Social card */}
            <div className="rounded-2xl border border-gray-200/70 dark:border-white/[0.07] bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl p-6 shadow-sm">
              <h3
                className="text-base font-semibold text-gray-900 dark:text-white mb-4"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Follow Me
              </h3>
              <div className="flex gap-3">
                {[
                  {
                    href: 'https://github.com/razazaheer12',
                    icon: <Github size={18} />,
                    label: 'GitHub',
                    gradient: 'from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800',
                  },
                  {
                    href: 'https://www.linkedin.com/in/raza-zaeer-416745340/',
                    icon: <Linkedin size={18} />,
                    label: 'LinkedIn',
                    gradient: 'from-blue-600 to-blue-700',
                  },
                ].map(({ href, icon, label, gradient }, idx) => (
                  <motion.a
                    key={idx}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r ${gradient} text-white text-xs font-semibold shadow-md hover:shadow-lg transition-all duration-300`}
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {icon}
                    {label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-gray-200/70 dark:border-white/[0.07] bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-blue-500/8 dark:hover:shadow-blue-500/10 hover:border-gray-300/80 dark:hover:border-white/[0.12] transition-all duration-500">

              <h3
                className="text-base font-semibold text-gray-900 dark:text-white mb-1"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Send me an Email
              </h3>
              <p
                className="text-xs text-gray-400 dark:text-gray-500 mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Ready to start a conversation? Drop me a message below.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Sora', sans-serif" }}>
                    Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      placeholder="Your name"
                      className={`${inputBase} pl-10`}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Sora', sans-serif" }}>
                    Email <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      type="email"
                      placeholder="your@email.com"
                      className={`${inputBase} pl-10`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Sora', sans-serif" }}>
                    Message <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 text-gray-400 w-4 h-4" />
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={5}
                      placeholder="Type your message..."
                      className={`${inputBase} pl-10 resize-none`}
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit */}
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-emerald-500"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    ✅ Message Sent Successfully!
                  </motion.div>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl border border-gray-300 dark:border-white/15 bg-white/80 dark:bg-white/5 backdrop-blur-sm px-7 py-3.5 text-gray-800 dark:text-white text-sm font-medium shadow-sm transition-all duration-500 hover:scale-[1.02] hover:border-transparent hover:text-white hover:shadow-[0_10px_50px_rgba(168,85,247,0.4)] disabled:opacity-50 disabled:pointer-events-none"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {/* Gradient fill on hover */}
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {isSubmitting ? (
                      <>
                        <div className="relative z-10 w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                        <span className="relative z-10">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                        <span className="relative z-10 tracking-wide">Send Message</span>
                      </>
                    )}
                  </button>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <Toaster position="bottom-center" />
    </section>
  );
};

export default Contact;
