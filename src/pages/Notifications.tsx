import React, { useState } from "react";
import { NotificationList } from "@/components/notifications/NotificationList";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Mock data - In a real app, this would come from an API
const initialNotifications = [
  {
    id: "1",
    type: "warning" as const,
    title: "Limite de uso próximo",
    message: "Você atingiu 80% do seu limite mensal de traduções",
    date: "Há 5 minutos",
    isRead: false,
  },
  {
    id: "2",
    type: "info" as const,
    title: "Nova funcionalidade disponível",
    message: "Agora você pode exportar suas estatísticas em PDF!",
    date: "Há 2 horas",
    isRead: true,
  },
  {
    id: "3",
    type: "success" as const,
    title: "Meta atingida",
    message: "Parabéns! Você completou sua meta semanal de traduções",
    date: "Há 1 dia",
    isRead: false,
  },
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    usageAlerts: true,
    newsUpdates: true,
  });
  const { toast } = useToast();

  const handleReadAll = () => {
    setNotifications(notifications.map((n) => ({ ...n, isRead: true })));
    toast({
      title: "Notificações atualizadas",
      description: "Todas as notificações foram marcadas como lidas",
    });
  };

  const handleRead = (id: string) => {
    setNotifications(
      notifications.map((n) =>
        n.id === id ? { ...n, isRead: true } : n
      )
    );
  };

  const handleSettingChange = (setting: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
    toast({
      title: "Configurações atualizadas",
      description: "Suas preferências de notificação foram salvas",
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold">Notificações</h2>
      
      <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
        <Card className="p-4">
          <NotificationList
            notifications={notifications}
            onReadAll={handleReadAll}
            onRead={handleRead}
          />
        </Card>

        <Card className="p-6 space-y-6 h-fit">
          <h3 className="text-lg font-semibold">Configurações de Notificação</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">Notificações por E-mail</Label>
              <Switch
                id="email-notifications"
                checked={settings.emailNotifications}
                onCheckedChange={() => handleSettingChange("emailNotifications")}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="push-notifications">Notificações Push</Label>
              <Switch
                id="push-notifications"
                checked={settings.pushNotifications}
                onCheckedChange={() => handleSettingChange("pushNotifications")}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="usage-alerts">Alertas de Uso</Label>
              <Switch
                id="usage-alerts"
                checked={settings.usageAlerts}
                onCheckedChange={() => handleSettingChange("usageAlerts")}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="news-updates">Novidades e Atualizações</Label>
              <Switch
                id="news-updates"
                checked={settings.newsUpdates}
                onCheckedChange={() => handleSettingChange("newsUpdates")}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}