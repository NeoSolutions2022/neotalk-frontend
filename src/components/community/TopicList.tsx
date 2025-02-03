import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface TopicListProps {
  filter: "recent" | "popular" | "unanswered";
}

const mockTopics = [
  {
    id: 1,
    title: "Como melhorar a precisão da tradução de sinais específicos?",
    author: "Maria Silva",
    category: "Dúvidas sobre Tradução",
    replies: 12,
    likes: 45,
    lastActivity: "2024-02-15T10:30:00",
    solved: true,
  },
  {
    id: 2,
    title: "Sugestão: Adicionar suporte para mais variações regionais",
    author: "João Santos",
    category: "Sugestões de Melhorias",
    replies: 8,
    likes: 32,
    lastActivity: "2024-02-14T15:45:00",
    solved: false,
  },
  // Add more mock topics as needed
];

export function TopicList({ filter }: TopicListProps) {
  const { toast } = useToast();

  const handleLike = (topicId: number) => {
    toast({
      title: "Curtida registrada!",
      description: "Obrigado por interagir com a comunidade.",
    });
  };

  const handleReport = (topicId: number) => {
    toast({
      title: "Denúncia registrada",
      description: "Nossa equipe irá analisar o conteúdo. Obrigado por ajudar a manter a comunidade segura!",
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-4 mt-4">
      {mockTopics.map((topic) => (
        <Card key={topic.id} className="p-4">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-semibold hover:text-neotalk-primary cursor-pointer">
                  {topic.title}
                </h3>
                {topic.solved && (
                  <Badge variant="success" className="bg-green-500">
                    Resolvido
                  </Badge>
                )}
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>por {topic.author}</span>
                <span>•</span>
                <Badge variant="outline">{topic.category}</Badge>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>{topic.replies} respostas</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleLike(topic.id)}
                className="text-muted-foreground hover:text-neotalk-primary"
              >
                <ThumbsUp className="h-4 w-4 mr-1" />
                {topic.likes}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleReport(topic.id)}
                className="text-muted-foreground hover:text-destructive"
              >
                <Flag className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}