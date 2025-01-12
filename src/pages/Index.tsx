import { Header } from "@/components/Header";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import React from "react";

const Index = React.memo(() => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#1A1F2C] via-[#2D3250] to-[#1A1F2C]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-[800px] h-[1px] bg-white rotate-45"></div>
        <div className="absolute top-40 right-20 w-[600px] h-[1px] bg-white -rotate-45"></div>
        <div className="absolute bottom-40 left-0 w-[400px] h-[1px] bg-white rotate-12"></div>
        <div className="absolute top-1/2 right-0 w-[300px] h-[1px] bg-white -rotate-12"></div>
      </div>

      <div className="relative py-6">
        <div className="max-w-4xl mx-auto space-y-3 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 animate-fade-in relative">
            {/* Vertical line decoration */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-highlight/30 via-highlight/10 to-transparent"></div>
            
            <div className="transform hover:scale-[1.01] transition-transform duration-300">
              <Header />
              <div className="flex justify-center mt-2">
                <div className="relative w-[1px] h-8">
                  <div className="absolute inset-0 bg-gradient-to-b from-highlight/30 to-transparent"></div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-highlight/40"></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 relative">
              <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-highlight/20 via-highlight/10 to-transparent"></div>
              
              <div className="transform hover:scale-[1.01] transition-transform duration-300">
                <Education />
                <div className="flex justify-center mt-2">
                  <div className="w-4 h-4 bg-gradient-to-br from-highlight/20 to-transparent/10">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-[1px] h-3 bg-highlight/30"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="transform hover:scale-[1.01] transition-transform duration-300">
                <Experience />
                <div className="flex justify-center mt-2">
                  <div className="w-4 h-4 bg-gradient-to-br from-highlight/20 to-transparent/10">
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