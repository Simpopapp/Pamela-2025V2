import { motion } from "framer-motion";

export const Education = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="section-fade p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <h2 className="text-2xl font-bold text-primary mb-6">Formação Acadêmica</h2>
      
      <div className="space-y-6">
        <motion.div 
          variants={item}
          className="border-l-4 border-accent pl-4 hover:border-highlight transition-colors duration-300"
        >
          <h3 className="text-xl font-semibold">Biomedicina</h3>
          <p className="text-secondary">Universidade UNG – Guarulhos</p>
          <p className="text-sm text-gray-600">7º semestre - Cursando</p>
        </motion.div>

        <motion.div 
          variants={item}
          className="border-l-4 border-accent pl-4 hover:border-highlight transition-colors duration-300"
        >
          <h3 className="text-xl font-semibold">Ensino Médio</h3>
          <p className="text-secondary">E. E. Prof Frederico de Barros Brotero</p>
          <p className="text-sm text-gray-600">Completo</p>
        </motion.div>
      </div>
    </motion.section>
  );
};