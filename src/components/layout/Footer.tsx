import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                DropMart
              </span>
            </div>
            <p className="text-muted-foreground">
              Connect with global suppliers and build your dropshipping business with confidence. 
              Access millions of products from verified suppliers worldwide.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                About Us
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                How It Works
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                Become a Supplier
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                Pricing
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                Success Stories
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                Blog
              </a>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Support</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                Help Center
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                Contact Us
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                Live Chat
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                FAQs
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                Shipping Info
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                Return Policy
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to get the latest products, deals, and supplier updates.
            </p>
            <div className="space-y-3">
              <Input placeholder="Enter your email" className="bg-muted/50" />
              <Button className="w-full">Subscribe</Button>
            </div>
            <div className="space-y-3 pt-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                support@dropmart.com
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Global Headquarters
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 DropMart. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};