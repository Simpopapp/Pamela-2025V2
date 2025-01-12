import { Education } from "@/components/printable/Education";
import { Experience } from "@/components/printable/Experience";
import { Skills } from "@/components/printable/Skills";
import { Header } from "@/components/printable/Header";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Download, Printer } from "lucide-react";
import { useState } from "react";
import html2pdf from "html2pdf.js";
import { useToast } from "@/components/ui/use-toast";

const Printable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;
  const { toast } = useToast();

  const generatePDF = async () => {
    const element = document.getElementById('resume-content');
    const opt = {
      margin: 0,
      filename: 'curriculo-pamela-ferreira.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    try {
      toast({
        title: "Gerando PDF...",
        description: "Por favor, aguarde enquanto geramos seu currículo.",
      });
      
      await html2pdf().set(opt).from(element).save();
      
      toast({
        title: "PDF gerado com sucesso!",
        description: "Seu currículo foi baixado.",
      });
    } catch (error) {
      toast({
        title: "Erro ao gerar PDF",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* Navigation and Actions */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium">
            Página {currentPage} de {totalPages}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <Separator orientation="vertical" className="h-8" />

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="gap-2"
            onClick={handlePrint}
          >
            <Printer className="h-4 w-4" />
            Imprimir
          </Button>
          <Button
            className="gap-2"
            onClick={generatePDF}
          >
            <Download className="h-4 w-4" />
            Baixar PDF
          </Button>
        </div>
      </div>

      {/* Resume Content */}
      <div 
        id="resume-content" 
        className="max-w-[21cm] mx-auto space-y-[2cm] transition-all duration-300"
        style={{ 
          transform: `translateX(${(currentPage - 1) * -100}%)`,
          opacity: 1
        }}
      >
        {/* First A4 Page */}
        <div className="h-[29.7cm] w-[21cm] mx-auto bg-white shadow-lg p-[2cm] flex flex-col">
          <Header />
          <Separator className="my-8 bg-[#403E43] h-[0.5px] opacity-50" />
          <div className="flex-grow">
            <Education />
          </div>
        </div>
        
        {/* Second A4 Page */}
        <div className="h-[29.7cm] w-[21cm] mx-auto bg-white shadow-lg p-[2cm] flex flex-col">
          <Experience />
          <Separator className="my-8 bg-[#403E43] h-[0.5px] opacity-50" />
          <div className="flex-grow">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Printable;