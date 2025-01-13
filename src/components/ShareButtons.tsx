import { Share2, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "./ui/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const ShareButtons = () => {
  const navigate = useNavigate();

  const handleShare = async () => {
    const curriculoOnlineUrl = window.location.href;
    const whatsappMessage = encodeURIComponent(
      `Olá! Gostaria de compartilhar meu currículo:\n\n` +
      `📱 Versão Online: ${curriculoOnlineUrl}\n` +
      `📄 Versão PDF: ${curriculoOnlineUrl}/print`
    );
    const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShareLink = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Currículo - Pamela Leticia',
          url: window.location.href
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copiado!",
          description: "O link do currículo foi copiado para sua área de transferência."
        });
      }
    } catch (error) {
      console.error('Erro ao compartilhar:', error);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Button 
        variant="outline" 
        className="bg-white/10 hover:bg-white/20 text-white border-white/20"
        onClick={() => navigate('/print')}
      >
        <FileText className="mr-2 h-4 w-4" />
        Versão para Impressão
      </Button>
      <Button 
        variant="outline" 
        className="bg-white/10 hover:bg-white/20 text-white border-white/20"
        onClick={() => navigate('/print')}
      >
        <FileText className="mr-2 h-4 w-4" />
        Versão PDF
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className="bg-white/10 hover:bg-white/20 text-white border-white/20"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Compartilhar
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={handleShare}>
            Compartilhar via WhatsApp
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleShareLink}>
            Copiar Link
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};