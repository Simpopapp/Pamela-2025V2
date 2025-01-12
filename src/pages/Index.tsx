import { Header } from "@/components/Header";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto space-y-6 px-4">
        <Header />
        <Education />
        <Experience />
        <Skills />
      </div>
    </div>
  );
};

export default Index;