"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-2 text-white mb-4">
            <GraduationCap className="text-sky-400" size={32} />
            <span className="text-xl font-bold">BMS <span className="text-sky-400">DIRECT</span></span>
          </div>
          <p className="text-sm">BMSCE & BMSIT B.Tech Direct Admission 2026-2027. All rights reserved.</p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-sky-400">HOME</Link></li>
            {/* <li><Link href="/bmsit-admission" className="hover:text-sky-400">BMSIT FEES</Link></li> */}
             {/* <li><Link href="/bmsit-admission" className="hover:text-sky-400">BMSCE FEES</Link></li> */}
              <li><Link href="/contact" className="hover:text-sky-400">BOOK CONSULTING ONLINE</Link></li>
            <li><Link href="/contact" className="hover:text-sky-400">Contact Us</Link></li>
             
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-6">Contact Us</h3>
          <p className="flex items-center gap-2 mb-2"><Phone size={16} className="text-sky-400"/> 8217632035</p>
          <p className="flex items-center gap-2"><Mail size={16} className="text-sky-400"/> help@edumentor360.in</p>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 text-center text-xs">
        © 2026-2027 BMS Direct Admission. Copyright. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;