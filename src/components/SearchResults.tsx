import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart, Filter } from "lucide-react";

interface SearchResultsProps {
  query: string;
  isVisible: boolean;
  onClose: () => void;
}

const mockResults = [
  {
    id: 1,
    name: "Wireless Bluetooth Earbuds",
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.5,
    reviews: 1247,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=200&h=200&fit=crop&crop=center",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.7,
    reviews: 856,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop&crop=center",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.3,
    reviews: 643,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&h=200&fit=crop&crop=center",
    category: "Electronics"
  }
];

export const SearchResults = ({ query, isVisible, onClose }: SearchResultsProps) => {
  const [results, setResults] = useState(mockResults);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length > 2) {
      setLoading(true);
      // Simulate search delay
      setTimeout(() => {
        const filtered = mockResults.filter(item =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
        setLoading(false);
      }, 300);
    } else {
      setResults(mockResults);
    }
  }, [query]);

  if (!isVisible) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-background border rounded-lg shadow-medium mt-2 z-50 animate-fade-in">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">
            {query ? `Search results for "${query}"` : "Popular Products"}
          </h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            ×
          </Button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full"></div>
          </div>
        ) : results.length > 0 ? (
          <>
            <div className="grid gap-4 max-h-96 overflow-y-auto">
              {results.map((product) => (
                <Card key={product.id} className="hover:shadow-soft transition-shadow cursor-pointer border-0 bg-muted/30">
                  <CardContent className="p-3">
                    <div className="flex gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">{product.name}</h4>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs">{product.rating}</span>
                          <span className="text-xs text-muted-foreground">({product.reviews})</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-semibold text-sm">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-xs text-muted-foreground line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Heart className="w-3 h-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ShoppingCart className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <Button variant="outline" className="w-full" onClick={onClose}>
                View All Results ({results.length})
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <p>No results found for "{query}"</p>
            <p className="text-sm mt-1">Try searching with different keywords</p>
          </div>
        )}
      </div>
    </div>
  );
};