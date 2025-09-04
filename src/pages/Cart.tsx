import { useState } from "react";
import { Trash2, Plus, Minus, ShoppingCart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useStore } from "@/contexts/StoreContext";
import { toast } from "sonner";

export default function Cart() {
  const { state, dispatch } = useStore();

  const updateQuantity = (id: number, newQuantity: number) => {
    dispatch({
      type: 'UPDATE_CART_QUANTITY',
      payload: { id, quantity: newQuantity }
    });
  };

  const removeItem = (id: number) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id
    });
    toast.success("Item removed from cart");
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast.success("Cart cleared");
  };

  const subtotal = state.cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + (price * item.quantity);
  }, 0);

  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping;

  if (state.cart.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-16">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
              <ShoppingCart className="w-12 h-12 text-muted-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
              <p className="text-muted-foreground mb-6">
                Add some products to get started with your order
              </p>
              <Link to="/">
                <Button size="lg" className="hover:scale-105 transition-smooth">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Continue Shopping
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
          <h1 className="text-3xl font-bold">Shopping Cart ({state.cartCount} items)</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.cart.map((item, index) => (
              <Card key={item.id} className="animate-fade-in shadow-soft hover:shadow-medium transition-smooth" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold line-clamp-2">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Supplier: {item.supplier}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            MOQ: {item.moq}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10 hover:scale-110 transition-smooth"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-primary">{item.price}</span>
                          <span className="text-sm text-muted-foreground line-through">
                            {item.originalPrice}
                          </span>
                        </div>
                        
                        <div className="flex items-center border rounded-lg">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 hover:scale-110 transition-smooth"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 hover:scale-110 transition-smooth"
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="flex justify-between items-center pt-4">
              <Button variant="outline" onClick={clearCart} className="hover:scale-105 transition-smooth">
                Clear Cart
              </Button>
              <p className="text-sm text-muted-foreground">
                Free shipping on orders over $100
              </p>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="shadow-medium sticky top-24 animate-scale-in">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal ({state.cartCount} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button className="w-full size-lg gradient-primary hover:scale-105 transition-smooth">
                  Proceed to Checkout
                </Button>
                
                <div className="text-center">
                  <Link to="/" className="text-sm text-primary hover:underline">
                    Continue Shopping
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}