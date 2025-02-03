import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/welcome" element={<WelcomeConfirmation />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/translate" element={<Translate />} />
          <Route path="/dashboard/history" element={<History />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/support" element={<Support />} />
          <Route path="/dashboard/onboarding" element={<Onboarding />} />
          <Route path="/dashboard/feedback" element={<Feedback />} />
          <Route path="/dashboard/statistics" element={<Statistics />} />
          <Route path="/dashboard/notifications" element={<Notifications />} />
          <Route path="/500" element={<ServerError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;