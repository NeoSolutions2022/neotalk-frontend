import { ErrorPage } from "@/components/error/ErrorPage";
import { Search } from "lucide-react";

const NotFound = () => {
  return (
    <ErrorPage
      title="Oops! Parece que você se perdeu..."
      description="A página que você está procurando não existe ou foi movida. Mas não se preocupe! Você pode voltar para a Home ou acessar o Dashboard."
      illustration={
        <Search className="h-32 w-32 text-primary animate-float" />
      }
      primaryAction={{
        label: "Voltar ao Dashboard",
        href: "/dashboard",
      }}
      secondaryAction={{
        label: "Ir para a Página Inicial",
        href: "/",
      }}
      showSearch={true}
    />
  );
};

export default NotFound;