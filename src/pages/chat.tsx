import { useState, useRef } from "react";
import { InteractionPanel } from "@/components/InteractionPanel";
import { ChatArea } from "@/components/ChatArea";
import { AvatarPanel } from "@/components/AvatarPanel";
import { Play } from "lucide-react"; // ✅ Importando o ícone de Play corretamente
import { chatFlow, ChatStep } from "@/config/chatFlow"; // Importando o fluxo do chat
import { Message, TurnMode } from "@/types";
import { ChevronDown, ChevronUp } from "lucide-react";
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
      videoUrl: chatFlow.inicio.videoId || null,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessage, setCurrentMessage] = useState<string>();
  const [isAvatarExpanded, setIsAvatarExpanded] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [previewVideo, setPreviewVideo] = useState<string | null>(null);

  // ✅ Nova função para exibir vídeo sem avançar no chat
  const handlePreviewVideo = (videoUrl: string) => {

    // Se o mesmo vídeo for clicado duas vezes, ele será pausado
    setPreviewVideo((prev) => (prev === videoUrl ? null : videoUrl));
  };

  const renderMessageWithPlay = (message: Message) => {
    const step = Object.keys(chatFlow).find((key) => chatFlow[key].message === message.text);
    const videoUrl = step ? chatFlow[step]?.videoId : null;

    return (
      <div key={message.id} className="flex items-center gap-2 p-2">
        {/* Botão de Play */}
        {videoUrl && (
          <button
            onClick={() => handlePreviewVideo(videoUrl)}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <Play className="h-5 w-5" />
          </button>
        )}
        <span>{message.text}</span>
      </div>
    );
  };

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

      // Se estivermos em "morador_responde", forçar 50-50
      if (nextStep && chatFlow[nextStep]) {
        setCurrentStep(nextStep);
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            text: chatFlow[nextStep].message,
            sender: "system",
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            videoUrl: chatFlow[nextStep].videoId || null,
          },
        ]);
        setPreviewVideo(null);
      }

      setIsTyping(false);
    }, 2000);
  };


  // ✅ Corrigido - Função para lidar com sugestões de resposta
  const handleSuggestionClick = (suggestion: string) => {
    handleUserResponse(suggestion);
  };


  if (isMobile) {
    return (
      <div className="mobile-layout">
        <div className="mobile-chat-area">
          <ChatArea messages={messages} isTyping={isTyping} onPlayVideo={handlePreviewVideo} />
          <div ref={chatEndRef} />
        </div>

        <div className={`mobile-avatar ${isAvatarExpanded ? // Se expandido, ocupa a tela inteira
          "absolute bottom-15 right-0 w-[40vw] h-[40vh] bg-white"
          : // Se não expandido, mantém altura parcial
          "relative h-[100vh] w-full bg-white"}`}>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-50"
            onClick={() => setIsAvatarExpanded(!isAvatarExpanded)}
          >
            {isAvatarExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
          </Button>

          <AvatarPanel
            currentMessage={previewVideo ? "Reproduzindo vídeo..." : chatFlow[currentStep]?.message}
            currentVideo={previewVideo || chatFlow[currentStep]?.videoId}
          />
        </div>



        <div className="mobile-controls">
          <InteractionPanel
            suggestions={chatFlow[currentStep]?.suggestions || []}
            inputType={chatFlow[currentStep]?.inputType || "buttons"}
            onUserResponse={handleUserResponse}
            onSuggestionClick={handleSuggestionClick} // ✅ Correção feita aqui
            onSendMessage={handleUserResponse}
            onPreviewVideo={handlePreviewVideo} // ✅ Correção feita aqui
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-background w-100">
      <div className="flex-1 flex flex-col relative">

        <div className="flex-1 overflow-y-auto pb-[100px]">
          <ChatArea messages={messages} isTyping={isTyping} onPlayVideo={handlePreviewVideo} />
          <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-10 flex w-full">
            <InteractionPanel
              suggestions={chatFlow[currentStep]?.suggestions || []}
              inputType={chatFlow[currentStep]?.inputType || "buttons"}
              onUserResponse={handleUserResponse}
              onSuggestionClick={handleSuggestionClick} // ✅ Correção feita aqui
              onSendMessage={handleUserResponse}
              onPreviewVideo={handlePreviewVideo} // ✅ Correção feita aqui
            />
          </div>
        </div>
      </div>
      <div className="w-80">
        <AvatarPanel
          currentMessage={previewVideo ? "Pré-visualização" : chatFlow[currentStep]?.message}
          currentVideo={previewVideo || chatFlow[currentStep]?.videoId} // 🔥 Usa previewVideo se existir
        />
      </div>
    </div>
  );
};

export default Chat;
