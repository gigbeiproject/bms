"use client";
import React from 'react';
import { 
  MapPin, 
  GraduationCap, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Phone,
  ArrowRight
} from 'lucide-react';


const BMSITAdmission = () => {
  const branches = [
    "Computer Science & Engineering",
    "Information Science & Engineering",
    "Artificial Intelligence & Machine Learning",
    "Electronics & Communication Engineering",
    "Electronics & Telecommunication Engineering",
    "Electrical & Electronics Engineering",
    "Mechanical Engineering",
    "Civil Engineering"
  ];

  return (
    <div className="bg-white">
      {/* 1. Header Spacer */}
      <div className="h-24 md:h-32 bg-sky-50"></div>

      {/* 2. Sub-Hero Section */}
      <section className="py-16 bg-sky-50 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white text-sky-600 px-4 py-2 rounded-full shadow-sm border border-sky-100 font-bold text-sm uppercase tracking-wider">
              <MapPin size={16} /> Yelahanka, Bangalore
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              BMSIT B.Tech <span className="text-sky-500">Admission 2026</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Established in 2002 by the BMS Educational Trust, BMS Institute of Technology (BMSIT) is 
              recognized as one of the premier engineering destinations in North Bangalore.
            </p>
            <div className="flex gap-4">
               <a href="tel:8217632035" className="bg-sky-500 text-white px-8 py-4 rounded-2xl font-black shadow-lg hover:bg-sky-600 transition-all flex items-center gap-2">
                 Call: 8217632035 <Zap size={18} fill="currentColor" />
               </a>
            </div>
          </div>
          <div className="flex-1 bg-white p-4 rounded-[2.5rem] shadow-2xl border border-sky-100 relative group">
            <div className="aspect-video bg-sky-100 rounded-[2rem] flex items-center justify-center overflow-hidden">
               <GraduationCap size={80} className="text-sky-300 group-hover:scale-110 transition-transform duration-500" />
            </div>
            {/* Trust Badge */}
            <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-3xl shadow-xl">
               <p className="text-2xl font-black">2002</p>
               <p className="text-[10px] text-sky-400 uppercase font-bold tracking-widest">Year Established</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why BMSIT? Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-white border border-sky-100 rounded-[2rem] shadow-xl shadow-sky-100/20 text-center">
            <ShieldCheck className="mx-auto text-sky-500 mb-6" size={48} />
            <h3 className="text-xl font-bold text-slate-800 mb-4">Accreditation</h3>
            <p className="text-slate-500 text-sm"> NBA Accredited and NAAC &apos;A&apos; Grade Institution under VTU.</p>
          </div>
          <div className="p-10 bg-white border border-sky-100 rounded-[2rem] shadow-xl shadow-sky-100/20 text-center">
            <Zap className="mx-auto text-orange-500 mb-6" size={48} />
            <h3 className="text-xl font-bold text-slate-800 mb-4">Placements</h3>
            <p className="text-slate-500 text-sm">High placement record in top-tier MNCs like Amazon, SAP, and Dell.</p>
          </div>
          <div className="p-10 bg-white border border-sky-100 rounded-[2rem] shadow-xl shadow-sky-100/20 text-center">
            <MapPin className="mx-auto text-green-500 mb-6" size={48} />
            <h3 className="text-xl font-bold text-slate-800 mb-4">Prime Location</h3>
            <p className="text-slate-500 text-sm">Located in the tech-hub of North Bangalore, Yelahanka.</p>
          </div>
        </div>
      </section>

      {/* 4. Branches Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-slate-900">B.Tech Specializations <span className="text-sky-500">2026</span></h2>
            <p className="text-slate-500 mt-2 font-medium">BMSIT offers a wide range of future-ready engineering programs.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {branches.map((branch, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 group hover:border-sky-500 transition-all">
                <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 font-bold group-hover:bg-sky-500 group-hover:text-white">
                  {i + 1}
                </div>
                <span className="font-bold text-slate-700">{branch}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Admission Procedure */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 blur-[120px]"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                How to Secure Your <span className="text-sky-400">Seat in 2026?</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Through KCET (Karnataka Common Entrance Test)",
                  "Through COMED-K Entrance Examination",
                  "Direct Admission via Management Quota"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                    <CheckCircle2 className="text-sky-400" size={24} />
                    <span className="font-bold text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

           <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20">
  <h4 className="text-sky-400 font-black uppercase text-xs tracking-widest mb-4">
    Eligibility Criteria
  </h4>

  <ul className="space-y-4 text-slate-300">
    <li className="flex gap-3">
      <div className="mt-1.5 w-1.5 h-1.5 bg-sky-400 rounded-full shrink-0"></div>
      <span>
        More than <strong>75% marks in PCM (Physics, Chemistry, Mathematics)</strong>.
      </span>
    </li>
  </ul>

  <div className="mt-10 pt-8 border-t border-white/10 text-center">
    <p className="text-sm mb-4">Confused about the process?</p>
    <a 
      href="tel:8217632035" 
      className="inline-block text-2xl font-black hover:text-sky-400 transition-colors"
    >
      8217632035
    </a>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* 6. Contact CTA */}
      <section className="pb-24 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-slate-900 mb-6">Take the first step toward your engineering dream at BMSIT.</h2>
        <a href="/contact" className="group flex items-center justify-center gap-3 bg-slate-900 text-white py-5 px-10 rounded-2xl font-black text-xl hover:bg-sky-500 transition-all shadow-2xl">
          Get Admission Help <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </a>
      </section>
    </div>
  );
};

export default BMSITAdmission;