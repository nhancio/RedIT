import React from 'react';

const PlacementCompanies = () => {
  const companies = [
    { name: 'Google', logo: '🔵', sector: 'Tech Giant' },
    { name: 'Microsoft', logo: '🟦', sector: 'Software' },
    { name: 'Amazon', logo: '🟠', sector: 'E-commerce' },
    { name: 'Infosys', logo: '🟣', sector: 'IT Services' },
    { name: 'TCS', logo: '🔷', sector: 'Consulting' },
    { name: 'Wipro', logo: '🟢', sector: 'IT Services' },
    { name: 'Accenture', logo: '🟡', sector: 'Consulting' },
    { name: 'IBM', logo: '🔴', sector: 'Technology' },
    { name: 'Deloitte', logo: '⚫', sector: 'Consulting' },
    { name: 'HCL', logo: '🟤', sector: 'IT Services' },
    { name: 'Cognizant', logo: '🔵', sector: 'IT Services' },
    { name: 'Capgemini', logo: '🟦', sector: 'Consulting' }
  ];

  // Duplicate companies for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section id="placements" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Top Placement Partners
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our students are successfully placed in leading global companies with competitive salary packages 
            and excellent growth opportunities.
          </p>
        </div>

        {/* Auto-scrolling companies */}
        <div className="relative">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-800 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-800 to-transparent z-10"></div>
          
          <div className="flex space-x-8 animate-scroll">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 min-w-[180px]">
                  <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {company.logo}
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {company.name}
                    </h3>
                    <p className="text-sm text-gray-400">{company.sector}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {[
            { number: '200+', label: 'Partner Companies', color: 'from-blue-500 to-cyan-500' },
            { number: '95%', label: 'Placement Rate', color: 'from-green-500 to-teal-500' },
            { number: '₹25L', label: 'Highest Package', color: 'from-purple-500 to-pink-500' },
            { number: '5000+', label: 'Students Placed', color: 'from-orange-500 to-red-500' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join These Top Companies?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our proven placement process has helped thousands of students secure their dream jobs. 
              Be the next success story!
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              Start Your Placement Journey
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: calc(180px * ${companies.length} + 32px * ${companies.length - 1});
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PlacementCompanies;