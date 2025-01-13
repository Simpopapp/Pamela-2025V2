import { Header } from "@/components/Header";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import React from "react";

const Index = React.memo(() => {
  return (
    <div className="min-h-screen relative">
      {/* Mobile-optimized background for the top section */}
      <div className="absolute top-0 left-0 right-0 h-[600px] sm:h-[500px] bg-gradient-to-br from-[#1A1F2C] via-[#2D3250] to-[#1A1F2C]">
        {/* Background decorative elements optimized for mobile */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-0 w-full sm:w-[400px] h-[1px] bg-white rotate-45 transform-gpu"></div>
          <div className="absolute top-20 right-0 w-full sm:w-[300px] h-[1px] bg-white -rotate-45 transform-gpu"></div>
        </div>
      </div>

      {/* Current background with lines for the rest of the page */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C] via-[#2D3250] to-[#1A1F2C] z-[-1]">
        {/* Mobile-optimized background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-0 w-full sm:w-[800px] h-[1px] bg-white rotate-45 transform-gpu"></div>
          <div className="absolute top-40 right-0 w-full sm:w-[600px] h-[1px] bg-white -rotate-45 transform-gpu"></div>
          <div className="absolute bottom-40 left-0 w-full sm:w-[400px] h-[1px] bg-white rotate-12 transform-gpu"></div>
          <div className="absolute top-1/2 right-0 w-full sm:w-[300px] h-[1px] bg-white -rotate-12 transform-gpu"></div>
        </div>
      </div>

      <div className="relative py-4 sm:py-6">
        <div className="max-w-4xl mx-auto space-y-3 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 animate-fade-in relative">
            {/* Mobile-optimized vertical line decoration */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-highlight/30 via-highlight/10 to-transparent hidden sm:block"></div>
            
            <div className="transform hover:scale-[1.01] transition-transform duration-300">
              <Header />
              <div className="flex justify-center mt-2">
                <div className="relative w-[1px] h-8 hidden sm:block">
                  <div className="absolute inset-0 bg-gradient-to-b from-highlight/30 to-transparent"></div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-highlight/40"></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 relative">
              <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-highlight/20 via-highlight/10 to-transparent hidden sm:block"></div>
              
              <div className="transform hover:scale-[1.01] transition-transform duration-300">
                <Education />
                <div className="flex justify-center mt-2">
                  <div className="w-4 h-4 bg-gradient-to-br from-highlight/20 to-transparent/10 hidden sm:block">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-[1px] h-3 bg-highlight/30"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="transform hover:scale-[1.01] transition-transform duration-300">
                <Experience />
                <div className="flex justify-center mt-2">
                  <div className="w-4 h-4 bg-gradient-to-br from-highlight/20 to-transparent/10 hidden sm:block">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-[1px] h-3 bg-highlight/30"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="transform hover:scale-[1.01] transition-transform duration-300">
                <Skills />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Index.displayName = 'Index';

export default Index;