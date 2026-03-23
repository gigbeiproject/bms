"use client";
import React, { useState } from 'react';
import { User, Phone, Mail, BookOpen, Send, CheckCircle2 } from 'lucide-react';

const HeroSection = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    branch: '',
  });

  // Handle Input Change
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

// Handle Form Submit
const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form Submitted:', formData);

  // Add your form submission logic here (e.g., API call)
  alert('Thank you for your enquiry. We will get back to you soon!');

  setFormData({
    name: '',
    phone: '',
    email: '',
    branch: ''
  }); // Reset form
};

  // Mock B.Tech Branches for dropdown
  const branches = [
    "Computer Science (CSE)",
    "Information Science (ISE)",
    "Artificial Intelligence & Machine Learning (AI&ML)",
    "Electronics & Communication (ECE)",
    "Mechanical Engineering (ME)",
    "Civil Engineering (CE)",
    "Other/Not Decided"
  ];

  return (
    // Top padding keeps content below the floating navbar
    <section className="relative bg-sky-50 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl opacity-80 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Content & Text */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-white text-sky-600 px-4 py-1 rounded-full shadow-sm border border-sky-100 font-semibold text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              Admissions Open 2026-2027
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 tracking-tighter leading-tight">
               B.Tech Admission in <span className="text-sky-500">BMSCE & BMSIT</span> 2026-27
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0">
Secure your seat in top engineering colleges in Bangalore. Confirmed admission, zero hassle, expert guidance.            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center justify-center lg:justify-start text-slate-700 font-medium">
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm border border-sky-100 w-full sm:w-auto">
                    <CheckCircle2 className="text-sky-500"/> Verified Seats
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm border border-sky-100 w-full sm:w-auto">
                    <CheckCircle2 className="text-sky-500"/> Direct Process
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm border border-sky-100 w-full sm:w-auto">
                    <CheckCircle2 className="text-sky-500"/> Expert Counselling
                </div>
            </div>
          </div>

          {/* Right Column - Your Contact Form (Left Sider interpretation) */}
          <div className="lg:col-span-5 relative">
            
            {/* Form Container with modern styling */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-sky-100/70 border border-sky-100/50">
              
              <div className="mb-8 text-center lg:text-left">
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Contact Now</h2>
                <p className="text-sky-600 font-semibold mt-1">Contact Us</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name Field */}
                <div className="relative">
                  <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider pl-1 mb-1 block">Name <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-400" size={20} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-4 py-4 bg-sky-50 rounded-xl border border-sky-100 focus:ring-2 focus:ring-sky-200 focus:border-sky-300 outline-none transition text-slate-800 placeholder:text-slate-400 font-medium"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <label htmlFor="phone" className="text-xs font-bold text-slate-500 uppercase tracking-wider pl-1 mb-1 block">Phone Number <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-400" size={20} />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile number"
                      className="w-full pl-12 pr-4 py-4 bg-sky-50 rounded-xl border border-sky-100 focus:ring-2 focus:ring-sky-200 focus:border-sky-300 outline-none transition text-slate-800 placeholder:text-slate-400 font-medium"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider pl-1 mb-1 block">Email <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-400" size={20} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@gmail.com"
                      className="w-full pl-12 pr-4 py-4 bg-sky-50 rounded-xl border border-sky-100 focus:ring-2 focus:ring-sky-200 focus:border-sky-300 outline-none transition text-slate-800 placeholder:text-slate-400 font-medium"
                    />
                  </div>
                </div>

                {/* Branch Field */}
                <div className="relative">
                  <label htmlFor="branch" className="text-xs font-bold text-slate-500 uppercase tracking-wider pl-1 mb-1 block">Branch Required <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-400" size={20} />
                    <select
                      id="branch"
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-sky-50 rounded-xl border border-sky-100 focus:ring-2 focus:ring-sky-200 focus:border-sky-300 outline-none transition text-slate-800 placeholder:text-slate-400 font-medium appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select preferred B.Tech branch</option>
                      {branches.map((branch, index) => (
                        <option key={index} value={branch} className="font-medium text-slate-800">
                          {branch}
                        </option>
                      ))}
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-sky-400">
                        <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-3 bg-sky-500 text-white py-4 rounded-xl font-extrabold text-lg shadow-lg shadow-sky-200 hover:bg-sky-600 hover:shadow-sky-300 transition-all active:scale-[0.98]"
                  >
                    Submit Enquiry
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;