import { useEffect, useRef } from "react";
import { Play } from "lucide-react"; // Ícone de Play

interface Message {
  id: number;
  text: string;
  sender: "user" | "system";
  timestamp: string;
  videoUrl?: string; // ✅ Campo opcional para associar vídeo
}

interface ChatAreaProps {
  messages: Message[];
  isTyping?: boolean;
  onPlayVideo: (videoUrl: string) => void;
}

export const ChatArea = ({ messages, isTyping, onPlayVideo }: ChatAreaProps) => {
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

      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => {

          return (
            <div key={message.id} className="flex flex-col">
              <div className={`message-bubble ${message.sender}`}>
                <div className="flex items-center gap-2">
                  {/* ✅ Botão Play só aparece se houver um vídeo associado */}
                  {message.videoUrl && (
                    <button
                      onClick={() => onPlayVideo(message.videoUrl!)}
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                    >
                      <Play className="h-5 w-5" />
                    </button>
                  )}
                  <span>{message.text}</span>
                </div>
                <div className="text-xs opacity-70 mt-1">{message.timestamp}</div>
              </div>
            </div>
          );
        })}
        
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
