"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, Headphones } from "lucide-react";

const metrics = [
  {
    icon: Award,
    value: 120,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: ShieldCheck,
    value: 10,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Users,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    icon: Headphones,
    value: 24,
    suffix: "/7",
    label: "Technical Support",
  },
];

export default function TrustMetricsSection() {
  return (
    <section id="trust" className="relative py-20 px-4 md:px-8 bg-[#F8FAFC]/80 dark:bg-[#111827]/90">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 + i * 0.1 }}
            viewport={{ once: true }}
            className="group glassmorphism rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl border border-white/10 hover:scale-105 hover:shadow-[#00AEEF]/30 transition-all duration-300 bg-gradient-to-br from-[#0A192F]/90 to-[#00AEEF]/80 text-white backdrop-blur-xl relative overflow-hidden"
          >
            <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-accent-blue/90 to-navy/80 shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 border-white/10">
              <metric.icon size={32} className="text-white drop-shadow-glow" />
            </div>
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              className="text-3xl md:text-4xl font-extrabold text-navy dark:text-white mb-1 flex items-end gap-1"
            >
              <span>{metric.value}</span>
              <span className="text-accent-blue text-2xl md:text-3xl font-bold">{metric.suffix}</span>
            </motion.div>
            <div className="text-navy/80 dark:text-light/80 text-base font-medium tracking-wide">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
