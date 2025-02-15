import { Maximize2, Minimize2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { TurnMode } from "@/types";

interface AvatarPanelProps {
  currentMessage?: string;
  turnMode: TurnMode;
  isTranslating: boolean;
}

export const AvatarPanel = ({ currentMessage, turnMode, isTranslating }: AvatarPanelProps) => {
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
          {isExpanded ? (
            <Minimize2 className="h-4 w-4" />
          ) : (
            <Maximize2 className="h-4 w-4" />
          )}
        </Button>
      </div>

      <div className={`flex-1 ${isExpanded ? "" : "hidden"}`}>
        <div className="h-full flex items-center justify-center bg-secondary/30 p-4">
          {currentMessage ? (
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">{currentMessage}</p>
              {isTranslating && (
                <p className="text-sm text-primary animate-pulse">
                  {getTranslationText()}
                </p>
              )}
            </div>
          ) : (
            <p className="text-muted-foreground text-center">
              Avatar 3D será exibido aqui
            </p>
          )}
        </div>
      </div>
    </div>
  );
};