import { LucideIcon } from "lucide-react";
import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  title: string;
  icon: LucideIcon;
  url: string;
  comingSoon?: boolean;
  badge?: number;
  onClick?: (e: React.MouseEvent) => void;
}

export function SidebarItem({ 
  title, 
  icon: Icon, 
  url, 
  comingSoon,
  badge,
  onClick 
}: SidebarItemProps) {
  const location = useLocation();
  const isActive = location.pathname === url;

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <a
          href={url}
          className={cn(
            "flex items-center gap-2 relative transition-colors",
            isActive && "text-neotalk-primary font-medium"
          )}
          onClick={onClick}
        >
          <Icon className={cn(
            "h-4 w-4",
            isActive && "text-neotalk-primary"
          )} />
          <span>{title}</span>
          {badge !== undefined && badge > 0 && (
            <span className="absolute right-0 top-0 -mt-1 -mr-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
              {badge > 99 ? '99+' : badge}
            </span>
          )}
          {comingSoon && (
            <span className="ml-2 rounded-full bg-neotalk-warning/10 px-2 py-0.5 text-xs font-medium text-neotalk-warning">
              Em breve
            </span>
          )}
          {isActive && (
            <span className="absolute left-0 -ml-2 h-4 w-1 rounded-r-full bg-neotalk-primary" />
          )}
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}