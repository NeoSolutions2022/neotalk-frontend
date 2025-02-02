import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { SupportContent } from "@/components/support/SupportContent";

const Support = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        <SupportContent />
      </div>
    </SidebarProvider>
  );
};

export default Support;