"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactDetails = [
    {
      icon: <Phone className="text-sky-500" size={24} />,
      title: "Call Us Directly",
      detail: "+91 8217632035",
      link: "tel:8217632035",
      sub: "Available 9:00 AM - 8:00 PM"
    },
    {
      icon: <Mail className="text-sky-500" size={24} />,
      title: "Email Enquiry",
      detail: "help@edumentor360.in",
      link: "mailto:help@edumentor360.in",
      sub: "Response within 24 hours"
    },
    {
      icon: <MapPin className="text-sky-500" size={24} />,
      title: "Visit Office",
      detail: "Bangalore, Karnataka",
      link: "#",
      sub: "Near BMSCE Campus"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header Spacer for fixed navbar */}
      <div className="h-24 md:h-32 bg-sky-50"></div>

      <section className="py-16 md:py-24 bg-sky-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
                  Get in Touch with our <span className="text-sky-500">Experts</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Have questions about the Management Quota or the admission process for 2026-27? 
                  Our counselors are ready to help you secure your seat.
                </p>
              </div>

              <div className="space-y-8">
                {contactDetails.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.link}
                    className="flex items-start gap-6 group"
                  >
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-sky-100 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                      <p className="text-sky-600 font-bold group-hover:text-sky-700">{item.detail}</p>
                      <p className="text-slate-400 text-sm mt-1">{item.sub}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Office Hours Card */}
              <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-[-20px] right-[-20px] opacity-10">
                  <Clock size={120} />
                </div>
                <h4 className="text-sky-400 font-bold uppercase tracking-widest text-xs mb-4">Office Hours</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Monday - Friday</span>
                    <span className="font-bold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Saturday</span>
                    <span className="font-bold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Sunday</span>
                    <span className="text-orange-400 font-bold italic">Closed (Call Only)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-sky-100 border border-white relative">
                
                {isSubmitted ? (
                  <div className="py-20 text-center space-y-4 animate-in fade-in zoom-in duration-500">
                    <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} />
                    </div>
                    <h2 className="text-3xl font-black text-slate-900">Message Received!</h2>
                    <p className="text-slate-500 max-w-xs mx-auto">
                      One of our admission experts will call you back within 2 hours.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-sky-500 font-bold hover:underline pt-4"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="mb-8">
                      <h2 className="text-2xl font-black text-slate-900">Send us a Message</h2>
                      <p className="text-slate-400 text-sm font-medium mt-1">Fields marked with * are mandatory</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name *</label>
                        <input required type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-sky-200 outline-none transition" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number *</label>
                        <input required type="tel" placeholder="+91 00000 00000" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-sky-200 outline-none transition" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address *</label>
                      <input required type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-sky-200 outline-none transition" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Interested Branch *</label>
                      <select required className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-sky-200 outline-none transition cursor-pointer">
                        <option value="">Select a Branch</option>
                        <option value="cse">Computer Science (CSE)</option>
                        <option value="aiml">AI & Machine Learning</option>
                        <option value="ise">Information Science (ISE)</option>
                        <option value="ece">Electronics (ECE)</option>
                        <option value="other">Other Branches</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                      <textarea rows="4" placeholder="Tell us about your requirements..." className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-sky-200 outline-none transition resize-none"></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full group bg-sky-500 hover:bg-sky-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-sky-100 transition-all flex items-center justify-center gap-3 active:scale-95"
                    >
                      SEND ENQUIRY NOW
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-[400px] w-full bg-slate-200 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="w-full h-full flex items-center justify-center bg-sky-100 text-sky-400">
             <div className="text-center">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="font-bold">Google Map Integration Here</p>
                <p className="text-sm">BMS College Area, Bangalore</p>
             </div>
          </div>
      </section>
    </div>
  );
};

export default ContactPage;