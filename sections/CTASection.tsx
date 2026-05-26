"use client";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="cta" className="relative py-16 px-2 sm:py-20 sm:px-4 md:px-8 bg-gradient-to-br from-[#00AEEF] via-[#0A192F] to-[#111827] text-white overflow-hidden">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-4 sm:p-8 md:p-12 border border-[#00AEEF]/20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-heading font-extrabold text-white mb-2 sm:mb-4 tracking-tight drop-shadow-lg"
        >
          Let’s Build Reliable Engineering Solutions Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-2xl text-base sm:text-lg md:text-2xl text-white/90 font-medium mb-2 sm:mb-4"
        >
          Partner with us for world-class engineering, technical excellence, and project delivery you can trust.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full sm:justify-center"
        >
          <a href="#contact" className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-white text-[#00AEEF] font-bold text-base sm:text-lg shadow-soft hover:scale-105 hover:bg-[#F8FAFC] hover:text-[#0A192F] transition-all duration-200">
            Contact Us
          </a>
          <a href="#contact" className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-[#00AEEF] text-white font-bold text-base sm:text-lg shadow-soft hover:scale-105 hover:bg-gradient-to-r hover:from-[#00AEEF] hover:to-[#0A192F] transition-all duration-200">
            Request Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
