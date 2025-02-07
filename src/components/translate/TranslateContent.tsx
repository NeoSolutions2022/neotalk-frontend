import { useState } from "react";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mic, Camera, Type, Play, Download, StopCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type InputMode = "text" | "audio" | "camera";

export function TranslateContent() {
  const [inputMode, setInputMode] = useState<InputMode>("text");
  const [inputText, setInputText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const { toast } = useToast();

  const handleModeChange = (mode: InputMode) => {
    setInputMode(mode);
    if (mode === "audio" || mode === "camera") {
      toast({
        title: "Em breve",
        description: "Esta funcionalidade estará disponível em breve!",
      });
    }
  };

  const handleTranslate = () => {
    if (!inputText.trim()) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Por favor, insira algum texto para traduzir.",
      });
      return;
    }
    // Translation logic will be implemented here
    toast({
      title: "Tradução iniciada",
      description: "Sua tradução está sendo processada...",
    });
  };

  return (
    <SidebarInset>
      <div className="h-16 border-b flex items-center px-6 gap-6">
        <SidebarTrigger />
        <h1 className="text-xl font-semibold">Tradução em Tempo Real</h1>
      </div>
      
      <div className="p-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Escolha o método de entrada</h2>
          <div className="flex gap-4 mb-6">
            <Button
              variant={inputMode === "text" ? "default" : "outline"}
              onClick={() => handleModeChange("text")}
              className="flex-1"
            >
              <Type className="mr-2 h-4 w-4" />
              Texto
            </Button>
            <Button
              variant={inputMode === "audio" ? "default" : "outline"}
              onClick={() => handleModeChange("audio")}
              className="flex-1"
            >
              <Mic className="mr-2 h-4 w-4" />
              Áudio
            </Button>
            <Button
              variant={inputMode === "camera" ? "default" : "outline"}
              onClick={() => handleModeChange("camera")}
              className="flex-1"
            >
              <Camera className="mr-2 h-4 w-4" />
              Libras
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-4">
            <h3 className="text-lg font-semibold mb-4">Entrada</h3>
            <div className="space-y-4">
              <Textarea
                placeholder="Digite o texto que deseja traduzir..."
                className={cn(
                  "min-h-[200px] resize-none",
                  inputMode !== "text" && "opacity-50"
                )}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={inputMode !== "text"}
              />
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => setInputText("")}
                  disabled={!inputText}
                >
                  Limpar
                </Button>
                <Button onClick={handleTranslate} disabled={!inputText.trim()}>
                  Traduzir
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="text-lg font-semibold mb-4">Saída</h3>
            <div className="min-h-[200px] flex items-center justify-center border rounded-md bg-muted/50">
              <p className="text-muted-foreground">
                A tradução aparecerá aqui
              </p>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline" disabled>
                <Download className="mr-2 h-4 w-4" />
                Baixar
              </Button>
              <Button variant="outline" disabled>
                <Play className="mr-2 h-4 w-4" />
                Reproduzir
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </SidebarInset>
  );
}