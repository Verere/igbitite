"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const offices = [
  {
    name: "Head Office",
    address: "1 Igborigbo Quarters, Sokebolou/Yokiri Federated Communities, Ogulagha Kingdom, Delta State, Nigeria",
    phone: "+234 701 219 8640",
    email: "oyateide@igbetiteengineering.com",
  },
  // Add more offices if needed
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-light via-white to-light/80 py-24 px-4 md:px-8 text-navy">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-heading font-extrabold text-navy text-center mb-10 tracking-tight drop-shadow-lg"
        >
          Contact Us
        </motion.h1>
        {/* Contact Form */}
        <form className="bg-white/90 rounded-2xl shadow-2xl border border-accent-blue/20 p-10 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Full Name" required className="rounded-xl px-4 py-3 bg-[#F8FAFC]/60 text-[#0A192F] placeholder:text-[#0A192F]/50 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]" />
            <input type="email" placeholder="Email Address" required className="rounded-xl px-4 py-3 bg-[#F8FAFC]/60 text-[#0A192F] placeholder:text-[#0A192F]/50 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]" />
          </div>
          <input type="text" placeholder="Subject" className="rounded-xl px-4 py-3 bg-[#F8FAFC]/60 text-[#0A192F] placeholder:text-[#0A192F]/50 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]" />
          <textarea placeholder="Your Message" required rows={5} className="rounded-xl px-4 py-3 bg-[#F8FAFC]/60 text-[#0A192F] placeholder:text-[#0A192F]/50 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]" />
          <button type="submit" className="w-full md:w-auto px-8 py-4 rounded-2xl bg-[#00AEEF] text-white font-bold text-lg shadow-soft hover:scale-105 hover:bg-gradient-to-r hover:from-[#00AEEF] hover:to-[#0A192F] transition-all duration-200">Send Message</button>
        </form>
        {/* Office Info & Map */}
        <div className="bg-white/90 rounded-2xl shadow-xl p-10 flex flex-col gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-heading font-bold text-navy mb-4"
          >
            Office & Contact Details
          </motion.h2>
          <div className="flex flex-col gap-4">
            {offices.map((o) => (
              <div key={o.name} className="flex flex-col gap-1">
                <span className="font-bold text-accent-blue text-lg">{o.name}</span>
                <span className="flex items-center gap-2 text-navy/80"><MapPin size={18} />{o.address}</span>
                <span className="flex items-center gap-2 text-navy/80"><Phone size={18} />{o.phone}</span>
                <span className="flex items-center gap-2 text-navy/80"><Mail size={18} />{o.email}</span>
              </div>
            ))}
          </div>
          {/* WhatsApp Button */}
          <a href="https://wa.me/2347012198640" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-green-500 text-white font-bold text-lg shadow hover:bg-green-600 transition-all w-max mt-4"><MessageCircle size={22} /> WhatsApp Us</a>
          {/* Google Map Embed */}
          <div className="w-full h-64 rounded-2xl overflow-hidden border border-accent-blue/10 shadow">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.234567890123!2d5.8000000!3d5.2000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2sIgbetite%20Engineering!5e0!3m2!1sen!2sng!4v1680000000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
