import { useEffect, useRef } from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "system";
  timestamp: string;
}

interface ChatAreaProps {
  messages: Message[];
  isTyping?: boolean;
}

export const ChatArea = ({ messages, isTyping }: ChatAreaProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col h-full bg-secondary/30">
      <div className="p-4 border-b bg-background">
        <h2 className="text-lg font-semibold">Área de Conversação</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex flex-col">
            <div className={`message-bubble ${message.sender}`}>
              {message.text}
              <div className="text-xs opacity-70 mt-1">{message.timestamp}</div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="message-bubble system">
            <div className="typing-indicator">
              Digitando
              <span />
              <span />
              <span />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};