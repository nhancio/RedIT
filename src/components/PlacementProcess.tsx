import React, { useState, useEffect } from 'react';
import { BookOpen, MessageSquare, Target, Calendar, ChevronRight } from 'lucide-react';

const PlacementProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: BookOpen,
      title: 'Technical & Soft Skills Training',
      description: 'Comprehensive training in cutting-edge technologies with hands-on projects and real-world applications.',
      details: ['Live coding sessions', 'Industry projects', 'Peer programming', 'Expert mentorship'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageSquare,
      title: 'Mock Interviews & Resume Optimization',
      description: 'Professional interview preparation and resume crafting to make you stand out from the competition.',
      details: ['Technical interviews', 'Behavioral rounds', 'ATS-friendly resumes', 'Portfolio building'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Target,
      title: 'Strategic Profile Positioning',
      description: 'Personal branding and profile optimization on professional platforms like LinkedIn and GitHub.',
      details: ['LinkedIn optimization', 'GitHub showcase', 'Personal website', 'Professional networking'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Calendar,
      title: 'Interview Scheduling & Placement',
      description: 'Direct interview opportunities with our partner companies and continuous support until placement.',
      details: ['Company matching', 'Interview coordination', 'Salary negotiation', 'Offer management'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              How Our Placement Program Works?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven 4-step placement methodology has achieved 95% success rate with guaranteed job placement 
            within 6 months of course completion.
          </p>
        </div>

        {/* Desktop View - Horizontal Steps */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 via-purple-500 to-orange-500 rounded-full"></div>
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = index === activeStep;
                
                return (
                  <div
                    key={step.title}
                    className={`relative transition-all duration-700 transform ${isActive ? 'scale-105 -translate-y-4' : 'hover:scale-102'}`}
                    style={{ transitionDelay: `${index * 0.2}s` }}
                  >
                    {/* Step Number */}
                    <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 ${isActive ? 'animate-pulse' : ''}`}>
                      {index + 1}
                    </div>

                    {/* Card */}
                    <div className={`mt-8 p-6 rounded-2xl border-2 transition-all duration-500 ${isActive ? 'bg-gradient-to-br from-gray-900 to-black border-red-500 shadow-2xl shadow-red-500/25' : 'bg-gradient-to-br from-gray-900 to-black border-red-500/30 hover:border-red-500'}`}>
                      <div className="text-center mb-4">
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${step.color} shadow-lg mb-4 ${isActive ? 'animate-bounce' : ''}`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className={`text-lg font-bold mb-3 ${isActive ? 'text-transparent bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text' : 'text-white'}`}>
                          {step.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {step.description}
                        </p>
                      </div>

                      {/* Details */}
                      <div className={`transition-all duration-500 ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`}></div>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile View - Vertical Steps */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <div
                key={step.title}
                className="relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                    {index + 1}
                  </div>
                  
                  <div className="flex-1 pb-8">
                    <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border-2 border-red-500/30 hover:border-red-500 transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${step.color}`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                            <ChevronRight className="w-4 h-4 text-purple-400" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-purple-500 to-transparent"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 rounded-2xl p-8 border-2 border-red-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Placement Journey?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our comprehensive placement program and get guaranteed job placement with salary packages 
              up to ₹25L per annum.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => {
                  if ((window as any).openEnrollModal) {
                    (window as any).openEnrollModal();
                  } else {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-red-600 to-yellow-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Enroll in Placement Program
              </button>
              <button 
                onClick={() => {
                  const storiesSection = document.getElementById('success-stories');
                  if (storiesSection) {
                    storiesSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    // Fallback: try to find by class or scroll to bottom
                    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                  }
                }}
                className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-xl font-semibold hover:bg-red-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementProcess;