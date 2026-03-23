"use client";
import React from 'react';
import { 
  BookOpen, Users, Trophy, Building2, 
  Calendar, FileCheck, Landmark, Briefcase, 
  ClipboardList,
  PencilRuler,
  ShieldCheck,
  CheckCircle
} from 'lucide-react';

const InfoHub = () => {
  const features = [
    {
      title: "Admission Requirements",
      icon: <FileCheck className="text-sky-500" />,
      desc: "Original 10th & 12th Marks Cards, Entrance Exam Rank Card (KCET/COMEDK,JEE), Transfer Certificate, and Migration Certificate (for Non-Karnataka students)."
    },
    {
      title: "Counseling Process",
      icon: <Users className="text-sky-500" />,
      desc: "Step-by-step guidance through KEA and COMED-K counseling schedules, document verification, and seat allotment procedures."
    },
    {
      title: "Infrastructure",
      icon: <Building2 className="text-sky-500" />,
      desc: "State-of-the-art research labs, digital libraries, 24/7 Wi-Fi campus, modern hostels, and high-tech A/V classrooms."
    },
    {
      title: "Placements 2026-2027",
      icon: <Trophy className="text-sky-500" />,
      desc: "Over 100+ recruiters including top MNCs like Amazon, Microsoft, and Cisco. Average packages consistently stay among the best in Bangalore."
    },
    {
      title: "Campus Life",
      icon: <Landmark className="text-sky-500" />,
      desc: "A vibrant cultural environment with annual fests (Phase Shift), technical clubs, and a massive 35,000+ alumni network worldwide."
    },
    {
      title: "Scholarships",
      icon: <Briefcase className="text-sky-500" />,
      desc: "Various government and institutional scholarships are available for meritorious and reserved category students."
    },

    {
      title: "Application Form",
      icon: <ClipboardList className="text-sky-500" />,
      desc: "Registration and submission of application forms for Management, KCET, or COMEDK portals."
    },
    {
      title: "Entrance Exam",
      icon: <PencilRuler className="text-sky-500" />,
      desc: "Appear for required entrance exams such as KCET, COMEDK, or JEE and secure a valid qualifying rank."
    },
    {
      title: "Counselling & Verification",
      icon: <ShieldCheck className="text-sky-500" />,
      desc: "Attend the official KCET or COMEDK counselling process for mandatory document and certificate verification."
    },
    {
      title: "Seat Allotment & Admission",
      icon: <CheckCircle className="text-sky-500" />,
      desc: "Finalize your seat allotment through Management quota, KCET counselling, or COMEDK counselling sessions."
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            BMSCE <span className="text-sky-500">Admission Portal</span>
          </h2>
          <p className="text-slate-500 max-w-2xl font-medium">
            Everything you need to know about the BMS College of Engineering admission procedure, eligibility, and life on campus.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-sky-50 border border-transparent hover:border-sky-200 hover:bg-white hover:shadow-2xl hover:shadow-sky-100 transition-all duration-300 group"
            >
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Timeline for Counseling */}
        <div className="mt-20 bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 blur-[100px]"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
              <Calendar className="text-sky-400" />
              Admission Roadmap 2026-27
            </h3>

            <div className="space-y-12">
              {[
                { step: "01", title: "Application Form", detail: "Fill the BMSCE online application or register via KEA/COMED-K portals." },
                { step: "02", title: "Entrance Exam", detail: "Appear for KCET or COMED-K and secure a valid rank." },
                { step: "03", title: "Counseling & Document Verification", detail: "Attend the counseling session as per the schedule provided by the authorities." },
                { step: "04", title: "Seat Allotment & Admission", detail: "Finalize your seat and complete the fee payment at the college campus." }
              ].map((path, i) => (
                <div key={i} className="flex gap-6 md:gap-10">
                  <div className="text-4xl font-black text-sky-500 opacity-50 shrink-0">{path.step}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{path.title}</h4>
                    <p className="text-slate-400 max-w-xl">{path.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfoHub;