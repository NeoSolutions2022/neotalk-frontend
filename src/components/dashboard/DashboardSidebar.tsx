
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
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useToast } from "@/hooks/use-toast";
import { SidebarSection } from "./sidebar/SidebarSection";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

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
  { title: "Planos e Assinaturas", icon: CreditCard, url: "/dashboard/pricing" },
];

const extraFeatures = [
  { title: "Tutorial Interativo", icon: BookOpen, url: "/dashboard/tutorial", comingSoon: true },
  { title: "Feedback de Tradução", icon: ThumbsUp, url: "/dashboard/feedback" },
  { title: "Comunidade NeoTalk", icon: Users, url: "/dashboard/community", comingSoon: true },
  { title: "Suporte", icon: HelpCircle, url: "/dashboard/support" },
  { title: "Sair", icon: LogOut, url: "/login" },
];

export function DashboardSidebar() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleItemClick = (e: React.MouseEvent, item: { title: string; url: string; comingSoon?: boolean }) => {
    e.preventDefault();
    
    if (item.comingSoon) {
      toast({
        title: "Em breve",
        description: `A funcionalidade "${item.title}" estará disponível em breve!`,
      });
      return;
    }

    if (item.title === "Sair") {
      // Add logout logic here
      toast({
        title: "Logout",
        description: "Você foi desconectado com sucesso!",
      });
    }
    
    navigate(item.url);
  };

  return (
    <Sidebar>
      <div className="h-16 border-b flex items-center px-6">
        {isMobile && <SidebarTrigger />}
        <span className="text-xl font-semibold">NeoTalk</span>
      </div>
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
