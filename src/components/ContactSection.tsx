import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { otpService } from '../services/otpService';

const ContactSection = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [otpMessage, setOtpMessage] = useState('');

  const handleSendOtp = async () => {
    if (phoneNumber.length !== 10) {
      setOtpMessage('Please enter a valid 10-digit phone number');
      return;
    }

    setIsLoading(true);
    setOtpMessage('');

    try {
      // Initialize reCAPTCHA
      otpService.initializeRecaptcha('recaptcha-container');
      
      const result = await otpService.sendOTP(phoneNumber);
      
      if (result.success) {
        setIsOtpSent(true);
        setOtpMessage('OTP sent successfully to your phone!');
      } else {
        setOtpMessage(result.message);
      }
    } catch (error) {
      setOtpMessage('Failed to send OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      setOtpMessage('Please enter a valid 6-digit OTP');
      return;
    }

    setIsLoading(true);
    setOtpMessage('');

    try {
      const result = await otpService.verifyOTP(otp);
      
      if (result.success) {
        setIsVerified(true);
        setOtpMessage('Phone number verified successfully!');
      } else {
        setOtpMessage(result.message);
      }
    } catch (error) {
      setOtpMessage('Failed to verify OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 87654 32109'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@reddotit.com', 'placements@reddotit.com'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Tech Park, Electronic City', 'Bangalore, Karnataka 560100'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your career? Contact us today for a free consultation and personalized career guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 transform focus:scale-105"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Phone Number with OTP */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number</label>
                  <div className="flex space-x-2">
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                      placeholder="Enter 10-digit mobile number"
                      maxLength={10}
                      disabled={isVerified}
                    />
                    {!isVerified && (
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        disabled={phoneNumber.length !== 10 || isLoading}
                        className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? 'Sending...' : isOtpSent ? 'Sent' : 'Send OTP'}
                      </button>
                    )}
                    {isVerified && (
                      <div className="flex items-center px-4 py-3 bg-green-600/20 border border-green-600/30 rounded-xl text-green-400">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span>Verified</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* OTP Input */}
                {isOtpSent && !isVerified && (
                  <div className="animate-fade-in">
                    <label className="block text-gray-300 text-sm font-medium mb-2">Enter OTP</label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 animate-bounce"
                        placeholder="Enter 6-digit OTP"
                        maxLength={6}
                      />
                      <button
                        type="button"
                        onClick={handleVerifyOtp}
                        disabled={otp.length !== 6 || isLoading}
                        className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                      >
                        {isLoading ? 'Verifying...' : 'Verify'}
                      </button>
                    </div>
                    {otpMessage && (
                      <p className={`text-sm mt-2 ${otpMessage.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                        {otpMessage}
                      </p>
                    )}
                  </div>
                )}

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your career goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
            
            {/* Hidden reCAPTCHA container */}
            <div id="recaptcha-container"></div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={info.title}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${info.color} shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-400 mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Google Map Placeholder */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Find Us</h3>
              <div className="aspect-w-16 aspect-h-9 bg-slate-700 rounded-xl overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center text-gray-400 rounded-xl">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-2 text-purple-400" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Electronic City, Bangalore</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                Why Students Choose Us
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-1">24/7</div>
                  <div className="text-gray-400 text-sm">Support Available</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">100%</div>
                  <div className="text-gray-400 text-sm">Placement Guarantee</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400 mb-1">5000+</div>
                  <div className="text-gray-400 text-sm">Success Stories</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-400 mb-1">10+</div>
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