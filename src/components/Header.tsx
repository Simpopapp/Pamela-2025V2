import { Mail, MapPin, Phone, FileText, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import React from "react";
import { toast } from "./ui/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface HeaderProps {}

export const Header = React.memo<HeaderProps>(() => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

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
    <motion.header 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="section-fade gradient-bg text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
          <motion.div 
            className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="/lovable-uploads/7418b843-f242-421c-ace3-01ea1f544e94.png" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div>
            <motion.h1 
              className="text-4xl font-bold mb-4 hover:text-highlight transition-colors duration-300 text-center md:text-left"
            >
              Pamela Leticia Alves Ferreira
            </motion.h1>
            <motion.h2 
              className="text-2xl text-highlight mb-6 text-center md:text-left"
            >
              Biomedicina • 7º semestre
            </motion.h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 hover:text-highlight transition-colors duration-300"
            >
              <MapPin className="w-5 h-5" />
              <p>R. Dona tecla 866. Jardim flor da montanha. Apto 134B</p>
            </motion.div>
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 hover:text-highlight transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <p>(11) 992728063</p>
            </motion.div>
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 hover:text-highlight transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <p>Az746516@gmail.com</p>
            </motion.div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Objetivos</h3>
            <p className="mb-4">Auxiliar / Jovem Aprendiz</p>
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
                onClick={() => window.open('/print', '_blank')}
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
          </div>
        </div>
      </div>
    </motion.header>
  );
});

Header.displayName = 'Header';