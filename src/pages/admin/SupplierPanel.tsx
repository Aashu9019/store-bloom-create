import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Package, 
  Star,
  Plus,
  Edit,
  Trash2,
  Upload,
  TrendingUp,
  Users,
  ShoppingCart
} from "lucide-react";
import { toast } from "sonner";

// Dummy supplier data
const supplierInfo = {
  id: 1,
  name: "TechGlobal Co.",
  location: "Shenzhen, China",
  email: "supplier@techglobal.com",
  phone: "+86 755 1234567",
  rating: 4.8,
  totalProducts: 245,
  totalOrders: 1847,
  totalReviews: 2847
};

const supplierProducts = [
  {
    id: 1,
    name: "Wireless Bluetooth Earbuds Pro",
    price: "$12.50",
    originalPrice: "$25.00",
    stock: 5000,
    sold: 2847,
    rating: 4.8,
    reviews: 342,
    status: "active",
    image: "/api/placeholder/100/100"
  },
  {
    id: 2,
    name: "Smart Fitness Watch Series 6",
    price: "$28.90",
    originalPrice: "$45.00",
    stock: 3200,
    sold: 1856,
    rating: 4.9,
    reviews: 287,
    status: "active",
    image: "/api/placeholder/100/100"
  },
  {
    id: 3,
    name: "Portable Wireless Charger",
    price: "$15.99",
    originalPrice: "$24.99",
    stock: 1500,
    sold: 934,
    rating: 4.6,
    reviews: 156,
    status: "pending",
    image: "/api/placeholder/100/100"
  }
];

const productReviews = [
  {
    id: 1,
    productName: "Wireless Bluetooth Earbuds Pro",
    userName: "John D.",
    rating: 5,
    comment: "Amazing sound quality and battery life! Highly recommend.",
    date: "2024-01-15",
    verified: true
  },
  {
    id: 2,
    productName: "Smart Fitness Watch Series 6",
    userName: "Sarah M.",
    rating: 4,
    comment: "Great features but could use better water resistance.",
    date: "2024-01-14",
    verified: true
  },
  {
    id: 3,
    productName: "Wireless Bluetooth Earbuds Pro",
    userName: "Mike R.",
    rating: 5,
    comment: "Perfect for workouts, never fall out!",
    date: "2024-01-13",
    verified: false
  }
];

const SupplierPanel = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    originalPrice: "",
    stock: "",
    moq: "",
    category: "",
    specifications: ""
  });

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price) {
      toast.error("Please fill in required fields");
      return;
    }
    
    toast.success("Product added successfully!");
    setNewProduct({
      name: "",
      description: "",
      price: "",
      originalPrice: "",
      stock: "",
      moq: "",
      category: "",
      specifications: ""
    });
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="bg-background border-b">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Supplier Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {supplierInfo.name}</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-success">
                <Star className="w-3 h-3 mr-1 fill-current" />
                {supplierInfo.rating} Rating
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{supplierInfo.totalProducts}</div>
              <p className="text-xs text-muted-foreground">+12 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{supplierInfo.totalOrders}</div>
              <p className="text-xs text-muted-foreground">+23% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{supplierInfo.totalReviews}</div>
              <p className="text-xs text-muted-foreground">Average {supplierInfo.rating} stars</p>
            </CardContent>
          </Card>
        </div>

        {/* Management Tabs */}
        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="products">My Products</TabsTrigger>
            <TabsTrigger value="add-product">Add Product</TabsTrigger>
            <TabsTrigger value="reviews">Product Reviews</TabsTrigger>
          </TabsList>

          {/* Products Tab */}
          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle>Product Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Sold</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {supplierProducts.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-12 h-12 rounded object-cover"
                            />
                            <div>
                              <div className="font-medium">{product.name}</div>
                              <div className="text-sm text-muted-foreground">{product.reviews} reviews</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-semibold">{product.price}</div>
                            <div className="text-sm text-muted-foreground line-through">{product.originalPrice}</div>
                          </div>
                        </TableCell>
                        <TableCell>{product.stock}</TableCell>
                        <TableCell>{product.sold}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            {product.rating}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={product.status === 'active' ? 'default' : 'secondary'}>
                            {product.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Add Product Tab */}
          <TabsContent value="add-product">
            <Card>
              <CardHeader>
                <CardTitle>Add New Product</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="productName">Product Name *</Label>
                      <Input
                        id="productName"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                        placeholder="Enter product name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="price">Price *</Label>
                      <Input
                        id="price"
                        type="number"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                        placeholder="0.00"
                      />
                    </div>

                    <div>
                      <Label htmlFor="originalPrice">Original Price</Label>
                      <Input
                        id="originalPrice"
                        type="number"
                        value={newProduct.originalPrice}
                        onChange={(e) => setNewProduct({...newProduct, originalPrice: e.target.value})}
                        placeholder="0.00"
                      />
                    </div>

                    <div>
                      <Label htmlFor="stock">Stock Quantity</Label>
                      <Input
                        id="stock"
                        type="number"
                        value={newProduct.stock}
                        onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                        placeholder="100"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="moq">Minimum Order Quantity</Label>
                      <Input
                        id="moq"
                        type="number"
                        value={newProduct.moq}
                        onChange={(e) => setNewProduct({...newProduct, moq: e.target.value})}
                        placeholder="10"
                      />
                    </div>

                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Input
                        id="category"
                        value={newProduct.category}
                        onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                        placeholder="Electronics, Fashion, etc."
                      />
                    </div>

                    <div>
                      <Label htmlFor="image">Product Images</Label>
                      <Button variant="outline" className="w-full h-20">
                        <Upload className="h-6 w-6 mr-2" />
                        Upload Images
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Product Description</Label>
                  <Textarea
                    id="description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                    placeholder="Detailed product description..."
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="specifications">Product Specifications</Label>
                  <Textarea
                    id="specifications"
                    value={newProduct.specifications}
                    onChange={(e) => setNewProduct({...newProduct, specifications: e.target.value})}
                    placeholder="Product specifications, features, dimensions, etc."
                    rows={4}
                  />
                </div>

                <Button onClick={handleAddProduct} className="w-full" size="lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Product
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>Product Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Review</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Verified</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {productReviews.map((review) => (
                      <TableRow key={review.id}>
                        <TableCell className="font-medium">{review.productName}</TableCell>
                        <TableCell>{review.userName}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className="max-w-xs">
                          <div className="truncate">{review.comment}</div>
                        </TableCell>
                        <TableCell>{review.date}</TableCell>
                        <TableCell>
                          <Badge variant={review.verified ? 'default' : 'secondary'}>
                            {review.verified ? 'Verified' : 'Unverified'}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SupplierPanel;