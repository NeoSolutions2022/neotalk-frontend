import React from "react";
import { NotificationItem } from "./NotificationItem";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Notification {
  id: string;
  type: "info" | "warning" | "success" | "alert";
  title: string;
  message: string;
  date: string;
  isRead: boolean;
}

interface NotificationListProps {
  notifications: Notification[];
  onReadAll: () => void;
  onRead: (id: string) => void;
}

export function NotificationList({
  notifications,
  onReadAll,
  onRead,
}: NotificationListProps) {
  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center px-4">
        <h3 className="text-lg font-semibold">
          Notificações ({unreadCount} não lidas)
        </h3>
        <Button variant="ghost" size="sm" onClick={onReadAll}>
          Marcar todas como lidas
        </Button>
      </div>
      <ScrollArea className="h-[500px] px-4">
        <div className="space-y-2">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                {...notification}
                onRead={onRead}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 py-8">
              Nenhuma notificação no momento
            </p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}