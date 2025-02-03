import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CreateTopicForm() {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!title || !content || !category) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos antes de publicar.",
        variant: "destructive",
      });
      return;
    }

    // Success message
    toast({
      title: "Tópico criado com sucesso!",
      description: "Sua publicação já está disponível para a comunidade.",
    });

    // Reset form
    setTitle("");
    setContent("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold">Criar Novo Tópico</h3>
      
      <Input
        placeholder="Título do tópico"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger>
          <SelectValue placeholder="Selecione uma categoria" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="duvidas">Dúvidas sobre Tradução</SelectItem>
          <SelectItem value="sugestoes">Sugestões de Melhorias</SelectItem>
          <SelectItem value="novidades">Novidades e Atualizações</SelectItem>
          <SelectItem value="networking">Espaço para Networking</SelectItem>
        </SelectContent>
      </Select>

      <Textarea
        placeholder="Descreva seu tópico em detalhes..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="min-h-[150px]"
      />

      <Button type="submit" className="w-full">
        Publicar
      </Button>
    </form>
  );
}