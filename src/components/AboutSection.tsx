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


  return (
    <section id="about" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ff0000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div id="about-section" className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              About RedDot IT Training
            </span>
          </h2>
          <div className={`text-lg text-gray-300 max-w-5xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} space-y-4`}>
            <p>
              RedDot IT Training & Placement Services is a leading technology training institute dedicated to transforming careers 
              through cutting-edge education in Artificial Intelligence, Machine Learning, Generative AI, and Software Development. 
              With over 10 years of excellence, we have successfully placed 5000+ students in top-tier companies with packages 
              ranging from ₹3L to ₹25L per annum.
            </p>
            <p>
              Our mission is to bridge the gap between industry requirements and academic knowledge by providing hands-on, 
              project-based training that prepares students for real-world challenges. We believe in empowering individuals 
              with the skills needed to excel in the rapidly evolving tech landscape, whether they are fresh graduates starting 
              their journey or working professionals looking to upskill.
            </p>
            <p>
              What sets us apart is our comprehensive approach: from foundational programming skills to advanced AI concepts, 
              from technical interview preparation to placement assistance, we provide end-to-end career transformation services. 
              Our expert trainers, with 12+ years of industry experience, ensure that every student receives personalized 
              attention and mentorship throughout their learning journey.
            </p>
            <p>
              At RedDot IT, we don't just teach technology—we build careers. Our proven placement methodology, extensive industry 
              connections, and commitment to student success have made us a trusted partner for thousands of aspiring tech 
              professionals across India.
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
                className={`text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border-2 border-red-500/30 hover:border-red-500 transition-all duration-500 transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-red-500 to-yellow-500 mb-4 shadow-lg">
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
              <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">Why Generative AI Matters Today?</span>
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
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
              <p>
                Our GenAI Mastery Program is led by seasoned trainers with 12+ years of experience in Python development, 
                Large Language Models (LLMs), and real-world AI application design. They have worked with modern AI technologies, 
                delivered corporate training sessions, and mentored thousands of students transitioning into AI-driven roles.
              </p>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border-2 border-red-500/30">
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

      </div>
    </section>
  );
};

export default AboutSection;