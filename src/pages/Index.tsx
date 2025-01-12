import { Header } from "@/components/Header";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import React from "react";

const Index = React.memo(() => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handlePrintClick = () => {
    navigate('/print');
    toast({
      title: "Redirecionando para versão PDF",
      description: "Você será redirecionado para a versão otimizada para PDF"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-4xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-4">
          <Button 
            onClick={handlePrintClick}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90"
          >
            <FileText className="w-4 h-4" />
            Versão PDF
          </Button>
        </div>
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