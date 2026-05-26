"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Smart Grid Installation",
    hero: "/plant.jpg",
    overview: "Deployment of advanced smart grid technology for efficient power distribution.",
    challenge: "Legacy infrastructure, high downtime, and energy loss.",
    solution: "Installed IoT-enabled smart meters, automated controls, and real-time monitoring.",
    results: "Reduced downtime by 40%, improved energy efficiency, and enabled predictive maintenance.",
    specs: ["10MW capacity", "SCADA integration", "Remote monitoring"],
    metrics: ["40% Downtime Reduction", "99.9% Uptime"],
    gallery: ["/plant.jpg", "/solar.jpg"],
    sector: "Energy",
    year: "2024",
  },
  // Add more projects as needed
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-light via-white to-light/80 py-24 px-4 md:px-8 text-navy">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-heading font-extrabold text-navy text-center mb-10 tracking-tight drop-shadow-lg"
        >
          Project Portfolio
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <motion.section
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/90 shadow-2xl border border-accent-blue/20 overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-64 bg-gradient-to-br from-navy/80 to-accent-blue/60 flex items-center justify-center overflow-hidden">
                <img src={p.hero} alt={p.title} className="object-cover w-full h-full" />
                <span className="absolute top-4 left-4 bg-[#00AEEF] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">{p.sector}</span>
                <span className="absolute top-4 right-4 bg-[#F8FAFC]/80 text-[#0A192F] text-xs font-bold px-3 py-1 rounded-full shadow-md">{p.year}</span>
              </div>
              <div className="p-8 flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-navy mb-2 tracking-wide drop-shadow-sm">{p.title}</h2>
                <p className="text-navy/80 mb-2 text-base font-medium">{p.overview}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                  <div>
                    <span className="font-bold text-accent-blue">Challenge:</span>
                    <p className="text-navy/80">{p.challenge}</p>
                  </div>
                  <div>
                    <span className="font-bold text-accent-blue">Solution:</span>
                    <p className="text-navy/80">{p.solution}</p>
                  </div>
                </div>
                <div>
                  <span className="font-bold text-accent-blue">Results:</span>
                  <p className="text-navy/80">{p.results}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.metrics.map((m) => (
                    <span key={m} className="bg-[#00AEEF]/10 text-[#00AEEF] text-xs font-semibold px-3 py-1 rounded shadow border border-[#00AEEF]/20">{m}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.specs.map((s) => (
                    <span key={s} className="bg-[#F8FAFC]/80 text-[#0A192F] text-xs font-semibold px-3 py-1 rounded shadow border border-[#0A192F]/10">{s}</span>
                  ))}
                </div>
                {/* Gallery */}
                <div className="flex gap-3 mt-4">
                  {p.gallery.map((img, idx) => (
                    <img key={img} src={img} alt={p.title + ' gallery ' + idx} className="w-20 h-14 object-cover rounded-lg border border-accent-blue/10 shadow" />
                  ))}
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  );
}
