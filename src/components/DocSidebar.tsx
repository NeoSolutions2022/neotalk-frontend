import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavigationMenu } from "./navigation/NavigationMenu";
import { ScrollArea } from "./ui/scroll-area";

export interface NavItem {
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
      { title: "Webhooks e Notificações", href: "#webhooks" },
      { title: "Autenticação e Gestão de Usuários", href: "#user-management" },
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "#introduction";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = `#${section.id}`;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out transform md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-full flex flex-col">
          <div className="p-4">
            <img
              src="/lovable-uploads/e027ab75-56fd-4365-b9da-c6ffee6e7e85.png"
              alt="NeoTalk Logo"
              className="h-8 mb-8"
            />
          </div>
          <ScrollArea className="flex-1 px-4 pb-4">
            <nav>
              <NavigationMenu 
                navigation={navigation} 
                activeSection={activeSection}
                onSectionClick={scrollToSection}
              />
            </nav>
          </ScrollArea>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default DocSidebar;
