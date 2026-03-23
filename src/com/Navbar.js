"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, Phone, Menu, X, ChevronRight, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect for a modern "sticky" feel
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'BMSIT B.Tech 2026', href: '/bmsit-admission' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300">
      {/* Top Contact Strip - Light Sky Background */}
      <div className="bg-sky-50 border-b border-sky-100 py-2 px-6 md:px-12 flex justify-between items-center text-xs md:text-sm font-medium text-sky-700">
        <div className="flex items-center gap-6">
          <a href="mailto:help@edumentor360.in" className="flex items-center gap-2 hover:text-sky-900 transition-colors">
            <Mail size={14} className="text-sky-500" />
            <span className="hidden sm:inline">help@edumentor360.in</span>
          </a>
          <a href="tel:8217632035" className="flex items-center gap-2 hover:text-sky-900 transition-colors">
            <Phone size={14} className="text-sky-500" />
            <span>+91 8217632035</span>
          </a>
        </div>
        <div className="hidden lg:flex items-center gap-1 animate-pulse">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Admissions Open 2026-2027
        </div>
      </div>

      {/* Main Glass Navbar */}
      <div className={`mx-auto transition-all duration-300 ${scrolled ? 'max-w-full px-6 py-3 bg-white/80 backdrop-blur-md shadow-lg' : 'max-w-7xl px-4 py-5 bg-transparent'}`}>
        <div className={`bg-white rounded-2xl ${!scrolled && 'shadow-xl shadow-sky-100/50 border border-sky-50'} px-6 py-3 flex justify-between items-center`}>
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-sky-500 p-2 rounded-xl group-hover:rotate-12 transition-transform">
              <GraduationCap className="text-white" size={28} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-slate-800 tracking-tight leading-none"> <span className="text-sky-500">BMSCE </span></span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Admission Guidance</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-600 hover:text-sky-600 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-sky-500 after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:block">
            <Link 
              href="/contact" 
              className="group flex items-center gap-2 bg-sky-500 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-sky-200 hover:bg-sky-600 hover:shadow-sky-300 transition-all active:scale-95"
            >
              Enquire Now
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 hover:bg-sky-50 rounded-lg transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 bg-slate-900/20 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)} />
      
      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-white lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl z-[60] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-10">
            <span className="font-bold text-sky-600 italic">Menu</span>
            <button onClick={() => setIsOpen(false)} className="p-2 bg-sky-50 text-sky-600 rounded-full"><X size={20} /></button>
          </div>
          
          <div className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block p-4 text-lg font-bold text-slate-700 hover:bg-sky-50 hover:text-sky-600 rounded-xl transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-slate-100">
            <p className="text-xs text-slate-400 mb-4 font-semibold uppercase tracking-widest text-center">Contact Support</p>
            <a href="tel:8217632035" className="flex items-center justify-center gap-3 bg-slate-900 text-white py-4 rounded-2xl font-bold shadow-xl active:scale-95 transition-all">
              <Phone size={18} />
              8217632035
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;