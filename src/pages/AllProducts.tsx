import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart, MapPin, Filter, Grid, List } from "lucide-react";
import { Link } from "react-router-dom";
import { useStore } from "@/contexts/StoreContext";
import { toast } from "sonner";

const allProducts = [
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
    tag: "Hot Selling",
    category: "Electronics"
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
    tag: "New Arrival",
    category: "Wearables"
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
    tag: "Best Value",
    category: "Electronics"
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
    tag: "Trending",
    category: "Home & Garden"
  },
  {
    id: 5,
    name: "Gaming Mechanical Keyboard",
    price: "$35.99",
    originalPrice: "$59.99",
    rating: 4.9,
    reviews: 1234,
    moq: "25 pieces",
    supplier: "GameGear Pro",
    location: "Taipei, Taiwan",
    image: "/api/placeholder/300/300",
    discount: "40% OFF",
    tag: "Premium",
    category: "Electronics"
  },
  {
    id: 6,
    name: "Yoga Mat Non-Slip Premium",
    price: "$15.99",
    originalPrice: "$29.99",
    rating: 4.7,
    reviews: 856,
    moq: "50 pieces",
    supplier: "FitLife Solutions",
    location: "Mumbai, India",
    image: "/api/placeholder/300/300",
    discount: "47% OFF",
    tag: "Trending",
    category: "Sports"
  }
];

const ProductCard = ({ product, view }: { product: typeof allProducts[0], view: 'grid' | 'list' }) => {
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

  if (view === 'list') {
    return (
      <Card className="hover:shadow-medium transition-smooth">
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="w-24 h-24 relative overflow-hidden rounded-lg">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              <Badge className="absolute top-1 left-1 text-xs bg-destructive">{product.discount}</Badge>
            </div>
            <div className="flex-1 space-y-2">
              <Link to={`/product/${product.id}`}>
                <h3 className="font-semibold hover:text-primary transition-smooth">{product.name}</h3>
              </Link>
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary">{product.price}</span>
                <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">({product.reviews})</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3" />
                <span>{product.location}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Button size="sm" onClick={handleAddToCart}>
                <ShoppingCart className="w-4 h-4 mr-1" />
                Add to Cart
              </Button>
              <Button size="sm" variant="outline" onClick={handleAddToWishlist}>
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="group cursor-pointer hover-lift border-0 shadow-soft hover:shadow-medium transition-smooth overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-smooth" />
        <div className="absolute top-3 left-3">
          <Badge className="bg-destructive text-destructive-foreground font-semibold">{product.discount}</Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="font-medium">{product.tag}</Badge>
        </div>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-smooth">{product.name}</h3>
        </Link>
        
        <div className="flex items-center gap-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">{product.rating} ({product.reviews})</span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">{product.price}</span>
            <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
          </div>
          
          <div className="text-xs text-muted-foreground">MOQ: {product.moq}</div>
          
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span>{product.location}</span>
          </div>
          
          <div className="text-xs font-medium text-secondary">{product.supplier}</div>
        </div>

        <div className="flex gap-2">
          <Button className="flex-1" size="sm" onClick={handleAddToCart}>
            <ShoppingCart className="w-4 h-4 mr-1" />
            Add to Cart
          </Button>
          <Button size="sm" variant="outline" onClick={handleAddToWishlist}>
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [category, setCategory] = useState("all");
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "all" || product.category.toLowerCase() === category.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", ""));
      case "price-high":
        return parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", ""));
      case "rating":
        return b.rating - a.rating;
      case "reviews":
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">All Products</h1>
            <p className="text-muted-foreground">Discover millions of products from verified suppliers worldwide</p>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div className="flex gap-4">
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="wearables">Wearables</SelectItem>
                    <SelectItem value="home & garden">Home & Garden</SelectItem>
                    <SelectItem value="sports">Sports</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="reviews">Most Reviews</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-lg p-1">
                  <Button
                    size="sm"
                    variant={view === 'grid' ? 'default' : 'ghost'}
                    onClick={() => setView('grid')}
                    className="px-3"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant={view === 'list' ? 'default' : 'ghost'}
                    onClick={() => setView('list')}
                    className="px-3"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-4">
            <p className="text-muted-foreground">
              Showing {sortedProducts.length} of {allProducts.length} products
            </p>
          </div>

          {/* Products Grid/List */}
          <div className={view === 'grid' 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "space-y-4"
          }>
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} view={view} />
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AllProducts;