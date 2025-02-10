import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn, UserPlus, Mail } from "lucide-react";

const WelcomeHero = () => {
  const navigate = useNavigate();

  const loginClick = () => {
    navigate("/login");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-b from-white to-gray-50"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <img
          src="/lovable-uploads/f2bb79a5-9ed4-4524-a8eb-6b92f7758afd.png"
          alt="NeoTalk Logo"
          className="h-16 md:h-20"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <span className="px-3 py-1 text-xs font-semibold text-neotalk-primary bg-blue-50 rounded-full mb-4 inline-block">
          Acessibilidade sem Fronteiras
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-neotalk-dark mb-6">
          Quebrando Barreiras com Tecnologia
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Tradução em tempo real entre áudio, texto e Libras. Experimente agora.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button
            variant="default"
            size="lg"
            className="w-full sm:w-auto bg-neotalk-primary hover:bg-neotalk-primary/90 text-white font-semibold px-8"
            onClick={loginClick}
          >
            <LogIn className="mr-2 h-5 w-5" />
            Entrar
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-2 border-neotalk-primary text-neotalk-primary hover:bg-neotalk-primary hover:text-white font-semibold px-8"
          >
            <UserPlus className="mr-2 h-5 w-5" />
            Criar Conta
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gradient-to-b from-white to-gray-50 text-gray-500">
              ou continue com
            </span>
          </div>
        </div>

        <div className="mt-6">
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border border-gray-200 text-gray-700 hover:bg-gray-50"
          >
            <Mail className="mr-2 h-5 w-5" />
            Google
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <p className="text-sm text-gray-500">
          Ao continuar, você concorda com nossos Termos de Serviço e Política de Privacidade
        </p>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeHero;