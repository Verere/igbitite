"use client"

import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';



const timeline = [
  { year: '2012', event: 'Company founded, first industrial contract' },
  { year: '2015', event: 'Expanded into renewable energy and automation' },
  { year: '2018', event: 'Completed 50th major project, opened new HQ' },
  { year: '2022', event: 'Awarded national engineering excellence award' },
  { year: '2024', event: 'Launched smart infrastructure division' },
];

const leaders = [
  { name: 'Engr. Hitler O. Joseph ', title: 'Managing Director', img: '/igbi2.jpg' },
  { name: 'Mrs Favour Oyateide', title: 'Technical Director', img: '/girl.jpg' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]/80 py-16 px-2 sm:py-20 sm:px-4 md:px-8 text-[#0A192F] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Company Overview & Mission/Vision */}
        <div className="rounded-2xl shadow-2xl bg-white/90 backdrop-blur-xl p-4 sm:p-8 md:p-10 w-full">
          <div className="flex flex-col gap-6 w-full">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-5xl font-heading font-extrabold text-navy mb-2 tracking-tight drop-shadow-lg"
            >
              About Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-navy/90"
            >
              Igbetite Engineering Limited is a multidisciplinary engineering and infrastructure company delivering innovative electrical, mechanical, and civil engineering solutions tailored to modern industrial and commercial needs. We specialize in power systems, automation, renewable energy, smart technologies, construction, and infrastructure development, providing reliable services for businesses, industries, and real estate projects.
              <br /><br />
              Driven by innovation and excellence, we combine advanced engineering expertise with sustainable practices to design, develop, install, and maintain efficient systems that improve productivity and long-term performance. Our capabilities extend across embedded systems, manufacturing support, smart grid technologies, IoT solutions, and engineering consultancy, enabling us to provide end-to-end technical solutions for diverse sectors.
              <br /><br />
              At Igbetite Engineering Limited, we are committed to quality, professionalism, and customer satisfaction, delivering projects that meet global standards while contributing to sustainable growth and technological advancement in Nigeria and beyond.
            </motion.p>
            <div className="flex flex-col gap-2 mt-4">
              <span className="font-bold text-accent-blue">Mission:</span>
              <span className="text-navy/80">To deliver innovative, reliable, and sustainable electrical, mechanical, and civil engineering solutions that empower industries, businesses, and communities through advanced technology, quality construction, renewable energy, and smart infrastructure development while maintaining the highest standards of professionalism, safety, and customer satisfaction.</span>
              <span className="font-bold text-accent-blue mt-2">Vision:</span>
              <span className="text-navy/80">To become a leading engineering and infrastructure company in Africa, recognized for transforming industries and communities through cutting-edge technology, sustainable energy solutions, smart infrastructure, and excellence in engineering innovation.</span>
            </div>
          </div>
          {/* Stats */}

        </div>
        {/* Timeline (hidden)
        <div className="bg-white/90 rounded-2xl shadow-xl p-4 sm:p-8 md:p-10 flex flex-col gap-6 sm:gap-8">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-navy mb-4"
          >
            Company Timeline
          </motion.h3>
          <ol className="relative border-l-4 border-accent-blue/30 pl-6 sm:pl-8">
            {timeline.map((item, i) => (
              <motion.li
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 + i * 0.1 }}
                viewport={{ once: true }}
                className="mb-6 sm:mb-8 last:mb-0"
              >
                <div className="absolute -left-5 top-1.5 w-4 h-4 rounded-full bg-[#00AEEF] border-2 border-white shadow" />
                <span className="font-bold text-accent-blue text-lg">{item.year}</span>
                <span className="block text-navy/90 text-base ml-1">{item.event}</span>
              </motion.li>
            ))}
          </ol>
        </div>
        */}
        {/* Leadership */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-4 sm:p-8 md:p-12 flex flex-col gap-6 sm:gap-10 border border-[#00AEEF]/10">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-[#0A192F] mb-3 sm:mb-5"
          >
            Leadership & Expertise
          </motion.h3>
          <div className="flex flex-wrap gap-4 sm:gap-8 justify-center">
            {leaders.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 + i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-2 sm:gap-3 bg-gradient-to-br from-[#00AEEF]/20 to-[#0A192F]/10 rounded-2xl p-4 sm:p-6 shadow-lg border border-[#00AEEF]/20 w-40 sm:w-56"
              >
                <div className="relative">
                  <Image src={leader.img} alt={leader.name} width={120} height={120} className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-[#00AEEF]/40 shadow-xl mb-2" />
                  <span className="absolute bottom-2 right-2 w-4 h-4 bg-[#00AEEF] border-2 border-white rounded-full block shadow-md" />
                </div>
                <span className="font-bold text-[#0A192F] text-base sm:text-lg text-center">{leader.name}</span>
                <span className="text-[#00AEEF] text-xs sm:text-sm text-center">{leader.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Team/Office Imagery Placeholder (hidden)
        <div className="bg-white/90 rounded-2xl shadow-xl p-4 sm:p-8 md:p-10 flex flex-col gap-6 sm:gap-8 items-center">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-navy mb-4"
          >
            Our Team & Offices
          </motion.h3>
          <div className="flex flex-wrap gap-4 sm:gap-8 justify-center w-full">
            <div className="w-40 h-28 sm:w-64 sm:h-40 bg-gradient-to-br from-[#0A192F]/20 to-[#00AEEF]/10 rounded-2xl flex items-center justify-center text-[#0A192F]/60 text-base sm:text-lg font-bold border border-[#00AEEF]/10 shadow-inner">
              Team Photo Coming Soon
            </div>
            <div className="w-40 h-28 sm:w-64 sm:h-40 bg-gradient-to-br from-[#0A192F]/20 to-[#00AEEF]/10 rounded-2xl flex items-center justify-center text-[#0A192F]/60 text-base sm:text-lg font-bold border border-[#00AEEF]/10 shadow-inner">
              Office Photo Coming Soon
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}


