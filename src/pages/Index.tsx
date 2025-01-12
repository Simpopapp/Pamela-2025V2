import { Header } from "@/components/Header";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import React from "react";

const Index = React.memo(() => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6F8FB] via-[#E5DEFF] to-[#F6F8FB] py-12">
      <div className="max-w-4xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 animate-fade-in relative">
          <div className="transform hover:scale-[1.01] transition-transform duration-300">
            <Header />
            <div className="flex justify-center mt-6">
              <div className="relative w-[2px] h-20">
                <div className="absolute inset-0 bg-gradient-to-b from-highlight/30 to-transparent"></div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-highlight/40 rotate-45"></div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 relative">
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-highlight/20 via-highlight/10 to-transparent"></div>
            
            <div className="transform hover:scale-[1.01] transition-transform duration-300">
              <Education />
              <div className="flex justify-center mt-6">
                <div className="w-6 h-6 bg-gradient-to-br from-highlight/20 to-transparent/10 rotate-45">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-[2px] h-4 bg-highlight/30"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="transform hover:scale-[1.01] transition-transform duration-300">
              <Experience />
              <div className="flex justify-center mt-6">
                <div className="w-6 h-6 bg-gradient-to-br from-highlight/20 to-transparent/10 rotate-45">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-[2px] h-4 bg-highlight/30"></div>
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
  );
});

Index.displayName = 'Index';

export default Index;