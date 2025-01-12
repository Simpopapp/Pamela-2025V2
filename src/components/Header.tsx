import { Mail, MapPin, Phone } from "lucide-react";

export const Header = () => {
  return (
    <header className="section-fade gradient-bg text-white p-8 rounded-xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">
          Pamela Leticia Alves Ferreira
        </h1>
        <h2 className="text-2xl text-highlight mb-8 font-medium">
          Biomedicina • 7º semestre
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 group">
              <MapPin className="w-5 h-5 group-hover:text-highlight transition-colors" />
              <p className="text-gray-100">R. Dona tecla 866. Jardim flor da montanha. Apto 134B</p>
            </div>
            <div className="flex items-center gap-3 group">
              <Phone className="w-5 h-5 group-hover:text-highlight transition-colors" />
              <p className="text-gray-100">(11) 992728063</p>
            </div>
            <div className="flex items-center gap-3 group">
              <Mail className="w-5 h-5 group-hover:text-highlight transition-colors" />
              <p className="text-gray-100">Az746516@gmail.com</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-xl font-semibold border-b border-highlight/30 pb-2">
              Objetivos
            </h3>
            <p className="text-gray-100">Auxiliar / Jovem Aprendiz</p>
          </div>
        </div>
      </div>
    </header>
  );
};