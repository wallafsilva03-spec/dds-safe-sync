import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { DDSProvider } from "@/contexts/DDSContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Login from "./pages/Login";
import Index from "./pages/Index";
import DDSList from "./pages/DDSList";
import DDSSign from "./pages/DDSSign";
import MeusDDS from "./pages/MeusDDS";
import Dashboard from "./pages/Dashboard";
import DDSGeral from "./pages/DDSGeral";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <DDSProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Navigate to="/dds" replace />} />
              <Route
                path="/old"
                element={
                  <ProtectedRoute>
                    <Index />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dds"
                element={
                  <ProtectedRoute>
                    <DDSList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dds/:id"
                element={
                  <ProtectedRoute>
                    <DDSSign />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/meus-dds"
                element={
                  <ProtectedRoute>
                    <MeusDDS />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dds-geral"
                element={
                  <ProtectedRoute allowedRoles={["admin]}>
                    <DDSGeral />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </DDSProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
