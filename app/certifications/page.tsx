"use client";
import { motion } from "framer-motion";
import { Award, ShieldCheck, FileText } from "lucide-react";

const certifications = [
  {
    icon: Award,
    title: "ISO 9001:2015",
    description: "Certified for Quality Management Systems in engineering and construction.",
    doc: "/iso9001.pdf",
  },
  {
    icon: ShieldCheck,
    title: "COREN Registered",
    description: "Council for the Regulation of Engineering in Nigeria (COREN) accreditation.",
    doc: "/coren.pdf",
  },
  // Add more certifications as needed
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-light via-white to-light/80 py-24 px-4 md:px-8 text-navy">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-heading font-extrabold text-navy text-center mb-10 tracking-tight drop-shadow-lg"
        >
          Certifications
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {certifications.map((c, i) => (
            <motion.section
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/90 shadow-2xl border border-accent-blue/20 overflow-hidden flex flex-col gap-4 p-8"
            >
              <div className="flex items-center gap-4 mb-2">
                <c.icon size={36} className="text-accent-blue drop-shadow-glow" />
                <h2 className="text-xl font-bold text-navy tracking-wide drop-shadow-sm">{c.title}</h2>
              </div>
              <p className="text-navy/80 mb-2 text-base font-medium">{c.description}</p>
              <a href={c.doc} download className="inline-flex items-center gap-2 mt-2 text-accent-blue hover:underline text-sm font-semibold"><FileText size={16} />Download Certificate</a>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  );
}
