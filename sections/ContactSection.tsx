"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const initialForm = {
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
};

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name || !form.email || !form.message) return 'Name, Email, and Message are required.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return 'Invalid email address.';
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm(initialForm);
      } else {
        setStatus('error');
        setError(data.error || 'Failed to send message.');
      }
    } catch (err: any) {
      setStatus('error');
      setError(err.message || 'Failed to send message.');
    }
  };

  return (
    <section id="contact" className="relative py-16 px-2 sm:py-20 sm:px-4 md:px-8 bg-gradient-to-b from-[#F8FAFC] via-[#E0F7FA] to-[#CFFAFE] text-black overflow-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 rounded-3xl shadow-2xl bg-white/60 backdrop-blur-xl border border-[#00AEEF]/10">
        <div className="p-4 sm:p-8 flex flex-col gap-5 sm:gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#0A192F] mb-2"
          >
            Contact Us
          </motion.h2>
          <div className="flex flex-col gap-2 text-[#0A192F] font-medium">
            <div className="flex items-center gap-2 sm:gap-3"><Phone className="text-[#00AEEF]" /> +234 701 219 8640 | +234 806 385 2343</div>
            <div className="flex items-center gap-2 sm:gap-3"><Mail className="text-[#00AEEF]" /> oyateide@igbetiteengineering.com</div>
            <div className="flex items-center gap-2 sm:gap-3"><MapPin className="text-[#00AEEF]" /> 1 Igborigbo quaters, Sokebolou/Yokiri Federated Communities, Ogulagha Kingdom, Delta State, Nigeria</div>
          </div>
          <a
            href="https://wa.me/2347012198640"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#00AEEF] to-[#0A192F] text-white font-bold shadow-lg hover:scale-105 transition-all duration-200"
          >
            <MessageCircle size={26} /> WhatsApp Us
          </a>
          <div className="mt-6 w-full h-40 sm:h-48 rounded-2xl overflow-hidden flex items-center justify-center shadow-md">
            <iframe
              title="Google Map location of Igbitite Engineering"
              src="https://www.google.com/maps?q=1+Igborigbo+quaters,+Sokebolou/Yokiri+Federated+Communities,+Ogulagha+Kingdom,+Delta+State,+Nigeria&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
        <form
          className="p-4 sm:p-8 flex flex-col gap-4 bg-gradient-to-br from-[#0A192F] to-[#00AEEF] text-white rounded-2xl shadow-xl border border-[#00AEEF]/20"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-3">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name*" className="input border border-white/30 bg-white/10 text-white py-2 px-4 mb-1 rounded-2xl focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/30 transition-all" required />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email*" className="input border border-white/30 bg-white/10 text-white py-2 px-4 mb-1 rounded-2xl focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/30 transition-all" required type="email" />
            <input name="company" value={form.company} onChange={handleChange} placeholder="Company" className="input border border-white/30 bg-white/10 text-white py-2 px-4 mb-1 rounded-2xl focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/30 transition-all" />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="input border border-white/30 bg-white/10 text-white py-2 px-4 mb-1 rounded-2xl focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/30 transition-all" />
          </div>
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message*" className="input min-h-[100px] border border-white/30 bg-white/10 text-white py-2 px-4 rounded-2xl focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/30 transition-all" required />
          {error && <div className="text-red-400 text-sm font-semibold">{error}</div>}
          <button
            type="submit"
            className="mt-2 px-8 py-4 border border-white/30 rounded-2xl bg-[#00AEEF] text-white font-bold text-lg shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-[#00AEEF] hover:to-[#0A192F] transition-all duration-200 disabled:opacity-60"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
          </button>
          {status === 'success' && <div className="text-green-400 text-sm font-semibold">Thank you! We will get back to you soon.</div>}
        </form>
      </div>
    </section>
  );
}
