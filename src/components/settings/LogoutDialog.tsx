
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { LogOut, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface LogoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userEmail?: string;
}

export function LogoutDialog({
  open,
  onOpenChange,
  userEmail,
}: LogoutDialogProps) {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    onOpenChange(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onOpenChange(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent 
        className="sm:max-w-[425px]"
        role="alertdialog"
        aria-labelledby="logout-dialog-title"
        aria-describedby="logout-dialog-description"
        onKeyDown={handleKeyDown}
      >
        <AlertDialogHeader>
          <AlertDialogTitle 
            id="logout-dialog-title"
            className="text-2xl font-bold"
          >
            Tem certeza de que deseja sair?
          </AlertDialogTitle>
          <AlertDialogDescription 
            id="logout-dialog-description"
            className="space-y-4"
          >
            <p className="text-base">
              Se você sair agora, precisará fazer login novamente para acessar sua
              conta.
            </p>
            {userEmail && (
              <p className="text-sm text-muted-foreground" aria-label={`Conta atual: ${userEmail}`}>
                Conta atual: {userEmail}
              </p>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="mt-6 flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 sm:justify-end">
          <AlertDialogCancel asChild>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto"
              aria-label="Cancelar logout"
            >
              Cancelar
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant="destructive"
              className="w-full sm:w-auto"
              onClick={handleLogout}
              aria-label="Confirmar logout"
            >
              <LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
              Sair da Conta
            </Button>
          </AlertDialogAction>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <HelpCircle className="h-4 w-4" aria-hidden="true" />
          <span>Precisa de ajuda?</span>
          <Link
            to="/dashboard/support"
            className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            onClick={() => onOpenChange(false)}
            aria-label="Ir para Central de Suporte"
          >
            Central de Suporte
          </Link>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
