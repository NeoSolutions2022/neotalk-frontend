import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { TranslateFeedback } from "@/components/feedback/TranslateFeedback";

export default function Feedback() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-3xl font-bold mb-8">Avaliação de Traduções</h1>
          <TranslateFeedback />
        </main>
      </div>
    </SidebarProvider>
  );
}