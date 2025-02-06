
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface SecureRouteProps {
  children: React.ReactNode;
}

export function SecureRoute({ children }: SecureRouteProps) {
  const { isAuthenticated, checkSession } = useAuth();
  const location = useLocation();

  // Check session on route change
  checkSession();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
