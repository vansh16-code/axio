'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact us" }
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'top-0 px-2 sm:px-4 pt-2' 
          : 'top-3 md:top-4 px-4 sm:px-6 pt-0'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className={`rounded-full transition-all duration-300 overflow-visible ${
            scrolled 
              ? 'px-3 sm:px-4 h-10 sm:h-12' 
              : 'px-4 sm:px-6 h-12 sm:h-14 md:h-16'
          }`}
          style={{
            backgroundColor: scrolled 
              ? 'rgba(255, 255, 255, 0.9)' 
              : 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(8px)',
            border: '1px solid #e5e7eb'
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="flex items-center">
                <Image
                  src="/wetrans.png"
                  alt="WE Logo"
                  width={420}
                  height={800}
                  className={`w-auto transition-all duration-300 ${
                    scrolled 
                      ? 'h-[48px] sm:h-[56px] -translate-y-1' 
                      : 'h-[64px] sm:h-[72px] md:h-[104px] lg:h-[116px] -translate-y-2 md:-translate-y-3'
                  }`}
                  priority
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className={`flex items-center transition-all duration-300 ${
                scrolled ? 'space-x-4 lg:space-x-6' : 'space-x-6 lg:space-x-8'
              }`}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative font-medium transition-all duration-300 group ${
                        scrolled ? 'text-xs lg:text-sm' : 'text-sm lg:text-base'
                      } ${
                        item.label === "Contact us"
                          ? "text-green-700 hover:text-green-600"
                          : "text-gray-900 hover:text-green-600"
                      }`}
                    >
                      {item.label}
                      <motion.div
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-green-600 focus:outline-none p-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                <svg className={`transition-all duration-300 ${
                  scrolled ? 'h-5 w-5' : 'h-6 w-6'
                }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 mt-2 mx-3 sm:mx-4"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            >
              <div
                className="rounded-2xl p-4 sm:p-6 space-y-1 shadow-2xl"
                style={{
                  backgroundColor: 'rgba(26, 26, 26, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid #333'
                }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`block py-3 px-3 rounded-xl text-base font-medium transition-all duration-200 ${
                        item.label === "Contact us"
                          ? "text-green-400 hover:text-green-300 hover:bg-green-400/10"
                          : "text-white hover:text-green-400 hover:bg-white/5"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}