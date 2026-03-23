"use client";
import React, { useState } from 'react';
import { Info, MapPin, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FeeTable = () => {
  const [activeTab, setActiveTab] = useState('BMSCE');

  const bmsceData = [
    { id: 1, branch: "Computer Science & Engineering", fee: "15.0", highlighted: true },
    { id: 2, branch: "Artificial Intelligence & Machine Learning", fee: "12.5" },
    { id: 3, branch: "Computer Science & Data Science", fee: "12.0" },
    { id: 4, branch: "Computer Science & Engineering (IOT)", fee: "12.0" },
    { id: 5, branch: "Computer Science & Business Science", fee: "10.0" },
    { id: 6, branch: "Electronics & Communication Engg.", fee: "9.0" },
    { id: 7, branch: "Bio-Technology", fee: "7.0" },
    { id: 8, branch: "B.Architecture (5 year program)", fee: "7.0" },
    { id: 9, branch: "Civil Engineering", fee: "6.0" },
    { id: 10, branch: "Electrical & Electronics Engg.", fee: "6.0" },
    { id: 11, branch: "Mechanical Engineering", fee: "6.0" },
    { id: 12, branch: "Industrial Engineering Management", fee: "6.0" },
    { id: 13, branch: "Chemical Engineering", fee: "4.0" },
    { id: 14, branch: "MBA / M.Tech (VLSI & Embedded)", fee: "4.0" },
    { id: 15, branch: "MCA", fee: "3.5" },
  ];

  const bmsitData = [
    { id: 1, branch: "Computer Science & Engineering", fee: "7.50", highlighted: true },
    { id: 2, branch: "Artificial Intelligence & Machine Learning", fee: "6.00" },
    { id: 3, branch: "Computer Science & Business Science", fee: "5.00" },
    { id: 4, branch: "Electronics & Communication Engg.", fee: "5.00" },
    { id: 5, branch: "B.Architecture (5 year program)", fee: "3.75" },
    { id: 6, branch: "MBA / MCA", fee: "2.75" },
    { id: 7, branch: "M.Tech (VLSI & Embedded)", fee: "2.50" },
    { id: 8, branch: "Civil Engineering", fee: "2.00" },
    { id: 9, branch: "Electrical & Electronics Engg.", fee: "2.00" },
    { id: 10, branch: "Mechanical Engineering", fee: "2.00" },
    { id: 11, branch: "M.Tech (Cyber Security)", fee: "1.50" },
    { id: 12, branch: "M.Tech (Computer Science & Eng.)", fee: "1.25" },
  ];

  const currentData = activeTab === 'BMSCE' ? bmsceData : bmsitData;

  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-xs font-black mb-6 uppercase tracking-widest">
            <GraduationCap size={14} />
            Management Fee Structure 2026-27
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            BMS <span className="text-sky-600">Educational Trust</span>
          </h2>
          
          {/* Institution Toggle */}
          <div className="flex bg-white p-1.5 rounded-2xl border border-slate-200 w-fit mx-auto shadow-sm mt-8">
            <button 
              onClick={() => setActiveTab('BMSCE')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'BMSCE' ? 'bg-sky-600 text-white shadow-lg' : 'text-slate-500 hover:text-sky-600'}`}
            >
              BMSCE 
            </button>
            <button 
              onClick={() => setActiveTab('BMSIT')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'BMSIT' ? 'bg-sky-600 text-white shadow-lg' : 'text-slate-500 hover:text-sky-600'}`}
            >
              BMSIT 
            </button>
          </div>
        </div>

        {/* Institution Info Card */}
        <div className="mb-8 flex items-center justify-between bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
           <div className="flex items-center gap-4">
              <div className="bg-sky-50 p-3 rounded-2xl text-sky-600">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-black text-slate-900 uppercase tracking-tight">
                  {activeTab === 'BMSCE' ? 'BMS College of Engineering' : 'BMS Institute of Tech & Mgmt'}
                </h4>
                <p className="text-slate-400 text-xs font-medium">
                  {activeTab === 'BMSCE' ? 'Bull Temple Road, Bengaluru' : 'Yelahanka, Bengaluru'}
                </p>
              </div>
           </div>
           <div className="hidden md:block text-right">
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Academic Year</p>
              <p className="text-sky-600 font-bold">2026 - 2027</p>
           </div>
        </div>

        {/* Table Container */}
        <div className="overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-2xl bg-white">
          <div className="overflow-x-auto">
            <AnimatePresence mode="wait">
              <motion.table 
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full text-left border-collapse"
              >
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-8 py-6 font-bold uppercase text-[10px] tracking-[0.2em]">SL.No</th>
                    <th className="px-8 py-6 font-bold uppercase text-[10px] tracking-[0.2em]">Branch Name</th>
                    <th className="px-8 py-6 font-bold uppercase text-[10px] tracking-[0.2em] text-right">Annual Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {currentData.map((item) => (
                    <tr 
                      key={item.id} 
                      className={`transition-colors hover:bg-sky-50/30 ${item.highlighted ? 'bg-sky-50/50' : ''}`}
                    >
                      <td className="px-8 py-5 text-slate-400 font-mono text-sm">{item.id.toString().padStart(2, '0')}</td>
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          <span className={`text-sm font-bold ${item.highlighted ? 'text-sky-700' : 'text-slate-700'}`}>
                            {item.branch}
                          </span>
                          {item.highlighted && (
                            <span className="bg-sky-600 text-white text-[9px] px-2 py-0.5 rounded-md uppercase font-black tracking-tighter">Premium</span>
                          )}
                        </div>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <span className="text-slate-900 font-black text-xl">₹{item.fee}</span>
                        <span className="text-slate-400 text-xs font-bold ml-1">LAKH</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </motion.table>
            </AnimatePresence>
          </div>
        </div>

        {/* Note Box */}
        <div className="mt-8 flex items-start gap-4 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
          <Info className="text-sky-500 shrink-0" size={24} />
          <div className="text-sm text-slate-500 leading-relaxed">
            <p className="font-black text-slate-900 mb-2 uppercase tracking-widest text-xs">Admission Policy 2026-27:</p>
            The fees mentioned are applicable for <span className="text-slate-900 font-bold">Management Quota</span> admissions only. Fees for Entrance-based (KCET/COMEDK) seats are governed by Government of Karnataka norms. For seat availability and verified documentation, contact: <span className="text-sky-600 font-black underline">8217632035</span>.
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeeTable;