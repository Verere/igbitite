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
    <section id="services" className="relative py-16 px-2 sm:py-20 sm:px-4 md:px-8 bg-gradient-to-b from-[#0A192F] via-[#111827] to-[#F8FAFC] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-heading font-extrabold text-white text-center mb-8 sm:mb-12 tracking-tight drop-shadow-lg"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + i * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl bg-white/10 backdrop-blur-xl border border-[#00AEEF]/20 shadow-xl p-6 sm:p-8 flex flex-col items-center text-center hover:scale-[1.04] hover:shadow-[#00AEEF]/30 hover:border-[#00AEEF]/60 transition-all duration-300 relative overflow-hidden"
            >
              {/* Animated accent ring */}
              <div className="absolute -inset-1 z-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-br from-[#00AEEF]/20 to-[#0A192F]/10 blur-xl" />
              <div className="mb-4 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#0A192F] shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 border-white/10">
                <service.icon size={32} className="text-white drop-shadow-glow" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 tracking-wide drop-shadow-sm">{service.title}</h3>
              <p className="text-white/80 mb-1 sm:mb-2 text-base font-medium">{service.description}</p>
              {/* Subtle glass border on hover */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl border border-[#00AEEF]/30 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
