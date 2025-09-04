import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Package, DollarSign, Users, ArrowRight, ShoppingCart } from "lucide-react";

const wholesaleProducts = [
  {
    id: 1,
    name: "Wireless Earbuds - Bulk Pack",
    category: "Electronics",
    minOrder: 100,
    unitPrice: 12.99,
    bulkPrice: 8.99,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=200&fit=crop&crop=center",
    savings: "30% off"
  },
  {
    id: 2,
    name: "Cotton T-Shirts - Mixed Sizes",
    category: "Fashion",
    minOrder: 50,
    unitPrice: 15.99,
    bulkPrice: 9.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop&crop=center",
    savings: "35% off"
  },
  {
    id: 3,
    name: "Smart Fitness Watches",
    category: "Electronics",
    minOrder: 25,
    unitPrice: 89.99,
    bulkPrice: 59.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop&crop=center",
    savings: "33% off"
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: "Better Prices",
    description: "Save up to 50% with bulk purchasing"
  },
  {
    icon: Package,
    title: "Quality Guaranteed",
    description: "Premium products from verified suppliers"
  },
  {
    icon: TrendingUp,
    title: "Higher Margins",
    description: "Increase your profit margins significantly"
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Personal account manager for wholesale orders"
  }
];

export default function Wholesale() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-secondary via-primary to-secondary/60">
          <div className="container text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Wholesale Solutions
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Scale your business with bulk purchasing. Better prices, higher margins, and premium quality products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8">
                Browse Wholesale Products
              </Button>
              <Button size="lg" variant="outline" className="px-8 text-white border-white hover:bg-white hover:text-primary">
                Request Quote
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Our Wholesale Program?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of successful dropshippers who trust our wholesale solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Wholesale Products */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Wholesale Products
              </h2>
              <p className="text-lg text-muted-foreground">
                Hand-picked products with the best wholesale margins
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wholesaleProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden border-0 shadow-soft hover:shadow-medium transition-shadow">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-success">
                      {product.savings}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Badge variant="outline" className="mb-2">
                        {product.category}
                      </Badge>
                      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Min Order:</span>
                        <span className="font-medium">{product.minOrder} units</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Unit Price:</span>
                        <span className="line-through text-muted-foreground">${product.unitPrice}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Bulk Price:</span>
                        <span className="font-bold text-primary text-lg">${product.bulkPrice}</span>
                      </div>
                    </div>

                    <Button className="w-full">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Request Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="group">
                View All Wholesale Products
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join our wholesale program today and unlock better prices, higher margins, and premium support.
            </p>
            <Button size="lg" variant="secondary" className="px-8">
              Apply for Wholesale Account
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}