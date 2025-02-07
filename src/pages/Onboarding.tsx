import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronRight,
  MessageSquare,
  Settings,
  History,
  BarChart,
  Bell,
  Check,
  X,
} from "lucide-react";

const onboardingSteps = [
  {
    title: "Bem-vindo ao NeoTalk!",
    description: "Vamos te ajudar a explorar a plataforma em poucos passos.",
    icon: MessageSquare,
  },
  {
    title: "Tradução em Tempo Real",
    description: "Traduza áudio, texto e Libras instantaneamente com nossa tecnologia avançada.",
    icon: MessageSquare,
  },
  {
    title: "Personalização",
    description: "Escolha seu avatar 3D, ajuste a velocidade da tradução e selecione o dataset ideal.",
    icon: Settings,
  },
  {
    title: "Histórico de Traduções",
    description: "Acesse todas as suas traduções anteriores e baixe as transcrições quando precisar.",
    icon: History,
  },
  {
    title: "Estatísticas de Uso",
    description: "Acompanhe seu tempo de uso, quantidade de traduções e ranking na plataforma.",
    icon: BarChart,
  },
  {
    title: "Notificações",
    description: "Fique por dentro dos limites do seu plano e novidades da plataforma.",
    icon: Bell,
  },
  {
    title: "Pronto!",
    description: "Agora você pode explorar tudo o que o NeoTalk tem a oferecer.",
    icon: Check,
  },
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep === onboardingSteps.length - 1) {
      navigate("/dashboard");
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleSkip = () => {
    navigate("/dashboard");
  };

  const handlePersonalize = () => {
    navigate("/dashboard/settings");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neotalk-light to-white dark:from-neotalk-dark dark:to-gray-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 bg-white dark:bg-gray-800 shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                {React.createElement(onboardingSteps[currentStep].icon, {
                  className: "h-8 w-8 text-neotalk-primary",
                })}
                <h2 className="text-2xl font-bold text-neotalk-dark dark:text-white">
                  {onboardingSteps[currentStep].title}
                </h2>
              </div>
              <button
                onClick={handleSkip}
                className="text-neotalk-gray hover:text-neotalk-dark dark:hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <p className="text-lg text-neotalk-gray dark:text-gray-300">
              {onboardingSteps[currentStep].description}
            </p>

            <div className="flex items-center justify-between pt-6">
              <div className="flex gap-2">
                {onboardingSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index === currentStep
                        ? "bg-neotalk-primary"
                        : "bg-neotalk-gray/30"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-4">
                {currentStep === 2 && (
                  <Button
                    variant="outline"
                    onClick={handlePersonalize}
                    className="gap-2"
                  >
                    <Settings className="h-4 w-4" />
                    Personalizar Agora
                  </Button>
                )}
                <Button onClick={handleNext} className="gap-2">
                  {currentStep === onboardingSteps.length - 1 ? (
                    <>
                      Acessar Dashboard
                      <Check className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Próximo
                      <ChevronRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Card>
    </div>
  );
};

export default Onboarding;