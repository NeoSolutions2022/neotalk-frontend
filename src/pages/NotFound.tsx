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

export default NotFound;import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
