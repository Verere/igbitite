"use client"
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Adeola Johnson',
    company: 'GreenGrid Energy',
    quote: 'Igbetite delivered our solar project on time and exceeded our expectations. Their professionalism and technical expertise are unmatched.',
    avatar: '/igbi2.jpg',
    rating: 5,
  },
  {
    name: 'Chinedu Okafor',
    company: 'IndustriTech Ltd.',
    quote: 'The automation solutions provided by Igbitite transformed our manufacturing process. Highly recommended!',
    avatar: '/next.svg',
    rating: 5,
  },
  {
    name: 'Fatima Bello',
    company: 'UrbanBuild Co.',
    quote: 'From design to delivery, the Igbitite team was responsive and innovative. We look forward to more projects together.',
    avatar: '/logo.jpg',
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

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="relative py-24 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-12"
        >
          What Our Clients Say
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-soft p-8 flex flex-col items-center text-center max-w-xs w-full glassmorphism border border-navy/10 hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 object-cover border-4 border-electric/30 shadow-lg"
              />
              <p className="text-black text-lg mb-4 font-medium">“{t.quote}”</p>
              <span className="font-bold text-navy text-base">{t.name}</span>
              <span className="text-electric text-sm mb-2">{t.company}</span>
              <StarRating rating={t.rating} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
