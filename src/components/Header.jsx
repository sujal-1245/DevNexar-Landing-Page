import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // 🔗 for routing

const navLinks = ['Features', 'Testimonials', 'Pricing', 'Contact'];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed w-full top-0 left-0 z-[100]">
      {/* 🔷 Gradient Glow Background */}
      <div className="absolute inset-0 h-full w-full z-[-1] rounded-b-2xl blur-[10px] opacity-70 pointer-events-none bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 animate-pulse" />

      {/* 🧊 Glass Header */}
      <div className="px-6 lg:px-20 py-5 flex justify-between items-center backdrop-blur-xl bg-black/50 border-b border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] rounded-b-xl">
        
        {/* 🌈 Logo */}
        <Link to="/" className="focus:outline-none">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 relative cursor-pointer"
          >
            DEVNEXAR
          </motion.h1>
        </Link>

        {/* 🌐 Desktop Nav */}
        <nav className="hidden md:flex gap-10 items-center">
          {navLinks.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="relative text-sm uppercase tracking-wider text-white hover:text-cyan-300 transition 
                after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 
                after:bg-gradient-to-r from-cyan-300 to-indigo-400 after:transition-all after:duration-300 
                hover:after:w-full"
            >
              {link}
            </motion.a>
          ))}
        </nav>

        {/* 🚀 Desktop CTA - Sign In */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:flex"
        >
          <Link
            to="/login"
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 text-black px-5 py-2 rounded-full font-semibold shadow-lg hover:shadow-[0_0_25px_#67e8f9] transition duration-300"
          >
            <FaRocket className="text-white" />
            Sign In
          </Link>
        </motion.div>

        {/* ☰ Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl text-cyan-300 z-50"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-10 text-white text-2xl z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={toggleMobileMenu}
                className="hover:text-cyan-400 transition duration-200"
              >
                {link}
              </a>
            ))}

            {/* 📱 Mobile Get Started Button */}
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="/login"
                onClick={toggleMobileMenu}
                className="px-6 py-2 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-medium shadow-lg"
              >
                Sign In
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
