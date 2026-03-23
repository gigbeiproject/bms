import React from 'react'
import HeroSection from '../com/hero'
import BranchesGrid from '@/com/BranchesGrid'
import AdmissionDetails from '@/com/AdmissionDetails'
import AboutBMS from '@/com/more'
import FeeTable from '@/com/FeeTable'
import InfoHub from '@/com/InfoHub'

function page() {
  return (
    <div>
    
      <HeroSection/>
      <section className="py-12 bg-sky-500 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-black">1946</p>
            <p className="text-sky-100 text-sm uppercase tracking-widest font-bold">Established</p>
          </div>
          <div>
            <p className="text-4xl font-black">NAAC A</p>
            <p className="text-sky-100 text-sm uppercase tracking-widest font-bold">Accredited</p>
          </div>
          <div>
            <p className="text-4xl font-black">90%+</p>
            <p className="text-sky-100 text-sm uppercase tracking-widest font-bold">Placements</p>
          </div>
          <div>
            <p className="text-4xl font-black">35k+</p>
            <p className="text-sky-100 text-sm uppercase tracking-widest font-bold">Global Alumni</p>
          </div>
        </div>
      </section>

      <AboutBMS />
      <BranchesGrid />
      <AdmissionDetails />
      <FeeTable/>
      <InfoHub/>
      
      {/* Sticky Call Button for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <a href="tel:8217632035" className="bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </a>
      </div>
    </div>
  )
}

export default page
