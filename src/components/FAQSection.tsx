import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Do I need prior programming knowledge to join this course?',
      answer: 'No. The course is designed to start from absolute basics and gradually progress toward advanced concepts. Even someone with zero technical background can follow comfortably.'
    },
    {
      question: 'Does GenAI require coding?',
      answer: 'While you can use generative AI through no-code platforms and pre-built tools without coding, coding—especially in Python—is essential for building, training, and gaining deeper understanding and control over GenAI models. This course teaches you the coding skills needed to create custom AI applications, fine-tune models, and build production-ready GenAI solutions that go beyond simple tool usage.'
    },
    {
      question: 'Is this course useful for working professionals?',
      answer: 'Yes. The curriculum includes advanced Python, real-world DSA applications, ML concepts, and Generative AI development—skills that greatly enhance professional productivity and career growth.'
    },
    {
      question: 'Does this course include interview preparation?',
      answer: 'Yes. You will receive dedicated sessions on technical and HR interview questions, DSA patterns, resume building, GitHub profile optimization, and mock interviews.'
    },
    {
      question: 'What kind of projects will I be able to build after training?',
      answer: 'You will work on AI chatbots, document analyzers, summarizers, Python automation tools, recommendation systems, and GenAI-powered assistants.'
    },
    {
      question: 'How do I enroll?',
      answer: 'You can reach out via WhatsApp or email provided on the website. Enrollment is open until batch capacity is filled.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about our GenAI Mastery Program
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 overflow-hidden transition-all duration-300 hover:border-purple-500/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none group"
              >
                <span className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pt-0">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

