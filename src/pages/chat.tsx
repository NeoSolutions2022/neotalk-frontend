import { useState, useRef } from "react";
import { InteractionPanel } from "@/components/InteractionPanel";
import { ChatArea } from "@/components/ChatArea";
import { AvatarPanel } from "@/components/AvatarPanel";
import { TurnToggle } from "@/components/TurnToggle";
import { chatFlow, ChatStep } from "@/config/chatFlow"; // Importando o fluxo do chat
import { Message, TurnMode } from "@/types";
import { ArrowDown, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Chat = () => {
  const [currentStep, setCurrentStep] = useState<keyof typeof chatFlow>("inicio");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: chatFlow.inicio.message,
      sender: "system",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessage, setCurrentMessage] = useState<string>();
  const [isTranslating, setIsTranslating] = useState(false);
  const [turnMode, setTurnMode] = useState<TurnMode>("hearing");
  const [isAvatarExpanded, setIsAvatarExpanded] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // ✅ Corrigido - Lógica para avançar no fluxo do chat
  const handleUserResponse = (userInput: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: userInput,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setIsTyping(true);

    setTimeout(() => {
      const step: ChatStep = chatFlow[currentStep];
      let nextStep = step.nextStep || null;

      if (step.nextOptions) {
        nextStep = step.nextOptions[userInput] || "inicio"; // Volta ao início se a opção for inválida
      }

      if (nextStep && chatFlow[nextStep]) {
        setCurrentStep(nextStep);
        const systemMessage: Message = {
          id: Date.now(),
          text: chatFlow[nextStep].message,
          sender: "system",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };

        setMessages((prev) => [...prev, systemMessage]);
      }

      setIsTyping(false);
    }, 2000);
  };

  // ✅ Corrigido - Função para lidar com sugestões de resposta
  const handleSuggestionClick = (suggestion: string) => {
    handleUserResponse(suggestion);
  };

  

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (isMobile) {
    return (
      <div className="mobile-layout">
        <div className="mobile-chat-area">
          <ChatArea messages={messages} isTyping={isTyping} />
          <div ref={chatEndRef} />
        </div>

        <div className={`mobile-avatar ${isAvatarExpanded ? "expanded" : ""}`}>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-50"
            onClick={() => setIsAvatarExpanded(!isAvatarExpanded)}
          >
            {isAvatarExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
          </Button>
          <AvatarPanel
            currentMessage={currentMessage}
            currentVideo={chatFlow[currentStep]?.videoId}
            turnMode={turnMode}
            isTranslating={isTranslating}
          />
        </div>



        <div className="mobile-controls">
          <InteractionPanel
            suggestions={chatFlow[currentStep]?.suggestions || []}
            inputType={chatFlow[currentStep]?.inputType || "buttons"}
            onUserResponse={handleUserResponse}
            onSuggestionClick={handleSuggestionClick} // ✅ Correção feita aqui
            onSendMessage={handleUserResponse} // ✅ Correção feita aqui
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-background w-100">
      <div className="flex-1 flex flex-col relative">

        <div className="flex-1 overflow-y-auto pb-[100px]">
          <ChatArea messages={messages} isTyping={isTyping} />
          <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-10 flex w-full">
            <InteractionPanel
              suggestions={chatFlow[currentStep]?.suggestions || []}
              inputType={chatFlow[currentStep]?.inputType || "buttons"}
              onUserResponse={handleUserResponse}
              onSuggestionClick={handleSuggestionClick} // ✅ Correção feita aqui
              onSendMessage={handleUserResponse} // ✅ Correção feita aqui
            />
          </div>
        </div>
      </div>
      <div className="w-80">
        <AvatarPanel
          currentMessage={currentMessage}
          currentVideo={chatFlow[currentStep]?.videoId}
          turnMode={turnMode}
          isTranslating={isTranslating}
        />
      </div>
    </div>
  );
};

export default Chat;
