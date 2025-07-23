import React, { useState } from 'react';
import { Send, CheckCircle, X } from 'lucide-react';
import { otpService } from '../services/otpService';

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName?: string;
}

const whatsappNumber = '7095288950';

const EnrollModal: React.FC<EnrollModalProps> = ({ isOpen, onClose, courseName }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
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
      otpService.initializeRecaptcha('recaptcha-container-enroll');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) {
      setOtpMessage('Please verify your phone number first.');
      return;
    }
    // Compose WhatsApp message
    const msg = `New Enrollment Request:%0AName: ${name}%0AEmail: ${email}%0APhone: ${phoneNumber}%0ACourse: ${courseName || ''}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${msg}`;
    window.open(whatsappUrl, '_blank');
    onClose();
    // Optionally, reset form here
    setName('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');
    setIsOtpSent(false);
    setOtp('');
    setIsVerified(false);
    setOtpMessage('');
    otpService.reset();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 w-full max-w-lg relative animate-fade-in">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <X className="w-6 h-6" />
        </button>
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Enroll Now</h3>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 transform focus:scale-105"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number</label>
            <div className="flex space-x-2">
              <input
                type="tel"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                placeholder="Enter 10-digit mobile number"
                maxLength={10}
                disabled={isVerified}
                required
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
          {isOtpSent && !isVerified && (
            <div className="animate-fade-in">
              <label className="block text-gray-300 text-sm font-medium mb-2">Enter OTP</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={otp}
                  onChange={e => setOtp(e.target.value)}
                  className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 animate-bounce"
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  required
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
              onChange={e => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
              placeholder="Tell us about your career goals..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group"
          >
            <span>Send to WhatsApp</span>
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
        {/* Hidden reCAPTCHA container */}
        <div id="recaptcha-container-enroll"></div>
      </div>
    </div>
  );
};

export default EnrollModal; 