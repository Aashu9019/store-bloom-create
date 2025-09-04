import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews, 
  isNew 
}: ProductCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="group hover:shadow-medium transition-all duration-300 border-0 shadow-soft">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <span className="bg-success text-success-foreground px-2 py-1 rounded text-xs font-medium">
                NEW
              </span>
            )}
            {discount > 0 && (
              <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-medium">
                -{discount}%
              </span>
            )}
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-3 right-3 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <h3 className="font-semibold text-lg leading-tight hover:text-primary transition-colors cursor-pointer">
              {name}
            </h3>
            
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${
                      i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({reviews})</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-foreground">${price}</span>
                {originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${originalPrice}
                  </span>
                )}
              </div>
            </div>
            
            <Button variant="premium" size="sm" className="group">
              <ShoppingCart className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;