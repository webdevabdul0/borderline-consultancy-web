
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ApplicationProcess from "./pages/ApplicationProcess";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import DiscountPopup from "./components/DiscountPopup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DiscountPopup />
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />
          <Route path="/application-process" element={<Layout><ApplicationProcess /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/terms" element={<Layout><Terms /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
