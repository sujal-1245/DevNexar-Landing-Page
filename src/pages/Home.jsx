import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0f1117] text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* 🌌 Background Glow Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-cyan-400 rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[100px] opacity-20" />
      </div>

      {/* 🧊 Glass Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-2xl w-full p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 
        shadow-[0_0_80px_rgba(0,255,255,0.08)] text-center
        before:absolute before:inset-[-2px] before:rounded-3xl before:z-[-1] 
        before:bg-gradient-to-br before:from-cyan-400 before:via-purple-500 before:to-indigo-500 
        before:blur-[30px] before:opacity-20 before:animate-pulse"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 text-transparent bg-clip-text mb-4">
           Welcome to Devnexar
        </h1>
        <p className="text-lg text-gray-300">
          You are now logged in. Explore our platform and discover what’s next!
        </p>

        {/* 🚀 Optional Action Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="px-6 py-2 rounded-full bg-gradient-to-br from-cyan-400 via-sky-400 to-indigo-500 text-black font-semibold hover:from-cyan-300 hover:to-indigo-400 transition shadow-lg">
            Dashboard
          </button>
          <button className="px-6 py-2 rounded-full border border-cyan-500 text-cyan-300 hover:bg-cyan-500 hover:text-black transition duration-300">
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
