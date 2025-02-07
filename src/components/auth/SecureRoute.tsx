
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";

interface SecureRouteProps {
  children: React.ReactNode;
}

export function SecureRoute({ children }: SecureRouteProps) {
  const { isAuthenticated, checkSession, isLoading } = useAuth();
  const location = useLocation();

  // Check session on route change
  checkSession();

  if (isLoading) {
    return (
      <div 
        className="flex items-center justify-center min-h-screen"
        role="status"
        aria-label="Verificando autenticação"
      >
        <Loader2 className="h-8 w-8 animate-spin text-primary" aria-hidden="true" />
        <span className="sr-only">Carregando...</span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <main role="main" className="focus:outline-none" tabIndex={-1}>
      <a 
        href="#main-content" 
        className="skip-to-content"
      >
        Pular para o conteúdo principal
      </a>
      <div id="main-content">
        {children}
      </div>
    </main>
  );
}
