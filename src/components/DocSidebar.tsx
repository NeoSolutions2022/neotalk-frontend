import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: "Introdução",
    href: "#introduction",
  },
  {
    title: "Versionamento da API",
    href: "#versioning",
  },
  {
    title: "Autenticação e Segurança",
    href: "#auth",
    items: [
      { title: "Métodos de Autenticação", href: "#auth-methods" },
      { title: "Tokens e Segurança", href: "#tokens" },
    ],
  },
  {
    title: "Endpoints Principais",
    href: "#endpoints",
    items: [
      { title: "Tradução de Áudio e Texto para Libras", href: "#audio-text-translation" },
      { title: "Tradução de Libras para Texto e Áudio", href: "#libras-translation" },
      { title: "Integração com Vídeos e Streaming", href: "#video-integration" },
    ],
  },
  {
    title: "Exemplos de Requisição e Resposta",
    href: "#examples",
  },
  {
    title: "Erros e Respostas",
    href: "#errors",
  },
  {
    title: "Limites de Uso e Rate Limits",
    href: "#limits",
  },
  {
    title: "Boas Práticas para Desenvolvedores",
    href: "#best-practices",
  },
  {
    title: "FAQ e Suporte",
    href: "#support",
  },
];

const DocSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#introduction");

  const toggleSidebar = () => setIsOpen(!isOpen);

  const NavLink = ({ item, depth = 0 }: { item: NavItem; depth?: number }) => {
    const isActive = activeSection === item.href;

    return (
      <div className={cn("flex flex-col", depth > 0 && "ml-4")}>
        <a
          href={item.href}
          onClick={() => {
            setActiveSection(item.href);
            setIsOpen(false);
          }}
          className={cn(
            "py-2 px-4 text-sm transition-colors duration-200 rounded-lg",
            isActive
              ? "bg-neotalk-blue text-white"
              : "text-neotalk-dark hover:bg-neotalk-light"
          )}
        >
          {item.title}
        </a>
        {item.items?.map((subItem) => (
          <NavLink key={subItem.href} item={subItem} depth={depth + 1} />
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out transform md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4">
          <img
            src="/lovable-uploads/e027ab75-56fd-4365-b9da-c6ffee6e7e85.png"
            alt="NeoTalk Logo"
            className="h-8 mb-8"
          />
          <nav className="space-y-1">
            {navigation.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default DocSidebar;