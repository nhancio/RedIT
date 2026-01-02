import React, { useState, useEffect } from 'react';
import { Send, X } from 'lucide-react';
import { emailService } from '../services/emailService';

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName?: string;
}

const EnrollModal: React.FC<EnrollModalProps> = ({ isOpen, onClose, courseName }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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
      const emailResult = await emailService.sendEnrollmentForm({
        name,
        email,
        phone: phoneNumber,
        message,
        course: courseName || 'Not specified'
      });

      if (emailResult.success) {
        setSubmitMessage(emailResult.message);
        setTimeout(() => {
          onClose();
          // Reset form
          setName('');
          setEmail('');
          setPhoneNumber('');
          setMessage('');
          setSubmitMessage('');
        }, 2000);
      } else {
        setSubmitMessage(emailResult.message);
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-red-500/30 w-full max-w-lg max-h-[90vh] overflow-y-auto relative animate-fade-in">
        <button onClick={onClose} className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white z-10">
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center pr-8">Enroll Now</h3>
        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
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
              onChange={e => setEmail(e.target.value)}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900 border-2 border-red-500/30 rounded-xl text-white text-base focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900 border-2 border-red-500/30 rounded-xl text-white text-base focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={4}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900 border-2 border-red-500/30 rounded-xl text-white text-base focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 resize-none"
              placeholder="Tell us about your career goals..."
              required
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
            <span>{isSubmitting ? 'Submitting...' : 'Submit Enrollment'}</span>
            <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollModal; 