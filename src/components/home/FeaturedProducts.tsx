import { Star, ShoppingCart, Eye, Heart, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useStore } from "@/contexts/StoreContext";
import { toast } from "sonner";

const featuredProducts = [
  {
    id: 1,
    name: "Wireless Bluetooth Earbuds Pro",
    price: "$12.50",
    originalPrice: "$25.00",
    rating: 4.8,
    reviews: 2847,
    moq: "50 pieces",
    supplier: "TechGlobal Co.",
    location: "Shenzhen, China",
    image: "/api/placeholder/300/300",
    discount: "50% OFF",
    tag: "Hot Selling"
  },
  {
    id: 2,
    name: "Smart Fitness Watch Series 6",
    price: "$28.90",
    originalPrice: "$45.00",
    rating: 4.9,
    reviews: 1856,
    moq: "30 pieces",
    supplier: "WearTech Ltd.",
    location: "Guangzhou, China",
    image: "/api/placeholder/300/300",
    discount: "36% OFF",
    tag: "New Arrival"
  },
  {
    id: 3,
    name: "Portable Power Bank 20000mAh",
    price: "$8.75",
    originalPrice: "$15.00",
    rating: 4.7,
    reviews: 3421,
    moq: "100 pieces",
    supplier: "PowerSource Inc.",
    location: "Mumbai, India",
    image: "/api/placeholder/300/300",
    discount: "42% OFF",
    tag: "Best Value"
  },
  {
    id: 4,
    name: "LED Strip Lights RGB 16.4ft",
    price: "$6.20",
    originalPrice: "$12.00",
    rating: 4.6,
    reviews: 987,
    moq: "200 pieces",
    supplier: "LightCraft Pro",
    location: "Istanbul, Turkey",
    image: "/api/placeholder/300/300",
    discount: "48% OFF",
    tag: "Trending"
  },
  {
    id: 5,
    name: "Wireless Phone Charger Pad",
    price: "$4.99",
    originalPrice: "$9.99",
    rating: 4.5,
    reviews: 1654,
    moq: "150 pieces",
    supplier: "ChargeTech Solutions",
    location: "Seoul, South Korea",
    image: "/api/placeholder/300/300",
    discount: "50% OFF",
    tag: "Limited Stock"
  },
  {
    id: 6,
    name: "Bluetooth Speaker Waterproof",
    price: "$15.30",
    originalPrice: "$24.00",
    rating: 4.8,
    reviews: 2156,
    moq: "80 pieces",
    supplier: "AudioMax Global",
    location: "Bangkok, Thailand",
    image: "/api/placeholder/300/300",
    discount: "36% OFF",
    tag: "Premium"
  }
];

const ProductCard = ({ product }: { product: typeof featuredProducts[0] }) => {
  const { dispatch } = useStore();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        quantity: 1,
        moq: product.moq,
        supplier: product.supplier,
      }
    });
    toast.success("Added to cart!");
  };

  const handleAddToWishlist = () => {
    dispatch({
      type: 'ADD_TO_WISHLIST',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
        rating: product.rating,
        reviews: product.reviews,
        moq: product.moq,
        supplier: product.supplier,
        location: product.location,
      }
    });
    toast.success("Added to wishlist!");
  };
  return (
    <Card className="group cursor-pointer hover-lift border-0 shadow-soft hover:shadow-medium transition-smooth overflow-hidden bg-gradient-card">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-destructive text-destructive-foreground font-semibold">
            {product.discount}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="font-medium">
            {product.tag}
          </Badge>
        </div>
        
        {/* Quick Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center gap-2">
          <Link to={`/product/${product.id}`}>
            <Button size="icon" variant="secondary" className="rounded-full hover:scale-110 transition-smooth">
              <Eye className="w-4 h-4" />
            </Button>
          </Link>
          <Button size="icon" variant="secondary" className="rounded-full hover:scale-110 transition-smooth" onClick={handleAddToWishlist}>
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-smooth">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">{product.price}</span>
            <span className="text-sm text-muted-foreground line-through">
              {product.originalPrice}
            </span>
          </div>
          
          <div className="text-xs text-muted-foreground">
            MOQ: {product.moq}
          </div>
          
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span>{product.location}</span>
          </div>
          
          <div className="text-xs font-medium text-secondary">
            {product.supplier}
          </div>
        </div>

        <Button className="w-full hover:scale-105 transition-smooth" size="sm" onClick={handleAddToCart}>
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export const FeaturedProducts = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Products
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked trending products with the best prices from verified suppliers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="premium" size="lg" className="group" asChild>
            <Link to="/all-products">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};