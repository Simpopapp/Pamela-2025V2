import { Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Header = () => {
  return (
    <header className="text-primary print:text-black mb-6">
      <div className="max-w-4xl space-y-4">
        <h1 className="text-3xl font-bold mb-2 print:text-4xl">Pamela Leticia Alves Ferreira</h1>
        <h2 className="text-xl text-accent print:text-2xl print:text-gray-700">Biomedicina • 7º semestre</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-4">
          <div className="space-y-2 print:text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent print:text-gray-600" />
              <p className="print:text-gray-700">R. Dona tecla 866. Jardim flor da montanha. Apto 134B</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent print:text-gray-600" />
              <p className="print:text-gray-700">(11) 992728063</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent print:text-gray-600" />
              <p className="print:text-gray-700">Az746516@gmail.com</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold print:text-gray-800">Objetivos</h3>
            <Separator className="my-2 bg-[#403E43] h-[0.5px] opacity-30" />
            <p className="print:text-gray-700">Auxiliar / Jovem Aprendiz</p>
          </div>
        </div>
      </div>
    </header>
  );
};