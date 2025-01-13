import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { ShareButtons } from "./ShareButtons";

interface HeaderProps {}

export const Header = React.memo<HeaderProps>(() => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.header 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="section-fade gradient-bg text-white p-4 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-4 sm:gap-8 mb-6">
          <motion.div 
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="/lovable-uploads/7418b843-f242-421c-ace3-01ea1f544e94.png" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div>
            <motion.h1 
              className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 hover:text-highlight transition-colors duration-300 text-center"
            >
              Pamela Leticia Alves Ferreira
            </motion.h1>
            <motion.h2 
              className="text-xl sm:text-2xl text-highlight mb-4 sm:mb-6 text-center"
            >
              Biomedicina • 7º semestre
            </motion.h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-3">
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 hover:text-highlight transition-colors duration-300 text-sm sm:text-base"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <p className="break-words">R. Dona tecla 866. Jardim flor da montanha. Apto 134B</p>
            </motion.div>
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 hover:text-highlight transition-colors duration-300 text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <p>(11) 992728063</p>
            </motion.div>
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 hover:text-highlight transition-colors duration-300 text-sm sm:text-base"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <p className="break-words">Az746516@gmail.com</p>
            </motion.div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">Objetivos</h3>
            <p className="mb-4 text-sm sm:text-base">Auxiliar / Jovem Aprendiz</p>
            <ShareButtons />
          </div>
        </div>
      </div>
    </motion.header>
  );
});

Header.displayName = 'Header';