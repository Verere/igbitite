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
    <section id="whychooseus" className="relative py-24 px-6 bg-navy">
      <div className="max-w-6xl mx-auto rounded-2xl bg-gradient-to-br from-navy to-electric/60 shadow-2xl p-12 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-8"
        >
          Why Choose Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-white/5 rounded-2xl p-6 shadow-soft border border-electric/20 hover:shadow-xl transition-all duration-300"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 300 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-electric to-navy shadow-lg"
              >
                <CheckCircle2 className="text-white" size={28} />
              </motion.span>
              <span className="text-lg font-semibold text-white/90">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
