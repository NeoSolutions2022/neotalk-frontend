import { useState, useRef } from "react";
import { InteractionPanel } from "@/components/InteractionPanel";
import { ChatArea } from "@/components/ChatArea";
import { AvatarPanel } from "@/components/AvatarPanel";
import { Play } from "lucide-react";
import { chatFlow } from "@/config/chatFlow";
import { Message } from "@/types";
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
      videoUrl:
        chatFlow.inicio.videoId ||
        "https://player.vimeo.com/video/1063283011?autoplay=1&loop=1&background=1&muted=1",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [previewVideo, setPreviewVideo] = useState<string | null>(null);
  const [isAvatarExpanded, setIsAvatarExpanded] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const handlePreviewVideo = (videoUrl: string) => {
    setPreviewVideo((prev) => (prev === videoUrl ? null : videoUrl));
  };

  const renderMessageWithPlay = (message: Message) => {
    const stepKey = Object.keys(chatFlow).find(
      (key) => chatFlow[key].message === message.text
    ) as keyof typeof chatFlow | undefined;
    const step = stepKey ? chatFlow[stepKey] : undefined;
    const videoUrl = step?.previewVideoId || step?.videoId || null;

    return (
      <div key={message.id} className="flex items-center gap-2 p-2">
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

  // Clique em texto livre (inputType === "text")
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
      const step = chatFlow[currentStep];
      const nextKey =
        step.inputType === "buttons" && step.nextOptions
          ? step.nextOptions[userInput]
          : step.nextStep;

      if (!nextKey || !chatFlow[nextKey]) {
        setIsTyping(false);
        return;
      }

      const next = chatFlow[nextKey];
      setCurrentStep(nextKey);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: next.message,
          sender: "system",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          videoUrl: next.videoId || null,
        },
      ]);

      setPreviewVideo(null);
      setIsTyping(false);
    }, 1000);
  };

  // Clique em sugestão: **não** ecoa a sugestão como mensagem do usuário,
  // apenas avança o fluxo e exibe a próxima mensagem do sistema.
  const handleSuggestionClick = (suggestion: string) => {
    const step = chatFlow[currentStep];
    const nextKey =
      step.inputType === "buttons" && step.nextOptions
        ? step.nextOptions[suggestion]
        : step.nextStep;

    if (!nextKey || !chatFlow[nextKey]) {
      return;
    }

    const next = chatFlow[nextKey];
    setCurrentStep(nextKey);
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: next.message,
        sender: "system",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        videoUrl: next.videoId || null,
      },
    ]);
    setPreviewVideo(null);
  };

  // layout mobile
  if (isMobile) {
    return (
      <div className="mobile-layout">
        <div className="mobile-chat-area">
          <ChatArea
            messages={messages}
            isTyping={isTyping}
            renderMessage={renderMessageWithPlay}
            onPlayVideo={handlePreviewVideo}
          />
          <div ref={chatEndRef} />
        </div>

        <div
          className={`mobile-avatar ${
            isAvatarExpanded
              ? "absolute bottom-15 right-0 w-[40vw] h-[40vh] bg-white"
              : "relative h-[100vh] w-full bg-white"
          }`}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-50"
            onClick={() => setIsAvatarExpanded(!isAvatarExpanded)}
          >
            {isAvatarExpanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronUp className="h-4 w-4" />
            )}
          </Button>

          <AvatarPanel
            currentMessage={
              previewVideo
                ? "Reproduzindo vídeo..."
                : chatFlow[currentStep]?.message
            }
            currentVideo={
              previewVideo || chatFlow[currentStep]?.videoId || undefined
            }
          />
        </div>

        <div className="mobile-controls">
          <InteractionPanel
            suggestions={chatFlow[currentStep]?.suggestions || []}
            inputType={chatFlow[currentStep]?.inputType || "buttons"}
            onUserResponse={handleUserResponse}
            onSuggestionClick={handleSuggestionClick}
            onSendMessage={handleUserResponse}
            onPreviewVideo={handlePreviewVideo}
          />
        </div>
      </div>
    );
  }

  // layout desktop
  return (
    <div className="flex h-screen bg-background w-100">
      <div className="flex-1 flex flex-col relative">
        <div className="flex-1 overflow-y-auto pb-[100px]">
          <ChatArea
            messages={messages}
            isTyping={isTyping}
            renderMessage={renderMessageWithPlay}
            onPlayVideo={handlePreviewVideo}
          />
          <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-10 flex w-full">
            <InteractionPanel
              suggestions={chatFlow[currentStep]?.suggestions || []}
              inputType={chatFlow[currentStep]?.inputType || "buttons"}
              onUserResponse={handleUserResponse}
              onSuggestionClick={handleSuggestionClick}
              onSendMessage={handleUserResponse}
              onPreviewVideo={handlePreviewVideo}
            />
          </div>
        </div>
      </div>
      <div className="w-80">
        <AvatarPanel
          currentMessage={
            previewVideo ? "Pré‑visualização" : chatFlow[currentStep]?.message
          }
          currentVideo={
            previewVideo || chatFlow[currentStep]?.videoId || undefined
          }
        />
      </div>
    </div>
  );
};

export default Chat;
