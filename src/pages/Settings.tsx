import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { PricingPlans } from "@/components/pricing/PricingPlans";

export default function Settings() {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto">
        <PricingPlans />
      </main>
    </div>
  );
}