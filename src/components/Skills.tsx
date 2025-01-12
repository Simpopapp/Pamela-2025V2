import { motion } from "framer-motion";

export const Skills = () => {
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
      <h2 className="text-2xl font-bold text-primary mb-6">Conhecimentos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={item}>
          <h3 className="text-xl font-semibold mb-3">Informática</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li className="hover:text-accent transition-colors duration-300">Microsoft Word</li>
            <li className="hover:text-accent transition-colors duration-300">Windows</li>
          </ul>
        </motion.div>
        
        <motion.div variants={item}>
          <h3 className="text-xl font-semibold mb-3">Idiomas</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li className="hover:text-accent transition-colors duration-300">Inglês (básico)</li>
            <li className="hover:text-accent transition-colors duration-300">Português (nativo)</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};