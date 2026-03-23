const AdmissionDetails = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-sky-500">Admission & Eligibility</h2>
      <p className="text-sky-600 font-bold">Academic Session 2026 - 2027</p>
    </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  
  {/* Eligibility Card */}
  <div className="bg-white p-8 rounded-3xl shadow-xl border border-sky-100">
    <h3 className="text-2xl font-bold text-slate-800 mb-6">Academic Eligibility</h3>

    <div className="space-y-4">
      <div className="pb-4 border-b border-slate-100">
        <p className="text-sky-600 font-bold text-sm uppercase">Eligibility</p>
        <p className="text-slate-700 font-medium">
          Minimum <strong>75%+ in PCM (Physics, Chemistry, Mathematics)</strong>
        </p>
      </div>

      <p className="text-xs text-slate-400 italic font-medium">
        * Applicable for top engineering colleges
      </p>
    </div>
  </div>

  {/* Seat Split Card */}
  <div className="bg-sky-600 p-8 rounded-3xl shadow-xl text-white">
    <h3 className="text-2xl font-bold mb-6">Seat Distribution</h3>

    <div className="space-y-6">
      
      {/* Updated (Removed Management Quota) */}
      <div className="flex justify-between items-center">
        <span className="font-semibold text-sky-100">Management Quota Admission</span>
        <span className="text-2xl font-black">25%</span>
      </div>
      <div className="w-full bg-sky-700 h-2 rounded-full overflow-hidden">
        <div className="bg-white h-full" style={{ width: '20%' }}></div>
      </div>

      <div className="flex justify-between items-center">
        <span className="font-semibold text-sky-100">K-CET (Karnataka)</span>
        <span className="text-2xl font-black">40%</span>
      </div>
      <div className="w-full bg-sky-700 h-2 rounded-full overflow-hidden">
        <div className="bg-white h-full" style={{ width: '45%' }}></div>
      </div>

      <div className="flex justify-between items-center">
        <span className="font-semibold text-sky-100">COMED-K</span>
        <span className="text-2xl font-black">35%</span>
      </div>
      <div className="w-full bg-sky-700 h-2 rounded-full overflow-hidden">
        <div className="bg-white h-full" style={{ width: '35%' }}></div>
      </div>

    </div>
  </div>

</div>
    
    <div className="mt-12 text-center">
        <p className="text-slate-500 font-medium italic">Call our expert guidance center for Management Seat Availability:</p>
        <a href="tel:8217632035" className="text-3xl font-black text-sky-500 mt-2 block hover:scale-105 transition-transform">8217632035</a>
    </div>
  </section>
);
export default AdmissionDetails;