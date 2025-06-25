import devVideo from '../assets/videos/dev-loop.mp4';
import scaleVideo from '../assets/videos/scale-loop.mp4';
import setupVideo from '../assets/videos/setup-loop.mp4';
import setupLottie from '../assets/lottie/setup.json';
import ironmanVideo from '../assets/videos/ironman.mp4';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Lottie from 'lottie-react';

const features = [
  {
    title: "Developer Friendly",
    description: "Built for speed and flexibility, with intuitive APIs and robust documentation.",
    mediaSrc: devVideo,
  },
  {
    title: "Effortless Scaling",
    description: "Scale seamlessly with our modular architecture and elastic infrastructure.",
    mediaSrc: scaleVideo,
  },
  {
    title: "Easy Setup",
    description: "Get started in minutes with a clean, guided onboarding experience.",
    mediaSrc: setupVideo,
  },
];

const FeatureCard = ({ title, description, mediaSrc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 80, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.03}
      transitionSpeed={1000}
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor="#38bdf8"
      glarePosition="all"
    >
      <div className="relative group rounded-2xl backdrop-blur-md overflow-hidden bg-[#0c111c]/70 shadow-[0_10px_60px_rgba(59,130,246,0.15)] hover:shadow-[0_20px_90px_rgba(59,130,246,0.3)] transition-all duration-500">
        
        {/* ✨ Neon Pulse Border */}
        <div className="absolute -inset-0.5 rounded-2xl z-0 bg-gradient-to-tr from-[#1e90ff] via-[#00bfff] to-[#3a8fff] opacity-60 group-hover:opacity-100 transition-opacity duration-700 blur-sm animate-[pulse_2.5s_ease-in-out_infinite]" />

        {/* 🎥 Video Content */}
        <div className="relative z-10 p-6 flex flex-col items-center text-center">
          <video
            src={mediaSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="rounded-xl w-full h-40 sm:h-44 md:h-48 object-cover mb-4 transition-transform duration-300 transform group-hover:scale-105 shadow-md"
          />
          <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">{title}</h3>
          <p className="text-sm text-gray-300 max-w-xs">{description}</p>
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Features = () => (
  <section id="features" className="relative py-28 overflow-hidden z-10">
    {/* 💫 Background Glow */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0e111b] via-[#0a0c13] to-black" />
    <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[100%] opacity-10 blur-3xl" viewBox="0 0 800 600">
      <path fill="#1E90FF" d="M452,0C566.2,0,655,110.6,655,246s-88.8,246-203,246S249,381.4,249,246S337.8,0,452,0z"/>
    </svg>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      {/* 🧠 Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-400 drop-shadow-[0_4px_24px_rgba(59,130,246,0.5)]">
          Powerful Features
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
          Explore what makes <span className="text-blue-400 font-medium">Devnexar</span> stand out from the crowd.
        </p>
      </motion.div>

      {/* 🔳 Feature Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feat, i) => (
          <FeatureCard key={i} {...feat} index={i} />
        ))}
      </div>

      {/* 🧬 Lottie Highlight Section with Cinematic Depth */}
<motion.div
  initial={{ opacity: 0, scale: 0.92 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, delay: 0.2 }}
  viewport={{ once: false, amount: 0.3 }}
  className="relative mt-28 px-6"
>
  {/* 🎥 Cinematic Video Background */}
  <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl shadow-[0_0_120px_rgba(0,191,255,0.15)]">
    <video
      src={ironmanVideo}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      className="w-full h-full object-cover blur-lg brightness-40 scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70" />
  </div>

  {/* ✨ Glass Card with Lottie */}
  <div className="relative max-w-4xl mx-auto rounded-[2rem] border border-cyan-400/10 bg-[#0c111c]/80 backdrop-blur-lg px-8 py-10 sm:px-12 sm:py-14 shadow-[0_0_60px_rgba(0,191,255,0.15)]">
    {/* 💎 Glow Layer */}
    <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-tr from-cyan-300/10 via-blue-500/20 to-indigo-500/10 blur-[60px]" />

    <h3 className="text-4xl sm:text-5xl text-center font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 mb-8">
      Seamless Experience
    </h3>

    <div className="flex justify-center items-center">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-full max-w-[340px]"
      >
        <Lottie
          animationData={setupLottie}
          loop
          autoplay
          style={{ filter: "drop-shadow(0 0 20px rgba(59,130,246,0.4))" }}
          role="img"
          aria-label="Setup animation"
        />
      </motion.div>
    </div>
  </div>
</motion.div>

    </div>
  </section>
);

export default Features;
