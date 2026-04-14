"use client";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from "Assets/imgbin_computer-icons-ice-cube-png.png";

const menuVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 },
};

export default function NavBar() {
  const [navbar, setNavbar] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setNavbar((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && navbar) {
        setNavbar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [navbar]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    {
      href: "https://drive.google.com/file/d/1bI0FEt7JVKQcfUBECfZ_l6TaMTXQqTgr/view?usp=sharing",
      label: "Resume",
      external: true,
    },
  ];

  return (
    <motion.nav
      initial={false}
      animate={navbar ? "open" : "closed"}
      className={`w-full fixed z-40 top-0 transition-all duration-300 font-outfit
        ${
          scrolled
            ? "bg-slate-800/95 backdrop-blur-sm shadow-lg mt-0"
            : "bg-slate-800"
        }
        ${navbar ? "h-screen md:h-auto" : ""}`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex-shrink-0">
              <Image
                src={logo}
                alt="logo ice"
                className="invert w-8 h-8 md:w-10 md:h-10"
                width={40}
                height={40}
                priority
              />
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleNavbar}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md 
            text-white hover:bg-slate-700 transition-colors duration-200"
            aria-expanded={navbar}
          >
            <span className="sr-only">Open main menu</span>
            <motion.div
              animate={navbar ? "open" : "closed"}
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
            >
              {navbar ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.div>
          </motion.button>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium
                hover:underline underline-offset-4 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:ayodejiatanda1@gmail.com"
              className="bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {navbar && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden"
            >
              <motion.div className="px-2 pt-2 pb-6 flex flex-col h-[calc(100vh-4rem)]">
                {/* Nav links */}
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.label}
                      variants={itemVariants}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        className="text-white hover:bg-slate-700 block px-3 py-3 text-lg
                        font-medium transition-all duration-200"
                        onClick={toggleNavbar}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Get In Touch — CTA in mobile menu */}
                  <motion.div variants={itemVariants} whileTap={{ scale: 0.95 }}>
                    <a
                      href="mailto:ayodejiatanda1@gmail.com"
                      className="text-white hover:bg-slate-700 block px-3 py-3 text-lg
                      font-medium transition-all duration-200"
                      onClick={toggleNavbar}
                    >
                      Get In Touch
                    </a>
                  </motion.div>
                </div>

                {/* Social links — pushed to bottom */}
                <motion.div
                  variants={itemVariants}
                  className="mt-auto flex items-center gap-6 px-3 pt-6 border-t border-slate-700"
                >
                  <a href="https://github.com/deji-ice" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  </a>
                  <a href="https://twitter.com/DEJIxICE" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-slate-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/ayodeji-atanda/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="mailto:ayodejiatanda1@gmail.com" aria-label="Email" className="text-slate-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
