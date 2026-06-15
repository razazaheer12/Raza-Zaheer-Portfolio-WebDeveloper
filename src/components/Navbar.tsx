import React from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[999] transition-all">
        <div className="absolute top-0 left-0 w-full h-4 bg-white dark:bg-[#070C18]" />
        <div className="px-4 pt-3">

         <div
  className="
  max-w-7xl
  mx-auto

  h-[68px]

  rounded-[22px]

  bg-white/60
  dark:bg-[#070C18]/72

  backdrop-blur-[30px]

  border
  border-transparent

  shadow-[0_10px_35px_rgba(0,0,0,0.05)]
  dark:shadow-[0_12px_40px_rgba(0,0,0,0.28)]

  flex
  items-center
  justify-between

  px-5
  lg:px-8
"
>
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 shrink-0">
              <motion.div
                whileHover={{ rotate: 6, scale: 1.06 }}
                className="w-10 h-10 rounded-[14px] flex items-center justify-center text-white font-bold bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 shadow-lg"
              >
                RZ
              </motion.div>
              <div>
                <h2
                  className="text-[18px] font-bold text-gray-900 dark:text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  
                </h2>
                <p className="text-[10px] uppercase tracking-[3px] text-gray-500 dark:text-gray-400">
                 
                </p>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex">
              <div className="flex items-center gap-1 rounded-full bg-black/[0.02] dark:bg-white/[0.03] p-1">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ y: -1 }}
                    className="relative px-5 py-2.5 rounded-full text-[14px] font-medium text-gray-700 dark:text-gray-300 overflow-hidden group"
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 scale-0 transition duration-300 group-hover:scale-100" />
                    <span className="relative group-hover:text-white">{item.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">

              {/* ThemeToggle — desktop only */}
              <div className="hidden lg:flex">
                <ThemeToggle />
              </div>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-10 h-10 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] flex items-center justify-center"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden mt-3 rounded-[22px] bg-white/90 dark:bg-[#070C18]/95 backdrop-blur-2xl border border-gray-200 dark:border-white/10 overflow-hidden"
            >
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-4 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-white/5"
                >
                  {item.name}
                </a>
              ))}

              {/* ThemeToggle — mobile, last item */}
              <div className="px-6 py-4 border-t border-gray-100 dark:border-white/[0.06] flex items-center gap-3 text-gray-800 dark:text-gray-200">
                <span className="text-sm font-medium"></span>
                <ThemeToggle />
              </div>
            </motion.div>
          )}

        </div>
      </nav>

      {/* Hero offset */}
      <div className="h-[88px]" />
    </>
  );
};

export default Navbar;
