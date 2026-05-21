"use client"
import { motion } from 'framer-motion';
import { Zap, Leaf, Cpu, Users, Wrench, Building2 } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Electrical Engineering',
    description: 'Electrical design, power installation, testing & commissioning.',
  },
  {
    icon: Wrench,
    title: 'Mechanical Engineering',
    description: 'Manufacturing & Technical Services, Prototyping,  equipment support.',
  },
  {
    icon: Leaf,
    title: 'Renewable Energy Solutions',
    description: 'Solar systems, energy efficiency, sustainable power.',
  },
  {
    icon: Cpu,
    title: 'Automation & IoT',
    description: 'Smart grids, industrial automation, embedded systems.',
  },
  {
    icon: Users,
    title: 'Engineering Consultancy',
    description: 'Design consulting, technical advisory, project management.',
  },
  
  {
    icon: Building2,
    title: 'Construction & Infrastructure',
    description: 'Building construction, estate development, infrastructure solutions.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-navy text-center mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + i * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl bg-light border border-white/40 shadow-soft p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-xl transition-all duration-300 glassmorphism relative overflow-hidden"
            >
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-electric/80 to-navy/80 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <service.icon size={36} className="text-white drop-shadow-glow" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{service.title}</h3>
              <p className="text-navy/80 mb-2">{service.description}</p>
              <div className="absolute inset-0 pointer-events-none rounded-2xl border border-gradient-to-br from-electric/40 to-navy/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
