import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    },
  }),
};

const lines = [
  "Next-Gen Development",
  "Platform for Visionaries",
];

const AnimatedHeadline = () => {
  return (
    <div className="space-y-1 sm:space-y-2">
      {lines.map((line, i) => (
        <motion.h1
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-[clamp(1.8rem,4.5vw,3rem)] font-bold leading-snug tracking-wide text-white"
        >
          {line}
        </motion.h1>
      ))}
    </div>
  );
};

export default AnimatedHeadline;
