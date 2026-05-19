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
    setTimeout(() => {
      setStatus('success');
      setForm(initialForm);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 rounded-2xl shadow-soft bg-light/80 backdrop-blur-lg">
        <div className="p-8 flex flex-col gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-navy mb-2"
          >
            Contact Us
          </motion.h2>
          <div className="flex flex-col gap-3 text-navy/90">
            <div className="flex items-center gap-3"><Phone className="text-electric" /> +234 701 219 8640 | +234 806 385 2343</div>
            <div className="flex items-center gap-3"><Mail className="text-electric" /> oyateide@igbetiteengineering.com</div>
            <div className="flex items-center gap-3"><MapPin className="text-electric" /> 1 Igborigbo quaters, Sokebolou/Yokiri Federated Communities, Ogulagha Kingdom, Delta State, Nigeria</div>
          </div>
          <a
            href="https://wa.me/2347012198640"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-electric to-navy text-black font-bold shadow-soft hover:scale-105 transition-all duration-200"
          >
            <MessageCircle size={30} /> WhatsApp Us
          </a>
          <div className="mt-8 w-full h-48 bg-black rounded-2xl flex items-center justify-center text-navy/40 text-lg font-semibold">
            Google Maps Placeholder
          </div>
        </div>
        <form
          className="p-8 flex flex-col gap-4 bg-black rounded-2xl shadow-lg border border-navy/10"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name*" className="input" required />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email*" className="input" required type="email" />
            <input name="company" value={form.company} onChange={handleChange} placeholder="Company" className="input" />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="input" />
          </div>
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message*" className="input min-h-[100px]" required />
          {error && <div className="text-red-600 text-sm font-semibold">{error}</div>}
          <button
            type="submit"
            className="mt-2 px-8 py-4 rounded-2xl bg-electric text-white font-bold text-lg shadow-soft hover:scale-105 hover:bg-gradient-to-r hover:from-electric hover:to-navy transition-all duration-200 disabled:opacity-60"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
          </button>
          {status === 'success' && <div className="text-green-600 text-sm font-semibold">Thank you! We will get back to you soon.</div>}
        </form>
      </div>
    </section>
  );
}
