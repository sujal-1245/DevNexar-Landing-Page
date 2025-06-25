import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

const HeroVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="w-full lg:w-1/2 h-[450px] sm:h-[550px] lg:h-[600px] relative"
    >
      {/* Replace with your custom 3D model */}
      <Spline scene="https://prod.spline.design/MIJoqG-Uk7XNp-O8/scene.splinecode" />
    </motion.div>
  );
};

export default HeroVisual;
