"use client";
import { motion } from "framer-motion";
import { FileText, HelpCircle, Download, Workflow, Wrench, Zap, Cpu, Leaf } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Industrial Engineering",
    description: "Design, installation, and maintenance of industrial systems for manufacturing, mining, and energy sectors.",
    diagram: "/service1.jpg",
    process: ["Consultation", "Design & Engineering", "Installation", "Commissioning", "Support"],
    benefits: ["Increased efficiency", "Reduced downtime", "Scalable solutions"],
    brochure: "/industrial-brochure.pdf",
  },
  {
    icon: Wrench,
    title: "Mechanical Systems",
    description: "Custom mechanical solutions, prototyping, and equipment support for industrial clients.",
    diagram: "/service2.jpg",
    process: ["Analysis", "Prototyping", "Fabrication", "Testing", "Deployment"],
    benefits: ["Precision engineering", "Durable builds", "Expert support"],
    brochure: "/mechanical-brochure.pdf",
  },
  {
    icon: Leaf,
    title: "Renewable Energy",
    description: "Solar, wind, and hybrid energy systems for sustainable industrial and commercial operations.",
    diagram: "/service3.jpg",
    process: ["Site Assessment", "System Design", "Installation", "Monitoring", "Maintenance"],
    benefits: ["Lower energy costs", "Sustainable power", "Turnkey delivery"],
    brochure: "/renewable-brochure.pdf",
  },
  {
    icon: Cpu,
    title: "Automation & IoT",
    description: "Smart automation, IoT integration, and process control for next-gen industrial operations.",
    diagram: "/service4.jpg",
    process: ["Requirements", "System Integration", "Programming", "Testing", "Optimization"],
    benefits: ["Real-time data", "Remote control", "Process optimization"],
    brochure: "/automation-brochure.pdf",
  },
];

const faqs = [
  {
    q: "What industries do you serve?",
    a: "We serve mining, oil & gas, manufacturing, infrastructure, water systems, and energy sectors.",
  },
  {
    q: "Can I request a custom engineering solution?",
    a: "Absolutely. We tailor our services to your unique project requirements.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes, we offer full lifecycle support, maintenance, and technical assistance.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-light via-white to-light/80 py-24 px-4 md:px-8 text-navy">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-heading font-extrabold text-navy text-center mb-10 tracking-tight drop-shadow-lg"
        >
          Our Services
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((s, i) => (
            <motion.section
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/90 shadow-2xl border border-accent-blue/20 overflow-hidden flex flex-col"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center p-8">
                <div className="flex-shrink-0 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-blue/90 to-navy/80 flex items-center justify-center shadow-lg border-2 border-white/10">
                    <s.icon size={36} className="text-white drop-shadow-glow" />
                  </div>
                  <img src={s.diagram} alt={s.title + ' diagram'} className="w-32 h-24 object-cover rounded-xl border border-accent-blue/10 shadow" />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <h2 className="text-2xl font-bold text-navy mb-1 tracking-wide drop-shadow-sm">{s.title}</h2>
                  <p className="text-navy/80 mb-2 text-base font-medium">{s.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {s.benefits.map((b) => (
                      <span key={b} className="bg-[#00AEEF]/10 text-[#00AEEF] text-xs font-semibold px-3 py-1 rounded shadow border border-[#00AEEF]/20">{b}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {s.process.map((step, idx) => (
                      <span key={step} className="bg-[#F8FAFC]/80 text-[#0A192F] text-xs font-semibold px-3 py-1 rounded shadow border border-[#0A192F]/10">{step}</span>
                    ))}
                  </div>
                  <a href={s.brochure} download className="inline-flex items-center gap-2 mt-4 text-accent-blue hover:underline text-sm font-semibold"><Download size={16} />Download Brochure</a>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
        {/* FAQ Section */}
        <div className="bg-white/90 rounded-2xl shadow-xl p-10 flex flex-col gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-heading font-bold text-navy mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="flex flex-col gap-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 + i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <HelpCircle className="text-accent-blue mt-1" size={24} />
                <div>
                  <div className="font-bold text-navy mb-1">{faq.q}</div>
                  <div className="text-navy/80 text-base">{faq.a}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
