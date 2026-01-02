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
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black neural-network-bg">
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
        <div className="flex gap-6 sm:gap-8 py-16 sm:py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-3 sm:gap-4 flex-col text-center max-w-5xl px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl max-w-5xl tracking-tight font-bold leading-tight">
              <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-red-600 bg-clip-text text-transparent block">
                GenAI
              </span>
              <span className="text-white block mt-1 sm:mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-6xl">Generative</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center pb-2 sm:pb-4 pt-1 h-12 sm:h-16 md:h-20">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-red-600 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-6xl"
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

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-tight text-gray-300 max-w-4xl mt-4 sm:mt-6 px-2">
              Welcome to the Future of AI Learning: Master Python, Data Structures, Algorithms & Generative AI
            </p>
            
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-400 max-w-4xl mt-3 sm:mt-4 px-2">
              The technology landscape is evolving at a pace we have never seen before, and Generative AI has become 
              one of the most transformative forces shaping modern industries. From intelligent chatbots to automated 
              code assistants and AI-driven business tools, GenAI is influencing how companies operate and how employees perform.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center mt-6 sm:mt-8 px-4">
            <div className="flex items-center space-x-2 text-yellow-400 text-sm sm:text-base">
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold">5000+ Placed</span>
            </div>
            <div className="flex items-center space-x-2 text-red-400 text-sm sm:text-base">
              <Target className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold">95% Success</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-500 text-sm sm:text-base">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold">Industry Experts</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center mt-6 sm:mt-8 w-full max-w-md sm:max-w-none px-4">
            <Button 
              size="lg" 
              className="gap-2 sm:gap-4 bg-gradient-to-r from-red-600 to-yellow-600 text-white hover:from-red-700 hover:to-yellow-700 border-0 w-full sm:w-auto text-sm sm:text-base py-3 sm:py-4"
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
              className="gap-2 sm:gap-4 border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white w-full sm:w-auto text-sm sm:text-base py-3 sm:py-4"
              onClick={() => {
                const storiesSection = document.getElementById('success-stories');
                storiesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
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

