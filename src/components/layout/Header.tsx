import logo from "@/assets/logo.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { useStore } from "@/contexts/StoreContext";
import { SearchResults } from "@/components/SearchResults";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const { state } = useStore();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-soft">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-smooth">
              <Globe className="w-5 h-5 text-white" />
            </div>
            
              <img src={logo} alt="Logo" />

            {/* <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DropMart
            </span> */}
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/categories" className="text-sm font-medium hover:text-primary transition-smooth hover:scale-105">
              Categories
            </Link>
            <Link to="/suppliers" className="text-sm font-medium hover:text-primary transition-smooth hover:scale-105">
              Suppliers
            </Link>
            <Link to="/wholesale" className="text-sm font-medium hover:text-primary transition-smooth hover:scale-105">
              Wholesale
            </Link>
            <Link to="/rfq" className="text-sm font-medium hover:text-primary transition-smooth hover:scale-105">
              RFQ
            </Link>
          </nav>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-lg mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search products, suppliers, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSearchResults(true)}
              className="pl-10 bg-muted/50 border-0 focus:bg-background shadow-soft"
            />
            <SearchResults 
              query={searchQuery}
              isVisible={showSearchResults}
              onClose={() => setShowSearchResults(false)}
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost" size="sm" className="hover:scale-105 transition-smooth">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" size="sm" className="hover:scale-105 transition-smooth">
                Sign Up
              </Button>
            </Link>
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="relative hover:scale-110 transition-smooth">
                <Heart className="w-5 h-5" />
                {state.wishlistCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center animate-scale-in">
                    {state.wishlistCount}
                  </Badge>
                )}
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative hover:scale-110 transition-smooth">
                <ShoppingCart className="w-5 h-5" />
                {state.cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center animate-scale-in">
                    {state.cartCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur animate-fade-in">
          <div className="container py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search products..."
                className="pl-10 bg-muted/50 border-0"
              />
            </div>
            
            {/* Mobile Navigation */}
            <nav className="space-y-3">
              <Link to="/categories" className="block py-2 text-sm font-medium hover:text-primary transition-smooth">
                Categories
              </Link>
              <Link to="/suppliers" className="block py-2 text-sm font-medium hover:text-primary transition-smooth">
                Suppliers
              </Link>
              <Link to="/wholesale" className="block py-2 text-sm font-medium hover:text-primary transition-smooth">
                Wholesale
              </Link>
              <Link to="/rfq" className="block py-2 text-sm font-medium hover:text-primary transition-smooth">
                RFQ
              </Link>
            </nav>
            
            {/* Mobile Actions */}
            <div className="flex gap-3 pt-3 border-t">
              <Link to="/login" className="flex-1">
                <Button variant="outline" size="sm" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/signup" className="flex-1">
                <Button variant="default" size="sm" className="w-full">
                  Sign Up
                </Button>
              </Link>
              <Link to="/wishlist">
                <Button variant="ghost" size="icon" className="relative">
                  <Heart className="w-5 h-5" />
                  {state.wishlistCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center">
                      {state.wishlistCount}
                    </Badge>
                  )}
                </Button>
              </Link>
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  {state.cartCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                      {state.cartCount}
                    </Badge>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};