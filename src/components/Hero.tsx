import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Truck } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-subtle">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                🚀 Free worldwide shipping on all orders
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Premium Products,
                <span className="gradient-primary bg-clip-text text-transparent"> Unbeatable Prices</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover thousands of high-quality products delivered directly to your door. 
                No middleman, just the best deals on trending items.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Browse Categories
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-3">
                  <Truck className="h-6 w-6 text-accent-foreground" />
                </div>
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-muted-foreground">On orders over $50</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-3">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <p className="text-sm font-medium">Secure Payment</p>
                <p className="text-xs text-muted-foreground">100% protected</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-3">
                  <Star className="h-6 w-6 text-accent-foreground" />
                </div>
                <p className="text-sm font-medium">Top Quality</p>
                <p className="text-xs text-muted-foreground">Premium products</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-medium">
              <img 
                src={heroBanner} 
                alt="Premium products showcase" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold shadow-glow">
              30% OFF
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;