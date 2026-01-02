import React, { useState, useEffect } from 'react';
import { Phone, Mail, Send } from 'lucide-react';
import { emailService } from '../services/emailService';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailService.init();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phoneNumber || !message) {
      setSubmitMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const result = await emailService.sendContactForm({
        name,
        email,
        phone: phoneNumber,
        message
      });

      if (result.success) {
        setSubmitMessage(result.message);
        // Reset form
        setName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
      } else {
        setSubmitMessage(result.message);
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 70952 88950'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@reddotit.com', 'placements@reddotit.com'],
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Ready to transform your career? Contact us today for a free consultation and personalized career guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-red-500/30">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send Us a Message</h3>
              
              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900 border-2 border-red-500/30 rounded-xl text-white text-base focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900 border-2 border-red-500/30 rounded-xl text-white text-base focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900 border-2 border-red-500/30 rounded-xl text-white text-base focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900 border-2 border-red-500/30 rounded-xl text-white text-base focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your career goals..."
                  ></textarea>
                </div>

                {submitMessage && (
                  <p className={`text-sm ${submitMessage.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                    {submitMessage}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-yellow-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              const isCallUs = info.title === 'Call Us';
              const isEmailUs = info.title === 'Email Us';
              
              return (
                <div
                  key={info.title}
                  className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 sm:p-6 border-2 border-red-500/30"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                    <div className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${info.color} shadow-lg flex-shrink-0`}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-400 mb-1 text-sm sm:text-base break-words">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                  {(isCallUs || isEmailUs) && (
                    <a
                      href={isCallUs ? 'tel:+917095288950' : `mailto:${info.details[0]}`}
                      className={`w-full bg-gradient-to-r ${isCallUs ? 'from-green-600 to-teal-600' : 'from-blue-600 to-cyan-600'} text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2`}
                    >
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>{isCallUs ? 'Call Now' : 'Send Email'}</span>
                    </a>
                  )}
                </div>
              );
            })}

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-gray-900/50 to-black/50 rounded-2xl p-4 sm:p-6 border-2 border-red-500/30">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center">
                Why Students Choose Us
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-400 mb-1">24/7</div>
                  <div className="text-gray-400 text-sm">Support Available</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400 mb-1">100%</div>
                  <div className="text-gray-400 text-sm">Placement Guarantee</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-500 mb-1">5000+</div>
                  <div className="text-gray-400 text-sm">Success Stories</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-500 mb-1">10+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;