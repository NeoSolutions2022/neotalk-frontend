import { Card } from "@/components/ui/card";
import { 
  BookOpen, 
  Lightbulb, 
  Flame, 
  Users 
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Dúvidas sobre Tradução",
    icon: BookOpen,
    count: 156,
  },
  {
    id: 2,
    name: "Sugestões de Melhorias",
    icon: Lightbulb,
    count: 89,
  },
  {
    id: 3,
    name: "Novidades e Atualizações",
    icon: Flame,
    count: 45,
  },
  {
    id: 4,
    name: "Espaço para Networking",
    icon: Users,
    count: 234,
  },
];

export function CategoryList() {
  return (
    <Card className="p-4">
      <h2 className="text-xl font-semibold mb-4">Categorias</h2>
      <div className="space-y-2">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Icon className="h-5 w-5 text-neotalk-primary" />
                <span>{category.name}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {category.count}
              </span>
            </button>
          );
        })}
      </div>
    </Card>
  );
}