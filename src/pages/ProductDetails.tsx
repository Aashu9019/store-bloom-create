import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { 
  Star, 
  Heart, 
  Share2, 
  ShoppingCart, 
  Plus, 
  Minus, 
  MapPin, 
  Shield, 
  Truck, 
  RotateCcw,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useStore } from "@/contexts/StoreContext";
import { toast } from "sonner";

// Mock product data - in real app, fetch from API
const getProductById = (id: string) => ({
  id: parseInt(id),
  name: "Wireless Bluetooth Earbuds Pro - Premium Sound Quality",
  price: "$12.50",
  originalPrice: "$25.00",
  rating: 4.8,
  reviews: 2847,
  moq: "50 pieces",
  supplier: "TechGlobal Co.",
  location: "Shenzhen, China",
  images: [
    "/api/placeholder/600/600",
    "/api/placeholder/600/600",
    "/api/placeholder/600/600",
    "/api/placeholder/600/600"
  ],
  discount: "50% OFF",
  tag: "Hot Selling",
  description: "Premium wireless earbuds with advanced noise cancellation technology, crystal clear sound quality, and up to 24 hours of battery life. Perfect for music lovers and professionals.",
  features: [
    "Advanced Active Noise Cancellation",
    "24-hour battery life with charging case",
    "IPX7 waterproof rating",
    "Touch controls",
    "Fast charging - 15 min for 3 hours playback",
    "Bluetooth 5.2 connectivity"
  ],
  specifications: {
    "Driver Size": "10mm",
    "Frequency Response": "20Hz - 20kHz",
    "Battery Life": "6+18 hours",
    "Charging Port": "USB-C",
    "Weight": "4.5g per earbud",
    "Connectivity": "Bluetooth 5.2"
  }
});

export default function ProductDetails() {
  const { id } = useParams();
  const { dispatch } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  if (!id) return <div>Product not found</div>;
  
  const product = getProductById(id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          id: product.id,
          name: product.name,
          price: product.price,
          originalPrice: product.originalPrice,
          image: product.images[0],
          quantity: 1,
          moq: product.moq,
          supplier: product.supplier,
        }
      });
    }
    toast.success(`Added ${quantity} items to cart!`);
  };

  const handleAddToWishlist = () => {
    dispatch({
      type: 'ADD_TO_WISHLIST',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.images[0],
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 animate-fade-in">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-smooth">Home</Link>
            <span>/</span>
            <Link to="/categories" className="hover:text-primary transition-smooth">Categories</Link>
            <span>/</span>
            <span className="text-foreground">Electronics</span>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4 animate-scale-in">
            <Card className="overflow-hidden shadow-medium">
              <div className="aspect-square relative">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-destructive text-destructive-foreground font-semibold">
                    {product.discount}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="font-medium">
                    {product.tag}
                  </Badge>
                </div>
              </div>
            </Card>
            
            {/* Image Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer overflow-hidden transition-smooth hover:scale-105 ${
                    selectedImage === index ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="aspect-square">
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6 animate-fade-in [animation-delay:0.2s]">
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-primary">{product.price}</span>
                <span className="text-xl text-muted-foreground line-through">
                  {product.originalPrice}
                </span>
                <Badge className="bg-success text-success-foreground">
                  Save 50%
                </Badge>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{product.location}</span>
                </div>
                <div className="text-sm">
                  <span className="font-medium">Supplier:</span> {product.supplier}
                </div>
                <div className="text-sm">
                  <span className="font-medium">MOQ:</span> {product.moq}
                </div>
              </div>
            </div>

            <Separator />

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  size="lg" 
                  className="flex-1 hover:scale-105 transition-smooth"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleAddToWishlist}
                  className="hover:scale-105 transition-smooth"
                >
                  <Heart className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="hover:scale-105 transition-smooth"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-success" />
                <div className="text-sm font-medium">Secure Payment</div>
              </div>
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-sm font-medium">Fast Shipping</div>
              </div>
              <div className="text-center">
                <RotateCcw className="w-8 h-8 mx-auto mb-2 text-warning" />
                <div className="text-sm font-medium">Easy Returns</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="shadow-medium animate-slide-up">
          <CardContent className="p-6">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="specifications" className="mt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">{key}:</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="text-center py-8">
                  <h4 className="font-semibold mb-2">Customer Reviews</h4>
                  <p className="text-muted-foreground">
                    {product.reviews} reviews with an average rating of {product.rating} stars
                  </p>
                  <Button variant="outline" className="mt-4">
                    Write a Review
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}