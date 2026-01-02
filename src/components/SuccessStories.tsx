import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, MapPin, Building } from 'lucide-react';

const SuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      name: 'Priya Sharma',
      role: 'Senior Data Scientist',
      company: 'Google',
      salary: '₹28L/year',
      image: '👩‍💻',
      course: 'Data Science & AI',
      location: 'Bangalore',
      testimonial: 'RedDot IT transformed my career completely! The hands-on training and placement support helped me land my dream job at Google. The mentors are industry experts who guided me through every step.',
      rating: 5,
      duration: '6 months'
    },
    {
      name: 'Rahul Patel',
      role: 'Full Stack Developer',
      company: 'Microsoft',
      salary: '₹22L/year',
      image: '👨‍💼',
      course: 'Java Full Stack',
      location: 'Hyderabad',
      testimonial: 'The comprehensive curriculum and real-world projects gave me the confidence to crack technical interviews. The placement team worked tirelessly to connect me with top companies.',
      rating: 5,
      duration: '7 months'
    },
    {
      name: 'Anitha Kumar',
      role: 'Cloud Solutions Architect',
      company: 'Amazon',
      salary: '₹32L/year',
      image: '👩‍🔬',
      course: 'AWS Cloud Computing',
      location: 'Chennai',
      testimonial: 'From zero cloud experience to Solutions Architect at Amazon - this journey was possible because of RedDot IT\'s expert guidance and industry-aligned training program.',
      rating: 5,
      duration: '5 months'
    },
    {
      name: 'Vikram Singh',
      role: 'Cybersecurity Analyst',
      company: 'Infosys',
      salary: '₹18L/year',
      image: '👨‍🔒',
      course: 'Cyber Security',
      location: 'Pune',
      testimonial: 'The ethical hacking and security training was exceptional. The practical labs and certification guidance helped me secure a role in cybersecurity within 4 months of completing the course.',
      rating: 5,
      duration: '5 months'
    },
    {
      name: 'Sneha Reddy',
      role: 'AI/ML Engineer',
      company: 'TCS',
      salary: '₹20L/year',
      image: '👩‍🎓',
      course: 'Artificial Intelligence',
      location: 'Mumbai',
      testimonial: 'The AI course content is cutting-edge and the projects are industry-relevant. The placement assistance team helped me prepare for interviews and I got placed with an amazing package.',
      rating: 5,
      duration: '6 months'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % stories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [stories.length]);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentTestimonial = stories[currentStory];

  return (
    <section id="success-stories" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from our alumni who transformed their careers and achieved their dream jobs 
            with our comprehensive training and placement support.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border-2 border-red-500/30 shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
            
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Profile Section */}
                <div className="text-center md:text-left flex-shrink-0">
                  <div className="w-32 h-32 mx-auto md:mx-0 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                    {currentTestimonial.image}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{currentTestimonial.name}</h3>
                  <p className="text-red-400 font-semibold mb-1">{currentTestimonial.role}</p>
                  <p className="text-gray-400 mb-2 flex items-center justify-center md:justify-start space-x-1">
                    <Building className="w-4 h-4" />
                    <span>{currentTestimonial.company}</span>
                  </p>
                  <p className="text-gray-400 mb-2 flex items-center justify-center md:justify-start space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{currentTestimonial.location}</span>
                  </p>
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-lg font-bold text-lg">
                    {currentTestimonial.salary}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1">
                  {/* Quote */}
                  <div className="text-6xl text-red-400 opacity-20 font-serif leading-none">"</div>
                  <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 relative -mt-4">
                    {currentTestimonial.testimonial}
                  </blockquote>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-gray-400 ml-2">({currentTestimonial.rating}/5)</span>
                  </div>

                  {/* Course Info */}
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-red-600/20 text-red-400 px-4 py-2 rounded-lg border border-red-600/30">
                      <span className="font-semibold">Course: </span>{currentTestimonial.course}
                    </div>
                    <div className="bg-yellow-600/20 text-yellow-400 px-4 py-2 rounded-lg border border-yellow-600/30">
                      <span className="font-semibold">Duration: </span>{currentTestimonial.duration}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
            </div>
          </div>

          {/* External Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevStory}
              className="w-14 h-14 bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-red-500/25"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                {currentStory + 1} of {stories.length}
              </p>
            </div>
            
            <button
              onClick={nextStory}
              className="w-14 h-14 bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-red-500/25"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-6">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentStory 
                    ? 'bg-gradient-to-r from-red-500 to-yellow-500 w-8 h-3' 
                    : 'bg-gray-600 hover:bg-gray-500 w-3 h-3'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;