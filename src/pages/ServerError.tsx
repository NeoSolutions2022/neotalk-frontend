import { ErrorPage } from "@/components/error/ErrorPage";
import { Bot } from "lucide-react";

const ServerError = () => {
  return (
    <ErrorPage
      title="Algo deu errado do nosso lado!"
      description="Encontramos um problema inesperado, mas já estamos trabalhando para resolver! Tente recarregar a página ou volte mais tarde."
      illustration={
        <Bot className="h-32 w-32 text-primary animate-bounce" />
      }
      primaryAction={{
        label: "Tentar Novamente",
        href: window.location.pathname,
      }}
      secondaryAction={{
        label: "Acessar o Suporte",
        href: "/support",
      }}
    />
  );
};

export default ServerError;