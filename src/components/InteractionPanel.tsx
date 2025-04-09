import { useState } from "react";
import { Button } from "./ui/button";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { chatFlow } from "@/config/chatFlow";

interface InteractionPanelProps {
  suggestions?: string[];
  inputType?: "text" | "buttons";
  onUserResponse: (userInput: string) => void;
  onSuggestionClick: (suggestion: string) => void;
  onSendMessage: (message: string) => void;
  onPreviewVideo: (videoUrl: string) => void;
}

export const InteractionPanel = ({
  suggestions = [],
  inputType = "buttons",
  onUserResponse,
  onSuggestionClick,
  onSendMessage,
  onPreviewVideo,
}: InteractionPanelProps) => {
  const isMobile = useIsMobile();

  // Paginação
  const perPage = 4;
  const totalPages = Math.ceil(suggestions.length / perPage);
  const [page, setPage] = useState(0);
  const paged = suggestions.slice(page * perPage, page * perPage + perPage);

  // Busca vídeo para cada sugestão
  const getVideoUrl = (s: string) => {
    const key = Object.keys(chatFlow).find((k) => chatFlow[k].message === s) as
      | keyof typeof chatFlow
      | undefined;
    const step = key ? chatFlow[key] : undefined;
    return step?.previewVideoId || step?.videoId || null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem("message") as HTMLInputElement;
    if (input.value.trim()) {
      onSendMessage(input.value.trim());
      input.value = "";
    }
  };

  const renderPager = () => (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setPage((p) => Math.max(p - 1, 0))}
        disabled={page === 0}
        className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
      >
        <ChevronLeft />
      </button>

      {isMobile ? (
        // no mobile, lista em coluna
        <div className="flex flex-col gap-2 flex-1">
          {paged.map((s) => {
            const url = getVideoUrl(s);
            return (
              <div key={s} className="flex items-center gap-2">
                {url && (
                  <button
                    onClick={() => onPreviewVideo(url!)}
                    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                  >
                    <Play className="h-5 w-5" />
                  </button>
                )}
                <button
                  onClick={() => onSuggestionClick(s)}
                  className="px-3 py-1 bg-white rounded shadow-sm hover:bg-gray-50 text-left"
                >
                  {s}
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        // no desktop, grid 2x2
        <div className="grid grid-cols-2 gap-2 flex-1">
          {paged.map((s) => {
            const url = getVideoUrl(s);
            return (
              <div key={s} className="flex items-center gap-2">
                {url && (
                  <button
                    onClick={() => onPreviewVideo(url!)}
                    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                  >
                    <Play className="h-5 w-5" />
                  </button>
                )}
                <button
                  onClick={() => onSuggestionClick(s)}
                  className="px-3 py-1 bg-white rounded shadow-sm hover:bg-gray-50 text-left"
                >
                  {s}
                </button>
              </div>
            );
          })}
        </div>
      )}

      <button
        onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
        disabled={page >= totalPages - 1}
        className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
      >
        <ChevronRight />
      </button>
    </div>
  );

  if (inputType === "text") {
    // input de texto segue igual
    return (
      <div className="p-4 border-t">
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

  // se for buttons, renderiza o pager com grid de 4
  return <div className="p-4">{renderPager()}</div>;
};
