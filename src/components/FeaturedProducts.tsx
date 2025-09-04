import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import product images
import earbudsImage from "@/assets/product-earbuds.jpg";
import smartwatchImage from "@/assets/product-smartwatch.jpg";
import phonecaseImage from "@/assets/product-phonecase.jpg";
import speakerImage from "@/assets/product-speaker.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: "1",
      name: "Premium Wireless Earbuds",
      price: 79.99,
      originalPrice: 129.99,
      image: earbudsImage,
      rating: 5,
      reviews: 324,
      isNew: true
    },
    {
      id: "2",
      name: "Smart Fitness Watch",
      price: 199.99,
      originalPrice: 299.99,
      image: smartwatchImage,
      rating: 4,
      reviews: 156
    },
    {
      id: "3",
      name: "Premium Phone Case",
      price: 24.99,
      originalPrice: 39.99,
      image: phonecaseImage,
      rating: 5,
      reviews: 89,
      isNew: true
    },
    {
      id: "4",
      name: "Portable Bluetooth Speaker",
      price: 149.99,
      originalPrice: 199.99,
      image: speakerImage,
      rating: 4,
      reviews: 267
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular items, carefully selected for quality and value
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;