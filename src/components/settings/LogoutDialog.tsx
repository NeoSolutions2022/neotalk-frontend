
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { LogOut, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface LogoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userEmail?: string;
}

export function LogoutDialog({ open, onOpenChange, userEmail }: LogoutDialogProps) {
  const handleLogout = () => {
    // Implement actual logout logic here
    console.log("Logging out...");
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl">
            Tem certeza de que deseja sair?
          </AlertDialogTitle>
          <AlertDialogDescription className="space-y-4">
            <p>
              Se você sair agora, precisará fazer login novamente para acessar sua
              conta.
            </p>
            {userEmail && (
              <p className="text-sm text-muted-foreground">
                Conta atual: {userEmail}
              </p>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col space-y-4 sm:space-y-0">
          <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-end">
            <AlertDialogCancel asChild>
              <Button
                variant="outline"
                className="w-full sm:w-auto"
              >
                Cancelar
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button
                variant="destructive"
                className="w-full sm:w-auto"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sair da Conta
              </Button>
            </AlertDialogAction>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <HelpCircle className="h-4 w-4" />
            <span>Precisa de ajuda?</span>
            <Link
              to="/dashboard/support"
              className="text-neotalk-primary hover:underline"
              onClick={() => onOpenChange(false)}
            >
              Central de Suporte
            </Link>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
