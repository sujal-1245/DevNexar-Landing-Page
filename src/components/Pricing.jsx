import { motion } from "framer-motion";
import { FaRocket, FaFire, FaGem } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    price: "Free",
    icon: <FaRocket className="text-cyan-400 text-3xl mb-4" />,
    features: ["Up to 3 Projects", "Basic Analytics", "Community Support"],
  },
  {
    name: "Pro",
    price: "$29/mo",
    icon: <FaFire className="text-cyan-400 text-3xl mb-4" />,
    features: ["Unlimited Projects", "Advanced Analytics", "Priority Support"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    icon: <FaGem className="text-cyan-400 text-3xl mb-4" />,
    features: ["Dedicated Infrastructure", "Premium SLA", "Custom Integrations"],
  },
];

const PricingCard = ({ name, price, icon, features, highlight, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: false, amount: 0.3 }}
  >
    <div
      className={`relative group p-6 sm:p-8 rounded-2xl backdrop-blur-md border border-white/10 bg-white/5 shadow-xl overflow-hidden transition-all duration-300 ${
        highlight ? "scale-[1.05] z-10" : ""
      }`}
    >
      {/* 🔵 Gradient Pulse Border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-50 group-hover:opacity-100 blur-md rounded-2xl transition-opacity duration-500 z-0"></div>

      {/* 💬 Card Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {icon}
        <h3 className="text-2xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-3xl font-bold text-cyan-400 mb-4">{price}</p>
        <ul className="text-gray-300 space-y-2 mb-6">
          {features.map((f, i) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>
        <button className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white font-medium transition-all duration-300 shadow-md hover:shadow-cyan-400/40 ring-2 ring-transparent hover:ring-cyan-400 focus:outline-none">
          Choose Plan
        </button>
      </div>
    </div>
  </motion.div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Flexible Pricing</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transparent plans for teams of all sizes.
          </p>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
