import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Patel",
    feedback: "Devnexar's tools saved us hours every week. Beautiful, intuitive, and blazing fast.",
    role: "Full Stack Developer",
  },
  {
    name: "Neha Sharma",
    feedback: "Seamless onboarding and rock-solid performance. Absolutely love the UI!",
    role: "Tech Lead at Hexabyte",
  },
  {
    name: "Ryan Cooper",
    feedback: "I’ve worked with many platforms, but Devnexar nailed the balance between power and simplicity.",
    role: "CTO, CloudMorph",
  },
];

const faqs = [
  {
    question: "How fast can I deploy with Devnexar?",
    answer: "You can get started in minutes. Our prebuilt templates and guided setup ensure zero friction from dev to deploy.",
  },
  {
    question: "Is Devnexar suitable for large-scale apps?",
    answer: "Absolutely. Devnexar is built with scalability in mind — from microservices to global scale, we've got you covered.",
  },
  {
    question: "Can I integrate third-party tools?",
    answer: "Yes. Devnexar supports a wide range of integrations including analytics, CI/CD, and custom APIs.",
  },
];

const Testimonials = () => {
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 24,
    },
  });

  useEffect(() => {
    clearInterval(timer.current);
    if (slider) {
      timer.current = setInterval(() => {
        slider.current?.next();
      }, 4000);
    }
    return () => clearInterval(timer.current);
  }, [slider]);

  return (
    <section id="testimonials" className="py-28 text-white relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-400">
            What Developers Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-3">
            Real feedback from teams using <span className="text-blue-400 font-medium">Devnexar</span> every day.
          </p>
        </motion.div>

        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="keen-slider__slide flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 border border-cyan-400/10 hover:border-cyan-300/30 backdrop-blur-md rounded-2xl p-8 max-w-xl w-full text-center shadow-[0_10px_60px_rgba(59,130,246,0.1)] transition-all duration-500 hover:shadow-[0_20px_90px_rgba(59,130,246,0.3)]">
                <p className="text-lg text-gray-300 italic mb-4">“{t.feedback}”</p>
                <h4 className="text-xl font-semibold text-white">{t.name}</h4>
                <span className="text-sm text-cyan-400">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🧠 FAQ Section */}
      <section id="faq" className="mt-32 max-w-5xl mx-auto px-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-400">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg mt-4">All you need to know about Devnexar in one place.</p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </section>
    </section>
  );
};

// FAQ Accordion Component
const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: false, amount: 0.2 }}
      className="border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md bg-white/5"
    >
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-white/10 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white font-medium text-lg">{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-cyan-400"
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="px-6 pb-5 text-gray-300"
          >
            <p>{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Testimonials;
