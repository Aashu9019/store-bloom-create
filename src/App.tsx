import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { StoreProvider } from "@/contexts/StoreContext";
import Index from "./pages/Index";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Categories from "./pages/Categories";
import Suppliers from "./pages/Suppliers";
import Wholesale from "./pages/Wholesale";
import RFQ from "./pages/RFQ";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AllProducts from "./pages/AllProducts";
import AdminDashboard from "./pages/admin/Dashboard";
import SupplierPanel from "./pages/admin/SupplierPanel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


import React, { useEffect } from "react";

// Component to listen for Shift+Alt+A and navigate to /admin
const AdminShortcutListener = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.altKey && e.code === "KeyA") {
        e.preventDefault();
        navigate("/admin");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);
  return null;
};


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="dropmart-theme">
        <StoreProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <AdminShortcutListener />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/suppliers" element={<Suppliers />} />
                <Route path="/wholesale" element={<Wholesale />} />
                <Route path="/rfq" element={<RFQ />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/supplier-panel" element={<SupplierPanel />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </StoreProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
