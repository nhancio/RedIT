import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    courses: [
      'Artificial Intelligence',
      'Data Science',
      'Python Full Stack',
      'Java Full Stack',
      'Cyber Security',
      'Cloud Computing'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Contact',
      'Privacy Policy',
      'Terms of Service'
    ],
    support: [
      'Help Center',
      'Student Portal',
      'Course Materials',
      'Technical Support',
      'Placement Support',
      'Alumni Network'
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/thereddotcareers', color: 'from-red-600 to-yellow-600' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/thereddotcareers/', color: 'from-red-700 to-yellow-500' }
  ];

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent mb-3 sm:mb-4">
              RedDot IT Training
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Transforming careers through cutting-edge technology education and guaranteed placement support. 
              Join thousands of successful professionals who started their journey with us.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-400 text-sm sm:text-base">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a href="tel:+917095288950" className="hover:text-red-400 transition-colors break-all">+91 70952 88950</a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-400 text-sm sm:text-base">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@reddotit.com" className="hover:text-red-400 transition-colors break-all">info@reddotit.com</a>
              </div>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Popular Courses</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.courses.map((course) => (
                <li key={course}>
                  <a
                    href="https://reddot.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 hover:translate-x-1 transform inline-block text-sm sm:text-base"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href={link === 'Contact' ? '#contact' : link === 'Our Team' ? '#team' : link === 'About Us' ? '#about' : '#'}
                    onClick={(e) => {
                      if (link === 'Contact') {
                        e.preventDefault();
                        const contactSection = document.getElementById('contact');
                        contactSection?.scrollIntoView({ behavior: 'smooth' });
                      } else if (link === 'Our Team') {
                        e.preventDefault();
                        const teamSection = document.getElementById('team');
                        teamSection?.scrollIntoView({ behavior: 'smooth' });
                      } else if (link === 'About Us') {
                        e.preventDefault();
                        const aboutSection = document.getElementById('about');
                        aboutSection?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 hover:translate-x-1 transform inline-block text-sm sm:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Support</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a
                    href={link === 'Student Portal' ? '#student-portal' : '#'}
                    onClick={(e) => {
                      if (link === 'Student Portal') {
                        e.preventDefault();
                        window.location.hash = '#student-portal';
                        window.location.reload();
                      }
                    }}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 hover:translate-x-1 transform inline-block text-sm sm:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-red-500/20 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 sm:p-3 rounded-xl bg-gradient-to-r ${social.color} text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95`}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                );
              })}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-1 sm:mb-2 text-sm sm:text-base">
                © 2024 RedDot IT Training & Placements. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                Empowering careers through technology education since 2014
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;