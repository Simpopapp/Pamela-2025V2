import { motion } from "framer-motion";
import React from "react";

interface SkillsProps {}

export const Skills = React.memo<SkillsProps>(() => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4
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
      className="section-fade p-4 sm:p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-[#1A1F2C] mb-4 sm:mb-6">Conhecimentos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <motion.div variants={item} className="bg-gray-50 p-4 sm:p-6 rounded-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Informática</h3>
          <ul className="space-y-2 sm:space-y-3">
            <li className="flex items-center text-sm sm:text-base text-gray-600 hover:text-[#8B5CF6] transition-colors duration-300">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#8B5CF6] rounded-full mr-2 sm:mr-3"></span>
              Microsoft Word
            </li>
            <li className="flex items-center text-sm sm:text-base text-gray-600 hover:text-[#8B5CF6] transition-colors duration-300">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#8B5CF6] rounded-full mr-2 sm:mr-3"></span>
              Windows
            </li>
          </ul>
        </motion.div>
        
        <motion.div variants={item} className="bg-gray-50 p-4 sm:p-6 rounded-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Idiomas</h3>
          <ul className="space-y-2 sm:space-y-3">
            <li className="flex items-center text-sm sm:text-base text-gray-600 hover:text-[#8B5CF6] transition-colors duration-300">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#8B5CF6] rounded-full mr-2 sm:mr-3"></span>
              Inglês (básico)
            </li>
            <li className="flex items-center text-sm sm:text-base text-gray-600 hover:text-[#8B5CF6] transition-colors duration-300">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#8B5CF6] rounded-full mr-2 sm:mr-3"></span>
              Português (nativo)
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
});

Skills.displayName = 'Skills';