import { motion } from "framer-motion";

export const Experience = () => {
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
      <h2 className="text-2xl font-bold text-primary mb-6">Experiência Profissional</h2>
      
      <div className="space-y-8">
        <motion.div 
          variants={item}
          className="border-l-4 border-accent pl-4 hover:border-highlight transition-colors duration-300"
        >
          <h3 className="text-xl font-semibold">Decora flores artificiais</h3>
          <p className="text-secondary">Jovem aprendiz</p>
          <p className="text-sm text-gray-600">novembro/2020 a dezembro/2021</p>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li className="hover:text-accent transition-colors duration-300">Edição de imagens</li>
            <li className="hover:text-accent transition-colors duration-300">Publicação de anúncios</li>
            <li className="hover:text-accent transition-colors duration-300">Atendimento a perguntas de clientes pelo mercado livre</li>
          </ul>
        </motion.div>

        <motion.div 
          variants={item}
          className="border-l-4 border-accent pl-4 hover:border-highlight transition-colors duration-300"
        >
          <h3 className="text-xl font-semibold">Padaria Santa Emília</h3>
          <p className="text-secondary">Atendente e caixa</p>
        </motion.div>
      </div>
    </motion.section>
  );
};