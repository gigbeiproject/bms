const BranchesGrid = () => {
  const branches = [
    "Computer Science (CSE)", "AI & Machine Learning", "Information Science", "CSE (Data Science)", 
    "Aeronautical Engineering", "Electronics (ECE)", "Bio-Technology", "Chemical Engineering",
    "Mechanical Engineering", "Civil Engineering", "Electrical (EEE)", "Industrial Engineering"
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Undergraduate Programs</h2>
          <p className="text-slate-500 mt-4">Choose your specialized career path in B.Tech</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {branches.map((name) => (
            <div key={name} className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-sky-500 hover:shadow-lg transition-all group cursor-default">
              <p className="font-bold text-slate-700 group-hover:text-sky-600 transition-colors">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BranchesGrid;