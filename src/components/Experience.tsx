import { useEffect, useRef } from "react";

export const Experience = () => {
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-fade bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8 hover:shadow-md transition-all duration-300 hover:bg-white">
      <h2 className="text-2xl font-bold text-primary mb-8 pb-2 border-b-2 border-accent/20 text-gradient">
        Experiência Profissional
      </h2>
      
      <div className="space-y-10">
        <div 
          ref={el => timelineRefs.current[0] = el}
          className="timeline-item relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-accent/30 hover:before:bg-accent before:transition-colors group hover:translate-x-1 transition-transform"
        >
          <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors before:content-[''] before:absolute before:w-full before:h-full before:rounded-full before:bg-accent/30 before:animate-ping"></div>
          <h3 className="text-xl font-semibold text-secondary group-hover:text-primary transition-colors">
            Decora flores artificiais
          </h3>
          <p className="text-accent font-medium mt-1">Jovem aprendiz</p>
          <p className="text-sm text-gray-600 mt-1">novembro/2020 a dezembro/2021</p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-center before:content-['•'] before:mr-2 before:text-accent hover:translate-x-1 transition-transform hover:text-primary">
              Edição de imagens
            </li>
            <li className="flex items-center before:content-['•'] before:mr-2 before:text-accent hover:translate-x-1 transition-transform hover:text-primary">
              Publicação de anúncios
            </li>
            <li className="flex items-center before:content-['•'] before:mr-2 before:text-accent hover:translate-x-1 transition-transform hover:text-primary">
              Atendimento a perguntas de clientes pelo mercado livre
            </li>
          </ul>
        </div>

        <div 
          ref={el => timelineRefs.current[1] = el}
          className="timeline-item relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-accent/30 hover:before:bg-accent before:transition-colors group hover:translate-x-1 transition-transform"
        >
          <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors before:content-[''] before:absolute before:w-full before:h-full before:rounded-full before:bg-accent/30 before:animate-ping"></div>
          <h3 className="text-xl font-semibold text-secondary group-hover:text-primary transition-colors">
            Padaria Santa Emília
          </h3>
          <p className="text-accent font-medium mt-1">Atendente e caixa</p>
        </div>
      </div>
    </section>
  );
};