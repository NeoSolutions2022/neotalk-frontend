import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { TranslateContent } from "@/components/translate/TranslateContent";

const Translate = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        <TranslateContent />
      </div>
    </SidebarProvider>
  );
};

export default Translate;