import { useState } from "react";
import { InteractionPanel } from "@/components/InteractionPanel";
import { ChatArea } from "@/components/ChatArea";
import { AvatarPanel } from "@/components/AvatarPanel";
import { TurnToggle } from "@/components/TurnToggle";
import { Message, TurnMode } from "@/types";

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá, como posso ajudar?",
      sender: "system",
      timestamp: "10:00",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessage, setCurrentMessage] = useState<string>();
  const [isTranslating, setIsTranslating] = useState(false);
  const [turnMode, setTurnMode] = useState<TurnMode>("hearing");

  const handleSuggestionClick = (suggestion: string) => {
    setCurrentMessage(suggestion);
    setIsTranslating(true);
    // Simulate translation delay
    setTimeout(() => {
      setIsTranslating(false);
      handleSendMessage(suggestion);
    }, 2000);
  };

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setCurrentMessage(undefined);
    setIsTyping(true);

    // Simulate response
    setTimeout(() => {
      const response: Message = {
        id: Date.now(),
        text: "Entendi sua mensagem. Como posso ajudar mais?",
        sender: "system",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, 2000);
  };

  const handleTurnToggle = () => {
    setTurnMode((prev) => (prev === "hearing" ? "deaf" : "hearing"));
  };

  return (
    <div className="flex h-screen bg-background">
      <div className="w-80">
        <InteractionPanel
          onSuggestionClick={handleSuggestionClick}
          onSendMessage={handleSendMessage}
        />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b bg-background">
          <TurnToggle currentTurn={turnMode} onToggle={handleTurnToggle} />
        </div>
        <div className="flex-1">
          <ChatArea messages={messages} isTyping={isTyping} />
        </div>
      </div>
      <div className="w-80">
        <AvatarPanel 
          currentMessage={currentMessage}
          turnMode={turnMode}
          isTranslating={isTranslating}
        />
      </div>
    </div>
  );
};

export default Index;