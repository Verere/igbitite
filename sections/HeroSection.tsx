'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-electric to-light overflow-hidden">
      {/* Animated background grid or gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2563EB" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-8">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-heading font-extrabold text-blue-500 drop-shadow-lg"
        >
          Engineering Innovative Power, Infrastructure & Smart Technology Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-2xl text-lg md:text-2xl text-light font-medium"
        >
          We provide electrical engineering, automation, renewable energy, construction, and infrastructure solutions for businesses, industries, and real estate developments.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:justify-center"
        >
          <a href="#contact" className="px-8 py-4 rounded-2xl bg-electric text-white font-bold text-lg shadow-soft hover:scale-105 hover:bg-gradient-to-r hover:from-electric hover:to-navy transition-all duration-200">
            Request Consultation
          </a>
          <a href="#services" className="px-8 py-4 rounded-2xl bg-white text-electric font-bold text-lg shadow-soft hover:scale-105 hover:bg-light hover:text-navy transition-all duration-200">
            Explore Services
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/globe.svg"
            alt="Engineering Illustration"
            width={320}
            height={220}
            className="rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
