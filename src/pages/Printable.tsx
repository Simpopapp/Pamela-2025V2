import { Header } from "@/components/printable/Header";
import { Education } from "@/components/printable/Education";
import { Experience } from "@/components/printable/Experience";
import { Skills } from "@/components/printable/Skills";
import { Separator } from "@/components/ui/separator";

const Printable = () => {
  return (
    <div className="min-h-screen bg-white print:bg-white">
      <div className="max-w-[21cm] mx-auto space-y-[1cm] p-8 print:p-[1cm]">
        {/* First A4 Page */}
        <div className="h-[29.7cm] w-[21cm] mx-auto bg-white print:shadow-none flex flex-col">
          <Header />
          <Separator className="my-6 print:my-4 bg-[#403E43] h-[0.5px] opacity-30" />
          <div className="flex-grow space-y-8 print:space-y-6">
            <Education />
            <Experience />
          </div>
        </div>
        
        {/* Second A4 Page */}
        <div className="h-[29.7cm] w-[21cm] mx-auto bg-white print:shadow-none flex flex-col print:break-before-page">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Printable;