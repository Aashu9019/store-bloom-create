import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Headphones, 
  Watch, 
  Camera, 
  Gamepad2, 
  Home,
  Dumbbell,
  Shirt
} from "lucide-react";

const Categories = () => {
  const categories = [
    { icon: Smartphone, name: "Electronics", count: "2.5k+ items" },
    { icon: Headphones, name: "Audio", count: "890 items" },
    { icon: Watch, name: "Wearables", count: "650 items" },
    { icon: Camera, name: "Photography", count: "420 items" },
    { icon: Gamepad2, name: "Gaming", count: "1.2k+ items" },
    { icon: Home, name: "Home & Living", count: "3.1k+ items" },
    { icon: Dumbbell, name: "Fitness", count: "780 items" },
    { icon: Shirt, name: "Fashion", count: "2.8k+ items" }
  ];

  return (
    <section className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you're looking for in our carefully curated categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.name} 
                className="group hover:shadow-medium transition-all duration-300 cursor-pointer border-0 shadow-soft hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;