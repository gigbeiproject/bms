"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, GraduationCap, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-2 text-white mb-4">
            <GraduationCap className="text-sky-400" size={32} />
            <span className="text-xl font-bold">BMS <span className="text-sky-400">DIRECT</span></span>
          </div>
          <p className="text-sm mb-6">BMSCE & BMSIT B.Tech Direct Admission 2026-2027. All rights reserved.</p>
          
          {/* Social Media Links Added Here */}
          <div className="flex items-center gap-5">
            <a 
              href="https://www.facebook.com/profile.php?id=61584138087952" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={22} />
            </a>
            <a 
              href="https://www.instagram.com/edumentor360.in/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-sky-400 transition-colors">HOME</Link></li>
            {/* <li><Link href="/bmsit-admission" className="hover:text-sky-400">BMSIT FEES</Link></li> */}
            {/* <li><Link href="/bmsit-admission" className="hover:text-sky-400">BMSCE FEES</Link></li> */}
            <li><Link href="/contact" className="hover:text-sky-400 transition-colors">BOOK CONSULTING ONLINE</Link></li>
            <li><Link href="/contact" className="hover:text-sky-400 transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-bold mb-6">Contact Us</h3>
          <p className="flex items-center gap-3 mb-3 hover:text-white transition-colors">
            <Phone size={18} className="text-sky-400"/> 
            <a href="tel:8217632035">8217632035</a>
          </p>
          <p className="flex items-center gap-3 hover:text-white transition-colors">
            <Mail size={18} className="text-sky-400"/> 
            <a href="mailto:help@edumentor360.in">help@edumentor360.in</a>
          </p>
        </div>
      </div>
      
      <div className="border-t border-slate-800 pt-8 text-center text-xs">
        © 2026-2027 BMS Direct Admission. Copyright. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;