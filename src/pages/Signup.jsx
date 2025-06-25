import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }
    setError("");
    navigate("/home");
  };

  return (
    <div className="mt-10 relative min-h-screen bg-[#0f1117] flex items-center justify-center overflow-hidden px-4 py-10">
      {/* 🔮 Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-cyan-400 rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[100px] opacity-20" />
      </div>

      {/* ✨ Animated Glass Container */}
      <motion.form
        onSubmit={handleSignup}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 
        shadow-[0_0_80px_rgba(0,255,255,0.08)] text-white flex flex-col gap-6 
        before:absolute before:inset-[-2px] before:rounded-3xl before:z-[-1] 
        before:bg-gradient-to-br before:from-cyan-400 before:via-purple-500 before:to-indigo-500 
        before:blur-[30px] before:opacity-20 before:animate-pulse"
      >
        {/* 💡 Heading */}
        <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 text-transparent bg-clip-text">
          Create Your Account
        </h2>

        {/* 👤 Name Field */}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-3 rounded-lg bg-black/30 border border-cyan-500 placeholder-gray-400 
          focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition duration-300"
        />

        {/* 📧 Email Field */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 rounded-lg bg-black/30 border border-cyan-500 placeholder-gray-400 
          focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition duration-300"
        />

        {/* 🔐 Password Field + Toggle */}
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 pr-10 rounded-lg bg-black/30 border border-cyan-500 placeholder-gray-400 
            focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition duration-300"
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-cyan-300"
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* ⚠️ Error */}
        {error && (
          <p className="text-sm text-red-400 text-center">{error}</p>
        )}

        {/* ✨ Sign Up Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-br from-cyan-400 via-sky-400 to-indigo-500 
          text-black font-bold hover:from-cyan-300 hover:to-indigo-400 transition-all duration-300 shadow-lg"
        >
          Sign Up
        </button>

        {/* 🧭 Log In Link */}
        <p className="text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-400 underline">
            Log In
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default Signup;
