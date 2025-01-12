export const Education = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-primary mb-6">Formação Acadêmica</h2>
      
      <div className="space-y-6">
        <div className="border-l-4 border-accent pl-4">
          <h3 className="text-xl font-semibold">Biomedicina</h3>
          <p className="text-secondary">Universidade UNG – Guarulhos</p>
          <p className="text-sm text-gray-600">7º semestre - Cursando</p>
        </div>

        <div className="border-l-4 border-accent pl-4">
          <h3 className="text-xl font-semibold">Ensino Médio</h3>
          <p className="text-secondary">E. E. Prof Frederico de Barros Brotero</p>
          <p className="text-sm text-gray-600">Completo</p>
        </div>
      </div>
    </section>
  );
};