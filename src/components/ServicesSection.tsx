import React, { useState } from 'react';
import { FileText, MessageSquare, Users, Briefcase, UserCheck, Target } from 'lucide-react';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  
  const services = [
    {
      icon: FileText,
      title: 'Resume Optimization',
      description: 'Professional resume crafting that gets you noticed by top recruiters and ATS systems.',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['ATS-friendly format', 'Industry keywords', 'Professional templates', 'Multiple revisions']
    },
    {
      icon: MessageSquare,
      title: 'Mock Interviews',
      description: 'Realistic interview practice with industry experts to boost your confidence.',
      gradient: 'from-green-500 to-teal-500',
      features: ['Technical rounds', 'HR interviews', 'Behavioral questions', 'Detailed feedback']
    },
    {
      icon: Users,
      title: 'Soft Skills Training',
      description: 'Communication and interpersonal skills essential for workplace success.',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Presentation skills', 'Team collaboration', 'Leadership training', 'Conflict resolution']
    },
    {
      icon: Briefcase,
      title: 'Internship Programs',
      description: 'Real-world work experience with our partner companies and startups.',
      gradient: 'from-orange-500 to-red-500',
      features: ['3-6 month programs', 'Stipend included', 'Live projects', 'Mentorship support']
    },
    {
      icon: UserCheck,
      title: 'Direct Job Referrals',
      description: 'Get direct referrals to top companies through our extensive network.',
      gradient: 'from-indigo-500 to-purple-500',
      features: ['MNC referrals', 'Startup opportunities', 'Remote positions', 'Contract roles']
    },
    {
      icon: Target,
      title: 'Placement Drives',
      description: 'Exclusive hiring events with guaranteed interview opportunities.',
      gradient: 'from-yellow-500 to-orange-500',
      features: ['Monthly drives', 'Multiple companies', 'On-spot offers', 'Salary negotiations']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Complete Career Support
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From skill development to job placement - we provide end-to-end career transformation services 
            that guarantee your success in the tech industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/25"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredService(service.title)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {hoveredService === service.title && (
                    <div className="space-y-3 mt-4 animate-fade-in">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '1px' }}>
                  <div className="w-full h-full rounded-2xl bg-slate-800"></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our comprehensive program and get guaranteed placement with salary packages 
              ranging from ₹3L to ₹25L per annum.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => {
                  const coursesSection = document.getElementById('courses');
                  coursesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-xl font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;