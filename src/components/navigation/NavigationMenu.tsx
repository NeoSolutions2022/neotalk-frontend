
import { NavItem } from "@/components/DocSidebar";
import { cn } from "@/lib/utils";

interface NavigationMenuProps {
  navigation: NavItem[];
  activeSection: string;
  onSectionClick: (href: string) => void;
}

const NavLink = ({ item, depth = 0, activeSection, onSectionClick }: { 
  item: NavItem; 
  depth?: number;
  activeSection: string;
  onSectionClick: (href: string) => void;
}) => {
  const isActive = activeSection === item.href;

  return (
    <div className={cn("flex flex-col", depth > 0 && "ml-4")}>
      <button
        onClick={() => onSectionClick(item.href)}
        className={cn(
          "py-2 px-4 text-sm transition-colors duration-200 rounded-lg text-left",
          isActive
            ? "bg-neotalk-blue text-white"
            : "text-neotalk-dark hover:bg-neotalk-light"
        )}
      >
        {item.title}
      </button>
      {item.items?.map((subItem) => (
        <NavLink 
          key={subItem.href} 
          item={subItem} 
          depth={depth + 1} 
          activeSection={activeSection}
          onSectionClick={onSectionClick}
        />
      ))}
    </div>
  );
};

export const NavigationMenu = ({ navigation, activeSection, onSectionClick }: NavigationMenuProps) => {
  return (
    <div className="space-y-1">
      {navigation.map((item) => (
        <NavLink 
          key={item.href} 
          item={item} 
          activeSection={activeSection}
          onSectionClick={onSectionClick}
        />
      ))}
    </div>
  );
};
