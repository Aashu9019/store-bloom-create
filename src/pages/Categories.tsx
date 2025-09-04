import { useState } from "react";
import { Search, Filter, Grid3X3, List, Star, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { 
  Smartphone, 
  ShirtIcon, 
  Home, 
  Sparkles, 
  Dumbbell, 
  Car,
  Baby,
  Utensils 
} from "lucide-react";

const categories = [
  {
    id: 'electronics',
    name: "Electronics",
    icon: Smartphone,
    count: "2.5M+ Products",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    description: "Smartphones, Laptops, Gadgets"
  },
  {
    id: 'fashion',
    name: "Fashion",
    icon: ShirtIcon,
    count: "1.8M+ Products",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    description: "Clothing, Accessories, Shoes"
  },
  {
    id: 'home',
    name: "Home & Garden",
    icon: Home,
    count: "1.2M+ Products",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
    description: "Furniture, Decor, Tools"
  },
  {
    id: 'beauty',
    name: "Beauty",
    icon: Sparkles,
    count: "800K+ Products",
    color: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
    description: "Cosmetics, Skincare, Hair"
  },
  {
    id: 'sports',
    name: "Sports",
    icon: Dumbbell,
    count: "600K+ Products",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    description: "Fitness, Outdoor, Equipment"
  },
  {
    id: 'automotive',
    name: "Automotive",
    icon: Car,
    count: "500K+ Products",
    color: "bg-red-500/10 text-red-600 dark:text-red-400",
    description: "Parts, Accessories, Tools"
  },
  {
    id: 'baby',
    name: "Baby & Kids",
    icon: Baby,
    count: "400K+ Products",
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    description: "Toys, Clothing, Care"
  },
  {
    id: 'food',
    name: "Food & Beverage",
    icon: Utensils,
    count: "300K+ Products",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    description: "Snacks, Drinks, Supplements"
  }
];

const products = [
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
    category: "electronics"
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
    category: "electronics"
  },
  // Add more products for demonstration
  ...Array.from({ length: 18 }, (_, i) => ({
    id: i + 3,
    name: `Product ${i + 3}`,
    price: `$${(Math.random() * 50 + 5).toFixed(2)}`,
    originalPrice: `$${(Math.random() * 100 + 50).toFixed(2)}`,
    rating: 4 + Math.random(),
    reviews: Math.floor(Math.random() * 5000 + 100),
    moq: `${Math.floor(Math.random() * 200 + 10)} pieces`,
    supplier: `Supplier ${i + 3}`,
    location: "Various",
    image: "/api/placeholder/300/300",
    discount: `${Math.floor(Math.random() * 60 + 20)}% OFF`,
    tag: ["Hot Selling", "New Arrival", "Best Value"][Math.floor(Math.random() * 3)],
    category: categories[Math.floor(Math.random() * categories.length)].id
  }))
];

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popularity');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Breadcrumb */}
        <div className="mb-8 animate-fade-in">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold">Categories</h1>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          <Card 
            className={`group cursor-pointer hover-lift border-0 shadow-soft hover:shadow-medium transition-smooth animate-fade-in ${
              selectedCategory === 'all' ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => setSelectedCategory('all')}
          >
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                <Grid3X3 className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg group-hover:text-primary transition-smooth">
                  All Categories
                </h3>
                <p className="text-sm text-muted-foreground">
                  Browse everything
                </p>
                <p className="text-xs font-medium text-primary">
                  10M+ Products
                </p>
              </div>
            </CardContent>
          </Card>
          
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.id} 
                className={`group cursor-pointer hover-lift border-0 shadow-soft hover:shadow-medium transition-smooth animate-fade-in ${
                  selectedCategory === category.id ? 'ring-2 ring-primary' : ''
                }`}
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                onClick={() => setSelectedCategory(category.id)}
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

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6 animate-slide-up">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-muted/50 border-0 focus:bg-background shadow-soft"
            />
          </div>
          
          <div className="flex gap-3">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="icon"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none hover:scale-105 transition-smooth"
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="icon"
                onClick={() => setViewMode('list')}
                className="rounded-l-none hover:scale-105 transition-smooth"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} results 
            {selectedCategory !== 'all' && (
              <span> in {categories.find(c => c.id === selectedCategory)?.name}</span>
            )}
          </p>
        </div>

        {/* Products Grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="group cursor-pointer hover-lift border-0 shadow-soft hover:shadow-medium transition-smooth overflow-hidden bg-gradient-card animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
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
                </div>
                
                <CardContent className="p-4 space-y-3">
                  <div className="space-y-2">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-smooth">
                        {product.name}
                      </h3>
                    </Link>
                    
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
                        {product.rating.toFixed(1)} ({product.reviews})
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
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          // List view would go here
          <div className="space-y-4">
            {filteredProducts.map((product, index) => (
              <Card key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-semibold hover:text-primary transition-smooth">{product.name}</h3>
                      </Link>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-lg font-bold text-primary">{product.price}</span>
                        <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                        <Badge className="bg-destructive text-destructive-foreground">{product.discount}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">MOQ: {product.moq} | {product.supplier}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}