"use client"
import Logo from '@/components/Logo';
import { Mail, Phone, MapPin,  Send } from 'lucide-react';

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
  'Renewable Energy',
  'Automation & IoT',
  'Consultancy',
  'Manufacturing',
  'Construction',
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-b border-white/10 pb-10">
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
             <a href="#hero" className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Igbtite Logo" className="w-12 h-12" />
        </a>
          <Logo />
        </div>
          <p className="text-white/80 text-sm">Premium engineering, automation, renewable energy, and infrastructure solutions for enterprise clients.</p>
         
        </div>
        <div>
          <h4 className="font-bold mb-3 text-lg">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-white/80 text-sm">
            {quickLinks.map(link => (
              <li key={link.name}><a href={link.href} className="hover:text-electric transition-colors">{link.name}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-lg">Services</h4>
          <ul className="flex flex-col gap-2 text-white/80 text-sm">
            {servicesLinks.map(s => (
              <li key={s}><span className="hover:text-electric cursor-default">{s}</span></li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold mb-3 text-lg">Contact</h4>
          <div className="flex items-center gap-2 text-white/80 text-sm"><Mail size={16} /> oyateide@igbetiteengineering.com</div>
          <div className="flex items-center gap-2 text-white/80 text-sm"><Phone size={16} /> +234 701 219 8640 | +234 806 385 2343</div>
          <div className="flex items-center gap-2 text-white/80 text-sm"><MapPin size={16} /> 1 Igborigbo quaters, Sokebolou/Yokiri Federated Communities, Ogulagha Kingdom, Delta State, Nigeria</div>
        </div>
        
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
        <form className="flex items-center gap-2 w-full md:w-auto">
          <input
            type="email"
            placeholder="Subscribe to newsletter"
            className="rounded-2xl px-4 py-2 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-electric"
          />
          <button type="submit" className="bg-electric text-white rounded-2xl px-4 py-2 flex items-center gap-1 hover:bg-white hover:text-electric transition-colors"><Send size={16} />Subscribe</button>
        </form>
        <span className="text-white/50 text-xs">&copy; {new Date().getFullYear()} Igbetite. All rights reserved.</span>
      </div>
    </footer>
  );
}
