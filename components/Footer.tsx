// "use client"
// import Logo from '@/components/Logo';
// import { Mail, Phone, MapPin, Facebook, Linkedin, Send } from 'lucide-react';

// const quickLinks = [
//   { name: 'Home', href: '#hero' },
//   { name: 'About', href: '#about' },
//   { name: 'Services', href: '#services' },
//   { name: 'Industries', href: '#industries' },
//   { name: 'Projects', href: '#projects' },
//   { name: 'Contact', href: '#contact' },
// ];

// const servicesLinks = [
//   'Electrical Engineering',
//   'Renewable Energy',
//   'Automation & IoT',
//   'Consultancy',
//   'Manufacturing',
//   'Construction',
// ];

// export default function Footer() {
//   return (
//     <footer className="bg-navy text-white pt-16 pb-8 px-6">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-b border-white/10 pb-10">
//         <div className="flex flex-col gap-4">
//           <Logo />
//           <p className="text-white/80 text-sm">Premium engineering, automation, renewable energy, and infrastructure solutions for enterprise clients.</p>
//           <div className="flex gap-3 mt-2">
//             <a href="#" className="hover:text-electric"><Facebook size={20} /></a>
//             {/* Twitter icon not available in Lucide React. You may use another icon or SVG here if needed. */}
//             <a href="#" className="hover:text-electric"><Linkedin size={20} /></a>
//           </div>
//         </div>
//         <div>
//           <h4 className="font-bold mb-3 text-lg">Quick Links</h4>
//           <ul className="flex flex-col gap-2 text-white/80 text-sm">
//             {quickLinks.map(link => (
//               <li key={link.name}><a href={link.href} className="hover:text-electric transition-colors">{link.name}</a></li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-bold mb-3 text-lg">Services</h4>
//           <ul className="flex flex-col gap-2 text-white/80 text-sm">
//             {servicesLinks.map(s => (
//               <li key={s}><span className="hover:text-electric cursor-default">{s}</span></li>
//             ))}
//           </ul>
//         </div>
//         <div className="flex flex-col gap-3">
//           <h4 className="font-bold mb-3 text-lg">Contact</h4>
//           <div className="flex items-center gap-2 text-white/80 text-sm"><Mail size={16} /> info@igbitite.com</div>
//           <div className="flex items-center gap-2 text-white/80 text-sm"><Phone size={16} /> +234 800 000 0000</div>
//           <div className="flex items-center gap-2 text-white/80 text-sm"><MapPin size={16} /> Lagos, Nigeria</div>
//         </div>
//       </div>
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
//         <form className="flex items-center gap-2 w-full md:w-auto">
//           <input
//             type="email"
//             placeholder="Subscribe to newsletter"
//             className="rounded-2xl px-4 py-2 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-electric"
//           />
//           <button type="submit" className="bg-electric text-white rounded-2xl px-4 py-2 flex items-center gap-1 hover:bg-white hover:text-electric transition-colors"><Send size={16} />Subscribe</button>
//         </form>
//         <span className="text-white/50 text-xs">&copy; {new Date().getFullYear()} Igbitite. All rights reserved.</span>
//       </div>
//     </footer>
//   );
// }
