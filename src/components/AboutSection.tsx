import React, { useEffect, useState } from 'react';
import { Award, Users, Target, TrendingUp, Building, Globe } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    students: 0,
    courses: 0,
    companies: 0,
    experience: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            startCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const startCounters = () => {
    const targets = { students: 5000, courses: 25, companies: 200, experience: 10 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    Object.entries(targets).forEach(([key, target]) => {
      let current = 0;
      const increment = target / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepTime);
    });
  };

  const stats = [
    { icon: Users, label: 'Students Placed', value: counters.students, suffix: '+' },
    { icon: Award, label: 'Courses Offered', value: counters.courses, suffix: '+' },
    { icon: Building, label: 'Partner Companies', value: counters.companies, suffix: '+' },
    { icon: TrendingUp, label: 'Years Experience', value: counters.experience, suffix: '+' }
  ];

  const companies = [
    { name: 'Google', logo: '🔵' },
    { name: 'Microsoft', logo: '🟦' },
    { name: 'Amazon', logo: '🟠' },
    { name: 'Infosys', logo: '🟣' },
    { name: 'TCS', logo: '🔷' },
    { name: 'Wipro', logo: '🟢' },
    { name: 'Accenture', logo: '🟡' },
    { name: 'IBM', logo: '🔴' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="about-section" className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About RedDot IT Training
            </span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Leading the future of technology education with industry-aligned curriculum, expert mentorship, 
            and guaranteed placement support. Join thousands of successful professionals who transformed their careers with us.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className={`text-center p-6 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-4 shadow-lg">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-3xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">RedDot IT Training?</span>
            </h3>
            
            <div className="space-y-4">
              {[
                { icon: Target, title: '100% Placement Guarantee', desc: 'Get placed or get your money back - our commitment to your success' },
                { icon: Award, title: 'Industry Expert Trainers', desc: 'Learn from professionals with 10+ years of real-world experience' },
                { icon: Globe, title: 'Live Project Experience', desc: 'Work on real client projects and build an impressive portfolio' },
                { icon: Users, title: 'Dedicated Career Support', desc: '1-on-1 mentoring, resume building, and interview preparation' }
              ].map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start space-x-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                      <FeatureIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">Our Success Timeline</h4>
                <div className="space-y-4">
                  {[
                    { year: '2014', event: 'Founded RedDot IT Training', color: 'from-blue-500 to-cyan-500' },
                    { year: '2017', event: 'Reached 1000+ successful placements', color: 'from-green-500 to-teal-500' },
                    { year: '2020', event: 'Expanded to 15+ technology domains', color: 'from-purple-500 to-pink-500' },
                    { year: '2024', event: '5000+ students placed successfully', color: 'from-orange-500 to-red-500' }
                  ].map((milestone, index) => (
                    <div key={milestone.year} className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center text-white font-bold text-sm`}>
                        {milestone.year.slice(-2)}
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold">{milestone.event}</div>
                        <div className="text-gray-400 text-sm">{milestone.year}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Companies */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-white mb-8">
            Trusted by <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Top Companies</span>
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className="flex items-center space-x-3 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-2xl">{company.logo}</span>
                <span className="text-gray-300 font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;