"use client"
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const features = [
  'Experienced Engineering Professionals',
  'Innovative Solutions',
  'Sustainable Technologies',
  'End-to-End Project Delivery',
  'Technical Support',
  'Quality Assurance',
];

export default function WhyChooseUsSection() {
  return (
    <section id="whychooseus" className="relative py-16 px-2 sm:py-20 sm:px-4 md:px-8 bg-gradient-to-b from-[#0A192F] via-[#111827] to-[#000000] text-white overflow-hidden">
      <div className="max-w-5xl mx-auto rounded-3xl bg-white/10 backdrop-blur-xl shadow-2xl p-4 sm:p-8 md:p-16 flex flex-col items-center border border-[#00AEEF]/20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-heading font-extrabold text-white text-center mb-8 sm:mb-12 tracking-tight drop-shadow-lg"
        >
          Why Choose Us
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 w-full">
          {features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 sm:gap-6 bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-xl border border-[#00AEEF]/20 hover:scale-[1.03] hover:shadow-[#00AEEF]/30 hover:border-[#00AEEF]/60 transition-all duration-300"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 300 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#0A192F] shadow-lg border-2 border-white/10"
              >
                <CheckCircle2 className="text-white" size={28} />
              </motion.span>
              <span className="text-base sm:text-xl font-semibold text-white/90 tracking-wide drop-shadow-sm">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
