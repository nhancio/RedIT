import { FileText, MessageSquare, Users, Briefcase, UserCheck, Target } from 'lucide-react';

const ServicesSection = () => {
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
    <section id="services" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
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
                className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl border-2 border-red-500/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mt-4">
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
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;