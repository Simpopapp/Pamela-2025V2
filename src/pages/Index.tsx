import { Header } from "@/components/Header";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Button } from "@/components/ui/button";
import { FileText, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import React from "react";
import html2pdf from 'html2pdf.js';

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

  const generateAndSharePDF = async () => {
    toast({
      title: "Preparando compartilhamento",
      description: "Aguarde enquanto geramos o PDF..."
    });

    try {
      // Get the current website URL
      const webUrl = window.location.origin;
      
      // Navigate to print page and wait for it to load
      const printWindow = window.open('/print', '_blank');
      if (!printWindow) {
        throw new Error('Popup blocked');
      }

      // Wait for the print page to load
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Generate PDF
      const element = printWindow.document.getElementById('pdf-content');
      if (!element) {
        throw new Error('PDF content not found');
      }

      const opt = {
        margin: [10, 10],
        filename: 'curriculo.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          letterRendering: true
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait' 
        }
      };

      // Generate PDF and get the base64 data
      const pdf = await html2pdf().set(opt).from(element).outputPdf('datauristring');
      
      // Close the print window
      printWindow.close();

      // Create WhatsApp share message
      const message = `Confira meu currículo online: ${webUrl}\n\nVersão PDF anexada.`;
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

      // Open WhatsApp
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Compartilhamento preparado!",
        description: "O WhatsApp será aberto para você compartilhar"
      });
    } catch (error) {
      console.error('Error sharing PDF:', error);
      toast({
        title: "Erro ao compartilhar",
        description: "Houve um problema ao gerar ou compartilhar o PDF",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-4xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end gap-4 mb-6">
          <Button 
            onClick={generateAndSharePDF}
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