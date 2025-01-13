import { Header } from "@/components/printable/Header";
import { Education } from "@/components/printable/Education";
import { Experience } from "@/components/printable/Experience";
import { Skills } from "@/components/printable/Skills";
import { Button } from "@/components/ui/button";
import { FileDown, Eye, ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import html2pdf from 'html2pdf.js';
import React, { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Printable = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [previewOpen, setPreviewOpen] = useState(false);
  const isMobile = useIsMobile();

  const handlePreview = () => {
    if (isMobile) {
      generatePDF();
    } else {
      setPreviewOpen(true);
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  const generatePDF = async () => {
    const element = document.getElementById('pdf-content');
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

    toast({
      title: "Gerando PDF",
      description: "Aguarde enquanto seu PDF é gerado..."
    });

    try {
      await html2pdf().set(opt).from(element).save();
      setPreviewOpen(false);
      toast({
        title: "PDF Gerado",
        description: "Seu PDF foi gerado com sucesso!"
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Houve um erro ao gerar o PDF. Tente novamente.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6F8FB] via-[#E5DEFF] to-[#F6F8FB] py-6 md:py-12 px-3 md:px-4 transition-all duration-300">
      <div className="fixed top-4 md:top-6 right-4 md:right-6 left-4 md:left-auto z-50 flex gap-2 md:gap-3">
        <Button 
          onClick={handleBack}
          variant="outline"
          className="flex-1 md:flex-none items-center gap-2 bg-white hover:bg-gray-50 border-gray-200 shadow-soft hover:shadow-md transition-all duration-300 text-sm md:text-base"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Button>
        <Button 
          onClick={handlePreview}
          className="flex-1 md:flex-none items-center gap-2 bg-[#9b87f5] hover:bg-[#8B5CF6] transition-all duration-300 shadow-soft hover:shadow-lg text-sm md:text-base"
        >
          {isMobile ? (
            <>
              <FileDown className="w-4 h-4" />
              Baixar PDF
            </>
          ) : (
            <>
              <Eye className="w-4 h-4" />
              Visualizar PDF
            </>
          )}
        </Button>
      </div>
      
      <div id="pdf-content" className="max-w-[21cm] mx-auto space-y-6 md:space-y-8 mt-16 md:mt-0">
        <div className="min-h-[29.7cm] w-full md:w-[21cm] mx-auto bg-white shadow-soft hover:shadow-lg transition-all duration-300 print:shadow-none flex flex-col p-4 md:p-[1cm] relative rounded-2xl md:rounded-4xl">
          <Header />
          <div className="flex-grow space-y-6 md:space-y-8">
            <Education />
            <Experience />
            <Skills />
          </div>
        </div>
      </div>

      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="max-w-[95vw] md:max-w-[90vw] max-h-[90vh] overflow-y-auto bg-white p-4 md:p-8 rounded-2xl md:rounded-4xl shadow-soft">
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl font-semibold text-[#2D3250]">Prévia do PDF</DialogTitle>
            <DialogDescription className="text-sm md:text-base text-[#7077A1]">
              Verifique como seu PDF ficará antes de fazer o download
            </DialogDescription>
          </DialogHeader>

          <div className="border rounded-2xl md:rounded-4xl p-4 md:p-8 bg-white shadow-inner">
            <div className="transform scale-[0.6] md:scale-[0.7] origin-top-left">
              <div id="preview-content" className="w-full md:w-[21cm] mx-auto">
                <div className="min-h-[29.7cm] bg-white shadow-soft flex flex-col p-[1cm] rounded-2xl md:rounded-3xl">
                  <Header />
                  <div className="flex-grow space-y-6 md:space-y-8">
                    <Education />
                    <Experience />
                    <Skills />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="flex flex-col md:flex-row md:justify-between gap-3 mt-6 md:mt-8">
            <Button
              variant="outline"
              onClick={() => setPreviewOpen(false)}
              className="w-full md:w-auto hover:bg-gray-50 transition-colors duration-300 shadow-soft"
            >
              Cancelar
            </Button>
            <Button
              onClick={generatePDF}
              className="w-full md:w-auto flex items-center gap-2 bg-[#9b87f5] hover:bg-[#8B5CF6] transition-all duration-300 shadow-soft hover:shadow-lg"
            >
              <FileDown className="w-4 h-4" />
              Baixar PDF
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Printable;