export const Experience = () => {
  return (
    <section className="section-fade p-8 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-primary mb-6">Experiência Profissional</h2>
      
      <div className="space-y-8">
        <div className="border-l-4 border-accent pl-4">
          <h3 className="text-xl font-semibold">Decora flores artificiais</h3>
          <p className="text-secondary">Jovem aprendiz</p>
          <p className="text-sm text-gray-600">novembro/2020 a dezembro/2021</p>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>Edição de imagens</li>
            <li>Publicação de anúncios</li>
            <li>Atendimento a perguntas de clientes pelo mercado livre</li>
          </ul>
        </div>

        <div className="border-l-4 border-accent pl-4">
          <h3 className="text-xl font-semibold">Padaria Santa Emília</h3>
          <p className="text-secondary">Atendente e caixa</p>
        </div>
      </div>
    </section>
  );
};