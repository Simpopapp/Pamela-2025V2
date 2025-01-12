import { motion } from "framer-motion";
import React from "react";

interface EducationProps {}

export const Education = React.memo<EducationProps>(() => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
      className="section-fade p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
    >
      <h2 className="text-2xl font-bold text-[#1A1F2C] mb-6">Formação Acadêmica</h2>
      
      <div className="space-y-6">
        <motion.div 
          variants={item}
          className="border-l-4 border-[#8B5CF6] pl-4 hover:border-[#7C3AED] transition-colors duration-300 bg-gray-50 p-4 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-gray-800">Biomedicina</h3>
          <p className="text-gray-600">Universidade UNG – Guarulhos</p>
          <p className="text-sm text-gray-500">7º semestre - Cursando</p>
        </motion.div>

        <motion.div 
          variants={item}
          className="border-l-4 border-[#8B5CF6] pl-4 hover:border-[#7C3AED] transition-colors duration-300 bg-gray-50 p-4 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-gray-800">Ensino Médio</h3>
          <p className="text-gray-600">E. E. Prof Frederico de Barros Brotero</p>
          <p className="text-sm text-gray-500">Completo</p>
        </motion.div>
      </div>
    </motion.section>
  );
});

Education.displayName = 'Education';