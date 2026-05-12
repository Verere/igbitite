"use client"
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Smart Grid Installation',
    description: 'Deployment of advanced smart grid technology for efficient power distribution.',
    image: '/file.svg',
    category: 'Energy',
  },
  {
    title: 'Industrial Electrical System',
    description: 'Design and commissioning of industrial electrical systems for manufacturing.',
    image: '/factory.svg',
    category: 'Manufacturing',
  },
  {
    title: 'Solar Power Deployment',
    description: 'Large-scale solar power installation for commercial and estate developments.',
    image: '/globe.svg',
    category: 'Renewable',
  },
  {
    title: 'Commercial Infrastructure Project',
    description: 'Turnkey construction and infrastructure for a major commercial complex.',
    image: '/building.svg',
    category: 'Construction',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-navy text-center mb-12"
        >
          Project Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + i * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl bg-light border border-navy/10 shadow-soft p-0 overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 glassmorphism relative"
            >
              <div className="relative w-full h-56 bg-gradient-to-br from-navy/80 to-electric/60 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain w-32 h-32 drop-shadow-xl opacity-90 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 bg-electric text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {project.category}
                </span>
              </div>
              <div className="p-6 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-navy mb-1">{project.title}</h3>
                <p className="text-navy/80 mb-2">{project.description}</p>
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-2xl border border-gradient-to-br from-electric/40 to-navy/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
