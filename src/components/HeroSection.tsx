import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Target, Users } from 'lucide-react';

const HeroSection = () => {

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="flex justify-center items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in text-center max-w-4xl">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Future-Ready
                </span>
                <br />
                <span className="text-white">Tech Training</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                Transform your career with our cutting-edge courses in AI, Data Science, Cloud Computing, and more. 
                Join thousands of successful professionals who started their journey with us.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 text-green-400">
                <Users className="w-5 h-5" />
                <span className="font-semibold">5000+ Placed Students</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <Target className="w-5 h-5" />
                <span className="font-semibold">95% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">Industry Experts</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 group">
                <span>Explore Courses</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105">
                Watch Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;