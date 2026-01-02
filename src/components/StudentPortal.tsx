import React, { useState } from 'react';
import { LogIn, User, Lock, Eye, EyeOff } from 'lucide-react';

const StudentPortal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a demo page, so we'll just show an alert
    alert('This is a demo portal. Please contact admin for actual login credentials.');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-12 sm:py-20 px-4">
      <div className="max-w-md w-full">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 sm:p-8 border-2 border-red-500/30 shadow-2xl">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex p-3 sm:p-4 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 mb-3 sm:mb-4">
              <LogIn className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                Student Portal
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">Access your course materials and resources</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                <User className="w-4 h-4 inline mr-2" />
                User ID
              </label>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900 border-2 border-red-500/30 rounded-xl text-white text-base focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                placeholder="Enter your User ID"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                <Lock className="w-4 h-4 inline mr-2" />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900 border-2 border-red-500/30 rounded-xl text-white text-base focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 pr-10 sm:pr-12"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors p-1"
                >
                  {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-yellow-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
            >
              <LogIn className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Login</span>
            </button>
          </form>

          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              Forgot your password?{' '}
              <a href="#contact" className="text-red-400 hover:text-red-300 transition-colors">
                Contact Admin
              </a>
            </p>
          </div>

          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-red-500/30">
            <p className="text-gray-500 text-xs text-center">
              This is a demo portal. Actual login functionality requires backend integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;

