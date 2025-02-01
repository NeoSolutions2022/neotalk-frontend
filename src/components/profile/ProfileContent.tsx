import { useState } from "react";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import {
  User,
  Settings,
  CreditCard,
  History,
  ChevronRight,
  Camera,
} from "lucide-react";

export function ProfileContent() {
  const { toast } = useToast();
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    plan: "Professional",
    avatar: "/placeholder.svg",
  });

  const handleAvatarUpload = () => {
    toast({
      title: "Funcionalidade em desenvolvimento",
      description: "A troca de avatar estará disponível em breve.",
    });
  };

  const sections = [
    {
      title: "Configurações da Conta",
      icon: Settings,
      description: "Gerencie suas preferências, idioma e segurança",
      url: "/dashboard/settings",
    },
    {
      title: "Assinatura e Pagamento",
      icon: CreditCard,
      description: "Visualize e gerencie seu plano atual",
      url: "/dashboard/settings#subscription",
    },
    {
      title: "Histórico de Traduções",
      icon: History,
      description: "Veja suas traduções recentes",
      url: "/dashboard/history",
    },
  ];

  return (
    <SidebarInset>
      <div className="h-16 border-b flex items-center px-6 gap-6">
        <SidebarTrigger />
        <h1 className="text-xl font-semibold">Meu Perfil</h1>
      </div>
      <div className="p-6 space-y-6 max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6 p-6 bg-card rounded-lg border">
          <div className="relative group">
            <Avatar className="w-24 h-24">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>
                <User className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>
            <Button
              variant="secondary"
              size="icon"
              className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handleAvatarUpload}
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-muted-foreground">{user.email}</p>
            <div className="mt-2">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-sm font-medium text-primary">
                Plano {user.plan}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Access Sections */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Card
              key={section.title}
              className="group transition-shadow hover:shadow-lg"
            >
              <a href={section.url} className="block h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <section.icon className="h-5 w-5 text-primary" />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    {section.description}
                  </p>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </SidebarInset>
  );
}