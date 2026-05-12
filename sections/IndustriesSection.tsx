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
    <section id="industries" className="relative py-24 px-6 bg-light">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-navy text-center mb-12"
        >
          Industries We Serve
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + i * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl bg-white border border-navy/10 shadow-soft p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-xl transition-all duration-300 glassmorphism relative overflow-hidden"
            >
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-electric/80 to-navy/80 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <industry.icon size={36} className="text-white drop-shadow-glow" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{industry.name}</h3>
              <p className="text-navy/80 mb-2">{industry.description}</p>
              <div className="absolute inset-0 pointer-events-none rounded-2xl border border-gradient-to-br from-electric/40 to-navy/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
