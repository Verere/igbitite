"use client"
import { motion } from 'framer-motion';
import { Flame, Wifi, Factory, Building2, Landmark, Briefcase } from 'lucide-react';

const industries = [
  {
    icon: Flame,
    name: 'Energy & Utilities',
    description: 'Power, oil & gas, and utility infrastructure.'
  },
  {
    icon: Wifi,
    name: 'Telecommunications',
    description: 'Networks, data centers, and smart connectivity.'
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Industrial automation and process engineering.'
  },
  {
    icon: Building2,
    name: 'Construction & Real Estate',
    description: 'Commercial, residential, and estate development.'
  },
  {
    icon: Landmark,
    name: 'Government Projects',
    description: 'Public infrastructure and smart city solutions.'
  },
  {
    icon: Briefcase,
    name: 'Commercial Buildings',
    description: 'Corporate offices, malls, and business parks.'
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-dark via-navy to-black text-white overflow-hidden">
      {/* Animated floating shapes background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-accent-blue/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-accent-blue/10 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-accent-blue/30 rounded-full blur-2xl animate-pulse-slower" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-extrabold text-white text-center mb-14 tracking-tight drop-shadow-[0_0_16px_#00AEEF99]"
        >
          Industries We Serve
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 2, scale: 1.06 }}
              className="group rounded-2xl bg-[#0A192F]/80 border border-[#00AEEF]/20 shadow-2xl p-10 flex flex-col items-center text-center hover:scale-[1.06] hover:shadow-accent-blue/40 hover:border-accent-blue/80 transition-all duration-300 relative overflow-hidden hover:z-20"
            >
              {/* Animated accent ring */}
              <div className="absolute -inset-1 z-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-br from-accent-blue/30 to-navy/20 blur-2xl" />
              <div className="mb-5 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent-blue/90 to-navy/80 shadow-lg group-hover:shadow-accent-blue/40 group-hover:scale-110 transition-all duration-300 border-2 border-accent-blue/40">
                <industry.icon size={36} className="text-accent-blue drop-shadow-[0_0_8px_#00AEEF]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-wide drop-shadow-[0_1px_4px_#00AEEF77]">{industry.name}</h3>
              <p className="text-light/90 mb-2 text-base font-medium">{industry.description}</p>
              {/* Subtle glass border on hover */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl border border-accent-blue/50 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
