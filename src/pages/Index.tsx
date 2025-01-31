import { useState } from "react";
import { InteractionPanel } from "@/components/InteractionPanel";
import { ChatArea } from "@/components/ChatArea";
import { AvatarPanel } from "@/components/AvatarPanel";

interface Message {
  id: number;
  text: string;
  sender: "user" | "system";
  timestamp: string;
}

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

  const handleSuggestionClick = (suggestion: string) => {
    setCurrentMessage(suggestion);
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

  return (
    <div className="flex h-screen bg-background">
      <div className="w-80">
        <InteractionPanel
          onSuggestionClick={handleSuggestionClick}
          onSendMessage={handleSendMessage}
        />
      </div>
      <div className="flex-1">
        <ChatArea messages={messages} isTyping={isTyping} />
      </div>
      <div className="w-80">
        <AvatarPanel currentMessage={currentMessage} />
      </div>
    </div>
  );
};

export default Index;