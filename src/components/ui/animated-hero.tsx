import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, Users, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Python", "DSA", "Machine Learning", "GenAI", "LLMs"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden w-full">
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

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col text-center max-w-5xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl max-w-5xl tracking-tight font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                GenAI
              </span>
              <span className="text-white block mt-2">Generative</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed tracking-tight text-gray-300 max-w-4xl mt-6">
              Welcome to the Future of AI Learning: Master Python, Data Structures, Algorithms & Generative AI
            </p>
            
            <p className="text-base md:text-lg leading-relaxed text-gray-400 max-w-4xl mt-4">
              The technology landscape is evolving at a pace we have never seen before, and Generative AI has become 
              one of the most transformative forces shaping modern industries. From intelligent chatbots to automated 
              code assistants and AI-driven business tools, GenAI is influencing how companies operate and how employees perform.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 justify-center mt-8">
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

          {/* CTA Buttons */}
          <div className="flex flex-row gap-3 flex-wrap justify-center mt-8">
            <Button 
              size="lg" 
              className="gap-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 border-0"
              onClick={() => {
                const coursesSection = document.getElementById('courses');
                coursesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Courses <MoveRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
            >
              Watch Success Stories <PhoneCall className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };

