import { Mail, MapPin, Phone } from "lucide-react";

export const Header = () => {
  return (
    <header className="section-fade gradient-bg text-white p-8 rounded-xl shadow-lg transform hover:scale-[1.01] transition-all duration-300 group">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute -top-4 -right-4 w-32 h-32 bg-highlight/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
        
        <h1 className="text-4xl font-bold mb-4 tracking-tight relative">
          <span className="inline-block hover:scale-[1.02] transition-transform">
            Pamela Leticia Alves Ferreira
          </span>
        </h1>
        
        <h2 className="text-2xl text-highlight mb-8 font-medium relative hover:text-white transition-colors duration-300">
          Biomedicina • 7º semestre
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <div className="space-y-4">
            <div className="flex items-center gap-3 group/item hover:translate-x-1 transition-transform">
              <MapPin className="w-5 h-5 group-hover/item:text-highlight transition-colors" />
              <p className="text-gray-100">R. Dona tecla 866. Jardim flor da montanha. Apto 134B</p>
            </div>
            <div className="flex items-center gap-3 group/item hover:translate-x-1 transition-transform">
              <Phone className="w-5 h-5 group-hover/item:text-highlight transition-colors" />
              <p className="text-gray-100">(11) 992728063</p>
            </div>
            <div className="flex items-center gap-3 group/item hover:translate-x-1 transition-transform">
              <Mail className="w-5 h-5 group-hover/item:text-highlight transition-colors" />
              <p className="text-gray-100">Az746516@gmail.com</p>
            </div>
          </div>
          
          <div className="space-y-3 glass-effect p-6 rounded-lg hover-lift">
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