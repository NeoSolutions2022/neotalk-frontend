import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { SidebarItem } from "./SidebarItem";
import { LucideIcon } from "lucide-react";

interface NavigationItem {
  title: string;
  icon: LucideIcon;
  url: string;
  comingSoon?: boolean;
  badge?: number;
  onClick?: (e: React.MouseEvent) => void;
}

interface SidebarSectionProps {
  label: string;
  items: NavigationItem[];
  onItemClick?: (e: React.MouseEvent, item: NavigationItem) => void;
}

export function SidebarSection({ label, items, onItemClick }: SidebarSectionProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarItem
              key={item.title}
              {...item}
              onClick={(e) => onItemClick?.(e, item)}
            />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}