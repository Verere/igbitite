"use client"
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Completed', value: 120 },
  { label: 'Engineering Experts', value: 35 },
  { label: 'Years Experience', value: 15 },
  { label: 'Client Satisfaction', value: '99%' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-light py-24 px-6 md:px-0 text-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center rounded-2xl shadow-soft bg-white/80 backdrop-blur-lg">
        <div className="p-8 flex flex-col gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-navy mb-2"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg text-navy/90"
          >
Igbetite Engineering Limited is a forward-thinking engineering and infrastructure company dedicated to delivering innovative, reliable, and sustainable solutions across various industries. The company specializes in electrical engineering services, including the design, testing, installation, and maintenance of electrical systems for sectors such as power generation, telecommunications, manufacturing, and construction.

With a strong commitment to innovation and technical excellence, Igbetite Engineering Limited also develops and manufactures electrical systems, machinery, and components for commercial and residential applications. The company actively invests in research and development, focusing on renewable energy, energy efficiency, automation systems, smart grids, and Internet of Things (IoT) technologies to support modern industrial advancement.

In addition, the company provides engineering consultancy, prototyping, sourcing support, maintenance, validation, and after-market support services to businesses in Nigeria and internationally. Its expertise extends to embedded systems, plant and manufacturing engineering, and electrical and electronics hardware and software solutions.

Beyond engineering, Igbetite Engineering Limited is involved in construction, property development, and infrastructure projects, including land development, building construction, renovation, and estate management. Through professionalism, innovation, and quality service delivery, the company continues to position itself as a trusted partner in engineering, technology, and sustainable development.
        </motion.p>

          <div className="flex flex-col gap-2 mt-4">
            <span className="font-bold text-electric">Mission:</span>
            <span className="text-navy/80">To empower businesses and communities with innovative, reliable, and sustainable engineering solutions.</span>
            <span className="font-bold text-electric mt-2">Vision:</span>
            <span className="text-navy/80">To be the leading provider of smart infrastructure and engineering excellence in Africa.</span>
          </div>
        </div>
        <div className="p-8 grid grid-cols-2 gap-6 text-black">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-gradient-to-br from-navy/90 to-electric/80 text-black shadow-lg p-6 flex flex-col items-center justify-center glassmorphism border border-white/10"
            >
              <span className="text-3xl md:text-4xl font-extrabold mb-1">
                {typeof stat.value === 'number' ? (
                  <AnimatedCounter value={stat.value} />
                ) : (
                  stat.value
                )}
              </span>
              <span className="text-base font-medium opacity-80 text-center">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ value }: { value: number }) {
  // Simple animated counter for demo
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    let incrementTime = 20;
    let timer = setInterval(() => {
      start += Math.ceil(end / 30);
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value]);
  return <span>{count}</span>;
}
