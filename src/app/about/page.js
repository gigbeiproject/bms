"use client";
import React from 'react';
import { 
  History, 
  Target, 
  Eye, 
  Users2, 
  Award, 
  ShieldCheck, 
  Building, 
  Globe2 
} from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { label: "Founded In", value: "1946", icon: <History className="text-sky-500" /> },
    { label: "Total Students", value: "5000+", icon: <Users2 className="text-sky-500" /> },
    { label: "Alumni Network", value: "35,000+", icon: <Globe2 className="text-sky-500" /> },
    { label: "UG/PG Courses", value: "29+", icon: <Award className="text-sky-500" /> },
  ];

  return (
    <div className="bg-white">
      {/* 1. Simple Breadcrumb Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-sky-50 to-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">
            About <span className="text-sky-500">BMS Direct Admission</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Empowering the next generation of engineers since 1946 through excellence in education and professional guidance.
          </p>
        </div>
      </section>

      {/* 2. Legacy Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-sky-100 text-sky-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
              Our Legacy
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
              The First Private Sector Engineering College in India
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              BMS College of Engineering (BMSCE) was founded by <strong>Businayana Mukundadas Sreenivasaiah</strong>. Over the last 73 years, the institution has evolved into a global center for academic excellence. 
            </p>
            <p className="text-slate-600 leading-relaxed">
           With NAAC &apos;A&apos; accreditation and NBA status, we pride ourselves on being a highly populated and respected hub for technical learning in Karnataka. Our autonomous status allows us to adapt quickly to industry changes, ensuring our students are always ahead of the curve.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-sky-100 shadow-xl shadow-sky-100/20 text-center hover:-translate-y-2 transition-transform">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-tighter">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission (Glass Cards) */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-sky-500 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-[2.5rem] space-y-4">
            <div className="bg-sky-500 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              To look for, create, deliver and preserve information and understanding. We aim to be a unified community that serves as a key gateway to modern research and professional academic records.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-[2.5rem] space-y-4">
            <div className="bg-orange-500 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
              <Target className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-slate-400 leading-relaxed">
              To offer a fully integrated and dynamic environment suited for scholarly interests, by augmenting traditional print and electronic assets for global advancements in engineering.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Why Trust Us Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">Why Choose <span className="text-sky-500">BMSCE?</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Academic Excellence",
              desc: "Over 90% of students secure first-class or distinction marks consistently under autonomous guidance.",
              icon: <ShieldCheck size={32} />
            },
            {
              title: "Recruitment Cell",
              desc: "100+ reputed Core/IT/MNC companies visit every year including Amazon, Microsoft, and Cisco.",
              icon: <Building size={32} />
            },
            {
              title: "Infrastructure",
              desc: "Modern research centers, voluminous libraries, and 24/7 high-speed internet across the campus.",
              icon: <Target size={32} />
            }
          ].map((item, i) => (
            <div key={i} className="text-center group p-4">
              <div className="w-20 h-20 bg-sky-50 text-sky-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h4>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-sky-500 rounded-[3rem] p-10 md:p-20 text-center text-white shadow-2xl shadow-sky-200">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Secure Your Future Today</h2>
          <p className="text-sky-100 text-lg mb-10 max-w-2xl mx-auto">
          Don&apos;t miss the chance to be a part of India&apos;s most prestigious engineering legacy.
            Admissions for 2026-2027 are filling up fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8217632035" className="bg-white text-sky-600 px-10 py-4 rounded-2xl font-black text-lg hover:bg-slate-900 hover:text-white transition-all">
              Call Now: 8217632035
            </a>
            <a href="/contact" className="bg-sky-600 text-white border border-sky-400 px-10 py-4 rounded-2xl font-black text-lg hover:bg-sky-700 transition-all">
              Apply for Admission
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;