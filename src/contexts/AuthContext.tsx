
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserType | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  checkSession: () => void;
}

interface UserType {
  id: string;
  email: string;
  name: string;
  lastActive: Date;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
  let sessionTimer: number;

  useEffect(() => {
    checkSession();
    return () => {
      if (sessionTimer) window.clearTimeout(sessionTimer);
    };
  }, []);

  const checkSession = () => {
    const session = localStorage.getItem("session");
    if (session) {
      const parsedSession = JSON.parse(session);
      const now = new Date().getTime();
      if (now - parsedSession.lastActive < SESSION_TIMEOUT) {
        setIsAuthenticated(true);
        setUser(parsedSession.user);
        resetSessionTimer();
      } else {
        logout();
      }
    }
  };

  const resetSessionTimer = () => {
    if (sessionTimer) window.clearTimeout(sessionTimer);
    sessionTimer = window.setTimeout(logout, SESSION_TIMEOUT);
    if (user) {
      const session = {
        user,
        lastActive: new Date().getTime(),
      };
      localStorage.setItem("session", JSON.stringify(session));
    }
  };

  const login = async (email: string, password: string) => {
    try {
      // Simulate API call - replace with actual authentication
      const mockUser = {
        id: "1",
        email,
        name: "User",
        lastActive: new Date(),
      };
      setUser(mockUser);
      setIsAuthenticated(true);
      resetSessionTimer();
      navigate("/dashboard");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao fazer login",
        description: "Email ou senha incorretos.",
      });
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("session");
    if (sessionTimer) window.clearTimeout(sessionTimer);
    navigate("/login");
    toast({
      title: "Sessão encerrada",
      description: "Você foi desconectado com sucesso.",
    });
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, checkSession }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
