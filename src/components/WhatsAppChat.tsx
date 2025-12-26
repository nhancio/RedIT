import React, { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';
import EnrollModal from './EnrollModal';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const whatsappNumber = '7095288950'; // Updated to your actual WhatsApp number
  
  const predefinedMessages = [
    {
      id: 1,
      text: "I want to know about course details",
      message: "Hi! I'm interested in learning more about your courses. Can you provide me with detailed information about the programs you offer?"
    },
    {
      id: 2,
      text: "Placement assistance inquiry",
      message: "Hello! I would like to know more about your placement assistance program and success rates."
    },
    {
      id: 3,
      text: "Course fees and duration",
      message: "Hi! Could you please share information about course fees, duration, and payment options?"
    },
    {
      id: 4,
      text: "Schedule a demo class",
      message: "Hello! I'm interested in scheduling a free demo class. When would be a good time?"
    }
  ];

  const sendWhatsAppMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const sendCustomMessage = () => {
    const customMessage = "Hi! I have a question about RedDot IT Training courses.";
    sendWhatsAppMessage(customMessage);
  };

  return (
    <>
      {/* WhatsApp Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat Options Panel */}
        {isOpen && (
          <div className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 animate-fade-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">RedDot IT Support</h3>
                    <p className="text-sm opacity-90">Typically replies instantly</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Options */}
            <div className="p-4 space-y-3">
              <p className="text-gray-600 text-sm mb-4">
                Hi there! 👋 How can we help you today?
              </p>
              
              {predefinedMessages.map((msg) => (
                <button
                  key={msg.id}
                  onClick={() => sendWhatsAppMessage(msg.message)}
                  className="w-full text-left p-3 rounded-xl bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-200 transition-all duration-300 text-sm text-gray-700 hover:text-green-700"
                >
                  {msg.text}
                </button>
              ))}

              {/* Custom Message Button */}
              <button
                onClick={sendCustomMessage}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start Chat</span>
              </button>

              {/* New: Enroll Form Button */}
              <button
                onClick={() => setIsEnrollOpen(true)}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white p-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Send Details to WhatsApp</span>
              </button>

              {/* Call Option */}
              <button
                onClick={() => window.open(`tel:${whatsappNumber}`, '_self')}
                className="w-full border-2 border-green-500 text-green-600 p-3 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </button>
            </div>

            {/* Footer */}
            <div className="px-4 pb-4">
              <p className="text-xs text-gray-500 text-center">
                We're here to help! Available 24/7
              </p>
            </div>
          </div>
        )}

        {/* Floating WhatsApp Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center group relative"
        >
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <>
              <MessageCircle className="w-7 h-7" />
              {/* Notification Dot */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
              {/* Ripple Effect */}
              <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
            </>
          )}
        </button>

        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Chat with us on WhatsApp
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        )}
      </div>
      {/* EnrollModal for WhatsApp details */}
      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
      />
    </>
  );
};

export default WhatsAppChat;