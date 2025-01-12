import { Header } from "@/components/printable/Header";
import { Education } from "@/components/printable/Education";
import { Experience } from "@/components/printable/Experience";
import { Skills } from "@/components/printable/Skills";
import { Separator } from "@/components/ui/separator";

const Printable = () => {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-[21cm] mx-auto space-y-[2cm]">
        {/* First A4 Page */}
        <div className="h-[29.7cm] w-[21cm] mx-auto bg-white shadow-lg p-[2cm] flex flex-col">
          <Header />
          <Separator className="my-8 bg-[#403E43] h-[0.5px] opacity-50" />
          <div className="flex-grow">
            <Education />
          </div>
        </div>
        
        {/* Second A4 Page */}
        <div className="h-[29.7cm] w-[21cm] mx-auto bg-white shadow-lg p-[2cm] flex flex-col">
          <Experience />
          <Separator className="my-8 bg-[#403E43] h-[0.5px] opacity-50" />
          <div className="flex-grow">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Printable;