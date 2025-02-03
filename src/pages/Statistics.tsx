import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { StatisticsPanel } from "@/components/statistics/StatisticsPanel";

export default function Statistics() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        <main className="flex-1 overflow-y-auto">
          <StatisticsPanel />
        </main>
      </div>
    </SidebarProvider>
  );
}