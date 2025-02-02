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
  Key,
  MessageSquare,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useToast } from "@/components/ui/use-toast";

const mainNavigation = [
  { title: "Home", icon: Home, url: "/dashboard" },
  { title: "Tradução em tempo real", icon: Languages, url: "/dashboard/translate" },
  { title: "Histórico", icon: History, url: "/dashboard/history" },
  { title: "Avaliação de Traduções", icon: MessageSquare, url: "/dashboard/feedback" },
];

const accountNavigation = [
  { title: "Meu Perfil", icon: User, url: "/dashboard/profile" },
  { title: "Configurações", icon: Settings, url: "/dashboard/settings" },
  { title: "Alterar Senha", icon: Key, url: "/dashboard/settings#password" },
  { title: "Planos e Assinaturas", icon: CreditCard, url: "/dashboard/settings#subscription" },
];

const extraFeatures = [
  { title: "Tutorial Interativo", icon: Rocket, url: "/dashboard/tutorial", comingSoon: true },
  { title: "Feedback de Tradução", icon: ThumbsUp, url: "/dashboard/feedback", comingSoon: false },
  { title: "Estatísticas de Uso", icon: BarChart, url: "/dashboard/stats", comingSoon: true },
  { title: "Notificações", icon: Bell, url: "/dashboard/notifications", comingSoon: true },
  { title: "Comunidade NeoTalk", icon: Users, url: "/dashboard/community", comingSoon: true },
  { title: "Suporte", icon: HelpCircle, url: "/dashboard/support" },
  { title: "Sair", icon: LogOut, url: "/logout" },
];

export function DashboardSidebar() {
  const { toast } = useToast();

  const handleComingSoonClick = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    toast({
      title: "Em breve",
      description: `A funcionalidade "${title}" estará disponível em breve!`,
    });
  };

  const renderNavigationItems = (items: typeof mainNavigation) => (
    items.map((item) => (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton asChild>
          <a
            href={item.url}
            className="flex items-center gap-2"
            onClick={(e) => {
              if ('comingSoon' in item && item.comingSoon) {
                handleComingSoonClick(e, item.title);
              }
            }}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.title}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    ))
  );

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {renderNavigationItems(mainNavigation)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Conta</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {renderNavigationItems(accountNavigation)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Extras</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {renderNavigationItems(extraFeatures)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}