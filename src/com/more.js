const AboutBMS = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-black text-sky-500">
          Legacy of <span className="text-sky-500">73+ Years</span> in Engineering
        </h2>
        <p className="text-slate-600 leading-relaxed text-lg">
          Founded in 1946, <strong>BMS College of Engineering (BMSCE)</strong> is India&apos;s first private sector engineering college. 
          With a mission to impart quality education, it has grown into one of the most populated and respected 
          institutions in Karnataka.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['Autonomous Status', 'NBA Accredited', 'NAAC A Grade', 'AICTE Approved'].map((tag) => (
            <div key={tag} className="flex items-center gap-2 text-slate-700 font-semibold bg-sky-50 p-3 rounded-lg border border-sky-100">
              <div className="w-2 h-2 bg-sky-500 rounded-full"></div> {tag}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-sky-100 rounded-3xl p-8 aspect-video flex items-center justify-center border-4 border-white shadow-xl">
        <p className="text-sky-800 font-bold italic text-center">
          &quot;The first private sector Engineering college in India - Since 1946&quot;
        </p>
      </div>
    </div>
  </section>
);

export default AboutBMS;