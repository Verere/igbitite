"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Adeola Johnson',
    company: 'GreenGrid Energy',
    quote: 'Igbetite handled our Hybrid Solar–Gas Turbine Power Generation System and exceeded our expectations. Their professionalism and technical expertise are unmatched.',
    avatar: '/igbi2.jpg',
    rating: 5,
  },
  {
    name: 'Chinedu Okafor',
    company: 'IndustriTech Ltd.',
    quote: 'Their automation solutions completely transformed our manufacturing operations, improving efficiency, reducing downtime, and increasing overall productivity. We highly recommend them.',
    avatar: '/man.jpg',
    rating: 5,
  },
  {
    name: 'Fatima Bello',
    company: 'UrbanBuild Co.',
    quote: 'From design to delivery, the Igbetite team was responsive and innovative. We look forward to more projects together.',
    avatar: '/girl.jpg',
    rating: 4,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? 'text-electric' : 'text-navy/30'}>★</span>
      ))}
    </div>
  );
}

// Example client logos (replace with real logos as needed)
const clientLogos = [
  '/nnpc.png',
  '/lng.jpg',
  '/agip.png',
  '/nbc.jpg',
  '/mcc.jpg',
];

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="relative py-16 px-2 sm:py-20 sm:px-4 md:px-8 bg-gradient-to-b from-[#111827] via-[#0A192F] to-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-heading font-extrabold text-white text-center mb-10 sm:mb-14 tracking-tight drop-shadow-lg"
        >
          What Our Clients Say
        </motion.h2>
        {/* Client logos row */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-10 sm:mb-14 opacity-80">
          {clientLogos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 + i * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={logo}
                alt={`Client logo ${i + 1}`}
                width={80}
                height={40}
                className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300 drop-shadow"
                style={{ width: 'auto', height: '2.5rem' }}
                priority={i === 0}
              />
            </motion.div>
          ))}
        </div>
        {/* Testimonials cards */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-10 items-center justify-center">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/95 rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col items-center text-center max-w-xs w-full glassmorphism border border-[#00AEEF]/20 hover:scale-[1.04] hover:shadow-[#00AEEF]/30 hover:border-[#00AEEF]/60 transition-all duration-300"
            >
              <Image
                src={t.avatar}
                alt={t.name}
                width={96}
                height={96}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4 object-cover border-4 border-[#00AEEF]/30 shadow-lg"
                priority={i === 0}
              />
              <p className="text-[#0A192F] text-base sm:text-lg mb-4 font-medium leading-relaxed">“{t.quote}”</p>
              <span className="font-bold text-[#0A192F] text-base sm:text-lg">{t.name}</span>
              <span className="text-[#00AEEF] text-sm mb-2">{t.company}</span>
              <StarRating rating={t.rating} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
