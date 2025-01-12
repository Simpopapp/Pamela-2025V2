import { Header } from "@/components/printable/Header";
import { Education } from "@/components/printable/Education";
import { Experience } from "@/components/printable/Experience";
import { Skills } from "@/components/printable/Skills";

const Printable = () => {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-[21cm] mx-auto space-y-[2cm]">
        {/* First A4 Page */}
        <div className="h-[29.7cm] w-[21cm] mx-auto bg-white shadow-lg p-[2cm] flex flex-col">
          <Header />
          <div className="flex-grow">
            <Education />
          </div>
        </div>
        
        {/* Second A4 Page */}
        <div className="h-[29.7cm] w-[21cm] mx-auto bg-white shadow-lg p-[2cm] flex flex-col">
          <Experience />
          <div className="flex-grow">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Printable;