import { MessageCircle, Users, Languages } from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface InteractionPanelProps {
  onSuggestionClick: (suggestion: string) => void;
  onSendMessage: (message: string) => void;
}

export const InteractionPanel = ({
  onSuggestionClick,
  onSendMessage,
}: InteractionPanelProps) => {
  const suggestions = [
    "Qual o telefone da unidade?",
    "Vocês atendem aos sábados?",
    "Posso marcar um horário online?",
  ];
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
        <div className="mobile-suggestions">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              className="mobile-suggestion-button"
              onClick={() => onSuggestionClick(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>
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
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full border-r bg-background">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold mb-4">Painel de Interação</h2>
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start" size="lg">
            <MessageCircle className="mr-2 h-4 w-4" />
            Perguntas Frequentes
          </Button>
          <Button variant="ghost" className="w-full justify-start" size="lg">
            <Users className="mr-2 h-4 w-4" />
            Pedidos Comuns
          </Button>
          <Button variant="ghost" className="w-full justify-start" size="lg">
            <Languages className="mr-2 h-4 w-4" />
            Traduções e Dúvidas
          </Button>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">Sugestões</h3>
        <div className="space-y-2">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              className="suggestion-button"
              onClick={() => onSuggestionClick(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

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
    </div>
  );
};