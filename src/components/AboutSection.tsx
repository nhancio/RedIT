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
              Why Generative AI Matters Today?
            </span>
          </h2>
          <div className={`text-lg text-gray-300 max-w-5xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} space-y-4`}>
            <p>
              Generative AI is no longer optional knowledge; it is a career-defining skill. Tech giants and startups alike 
              are hiring professionals who can programmatically work with Large Language Models (LLMs), automate tasks, 
              analyze data intelligently, and build AI-powered applications. Even traditional roles such as software developers, 
              analysts, testers, and data engineers are now expected to have at least a basic understanding of how AI systems work.
            </p>
            <p>
              Knowing GenAI enables you to produce higher-quality work, solve problems faster, and create solutions that were 
              previously impossible with traditional programming alone. This course prepares you not just to use AI tools but 
              also to understand the underlying concepts that power them, giving you a strong advantage in any technical 
              interview or workplace environment.
            </p>
          </div>
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

        {/* Trainer Introduction */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-3xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Meet Your Trainer</span>
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                The GenAI Mastery Program is led by a seasoned GenAI Trainer and Software Engineer with extensive experience 
                in Python development, Large Language Models (LLMs), and real-world AI application design. Over the years, 
                your trainer has worked with modern AI technologies, delivered corporate training sessions, and mentored 
                students and professionals transitioning into AI-driven roles. With a passion for simplifying complex topics, 
                the trainer ensures every concept is explained in a clear, structured, and practical manner.
              </p>
              <p>
                Unlike conventional theoretical instructors, this program is taught by someone who actively builds AI solutions 
                and understands the challenges faced by freshers and working employees alike. Whether you are beginning your 
                journey in programming or looking to integrate AI into your professional workflow, you will be learning from 
                a mentor who knows exactly what the industry demands and how to prepare you for it.
              </p>
              <p>
                The trainer believes that learning becomes effective when students understand why a concept matters before 
                learning how to use it. This philosophy shapes every module in the course—from foundational Python to advanced 
                GenAI pipelines—ensuring that you gain deep conceptual clarity along with hands-on expertise. Under this 
                mentorship, you will develop the technical confidence and practical problem-solving skills that top employers look for.
              </p>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">Who This Course Helps</h4>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    This course is designed for students beginning their programming journey as well as professionals who want 
                    to stay updated in the fast-changing tech world. Freshers will gain a strong foundation that prepares them 
                    for placement opportunities, while working employees will learn advanced tools and techniques that enhance 
                    their productivity and open new doors in AI-driven job roles.
                  </p>
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