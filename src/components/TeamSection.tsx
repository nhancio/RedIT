import React from 'react';
import { Award, Code, Brain, Database, Users, Briefcase } from 'lucide-react';

const TeamSection = () => {
  const trainers = [
    {
      name: 'Rajesh Kumar',
      role: 'Senior GenAI Trainer',
      experience: '15+ Years',
      expertise: 'Python, Machine Learning, LLMs',
      icon: Brain,
      gradient: 'from-red-500 to-orange-500'
    },
    {
      name: 'Priya Sharma',
      role: 'Data Science Expert',
      experience: '14+ Years',
      expertise: 'Data Structures, Algorithms, AI',
      icon: Database,
      gradient: 'from-red-600 to-pink-500'
    },
    {
      name: 'Amit Patel',
      role: 'Full Stack & AI Trainer',
      experience: '13+ Years',
      expertise: 'Python Full Stack, GenAI Applications',
      icon: Code,
      gradient: 'from-red-700 to-yellow-500'
    },
    {
      name: 'Sneha Reddy',
      role: 'ML & GenAI Specialist',
      experience: '12+ Years',
      expertise: 'Machine Learning, Neural Networks',
      icon: Award,
      gradient: 'from-red-500 to-yellow-600'
    },
    {
      name: 'Vikram Singh',
      role: 'Interview Prep & Career Coach',
      experience: '15+ Years',
      expertise: 'Technical Interviews, Placement Guidance',
      icon: Briefcase,
      gradient: 'from-red-600 to-orange-600'
    },
    {
      name: 'Anitha Kumar',
      role: 'Python & DSA Mentor',
      experience: '13+ Years',
      expertise: 'Python Programming, Problem Solving',
      icon: Users,
      gradient: 'from-red-500 to-pink-600'
    }
  ];

  return (
    <section id="team" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff0000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Our Expert Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn from industry veterans with 12+ years of experience in AI, Machine Learning, and Software Development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => {
            const IconComponent = trainer.icon;
            return (
              <div
                key={trainer.name}
                className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border-2 border-red-500/30 hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${trainer.gradient} shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
                    <p className="text-red-400 font-semibold text-sm">{trainer.role}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-yellow-400">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-semibold">{trainer.experience}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {trainer.expertise}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

