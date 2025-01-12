import { Separator } from "@/components/ui/separator";

export const Skills = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-primary mb-6">Conhecimentos</h2>
      <Separator className="mb-6 bg-[#403E43] h-[0.5px] opacity-30" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Informática</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Microsoft Word</li>
            <li>Windows</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3">Idiomas</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Inglês (básico)</li>
            <li>Português (nativo)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};