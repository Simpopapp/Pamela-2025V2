import { Header } from "@/components/Header";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto space-y-8 px-4 py-12">
        <div className="flex justify-end">
          <Link to="/print">
            <Button variant="outline" size="sm" className="gap-2">
              <Printer className="w-4 h-4" />
              Versão para impressão
            </Button>
          </Link>
        </div>
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