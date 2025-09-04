import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Shield,
  Truck
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">DropStore</h3>
              <p className="text-background/80 leading-relaxed">
                Your trusted destination for premium products at unbeatable prices. 
                We bring quality directly to your doorstep.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Products</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Categories</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Customer Service</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Returns</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Track Order</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-background/80">
              Subscribe to get special offers and updates on new products.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button variant="hero" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm text-background/80">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm text-background/80">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                <span className="text-sm text-background/80">Money Back</span>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-background/60 text-sm">
                © 2024 DropStore. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;