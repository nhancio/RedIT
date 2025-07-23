import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

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
    { icon: Facebook, href: '#', color: 'from-blue-600 to-blue-500' },
    { icon: Twitter, href: '#', color: 'from-blue-400 to-blue-300' },
    { icon: Instagram, href: '#', color: 'from-pink-600 to-purple-600' },
    { icon: Linkedin, href: '#', color: 'from-blue-700 to-blue-600' },
    { icon: Youtube, href: '#', color: 'from-red-600 to-red-500' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              RedDot IT Training
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transforming careers through cutting-edge technology education and guaranteed placement support. 
              Join thousands of successful professionals who started their journey with us.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 text-green-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@reddotit.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Electronic City, Bangalore</span>
              </div>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Popular Courses</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((course) => (
                <li key={course}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-xl font-semibold text-white mb-2">
                Stay Updated with Latest Courses & Offers
              </h4>
              <p className="text-gray-400">
                Get exclusive updates, course announcements, and career tips delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex space-x-4 mb-6 md:mb-0">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 rounded-xl bg-gradient-to-r ${social.color} text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">
                © 2024 RedDot IT Training & Placements. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Empowering careers through technology education since 2014
              </p>
            </div>
          </div>
        </div>

        {/* Certifications & Partnerships */}
        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="text-center">
            <p className="text-gray-400 mb-4">Certified & Recognized By:</p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
              {['ISO 9001:2015', 'NASSCOM', 'Microsoft Partner', 'Google Cloud', 'AWS Training'].map((cert, index) => (
                <div key={index} className="bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
                  <span className="text-gray-300 text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;