export const Skills = () => {
  return (
    <section className="section-fade bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8 hover:shadow-md transition-all duration-300 hover:bg-white">
      <h2 className="text-2xl font-bold text-primary mb-8 pb-2 border-b-2 border-accent/20 text-gradient">
        Conhecimentos
      </h2>
      
      <div className="space-y-8">
        <div className="hover-lift p-4 rounded-lg bg-gradient-to-br from-white to-gray-50 transform transition-all duration-300">
          <h3 className="text-xl font-semibold text-secondary mb-4">Informática</h3>
          <ul className="space-y-3">
            {["Microsoft Word", "Windows"].map((skill, index) => (
              <li 
                key={skill}
                className="flex items-center text-gray-700 before:content-['•'] before:mr-2 before:text-accent group hover:translate-x-1 transition-all duration-300"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.5s ease-out forwards',
                  opacity: 0,
                  transform: 'translateY(10px)'
                }}
              >
                <span className="group-hover:text-primary transition-colors">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="hover-lift p-4 rounded-lg bg-gradient-to-br from-white to-gray-50 transform transition-all duration-300">
          <h3 className="text-xl font-semibold text-secondary mb-4">Idiomas</h3>
          <ul className="space-y-3">
            {["Inglês (básico)", "Português (nativo)"].map((language, index) => (
              <li 
                key={language}
                className="flex items-center text-gray-700 before:content-['•'] before:mr-2 before:text-accent group hover:translate-x-1 transition-all duration-300"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.5s ease-out forwards',
                  opacity: 0,
                  transform: 'translateY(10px)'
                }}
              >
                <span className="group-hover:text-primary transition-colors">
                  {language}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};