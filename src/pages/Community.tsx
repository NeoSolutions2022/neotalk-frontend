import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CommunityHeader } from "@/components/community/CommunityHeader";
import { TopicList } from "@/components/community/TopicList";
import { CreateTopicForm } from "@/components/community/CreateTopicForm";
import { CategoryList } from "@/components/community/CategoryList";

const Community = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Implementation for search functionality will be added later
    toast({
      title: "Busca em desenvolvimento",
      description: "A funcionalidade de busca estará disponível em breve!",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <CommunityHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
        {/* Sidebar with Categories */}
        <div className="lg:col-span-3">
          <CategoryList />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-9">
          <Card className="p-6">
            <div className="flex flex-col space-y-6">
              {/* Search Bar */}
              <div className="flex gap-2">
                <Input
                  placeholder="Pesquisar na comunidade..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={() => handleSearch(searchQuery)}>
                  Buscar
                </Button>
              </div>

              {/* Tabs for different views */}
              <Tabs defaultValue="recent" className="w-full">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="recent">Recentes</TabsTrigger>
                  <TabsTrigger value="popular">Populares</TabsTrigger>
                  <TabsTrigger value="unanswered">Sem Resposta</TabsTrigger>
                </TabsList>

                <TabsContent value="recent">
                  <TopicList filter="recent" />
                </TabsContent>
                <TabsContent value="popular">
                  <TopicList filter="popular" />
                </TabsContent>
                <TabsContent value="unanswered">
                  <TopicList filter="unanswered" />
                </TabsContent>
              </Tabs>

              {/* Create New Topic Form */}
              <CreateTopicForm />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;