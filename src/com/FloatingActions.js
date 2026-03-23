"use client";
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingActions = () => {
  const phoneNumber = "8123957255";
  const whatsappMessage = "Hello, I am interested in RV College B.Tech Direct Admission 2025-26. Please provide more details.";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[100] group">
      
      {/* WhatsApp Icon */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 group/wa"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -left-32 bg-white text-slate-900 px-3 py-1 rounded-lg text-xs font-black shadow-xl opacity-0 group-hover/wa:opacity-100 transition-opacity pointer-events-none border border-slate-100 uppercase tracking-widest">
            WhatsApp Us
        </span>
        <MessageCircle size={28} fill="currentColor" />
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
      </a>

      {/* Call Icon */}
      <a
        href={`tel:${phoneNumber}`}
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-900 text-amber-400 rounded-full shadow-2xl hover:bg-emerald-800 hover:scale-110 transition-all duration-300 group/call"
        aria-label="Call Now"
      >
        <span className="absolute -left-28 bg-white text-slate-900 px-3 py-1 rounded-lg text-xs font-black shadow-xl opacity-0 group-hover/call:opacity-100 transition-opacity pointer-events-none border border-slate-100 uppercase tracking-widest">
            Call Expert
        </span>
        <Phone size={24} fill="currentColor" />
      </a>

    </div>
  );
};

export default FloatingActions;