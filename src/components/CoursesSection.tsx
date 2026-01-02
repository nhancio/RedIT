import { useState } from 'react';
import { Brain, Database, Code, Zap, ChevronRight, Clock, Users, Award, Target } from 'lucide-react';
import EnrollModal from './EnrollModal';

const CoursesSection = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>(undefined);

  const courses = [
    {
      id: 1,
      title: 'Python Programming (Beginner to Advanced)',
      description: 'Python is the foundation of modern software development and the primary language behind AI, data analytics, automation, and web applications.',
      duration: '8-10 weeks',
      students: '1000+',
      rating: '4.9',
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500',
      details: 'In this module, you will start by understanding how programming works from the absolute basics — what variables are, how data flows in a program, and how a computer processes instructions. As you progress, you will learn how to write clean, readable, and efficient Python code by exploring functions, conditional statements, loops, and error-handling techniques. The course gradually strengthens your programming logic through real examples and hands-on exercises. You will explore essential in-built data structures such as lists, sets, dictionaries, and tuples to understand how Python manages and stores data internally. As you move to more advanced concepts, you will work with object-oriented programming (OOP), classes, objects, modules, APIs, and file handling. By the end of this module, you will not only be able to write robust Python scripts but also develop mini-projects that automate repetitive tasks and solve real problems — giving you the confidence needed for interviews and real job responsibilities.'
    },
    {
      id: 2,
      title: 'Data Structures & Algorithms (DSA)',
      description: 'Data Structures and Algorithms form the backbone of technical interviews and problem-solving in software development.',
      duration: '8-10 weeks',
      students: '900+',
      rating: '4.9',
      icon: Database,
      gradient: 'from-green-500 to-teal-500',
      details: 'This module explains DSA in simple, intuitive language so that even a beginner can follow along while still providing enough depth to satisfy professionals preparing for competitive interviews. You will begin with fundamental concepts like arrays and strings, understanding how computers store information and how efficient operations like searching and sorting can be performed. As you build confidence, you will explore more advanced structures such as linked lists, stacks, queues, hash maps, trees, and graphs. The course focuses heavily on explaining why each data structure exists, when to use it, and how it impacts performance — not just teaching code, but teaching logic. You will gradually transition into essential algorithms including recursion, backtracking, greedy algorithms, and dynamic programming. These concepts are presented through real-world examples to ensure you can visualize how solutions are constructed step-by-step. This helps you solve interview questions confidently and approach complex problems with a systematic mindset.'
    },
    {
      id: 3,
      title: 'Machine Learning Essentials',
      description: 'Before entering the world of Generative AI, it is important to understand how traditional Machine Learning systems work.',
      duration: '6-8 weeks',
      students: '700+',
      rating: '4.8',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      details: 'This module introduces the core ideas behind ML without overwhelming mathematical formulas. You will learn what data means in a digital environment, how machines "train" themselves using patterns, and how models are evaluated for accuracy. Concepts like supervised and unsupervised learning, feature engineering, and model training are explained with simple analogies and practical examples. You will explore how ML is used in everyday applications such as spam detection, recommendation systems, medical predictions, and financial risk analysis. Through hands-on practice, you will build small machine learning models and experiment with them in Python. This forms a strong foundation for understanding more advanced systems like Large Language Models and GenAI-based applications.'
    },
    {
      id: 4,
      title: 'Generative AI & Large Language Models',
      description: 'This is the heart of the course. Generative AI is the technology that powers tools like ChatGPT, Gemini, and Copilot.',
      duration: '8-10 weeks',
      students: '800+',
      rating: '4.9',
      icon: Zap,
      gradient: 'from-yellow-500 to-orange-500',
      details: 'In this module, you will understand how LLMs process information, how tokenization works, and how these models generate text, images, and even code. The content is explained in simple terms so beginners can follow, yet it dives deep into workflow design and application building, which is crucial for working professionals. You will learn effective prompt engineering techniques, ways to control model behavior, and how to design prompts that generate accurate and reliable outputs. The course also covers RAG (Retrieval Augmented Generation), an advanced technique used by enterprises to build powerful AI chatbots customized for their data. You will learn how to integrate Python applications with GenAI APIs and build real-time AI projects such as AI assistants, document summarizers, recommendation systems, code generators, and intelligent chatbots. By the end of this module, you will be capable of building and deploying your own GenAI applications — a skill that significantly increases your employability.'
    },
    {
      id: 5,
      title: 'Interview Preparation & Career Guidance',
      description: 'Technical knowledge alone is not enough to land your dream job; you also need confidence and clarity during interviews.',
      duration: '4-6 weeks',
      students: '1000+',
      rating: '4.9',
      icon: Target,
      gradient: 'from-indigo-500 to-purple-500',
      details: 'This module prepares you with the essential interview questions asked by companies for Python, DSA, Machine Learning, and Generative AI roles. You will learn how to structure answers, how to approach problem-solving questions, and how to explain your thought process clearly to interviewers. Additionally, you will receive guidance on resume building, GitHub portfolio creation, LinkedIn optimization, and project presentation techniques. The course includes mock interviews to help you practice in a real interview environment so that when the opportunity arrives, you feel prepared and confident.'
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Course Modules
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A complete learning path covering Python, Data Structures & Algorithms, Machine Learning, and Generative AI 
            with full paragraph explanations for each module.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <div
                key={course.id}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl border-2 border-red-500/30 hover:border-red-500 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${course.gradient} shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Award className="w-4 h-4" />
                      <span className="text-sm font-semibold">{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-yellow-500 group-hover:bg-clip-text transition-all duration-300">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {course.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1 text-gray-300">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-300">
                        <Users className="w-4 h-4" />
                        <span>{course.students}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    className={`w-full bg-gradient-to-r ${course.gradient} text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group shadow-lg`}
                    onClick={() => {
                      setSelectedCourse(course.title);
                      setIsEnrollOpen(true);
                    }}
                  >
                    <span>Enroll Now</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Basic Overview Section */}
        <div className="mt-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border-2 border-red-500/30">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
              <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                Basic Overview: Introduction to Generative AI
              </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-gray-300">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">What is Generative AI?</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Key Applications</span>
                </li>
                <li className="flex items-start ml-4">
                  <span className="text-blue-400 mr-2">-</span>
                  <span>Text (Chatbots, Content Generation)</span>
                </li>
                <li className="flex items-start ml-4">
                  <span className="text-blue-400 mr-2">-</span>
                  <span>Image (DALL·E, MidJourney)</span>
                </li>
                <li className="flex items-start ml-4">
                  <span className="text-blue-400 mr-2">-</span>
                  <span>Audio (Music Generation, Voice Synthesis)</span>
                </li>
                <li className="flex items-start ml-4">
                  <span className="text-blue-400 mr-2">-</span>
                  <span>Code (Cursor, Copilot)</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Evolution of GenAI</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>From Rule-Based Systems to Deep Learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Comparison of Generative Models (GANs, VAEs, LLMs)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Challenges in GenAI (Bias, Hallucinations, Ethical Considerations)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        courseName={selectedCourse}
      />
    </section>
  );
};

export default CoursesSection;