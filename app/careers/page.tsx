"use client";
import { motion } from "framer-motion";
import { Briefcase, Send } from "lucide-react";

const jobs = [
  {
    title: "Project Engineer",
    location: "Delta State, Nigeria",
    type: "Full-time",
    description: "Lead and manage engineering projects, coordinate teams, and ensure technical excellence.",
    apply: "mailto:careers@igbetiteengineering.com?subject=Application%20for%20Project%20Engineer",
  },
  {
    title: "Electrical Technician",
    location: "Delta State, Nigeria",
    type: "Full-time",
    description: "Install, maintain, and troubleshoot electrical systems for industrial clients.",
    apply: "mailto:careers@igbetiteengineering.com?subject=Application%20for%20Electrical%20Technician",
  },
  // Add more jobs as needed
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-light via-white to-light/80 py-24 px-4 md:px-8 text-navy">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-heading font-extrabold text-navy text-center mb-10 tracking-tight drop-shadow-lg"
        >
          Careers
        </motion.h1>
        <div className="grid grid-cols-1 gap-12">
          {jobs.map((job, i) => (
            <motion.section
              key={job.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/90 shadow-2xl border border-accent-blue/20 overflow-hidden flex flex-col gap-4 p-8"
            >
              <div className="flex items-center gap-4 mb-2">
                <Briefcase size={32} className="text-accent-blue" />
                <h2 className="text-xl font-bold text-navy tracking-wide drop-shadow-sm">{job.title}</h2>
              </div>
              <div className="flex gap-4 text-sm mb-2">
                <span className="bg-[#00AEEF]/10 text-[#00AEEF] font-semibold px-3 py-1 rounded shadow border border-[#00AEEF]/20">{job.location}</span>
                <span className="bg-[#F8FAFC]/80 text-[#0A192F] font-semibold px-3 py-1 rounded shadow border border-[#0A192F]/10">{job.type}</span>
              </div>
              <p className="text-navy/80 mb-2 text-base font-medium">{job.description}</p>
              <a href={job.apply} className="inline-flex items-center gap-2 mt-2 text-accent-blue hover:underline text-sm font-semibold"><Send size={16} />Apply Now</a>
            </motion.section>
          ))}
        </div>
        <div className="bg-white/90 rounded-2xl shadow-xl p-10 flex flex-col gap-6 items-center mt-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-heading font-bold text-navy mb-2"
          >
            Don’t see your role?
          </motion.h2>
          <p className="text-navy/80 text-base text-center max-w-xl">We’re always looking for talented engineers, technicians, and project managers. Send your CV and cover letter to <a href="mailto:careers@igbetiteengineering.com" className="text-accent-blue underline">careers@igbetiteengineering.com</a> and we’ll be in touch if a suitable role opens up.</p>
        </div>
      </div>
    </main>
  );
}
