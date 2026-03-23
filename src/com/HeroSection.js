"use client";
import React, { useState } from 'react';
import { User, Phone, Mail, BookOpen, Send, CheckCircle2 } from 'lucide-react';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    branch: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Enquiry Sent! We will contact you at ' + formData.phone);
    setFormData({ name: '', phone: '', email: '', branch: '' });
  };

  const branches = [
    "Computer Science (CSE)", "Information Science (ISE)", "AI & ML",
    "Electronics (ECE)", "Mechanical (ME)", "Civil (CE)", "Other"
  ];

  return (
    <section className="relative bg-sky-50 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 leading-tight">
              Direct B.Tech Admission in <span className="text-sky-500">BMSCE & BMSIT</span>
            </h1>
            <p className="text-lg text-slate-600">Secure your seat for 2026-2027 academic session through management quota.</p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {['Verified Seats', 'Direct Process', 'Expert Help'].map((item) => (
                <div key={item} className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm border border-sky-100 font-medium text-slate-700">
                  <CheckCircle2 className="text-sky-500" size={18} /> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-sky-100">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Contact Now</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase block mb-1">Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-4 bg-sky-50 rounded-xl border border-sky-100 outline-none focus:ring-2 focus:ring-sky-200" placeholder="Full Name" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase block mb-1">Phone *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full p-4 bg-sky-50 rounded-xl border border-sky-100 outline-none focus:ring-2 focus:ring-sky-200" placeholder="10 Digit Number" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase block mb-1">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-4 bg-sky-50 rounded-xl border border-sky-100 outline-none focus:ring-2 focus:ring-sky-200" placeholder="Email Address" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase block mb-1">Branch Required *</label>
                  <select name="branch" value={formData.branch} onChange={handleChange} required className="w-full p-4 bg-sky-50 rounded-xl border border-sky-100 outline-none focus:ring-2 focus:ring-sky-200 cursor-pointer">
                    <option value="">Select Branch</option>
                    {branches.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-sky-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-sky-600 transition-all">
                  Submit Enquiry <Send size={18} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;