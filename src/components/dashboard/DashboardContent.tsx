import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Settings, Translate } from "lucide-react";

const cards = [
  {
    title: "Nova Tradução",
    description: "Inicie uma nova tradução em tempo real",
    icon: Translate,
    url: "/dashboard/translate",
  },
  {
    title: "Histórico de Traduções",
    description: "Acesse suas traduções anteriores",
    icon: History,
    url: "/dashboard/history",
  },
  {
    title: "Configurações",
    description: "Ajuste suas preferências e configurações",
    icon: Settings,
    url: "/dashboard/settings",
  },
];

export function DashboardContent() {
  return (
    <SidebarInset>
      <div className="h-16 border-b flex items-center px-6 gap-6">
        <SidebarTrigger />
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>
      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Olá! Pronto para traduzir?</h2>
          <p className="text-muted-foreground">
            Selecione uma das opções abaixo para começar
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Card key={card.title} className="group hover:shadow-lg transition-shadow">
              <a href={card.url} className="block h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <card.icon className="h-5 w-5 text-primary group-hover:text-primary/80 transition-colors" />
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </SidebarInset>
  );
}