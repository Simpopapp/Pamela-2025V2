import { Mail, MapPin, Phone } from "lucide-react";

export const Header = () => {
  return (
    <header className="text-primary mb-8">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Pamela Leticia Alves Ferreira</h1>
        <h2 className="text-2xl text-accent mb-6">Biomedicina • 7º semestre</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <p>R. Dona tecla 866. Jardim flor da montanha. Apto 134B</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <p>(11) 992728063</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <p>Az746516@gmail.com</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Objetivos</h3>
            <p>Auxiliar / Jovem Aprendiz</p>
          </div>
        </div>
      </div>
    </header>
  );
};