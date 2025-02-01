import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { ProfileContent } from "@/components/profile/ProfileContent";

const Profile = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar />
        <ProfileContent />
      </div>
    </SidebarProvider>
  );
};

export default Profile;