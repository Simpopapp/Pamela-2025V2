import { Header } from "@/components/Header";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for demo purposes
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto space-y-8 px-4 py-12 animate-fade-in">
        <Header />
        <main className="grid gap-8 md:grid-cols-[2fr,1fr]">
          <div className="space-y-8">
            <Experience />
            <Education />
          </div>
          <aside>
            <Skills />
          </aside>
        </main>
      </div>
    </div>
  );
};

export default Index;