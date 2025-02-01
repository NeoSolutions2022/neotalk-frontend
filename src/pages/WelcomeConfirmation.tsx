import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Settings, ArrowRight, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const WelcomeConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-neotalk-light to-white py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Header Section */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block"
          >
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
          </motion.div>
          <h1 className="text-4xl font-bold text-neotalk-dark">
            Bem-vindo ao NeoTalk!
          </h1>
          <p className="text-lg text-neotalk-gray">
            Sua assinatura foi confirmada e agora você tem acesso a todas as
            funcionalidades do seu plano.
          </p>
        </div>

        {/* Quick Start Guide */}
        <Card className="p-6 bg-white shadow-lg rounded-xl">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Rocket className="h-6 w-6 text-neotalk-primary" />
            Como começar?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Acesse o Dashboard",
                description: "Inicie sua primeira tradução",
              },
              {
                step: "2",
                title: "Configure suas preferências",
                description: "Personalize sua experiência",
              },
              {
                step: "3",
                title: "Explore os recursos",
                description: "Descubra todas as funcionalidades",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 * Number(item.step) }}
                className="text-center p-4 rounded-lg bg-neotalk-light/50"
              >
                <div className="w-8 h-8 bg-neotalk-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-neotalk-gray">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => navigate("/dashboard")}
            className="bg-neotalk-primary hover:bg-neotalk-primary/90"
          >
            Acessar o Dashboard
            <ArrowRight className="ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/dashboard/settings")}
          >
            <Settings className="mr-2" />
            Configurar Minha Conta
          </Button>
        </div>

        {/* Support Section */}
        <div className="text-center text-neotalk-gray">
          <p className="mb-2">Precisa de ajuda?</p>
          <div className="space-x-4">
            <a
              href="#faq"
              className="text-neotalk-primary hover:underline"
            >
              FAQ
            </a>
            <span>•</span>
            <a
              href="mailto:suporte@neotalk.app"
              className="text-neotalk-primary hover:underline"
            >
              suporte@neotalk.app
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeConfirmation;