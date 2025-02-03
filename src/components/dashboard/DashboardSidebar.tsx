import {
  History,
  Home,
  LogOut,
  Settings,
  Languages,
  User,
  CreditCard,
  Rocket,
  ThumbsUp,
  BarChart,
  Bell,
  Users,
  HelpCircle,
  BookOpen,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar";
import { useToast } from "@/hooks/use-toast";
import { SidebarSection } from "./sidebar/SidebarSection";

const mainNavigation = [
  { title: "Home", icon: Home, url: "/dashboard" },
  { title: "Tradução em tempo real", icon: Languages, url: "/dashboard/translate" },
  { title: "Histórico", icon: History, url: "/dashboard/history" },
  { title: "Minhas Estatísticas", icon: BarChart, url: "/dashboard/statistics" },
  { title: "Notificações", icon: Bell, url: "/dashboard/notifications", badge: 3 },
];

const accountNavigation = [
  { title: "Meu Perfil", icon: User, url: "/dashboard/profile" },
  { title: "Configurações", icon: Settings, url: "/dashboard/settings" },
  { title: "Planos e Assinaturas", icon: CreditCard, url: "/dashboard/settings#subscription" },
];

const extraFeatures = [
  { title: "Tutorial Interativo", icon: BookOpen, url: "/dashboard/onboarding" },
  { title: "Feedback de Tradução", icon: ThumbsUp, url: "/dashboard/feedback" },
  { title: "Comunidade", icon: Users, url: "/dashboard/community" },
  { title: "Suporte", icon: HelpCircle, url: "/dashboard/support" },
  { title: "Sair", icon: LogOut, url: "/logout" },
];

export function DashboardSidebar() {
  const { toast } = useToast();

  const handleItemClick = (e: React.MouseEvent, item: { title: string; comingSoon?: boolean }) => {
    if (item.comingSoon) {
      e.preventDefault();
      toast({
        title: "Em breve",
        description: `A funcionalidade "${item.title}" estará disponível em breve!`,
      });
    }
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarSection
          label="Navegação Principal"
          items={mainNavigation}
          onItemClick={handleItemClick}
        />
        <SidebarSection
          label="Conta"
          items={accountNavigation}
          onItemClick={handleItemClick}
        />
        <SidebarSection
          label="Extras"
          items={extraFeatures}
          onItemClick={handleItemClick}
        />
      </SidebarContent>
    </Sidebar>
  );
}