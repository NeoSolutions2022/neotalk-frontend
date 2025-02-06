
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Translate from "./pages/Translate";
import History from "./pages/History";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import ServerError from "./pages/ServerError";
import WelcomeConfirmation from "./pages/WelcomeConfirmation";
import Onboarding from "./pages/Onboarding";
import Feedback from "./pages/Feedback";
import Statistics from "./pages/Statistics";
import Notifications from "./pages/Notifications";
import Community from "./pages/Community";
import Pricing from "./pages/Pricing";
import Profile from "./pages/Profile";
import * as React from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BrowserRouter>
            <AuthProvider>
              <Toaster />
              <Sonner />
              <Routes>
                {/* Public routes */}
                <Route path="/" element={<Index />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/welcome" element={<WelcomeConfirmation />} />
                
                {/* Dashboard routes */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/translate" element={<Translate />} />
                <Route path="/dashboard/history" element={<History />} />
                <Route path="/dashboard/settings" element={<Settings />} />
                <Route path="/dashboard/pricing" element={<Pricing />} />
                <Route path="/dashboard/support" element={<Support />} />
                <Route path="/dashboard/onboarding" element={<Onboarding />} />
                <Route path="/dashboard/feedback" element={<Feedback />} />
                <Route path="/dashboard/statistics" element={<Statistics />} />
                <Route path="/dashboard/notifications" element={<Notifications />} />
                <Route path="/dashboard/community" element={<Community />} />
                <Route path="/dashboard/profile" element={<Profile />} />
                
                {/* Error routes */}
                <Route path="/500" element={<ServerError />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
