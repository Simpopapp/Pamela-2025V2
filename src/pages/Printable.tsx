import { Header } from "@/components/printable/Header";
import { Education } from "@/components/printable/Education";
import { Experience } from "@/components/printable/Experience";
import { Skills } from "@/components/printable/Skills";
import { Button } from "@/components/ui/button";
import { FileDown, Eye } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
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

const Printable = () => {
  const { toast } = useToast();
  const [previewOpen, setPreviewOpen] = useState(false);

  const handlePreview = () => {
    setPreviewOpen(true);
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
    <div className="min-h-screen bg-white">
      <div className="fixed top-4 right-4 z-50">
        <Button 
          onClick={handlePreview}
          className="flex items-center gap-2 bg-primary hover:bg-primary/90"
        >
          <Eye className="w-4 h-4" />
          Visualizar PDF
        </Button>
      </div>
      
      <div id="pdf-content" className="max-w-[21cm] mx-auto space-y-[1cm] p-8 print:p-[1cm]">
        {/* First A4 Page */}
        <div className="h-[29.7cm] w-[21cm] mx-auto bg-white print:shadow-none flex flex-col">
          <Header />
          <div className="flex-grow space-y-8 print:space-y-6">
            <Education />
            <Experience />
          </div>
        </div>
        
        {/* Second A4 Page */}
        <div className="h-[29.7cm] w-[21cm] mx-auto bg-white print:shadow-none flex flex-col print:break-before-page">
          <Skills />
        </div>
      </div>

      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Prévia do PDF</DialogTitle>
            <DialogDescription>
              Verifique como seu PDF ficará antes de fazer o download
            </DialogDescription>
          </DialogHeader>

          <div className="border rounded-lg p-4 bg-white">
            <div className="transform scale-[0.7] origin-top-left">
              <div id="preview-content" className="w-[21cm] mx-auto space-y-[1cm]">
                <div className="h-[29.7cm] bg-white shadow-lg flex flex-col p-[1cm]">
                  <Header />
                  <div className="flex-grow space-y-8">
                    <Education />
                    <Experience />
                  </div>
                </div>
                
                <div className="h-[29.7cm] bg-white shadow-lg flex flex-col p-[1cm]">
                  <Skills />
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="sm:justify-between">
            <Button
              variant="outline"
              onClick={() => setPreviewOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              onClick={generatePDF}
              className="flex items-center gap-2"
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