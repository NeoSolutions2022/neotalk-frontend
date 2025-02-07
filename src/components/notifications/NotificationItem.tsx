import React from "react";
import { cn } from "@/lib/utils";
import { Bell, Info, AlertCircle, CheckCircle } from "lucide-react";

type NotificationType = "info" | "warning" | "success" | "alert";

interface NotificationItemProps {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  date: string;
  isRead: boolean;
  onRead: (id: string) => void;
}

const getNotificationIcon = (type: NotificationType) => {
  switch (type) {
    case "info":
      return <Info className="h-5 w-5 text-neotalk-primary" />;
    case "warning":
      return <AlertCircle className="h-5 w-5 text-neotalk-warning" />;
    case "success":
      return <CheckCircle className="h-5 w-5 text-neotalk-success" />;
    case "alert":
      return <Bell className="h-5 w-5 text-neotalk-error" />;
  }
};

export function NotificationItem({
  id,
  type,
  title,
  message,
  date,
  isRead,
  onRead,
}: NotificationItemProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-4 p-4 rounded-lg transition-colors cursor-pointer hover:bg-gray-50",
        !isRead && "bg-blue-50"
      )}
      onClick={() => onRead(id)}
    >
      <div className="flex-shrink-0">{getNotificationIcon(type)}</div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <h4 className="text-sm font-medium text-gray-900">{title}</h4>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{message}</p>
      </div>
    </div>
  );
}