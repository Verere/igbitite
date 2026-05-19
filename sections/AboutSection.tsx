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
Igbetite Engineering Limited is a multidisciplinary engineering and infrastructure company delivering innovative electrical, mechanical, and civil engineering solutions tailored to modern industrial and commercial needs. We specialize in power systems, automation, renewable energy, smart technologies, construction, and infrastructure development, providing reliable services for businesses, industries, and real estate projects.

Driven by innovation and excellence, we combine advanced engineering expertise with sustainable practices to design, develop, install, and maintain efficient systems that improve productivity and long-term performance. Our capabilities extend across embedded systems, manufacturing support, smart grid technologies, IoT solutions, and engineering consultancy, enabling us to provide end-to-end technical solutions for diverse sectors.

At Igbetite Engineering Limited, we are committed to quality, professionalism, and customer satisfaction, delivering projects that meet global standards while contributing to sustainable growth and technological advancement in Nigeria and beyond.
   </motion.p>

          <div className="flex flex-col gap-2 mt-4">
            <span className="font-bold text-electric">Mission:</span>
            <span className="text-navy/80">To deliver innovative, reliable, and sustainable electrical, mechanical, and civil engineering solutions that empower industries, businesses, and communities through advanced technology, quality construction, renewable energy, and smart infrastructure development while maintaining the highest standards of professionalism, safety, and customer satisfaction.</span>
            <span className="font-bold text-electric mt-2">Vision:</span>
            <span className="text-navy/80">To become a leading engineering and infrastructure company in Africa, recognized for transforming industries and communities through cutting-edge technology, sustainable energy solutions, smart infrastructure, and excellence in engineering innovation.</span>
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
