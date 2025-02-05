import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import {
  User,
  Shield,
  KeyRound,
  LogOut,
  CreditCard,
  History,
  Download,
  Smartphone,
  Lock,
  FileText,
  Camera,
} from "lucide-react";

export function ProfileContent() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    plan: "Professional",
    avatar: "/placeholder.svg",
  });

  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const handleAvatarUpload = () => {
    toast({
      title: "Funcionalidade em desenvolvimento",
      description: "A troca de avatar estará disponível em breve.",
    });
  };

  const handleSaveChanges = () => {
    toast({
      title: "Alterações salvas",
      description: "Suas informações foram atualizadas com sucesso!",
    });
  };

  const handleManagePlan = () => {
    navigate("/dashboard/pricing");
  };

  const handleDownloadInvoice = () => {
    toast({
      title: "Download iniciado",
      description: "Seu documento está sendo baixado.",
    });
  };

  const handleLogoutAllDevices = () => {
    toast({
      title: "Sessões encerradas",
      description: "Todas as sessões ativas foram encerradas com sucesso.",
    });
  };

  return (
    <SidebarInset>
      <div className="h-16 border-b flex items-center px-6 gap-6">
        <SidebarTrigger />
        <h1 className="text-xl font-semibold">Meu Perfil</h1>
      </div>
      <div className="p-6 space-y-6 max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6 p-6 bg-card rounded-lg border">
          <div className="relative group">
            <Avatar className="w-24 h-24">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>
                <User className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>
            <Button
              variant="secondary"
              size="icon"
              className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handleAvatarUpload}
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-muted-foreground">{user.email}</p>
            <div className="mt-2">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-sm font-medium text-primary">
                Plano {user.plan}
              </span>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Informações Pessoais
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" defaultValue={user.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" defaultValue={user.email} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="current-password">Senha Atual</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="new-password">Nova Senha</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </div>
            <Button onClick={handleSaveChanges}>Salvar Alterações</Button>
          </CardContent>
        </Card>

        {/* Plan and Subscription */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              Plano e Assinatura
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="font-semibold">Plano Atual: {user.plan}</h3>
                <p className="text-sm text-muted-foreground">
                  Próxima cobrança em: 15/04/2024
                </p>
              </div>
              <Button onClick={handleManagePlan}>Gerenciar Plano</Button>
            </div>
            <Separator />
            <div className="space-y-2">
              <h4 className="font-medium">Histórico de Pagamentos</h4>
              <div className="space-y-2">
                {[
                  { date: "15/03/2024", value: "R$ 97,00" },
                  { date: "15/02/2024", value: "R$ 97,00" },
                ].map((payment, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-2 hover:bg-muted/50 rounded-md"
                  >
                    <div>
                      <p className="font-medium">{payment.value}</p>
                      <p className="text-sm text-muted-foreground">
                        {payment.date}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleDownloadInvoice}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Segurança
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Autenticação em Dois Fatores</Label>
                <p className="text-sm text-muted-foreground">
                  Adicione uma camada extra de segurança à sua conta
                </p>
              </div>
              <Switch
                checked={twoFactorEnabled}
                onCheckedChange={setTwoFactorEnabled}
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4" />
                    <span>Dispositivos Conectados</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    2 dispositivos ativos
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={handleLogoutAllDevices}
                >
                  Encerrar Todas as Sessões
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                <span>Permissões e Privacidade</span>
              </div>
              <div className="grid gap-2">
                <Button variant="outline" className="justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Termos de Uso
                </Button>
                <Button variant="outline" className="justify-start">
                  <Shield className="h-4 w-4 mr-2" />
                  Política de Privacidade
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarInset>
  );
}