export const Education = () => {
  return (
    <section className="section-fade bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8 hover:shadow-md transition-all duration-300 hover:bg-white">
      <h2 className="text-2xl font-bold text-primary mb-8 pb-2 border-b-2 border-accent/20 text-gradient">
        Formação Acadêmica
      </h2>
      
      <div className="space-y-10">
        <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-accent/30 hover:before:bg-accent before:transition-colors group hover:translate-x-1 transition-transform">
          <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors"></div>
          <h3 className="text-xl font-semibold text-secondary group-hover:text-primary transition-colors">Biomedicina</h3>
          <p className="text-accent font-medium mt-1">Universidade UNG – Guarulhos</p>
          <p className="text-sm text-gray-600 mt-1">7º semestre - Cursando</p>
        </div>

        <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-accent/30 hover:before:bg-accent before:transition-colors group hover:translate-x-1 transition-transform">
          <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors"></div>
          <h3 className="text-xl font-semibold text-secondary group-hover:text-primary transition-colors">Ensino Médio</h3>
          <p className="text-accent font-medium mt-1">E. E. Prof Frederico de Barros Brotero</p>
          <p className="text-sm text-gray-600 mt-1">Completo</p>
        </div>
      </div>
    </section>
  );
};