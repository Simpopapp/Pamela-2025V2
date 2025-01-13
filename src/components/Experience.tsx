import { motion } from "framer-motion";
import React from "react";

interface ExperienceProps {}

export const Experience = React.memo<ExperienceProps>(() => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className="section-fade p-4 sm:p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">Experiência Profissional</h2>
      
      <div className="space-y-6 sm:space-y-8">
        <motion.div 
          variants={item}
          className="border-l-4 border-accent pl-4 hover:border-highlight transition-colors duration-300"
        >
          <h3 className="text-lg sm:text-xl font-semibold">Decora flores artificiais</h3>
          <p className="text-secondary text-sm sm:text-base">Jovem aprendiz</p>
          <p className="text-xs sm:text-sm text-gray-600">novembro/2020 a dezembro/2021</p>
          <ul className="mt-2 list-disc list-inside text-gray-700 text-sm sm:text-base">
            <li className="hover:text-accent transition-colors duration-300">Edição de imagens</li>
            <li className="hover:text-accent transition-colors duration-300">Publicação de anúncios</li>
            <li className="hover:text-accent transition-colors duration-300">Atendimento a perguntas de clientes pelo mercado livre</li>
          </ul>
        </motion.div>

        <motion.div 
          variants={item}
          className="border-l-4 border-accent pl-4 hover:border-highlight transition-colors duration-300"
        >
          <h3 className="text-lg sm:text-xl font-semibold">Padaria Santa Emília</h3>
          <p className="text-secondary text-sm sm:text-base">Atendente e caixa</p>
        </motion.div>
      </div>
    </motion.section>
  );
});

Experience.displayName = 'Experience';