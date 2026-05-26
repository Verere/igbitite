"use client"
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollPosition(24);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-heading ${
        scrolled ? 'bg-[#0A192F]/95 shadow-xl backdrop-blur border-b border-[#0A192F]/40' : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        <a href="#hero" className="flex items-center gap-3 group">
          <Image src="/logo.jpg" alt="Igbtite Logo" width={48} height={48} className="w-12 h-12 rounded-xl shadow-lg border-2 border-electric group-hover:scale-105 transition-transform" priority />
        </a>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-2 py-1 font-semibold tracking-wide text-white hover:text-accent-blue transition-colors duration-200 group"
            >
              <span>{link.name}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-accent-blue to-navy group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
        <button
          className="md:hidden p-2 rounded-lg text-white hover:bg-[#00AEEF]/10 focus:outline-none border border-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden backdrop-blur-lg bg-[#0A192F]/95 border-b border-[#00AEEF]/20 flex flex-col gap-6 px-8 py-8 text-bold text-white shadow-2xl rounded-b-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-semibold text-white hover:text-accent-blue transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
