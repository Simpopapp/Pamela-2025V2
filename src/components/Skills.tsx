export const Skills = () => {
  return (
    <section className="section-fade bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-primary mb-8 pb-2 border-b-2 border-accent/20">
        Conhecimentos
      </h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-secondary mb-4">Informática</h3>
          <ul className="space-y-3">
            {["Microsoft Word", "Windows"].map((skill) => (
              <li key={skill} className="flex items-center text-gray-700 before:content-['•'] before:mr-2 before:text-accent">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-secondary mb-4">Idiomas</h3>
          <ul className="space-y-3">
            {["Inglês (básico)", "Português (nativo)"].map((language) => (
              <li key={language} className="flex items-center text-gray-700 before:content-['•'] before:mr-2 before:text-accent">
                {language}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};