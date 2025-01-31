import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { SettingsContent } from "@/components/settings/SettingsContent";
import { SidebarProvider } from "@/components/ui/sidebar";

const Settings = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        <SettingsContent />
      </div>
    </SidebarProvider>
  );
};

export default Settings;