import { Button } from "./ui/button";
import { Play } from "lucide-react"; // Ícone de play
import { useIsMobile } from "@/hooks/use-mobile";

interface InteractionPanelProps {
  suggestions?: string[];
  inputType?: "text" | "buttons";
  onUserResponse: (userInput: string) => void;
  onSuggestionClick: (suggestion: string) => void;
  onSendMessage: (message: string) => void;
  onPreviewVideo: (videoUrl: string) => void; // ✅ Nova função para pré-visualizar vídeo
}

export const InteractionPanel = ({
  suggestions = [],
  inputType = "buttons",
  onUserResponse,
  onSuggestionClick,
  onSendMessage,
  onPreviewVideo, // ✅ Adicionamos essa função
}: InteractionPanelProps) => {
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem("message") as HTMLInputElement;
    if (input.value.trim()) {
      onSendMessage(input.value);
      input.value = "";
    }
  };

  if (isMobile) {
    return (
      <div className="space-y-4">
        {inputType === "buttons" && (
          <div className="mobile-suggestions">
            {suggestions.map((suggestion) => (
              <div key={suggestion} className="flex items-center gap-2">
                {suggestion === "Sou visitante" && (
                  <button
                    onClick={() => onPreviewVideo("https://player.vimeo.com/video/1063283439")} // 🚨 Link correto
                    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                  >
                    <Play className="h-5 w-5" />
                  </button>
                )}
                <button
                  className="mobile-suggestion-button"
                  onClick={() => onSuggestionClick(suggestion)}
                >
                  {suggestion}
                </button>
              </div>
            ))}
          </div>
        )}
        {inputType === "text" && (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              name="message"
              placeholder="Digite sua mensagem..."
              className="flex-1 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
            <Button type="submit" className="bg-primary text-white">
              Enviar
            </Button>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-[76.6%] border-r bg-background">
      <div className="flex-1 p-4 space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">Sugestões</h3>
        {inputType === "buttons" && (
          <div className="flex">
            {suggestions.map((suggestion) => (
              <div key={suggestion} className="flex items-center gap-2">
                {suggestion === "Sou visitante" && (
                  <button
                    onClick={() => onPreviewVideo("https://player.vimeo.com/video/1063283439")} // 🚨 Link correto
                    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                  >
                    <Play className="h-5 w-5" />
                  </button>
                )}
                <button
                  className="suggestion-button"
                  onClick={() => onSuggestionClick(suggestion)}
                >
                  {suggestion}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {inputType === "text" && (
        <div className="p-4 border-t mt-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                name="message"
                placeholder="Digite sua mensagem..."
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              <Button type="submit" className="w-full bg-primary text-white">
                Enviar
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
