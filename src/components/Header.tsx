import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <motion.header 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="section-fade gradient-bg text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold mb-4 hover:text-highlight transition-colors duration-300"
        >
          Pamela Leticia Alves Ferreira
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-highlight mb-6"
        >
          Biomedicina • 7º semestre
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 hover:text-highlight transition-colors duration-300"
            >
              <MapPin className="w-5 h-5" />
              <p>R. Dona tecla 866. Jardim flor da montanha. Apto 134B</p>
            </motion.div>
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 hover:text-highlight transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <p>(11) 992728063</p>
            </motion.div>
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 hover:text-highlight transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <p>Az746516@gmail.com</p>
            </motion.div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Objetivos</h3>
            <p className="mb-4">Auxiliar / Jovem Aprendiz</p>
            <Button 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              onClick={() => navigate('/print')}
            >
              Versão para Impressão
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};