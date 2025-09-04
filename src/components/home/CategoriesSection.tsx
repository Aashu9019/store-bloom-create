import { 
  Smartphone, 
  ShirtIcon, 
  Home, 
  Sparkles, 
  Dumbbell, 
  Car,
  Baby,
  Utensils,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    name: "Electronics",
    icon: Smartphone,
    count: "2.5M+ Products",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    description: "Smartphones, Laptops, Gadgets"
  },
  {
    name: "Fashion",
    icon: ShirtIcon,
    count: "1.8M+ Products",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    description: "Clothing, Accessories, Shoes"
  },
  {
    name: "Home & Garden",
    icon: Home,
    count: "1.2M+ Products",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
    description: "Furniture, Decor, Tools"
  },
  {
    name: "Beauty",
    icon: Sparkles,
    count: "800K+ Products",
    color: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
    description: "Cosmetics, Skincare, Hair"
  },
  {
    name: "Sports",
    icon: Dumbbell,
    count: "600K+ Products",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    description: "Fitness, Outdoor, Equipment"
  },
  {
    name: "Automotive",
    icon: Car,
    count: "500K+ Products",
    color: "bg-red-500/10 text-red-600 dark:text-red-400",
    description: "Parts, Accessories, Tools"
  },
  {
    name: "Baby & Kids",
    icon: Baby,
    count: "400K+ Products",
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    description: "Toys, Clothing, Care"
  },
  {
    name: "Food & Beverage",
    icon: Utensils,
    count: "300K+ Products",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    description: "Snacks, Drinks, Supplements"
  }
];

export const CategoriesSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Shop by 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Category
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore millions of products across diverse categories from verified suppliers worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.name} 
                className="group cursor-pointer hover-lift border-0 shadow-soft hover:shadow-medium transition-smooth animate-fade-in bg-gradient-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-xl flex items-center justify-center ${category.color} group-hover:scale-110 transition-smooth`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-smooth">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                    <p className="text-xs font-medium text-primary">
                      {category.count}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Categories
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
          </Button>
        </div>
      </div>
    </section>
  );
};