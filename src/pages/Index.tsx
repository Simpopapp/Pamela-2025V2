import { Header } from "@/components/Header";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import React from "react";

const Index = React.memo(() => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-4xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="grid gap-8 animate-fade-in">
          <Education />
          <Experience />
          <Skills />
        </div>
      </div>
    </div>
  );
});

Index.displayName = 'Index';

export default Index;