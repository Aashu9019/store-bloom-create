import { Trash2, ShoppingCart, Heart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useStore } from "@/contexts/StoreContext";
import { toast } from "sonner";

export default function Wishlist() {
  const { state, dispatch } = useStore();

  const removeFromWishlist = (id: number) => {
    dispatch({
      type: 'REMOVE_FROM_WISHLIST',
      payload: id
    });
    toast.success("Removed from wishlist");
  };

  const moveToCart = (id: number) => {
    dispatch({
      type: 'MOVE_TO_CART',
      payload: id
    });
    toast.success("Moved to cart!");
  };

  if (state.wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-16">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
              <Heart className="w-12 h-12 text-muted-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4">Your wishlist is empty</h1>
              <p className="text-muted-foreground mb-6">
                Save your favorite products for later
              </p>
              <Link to="/">
                <Button size="lg" className="hover:scale-105 transition-smooth">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Start Shopping
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="mb-8 animate-fade-in">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth mb-4">
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl font-bold">My Wishlist ({state.wishlistCount} items)</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {state.wishlist.map((item, index) => (
            <Card 
              key={item.id} 
              className="group hover-lift shadow-soft hover:shadow-medium transition-smooth animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-background/80 backdrop-blur hover:bg-destructive hover:text-destructive-foreground hover:scale-110 transition-smooth"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
              
              <CardContent className="p-4 space-y-3">
                <div>
                  <Link to={`/product/${item.id}`}>
                    <h3 className="font-semibold text-sm line-clamp-2 hover:text-primary transition-smooth">
                      {item.name}
                    </h3>
                  </Link>
                  
                  <div className="flex items-center gap-1 mt-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-xs ${
                            i < Math.floor(item.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({item.reviews})
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                    <span className="text-sm text-muted-foreground line-through">
                      {item.originalPrice}
                    </span>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    MOQ: {item.moq}
                  </div>
                  
                  <div className="text-xs font-medium text-secondary">
                    {item.supplier}
                  </div>
                </div>

                <Button 
                  className="w-full hover:scale-105 transition-smooth" 
                  size="sm"
                  onClick={() => moveToCart(item.id)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Move to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}