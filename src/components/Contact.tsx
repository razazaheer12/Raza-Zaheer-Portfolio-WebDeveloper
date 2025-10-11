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
          className="text-blue-600 dark:text-blue-400"
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
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-500"
    >
      {/* Floating Animated Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.15), transparent 60%)',
        }}
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10" />

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
    className="mx-auto h-[4px] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_8px_#8b5cf6,0_0_16px_#3b82f6]"
  ></motion.div>

  <p
    className="max-w-3xl mx-auto mt-6 text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-snug tracking-tight"
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
    <div className="flex items-center space-x-3">
      <Mail className="text-blue-500" size={22} />
      <span>razazaheer2002@gmail.com</span>
    </div>

    <div className="flex items-center space-x-3">
      <span className="text-purple-500 text-lg"> 🌐 </span>
      <span>Karachi, Pakistan</span>
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
                    gradient: 'from-blue-600 to-purple-600',
                    label: 'GitHub Profile',
                  },
                  {
                    href: 'https://www.linkedin.com/in/raza-zaeer-416745340/',
                    icon: <Linkedin size={24} />,
                    gradient: 'from-purple-600 to-pink-500',
                    label: 'LinkedIn Profile',
                  },
                ].map(({ href, icon, gradient, label }, idx) => (
                  <motion.a
                    key={idx}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      boxShadow: '0 10px 25px rgba(59,130,246,0.3)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300`}
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
            transition={{ duration: 0.6, delay: 0.3 }}
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
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-100/50 dark:border-gray-700/50 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]">
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
                      whileFocus={{ scale: 1.02 }}
                      className="pl-12 w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-4 focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white shadow-sm hover:shadow-md transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
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
                      whileFocus={{ scale: 1.02 }}
                      className="pl-12 w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-4 focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white shadow-sm hover:shadow-md transition-all"
                      placeholder="razazaheer2002@gmail.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
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
                      whileFocus={{ scale: 1.02 }}
                      className="pl-12 w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-4 focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white shadow-sm hover:shadow-md resize-none transition-all"
                      placeholder="Type your message..."
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit */}
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center justify-center text-green-500 text-lg font-semibold"
                  >
                    ✅ Message Sent!
                  </motion.div>
                ) : (
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 rounded-xl shadow-lg hover:shadow-2xl transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2" size={20} />
                      </>
                    )}
                  </motion.button>
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
