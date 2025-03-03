import { Maximize2, Minimize2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { TurnMode } from "@/types";

interface AvatarPanelProps {
  currentMessage?: string;
  currentVideo?: string;
  turnMode: TurnMode;
  isTranslating: boolean;
}

export const AvatarPanel = ({ currentMessage, currentVideo, turnMode, isTranslating }: AvatarPanelProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const getTranslationText = () => {
    if (!isTranslating) return null;
    return turnMode === "hearing" 
      ? "Traduzindo para Libras..." 
      : "Traduzindo para Áudio...";
  };

  return (
    <div className="flex flex-col h-full border-l bg-background">
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold">Avatar 3D</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        </Button>
      </div>

      <div className={`flex-1 ${isExpanded ? "" : "hidden"}`}>
        <div className="relative w-full h-full overflow-hidden">
          {currentVideo ? (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              style={{
                width: "22.5vw",
                height: "88vh",
                position: "absolute",
                top: "0",
                paddingRight: "20px",
                pointerEvents: "none", // 🔒 Bloqueia interação
                borderRadius: "8px",
              }}
              src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1&mute=1&loop=1&playlist=${currentVideo}&controls=0&modestbranding=1&showinfo=0&rel=0&playsinline=1&disablekb=1&fs=0&iv_load_policy=3`}
              title="Avatar 3D"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <p className="text-muted-foreground text-center">Avatar 3D será exibido aqui</p>
          )}
        </div>
      </div>
    </div>
  );
};
