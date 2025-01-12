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

const Printable = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [previewOpen, setPreviewOpen] = useState(false);

  const handlePreview = () => {
    setPreviewOpen(true);
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
    <div className="min-h-screen bg-gradient-to-br from-[#F6F8FB] via-[#E5DEFF] to-[#F6F8FB] py-12 px-4 transition-all duration-300">
      <div className="fixed top-6 right-6 z-50 flex gap-3">
        <Button 
          onClick={handleBack}
          variant="outline"
          className="flex items-center gap-2 bg-white hover:bg-gray-50 border-gray-200 shadow-soft hover:shadow-md transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Button>
        <Button 
          onClick={handlePreview}
          className="flex items-center gap-2 bg-[#9b87f5] hover:bg-[#8B5CF6] transition-all duration-300 shadow-soft hover:shadow-lg"
        >
          <Eye className="w-4 h-4" />
          Visualizar PDF
        </Button>
      </div>
      
      <div id="pdf-content" className="max-w-[21cm] mx-auto space-y-8">
        <div className="h-[29.7cm] w-[21cm] mx-auto bg-white shadow-soft hover:shadow-lg transition-all duration-300 print:shadow-none flex flex-col p-[1cm] relative rounded-4xl">
          <Header />
          <div className="flex-grow space-y-8">
            <Education />
            <Experience />
            <Skills />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-100 to-transparent -mb-12 flex items-center justify-center text-sm text-gray-600 print:hidden rounded-b-4xl">
            Fim da página 1
          </div>
        </div>
      </div>

      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="max-w-[90vw] w-[1200px] max-h-[90vh] bg-gradient-to-br from-white to-[#fafafa] p-8 rounded-3xl shadow-xl border border-gray-100">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#2D3250] to-[#7077A1]">
              Prévia do PDF
            </DialogTitle>
            <DialogDescription className="text-lg text-[#7077A1]">
              Verifique como seu PDF ficará antes de fazer o download
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 border rounded-2xl p-8 bg-white shadow-inner relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50/50 to-transparent pointer-events-none" />
            <div className="transform scale-[0.7] origin-top-left">
              <div id="preview-content" className="w-[21cm] mx-auto">
                <div className="h-[29.7cm] bg-white shadow-lg flex flex-col p-[1cm] rounded-2xl">
                  <Header />
                  <div className="flex-grow space-y-8">
                    <Education />
                    <Experience />
                    <Skills />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="mt-8 flex justify-between items-center border-t pt-6">
            <Button
              variant="outline"
              onClick={() => setPreviewOpen(false)}
              className="hover:bg-gray-50 transition-colors duration-300 shadow-soft"
            >
              Cancelar
            </Button>
            <Button
              onClick={generatePDF}
              className="flex items-center gap-2 bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#7C3AED] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <FileDown className="w-4 h-4" />
              Gerar PDF
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Printable;