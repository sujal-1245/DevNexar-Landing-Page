import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="relative z-10 py-24 px-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Ready to build with Devnexar?</h2>
        <p className="text-lg text-gray-400 mb-10">
          Let&apos;s supercharge your product with lightning-fast dev tools, AI smarts, and a next-gen stack.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 rounded-xl text-lg font-medium bg-cyan-500 text-white transition-all duration-300 hover:bg-cyan-400 focus:outline-none shadow-md hover:shadow-cyan-500/40 ring-2 ring-transparent hover:ring-cyan-400"
        >
          Get Started
        </a>
      </motion.div>

      {/* Socials + Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-24 pt-8 border-t border-white/10 text-center text-sm text-gray-400"
      >
        <div className="flex justify-center gap-6 mb-4">
          {[["https://github.com/", FaGithub], ["https://linkedin.com/", FaLinkedin], ["https://twitter.com/", FaTwitter]].map(
            ([href, Icon], i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="hover:text-white transition"
              >
                <Icon size={20} />
              </motion.a>
            )
          )}
        </div>
        <p>© {new Date().getFullYear()} Devnexar. All rights reserved.</p>
      </motion.div>
    </section>
  );
};

export default Contact;
