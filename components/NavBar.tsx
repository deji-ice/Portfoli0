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
            ? "bg-slate-800/90 backdrop-blur-sm shadow-lg mt-0"
            : "bg-slate-800"
        }
        ${navbar ? "h-screen md:h-auto" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium
                  hover:underline underline-offset-4 transition-all duration-200"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <button className="bg-white rounded-lg px-3 py-2 font-semibold">
              Get In Touch
            </button>
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
              <motion.div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={itemVariants}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      className="text-white hover:bg-slate-700 block px-3 py-2 rounded-md text-base
                      font-medium transition-all duration-200"
                      onClick={toggleNavbar}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
