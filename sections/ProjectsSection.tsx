"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Smart Grid Installation',
    description: 'Deployment of advanced smart grid technology for efficient power distribution.',
    image: '/plant.jpg',
    category: 'Energy',
  },
  {
    title: 'Industrial Electrical System',
    description: 'Design and commissioning of industrial electrical systems for manufacturing.',
    image: '/manuf.jpg',
    category: 'Manufacturing',
  },
  {
    title: 'Solar Power Deployment',
    description: 'Large-scale solar power installation for commercial and estate developments.',
    image: '/solar.jpg',
    category: 'Renewable',
  },
  {
    title: 'Commercial Infrastructure Project',
    description: 'Turnkey construction and infrastructure for a major commercial complex.',
    image: '/real.jpg',
    category: 'Construction',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-light via-white to-light/80 text-navy overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-extrabold text-navy text-center mb-14 tracking-tight drop-shadow-lg"
        >
          Project Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + i * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl bg-white/90 border border-accent-blue/20 shadow-2xl p-0 overflow-hidden hover:scale-[1.03] hover:shadow-accent-blue/30 hover:border-accent-blue/60 transition-all duration-300 relative"
            >
              {/* Animated accent ring */}
              <div className="absolute -inset-1 z-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-br from-accent-blue/10 to-navy/5 blur-xl" />
              <div className="relative w-full h-56 bg-gradient-to-br from-navy/80 to-accent-blue/60 flex items-center justify-center overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={480}
                  height={224}
                  className="object-cover w-full h-full drop-shadow-xl opacity-90 group-hover:scale-110 transition-transform duration-300"
                  priority={i === 0}
                />
                <span className="absolute top-4 left-4 bg-[#00AEEF] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md tracking-wide uppercase">
                  {project.category}
                </span>
              </div>
              <div className="p-7 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-navy mb-1 tracking-wide drop-shadow-sm">{project.title}</h3>
                <p className="text-navy/80 mb-2 text-base font-medium">{project.description}</p>
                {/* Example metrics (customize as needed) */}
                <div className="flex gap-4 mt-2">
                  <span className="bg-[#F8FAFC]/80 text-[#0A192F] text-xs font-semibold px-3 py-1 rounded shadow border border-[#0A192F]/10">2024</span>
                  <span className="bg-[#00AEEF]/10 text-[#00AEEF] text-xs font-semibold px-3 py-1 rounded shadow border border-[#00AEEF]/20">Completed</span>
                </div>
              </div>
              {/* Subtle glass border on hover */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl border border-accent-blue/30 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
