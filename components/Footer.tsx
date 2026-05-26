"use client"
import Logo from '@/components/Logo';
import { Mail, Phone, MapPin,  Send } from 'lucide-react';
import Image from 'next/image';

const quickLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const servicesLinks = [
  'Electrical Engineering',
  'Mechanical Engineering',
  'Civil Engineering',
  'Power Systems',
  'Renewable Energy',
  'Automation & IoT',
  'Consultancy',
  'Manufacturing',
  'Construction',
];

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] text-white pt-16 pb-8 px-6 border-t border-[#00AEEF]/20 font-sans">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12 border-b border-white/10 pb-10">
        {/* Brand & Description */}
        <div className="flex flex-col gap-4 col-span-2">
          <div className="flex items-center gap-3">
            <a href="#hero" className="flex items-center gap-2">
              <Image src="/logo.jpg" alt="Igbtite Logo" width={48} height={48} className="w-12 h-12 rounded-xl border-2 border-accent-blue shadow-lg" priority />
            </a>
            <Logo />
          </div>
          <p className="text-white/80 text-sm max-w-xs">Premium engineering, automation, renewable energy, and infrastructure solutions for enterprise clients.</p>
          {/* Certifications Placeholder */}
          <div className="flex gap-2 mt-2">
            <span className="bg-[#111827]/60 rounded px-2 py-1 text-xs font-semibold border border-[#00AEEF]/30">ISO 9001</span>
            <span className="bg-[#111827]/60 rounded px-2 py-1 text-xs font-semibold border border-[#00AEEF]/30">COREN</span>
            <span className="bg-[#111827]/60 rounded px-2 py-1 text-xs font-semibold border border-[#00AEEF]/30">IFC</span>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-3 text-lg tracking-wide">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-white/80 text-sm">
            {quickLinks.map(link => (
              <li key={link.name}><a href={link.href} className="hover:text-accent-blue transition-colors">{link.name}</a></li>
            ))}
          </ul>
        </div>
        {/* Services */}
        <div>
          <h4 className="font-bold mb-3 text-lg tracking-wide">Services</h4>
          <ul className="flex flex-col gap-2 text-white/80 text-sm">
            {servicesLinks.map(s => (
              <li key={s}><span className="hover:text-accent-blue cursor-default">{s}</span></li>
            ))}
          </ul>
        </div>
        {/* Contact & Sectors */}
        <div className="flex flex-col gap-3">
          <h4 className="font-bold mb-3 text-lg tracking-wide">Contact</h4>
          <div className="flex items-center gap-2 text-white/80 text-sm"><Mail size={16} /> oyateide@igbetiteengineering.com</div>
          <div className="flex items-center gap-2 text-white/80 text-sm"><Phone size={16} /> +234 701 219 8640 | +234 806 385 2343</div>
          <div className="flex items-center gap-2 text-white/80 text-sm"><MapPin size={16} /> 1 Igborigbo quaters, Sokebolou/Yokiri Federated Communities, Ogulagha Kingdom, Delta State, Nigeria</div>
          {/* Sectors Placeholder */}
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-[#00AEEF]/10 text-[#00AEEF] rounded px-2 py-1 text-xs font-semibold border border-[#00AEEF]/30">Mining</span>
            <span className="bg-[#00AEEF]/10 text-[#00AEEF] rounded px-2 py-1 text-xs font-semibold border border-[#00AEEF]/30">Oil & Gas</span>
            <span className="bg-[#00AEEF]/10 text-[#00AEEF] rounded px-2 py-1 text-xs font-semibold border border-[#00AEEF]/30">Infrastructure</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
        <form className="flex items-center gap-2 w-full md:w-auto">
          <input
            type="email"
            placeholder="Subscribe to newsletter"
            className="rounded-2xl px-4 py-2 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent-blue"
          />
          <button type="submit" className="bg-[#00AEEF] text-white rounded-2xl px-4 py-2 flex items-center gap-1 hover:bg-white hover:text-[#00AEEF] transition-colors"><Send size={16} />Subscribe</button>
        </form>
        <span className="text-white/50 text-xs">&copy; {new Date().getFullYear()} Igbetite. All rights reserved.</span>
      </div>
    </footer>
  );
}
