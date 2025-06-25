import React from "react";
import { motion } from "framer-motion";
import AnimatedHeadline from "./AnimatedHeadline";
import HeroVisual from "./HeroVisual";
import { FaPlay } from "react-icons/fa";
import { SparklesCore } from "./Sparkles";
import { Link } from "react-router-dom"; // 🔗 Add Link for navigation

const stagger = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
      ease: "easeOut"
    }
  }
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative isolate flex flex-col-reverse lg:flex-row items-center justify-between min-h-[100vh] px-6 lg:px-20 overflow-hidden pt-19"
    >
      {/* 🌌 Background Glow & Particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-cyan-400 rounded-full opacity-20 blur-[120px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-indigo-600 rounded-full opacity-20 blur-[100px]" />
        <SparklesCore />
      </div>

      {/* LEFT SIDE */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="z-10 max-w-xl text-center lg:text-left"
      >
        {/* ⚡ Animated Headline */}
        <motion.div variants={stagger}>
          <AnimatedHeadline />
        </motion.div>

        {/* 📝 Subtext */}
        <motion.p
          variants={stagger}
          className="mt-6 text-gray-400 leading-relaxed tracking-wide text-base sm:text-lg"
        >
          Devnexar is your launchpad to craft, deploy, and scale next-gen web apps — faster than ever before.
        </motion.p>

        {/* 🚀 CTA Buttons */}
        <motion.div
          variants={stagger}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          {/* 📘 Documentation */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/sujal-1245"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-gradient-to-br from-cyan-300 to-cyan-500 text-black font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-[0_0_25px_#22d3ee] backdrop-blur-md"
          >
            <span className="relative z-10">Documentation</span>
            <span className="absolute inset-0 bg-white/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
          </motion.a>

          {/* 🚀 Get Started (link to login) */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/login"
              className="relative group flex items-center gap-2 border border-cyan-400 text-cyan-300 py-3 px-6 rounded-full hover:bg-cyan-900 transition duration-300 backdrop-blur-sm"
            >
              <FaPlay className="text-sm" />
              <span className="relative z-10">Get Started</span>
              <div className="absolute left-0 top-0 w-full h-full opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm animate-pulse" />
            </Link>
          </motion.div>
        </motion.div>

        {/* ✅ Micro Trust Badge */}
        <motion.p
          variants={stagger}
          className="mt-4 text-xs text-gray-500 italic tracking-wider"
        >
          💡 Trusted by 10,000+ developers worldwide
        </motion.p>
      </motion.div>

      {/* RIGHT SIDE */}
      <HeroVisual />
    </section>
  );
};

export default Hero;
