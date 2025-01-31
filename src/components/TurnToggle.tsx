import { Mic, Hand } from "lucide-react";
import { Button } from "./ui/button";
import { TurnMode } from "@/types";

interface TurnToggleProps {
  currentTurn: TurnMode;
  onToggle: () => void;
}

export const TurnToggle = ({ currentTurn, onToggle }: TurnToggleProps) => {
  return (
    <Button
      onClick={onToggle}
      variant="outline"
      className="gap-2"
      aria-label="Alternar Turno"
    >
      {currentTurn === "hearing" ? (
        <>
          <Mic className="h-4 w-4" />
          Modo Ouvinte
        </>
      ) : (
        <>
          <Hand className="h-4 w-4" />
          Modo Surdo
        </>
      )}
    </Button>
  );
};