import React, { useState } from 'react';
import { Brain, Database, Shield, Cloud, Code, Zap, ChevronRight, Clock, Users, Award } from 'lucide-react';

const CoursesSection = () => {
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);

  const courses = [
    {
      id: 1,
      title: 'Artificial Intelligence',
      description: 'Master AI fundamentals, machine learning, and deep learning',
      duration: '6 months',
      students: '500+',
      rating: '4.9',
      icon: Brain,
      gradient: 'from-blue-500 to-cyan-500',
      details: 'Learn neural networks, computer vision, NLP, and build real-world AI applications.'
    },
    {
      id: 2,
      title: 'Generative AI',
      description: 'Explore GPT, DALL-E, and cutting-edge AI models',
      duration: '4 months',
      students: '300+',
      rating: '4.8',
      icon: Zap,
      gradient: 'from-purple-500 to-pink-500',
      details: 'Master prompt engineering, fine-tuning, and building AI-powered applications.'
    },
    {
      id: 3,
      title: 'Data Science',
      description: 'Analytics, visualization, and predictive modeling',
      duration: '8 months',
      students: '800+',
      rating: '4.9',
      icon: Database,
      gradient: 'from-green-500 to-teal-500',
      details: 'Statistical analysis, Python, R, Tableau, and machine learning algorithms.'
    },
    {
      id: 4,
      title: 'Python Full Stack',
      description: 'End-to-end web development with Python',
      duration: '6 months',
      students: '600+',
      rating: '4.7',
      icon: Code,
      gradient: 'from-yellow-500 to-orange-500',
      details: 'Django, Flask, React, APIs, databases, and deployment strategies.'
    },
    {
      id: 5,
      title: 'Java Full Stack',
      description: 'Enterprise Java development and frameworks',
      duration: '7 months',
      students: '700+',
      rating: '4.8',
      icon: Code,
      gradient: 'from-red-500 to-pink-500',
      details: 'Spring Boot, Hibernate, Angular, microservices, and cloud deployment.'
    },
    {
      id: 6,
      title: 'Cyber Security',
      description: 'Ethical hacking and security operations',
      duration: '5 months',
      students: '400+',
      rating: '4.9',
      icon: Shield,
      gradient: 'from-indigo-500 to-purple-500',
      details: 'Penetration testing, incident response, security frameworks, and compliance.'
    },
    {
      id: 7,
      title: 'Cloud Computing (AWS)',
      description: 'Amazon Web Services and cloud architecture',
      duration: '4 months',
      students: '450+',
      rating: '4.8',
      icon: Cloud,
      gradient: 'from-blue-600 to-indigo-600',
      details: 'EC2, S3, Lambda, DevOps, containerization, and cloud security.'
    },
    {
      id: 8,
      title: 'Salesforce',
      description: 'CRM development and administration',
      duration: '3 months',
      students: '350+',
      rating: '4.7',
      icon: Database,
      gradient: 'from-cyan-500 to-blue-500',
      details: 'Apex, Visualforce, Lightning, integrations, and business processes.'
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Premium Courses
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry-aligned curriculum designed by experts to make you job-ready with hands-on projects and real-world experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <div
                key={course.id}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/25"
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${course.gradient} shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Award className="w-4 h-4" />
                      <span className="text-sm font-semibold">{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {course.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1 text-gray-300">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-300">
                        <Users className="w-4 h-4" />
                        <span>{course.students}</span>
                      </div>
                    </div>
                  </div>

                  {/* Expanded content on hover */}
                  <div className={`transition-all duration-500 ${hoveredCourse === course.id ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="border-t border-slate-700 pt-4 mb-4">
                      <p className="text-gray-300 text-sm">{course.details}</p>
                    </div>
                  </div>

                  <button className={`w-full bg-gradient-to-r ${course.gradient} text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group shadow-lg`}>
                    <span>Enroll Now</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;