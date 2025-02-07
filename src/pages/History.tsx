import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { TranslateHistory } from "@/components/history/TranslateHistory";

const History = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        <TranslateHistory />
      </div>
    </SidebarProvider>
  );
};

export default History;