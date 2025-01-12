import { Header } from "@/components/Header";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Button } from "@/components/ui/button";
import { FileText, Share2 } from "lucide-react";
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

  const handleShare = () => {
    // Get the current website URL
    const webUrl = window.location.origin;
    
    // Create WhatsApp share message with the website link
    const message = `Confira meu currículo online: ${webUrl}\n\nBaixe também a versão PDF na página.`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Compartilhando currículo",
      description: "O WhatsApp será aberto para você compartilhar o link"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-4xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end gap-4 mb-6">
          <Button 
            onClick={handleShare}
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <Share2 className="w-4 h-4" />
            Compartilhar Currículo
          </Button>
          <Button 
            onClick={handlePrintClick}
            className="flex items-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
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