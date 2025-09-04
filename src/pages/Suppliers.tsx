import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Search, MapPin, Users, Package, Filter } from "lucide-react";

const suppliers = [
  {
    id: 1,
    name: "TechHub Electronics",
    country: "China",
    city: "Shenzhen",
    rating: 4.8,
    reviews: 2547,
    products: 15000,
    minOrder: "$100",
    responseRate: 98,
    category: "Electronics",
    verified: true,
    logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=100&h=100&fit=crop&crop=center"
  },
  {
    id: 2,
    name: "Fashion Forward Co.",
    country: "Turkey",
    city: "Istanbul", 
    rating: 4.6,
    reviews: 1834,
    products: 8500,
    minOrder: "$50",
    responseRate: 95,
    category: "Fashion",
    verified: true,
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center"
  },
  {
    id: 3,
    name: "Home Essentials Ltd",
    country: "India",
    city: "Mumbai",
    rating: 4.7,
    reviews: 956,
    products: 5200,
    minOrder: "$75",
    responseRate: 92,
    category: "Home & Garden",
    verified: true,
    logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=100&h=100&fit=crop&crop=center"
  }
];

export default function Suppliers() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary via-secondary to-primary/50">
          <div className="container text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Verified Suppliers
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Connect with thousands of verified suppliers worldwide and grow your dropshipping business
            </p>
            
            {/* Search Bar */}
            <div className="flex max-w-2xl mx-auto bg-white rounded-lg shadow-medium p-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search suppliers, products, or countries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-0 focus:ring-0 text-foreground"
                />
              </div>
              <Button size="lg" className="px-8">
                Search
              </Button>
            </div>
          </div>
        </section>

        {/* Filters and Results */}
        <section className="py-12">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Top Suppliers</h2>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suppliers.map((supplier) => (
                <Card key={supplier.id} className="hover:shadow-medium transition-shadow border-0 shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={supplier.logo}
                        alt={supplier.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg">{supplier.name}</h3>
                          {supplier.verified && (
                            <Badge variant="secondary" className="text-xs">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                          <MapPin className="w-3 h-3" />
                          {supplier.city}, {supplier.country}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="ml-1 font-medium">{supplier.rating}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            ({supplier.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4 text-muted-foreground" />
                        <span>{supplier.products.toLocaleString()} Products</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span>{supplier.responseRate}% Response</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground">Min Order</div>
                        <div className="font-semibold">{supplier.minOrder}</div>
                      </div>
                      <Button variant="outline" size="sm">
                        Contact Supplier
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Suppliers
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}