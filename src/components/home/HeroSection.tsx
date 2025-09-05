import { ArrowRight, Play, TrendingUp, Users, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4">
                <TrendingUp className="w-3 h-3 mr-1" />
                #1 Dropshipping Platform
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Connect with
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {" "}Global Suppliers
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Discover millions of products from verified suppliers worldwide. 
                Build your dropshipping business with confidence and scale globally.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group" asChild>
                <Link to="/all-products">
                  Start Sourcing Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10M+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">50K+</div>
                <div className="text-sm text-muted-foreground">Suppliers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">190+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={heroImage}
                alt="Global suppliers and products showcase"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 gradient-hero opacity-20"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white dark:bg-card rounded-lg shadow-medium p-4 animate-slide-up">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="font-semibold text-sm">50K+ Suppliers</div>
                  <div className="text-xs text-muted-foreground">Verified</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-card rounded-lg shadow-medium p-4 animate-slide-up [animation-delay:0.2s]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Fast Shipping</div>
                  <div className="text-xs text-muted-foreground">Worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};