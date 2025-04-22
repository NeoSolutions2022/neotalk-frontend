import { useState, useRef, useEffect } from "react";
import { InteractionPanel } from "@/components/InteractionPanel";
import { ChatArea } from "@/components/ChatArea";
import { AvatarPanel } from "@/components/AvatarPanel";
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
  const [page, setPage] = useState(0);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Reset pagination when step changes
  useEffect(() => {
    setPage(0);
  }, [currentStep]);

  const handlePreviewVideo = (videoUrl: string) => {
    setPreviewVideo((prev) => (prev === videoUrl ? null : videoUrl));
  };

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
      const nextKey = step.nextStep;

      if (!nextKey || !chatFlow[nextKey]) {
        setIsTyping(false);
        return;
      }

      const next = chatFlow[nextKey];
      setCurrentStep(nextKey as keyof typeof chatFlow);
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
    }, 800);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: suggestion,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setIsTyping(true);

    setTimeout(() => {
      let nextKey: string | undefined;
      const step = chatFlow[currentStep];

      if (step.inputType === "buttons" && step.nextOptions) {
        nextKey = step.nextOptions[suggestion];
      } else {
        nextKey = step.nextStep;
      }

      if (!nextKey || !chatFlow[nextKey]) {
        setIsTyping(false);
        return;
      }

      const next = chatFlow[nextKey];
      setCurrentStep(nextKey as keyof typeof chatFlow);
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
    }, 800);
  };

  const currentConfig = chatFlow[currentStep];
  const suggestions = currentConfig.suggestions || [];
  const nextOptions = currentConfig.nextOptions || {};

  // Mobile layout
  if (isMobile) {
    return (
      <div className="mobile-layout">
        <div className="mobile-chat-area">
          <ChatArea
            messages={messages}
            isTyping={isTyping}
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
                : currentConfig.message
            }
            currentVideo={
              previewVideo || currentConfig.videoId || undefined
            }
          />
        </div>

        <div className="mobile-controls">
          <InteractionPanel
            suggestions={suggestions}
            nextOptions={nextOptions}
            inputType={currentConfig.inputType || "buttons"}
            page={page}
            setPage={setPage}
            onUserResponse={handleUserResponse}
            onSuggestionClick={handleSuggestionClick}
            onSendMessage={handleUserResponse}
            onPreviewVideo={handlePreviewVideo}
          />
        </div>
      </div>
    );
  }

  // Desktop layout
  return (
    <div className="flex h-screen bg-background w-100">
      <div className="flex-1 flex flex-col relative">
        <div className="flex-1 overflow-y-auto pb-[100px]">
          <ChatArea
            messages={messages}
            isTyping={isTyping}
            onPlayVideo={handlePreviewVideo}
          />
          <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-10 flex w-full">
            <InteractionPanel
              suggestions={suggestions}
              nextOptions={nextOptions}
              inputType={currentConfig.inputType || "buttons"}
              page={page}
              setPage={setPage}
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
            previewVideo ? "Pré‑visualização" : currentConfig.message
          }
          currentVideo={
            previewVideo || currentConfig.videoId || undefined
          }
        />
      </div>
    </div>
  );
};

export default Chat;
