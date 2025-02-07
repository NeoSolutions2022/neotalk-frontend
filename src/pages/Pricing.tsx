
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { PricingPlans } from "@/components/pricing/PricingPlans";

export default function Pricing() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        <main className="flex-1 overflow-y-auto">
          <PricingPlans />
        </main>
      </div>
    </SidebarProvider>
  );
}
