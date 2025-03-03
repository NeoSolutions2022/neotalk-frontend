import { Maximize2, Minimize2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { TurnMode } from "@/types";
import { useIsMobile } from "@/hooks/use-mobile";

interface AvatarPanelProps {
  currentMessage?: string;
  currentVideo?: string;
  turnMode: TurnMode;
  isTranslating: boolean;
}

export const AvatarPanel = ({ currentVideo, turnMode, isTranslating }: AvatarPanelProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const isMobile = useIsMobile(); // Detecta se está no mobile

  return (
    <div className="flex flex-col h-full border-l bg-background">
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold">Avatar 3D</h2>

      </div>

      {/* 🔥 O vídeo agora usa aspect-ratio para se ajustar dinamicamente */}
      <div className={`relative w-full ${isMobile ? "h-[75vh]" : "h-full"} flex justify-center`}>
        {currentVideo ? (
          <div className="relative w-full" style={{ paddingTop: "110%" }}> 
            <iframe
              title="vimeo-player"
              src={`https://player.vimeo.com/video/1062109672?h=965ced62e8?autoplay=1&loop=1&background=1&muted=1`}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <p className="text-muted-foreground text-center">Avatar 3D será exibido aqui</p>
        )}
      </div>
    </div>
  );
};
