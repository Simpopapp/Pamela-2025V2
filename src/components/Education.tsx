export const Education = () => {
  return (
    <section className="section-fade bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-primary mb-8 pb-2 border-b-2 border-accent/20">
        Formação Acadêmica
      </h2>
      
      <div className="space-y-10">
        <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-accent/30 hover:before:bg-accent before:transition-colors">
          <h3 className="text-xl font-semibold text-secondary">Biomedicina</h3>
          <p className="text-accent font-medium mt-1">Universidade UNG – Guarulhos</p>
          <p className="text-sm text-gray-600 mt-1">7º semestre - Cursando</p>
        </div>

        <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-accent/30 hover:before:bg-accent before:transition-colors">
          <h3 className="text-xl font-semibold text-secondary">Ensino Médio</h3>
          <p className="text-accent font-medium mt-1">E. E. Prof Frederico de Barros Brotero</p>
          <p className="text-sm text-gray-600 mt-1">Completo</p>
        </div>
      </div>
    </section>
  );
};